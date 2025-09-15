import { useState, useEffect } from "react";
import { Hero } from "../components/Hero";
import { FeaturedProperty } from "../components/FeaturedProperty";
import { Services } from "../components/Services";
import { PropertiesSale } from "../components/PropertiesSale";
import { PropertiesRental } from "../components/PropertiesRental";
import { JourneySection } from "../components/JourneySection";
import { HomeShimmer } from "../components/HomeShimmer";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay or replace this with real async data fetching logic
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <HomeShimmer />
  ) : (
    <div>
      <Hero />
      <Services />
      <FeaturedProperty />
      <PropertiesSale />
      <PropertiesRental />
      <JourneySection />
    </div>
  );
}

export { Home };
