"use client"

import { motion } from "framer-motion"
import { Localizer } from "./Localizer"
import { Search, Bell, User, LayoutDashboard, Calendar, Activity, ClipboardList } from "lucide-react"
import Link from "next/link"

const navItems = [
  { name: "Clinical Dashboard", icon: LayoutDashboard, href: "#" },
  { name: "Knowledge Hub", icon: ClipboardList, href: "#specialist-hub" },
]

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-8 py-3 rounded-2xl border-white/5 bg-slate-900/40">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.3)]">
            <Activity className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Track-it-Right
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <Localizer />
          <div className="h-8 w-[1px] bg-white/10 mx-1" />
          <button className="p-2 text-slate-400 hover:text-white transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-slate-950" />
          </button>
          <div className="h-8 w-[1px] bg-white/10 mx-1" />
          <button className="flex items-center gap-3 pl-2 group">
            <div className="w-9 h-9 rounded-full border border-white/20 overflow-hidden group-hover:border-primary transition-colors">
              <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                <User className="w-5 h-5 text-slate-400" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  )
}
