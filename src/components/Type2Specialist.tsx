"use client"

import { motion } from "framer-motion"
import { 
  Users, 
  Scale, 
  Target, 
  Search, 
  AlertTriangle, 
  Activity, 
  ArrowRight,
  Stethoscope,
  Pill,
  ShieldCheck,
  ChevronRight,
  TrendingDown,
  Info
} from "lucide-react"

const medicineClasses = [
  { name: "Biguanide (Metformin)", work: "Lowers liver glucose, improves insulin sensitivity.", icon: ShieldCheck, color: "text-emerald-500" },
  { name: "Sulfonylureas", work: "Increases insulin release from pancreas.", icon: Pill, color: "text-blue-500" },
  { name: "TZDs", work: "Helps cells use insulin more effectively.", icon: Target, color: "text-purple-500" },
  { name: "Alpha-Glucosidase", work: "Delays sugar absorption from intestines.", icon: Activity, color: "text-amber-500" },
]

const sideEffects = [
  { med: "Metformin", effect: "Nausea, Diarrhea (fewer if taken with meals)", type: "Gastrointestinal" },
  { med: "Sulfonylureas", effect: "Hypoglycemia & Weight Gain", type: "Metabolic" },
  { med: "TZDs", effect: "Can affect liver (requires blood tests)", type: "Organ Stress" },
  { med: "Acarbose", effect: "Extreme gas and bloating", type: "Gastrointestinal" },
]

export function Type2Specialist() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24 border-t border-white/10 bg-slate-900/10">
      
      {/* Header section with focus on Obesity & Metabolic Link */}
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-[10px] font-bold uppercase tracking-widest">
            <Users className="w-4 h-4" />
            Specialist Module: Type 2
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Metabolic Resistance <br /> & <span className="text-secondary text-glow">Type 2 Evolution.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            Type 2 diabetes stems from insulin resistance—where your body’s cells fail to respond to the insulin produced. This is most often linked to obesity and family history.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <Scale className="text-secondary w-5 h-5" />
              <div className="space-y-0.5">
                <p className="text-[10px] text-slate-500 font-bold uppercase">Critical Factor</p>
                <p className="text-xs font-bold text-white">Abdominal Obesity</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <Activity className="text-blue-400 w-5 h-5" />
              <div className="space-y-0.5">
                <p className="text-[10px] text-slate-500 font-bold uppercase">Basal Metabolic</p>
                <p className="text-xs font-bold text-white">Insulin Overproduction</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 glass-card p-10 rounded-[40px] border-amber-500/10 bg-amber-500/[0.02] relative">
          <div className="absolute top-4 right-4 animate-pulse">
            <AlertTriangle className="text-amber-500 w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-white mb-6">The Hyperosmolar Risk</h4>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            In uncontrolled Type 2, severe high blood sugar can lead to a **Hyperosmolar Coma**. Signs include dehydration, dry skin, and extreme confusion.
          </p>
          <div className="p-4 rounded-xl bg-slate-900 border border-white/10 text-xs text-white flex items-center justify-between">
             <span>Emergency Threshold:</span>
             <span className="font-black text-amber-500">400 - 500 mg/dL</span>
          </div>
        </div>
      </div>

      {/* Medication Classification Table (Visual) */}
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold text-white">Pharmacological Pathways</h3>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">Understanding how your medication works is key to managing the metabolic cycle of Type 2 Diabetes.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {medicineClasses.map((med, i) => (
             <div key={i} className="group p-8 rounded-3xl bg-slate-950/40 border border-white/5 hover:border-secondary/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <med.icon className={`w-6 h-6 ${med.color}`} />
                </div>
                <h4 className="font-bold text-white text-sm mb-3 underline decoration-white/10">{med.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{med.work}</p>
             </div>
          ))}
        </div>
      </div>

      {/* Side Effects & Safety Module */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="p-10 glass-card rounded-[40px] border-rose-500/10 space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-rose-500/10">
              <AlertTriangle className="text-rose-500 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Adverse Reaction Guard</h3>
          </div>
          <div className="space-y-4">
             {sideEffects.map((side, i) => (
               <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                 <div className="space-y-1">
                   <p className="text-xs font-bold text-white">{side.med}</p>
                   <p className="text-[10px] text-slate-500 italic">{side.effect}</p>
                 </div>
                 <div className="text-[8px] font-black uppercase text-slate-500 border border-white/10 px-2 py-1 rounded">
                   {side.type}
                 </div>
               </div>
             ))}
          </div>
        </div>

        <div className="space-y-8 pl-0 lg:pl-10">
           <h3 className="text-3xl font-bold text-white">Clinical Assessment</h3>
           <p className="text-slate-400 text-sm leading-relaxed">Doctors assess Type 2 through combined biological markers. Key focuses include **Abdominal Obesity** (Waist &gt; 40" Men / 35" Women) and the **Lipid Profile** (Atherosclerosis risk).</p>
           
           <div className="space-y-6">
             {[
               { label: "Lipid Profile", desc: "Cholesterol & Triglycerides saturation check." },
               { label: "Blood Creatinine", desc: "Critical screen for Nephropathy (Kidney Disease)." },
               { label: "Filament Test", desc: "Foot exam checking for Neuropathy (Nerve sensitivity)." }
             ].map((test, i) => (
               <div key={i} className="flex gap-6 items-center group cursor-default">
                 <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <ChevronRight className="w-4 h-4 text-secondary" />
                 </div>
                 <div className="space-y-1">
                   <p className="text-sm font-bold text-white group-hover:text-secondary transition-colors">{test.label}</p>
                   <p className="text-xs text-slate-500">{test.desc}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>

      {/* Weight & Management Banner */}
      <div className="p-12 glass-card bg-gradient-to-br from-secondary/10 to-blue-500/10 rounded-[3rem] border-secondary/20 relative overflow-hidden text-center sm:text-left">
           <div className="flex flex-col sm:flex-row items-center justify-between gap-12 relative z-10">
              <div className="space-y-6">
                 <h3 className="text-4xl font-bold text-white">Reversing the <br /> Diagnostic Trend.</h3>
                 <p className="text-slate-400 max-w-lg">While Type 2 is chronic, it can significantly improve in obese patients who successfully manage weight and maintain low body fat.</p>
              </div>
              <div className="flex flex-col gap-4">
                 <button className="px-8 py-4 bg-secondary text-white font-black rounded-2xl shadow-xl shadow-secondary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                   VIEW WEIGHT PROTOCOLS <TrendingDown className="w-5 h-5" />
                 </button>
                 <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                   LIPID PROFILE GUIDE
                 </button>
              </div>
           </div>
      </div>
    </section>
  )
}
