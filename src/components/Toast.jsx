import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isError = toast.type === 'error';

  return (
    <div className="fixed bottom-6 right-6 z-9990 flex max-w-md items-center gap-3 rounded-xl border border-slate-700/80 bg-slate-900/95 p-4 text-slate-100 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-5">
      <div className="shrink-0">
        {isSuccess && <CheckCircle2 className="h-5 w-5 text-emerald-400" />}
        {isError && <AlertCircle className="h-5 w-5 text-rose-400" />}
        {!isSuccess && !isError && <Info className="h-5 w-5 text-cyan-400" />}
      </div>
      <div className="text-sm font-medium leading-snug">
        {toast.message}
      </div>
      <button
        onClick={onClose}
        className="ml-auto shrink-0 rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
        aria-label="Dismiss notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
