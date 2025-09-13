import bigImg from "../assets/large.png";
import mediumImg from "../assets/medium.png";
import small1 from "../assets/small1.png";
import small2 from "../assets/small2.png";

function FeaturedProperty() {
    return (
        <section className="pt-16 pb-10 px-6 bg-white font-poppins">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 max-w-[1280px] mx-auto gap-4 text-center md:text-left">
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1E3A8A]">
                    Featured Property
                </h2>
                <button className="px-5 py-2 border border-[#1E3A8A] text-[#1E3A8A] rounded-full font-medium hover:bg-[#1E3A8A] hover:text-white transition">
                    See 268 New Projects →
                </button>
            </div>

            {/* Property Grid (centered) */}
            <div className="max-w-[1280px] mx-auto flex justify-center">
                {/* grid: stacks on small screens, uses exact column widths on lg */}
                <div className="grid grid-cols-1 lg:grid-cols-[650px_307px_307px] gap-6">
                    {/* Large Image */}
                    <div className="relative h-[300px] lg:h-[430px]">
                        <img
                            src={bigImg}
                            alt="Big Property"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="text-sm opacity-80">By Finder & Projects</p>
                            <h3 className="text-xl font-semibold">Kenanga Residence</h3>
                        </div>
                    </div>

                    {/* Medium Image */}
                    <div className="h-[300px] lg:h-[430px]">
                        <img
                            src={mediumImg}
                            alt="Medium Property"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Two Small Images: use CSS Grid rows so heights always add up correctly */}
                    <div className="h-[300px] lg:h-[430px] grid grid-rows-2 gap-6">
                        <div className="w-full h-full">
                            <img
                                src={small1}
                                alt="Small Property 1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full h-full">
                            <img
                                src={small2}
                                alt="Small Property 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { FeaturedProperty };
