import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Profile } from "./Profile";
import prisma from "@/db/db";

export default async function UserProfile() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return <span className="">Please sign in to access this page.</span>;
  }

  const userData = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { reviews: true, orders: { include: { products: true } }, savedProducts: true },
  });

  if (!userData) {
    return <span>User data not found.</span>;
  }

  return (
    <Profile
      email={userData.email}
      firstName={userData.firstName}
      lastName={userData.lastName}
      savedProducts={userData.savedProducts}
    />
  );
}

/*
search filter and sort
order management
add review
edit account/profile

*/
