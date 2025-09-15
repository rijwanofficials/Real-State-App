import { Link } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";
import { Navbar } from "../components/Navbar";

const PageNotFound = () => {
  const { isLoggedIn } = useAuthContext();

  return (<>
  <Navbar />
  
    <div className="flex flex-col justify-center items-center text-center px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        Oops... Page not found
      </h1>
      <p className="text-gray-600 mb-6 max-w-md">
To see This Page First Logged In!      </p>

      {isLoggedIn ? (
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
        >
          Go to HomePage
        </Link>
      ) : (
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
        >
          Go to LogIn Page
        </Link>
      )}
    </div>
  </>
     
  );
};

export { PageNotFound };
