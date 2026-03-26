"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { 
  Zap, 
  Activity, 
  Settings, 
  Smartphone, 
  Syringe, 
  Baby, 
  AlertCircle,
  TrendingUp,
  Target,
  Clock,
  ChevronRight,
  ShieldAlert,
  Droplets
} from "lucide-react"

const clinicalHoneymoon = {
  title: "The Honeymoon Phase",
  desc: "A temporary period of partial remission where remaining beta cells recover, reducing exogenous insulin needs to <0.5 units/kg/day.",
  warning: "Hypoglycemia risk is high; rapid dose reduction is mandatory."
}

const aidBenefits = [
  { label: "A1C Reduction", value: "-0.41%", desc: "In pediatric trials (2025 Meta-analysis)." },
  { label: "Time in Range", value: "+11.5%", desc: "Overall improvement in glycemic stability." },
  { label: "Overnight TIR", value: "+19.7%", desc: "Significant reduction in nocturnal variability." }
]

export function PediatricInsulinTherapy() {
  const { theme } = useTheme()

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* Header: Technological Standard */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Zap className="w-4 h-4" />
            Specialist Module: Pediatric Insulin Physiology
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-foreground leading-[1.1] tracking-tighter">
            Automated <br /> <span className="text-primary text-glow">Delivery</span> <br /> Standard.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-xl font-medium">
            2025 clinical consensus identifies **Automated Insulin Delivery (AID)** as the standard of care for pediatric T1DM, significantly improving nocturnal stability and A1C metrics.
          </p>
          <div className="flex flex-wrap gap-4">
             <div className="px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-xl border border-border flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-black uppercase text-foreground">Target A1C &lt; 7.0%</span>
             </div>
             <div className="px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-xl border border-border flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="text-[10px] font-black uppercase text-foreground">Time in Range &gt; 70%</span>
             </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
           {aidBenefits.map((stat, i) => (
             <div key={i} className="p-8 rounded-[32px] bg-card border border-border hover:border-primary/30 transition-all group">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2">{stat.label}</p>
                <h4 className="text-3xl font-black text-foreground group-hover:text-primary transition-colors">{stat.value}</h4>
                <p className="text-xs text-slate-500 mt-2 font-medium">{stat.desc}</p>
             </div>
           ))}
        </div>
      </div>

      {/* Dosing Architecture: MDI vs AID */}
      <div className="p-12 glass-card rounded-[3rem] border-border bg-gradient-to-br from-background to-primary/5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
             <div className="space-y-4">
               <h3 className="text-3xl font-bold text-foreground flex items-center gap-3">
                 <Settings className="text-primary w-8 h-8" />
                 Initial Dosing Framework
               </h3>
               <p className="text-sm text-slate-500 font-medium">Weight-based estimation for newly diagnosed pediatric patients.</p>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { range: "0.3 - 0.7 u/kg", label: "Prepubertal", context: "Classic new onset" },
                  { range: "0.7 - 1.5 u/kg", label: "Pubertal", context: "Hormonal resistance" },
                  { range: "< 0.5 u/kg", label: "Honeymoon", context: "Partial remission" },
                  { range: "1:10 - 1:50", label: "ICR", context: "Carb Coverage Ratio" }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-border flex flex-col gap-2">
                     <span className="text-2xl font-black text-primary">{item.range}</span>
                     <span className="text-[10px] font-black uppercase tracking-widest text-foreground">{item.label}</span>
                     <span className="text-[9px] text-slate-500 uppercase font-bold">{item.context}</span>
                  </div>
                ))}
             </div>
          </div>

          <div className="space-y-8 p-10 bg-card rounded-[2.5rem] border border-border relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Activity className="w-32 h-32 text-primary" />
             </div>
             
             <h4 className="text-xl font-bold text-foreground">The 50/50 Rule (MDI)</h4>
             <div className="space-y-6">
                <div className="flex gap-4">
                   <div className="w-1.5 h-auto bg-primary rounded-full" />
                   <div>
                      <p className="text-xs font-black uppercase text-foreground transition-colors group-hover:text-primary">50% Basal</p>
                      <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1">
                        Long-acting analogs (Glargine/Degludec) to suppress hepatic glucose production.
                      </p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-1.5 h-auto bg-secondary rounded-full" />
                   <div>
                      <p className="text-xs font-black uppercase text-foreground transition-colors group-hover:text-secondary">50% Bolus</p>
                      <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1">
                        Rapid-acting analogs (Aspart/Lispro) for carbohydrate coverage & correction.
                      </p>
                   </div>
                </div>
             </div>
             <div className="pt-6 border-t border-border">
                <p className="text-[9px] text-slate-500 font-bold uppercase italic tracking-tighter">
                   *Correction Factor (ISF) calculation: 1800 / Total Daily Dose
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* AID Technology: AI Stewardship */}
      <div className="grid lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 p-12 glass-card border-primary/20 bg-primary/5 rounded-[3rem] space-y-8 relative overflow-hidden">
            <div className="relative z-10 flex flex-col h-full justify-between gap-12">
               <div className="space-y-6">
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-primary rounded-2xl">
                        <Smartphone className="text-white w-6 h-6" />
                     </div>
                     <h3 className="text-3xl font-black text-foreground">HCL: Hybrid Closed Loop</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl font-medium">
                     The current 2025 standard utilizes an algorithm to automate basal delivery based on real-time CGM data. This "Intelligent Stewardship" reduces the burden of manual adjustments, especially during sleep.
                  </p>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                     { t: "Basal", d: "Auto-adjusted", icon: Activity },
                     { t: "Meals", d: "User-initiated bolus", icon: Target },
                     { t: "Correction", d: "Auto-microbolus", icon: Settings }
                  ].map((feat, i) => (
                     <div key={i} className="space-y-2">
                        <feat.icon className="w-5 h-5 text-primary" />
                        <p className="text-[10px] font-black uppercase text-foreground">{feat.t}</p>
                        <p className="text-[11px] text-slate-500 font-medium">{feat.d}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="p-12 glass-card bg-amber-500/5 border-amber-500/10 rounded-[3rem] space-y-6 flex flex-col items-center text-center justify-center">
            <ShieldAlert className="text-amber-500 w-12 h-12" />
            <h4 className="text-xl font-bold text-foreground">Pump Failure (DKA Risk)</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
               Pumps lack long-acting insulin depots. **Infusion set failure** can lead to DKA within hours. Ketone testing is mandatory for persistent unexplained hyperglycemia.
            </p>
            <div className="h-[1px] bg-border w-full" />
            <button className="flex items-center gap-2 text-[10px] font-black text-amber-600 dark:text-amber-500 uppercase tracking-widest group">
               VIEW EMERGENCY PROTOCOL <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
         </div>
      </div>

      {/* Special Situations: The Vulnerable Honeymoon */}
      <div className="grid lg:grid-cols-2 gap-12">
         <div className="p-10 rounded-[3rem] border border-border bg-card space-y-6">
            <div className="flex items-center gap-3">
               <Baby className="w-6 h-6 text-primary" />
               <h4 className="text-xl font-bold text-foreground">Infants & Toddlers (&lt; 0.5u)</h4>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
               Precision is critical. **Dilute Insulin (U-10/U-20)** may be required for doses under 0.5 units to prevent catastrophic hypoglycemia in metabolically volatile toddlers.
            </p>
         </div>

         <div className="p-10 rounded-[3rem] border border-border bg-card space-y-6">
            <div className="flex items-center gap-3">
               <TrendingUp className="text-secondary w-6 h-6" />
               <h4 className="text-xl font-bold text-foreground">{clinicalHoneymoon.title}</h4>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
               {clinicalHoneymoon.desc} <br />
               <span className="text-primary font-black mt-2 block uppercase text-[10px]">{clinicalHoneymoon.warning}</span>
            </p>
         </div>
      </div>

    </section>
  )
}
