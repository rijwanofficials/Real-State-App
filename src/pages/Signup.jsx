import { useState } from "react";
import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";
import { Link } from "react-router";
import signupImg from "../assets/signup.png";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup Form Data:", formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

                {/* Left Side - Form */}
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">
                        Create New Account
                    </h2>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                                <FaUser className="text-gray-400 mr-2" />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter Your Full Name"
                                    className="w-full outline-none"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Email Address
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                                <FaEnvelope className="text-gray-400 mr-2" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
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
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Confirm Password
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                                <FaLock className="text-gray-400 mr-2" />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm Your Password"
                                    className="w-full outline-none"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="text-gray-500 ml-2"
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-700 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="text-sm text-center mt-4 text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-700 font-medium hover:underline">
                            Log In
                        </Link>
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="hidden md:block">
                    <img
                        src={signupImg}
                        alt="Signup"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export { Signup };
