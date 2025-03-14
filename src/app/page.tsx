"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Image from "next/image";

interface FormData {
  phone_number: string;
  is_driver: boolean;
  location: string;
  age: number | "";
  biography: string;
  rating: number;
  vehicle_details: Record<string, unknown>;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    phone_number: "",
    is_driver: false,
    location: "",
    age: "",
    biography: "",
    rating: 5.0,
    vehicle_details: {},
  });

  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const payload = {
      ...formData,
      age: formData.age !== "" ? parseInt(String(formData.age), 10) : 0,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/register/api/register/",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );
      setMessage("Registration successful!");
      console.log("Success:", response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error response:", error.response);
        setMessage("Error: " + (error.response?.data?.error || "Bad request"));
      } else {
        console.error("Unexpected error:", error);
        setMessage("Error: Unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col text-gray-600 items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded shadow-md w-96"
      >
        <div className="flex justify-center mb-4">
          <Image
            src="https://flexxydrive.com/loading2.gif"
            alt="Loading"
            width={100}
            height={100}
          />
        </div>
        <h2 className="text-2xl font-bold mb-4">Register</h2>

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
          className="w-full bg-purple-950 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {message && <p className="mt-4 text-red-500">{message}</p>}
      </form>
    </div>
  );
}
