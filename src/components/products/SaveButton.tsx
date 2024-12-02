import { useState, useEffect } from "react";

const SaveProductButton = ({ userId, productId }: { userId: string; productId: string }) => {
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  // Fetch the user's saved products
  useEffect(() => {
    const checkSavedProduct = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/save/user/${userId}`, {
          method: "GET",
        });
        const data = await response.json();
        const productSaved = data.savedProducts.some((product: any) => product.id === productId);
        setSaved(productSaved);
      } catch (error) {
        console.error("Error fetching saved products:", error);
      }
    };

    if (userId) {
      checkSavedProduct();
    }
  }, [userId, productId]);

  const handleToggleSave = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/save/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, productId }),
      });

      const result = await response.json();

      if (response.ok) {
        setSaved(!saved); // Toggle the saved state
      } else {
        alert("Error saving: Please log in to save.");
      }
    } catch (error) {
      console.error("Error toggling save state:", error);
      alert("Error toggling save state");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      className={`border border-gray-300 text-black font-semibold w-1/4 py-2 px-4 rounded-md flex items-center justify-center gap-x-2 hover:border-gray-400 ${
        saved ? "bg-green-500" : ""
      }`}
      onClick={handleToggleSave}
      disabled={loading}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={saved ? "green" : "none"}
        viewBox="0 0 24 24"
        strokeWidth={0.75}
        stroke={saved ? "none" : "currentColor"}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
      <span className="font-normal">{saved ? "Saved" : "Save"}</span>
    </button>
  );
};

export default SaveProductButton;
