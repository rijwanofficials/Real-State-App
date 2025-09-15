import { FaStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import fallback1 from "../assets/grid1.png";
import fallback2 from "../assets/grid2.png";
import fallback3 from "../assets/grid3.png";
import fallback4 from "../assets/grid4.png";
import { usePropetyContext } from "../context/useAuthContext";
import { Navigate, useNavigate } from "react-router";

const fallbackImages = [fallback1, fallback2, fallback3, fallback4];

function PropertiesRental() {
  const navigate=useNavigate()
const {properties,loading}= usePropetyContext()
  if (loading) {
    return (
      <section className="pt-16 pb-8 px-6">
        <div className="max-w-[1280px] mx-auto text-center text-gray-600">
          Loading properties...
        </div>
      </section>
    );
  }

  return (
    <section className="pt-16 pb-8 px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading & ViewAllRentals Button */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-10 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A]">
              Find The Perfect Rental Home
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl text-base md:text-lg">
              Browse our top-rated properties for rent, featuring premium listings tailored to your needs. Find your dream home today!
            </p>
          </div>
          <div>
            <button
              onClick={() => navigate("/rent")}
              className="px-6 py-2 rounded-full font-semibold transition bg-blue-700 text-white hover:bg-blue-900"
            >
              ViewAllRentals
            </button>
          </div>
        </div>
        {/* Properties Carousel */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
          {properties.length > 0 ? (
            properties.slice(0, 10).map((property, i) => (
              <div
                key={property.id}
                className="shadow-md rounded-2xl bg-gray-100 w-[280px] sm:w-[300px] md:w-[350px] h-[470px] sm:h-[500px] flex-shrink-0 flex flex-col overflow-hidden hover:shadow-xl transition snap-center"
              >
                <img
                  src={property.image || fallbackImages[i % fallbackImages.length]}
                  alt={property.city || property.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = fallbackImages[i % fallbackImages.length];
                  }}
                  className="w-full h-[200px] sm:h-[220px] object-cover p-2 rounded-2xl"
                />
                <div className="flex flex-col justify-between flex-1 p-4">
                  <h3 className="font-semibold text-lg mb-1">{property.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
                    <FiMapPin size={18} className="text-gray-400" />
                    {property.buildingNumber} {property.cardinalDirection} St, {property.city}, {property.state}, {property.country}
                  </p>
                  <div className="mb-3 text-sm text-gray-700">
                    <strong>Owner:</strong> {property.ownerName}
                  </div>
                  <div className="flex justify-between items-center text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" /> 4.5/5
                    </span>
                    <span className="text-xs">
                      {new Date(property.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 flex-grow">
                    {property.description || "Beautiful rental property with great amenities."}
                  </p>
                  <div className="flex justify-between items-center">
                    <button className="px-4 sm:px-5 py-2 bg-[#1E3A8A] text-white rounded-lg font-medium hover:bg-blue-900 transition text-sm sm:text-base">
                      Rent Now
                    </button>
                    <p className="text-lg font-semibold text-gray-900">
                      {property.price || "$1,500/month"}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center w-full py-20 text-gray-600">
              No properties found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export { PropertiesRental };
