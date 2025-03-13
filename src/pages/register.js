"use client";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({
 
    phone_number: "",
    is_driver: false,
    location: "",
    age: "",
    biography: "",
    rating: 5.0,
    vehicle_details: {},
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Ensure age is sent as an integer
    const payload = { ...formData, age: parseInt(formData.age, 10) };

    try {
      const response = await axios.post("http://127.0.0.1:8000/register/api/register/", payload, {
        headers: { "Content-Type": "application/json" },
      });

      setMessage("Registration successful!");
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error response:", error.response);
      setMessage("Error: " + (error.response?.data?.error || "Bad request"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
{/* 
        <label className="block mb-2">User ID</label>
        <input
          type="number"
          name="user"
          value={formData.user}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-4"
        /> */}

        <label className="block mb-2">Phone Number</label>
        <input
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2">Are you a Driver?</label>
        <input
          type="checkbox"
          name="is_driver"
          checked={formData.is_driver}
          onChange={handleChange}
          className="mb-4"
        />

        <label className="block mb-2">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2">Biography</label>
        <textarea
          name="biography"
          value={formData.biography}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2">Rating</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          step="0.1"
          className="w-full p-2 border rounded mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {message && <p className="mt-4 text-red-500">{message}</p>}
      </form>
    </div>
  );
}