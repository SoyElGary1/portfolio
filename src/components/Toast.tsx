import React, { useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg animate-slide-up transition-all duration-300">
      <div
        className={`${
          type === 'success'
            ? 'bg-green-800 text-green-100'
            : 'bg-red-800 text-red-100'
        } flex items-center gap-2 pr-2`}
      >
        {type === 'success' ? (
          <CheckCircle className="h-5 w-5" />
        ) : (
          <XCircle className="h-5 w-5" />
        )}
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-2 p-1 hover:bg-black/10 rounded-full transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;