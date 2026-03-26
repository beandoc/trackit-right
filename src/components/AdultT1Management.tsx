"use client"

import { motion } from "framer-motion"
import { 
  Activity, 
  Target, 
  Zap, 
  Clock, 
  AlertCircle, 
  Smartphone, 
  ShieldCheck, 
  Heart,
  Search,
  ChevronRight,
  ClipboardCheck,
  Stethoscope
} from "lucide-react"

const glycemicTargets = [
  { group: "A1C Target", value: "< 7.0%", desc: "Individualized to balance complications vs hypoglycemia risk." },
  { group: "Glucose Range", value: "70-180 mg/dL", desc: "Target time-in-range for non-pregnant adults." },
  { group: "Hypo Threshold", value: "< 54 mg/dL", desc: "Critical avoidance zone to prevent severe events." }
]

const managementPillars = [
  { 
    title: "Basal-Bolus Protocol", 
    desc: "Physiologic insulin replacement using long-acting basal and mealtime rapid-acting analogs.",
    icon: Zap,
    tag: "Standard Care"
  },
  { 
    title: "CGM Integration", 
    desc: "Real-time interstitial monitoring to detect trends and automate insulin delivery (AID).",
    icon: Smartphone,
    tag: "Tech-First"
  },
  { 
    title: "Carb Proportionality", 
    desc: "Matching prandial insulin to anticipated glucose excursions and carbohydrate load.",
    icon: Target,
    tag: "Precision"
  },
  { 
    title: "Vascular Shield", 
    desc: "Early intensive therapy reduces retinopathy & nephropathy risk by up to 76%.",
    icon: ShieldCheck,
    tag: "Long-term"
  }
]

export function AdultT1Management() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24 border-t border-white/5">
      
      {/* Header: Adult Specialization */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-[10px] font-bold uppercase tracking-widest">
            <Stethoscope className="w-4 h-4" />
            Specialist Module: Adult T1DM Management
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter">
            Physiologic <br /> <span className="text-secondary text-glow">Insulin</span> <br /> Orchestration.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            Management in non-pregnant adults focuses on replicating the body's natural insulin profile through intensive "Basal-Bolus" coordination and real-time monitoring.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-1 gap-4">
           {glycemicTargets.map((target, i) => (
             <div key={i} className="flex items-center justify-between p-7 rounded-[32px] bg-slate-950 border border-white/5 hover:border-secondary/30 transition-all group">
                <div className="space-y-1">
                   <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{target.group}</p>
                   <p className="text-[11px] text-slate-400 font-medium max-w-[200px]">{target.desc}</p>
                </div>
                <div className="text-3xl font-black text-white group-hover:text-secondary transition-colors">
                   {target.value}
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Management Pillars Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {managementPillars.map((pillar, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-[40px] bg-slate-900 border border-white/5 hover:border-secondary/40 transition-all flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 blur-3xl" />
            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-start">
                 <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                   <pillar.icon className="w-7 h-7 text-slate-400 group-hover:text-secondary" />
                 </div>
                 <span className="text-[9px] font-black text-slate-600 uppercase border border-white/5 px-2 py-0.5 rounded tracking-widest">{pillar.tag}</span>
              </div>
              <h4 className="text-xl font-bold text-white tracking-tight">{pillar.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">{pillar.desc}</p>
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-[10px] font-black text-secondary uppercase tracking-widest group-hover:gap-3 transition-all">
              VIEW CLINICAL DATA <ChevronRight className="w-3 h-3" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Advanced Tech & Older Adults Banner */}
      <div className="p-12 glass-card bg-gradient-to-br from-slate-900 to-secondary/5 rounded-[3rem] border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-lg text-[10px] font-black uppercase tracking-widest">
               <Activity className="w-3 h-3" /> Metabolic Precision
             </div>
             <h3 className="text-3xl font-bold text-white">Technological Stewardship.</h3>
             <p className="text-slate-400 text-sm leading-relaxed">
               **Continuous Glucose Monitoring (CGM)** is no longer optional for high-fidelity care. It provides real-time alerts for nocturnal hypoglycemia and allows **Automated Insulin Delivery (AID)** systems to adjust basal rates dynamically.
             </p>
             <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "70% Time-in-Range Target",
                  "GMI Analysis",
                  "CV (Coefficient of Variation)",
                  "Hypoglycemia Awareness"
                ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 group hover:bg-secondary/10 transition-colors">
                      <ClipboardCheck className="w-4 h-4 text-secondary" />
                      <span className="text-xs font-bold text-slate-300 group-hover:text-white">{item}</span>
                   </div>
                ))}
             </div>
          </div>
          
          <div className="p-10 rounded-[2.5rem] bg-slate-950/50 border border-white/5 space-y-7 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-3xl" />
             <div className="flex items-center gap-4">
                <Heart className="w-8 h-8 text-secondary" />
                <h4 className="text-xl font-black text-white uppercase tracking-tighter italic">Geriatric T1DM Care</h4>
             </div>
             <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                Older adults represent a heterogeneous population where **Safety &gt; A1C Targets**. The priority is eliminating hypoglycemia (especially &lt;54 mg/dL) and high-variability spikes (&gt;250 mg/dL) to preserve cognitive function and physical independence.
             </p>
             <div className="h-[1px] bg-white/5 w-full" />
             <div className="flex justify-between items-center">
                <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest">Safety-First Protocol</span>
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
