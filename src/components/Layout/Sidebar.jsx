import { ChevronDown } from "lucide-react";
import { menuItems } from "../data";
import Logo from "./Logo";
import { useState } from "react";

const Sidebar = ({ collapsed, onToggle, currentPage, onPageChange }) => {
  const [expandedItems, setExpandedItems] = useState(new Set([]));

  const toggleExpanded = (itemID) => {
    const newExpanded = new Set(expandedItems);

    if (newExpanded.has(itemID)) {
      newExpanded.delete(itemID);
    } else {
      newExpanded.add(itemID);
    }

    setExpandedItems(newExpanded);
  };

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-70"
      } transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate900/80 backdrop-blur-xl 
    border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}
    >
      {/* Logo */}
      <Logo collapsed={collapsed} />

      {/* Navigation: Will be displayed dynamically */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          return (
            <div key={item.id}>
              <button
                onClick={() => {
                  if (item.submenu) {
                    toggleExpanded(item.id);
                  } else {
                    onPageChange(item.id);
                  }
                }}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 
                  ${
                    currentPage === item.id || item.active
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-zinc-50 shadow-lg shadow-blue-500/25"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                  }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className={`w-5 h-5`} />
                  {!collapsed && (
                    <>
                      <span className="font-medium ml-2 text-sm">
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-red-500 text-zinc-50 rounded-full">
                          {item?.badge}
                        </span>
                      )}
                      {item.count && (
                        <span className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                          {item.count}
                        </span>
                      )}
                    </>
                  )}
                </div>

                {!collapsed && item.submenu && (
                  <ChevronDown className={`w-4 h-4 transition-transform`} />
                )}
              </button>

              {/* Sub Menus */}
              {!collapsed && item.submenu && expandedItems.has(item.id) && (
                <div className="ml-8 mt-2 space-y-1">
                  {item?.submenu.map((subitem) => {
                    return (
                      <button
                        className="w-full text-left p-2 text-sm text-slate-600 dark:text-slate-400
                       hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100
                        dark:hover:bg-slate-800/50 rounded-lg transition-all"
                      >
                        {subitem.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
          <img
            src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
            alt="user"
            className={`${
              collapsed ? "w-6 h-6" : "w-10 h-10"
            } rounded-full ring-2 ring-blue-500`}
          />
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 dark:text-zinc-50 truncate">
                  Madubuihe Daniel
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  Administrator
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
