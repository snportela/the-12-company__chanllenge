"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Moon, Sun, User } from "lucide-react";

import { credentials, isAuthenticated, logout } from "@/lib/auth";

const Dashboard = () => {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<string>("light");

  if (theme === "light") {
    document.body.classList.replace("dark", "light");
  } else {
    document.body.classList.replace("light", "dark");
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

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
    <div className="min-h-screen bg-primary-background">
      <nav className="bg-secondary-background shadow-sm border-b border-menu-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-title-text">
                <span className="gradient-text from-secondary-purple to-primary-purple">
                  Capivara AI
                </span>
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-primary-text">
                <User size={20} />
                <span>Usuário Logado</span>
              </div>
              <div className="flex gap-1 bg-button-background rounded-xl p-1">
                <button
                  onClick={() => setTheme("light")}
                  className="text-primary-text bg-button-light hover:bg-button-hover p-2 rounded-xl"
                >
                  <Sun />
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className="text-primary-text bg-button-dark hover:bg-button-hover p-2 rounded-xl"
                >
                  <Moon />
                </button>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-primary-text hover:text-primary-purple transition-colors"
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
          <div className="bg-secondary-background rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-title-text mb-4">
              Bem-vindo ao Dashboard!
            </h2>
            <p className="text-secondary-text mb-4">
              Você está logado com sucesso. Esta é uma página de exemplo do
              dashboard.
            </p>
            <div className="bg-table-background border border-table-border rounded-lg p-4">
              {isLoading ? (
                <div>
                  <table className="text-title-text w-full">
                    <thead>
                      <tr>
                        <th className="text-center text-lg border-r border-secondary-text">
                          Usuário
                        </th>
                        <th className="text-center text-lg">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="w-[50%] text-center animate-pulse">
                        <td className="w-[50%] text-center border-r border-secondary-text">
                          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-[30%] mx-auto mb-4" />
                        </td>
                        <td>
                          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-[45%] mx-auto mb-4" />
                        </td>
                      </tr>
                      <tr className="w-[50%] text-center animate-pulse">
                        <td className="w-[50%] text-center border-r border-secondary-text">
                          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-[35%] mx-auto mb-4" />
                        </td>
                        <td>
                          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-[60%] mx-auto mb-4" />
                        </td>
                      </tr>
                      <tr className="w-[50%] text-center animate-pulse">
                        <td className="w-[50%] text-center border-r border-secondary-text">
                          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-[20%] mx-auto mb-4" />
                        </td>
                        <td>
                          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-[55%] mx-auto mb-4" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <table className="text-title-text w-full">
                  <thead>
                    <tr>
                      <th className="text-center text-lg border-r border-secondary-text">
                        Usuário
                      </th>
                      <th className="text-center text-lg">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {credentials.users.map((user) => {
                      return (
                        <tr className="w-[50%] text-center" key={user.username}>
                          <td className="w-[50%] text-center border-r border-secondary-text">
                            {user.username}
                          </td>
                          <td>{user.email}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
