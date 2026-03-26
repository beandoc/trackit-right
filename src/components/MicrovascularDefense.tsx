"use client"

import { motion } from "framer-motion"
import { 
  Eye, 
  Activity, 
  ShieldAlert, 
  Table, 
  Droplets, 
  CheckCircle2, 
  AlertCircle,
  Zap,
  ChevronRight,
  Target,
  FlaskConical,
  Glasses
} from "lucide-react"

const retinopathyStages = [
  { 
    stage: "Early Stage", 
    name: "Nonproliferative", 
    events: "Microaneurysms develop; blood/fluid leaks into retina tissue.", 
    vision: "Rarely affected at this stage. Annual exams are mandatory.",
    status: "Treatable"
  },
  { 
    stage: "Late Stage", 
    name: "Proliferative", 
    events: "New fragile vessels grow; prone to rupture and bleeding.", 
    vision: "Blurred vision or temporary blindness occurs.",
    status: "Urgent"
  }
]

const kidneyStats = [
  { type: "Type 1 Diabetes", risk: "1 in 3 Patients", desc: "Higher risk of rapid progression without tight control." },
  { type: "Type 2 Diabetes", risk: "1 in 5 Patients", desc: "Often presents with hypertension & metabolic syndrome." }
]

export function MicrovascularDefense() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* Header: The Micro-Vessel Vulnerability */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Eye className="w-4 h-4" />
            Specialist Module: Microvascular (Eye & Kidney) Defense
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-foreground leading-[1.1] tracking-tighter">
            Defending the <br /> <span className="text-primary text-glow">Smallest</span> <br /> Vessels.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-xl font-medium">
             High blood sugar damages the delicate tissues of the eyes and kidneys. **Early detection is the only barrier** against permanent vision loss and kidney failure.
          </p>
        </div>

        <div className="flex-1 glass-card p-12 rounded-[3.5rem] border-primary/20 bg-primary/5 relative group overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Glasses className="w-32 h-32 text-primary" />
           </div>
           <div className="space-y-6 relative z-10">
              <h4 className="text-xl font-bold text-foreground">Diabetic Retinopathy</h4>
              <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed font-medium">
                The leading cause of blindness in adults. Diabetes damages the light-sensitive retina tissue, but laser surgery can preserve vision if found early.
              </p>
              <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-md">
                Annual Eye Exams: Essential Protocol
              </div>
           </div>
        </div>
      </div>

      {/* Retinopathy Stage Table */}
      <div className="space-y-8">
         <div className="flex items-center gap-3">
            <Table className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Retinopathy Clinical Stages</h3>
         </div>
         <div className="grid md:grid-cols-2 gap-8">
            {retinopathyStages.map((stage, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-card border border-border space-y-6 relative group hover:border-primary/40 transition-all">
                <div className="flex justify-between items-start">
                   <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{stage.stage}</p>
                      <h4 className="text-2xl font-black text-foreground">{stage.name}</h4>
                   </div>
                   <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase ${stage.status === 'Urgent' ? 'bg-red-500/10 text-red-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
                      {stage.status}
                   </span>
                </div>
                <div className="space-y-4">
                   <div className="space-y-2">
                      <p className="text-[10px] font-black text-primary uppercase">Pathology</p>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">{stage.events}</p>
                   </div>
                   <div className="space-y-2">
                      <p className="text-[10px] font-black text-primary uppercase">Vision Impact</p>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">{stage.vision}</p>
                   </div>
                </div>
              </div>
            ))}
         </div>
      </div>

      {/* Nephropathy: Kidney Defense */}
      <div className="p-12 glass-card rounded-[3rem] border-border bg-gradient-to-br from-background to-emerald-500/5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
             <div className="space-y-4">
               <h3 className="text-3xl font-bold text-foreground flex items-center gap-3">
                 <FlaskConical className="text-emerald-500 w-8 h-8" />
                 Nephropathy Risk Profile
               </h3>
               <p className="text-sm text-slate-500 font-medium">Kidney disease affects a significant portion of patients, but risk can be cut in half.</p>
             </div>

             <div className="space-y-4">
                {kidneyStats.map((stat, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-border group hover:bg-emerald-500/10 transition-colors">
                     <div className="p-3 bg-emerald-500/10 rounded-xl h-fit">
                        <Droplets className="w-5 h-5 text-emerald-500" />
                     </div>
                     <div>
                        <h5 className="text-sm font-black text-foreground uppercase tracking-widest mb-1">{stat.type}</h5>
                        <p className="text-lg font-black text-emerald-500">{stat.risk}</p>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium pt-1">{stat.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="space-y-8 p-10 bg-card rounded-[3rem] border border-border flex flex-col items-center text-center justify-center relative overflow-hidden group h-full">
             <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform">
                <Target className="w-40 h-40 text-emerald-500" />
             </div>
             <h4 className="text-2xl font-black text-foreground">The Protocol for Prevention</h4>
             <div className="space-y-6 text-left w-full mt-6">
                {[
                  "Tight Glycemic Control (Cuts risk by 50%)",
                  "ACE Inhibitor therapy (Clinical stop-gap)",
                  "Regular Microalbuminuria testing",
                  "Blood Pressure Management (< 130/80)"
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 group/item">
                     <CheckCircle2 className="w-4 h-4 text-emerald-500 group-hover/item:scale-125 transition-transform" />
                     <span className="text-xs font-bold text-slate-500 group-hover/item:text-foreground transition-colors">{step}</span>
                  </div>
                ))}
             </div>
             <button className="mt-12 w-full py-5 bg-primary text-white font-black rounded-xl text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group">
                FIND AN OPHTHALMOLOGIST <ChevronRight className="w-4 h-4 group-hover:translate-x-1" />
             </button>
          </div>
        </div>
      </div>

    </section>
  )
}
