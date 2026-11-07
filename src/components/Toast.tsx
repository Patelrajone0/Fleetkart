import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning';
  title: string;
  description?: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto p-4 rounded-2xl shadow-xl border border-[#ADBBDA] bg-white flex items-start gap-3 animate-in slide-in-from-right-5 fade-in duration-200"
        >
          {toast.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-[#7091E6] shrink-0 mt-0.5" />
          ) : toast.type === 'warning' ? (
            <AlertCircle className="w-5 h-5 text-[#3D52A0] shrink-0 mt-0.5" />
          ) : (
            <Info className="w-5 h-5 text-[#7091E6] shrink-0 mt-0.5" />
          )}

          <div className="flex-1">
            <h4 className="text-xs sm:text-sm font-bold text-[#3D52A0]">{toast.title}</h4>
            {toast.description && (
              <p className="text-xs text-[#1E293B]/75 mt-0.5">{toast.description}</p>
            )}
          </div>

          <button
            type="button"
            onClick={() => onDismiss(toast.id)}
            className="text-[#8697C4] hover:text-[#3D52A0] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
