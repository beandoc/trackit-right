"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Sun, Moon, Languages, Check } from "lucide-react"

const languages = [
  { name: "English", code: "en" },
  { name: "Hindi", code: "hi" },
  { name: "Marathi", code: "mr" },
]

export function Localizer() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [lang, setLang] = React.useState("en")
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  // Ensure component is mounted before rendering theme-dependent UI to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <div className="flex items-center gap-2">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all group"
        aria-label="Toggle Theme"
      >
        {resolvedTheme === "dark" ? (
          <Moon className="w-5 h-5 group-hover:-rotate-12 transition-transform text-primary" />
        ) : (
          <Sun className="w-5 h-5 group-hover:rotate-45 transition-transform text-amber-500" />
        )}
      </button>

      {/* Language Toggle */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all group"
        >
          <Languages className="w-4 h-4" />
          <span className="text-[10px] font-black uppercase tracking-widest">{lang}</span>
        </button>

        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-50" 
              onClick={() => setIsOpen(false)} 
            />
            <div className="absolute top-full right-0 mt-2 w-32 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl z-[60] animate-in fade-in slide-in-from-top-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code)
                    setIsOpen(false)
                    // In a real app, this would trigger a locale change via next-intl or similar
                    console.log(`Language changed to: ${l.code}`)
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-[10px] font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                >
                  {l.name}
                  {lang === l.code && <Check className="w-3 h-3 text-primary" />}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
