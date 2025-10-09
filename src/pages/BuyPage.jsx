import heroImage from "../assets/BuyPage.png";
import { FloatingFilterBar } from '../components/FloatingFilterBar';
import { usePropetyContext } from "../context/useAuthContext";
import { useState } from "react";
import { HeroShimmer, ShimmerCard, PaginationShimmer } from "../pages/ShimmerUi";

function BuyPage() {
  const handleFind = () => {
  };

  const { properties, loading } = usePropetyContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProperties = properties.slice(startIndex, startIndex + itemsPerPage);

  // Total pages
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  return (
    <>
      {loading ? (
        <>
          <HeroShimmer />
          <section className="max-w-[1280px] mx-auto mt-14 px-4 md:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[...Array(itemsPerPage)].map((_, i) => (
                <ShimmerCard key={i} />
              ))}
            </div>
            <PaginationShimmer />
          </section>
        </>
      ) : (
        <>
          <section className="px-4 md:px-20 pt-10 pb-0 relative">
            <div className="relative rounded-3xl h-[480px] overflow-hidden flex flex-col items-center text-center">
              <img
                src={heroImage}
                alt="Find Your Dream Home"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/90 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center px-6 md:px-14">
                <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                  Featured Properties For Sale
                </h1>
                <p className="text-lg md:text-xl text-white">
                  Discover, Buy, or Rent Verified Properties with Ease.
                </p>
              </div>
            </div>

            <FloatingFilterBar onFind={handleFind} />
          </section>

          {/* Properties Section Below Hero */}
          <section className="max-w-[1280px] mx-auto mt-14 px-4 md:px-0">
            {properties.length === 0 ? (
              <p className="text-center text-gray-600">No properties found.</p>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {paginatedProperties.map((property) => (
                    <div
                      key={property.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    >
                      <img
                        src={property.image || heroImage}
                        alt={property.name}
                        className="w-full h-56 object-cover"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = heroImage;
                        }}
                      />
                      <div className="p-5">
                        <h3 className="font-semibold text-lg mb-2">{property.name}</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {property.description || "Beautiful property with great amenities."}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-lg text-gray-900">
                            {property.price || "$500,000"}
                          </span>
                          <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center items-center gap-4 mt-10 text-gray-700">
                  {/* Ellipsis before pages */}
                  <span
                    className="text-lg inline-block"
                    style={{ width: "1.25rem", visibility: currentPage > 3 ? "visible" : "hidden" }}
                  >
                    ...
                  </span>

                  {/* Prev to prev page (page - 2) or placeholder */}
                  {currentPage - 2 >= 1 ? (
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 opacity-50 pointer-events-none select-none">
                      {currentPage - 2}
                    </span>
                  ) : (
                    <span className="w-10 h-10" />
                  )}

                  {/* Prev page (page - 1) or placeholder */}
                  {currentPage - 1 >= 1 ? (
                    <button
                      onClick={() => setCurrentPage(currentPage - 1)}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                      aria-label={`Go to page ${currentPage - 1}`}
                    >
                      {currentPage - 1}
                    </button>
                  ) : (
                    <span className="w-10 h-10" />
                  )}

                  {/* Current page */}
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white font-semibold shadow-md">
                    {currentPage}
                  </span>

                  {/* Next page (page + 1) or placeholder */}
                  {currentPage + 1 <= totalPages ? (
                    <button
                      onClick={() => setCurrentPage(currentPage + 1)}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                      aria-label={`Go to page ${currentPage + 1}`}
                    >
                      {currentPage + 1}
                    </button>
                  ) : (
                    <span className="w-10 h-10" />
                  )}

                  {/* Next to next page (page + 2) or placeholder */}
                  {currentPage + 2 <= totalPages ? (
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 opacity-50 pointer-events-none select-none">
                      {currentPage + 2}
                    </span>
                  ) : (
                    <span className="w-10 h-10" />
                  )}

                  {/* Ellipsis after pages */}
                  <span
                    className="text-lg inline-block"
                    style={{ width: "1.25rem", visibility: currentPage < totalPages - 2 ? "visible" : "hidden" }}
                  >
                    ...
                  </span>
                </div>
              </>
            )}
          </section>
        </>
      )}
    </>
  );
}

export { BuyPage };

