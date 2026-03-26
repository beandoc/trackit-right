"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { 
  Baby, 
  Stethoscope, 
  Dna, 
  AlertCircle, 
  Droplets, 
  TrendingUp, 
  Map, 
  ChevronRight,
  Zap,
  Activity,
  UserCheck,
  ArrowUpRight
} from "lucide-react"

const epiStats = [
  { label: "Bimodal Peaks", value: "4-6y & 10-14y", desc: "Most common onset periods in childhood." },
  { label: "DKA Onset", value: "30%", desc: "Present with Diabetic Ketoacidosis at diagnosis." },
  { label: "Adult Diagnosis", value: "25%", desc: "Cases diagnosed after age 18." }
]

const riskFactors = [
  { group: "No Family History", risk: "0.4%", color: "bg-slate-500/10" },
  { group: "Affected Mother", risk: "1 - 4%", color: "bg-primary/10" },
  { group: "Affected Father", risk: "3 - 8%", color: "bg-secondary/10" },
  { group: "Identical Twin", risk: "30 - 65%", color: "bg-red-500/10" }
]

export function Type1Specialist() {
  const { theme } = useTheme()
  
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* Header: The T1DM Definition */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Baby className="w-4 h-4" />
            Specialist Module: Pediatric T1DM
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-foreground leading-[1.1] tracking-tighter">
            Insulin <br /> <span className="text-primary text-glow">Deficiency</span> <br /> Architecture.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
            Type 1 Diabetes Mellitus (T1DM) is caused by the autoimmune destruction of insulin-producing pancreatic beta cells. While primarily a childhood onset, **one-fourth** of cases are now diagnosed in adults.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
           {epiStats.map((stat, i) => (
             <div key={i} className="p-8 rounded-[32px] bg-card border border-border hover:border-primary/30 transition-all group">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2">{stat.label}</p>
                <h4 className="text-3xl font-black text-foreground group-hover:text-primary transition-colors">{stat.value}</h4>
                <p className="text-xs text-slate-500 mt-2 font-medium">{stat.desc}</p>
             </div>
           ))}
        </div>
      </div>

      {/* Clinical Presentation & Stages */}
      <div className="p-12 glass-card bg-gradient-to-br from-slate-900 to-primary/5 rounded-[3rem] border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
             <h3 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
               <Stethoscope className="text-primary w-8 h-8" />
               The 3-Tier Presentation
             </h3>
             <div className="space-y-6">
                {[
                  { t: "Classic New Onset", d: "Polyuria (excessive urination), Polydipsia (thirst), and weight loss with hyperglycemia." },
                  { t: "DKA Emergency", d: "Severe insulin deficiency resulting in ketoacidosis & fruity breath. Requires critical care." },
                  { t: "Silent Discovery", d: "Asymptomatic incidental discovery, often through monitoring first-degree relatives." }
                ].map((item, i) => (
                   <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/5 transition-all">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                         <span className="text-primary font-black text-xs">0{i+1}</span>
                      </div>
                      <div>
                         <h4 className="font-bold text-white text-sm mb-1">{item.t}</h4>
                         <p className="text-[11px] text-slate-400 leading-relaxed font-medium">{item.d}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
          
          <div className="relative group p-1 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent">
             <div className="p-10 bg-slate-950 rounded-[2rem] space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    <Zap className="text-secondary w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white tracking-widest uppercase text-sm">Diagnostic Criteria</h4>
                </div>
                <div className="space-y-3">
                   <div className="flex justify-between items-center text-xs pb-2 border-b border-white/5">
                      <span className="text-slate-400 font-medium">HbA1c</span>
                      <span className="text-white font-black">≥ 6.5%</span>
                   </div>
                   <div className="flex justify-between items-center text-xs pb-2 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Fasting Glucose</span>
                      <span className="text-white font-black">≥ 126 mg/dL</span>
                   </div>
                   <div className="flex justify-between items-center text-xs pb-2 border-b border-white/5">
                      <span className="text-slate-400 font-medium">Random Glucose</span>
                      <span className="text-white font-black">≥ 200 mg/dL</span>
                   </div>
                </div>
                <p className="text-[10px] text-slate-500 italic font-medium leading-relaxed uppercase tracking-tighter">
                   Confirmed by repeat testing unless unequivocal symptoms exist.
                </p>
                <button className="w-full py-4 bg-primary rounded-xl font-bold text-white text-xs hover:bg-primary/80 transition-all flex items-center justify-center gap-2">
                  EXPLORE PATHOPHYSIOLOGY <ChevronRight className="w-4 h-4" />
                </button>
             </div>
          </div>
        </div>
      </div>

      {/* Genetic Risk Scorecard */}
      <div className="space-y-12">
        <div className="text-center space-y-4">
           <h3 className="text-3xl lg:text-4xl font-black text-white">Genetic Susceptibility</h3>
           <p className="text-slate-400 text-sm max-w-xl mx-auto font-medium">Lifetime risk metrics for first-degree relatives and genetically identical profiles.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {riskFactors.map((fact, i) => (
             <motion.div 
               key={i}
               whileHover={{ scale: 1.05 }}
               className={`p-10 rounded-[40px] ${fact.color} border border-white/5 flex flex-col items-center gap-6 text-center`}
             >
                <div className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center shadow-inner">
                   <Dna className="w-7 h-7 text-primary" />
                </div>
                <div>
                   <h4 className="text-2xl font-black text-white leading-none mb-2">{fact.risk}</h4>
                   <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{fact.group}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>

      {/* Specialty Clues: Young Children */}
      <div className="grid lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 p-12 glass-card bg-emerald-500/[0.02] border-emerald-500/10 rounded-[3rem] space-y-8">
            <div className="flex items-center gap-4">
               <AlertCircle className="text-emerald-500 w-8 h-8" />
               <h3 className="text-2xl font-bold text-white">The "Vulnerable Diagnosis" (Age &lt;6y)</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
               Younger children cannot easily communicate thirst or detect polyuria. **Perineal Candidiasis** (diaper rash) in nonverbal infants is a critical pathognomonic clue often missed before DKA onset.
            </p>
            <div className="flex gap-4">
               <div className="flex-1 p-5 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">Primary Symptom</p>
                  <p className="text-xs text-white font-bold">Wet Diaper Frequency</p>
               </div>
               <div className="flex-1 p-5 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">Missing Clues</p>
                  <p className="text-xs text-white font-bold">Inability to seek fluids</p>
               </div>
            </div>
         </div>
         
         <div className="p-12 glass-card bg-secondary/5 border-secondary/10 rounded-[3rem] flex flex-col justify-center gap-6">
            <TrendingUp className="text-secondary w-10 h-10" />
            <h4 className="text-xl font-bold text-white">Global Rising Trend</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
               The incidence of T1DM is rising at **2% annually** globally. Higher rates observed in Finland/Sardinia (65 per 100k).
            </p>
            <div className="h-[1px] bg-white/5 w-full" />
            <button className="flex items-center gap-2 text-[10px] font-black text-secondary uppercase tracking-widest group">
               VIEW EPIDEMIOLOGY DATA <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
         </div>
      </div>
    </section>
  )
}
