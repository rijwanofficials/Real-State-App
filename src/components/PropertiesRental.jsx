import { FaStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import grid1 from "../assets/grid1.png";
import grid2 from "../assets/grid2.png";
import grid3 from "../assets/grid3.png";
import grid4 from "../assets/grid4.png";

function PropertiesRental() {
    const properties = [
        {
            img: grid1,
            city: "New York, NY",
            price: "$1,500/month",
            rating: "4.5/5",
            description:
                "Spacious 3BHK apartment in a prime location with modern amenities.",
            buttonText: "Buy Now",
        },
        {
            img: grid2,
            city: "Los Angeles, CA",
            price: "$2,599/month",
            rating: "4.3/5",
            description: "Rental 3BHK apartment with great amenities.",
            buttonText: "Rent Now",
        },
        {
            img: grid3,
            city: "Chicago, IL",
            price: "$1,600/month",
            rating: "4.7/5",
            description: "Luxury villa with private pool and modern design.",
            buttonText: "View Details",
        },
        {
            img: grid4,
            city: "Miami, FL",
            price: "$450,000",
            rating: "4.6/5",
            description: "Modern apartment close to the beach.",
            buttonText: "Rent Now",
        },
    ];

    return (
        <section className="pt-16 pb-8 px-6">
            <div className="max-w-[1280px] mx-auto">
                {/* Heading */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A]">
                            Find The Perfect Rental Home
                        </h2>
                        <p className="text-gray-600 mt-3 max-w-xl">
                            Browse our top-rated properties for rent, featuring premium
                            listings tailored to your needs. Find your dream home today!
                        </p>
                    </div>
                    <button className="px-6 py-2 bg-[#1E3A8A] text-white rounded-full font-medium hover:bg-blue-900 transition">
                        View All Rentals
                    </button>
                </div>

                {/* Horizontal Scroll with hidden scrollbar */}
                <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
                    {properties.map((property, i) => (
                        <div
                            key={i}
                            className="shadow-md rounded-2xl bg-gray-100 w-[280px] sm:w-[300px] md:w-[350px] h-[430px] flex-shrink-0 flex flex-col overflow-hidden hover:shadow-xl transition snap-center"
                        >
                            {/* Image */}
                            <img
                                src={property.img}
                                alt={property.city}
                                className="w-full h-[200px] object-cover p-2 rounded-2xl"
                            />

                            {/* Content */}
                            <div className="flex flex-col justify-between flex-1 p-4">
                                {/* Location + Rating */}
                                <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                                    <span className="flex items-center gap-1">
                                        <FiMapPin className="text-gray-400" size={18} />{" "}
                                        {property.city}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaStar className="text-yellow-500" size={16} />{" "}
                                        {property.rating}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 text-sm mb-4">
                                    {property.description}
                                </p>

                                {/* Price + Button */}
                                <div className="flex justify-between items-center">
                                    <button className="px-4 py-2 bg-[#1E3A8A] text-white rounded-lg text-sm font-medium hover:bg-blue-900 transition">
                                        {property.buttonText}
                                    </button>
                                    <p className="text-base font-semibold text-gray-900">
                                        {property.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { PropertiesRental };
