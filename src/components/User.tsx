'use client';

import { useSession } from "next-auth/react";
import { useEffect } from "react";

const User = () => {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated" && session?.user?.email) {
            console.log(`User email: ${session.user.email}`);
        }
    }, [status, session]);

    return null; // Do not render anything to the UI
};

export default User;
