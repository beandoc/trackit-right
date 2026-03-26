"use client"

import { motion } from "framer-motion"
import { 
  ShieldAlert, 
  Droplets, 
  Stethoscope, 
  Footprints, 
  AlertCircle,
  Thermometer,
  Zap,
  ChevronRight,
  ShieldCheck,
  Microscope,
  Bug
} from "lucide-react"

const infectionHotspots = [
  { 
    title: "Yeast (Candida)", 
    desc: "Common in the groin or vagina. Fungi thrive on the sugar in your sweat and urine.",
    icon: Bug,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  { 
    title: "Urinary Tract (UTI)", 
    desc: "High glucose in urine provides a 'growth medium' for bacteria to multiply rapidly.",
    icon: Droplets,
    color: "text-blue-500",
    bg: "bg-blue-500/10" 
  },
  { 
    title: "Gums & Oral", 
    desc: "Periodontal disease is more aggressive when sugars are uncontrolled, affecting bone health.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  { 
    title: "Feet & Wounds", 
    desc: "Even minor cuts can become major infections due to poor circulation and immune suppression.",
    icon: Footprints,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  }
]

export function InfectionDefense() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* Header: The Immune Gap */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-500 text-[10px] font-bold uppercase tracking-widest">
            <ShieldAlert className="w-4 h-4" />
            Specialist Module: Immunology & Infection Control
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-foreground leading-[1.1] tracking-tighter">
            The Immune <br /> <span className="text-red-500 text-glow">Compromise.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-xl font-medium">
             High blood sugar sets the stage for bacteria and fungi to grow. It essentially "blinds" your immune system, making it harder to fight off simple germs.
          </p>
        </div>

        <div className="flex-1 glass-card p-12 rounded-[3.5rem] border-red-500/20 bg-red-500/5 relative group overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Microscope className="w-32 h-32 text-red-500" />
           </div>
           <div className="space-y-6 relative z-10">
              <h4 className="text-xl font-bold text-foreground">The "Sugar-Stage" Effect</h4>
              <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed font-medium">
                When blood sugar is high, your body's tissues become a fertile ground for pathogens. **Infections don't just happen; they're fueled by glucose.**
              </p>
              <div className="inline-block px-3 py-1 bg-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest rounded-md">
                Critical: Treat Infections Immediately
              </div>
           </div>
        </div>
      </div>

      {/* Grid: Infection Hotspots */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
         {infectionHotspots.map((spot, i) => (
           <div key={i} className="p-8 rounded-[40px] bg-card border border-border group hover:border-red-500/30 transition-all space-y-6">
              <div className={`w-14 h-14 rounded-2xl ${spot.bg} flex items-center justify-center group-hover:rotate-12 transition-transform`}>
                 <spot.icon className={`w-7 h-7 ${spot.color}`} />
              </div>
              <h4 className="text-xl font-bold text-foreground">{spot.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {spot.desc}
              </p>
           </div>
         ))}
      </div>

      {/* Treatment & Prevention Module */}
      <div className="p-12 glass-card rounded-[3rem] border-border bg-gradient-to-br from-background to-red-500/5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
             <div className="space-y-4">
               <h3 className="text-3xl font-bold text-foreground flex items-center gap-3">
                 <ShieldCheck className="text-emerald-500 w-8 h-8" />
                 Clinical Interventions
               </h3>
               <p className="text-sm text-slate-500 font-medium">How to manage and resolve opportunistic infections effectively.</p>
             </div>

             <div className="space-y-4">
                {[
                  { label: "Antibiotics", desc: "Used for bacterial germs. Always complete the full course as prescribed." },
                  { label: "Antifungals", desc: "Creams, salves, or suppositories for yeast and fungal growth." },
                  { label: "Glycemic Lock", desc: "The infection will likely return if blood sugar remains elevated." }
                ].map((item, i) => (
                   <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-border group hover:bg-red-500/5 transition-colors">
                      <div className="p-3 bg-red-500/10 rounded-xl h-fit">
                         <AlertCircle className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                         <h5 className="text-sm font-black text-foreground uppercase tracking-widest mb-1">{item.label}</h5>
                         <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>

          <div className="space-y-8 p-10 bg-card rounded-[3rem] border border-border flex flex-col items-center text-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                <Thermometer className="w-10 h-10 text-red-500" />
             </div>
             <h4 className="text-2xl font-black text-foreground">Early Detection</h4>
             <p className="text-sm text-slate-500 max-w-sm leading-relaxed font-medium">
               "See a doctor sooner rather than later. Early treatment prevents localized infections from becoming systemic crises (Sepsis)."
             </p>
             <div className="h-[1px] bg-border w-full my-6" />
             <button className="px-8 py-4 bg-red-600 text-white font-black rounded-xl text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-red-600/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group">
                FIND CARE COORDINATOR <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>

    </section>
  )
}
