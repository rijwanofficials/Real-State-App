const BASE_URL = "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing";

export const fetchProperties = async () => {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Failed to fetch properties");
    return res.json();
};
