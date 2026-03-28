"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="size-10 rounded-md bg-transparent" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="size-10 shrink-0 rounded-md bg-transparent text-heading shadow-none transition-all duration-300 hover:scale-105 hover:bg-primary/15 hover:text-heading focus-visible:ring-primary/30"
      aria-label={isDark ? "Přepnout na světlý motiv" : "Přepnout na tmavý motiv"}
      title={isDark ? "Přepnout na světlý motiv" : "Přepnout na tmavý motiv"}
    >
      {isDark ? <Sun className="size-[1.05rem]" /> : <Moon className="size-[1.05rem]" />}
    </Button>
  );
};

export default ThemeToggle;
