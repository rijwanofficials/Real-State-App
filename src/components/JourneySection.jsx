import { FaHandHoldingUsd } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import house1 from "../assets/house1.png";
import house2 from "../assets/house2.png";

function JourneySection() {
    return (
        <section className="pt-16 pb-8 px-6 bg-white">
            <div className="max-w-[1280px] mx-auto">
                {/* ----------------- Form + Heading Section ----------------- */}
                <div className="mb-16">
                    {/* Heading + Subtext */}
                    <div className="text-center md:text-left mb-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A]">
                            Start Your Journey Today!
                        </h2>
                        <p className="text-gray-600 mt-3 max-w-md">
                            Create a profile in seconds and find your ideal home.
                        </p>
                    </div>

                    {/* Form Row */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="flex-1 min-w-[180px] px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                        />
                        <select className="flex-1 min-w-[180px] px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]">
                            <option>Select User Type</option>
                            <option>Buyer</option>
                            <option>Renter</option>
                            <option>Agent</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Enter Your Location"
                            className="flex-1 min-w-[180px] px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                        />
                        <button className="px-6 py-3 bg-[#1E3A8A] text-white rounded-full font-semibold hover:bg-blue-900 transition">
                            Continue
                        </button>
                    </div>
                </div>


                {/* ----------------- Properties Section ----------------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Side Images */}
                    <div className="flex justify-center relative">
                        <img
                            src={house1}
                            alt="Modern House"
                            className="w-[300px] md:w-[400px] lg:w-[480px] rounded-lg shadow-md"
                        />
                        <img
                            src={house2}
                            alt="Wooden House"
                            className="w-[240px] md:w-[300px] lg:w-[360px] rounded-lg shadow-md absolute -bottom-8 -right-6"
                        />
                    </div>

                    {/* Right Side Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-8">
                            We Provide Latest Properties <br /> For Our Valuable Clients
                        </h2>

                        <div className="flex items-start gap-4 mb-6">
                            <FaHandHoldingUsd size={28} className="text-[#1E3A8A]" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Budget Friendly
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Lorem ipsum dolor sit amet consectetur. Venenatis sed ac
                                    aenean tempus. Lectus quis pretium varius iaculis sed.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 mb-6">
                            <FaShieldAlt size={28} className="text-[#1E3A8A]" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Trusted By Thousand
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Lorem ipsum dolor sit amet consectetur. Venenatis sed ac
                                    aenean tempus. Lectus quis pretium varius iaculis sed.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaMapMarkerAlt size={28} className="text-[#1E3A8A]" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Prime Location
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Lorem ipsum dolor sit amet consectetur. Venenatis sed ac
                                    aenean tempus. Lectus quis pretium varius iaculis sed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { JourneySection };
