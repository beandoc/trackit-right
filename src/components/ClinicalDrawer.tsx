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
  perspective?: 'caregiver' | 'patient'
  onPerspectiveChange?: (p: 'caregiver' | 'patient') => void
}

export function ClinicalDrawer({ 
  isOpen, 
  onClose, 
  title, 
  icon: Icon, 
  children,
  description = "Simplified guides for patients and families.",
  perspective = 'caregiver',
  onPerspectiveChange
}: ClinicalDrawerProps) {
  const [activePerspective, setActivePerspective] = React.useState<'caregiver' | 'patient'>(perspective)

  const togglePerspective = (mode: 'caregiver' | 'patient') => {
    setActivePerspective(mode)
    onPerspectiveChange?.(mode)
  }
  
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
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={{ left: 0, right: 0.5 }}
            onDragEnd={(_, info) => {
              if (info.offset.x > 100) onClose()
            }}
            className="fixed top-0 right-0 h-full w-full lg:w-[850px] bg-background border-l border-border z-[160] shadow-2xl flex flex-col touch-none"
          >
            {/* Header */}
            <header className="p-8 border-b border-border space-y-8 shrink-0 bg-background/50 backdrop-blur-md">
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-2xl font-black text-foreground tracking-tighter capitalize">{title}</h2>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                      <Info className="w-3 h-3" />
                      {description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-3 rounded-xl hover:bg-white/5 text-muted-foreground hover:text-foreground transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={onClose}
                    className="p-3 rounded-xl bg-muted hover:bg-accent/10 text-foreground transition-colors group"
                  >
                    <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Perspective Selector */}
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-muted/50 border border-border w-fit">
                <button
                  onClick={() => togglePerspective('caregiver')}
                  className={cn(
                    "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                    activePerspective === 'caregiver' 
                      ? "bg-primary text-white shadow-lg shadow-primary/20" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Caregiver Guide
                </button>
                <button
                  onClick={() => togglePerspective('patient')}
                  className={cn(
                    "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                    activePerspective === 'patient' 
                      ? "bg-secondary text-white shadow-lg shadow-secondary/20" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Patient Education
                </button>
              </div>
            </header>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-8 lg:p-12 bg-background select-text touch-pan-y">
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
                {children}
              </div>
            </div>

            {/* Footer / Utilities */}
            <footer className="p-6 border-t border-border bg-background/50 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
               <div className="flex items-center gap-6">
                 <div className="flex -space-x-3">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold text-foreground">
                        {String.fromCharCode(64 + i)}
                     </div>
                   ))}
                   <div className="w-8 h-8 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center text-[10px] font-black text-primary">
                     +12
                   </div>
                 </div>
                  <p className="text-[10px] text-muted-foreground font-medium tracking-wider">Nirogyam Health Education Team</p>
               </div>

               <div className="flex items-center gap-3">
                 <button className="px-6 py-3 rounded-xl bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                   Download Patient Guide
                   <Download className="w-3.5 h-3.5" />
                 </button>
               </div>
            </footer>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
