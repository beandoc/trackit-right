"use client"

import { motion } from "framer-motion"
import { 
  Zap, 
  AlertCircle, 
  Droplets, 
  Activity, 
  Skull, 
  Stethoscope, 
  Smartphone, 
  HeartPulse,
  Syringe,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Info
} from "lucide-react"

const type1Symptoms = [
  { title: "Sudden Polyuria", desc: "Frequent urination often appearing abruptly in children." },
  { title: "Chronic Fatigue", desc: "Extreme exhaustion due to lack of glucose absorption." },
  { title: "Rapid Weight Loss", desc: "Unexplained loss despite extreme hunger." },
  { title: "Dermal Infections", desc: "Frequent skin or vaginal infections." },
]

const hypoSymptoms = [
  "Sweating & Trembling",
  "Dizziness & Confusion",
  "Sudden Seizures",
  "Loss of Consciousness"
]

const targetRanges = [
  { label: "Pre-Meal / Fasting", range: "90 - 120 mg/dL", status: "Optimal" },
  { label: "Post-Meal (1-2hr)", range: "120 - 180 mg/dL", status: "Target" },
  { label: "Critical High", range: "500+ mg/dL", status: "Emergency" }
]

export function Type1Specialist() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24 border-t border-white/10">
      
      {/* Hero-like Header for Type 1 */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Zap className="w-4 h-4" />
            Specialist Module: Type 1
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Managing the <br /> <span className="text-primary text-glow">Insulin-Dependent</span> Life.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            Type 1 diabetes is a lifelong condition requiring precision insulin delivery and constant biometric vigilance. This module focuses on the specific needs of insulin-dependent patients.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-3xl bg-red-500/10 border border-red-500/20 space-y-4">
             <div className="flex items-center gap-3 text-red-500">
               <Skull className="w-5 h-5" />
               <span className="text-xs font-bold uppercase tracking-widest">Emergency Alert</span>
             </div>
             <h4 className="font-bold text-white uppercase text-sm tracking-tight">Ketoacidosis (DKA)</h4>
             <p className="text-xs text-slate-400 leading-relaxed italic">Often the first sign in children. Symptoms: Nausea, Vomiting, Confusion, Fainting. Can lead to coma.</p>
          </div>
          <div className="p-6 rounded-3xl bg-blue-500/10 border border-blue-500/20 space-y-4">
             <div className="flex items-center gap-3 text-blue-400">
               <Info className="w-5 h-5" />
               <span className="text-xs font-bold uppercase tracking-widest">Metabolic Fact</span>
             </div>
             <h4 className="font-bold text-white uppercase text-sm tracking-tight">Lifelong Duration</h4>
             <p className="text-xs text-slate-400 leading-relaxed italic">Type 1 lasts for the entire life. Management through control is the primary focus, not a cure.</p>
          </div>
        </div>
      </div>

      {/* Target Range Dashboard */}
      <div className="glass-card p-10 rounded-[40px] border-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -z-10" />
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <Activity className="text-primary" /> Multi-Phase Target Ranges
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
           {targetRanges.map((item, i) => (
             <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4 group hover:bg-white/[0.05] transition-all">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.label}</p>
                <p className="text-3xl font-black text-white group-hover:text-primary transition-colors">{item.range}</p>
                <div className={`inline-block px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter ${item.status === 'Emergency' ? 'bg-red-500/20 text-red-500' : 'bg-primary/20 text-primary'}`}>
                  {item.status}
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Symptoms & Hypoglycemia */}
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-white">Initial Onset Markers</h3>
          <div className="grid gap-4">
            {type1Symptoms.map((s, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">{s.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-500/5 border border-amber-500/10 p-10 rounded-[40px] space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <TrendingDown className="w-24 h-24 text-amber-500" />
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white">Hypoglycemia Guard</h3>
            <p className="text-slate-400 text-sm">Low blood sugar is a serious side effect of insulin. Symptoms must be treated immediately to prevent brain injury.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {hypoSymptoms.map((h, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                <span className="text-xs font-medium text-slate-300">{h}</span>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-200 uppercase tracking-widest text-center">
            Critical High Warning: Call Doctor if &gt; 500 mg/dL
          </div>
        </div>
      </div>

      {/* Treatment Modalities */}
      <div className="space-y-12">
        <h3 className="text-3xl font-bold text-white text-center">Daily Precision Modalities</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 space-y-6 group">
            <Syringe className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold text-white">Daily Injections</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Multiple daily doses (MDI) synchronized with a regular meal schedule to prevent hypoglycemia.</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 space-y-6 group">
            <Smartphone className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold text-white">Insulin Pump</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Continuous delivery system bypassing manual needles. Sends a steady supply + extra bolus for meals.</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 space-y-6 group">
            <HeartPulse className="w-8 h-8 text-rose-500 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold text-white">Biometric Monitoring</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Home testing using electronic meters multiple times per day, especially during habit changes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
