"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Menu, 
  X, 
  LayoutDashboard, 
  ClipboardList, 
  User, 
  Settings, 
  LogOut, 
  Heart, 
  ShieldCheck, 
  Activity,
  Bell,
  Search,
  MessageCircle
} from "lucide-react"
import Link from "next/link"

const menuItems = [
  { name: "Clinical Dashboard", icon: LayoutDashboard, href: "#" },
  { name: "Specialist Hub", icon: ClipboardList, href: "#specialist-hub" },
  { name: "Personal Health Plan", icon: ShieldCheck, href: "#" },
  { name: "Vitals Monitor", icon: Activity, href: "#" },
  { name: "Care Team Chat", icon: MessageCircle, href: "#" },
]

export function Sidebar({ isOpen, onToggle }: { isOpen: boolean, onToggle: (open: boolean) => void }) {
  return (
    <>
      {/* Sidebar Overlay (Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onToggle(false)}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[210] lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={{ x: -280 }}
        animate={{ 
          x: isOpen ? 0 : -280
        }}
        className="fixed top-0 left-0 bottom-0 w-[280px] bg-background/95 backdrop-blur-3xl border-r border-border z-[220] transition-transform flex flex-col p-8 group overflow-y-auto shadow-2xl shadow-black/50"
      >
        {/* Close Button (Mobile) */}
        <button
          onClick={() => onToggle(false)}
          className="absolute top-8 right-8 p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
            <Activity className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white line-clamp-1">Track-it-Right</span>
        </div>

        {/* Navigation Section */}
        <div className="flex-1 space-y-2">
          <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-4 ml-2">Medical Navigation</p>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => {
                if (window.innerWidth < 1024) onToggle(false)
              }}
              className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-slate-400 hover:bg-primary/10 hover:text-primary transition-all group/item"
            >
              <item.icon className="w-5 h-5 transition-transform group-hover/item:scale-110" />
              <span className="text-sm font-bold tracking-tight">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* User Card Section */}
        <div className="mt-auto pt-8 border-t border-white/5 space-y-6">
           <div className="flex items-center gap-4 px-2">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-white/10 overflow-hidden">
                 <div className="w-full h-full flex items-center justify-center text-slate-500">
                    <User className="w-6 h-6" />
                 </div>
              </div>
              <div className="flex-1 overflow-hidden">
                 <p className="text-sm font-bold text-white truncate">Dr Sreevatsa T</p>
                 <p className="text-[10px] text-slate-500 font-bold uppercase truncate">Endocrine Specialist</p>
              </div>
           </div>

           <div className="grid grid-cols-2 gap-2">
              <button className="flex items-center justify-center p-3 rounded-xl bg-white/5 text-slate-400 hover:text-white transition-colors">
                 <Settings className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center p-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors">
                 <LogOut className="w-5 h-5" />
              </button>
           </div>
        </div>
      </motion.aside>
    </>
  )
}
