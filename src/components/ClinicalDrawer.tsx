"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Download, Share2, Info } from "lucide-react"
import { cn } from "@/lib/utils"

interface ClinicalDrawerProps {
  isOpen: boolean
  onClose: () => void
  title: string
  icon: React.ElementType
  children: React.ReactNode
  description?: string
}

export function ClinicalDrawer({ 
  isOpen, 
  onClose, 
  title, 
  icon: Icon, 
  children,
  description = "Detailed clinical protocol and scholarly guidance."
}: ClinicalDrawerProps) {
  
  // Close on ESC key
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  // Prevent body scroll when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100]"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full lg:w-[850px] bg-[#020617] border-l border-white/5 z-[110] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <header className="p-8 border-b border-white/5 flex items-center justify-between gap-6 shrink-0 bg-slate-950/50 backdrop-blur-md">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-2xl font-black text-white tracking-tighter uppercase">{title}</h2>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                    <Info className="w-3 h-3" />
                    {description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-3 rounded-xl hover:bg-white/5 text-slate-500 hover:text-white transition-colors">
                  <Download className="w-5 h-5" />
                </button>
                <button 
                  onClick={onClose}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors group"
                >
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                </button>
              </div>
            </header>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-8 lg:p-12">
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
                {children}
              </div>
            </div>

            {/* Footer / Utilities */}
            <footer className="p-6 border-t border-white/5 bg-slate-950/50 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
               <div className="flex items-center gap-6">
                 <div className="flex -space-x-3">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-[#020617] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white">
                        {String.fromCharCode(64 + i)}
                     </div>
                   ))}
                   <div className="w-8 h-8 rounded-full border-2 border-[#020617] bg-primary/20 flex items-center justify-center text-[10px] font-black text-primary">
                     +12
                   </div>
                 </div>
                 <p className="text-[10px] text-slate-500 font-medium tracking-wider">Expert Clinician Review Board</p>
               </div>

               <div className="flex items-center gap-3">
                 <button className="px-6 py-3 rounded-xl border border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2">
                   <Share2 className="w-3.5 h-3.5" />
                   Share Protocol
                 </button>
                 <button className="px-6 py-3 rounded-xl bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                   Open Research Hub
                   <ExternalLink className="w-3.5 h-3.5" />
                 </button>
               </div>
            </footer>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
