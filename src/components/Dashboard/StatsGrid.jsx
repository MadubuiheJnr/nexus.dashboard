import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { stats } from "../data";

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stats, index) => (
        <div
          key={index}
          className="bg-white/80 dark:bg-slate-900/80  backdrop-blur-xl rounded-2xl p-6 border 
      border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/20 
      dark:hover:shadow-slate-900/20 transition-all duration-300 group"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                {stats.title}
              </p>
              <p className="text-xl font-bold text-slate-800 dark:text-zinc-50 mb-4">
                {stats.value}
              </p>
              <div className="flex items-center space-x-2">
                {stats.trend === "up" ? (
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-500" />
                )}
                <span
                  className={`text-sm font-semibold ${
                    stats.trend === "up" ? "text-emerald-500" : "text-red-500"
                  }`}
                >
                  {stats.change}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 ">
                  VS last month
                </span>
              </div>
            </div>

            <div
              className={`p-3 rounded-xl group-hover:scale-110 transition-all duration-300 ${stats.bgColor}`}
            >
              {<stats.icon className={`w-6 h-6 ${stats.textColor}`} />}
            </div>
          </div>
          {/* Progress bar */}
          <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`w-full h-full bg-gradient-to-r  ${stats.color} rounded-full transition-all duration-100`}
              style={{ width: stats.trend === "up" ? "75%" : "45%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
