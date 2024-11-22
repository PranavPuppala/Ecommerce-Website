const testProducts = [
  {
    name: "Apple AirPods Pro 2 Wireless Earbuds",
    description:
      "PIONEERING HEARING — AirPods Pro 2 unlock the world’s first all-in-one hearing health experience: " +
      "a scientifically validated Hearing Test, clinical-grade and active Hearing Protection. ",
    price: 159.99,
    imageUrl: "https://m.media-amazon.com/images/I/61f1YfTkTDL.jpg",
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    description:
      "OUR MOST POWERFUL GALAXY SMARTPHONE YET: " +
      "Jump seamlessly between apps without the wait and see content in high quality with our fastest processor yet, Snapdragon 8 Gen 3 for Galaxy",
    price: 949.99,
    imageUrl: "https://m.media-amazon.com/images/I/71WcjsOVOmL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Gaming Monitor",
    description:
      "27-inch QHD (2560 x 1440) gaming monitor with 180Hz refresh rate designed for professional gamers and immersive gameplay.",
    price: 199.99,
    imageUrl: "https://m.media-amazon.com/images/I/71L4fB4r8rL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Apple Macbook Pro",
    description:
      "SUPERCHARGED BY M4 PRO OR M4 MAX — The 14-inch MacBook Pro with the M4 Pro or M4 Max chip gives you outrageous performance in a powerhouse laptop built for Apple Intelligence. " +
      "With all-day battery life and a breathtaking Liquid Retina XDR display with up to 1600 nits peak brightness, it’s pro in every way.",
    price: 1749.99,
    imageUrl: "https://m.media-amazon.com/images/I/61-oTP1X4rL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Apple - iPhone 16 Pro Max 256GB",
    description:
      "Built for Apple Intelligence. Featuring a stunning titanium design. Camera Control. 4K 120 fps Dolby Vision. And A18 Pro chip.",
    price: 1199.99,
    imageUrl: "https://m.media-amazon.com/images/I/61Ony8rgwEL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Apple iPad Pro 13-Inch (M4)",
    description: "iPad Pro is the ultimate iPad experience in an impossibly thin and light design.",
    price: 1299.99,
    imageUrl: "https://m.media-amazon.com/images/I/7147JzEtrqL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Sony PlayStation 5 Pro Console",
    description:
      "Optimized Console Performance Reach higher and more consistent frame rates for silky smooth gameplay with support for 60Hz and 120Hz displays.",
    price: 699.99,
    imageUrl: "https://m.media-amazon.com/images/I/61vR3ovb2UL.jpg",
  },
];

const test = async () => {
  try {
    const requestBody = JSON.stringify(testProducts);
    const response = await fetch("http://localhost:3000/api/product/multiple", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    });

    if (!response.ok) {
      throw new Error("Response not ok");
    }
  } catch (error) {
    console.error(error);
  }
};
test();
