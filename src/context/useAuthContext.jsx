import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { ShowErrorToast, ShowSuccessToast } from "../utils/ToastifyHelper";

// Auth Context
const AuthContext = createContext();

// Filter Context
const FilterContext = createContext();

const PropertyContext = createContext();

const AppContextProvider = ({ children }) => {
  // Auth States
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [appLoading, setAppLoading] = useState(true);

  // Filter States
  const [purpose, setPurpose] = useState("For Rent");
  const [type, setType] = useState("House");
  const [location, setLocation] = useState("Indonesia");

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing"
      );
      if (!res.ok) throw new Error("Failed to fetch properties");
      const data = await res.json();
      setProperties(data);
    } catch (err) {
      ShowErrorToast(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (formData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const idToken = await userCredential.user.getIdToken();

      // Call backend to create user record
      await fetch("http://localhost:3700/api/v1/users", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idToken}`,
          "Content-Type": "application/json",
        },
      });

      ShowSuccessToast("Signup successful! Please login.");
      return { userCredential, idToken };
    } catch (error) {
      ShowErrorToast(error.message);
      throw error;
    }
  };

  const handleLogin = async (formData) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = auth.currentUser;
      console.log("Firebase UID:", user.uid);
      const idToken = await userCredential.user.getIdToken();
      console.log("User credential in Login", userCredential, idToken);

      // Call backend to ensure user exists in DB
      await fetch("http://localhost:3700/api/v1/users", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idToken}`,
          "Content-Type": "application/json",
        },
      });

      ShowSuccessToast("Login successful!");
      return { userCredential, idToken };
    } catch (error) {
      ShowErrorToast(error.message);
      throw error;
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      ShowSuccessToast("Logged out successfully!");
    } catch (error) {
      ShowErrorToast("Logout failed: " + error.message);
    }
  };

  const getUserData = async (idToken) => {
    try {
      const response = await fetch("http://localhost:3700/api/v1/users/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${idToken}`, // Send token here
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      ShowErrorToast(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setIsLoggedIn(!!firebaseUser);
      setAppLoading(false);
      fetchProperties();
    });
    return unsubscribe;
  }, []);

  const authValues = {
    user,
    isLoggedIn,
    appLoading,
    handleSignup,
    handleLogin,
    handleLogout,
    getUserData,
  };

  const filterValues = {
    purpose,
    setPurpose,
    type,
    setType,
    location,
    setLocation,
  };

  const propertyValues = {
    properties,
    loading,
  };

  return (
    <AuthContext.Provider value={authValues}>
      <FilterContext.Provider value={filterValues}>
        <PropertyContext.Provider value={propertyValues}>
          {children}
        </PropertyContext.Provider>
      </FilterContext.Provider>
    </AuthContext.Provider>
  );
};

// Custom hooks for consuming contexts
const useAuthContext = () => useContext(AuthContext);
const useFilterContext = () => useContext(FilterContext);
const usePropetyContext = () => useContext(PropertyContext);

export {
  AuthContext,
  FilterContext,
  PropertyContext,
  AppContextProvider,
  // eslint-disable-next-line react-refresh/only-export-components
  useAuthContext,
  // eslint-disable-next-line react-refresh/only-export-components
  useFilterContext,

  // eslint-disable-next-line react-refresh/only-export-components
  usePropetyContext,
};
