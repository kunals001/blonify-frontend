'use client'

import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <LoadingSpinner/>
      </div>
    );
  }

  return <>{children}</>;
};
