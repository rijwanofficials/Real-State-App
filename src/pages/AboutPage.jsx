 const AboutPage = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">
        About PropBot
      </h2>
      <p className="text-gray-700 text-lg md:text-xl max-w-4xl leading-relaxed mb-8">
        PropBot is your trusted partner for finding the perfect home—whether you're looking to buy, rent, or sell properties. Our mission is to make property discovery seamless, transparent, and tailored to your needs.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-3">Our Vision</h3>
          <p className="text-gray-700">
            To revolutionize the real estate market by providing cutting-edge tools, verified listings, and expert insights that empower buyers, renters, and sellers.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-3">Our Mission</h3>
          <p className="text-gray-700">
            Deliver a user-friendly platform with comprehensive property data and exceptional customer support, creating an unmatched real estate experience.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-3">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Verified and carefully curated property listings</li>
            <li>Easy-to-use search and filter options</li>
            <li>Expert guidance and responsive support</li>
            <li>Regular updates and market insights</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export {AboutPage}
