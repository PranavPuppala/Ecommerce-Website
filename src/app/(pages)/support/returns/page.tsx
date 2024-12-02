import Link from "next/link";

export default function Returns() {
  return (
    <div className="bg-gray-50 flex items-center justify-center py-16 px-6">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Return Policy</h1>
        <p className="text-lg text-gray-600 text-center">We currently do not offer any returns or exchanges.</p>
        <div className="mt-8 text-center">
          <Link
            href={"/"}
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Purchase more items here
          </Link>
        </div>
      </div>
    </div>
  );
}
