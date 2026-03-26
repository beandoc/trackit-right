"use client"

import { motion } from "framer-motion"
import { 
  Heart, 
  Activity, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Target, 
  ArrowRight,
  ChevronRight,
  Scale,
  Ban,
  Stethoscope,
  Move
} from "lucide-react"

const abcGoals = [
  { 
    letter: "A", 
    title: "A1C (Glycemia)", 
    target: "< 7.0%", 
    desc: "Your average blood sugar over the last 3 months. Essential for long-term vessel flexibility.",
    icon: Activity,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  { 
    letter: "B", 
    title: "Blood Pressure", 
    target: "< 130/80", 
    desc: "High pressure makes your heart work too hard, damaging the delicate arterial lining.",
    icon: Zap,
    color: "text-secondary",
    bg: "bg-secondary/10" 
  },
  { 
    letter: "C", 
    title: "Cholesterol (LDL)", 
    target: "< 100", 
    desc: "Bad (LDL) cholesterol clogs arteries. For established CVD, the target is even lower (< 70).",
    icon: ShieldCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  }
]

const riskFactors = [
  { title: "Smoking", desc: "Doubles the risk of heart attack and stroke.", icon: Ban },
  { title: "Sedentary Lifestyle", desc: "Decreases metabolic flexibility and heart strength.", icon: Move },
  { title: "Medication Adherence", desc: "Missing doses (Statins/ACE inhibitors) increases risks.", icon: Stethoscope }
]

export function VascularDefenseHub() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* Header: The Heart-Diabetes Link */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-500 text-[10px] font-bold uppercase tracking-widest">
            <Heart className="w-4 h-4" />
            Specialist Module: Cardiovascular & Vascular Defense
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-foreground leading-[1.1] tracking-tighter">
            Smart About Your <br /> <span className="text-red-500 text-glow">Heart.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-xl font-medium">
             Heart disease is the **#1 cause of death** in people with diabetes. High glucose, pressure, and fats create a triple-threat that damages your vessels.
          </p>
        </div>

        <div className="flex-1 glass-card p-12 rounded-[3.5rem] border-red-500/20 bg-red-500/5 relative group overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Activity className="w-32 h-32 text-red-500" />
           </div>
           <div className="space-y-6 relative z-10">
              <h4 className="text-xl font-bold text-foreground">The CVD Link</h4>
              <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed font-medium">
                Diabetes damages blood vessels, making them less flexible and prone to blockages. This leads to **Cardiovascular Disease (CVD)** and increased stroke risk.
              </p>
              <div className="inline-block px-3 py-1 bg-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest rounded-md">
                Protocol: Control the ABCs
              </div>
           </div>
        </div>
      </div>

      {/* Grid: The ABCs of Diabetes */}
      <div className="grid md:grid-cols-3 gap-8">
         {abcGoals.map((abc, i) => (
           <div key={i} className="p-10 rounded-[40px] bg-card border border-border group hover:border-primary/40 transition-all space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5 text-6xl font-black group-hover:scale-110 group-hover:opacity-10 transition-all">
                 {abc.letter}
              </div>
              <div className={`w-14 h-14 rounded-2xl ${abc.bg} flex items-center justify-center`}>
                 <abc.icon className={`w-7 h-7 ${abc.color}`} />
              </div>
              <div className="space-y-1">
                 <h4 className="text-xl font-bold text-foreground">{abc.title}</h4>
                 <p className="text-2xl font-black text-primary">{abc.target}</p>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {abc.desc}
              </p>
           </div>
         ))}
      </div>

      {/* Strategic Actions Hub */}
      <div className="p-12 glass-card rounded-[3rem] border-border bg-gradient-to-br from-background to-emerald-500/5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
             <div className="space-y-4">
               <h3 className="text-3xl font-bold text-foreground flex items-center gap-3">
                 <ShieldCheck className="text-emerald-500 w-8 h-8" />
                 Heart-Healthy Protocol
               </h3>
               <p className="text-sm text-slate-500 font-medium">Clear actions you can take today to protect your vascular health.</p>
             </div>

             <div className="grid gap-4">
                {riskFactors.map((risk, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-border group hover:bg-emerald-500/5 transition-colors">
                     <div className="p-3 bg-emerald-500/10 rounded-xl h-fit">
                        <risk.icon className="w-5 h-5 text-emerald-500" />
                     </div>
                     <div>
                        <h5 className="text-sm font-black text-foreground uppercase tracking-widest mb-1">{risk.title}</h5>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">{risk.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="space-y-8 p-10 bg-card rounded-[3rem] border border-border flex flex-col items-center text-center justify-center relative overflow-hidden group h-full">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
             <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-10 h-10 text-primary" />
             </div>
             <h4 className="text-2xl font-black text-foreground">Established CVD Target</h4>
             <div className="space-y-2">
                <p className="text-4xl font-black text-red-500 tracking-tighter">LDL &lt; 70</p>
                <p className="text-sm text-slate-500 max-w-sm leading-relaxed font-medium uppercase tracking-widest">
                  Aggressive lipid control
                </p>
             </div>
             <p className="text-xs text-slate-500 leading-relaxed max-w-xs mt-4">
               If you already have heart disease, the ADA suggests an even more aggressive LDL target to prevent secondary events.
             </p>
             <button className="mt-10 w-full py-5 bg-foreground text-background font-black rounded-xl text-[10px] uppercase tracking-[0.2em] shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group">
                DOWNLOAD CARDIO GUIDE <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>

    </section>
  )
}
