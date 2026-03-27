"use client"

import { motion } from "framer-motion"
import { Localizer } from "./Localizer"
import { Search, Bell, User, LayoutDashboard, Calendar, Activity, ClipboardList, Menu } from "lucide-react"
import Link from "next/link"

export function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[190] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-4 lg:px-8 py-3 rounded-2xl border-white/5 bg-slate-900/40">
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 lg:hidden">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30">
              <Activity className="text-white w-5 h-5" />
            </div>
            <span className="text-sm font-bold tracking-tight text-foreground">
              Track-it-Right
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search protocols..."
              className="bg-muted border border-border rounded-xl py-2 pl-10 pr-4 text-xs font-medium focus:ring-2 focus:ring-primary/20 transition-all w-64"
            />
          </div>
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
