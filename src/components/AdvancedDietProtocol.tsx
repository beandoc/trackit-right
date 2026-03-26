"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { 
  UtensilsCrossed, 
  Scale, 
  TrendingDown, 
  Leaf, 
  Coffee, 
  Activity, 
  CheckCircle2, 
  Target,
  Clock,
  Zap,
  ChevronRight,
  Calculator,
  AlertTriangle,
  Beaker,
  Wine
} from "lucide-react"

const advancedStrategies = [
  { 
    title: "The 500 Rule", 
    value: "1:10 (Est)", 
    desc: "Rapid-acting ICR = 500 / Total Daily Dose. Essential for precision dosing.",
    icon: Calculator,
    color: "bg-primary/10 text-primary"
  },
  { 
    title: "Protein/Fat Effect", 
    value: "Dual-Wave", 
    desc: "High protein/fat meals may double insulin requirements 3-5h post-meal.",
    icon: Beaker,
    color: "bg-amber-500/10 text-amber-500"
  },
  { 
    title: "Hypo Treatment", 
    value: "10-15g Carb", 
    desc: "Fast-acting carb (glucose) for <70 mg/dL. Re-test in 15 mins.",
    icon: Activity,
    color: "bg-red-500/10 text-red-400"
  },
  { 
    title: "Alcohol Safety", 
    value: "Limit 1-2 Units", 
    desc: "Risk of delayed hypoglycemia. Always consume with food.",
    icon: Wine,
    color: "bg-slate-500/10 text-slate-400"
  }
]

export function AdvancedDietProtocol() {
  const { theme } = useTheme()

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* Header: Medical Nutrition Therapy */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
            <UtensilsCrossed className="w-4 h-4" />
            Specialist Module: Medical Nutrition Therapy (MNT)
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-foreground leading-[1.1] tracking-tighter">
            Precision <br /> <span className="text-primary text-glow text-shadow-sm">Metabolic</span> <br /> Fueling.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-xl font-medium">
             Advanced MNT integrates carbohydrate counting with **fat/protein adjustments** to eliminate erratic postprandial glucose excursions.
          </p>
        </div>

        <div className="flex-1 glass-card p-10 rounded-[3rem] border-border bg-gradient-to-br from-background to-primary/5 relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl opacity-50 transition-all group-hover:scale-150" />
           <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Target className="text-primary w-6 h-6" />
                </div>
                <h4 className="font-bold text-foreground text-lg uppercase tracking-tight">The 1.0% Impact</h4>
              </div>
              <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed font-medium">
                Adherence to a negotiated meal plan is associated with an A1C reduction of up to **1.0 percentage point**, rivaling pharmacological interventions.
              </p>
              <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-md">
                Priority: Carbohydrate Quality & Order
              </div>
           </div>
        </div>
      </div>

      {/* Advanced Strategies Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
         {advancedStrategies.map((pillar, i) => (
            <motion.div 
               key={i}
               whileHover={{ y: -10 }}
               className="p-8 rounded-[40px] bg-card border border-border hover:border-primary/30 transition-all space-y-6 relative group overflow-hidden"
            >
               <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className={`w-14 h-14 rounded-2xl ${pillar.color} flex items-center justify-center mb-4`}>
                  <pillar.icon className="w-7 h-7" />
               </div>
               <div className="space-y-2">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{pillar.title}</p>
                  <h4 className="text-2xl font-black text-foreground">{pillar.value}</h4>
               </div>
               <p className="text-xs text-slate-500 leading-relaxed font-medium">{pillar.desc}</p>
            </motion.div>
         ))}
      </div>

      {/* Precision Dosing Logic */}
      <div className="p-12 glass-card rounded-[3rem] border-border bg-gradient-to-br from-background to-emerald-500/5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
             <h3 className="text-3xl font-bold text-foreground tracking-tight flex items-center gap-3">
               <Scale className="text-emerald-500 w-8 h-8" />
               Weight & TDD Stewardship
             </h3>
             <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
               Weight gain is a common side effect of intensive therapy. Strategic deficit modeling prevents the "Insulin-Weight Spiral."
             </p>
             <div className="space-y-4">
                {[
                  { label: "Weight Maintenance", formula: "Age/Activity Weighted Baseline" },
                  { label: "Target Deficit", formula: "-500 to -1000 kcal/day (1-2 lbs/week)" },
                  { label: "Metabolic Warning", formula: "Avoid <1200 kcal without clinical supervision" }
                ].map((item, i) => (
                   <div key={i} className="flex flex-col p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-border group hover:bg-emerald-500/10 transition-colors">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.label}</span>
                      <span className="text-sm font-bold text-foreground">{item.formula}</span>
                   </div>
                ))}
             </div>
          </div>
          
          <div className="space-y-10">
             <div className="p-10 bg-card rounded-[3rem] border border-border space-y-8 relative group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-500/10 rounded-xl">
                    <AlertTriangle className="text-red-500 w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-foreground tracking-widest uppercase text-sm">Hypoglycemia "Rule of 15"</h4>
                </div>
                <div className="space-y-4">
                   <div className="flex justify-between items-center text-xs pb-3 border-b border-border">
                      <span className="text-slate-500 font-medium">BG 51-70 mg/dL</span>
                      <span className="text-foreground font-black">15g Fast-Acting Carb</span>
                   </div>
                   <div className="flex justify-between items-center text-xs pb-3 border-b border-border">
                      <span className="text-slate-500 font-medium">BG ≤50 mg/dL</span>
                      <span className="text-foreground font-black">20-30g Fast-Acting Carb</span>
                   </div>
                   <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 font-medium">AID/Loop Systems</span>
                      <span className="text-primary font-black">10g (Targeted)</span>
                   </div>
                </div>
                <p className="text-[10px] text-slate-500 italic font-medium leading-relaxed uppercase">
                   Wait 15 mins before re-testing. Avoid overtreating to prevent rebound hyperglycemia.
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* Macronutrient Architecture */}
      <div className="grid lg:grid-cols-2 gap-8">
         <div className="p-12 glass-card border-border rounded-[3rem] space-y-8 bg-card">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Leaf className="text-secondary w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold text-foreground">The "Sequencing" Effect</h3>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-bold">
               Consuming **Fiber (Vegetables) + Protein + Fat** BEFORE carbohydrates significantly blunts postprandial glycemic excursions.
            </p>
            <div className="flex flex-wrap gap-2">
               {["Bhindi", "Leafy Greens", "Lentils", "Legumes", "Nuts", "Seeds"].map((food, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-border text-[10px] font-black text-slate-500 uppercase">{food}</span>
               ))}
            </div>
         </div>

         <div className="p-12 glass-card bg-primary/5 border-primary/10 rounded-[3rem] flex flex-col justify-center gap-6">
            <TrendingDown className="text-primary w-10 h-10" />
            <h4 className="text-xl font-bold text-foreground">Saturated Fat Warning</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
               High saturated fat intake (&gt;10% of total calories) is directly associated with worse glycemic management and increased insulin transition times.
            </p>
            <div className="h-[1px] bg-border w-full" />
            <button className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest group">
               LEARN ADVANCED CARB COUNTING <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
         </div>
      </div>
    </section>
  )
}
