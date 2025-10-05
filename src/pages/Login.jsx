import { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaApple,
  FaFacebookF,
  FaGoogle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/login.png";
import { useAuthContext } from "../context/useAuthContext";
import { ShowErrorToast } from "../utils/ToastifyHelper";
import { LoginSignupShimmer } from "./ShimmerUi";

const Login = () => {
  const { handleLogin } = useAuthContext();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const formData = { email, password };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await handleLogin(formData);
      navigate("/");
    } catch (err) {
      ShowErrorToast(err.message || "Failed to login.");
    }

    setLoading(false);
  };

  if (loading) {
    return <LoginSignupShimmer />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Side - Form */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Log In</h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="w-full outline-none"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Your Password"
                  className="w-full outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500 ml-2"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="flex justify-between items-center mt-2">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="accent-blue-700" /> Remember Me
                </label>
                <a href="#" className="text-sm text-red-600 hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-medium hover:bg-blue-800 active:scale-95 transition disabled:opacity-50"
            >
              {loading ? "Logging In..." : "Log In"}
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-6">
            <div className="flex items-center justify-center gap-4">
              <button className="p-3 border rounded-full hover:bg-gray-100">
                <FaApple size={20} />
                <span className="sr-only">Login with Apple</span>
              </button>
              <button className="p-3 border rounded-full hover:bg-gray-100 text-blue-600">
                <FaFacebookF size={20} />
                <span className="sr-only">Login with Facebook</span>
              </button>
              <button className="p-3 border rounded-full hover:bg-gray-100 text-red-600">
                <FaGoogle size={20} />
                <span className="sr-only">Login with Google</span>
              </button>
            </div>
          </div>

          <p className="text-sm text-center mt-4 text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-700 font-medium hover:underline"
            >
              Create One
            </Link>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block">
          <img
            src={loginImg}
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export { Login };
