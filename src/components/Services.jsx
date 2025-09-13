import { FiHome, FiKey, FiSearch, FiShield } from "react-icons/fi";

function Services() {
    const services = [
        {
            title: "Buy & Sell Properties",
            desc: "Find verified homes for sale or list your property with ease.",
            icon: <FiHome size={28} className="text-[#1E3A8A]" />
        },
        {
            title: "Find Rental Homes",
            desc: "Browse through thousands of rental options suited to your needs.",
            icon: <FiKey size={28} className="text-[#1E3A8A]" />
        },
        {
            title: "Smart AI Property Search",
            desc: "Get instant recommendations based on your budget & location.",
            icon: <FiSearch size={28} className="text-[#1E3A8A]" />
        },
        {
            title: "Safe & Secure Transactions",
            desc: "Verified listings & secure deals to ensure a smooth experience.",
            icon: <FiShield size={28} className="text-[#1E3A8A]" />
        },
    ];

    return (
        <section className="pt-16 pb-10 px-6 font-poppins bg-white">
            <div className="max-w-[1280px] mx-auto text-center">
                {/* Heading */}
                <h2 className="text-[28px] sm:text-[32px] md:text-[35px] font-bold mb-2 text-[#1E3A8A]">
                    What We Do?
                </h2>
                <p className="mb-2 text-base sm:text-lg md:text-xl text-gray-600">
                    Helping you find, buy, and rent the perfect
                </p>
                <p className="mb-12 text-base sm:text-lg md:text-xl text-gray-600">
                    property with ease
                </p>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className="h-[260px] sm:h-[280px] flex flex-col items-center justify-center 
                                       bg-gray-100 shadow-md rounded-xl p-6 
                                       transition-all duration-300 cursor-pointer 
                                       hover:scale-105 hover:bg-white"
                        >
                            {/* Icon Circle */}
                            <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-400/90 mb-4">
                                {s.icon}
                            </div>

                            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#1E3A8A]">
                                {s.title}
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { Services };
