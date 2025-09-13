import { FiMapPin, FiHome, FiGlobe, FiChevronDown, FiSearch } from "react-icons/fi";
import heroImage from "../assets/Hero.png";

function Hero() {
    return (
        <section className="px-[80px] pt-10 pb-0 relative">
            {/* Hero Image as background */}
            <div className="relative rounded-3xl h-[480px] overflow-hidden flex flex-col items-center text-center">
                {/* Image */}
                <img
                    src={heroImage}
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover brightness-120"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
                {/* Content */}
                <div className="relative z-10 max-w-[1106px] w-full flex flex-col items-center">
                    {/* Text Section */}
                    <header className="mt-[57px] flex flex-col items-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white whitespace-nowrap">
                            Find Your Dream Home in One Click!
                        </h1>
                        <p className="mt-[15px] text-[20px] text-gray-100">
                            Discover, Buy, or Rent Verified Properties with Ease.
                        </p>
                    </header>
                    {/* Search Section */}
                    <div className="mt-48 w-full px-28">
                        <div className="flex justify-between items-center w-full">
                            {/* Input Box (Left) */}
                            <div className="flex items-center bg-white rounded-md shadow-lg px-4 py-3 w-[600px] h-14">
                                <FiMapPin className="text-gray-500 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Search Location..."
                                    className="flex-1 outline-none text-gray-700"
                                />
                                <FiSearch className="text-gray-500 ml-2" />
                            </div>

                            {/* Button (Right) */}
                            <button
                                className="ml-20 w-52 h-12 flex items-center justify-center 
                 bg-white text-blue-600 border border-blue-600 
                 rounded-3xl font-medium transition 
                 hover:bg-blue-600 hover:text-white"
                            >
                                List Your Property
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Floating Filter Bar */}
            <div className="relative z-20 flex justify-center px-4">
                <div className="mt-[-40px] w-full max-w-[1106px] h-[102px] flex items-center justify-between bg-white shadow-xl rounded-full px-6 md:px-8">

                    {/* For Rent */}
                    <div className="flex items-center justify-center gap-2 w-[194px] h-[58px] border rounded-full text-gray-700 cursor-pointer">
                        <FiMapPin />
                        <span>For Rent</span>
                        <FiChevronDown className="ml-1" />
                    </div>

                    {/* House */}
                    <div className="flex items-center justify-center gap-2 w-[225px] h-[58px] border rounded-full text-gray-700 cursor-pointer">
                        <FiHome />
                        <span>House</span>
                        <FiChevronDown className="ml-1" />
                    </div>

                    {/* Location */}
                    <div className="flex items-center justify-center gap-2 w-[225px] h-[58px] border rounded-full text-gray-700 cursor-pointer">
                        <FiGlobe />
                        <span>Indonesia</span>
                        <FiChevronDown className="ml-1" />
                    </div>

                    {/* Button */}
                    <button className="w-[225px] h-[58px] bg-[#2563EB] text-white rounded-full font-medium hover:bg-[#1E40AF] transition">
                        Find Property
                    </button>
                </div>
            </div>
        </section>
    );
}

export { Hero };
