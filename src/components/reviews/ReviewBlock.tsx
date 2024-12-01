import { ReviewState } from "../products/listing/states";
import { Rating } from "../rating/Rating";

const formatDate = (date: Date) => {
  const d = new Date(date);
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const year = d.getFullYear();

  return `${month}-${day}-${year}`;
};

export const ReviewBlock = ({ review }: { review: ReviewState }) => {
  return (
    <div className="border-y py-4">
      <div className="flex flex-col">
        <Rating ratingInPercent={review.rating * 20} iconSize="m" showOutOf={true} enableUserInteraction={false} />
        <span className="font-semibold">{review.title}</span>
        <span className="text-sm">{review.comment}</span>
        <span className="text-xs">Posted: {formatDate(review.createdAt)}</span>
      </div>
    </div>
  );
};
