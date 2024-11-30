import React, { useEffect, useState } from "react";

type Review = {
  id: string | number;
  customer: string;
  rating: number;
  comment: string;
};

const ReviewList = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/reviews");
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      } else {
        setError("Failed to load reviews.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching reviews.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <ul>
      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to add one!</p>
      ) : (
        reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.customer}</h3>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default ReviewList;
