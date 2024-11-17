"use client";

import {
  QueryClient,
  QueryClientProvider,
  QueryOptions,
} from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import api from "@/lib/api";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
  const { data } = await api.get(`${queryKey?.[0]}`);
  return data;
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

export default function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" />
      <SessionProvider session={session}>{children}</SessionProvider>
    </QueryClientProvider>
  );
}
