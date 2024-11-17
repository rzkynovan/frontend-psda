import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8  text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Dashboard</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 ">Anda Berhasil Login</h2>
          <div className="space-y-4">Bismillah Nilai A</div>
        </div>
      </div>
    </div>
  );
}
