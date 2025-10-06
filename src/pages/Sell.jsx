import { useState } from "react";
import { useAuthContext } from "../context/useAuthContext";
import { ShowErrorToast, ShowSuccessToast } from "../utils/ToastifyHelper";

const Sell = () => {
  const { user } = useAuthContext();
  const [property, setProperty] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    type: "House",
    images: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      ShowErrorToast("You must be logged in to list a property!");
      return;
    }
    try {
      setLoading(true);
      const token = await user.getIdToken();
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/properties`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...property,
          images: property.images.split(",").map((img) => img.trim()),
        }),
      });

      const data = await response.json();
      if (data.isSuccess) {
        ShowSuccessToast("Property created successfully!");
        setProperty({
          title: "",
          description: "",
          location: "",
          price: "",
          type: "House",
          images: "",
        });
      } else {
        ShowErrorToast("Error: " + data.message);
      }
    } catch (err) {
      console.error(err);
      ShowErrorToast(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-10 px-6 text-center shadow-md">
        <h1 className="text-4xl font-extrabold mb-2">Sell Your Property</h1>
        <p className="text-lg opacity-90">
          List your property and connect with verified buyers easily.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Create Property Listing
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="title"
            placeholder="Property Title"
            value={property.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <textarea
            name="description"
            placeholder="Property Description"
            value={property.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          />

          <input
            type="text"
            name="location"
            placeholder="Location (e.g. Mumbai, India)"
            value={property.location}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <input
            type="number"
            name="price"
            placeholder="Price (in ₹)"
            value={property.price}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <select
            name="type"
            value={property.type}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
          >
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Commercial">Commercial</option>
          </select>

          <input
            type="text"
            name="images"
            placeholder="Image URLs (comma separated)"
            value={property.images}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 shadow-md ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {loading ? "Creating..." : "Create Property"}
          </button>
        </form>
      </div>
    </>
  );
};

export { Sell };
