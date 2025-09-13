function WhyChooseUs() {
    const points = [
        { title: "Budget Friendly", desc: "Find the best deals within your budget." },
        { title: "Trusted By Thousands", desc: "A reliable platform with verified users." },
        { title: "Prime Locations", desc: "Explore properties in top neighborhoods." }
    ];

    return (
        <section className="py-16 px-6 text-center">
            <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {points.map((p, i) => (
                    <div key={i} className="p-6 bg-white shadow-lg rounded-xl">
                        <h3 className="text-xl font-semibold mb-3 text-blue-600">{p.title}</h3>
                        <p className="text-gray-600">{p.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export { WhyChooseUs };