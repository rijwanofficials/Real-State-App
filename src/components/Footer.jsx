import { FaHome } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#4C5FA4] text-white pt-12 mt-24 pb-16">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Top Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get in Touch with Us
          </h2>
          <p className="text-lg mt-3 text-gray-200">
            Subscribe now for exclusive property insights and deals!
          </p>
        </div>

        {/* Subscription Form */}
        <div className="flex justify-center">
          <div className="flex w-full max-w-lg bg-gray-200 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-gray-700 focus:outline-none bg-transparent text-sm md:text-base"
            />
            <button className="px-6 bg-[#1E3A8A] text-white font-medium hover:bg-blue-900 transition text-sm md:text-base">
              Submit
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 text-sm text-gray-200 gap-6 text-center md:text-left">
          {/* Left Side Logo */}
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaHome className="text-2xl md:text-3xl" />
            <span className="font-bold text-lg md:text-xl">PropBot</span>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:underline">
              For Sale
            </a>
            <a href="#" className="hover:underline">
              Rentals
            </a>
            <a href="#" className="hover:underline">
              New Projects
            </a>
            <a href="#" className="hover:underline">
              Property News
            </a>
          </div>

          {/* Right Side Copyright */}
          <div className="text-center md:text-right">
            ©2025 Propbot. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
