"use client";
import { useState } from "react";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
  TbPlus,
  TbTrash,
} from "react-icons/tb";

interface Strategy {
  id: number;
  name: string;
}

const StrategiesSideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [strategies, setStrategies] = useState<Strategy[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);

  const addStrategy = () => {
    const newStrategy = {
      id: Date.now(),
      name: `New strategy ${strategies.length + 1}`,
    };
    setStrategies((prev) => [...prev, newStrategy]);
    setActiveId(newStrategy.id);
  };

  const deleteStrategy = (id: number) => {
    setStrategies((prev) => prev.filter((s) => s.id !== id));
    if (activeId === id) setActiveId(null);
  };

  return (
    // Main Div
    <div
      className={`flex flex-col bg-[#0F2040] border-r border-[#1A2E4A] transition-all duration-200${
        collapsed ? "w-12 min-w-12" : "w-64 min-w-64"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#1A2E4A]">
        {!collapsed && (
          <span className="text-[#C8D8EB] text-xl font-medium">Strategies</span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-[#60A5FA] hover:bg-[#162B50] p-1 rounded-md transition-colors"
        >
          {collapsed ? (
            <TbLayoutSidebarLeftExpand size={20} />
          ) : (
            <TbLayoutSidebarLeftCollapse size={20} />
          )}
        </button>
      </div>

      {/* Body */}
      {!collapsed && (
        <div className="flex flex-col gap-1.5 p-2 flex-1 overflow-y-auto ">
          <button
            onClick={addStrategy}
            className="flex items-center gap-2 w-full px-3 py-2 text-[#60A5FA] text-sm border border-[#1A2E4A] rounded-lg hover:bg-[#162B50] hover:border-[#60A5FA] transition-colors"
          >
            <TbPlus size={16} />
            New strategy
          </button>

          {/* Strategy Selections */}
          {strategies.map((s) => (
            <div
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`group flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                activeId === s.id
                  ? "bg-[#162B50] border border-[#60A5FA] text-[#60A5FA]"
                  : "hover:bg-[#162B50] text-[#C8D8EB]"
              }`}
            >
              <span className="text-sm truncate">{s.name}</span>
              {/* Delete Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteStrategy(s.id);
                }}
                className="opacity-0 group-hover:opacity-100 text-[#4A6080] hover:text-red-400 transition-all p-0.5 rounded"
              >
                <TbTrash size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StrategiesSideBar;
