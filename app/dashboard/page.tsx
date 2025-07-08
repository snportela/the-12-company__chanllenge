"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogOut, User } from "lucide-react";

import { credentials, isAuthenticated, logout } from "@/lib/auth";

const Dashboard = () => {
  const { push } = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      push("/");
    }
  }, [push]);

  const handleLogout = () => {
    logout();
    push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                <span className="gradient-text from-secondary-purple to-primary-purple">
                  Capivara AI
                </span>
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <User size={20} />
                <span>Usuário Logado</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-primary-purple transition-colors"
              >
                <LogOut size={20} />
                <span>Sair</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Bem-vindo ao Dashboard!
            </h2>
            <p className="text-gray-600 mb-4">
              Você está logado com sucesso. Esta é uma página de exemplo do
              dashboard.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <table className="text-gray-900 w-full">
                <thead>
                  <tr>
                    <th className="text-center text-lg border-r border-gray-300">
                      Usuário
                    </th>
                    <th className="text-center text-lg">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {credentials.users.map((user) => {
                    return (
                      <tr className="w-[50%] text-center" key={user.username}>
                        <td className="w-[50%] text-center border-r border-gray-300">
                          {user.username}
                        </td>
                        <td>{user.email}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
