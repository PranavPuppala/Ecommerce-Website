import React, { useState } from "react";

const AddReview = ({
  onSubmit,
  productId, // Pass the productId as a prop
}: {
  onSubmit: (review: { id: string; name: string; rating: number; review: string }) => void;
  productId: string;
}) => {
  const [form, setForm] = useState({
    name: "",
    rating: 5,
    review: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/product/reviews/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          productId, // Include the product ID in the request
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      const data = await response.json();
      alert("Review submitted successfully!");
      onSubmit(data); // Add review to the UI
      setForm({ name: "", rating: 5, review: "" }); // Reset the form
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit review. Please try again.");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <select
            id="rating"
            name="rating"
            value={form.rating}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            {[1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>
                {rating}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="review" className="block text-sm font-medium text-gray-700">
            Review
          </label>
          <textarea
            id="review"
            name="review"
            value={form.review}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
