import { Link } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";

const PageNotFound = () => {
  const { isLoggedIn } = useAuthContext();

  return (
    <div className="flex flex-col justify-center items-center mt-50 px-4 min-h-screen">
      {/* mt-28 pushes content below fixed navbar */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        Oops... Page not found
      </h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>

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
  );
};

export { PageNotFound };
