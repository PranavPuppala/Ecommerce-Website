import Image from "next/image";
import Link from "next/link";

export const Banner = () => {
  return (
    <div className="bg-gray-800 text-white w-full py-8 px-4 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between space-x-8">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl lg:text-4xl font-semibold mb-4">Big Savings on Electronics!</h2>
          <p className="text-lg mb-6">
            Dont miss out on exclusive deals for the latest tech. Limited time offer—Shop now and save big!
          </p>
          <Link
            href="/product/deals"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300"
          >
            Shop Now
          </Link>
        </div>
        <div className="mt-6 lg:mt-0 w-full lg:w-1/2 relative">
          <Image
            src="https://media.cnn.com/api/v1/images/stellar/prod/tech-picks-lead-bf.jpg?c=16x9"
            alt="Banner Image"
            width={600}
            height={300}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};
