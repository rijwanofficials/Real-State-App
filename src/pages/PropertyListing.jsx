import { useState } from "react";
import { useAuthContext } from "../context/useAuthContext";

const PropertyListing = () => {
  const { user } = useAuthContext(); // Get current logged-in user
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
      alert("You must be logged in to create a property!");
      return;
    }

    try {
      setLoading(true);
      const token = await user.getIdToken(); // Get Firebase auth token

      const response = await fetch("http://localhost:3700/api/v1/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...property,
          images: property.images.split(",").map(img => img.trim()), // handle comma separated URLs
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.isSuccess) {
        alert("Property created successfully!");
        setProperty({
          title: "",
          description: "",
          location: "",
          price: "",
          type: "House",
          images: "",
        });
      } else {
        alert("Error: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Property Listing</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={property.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={property.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={property.location}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={property.price}
          onChange={handleChange}
          required
        />
        <select name="type" value={property.type} onChange={handleChange}>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
        </select>
        <input
          type="text"
          name="images"
          placeholder="Images (comma separated URLs)"
          value={property.images}
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          {loading ? "Creating..." : "Create Property"}
        </button>
      </form>
    </div>
  );
};
export { PropertyListing };