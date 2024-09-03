"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center -mt-1">
      {theme === "light" ? (
        <button
          onClick={() => setTheme("dark")}
          className="p-2 bg-gray-200 rounded-full transition-transform transform hover:scale-110 hover:bg-gray-300"
        >
          <IoMoonSharp className="text-gray-800" />
        </button>
      ) : (
        <button
          onClick={() => setTheme("light")}
          className="p-2 bg-gray-700 rounded-full transition-transform transform hover:scale-110 hover:bg-gray-600"
        >
          <IoSunnySharp className="text-yellow-300" />
        </button>
      )}
    </div>
  );
}