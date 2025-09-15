import {
  FeaturedPropertyShimmer,
  HeroShimmer,
  JourneySectionShimmer,
  PropertiesRentalShimmer,
  PropertiesSaleShimmer,
  ServicesShimmer,
} from "../pages/ShimmerUi";

export const HomeShimmer = () => (
  <div className="animate-pulse space-y-12">
    <HeroShimmer />
    <ServicesShimmer />
    <FeaturedPropertyShimmer />
    <PropertiesSaleShimmer />
    <PropertiesRentalShimmer />
    <JourneySectionShimmer />
  </div>
);
