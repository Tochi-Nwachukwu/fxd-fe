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
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <div className="w-full md:w-1/2 flex items-center justify-center bg-purple-950">

        <Image
          src="https://images.unsplash.com/photo-1719089648087-9aa6fd9b35cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Flexxydrive"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="w-full text-gray-600 md:w-1/2 flex flex-col items-center justify-center p-8">
        <form
          onSubmit={handleSubmit}
          className="p-6 bg-[#FCFCFC] rounded-lg shadow-md w-full max-w-md"
        >
          {/* Loading Animation */}
          <div className="flex justify-center mb-4">
            <Image
              src="https://flexxydrive.com/loading2.gif"
              alt="Loading"
              width={200}
              height={500}
            />
          </div>

          <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">
            Register
          </h2>

          <label className="block mb-2">Phone Number</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg mb-4"
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
            className="w-full p-2 border rounded-lg mb-4"
          />

          <label className="block mb-2">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg mb-4"
          />

          <label className="block mb-2">Biography</label>
          <textarea
            name="biography"
            value={formData.biography}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mb-4"
          />

          <label className="block mb-2">Rating</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            step="0.1"
            className="w-full p-2 border rounded-lg mb-4"
          />

          <button
            type="submit"
            className="w-full mt-12 cursor-pointer bg-purple-950 text-white p-4 hover:opacity-85 rounded-full"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {message && <p className="mt-4 text-red-500">{message}</p>}
        </form>
      </div>
    </div>
  );
}
