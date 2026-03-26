"use client"

import { motion } from "framer-motion"
import { 
  ShieldCheck, 
  Search, 
  Activity, 
  Dna, 
  AlertTriangle, 
  Users, 
  Clock, 
  ChevronRight,
  TrendingDown,
  Microscope,
  Stethoscope
} from "lucide-react"

const t1Stages = [
  { 
    stage: "Stage 1", 
    title: "Preclinical Autoimmunity", 
    criteria: "≥2 Islet Autoantibodies", 
    status: "Normoglycemia / Asymptomatic",
    desc: "First-phase insulin secretion is impaired, but fasting glucose remains normal."
  },
  { 
    stage: "Stage 2", 
    title: "Preclinical Dysglycemia", 
    criteria: "Abnormal Glucose Tolerance (OGTT)", 
    status: "Dysglycemia / Asymptomatic",
    desc: "Increasing postprandial glucose. Beta cell function drops abruptly 6-12 months before Stage 3."
  },
  { 
    stage: "Stage 3", 
    title: "Clinical Diagnosis", 
    criteria: "ADA Diagnostic Thresholds", 
    status: "Hyperglycemia / Symptomatic",
    desc: "Onset of overt clinical disease. 30% present with DKA under standard care."
  }
]

const screeningProtocol = [
  { item: "GAD65", desc: "Glutamic Acid Decarboxylase", priority: "High" },
  { item: "IA2", desc: "Islet Antigen 2 (High Risk)", priority: "Critical" },
  { item: "ZnT8", desc: "Zinc Transporter 8", priority: "High" },
  { item: "IAA", desc: "Insulin Autoantibodies", priority: "Pediatric" }
]

export function T1ScreeningMonitoring() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24 border-t border-white/5">
      
      {/* Header: Early Detection */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Microscope className="w-4 h-4" />
            Specialist Module: Screening & Disease Prediction
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter">
            Preclinical <br /> <span className="text-primary text-glow">Detection</span> <br /> Framework.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            Identifying Type 1 Diabetes before the onset of symptoms can reduce DKA at diagnosis from **70% to &lt;5%**. Progression is defined by autoantibody status and metabolic staging.
          </p>
        </div>

        <div className="flex-1 bg-slate-950 p-10 rounded-[3rem] border border-white/5 space-y-8">
           <div className="flex justify-between items-center">
              <h4 className="text-sm font-black text-white uppercase tracking-widest">Autoantibody Panel</h4>
              <span className="text-[10px] text-primary font-bold">4-CORE BIOMARKERS</span>
           </div>
           <div className="grid grid-cols-2 gap-4">
              {screeningProtocol.map((p, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-primary/30 transition-all">
                   <p className="text-xs font-black text-white mb-1">{p.item}</p>
                   <p className="text-[10px] text-slate-500 font-medium leading-tight mb-3">{p.desc}</p>
                   <span className={`text-[8px] px-2 py-0.5 rounded font-black uppercase tracking-tighter ${p.priority === 'Critical' ? 'bg-red-500/10 text-red-400' : 'bg-primary/10 text-primary'}`}>
                      {p.priority}
                   </span>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Staging Logic: The Road to Stage 3 */}
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
           <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white tracking-tight">Disease Staging Logic</h3>
              <p className="text-sm text-slate-500 font-medium">Virtually all individuals with ≥2 islet autoantibodies will progress to clinical disease.</p>
           </div>
           <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-white/5">
              <TrendingDown className="text-red-400 w-5 h-5" />
              <div className="text-right">
                 <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Beta Cell Threshold</p>
                 <p className="text-xs text-white font-black">DROP OCCURS 6-12M PRE-DIAGNOSIS</p>
              </div>
           </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
           {t1Stages.map((s, i) => (
             <div key={i} className="flex flex-col p-10 rounded-[3rem] bg-slate-950 border border-white/5 hover:bg-slate-900/50 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors" />
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4">{s.stage}</span>
                <h4 className="text-xl font-bold text-white mb-2 leading-tight">{s.title}</h4>
                <p className="text-[10px] text-slate-400 font-bold mb-6 flex items-center gap-2">
                   <Activity className="w-3 h-3 text-secondary" /> {s.status}
                </p>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5 mb-6">
                   <p className="text-[9px] text-slate-500 font-black uppercase mb-1">Key Criteria</p>
                   <p className="text-xs text-white font-bold">{s.criteria}</p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                   {s.desc}
                </p>
             </div>
           ))}
        </div>
      </div>

      {/* Screening Guidelines & Family Risk */}
      <div className="grid lg:grid-cols-2 gap-12">
         <div className="p-12 glass-card rounded-[3rem] border-white/5 space-y-8 bg-gradient-to-br from-slate-900 to-primary/5">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
               <Users className="text-primary w-6 h-6" />
               Family Risk Stratification
            </h3>
            <div className="space-y-4">
               {[
                 { group: "1st & 2nd Degree Relatives", action: "Screen annually (Ages 2-45y)", risk: "5.0% Absolute Risk" },
                 { group: "No Family History", action: "0.3% General Population Prevalence", risk: "Low Primary Risk" },
                 { group: "Single Autoantibody (non-IA2)", action: "Re-test every 6-12m (Age <3y)", risk: "Partial Progression" }
               ].map((fact, i) => (
                 <div key={i} className="flex justify-between items-center p-5 rounded-2xl bg-slate-950/50 border border-white/5">
                    <div className="space-y-1">
                       <p className="text-xs font-bold text-white">{fact.group}</p>
                       <p className="text-[10px] text-slate-500 font-medium">{fact.action}</p>
                    </div>
                    <span className="text-[10px] font-black text-secondary uppercase tracking-widest">{fact.risk}</span>
                 </div>
               ))}
            </div>
         </div>

         <div className="p-12 rounded-[3rem] border border-white/5 space-y-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
               <ShieldCheck className="text-secondary w-6 h-6" />
               Metabolic Surveillance (OGTT)
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
               The **Oral Glucose Tolerance Test (OGTT)** remains the gold-standard for monitoring disease progression. While A1C is convenient, it frequently remains in the normal range until stage 3 disease is already established.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-6 rounded-2xl bg-slate-950 border border-white/5">
                  <p className="text-[10px] text-slate-500 font-black uppercase mb-2 italic">Standard Frequency</p>
                  <p className="text-sm text-white font-black leading-tight flex items-center gap-2">
                     <Clock className="w-4 h-4 text-primary" /> Every 6m
                  </p>
               </div>
               <div className="p-6 rounded-2xl bg-slate-950 border border-white/5">
                  <p className="text-[10px] text-slate-500 font-black uppercase mb-2 italic">Vulnerable Ped (<span className="text-primary tracking-tighter">&lt;3y</span>)</p>
                  <p className="text-sm text-white font-black leading-tight flex items-center gap-2">
                     <Clock className="w-4 h-4 text-primary" /> Every 3m
                  </p>
               </div>
            </div>
            <p className="text-[10px] text-slate-600 font-medium italic leading-relaxed">
               Confirmed dysglycemia (Stage 2) enables timely access to disease-modifying therapies (e.g. Teplizumab) to delay clinical onset.
            </p>
         </div>
      </div>
    </section>
  )
}
