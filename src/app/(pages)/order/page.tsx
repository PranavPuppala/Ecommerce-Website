import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import prisma from "@/db/db";
import Image from "next/image";

export default async function Orders() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div>Please login to access this page.</div>;
  }

  try {
    const orders = await prisma.order.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        products: true,
      },
    });

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Active Orders</h1>
        {orders.length === 0 ? (
          <p className="text-center text-lg text-gray-600">No orders found</p>
        ) : (
          <ul className="space-y-6">
            {orders.map((order: any, index) => (
              <li key={order.id} className="p-6 border rounded-lg shadow-lg flex flex-col space-y-4 bg-white">
                <h2 className="text-2xl font-semibold">Order #{index + 1}</h2>
                <p className="text-lg">Status: {order.status}</p>
                <p className="text-lg">Time Estimate: {order.timeEstimate}</p>
                <div className="gap-4 flex flex-row">
                  {order.products.map((item: any) => (
                    <div key={item.productId} className="flex items-center space-x-4">
                      {item.image && item.image.length > 0 && (
                        <Image
                          src={item.image}
                          alt={"Product"}
                          className="w-20 h-20 object-contain"
                          width={500}
                          height={500}
                          priority
                        />
                      )}
                      <div>
                        <p className="text-lg font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xl font-bold text-green-600">Total: ${order.total.toFixed(2)}</p>

                {order.status === "Pending" && (
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <span className="text-sm font-semibold text-gray-600">Processing</span>
                    </div>
                    <div className="flex mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-500 h-2.5 rounded-full animate-progress"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                {order.status === "Shipped" && (
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <span className="text-sm font-semibold text-gray-600">Shipped</span>
                    </div>
                    <div className="flex mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-green-500 h-2.5 rounded-full animate-progress-shipped"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                {order.status === "Received" && (
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <span className="text-sm font-semibold text-gray-600">Shipped</span>
                    </div>
                    <div className="flex mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching orders:", error);
    return <div>Error fetching orders</div>;
  }
}
