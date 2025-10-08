import { useAuthContext } from "../context/useAuthContext";

const ContactPage = () => {
  const { sendContactForm } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      await sendContactForm(formData);
      // Optional: clear form after success
      e.target.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="max-w-[1280px] mx-auto px-6 py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">
        Contact Us
      </h2>
      <p className="text-gray-700 text-lg md:text-xl max-w-4xl leading-relaxed mb-10">
        Have questions or need assistance? We’re here to help! Reach out to us through the form below or via our contact details.
      </p>

      <form
        onSubmit={handleSubmit} 
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 font-semibold text-gray-800">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name" 
            placeholder="Your full name"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-800">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 font-semibold text-gray-800">
            Message
          </label>
          <textarea
            id="message"
            name="message" 
            placeholder="Write your message here"
            rows="5"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export { ContactPage };
