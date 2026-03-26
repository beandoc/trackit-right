"use client"

import { motion } from "framer-motion"
import { 
  Heart, 
  Activity, 
  ShieldAlert, 
  Zap, 
  TrendingUp, 
  ArrowRight,
  ChevronRight,
  Scale,
  Ban,
  Wind,
  Search,
  AlertTriangle
} from "lucide-react"

const macrovascularRisks = [
  { 
    title: "Coronary Heart Disease (CHD)", 
    desc: "Narrowing of arteries to the heart. People with diabetes have the same risk as non-diabetics who have already had a heart attack.",
    icon: Heart,
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  { 
    title: "Stroke (Cerebrovascular)", 
    desc: "High glucose promotes blood clots and faster cholesterol buildup in brain-supplying arteries.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10" 
  },
  { 
    title: "Peripheral Artery Disease (PAD)", 
    desc: "Narrowing of leg arteries. Marked by pain during exercise ('claudication') and slow healing of foot sores.",
    icon: Activity,
    color: "text-primary",
    bg: "bg-primary/10"
  }
]

const metabolicSyndrome = [
  { label: "Abdominal Obesity", value: "Too much belly fat", icon: Scale },
  { label: "Hypertension", value: "High Blood Pressure", icon: Zap },
  { label: "Triglycerides", value: "High Blood Fats", icon: Activity },
  { label: "HDL (Good)", value: "Low Levels", icon: ShieldAlert }
]

export function MacrovascularDefense() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* Header: The Large Vessel Threat */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-500 text-[10px] font-bold uppercase tracking-widest">
            <Heart className="w-4 h-4" />
            Specialist Module: Macrovascular (Heart & Stroke) Defense
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-foreground leading-[1.1] tracking-tighter">
            Defending the <br /> <span className="text-red-500 text-glow">Large</span> <br /> Vessels.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-xl font-medium">
             Arterial narrowing leads to systemic disorders. High-insulin levels and insulin resistance drive a cascade of vascular damage.
          </p>
        </div>

        <div className="flex-1 glass-card p-12 rounded-[3.5rem] border-red-500/20 bg-red-500/5 relative group overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <AlertTriangle className="w-32 h-32 text-red-500" />
           </div>
           <div className="space-y-6 relative z-10">
              <h4 className="text-xl font-bold text-foreground">Metabolic Syndrome</h4>
              <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed font-medium">
                A dangerous cluster of insulin resistance, high blood fats, and hypertension. This syndrome significantly boosts the risk of early-life heart events.
              </p>
              <div className="inline-block px-3 py-1 bg-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest rounded-md">
                Risk Management: CHD, Stroke, & PAD
              </div>
           </div>
        </div>
      </div>

      {/* Grid: Macrovascular Conditions */}
      <div className="grid md:grid-cols-3 gap-8">
         {macrovascularRisks.map((risk, i) => (
           <div key={i} className="p-10 rounded-[40px] bg-card border border-border group hover:border-red-500/40 transition-all space-y-6">
              <div className={`w-14 h-14 rounded-2xl ${risk.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                 <risk.icon className={`w-7 h-7 ${risk.color}`} />
              </div>
              <h4 className="text-xl font-bold text-foreground">{risk.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {risk.desc}
              </p>
           </div>
         ))}
      </div>

      {/* Metabolic Syndrome Architecture */}
      <div className="p-12 glass-card rounded-[3rem] border-border bg-gradient-to-br from-background to-amber-500/5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
             <div className="space-y-4">
               <h3 className="text-3xl font-bold text-foreground flex items-center gap-3">
                 <ShieldAlert className="text-amber-500 w-8 h-8" />
                 The Metabolic Cluster
               </h3>
               <p className="text-sm text-slate-500 font-medium">Identify the four pillars of the syndrome to intervene early.</p>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {metabolicSyndrome.map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-border flex flex-col gap-2 group hover:bg-amber-500/10 transition-colors">
                     <item.icon className="w-5 h-5 text-amber-500 mb-2" />
                     <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{item.label}</span>
                     <span className="text-sm font-bold text-foreground">{item.value}</span>
                  </div>
                ))}
             </div>
          </div>

          <div className="space-y-8 p-10 bg-card rounded-[3rem] border border-border flex flex-col items-center text-center justify-center relative overflow-hidden group h-full">
             <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform">
                <Wind className="w-40 h-40 text-primary" />
             </div>
             <h4 className="text-2xl font-black text-foreground">The Circulation Guardian</h4>
             <div className="space-y-6 text-left w-full mt-6">
                {[
                  "Smoking Cessation (Priority #1)",
                  "Weight Stewardship (ABC Control)",
                  "Regular Aerobic Movement",
                  "Angioplasty/Bypass Screening"
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 group/item">
                     <ArrowRight className="w-4 h-4 text-primary group-hover/item:translate-x-1 transition-transform" />
                     <span className="text-xs font-bold text-slate-500 group-hover/item:text-foreground transition-colors">{step}</span>
                  </div>
                ))}
             </div>
             <button className="mt-12 w-full py-5 bg-red-600 text-white font-black rounded-xl text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-red-600/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group">
                ASSESS VASCULAR RISK <ChevronRight className="w-4 h-4 group-hover:translate-x-1" />
             </button>
          </div>
        </div>
      </div>

    </section>
  )
}
