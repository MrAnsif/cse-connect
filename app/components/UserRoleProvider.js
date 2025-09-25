"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useUserStore } from "@/lib/store/useUserStore";

export default function UserRoleProvider({ children }) {
  const { user, isLoaded } = useUser();
  const setRole = useUserStore((state) => state.setRole);

  useEffect(() => {
    if (isLoaded && user) {
      const role = user.publicMetadata?.role;
      setRole(role);
    }
  }, [isLoaded, user, setRole]);

  return children;
}
