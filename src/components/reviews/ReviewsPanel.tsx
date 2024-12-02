import React, { useState } from "react";
import { ReviewState } from "../products/listing/states";
import { ReviewBlock } from "./ReviewBlock";
import AddReview from "../AddReview";

export const ReviewsPanel = ({
  reviews,
  productId,
  userId,
}: {
  reviews: ReviewState[];
  productId: string;
  userId: string;
}) => {
  const [showAddReview, setShowAddReview] = useState(false);
  const [reviewList, setReviewList] = useState<ReviewState[]>(reviews);

  const ratingCount = reviewList.reduce<{ [key: number]: number }>((acc, review) => {
    if (review.rating >= 1 && review.rating <= 5) {
      acc[review.rating] = (acc[review.rating] || 0) + 1;
    }
    return acc;
  }, {});

  const defaultRatingCount = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };
  const ratingStars = [5, 4, 3, 2, 1];

  const finalRatingCount: { [key: number]: number } = { ...defaultRatingCount, ...ratingCount };
  const totalReviews = Object.values(finalRatingCount).reduce((sum, count) => sum + count, 0);

  const handleAddReview = (review: { id: string; title: string; comment: string; rating: number }) => {
    const newReview: ReviewState = { ...review, createdAt: new Date() }; // Add createdAt
    setReviewList([newReview, ...reviewList]);
    setShowAddReview(false);
  };

  return (
    <div>
      <div className="flex flex-col">
        {ratingStars.map((rating) => (
          <div key={rating} className="flex flex-row items-center">
            {rating}
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 4.5L14.3175 9.195L19.5 9.9525L15.75 13.605L16.635 18.765L12 16.3275L7.365 18.765L8.25 13.605L4.5 9.9525L9.6825 9.195L12 4.5Z"
                fill="#ffe600"
                stroke="#EBC03F"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="w-48 bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-yellow-400 h-2.5 rounded-full"
                style={{
                  width: `${(finalRatingCount[rating] / totalReviews) * 100}%`,
                }}
              />
            </div>
            <span className="ml-2">{finalRatingCount[rating]}</span>
          </div>
        ))}
      </div>
      {reviewList.map((review) => (
        <div key={review.id}>
          <ReviewBlock review={review} />
        </div>
      ))}
      <div className="flex flex-row my-8">
        <button
          className="bg-blue-600 text-white font-semibold w-1/7 py-2 px-4 gap-x-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
          onClick={() => setShowAddReview(true)}
        >
          <span>Add a Review</span>
        </button>
      </div>
      {showAddReview && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
            <AddReview productId={productId} onSubmit={handleAddReview} userId={userId} />
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => setShowAddReview(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
