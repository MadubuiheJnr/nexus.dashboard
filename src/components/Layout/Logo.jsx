import { Zap } from "lucide-react";

const Logo = ({ collapsed }) => {
  return (
    <>
      <div className="p-4.5 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div
            className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl
            flex items-center justify-center shadow-lg"
          >
            <Zap className="w-6 h-6 text-zinc-50" />
          </div>

          {!collapsed && (
            <div>
              <h1 className="text-xl font-semibold text-slate-800 dark:white">
                Nexus
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Logo;
