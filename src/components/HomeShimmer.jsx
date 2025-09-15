import { FeaturedPropertyShimmer, FooterShimmer, HeroShimmer, JourneySectionShimmer, PropertiesRentalShimmer, PropertiesSaleShimmer, ServicesShimmer } from "../pages/ShimmerUi";

export const HomeShimmer = () => (
  <div>
    <div className="animate-pulse">
      {/* Hero shimmer */}

      <div className="h-[500px] bg-gray-300 mb-12 rounded-lg">
        <HeroShimmer />
      </div>

      {/* Services shimmer */}
      <div className="h-48 bg-gray-300 mb-12 rounded-lg">
        <ServicesShimmer />
      </div>

      {/* Featured Property shimmer */}
      <div className="h-72 bg-gray-300 mb-12 rounded-lg">
        <FeaturedPropertyShimmer />
      </div>

      {/* Properties Sale shimmer */}
      <div className="h-[400px] bg-gray-300 mb-12 rounded-lg">
        <PropertiesSaleShimmer />
      </div>

      {/* Properties Rental shimmer */}
      <div className="h-[400px] bg-gray-300 mb-12 rounded-lg">
        <PropertiesRentalShimmer />
      </div>

      {/* Journey Section shimmer */}
      <div className="h-64 bg-gray-300 mb-12 rounded-lg">
        <JourneySectionShimmer />
      </div>
    </div>
  </div>
);

 
