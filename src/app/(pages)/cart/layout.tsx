export default function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen bg-neutral-100">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600 mb-4">
        <a href="/" className="hover:underline text-blue-600">
          Home
        </a>
        &gt; <span>Cart</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">Your Cart</h1>

      {/* Content Container */}
      <div className="p-4">{children}</div>
    </div>
  );
}
