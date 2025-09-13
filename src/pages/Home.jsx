import { Hero } from "../components/Hero";
import { FeaturedProperty } from "../components/FeaturedProperty";
import { Services } from "../components/Services";
import { PropertiesSale } from "../components/PropertiesSale";
import { PropertiesRental } from "../components/PropertiesRental";
import { JourneySection } from "../components/JourneySection";

function Home() {
    return (
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
