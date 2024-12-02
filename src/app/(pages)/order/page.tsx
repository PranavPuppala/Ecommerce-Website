import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Orders() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <p>server session</p>
      {JSON.stringify(session)}
    </div>
  );
}
