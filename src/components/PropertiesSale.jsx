import { FaStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShowErrorToast } from "../utils/ToastifyHelper";
import fallbackImage from "../assets/grid1.png";

function PropertiesSale() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing");
        if (!res.ok) throw new Error("Failed to fetch properties");
        const data = await res.json();
        setProperties(data);
      } catch (err) {
        ShowErrorToast(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  if (loading) {
    return (
      <section className="pt-12 pb-8 px-6">
        <div className="max-w-[1280px] mx-auto text-center text-gray-600">Loading properties...</div>
      </section>
    );
  }

  return (
    <section className="pt-12 pb-8 px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading & View More Button */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A8A]">
              Best Properties Available For Sale
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl text-base md:text-lg">
              Browse our top-rated properties, tailored to your needs. Find your dream home today!
            </p>
          </div>
          <div>
            <button
              onClick={() => navigate("/sell")}
              className="px-6 py-2 rounded-full font-semibold transition bg-blue-700 text-white hover:bg-blue-900"
            >
              View More Properties
            </button>
          </div>
        </div>

        {/* Properties Carousel */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
          {properties.length > 0 ? (
            properties.slice(0, 10).map((property) => (
              <div
                key={property.id}
                className="shadow-md rounded-2xl bg-gray-100 w-[280px] sm:w-[320px] md:w-[350px] h-[470px] sm:h-[500px] flex-shrink-0 flex flex-col overflow-hidden hover:shadow-xl transition snap-center"
              >
                <img
                  src={property.image || fallbackImage}
                  alt={property.city || property.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = fallbackImage;
                  }}
                  className="w-full h-[200px] sm:h-[220px] object-cover p-2 rounded-2xl"
                />
                <div className="flex flex-col justify-between flex-1 p-4">
                  {/* Property name */}
                  <h3 className="font-semibold text-lg mb-1">{property.name}</h3>

                  {/* Full location with icon */}
                  <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
                    <FiMapPin className="text-gray-400" size={18} />
                    {property.buildingNumber} {property.cardinalDirection} St, {property.city}, {property.state}, {property.country}
                  </p>

                  {/* Owner name only */}
                  <div className="mb-3 text-sm text-gray-700">
                    <strong>Owner:</strong> {property.ownerName}
                  </div>

                  {/* Rating and Created date */}
                  <div className="flex justify-between items-center text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" /> 4.5/5
                    </span>
                    <span className="flex items-center gap-1 text-xs">
                      <time dateTime={property.createdAt}>
                        {new Date(property.createdAt).toLocaleDateString()}
                      </time>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-sm mb-4 flex-grow">
                    {property.description || "Beautiful property with great amenities."}
                  </p>

                  {/* Price & Button */}
                  <div className="flex justify-between items-center">
                    <button className="px-4 sm:px-5 py-2 bg-[#1E3A8A] text-white rounded-lg font-medium hover:bg-blue-900 transition text-sm sm:text-base">
                      Buy Now
                    </button>
                    <p className="text-lg font-semibold text-gray-900">{property.price || "$500,000"}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center w-full py-20 text-gray-600">No properties found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export { PropertiesSale };
