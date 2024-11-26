import React, { useState } from "react";

const ReviewForm = ({ onReviewSubmit }: { onReviewSubmit: () => void }) => {
  const [formData, setFormData] = useState({
    customer: "",
    rating: 0,
    comment: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customer || !formData.rating || !formData.comment) {
      setError("All fields are required.");
      return;
    }

    setError("");
    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onReviewSubmit(); // Refresh the reviews list
        setFormData({ customer: "", rating: 0, comment: "" });
      } else {
        setError("Failed to submit review. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="customer">Name:</label>
        <input
          id="customer"
          name="customer"
          type="text"
          value={formData.customer}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          name="rating"
          type="number"
          value={formData.rating}
          onChange={handleChange}
          placeholder="1-5"
          min="1"
          max="5"
          required
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Your review"
          required
        ></textarea>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
