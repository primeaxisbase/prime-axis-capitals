"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useNavigation() {
  const router = useRouter();

  const goBack = useCallback(() => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  }, [router]);

  const navigateTo = useCallback((path: string) => {
    router.push(path);
  }, [router]);

  const navigateHome = useCallback(() => {
    router.push("/");
  }, [router]);

  return {
    goBack,
    navigateTo,
    navigateHome,
  };
}