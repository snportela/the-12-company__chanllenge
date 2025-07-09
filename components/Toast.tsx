"use client";
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from "lucide-react";
import { createContext, useContext, useState } from "react";

type ToastType = "success" | "error" | "warning" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (message: string, type: ToastType, duration?: number) => void;
  removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

const Toast: React.FC<{ toast: Toast; onRemove: (id: number) => void }> = ({
  toast,
  onRemove,
}) => {
  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    error: <AlertCircle className="w-5 h-5 text-red-500" />,
    warning: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />,
  };

  const colors = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  };

  return (
    <div className="relative flex items-center p-3 border rounded-lg shadow-sm bg-white animate-slideinright">
      <span
        className={`absolute top-0 bottom-0 left-0 w-2 ${
          colors[toast.type]
        } border rounded-l-lg`}
      />
      {icons[toast.type]}
      <span className="ml-3 mr-2 text-sm font-small text-gray-600">
        {toast.message}
      </span>
      <button
        onClick={() => onRemove(toast.id)}
        className="ml-auto text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: ToastType, duration?: number) => {
    const id = Math.random();
    const newToast: Toast = { id, message, type, duration };
    setToasts((prevToasts) => [...prevToasts, newToast]);
    setTimeout(() => removeToast(id), newToast.duration || 3000);
  };

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <Toast
            toast={toast}
            key={toast.id}
            onRemove={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
