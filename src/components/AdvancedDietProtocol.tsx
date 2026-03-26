"use client"

import { motion } from "framer-motion"
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
  ChevronRight
} from "lucide-react"

const dietPillars = [
  { 
    title: "Caloric Deficit", 
    value: "-500 kcal", 
    desc: "Targeted daily reduction to trigger metabolic weight loss.",
    icon: TrendingDown,
    color: "bg-emerald-500/10 text-emerald-500"
  },
  { 
    title: "Macro Distribution", 
    value: "50/30/20", 
    desc: "50% Complex Carbs, 30% Healthy Fats, 20% Lean Protein.",
    icon: Target,
    color: "bg-primary/10 text-primary"
  },
  { 
    title: "Fiber Richness", 
    value: "High Fiber", 
    desc: "Whole grains, lentils, and fresh vegetables for glucose stability.",
    icon: Leaf,
    color: "bg-secondary/10 text-secondary"
  },
  { 
    title: "Meal Timing", 
    value: "Frequent", 
    desc: "Smaller, frequent meals to minimize blood sugar spikes.",
    icon: Clock,
    color: "bg-amber-500/10 text-amber-500"
  }
]

export function AdvancedDietProtocol() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24 border-t border-white/5">
      
      {/* Narrative Header: The Weight First Approach */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-[10px] font-bold uppercase tracking-widest">
            <Scale className="w-4 h-4" />
            Specialist Module: Advanced Weight Control
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tighter">
            Weight Loss is <br /> <span className="text-emerald-500 text-glow text-shadow-sm">The First Step</span> to Control.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
             Over 80% of Type 2 patients are overweight. Reducing weight helps your body **use insulin better**, bringing blood sugar into normal ranges and preventing long-term complications.
          </p>
        </div>

        <div className="flex-1 glass-card p-10 rounded-[40px] border-emerald-500/10 bg-emerald-500/[0.02] relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl opacity-50 transition-all group-hover:scale-150" />
           <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <Coffee className="text-emerald-500 w-6 h-6" />
                </div>
                <h4 className="font-bold text-white text-lg underline decoration-emerald-500/30">The Satiety Effect</h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                By focusing on starches and sugars that take longer to digest (Complex Carbohydrates), you feel full longer while taking in fewer calories.
              </p>
              <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest rounded-md">
                Limit Fruit Juices — High Sugar Content
              </div>
           </div>
        </div>
      </div>

      {/* 4-Pillar Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
         {dietPillars.map((pillar, i) => (
           <motion.div 
             key={i}
             whileHover={{ y: -10 }}
             className="p-8 rounded-[36px] bg-slate-950 border border-white/5 hover:border-emerald-500/30 transition-all space-y-6 relative group overflow-hidden"
           >
              <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className={`w-14 h-14 rounded-2xl ${pillar.color} flex items-center justify-center mb-4`}>
                 <pillar.icon className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                 <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{pillar.title}</p>
                 <h4 className="text-2xl font-black text-white">{pillar.value}</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">{pillar.desc}</p>
           </motion.div>
         ))}
      </div>

      {/* Clinical Adherence Module */}
      <div className="p-12 glass-card bg-gradient-to-br from-slate-900 to-emerald-900/10 rounded-[3rem] border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
             <h3 className="text-3xl font-bold text-white tracking-tight">Pattern Shifting</h3>
             <p className="text-slate-400 text-sm leading-relaxed">
               Shifting to smaller, more frequent meals limits the glycemic load your body has to process at once. Combining this with aerobic fit activity creates a powerful metabolic shield.
             </p>
             <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Bhindi & Leafy Greens",
                  "Lentils & Beans (Legumes)",
                  "Whole Grain Breads",
                  "Lean Protein (12-20%)"
                ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 group hover:bg-emerald-500/10 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">{item}</span>
                   </div>
                ))}
             </div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden glass-card p-1">
             <div className="p-10 bg-slate-950/80 rounded-[2.5rem] space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Zap className="text-primary w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white tracking-widest uppercase text-sm">Metabolic Protocol</h4>
                </div>
                <p className="text-xs text-slate-400 italic font-medium leading-relaxed">
                   "Consult your physician before starting this caloric deficit, especially if you have pre-existing cardiovascular or foot circulation issues."
                </p>
                <div className="h-[1px] bg-white/10 w-full" />
                <button className="w-full py-5 bg-emerald-600 rounded-xl font-bold text-white text-xs hover:bg-emerald-500 transition-all flex items-center justify-center gap-3 group">
                  CALCULATE MY DEFICIT TARGET <ChevronRight className="w-4 h-4 group-hover:translate-x-1" />
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
