"use client";
import { Moon, Sun } from "lucide-react";

export function toggleTheme() {
  const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch {}
}

export function ThemeToggle() {
  return (
    <button type="button" onClick={toggleTheme} aria-label="Toggle color theme" className="btn btn-ghost !p-2">
      <Moon size={16} className="t-moon" aria-hidden />
      <Sun size={16} className="t-sun" aria-hidden />
    </button>
  );
}
