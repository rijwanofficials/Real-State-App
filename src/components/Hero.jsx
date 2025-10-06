import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMapPin, FiSearch } from "react-icons/fi";
import heroImage from "../assets/Hero.png";
import { FloatingFilterBar } from "./FloatingFilterBar";
function Hero() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleFind = () => {
      navigate("/sell", { state: { searchTerm } });  
  };

  return (
    <section className="px-4 md:px-20 pt-10 pb-0 relative">
      <div className="relative rounded-3xl h-[480px] overflow-hidden flex flex-col items-center text-center">
        <img
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-[1.2]"
        />
        <div className="relative z-10 max-w-[1106px] w-full flex flex-col items-center px-4">
          <header className="mt-[57px] flex flex-col items-center px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white whitespace-normal md:whitespace-nowrap">
              Find Your Dream Home in One Click!
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-[20px] text-gray-100 max-w-xl">
              Discover, Buy, or Rent Verified Properties with Ease.
            </p>
          </header>

          <div className="mt-36 md:mt-48 w-full max-w-[1106px] px-0 sm:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-0">
              <div className="flex items-center bg-white rounded-md shadow-lg px-4 py-3 w-full md:w-[600px] h-14">
                <FiMapPin className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Search Location..."
                  className="flex-1 outline-none text-gray-700"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  value={searchTerm}
                />
                <FiSearch className="text-gray-500 ml-2" />
              </div>

              <button
                onClick={handleFind}
                className="w-full md:w-52 h-12 flex items-center justify-center bg-white text-blue-600 border border-blue-600 rounded-3xl font-medium transition hover:bg-blue-600 hover:text-white hover:cursor-pointer"
              >
                List Your Property
              </button>
            </div>
          </div>
        </div>
      </div>

      <FloatingFilterBar onFind={handleFind} />
    </section>
  );
}

export { Hero };
