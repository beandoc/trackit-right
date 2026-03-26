"use client"

import { motion } from "framer-motion"
import { 
  Dna, 
  Activity, 
  AlertTriangle, 
  Search, 
  Scale, 
  Wind, 
  Moon, 
  CheckCircle2, 
  ChevronRight,
  TrendingDown,
  Microscope,
  UtensilsCrossed
} from "lucide-react"

const diabetesTypes = [
  { 
    title: "Type 1 Diabetes", 
    desc: "Autoimmune destruction of insulin-producing cells. Requires daily exogenous insulin.",
    label: "Autoimmune"
  },
  { 
    title: "Type 2 Diabetes", 
    desc: "The most common form. Occurs when the body resists insulin or the pancreas fails to meet demand.",
    label: "Metabolic"
  },
  { 
    title: "Prediabetes", 
    desc: "Glucose levels are above normal but haven't yet reached Type 2 thresholds. A critical warning phase.",
    label: "Warning Stage"
  }
]

const riskFactors = [
  { factor: "Age 45+", type: "Biological" },
  { factor: "Family History", type: "Genetics" },
  { factor: "Non-Alcoholic Fatty Liver", type: "Clinical" },
  { factor: "Sedentary Lifestyle", type: "Behavioral" },
  { factor: "Gestational History", type: "Clinical" },
  { factor: "Ethnic Predisposition", type: "Biological" },
]

const symptoms = [
  { icon: Activity, text: "Frequent Urination" },
  { icon: Wind, text: "Excessive Thirst" },
  { icon: AlertTriangle, text: "Blurred Vision" },
  { icon: Moon, text: "Chronic Fatigue" },
  { icon: Scale, text: "Weight Shifts" },
  { icon: Microscope, text: "Slow Healing" },
]

export function DiabetesKnowledgeCenter() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24 border-y border-white/5 bg-slate-900/20 rounded-[60px] my-20">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
          <Dna className="w-4 h-4" />
          Clinical Foundation
        </div>
        <h2 className="text-5xl font-bold text-white tracking-tight">Understanding Diabetes</h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          Diabetes is a chronic condition characterized by the body’s inability to properly regulate blood glucose, requiring a precision-led approach to management.
        </p>
      </div>

      {/* Insulin Mechanics Banner */}
      <div className="glass-card p-8 rounded-3xl border-primary/20 bg-primary/5 overflow-hidden relative">
        <div className="flex flex-col md:flex-row gap-8 items-center cursor-default">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <UtensilsCrossed className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-bold text-white">The Insulin-Glucose Gateway</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Glucose is your cells' main energy source, derived from food. <span className="text-primary font-semibold">Insulin</span> acts as the key, allowing blood sugar to enter cells. Without it, sugars build up to dangerous levels in the bloodstream.
            </p>
          </div>
        </div>
      </div>

      {/* Main Types Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {diabetesTypes.map((type, i) => (
          <div key={i} className="group relative p-8 glass-card rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-[60px] group-hover:bg-primary/20 transition-all" />
            <span className="inline-block px-3 py-1 rounded-lg bg-white/5 text-[10px] font-bold text-primary uppercase mb-6">{type.label}</span>
            <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">{type.desc}</p>
            <div className="flex items-center gap-2 text-primary font-bold text-xs cursor-pointer group-hover:gap-3 transition-all">
              Clinical Details <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Bi-column: Symptoms & Diagnosis */}
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Symptoms Visual Grid */}
        <div className="space-y-12">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Warning Indicators</h3>
            <p className="text-slate-400 text-sm">Early detection through physiological markers is critical for preventing acute complications.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
             {symptoms.map((symp, i) => (
               <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 group hover:bg-slate-800/40 transition-colors">
                 <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                   <symp.icon className="w-5 h-5 text-slate-500 group-hover:text-primary transition-colors" />
                 </div>
                 <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{symp.text}</span>
               </div>
             ))}
          </div>
        </div>

        {/* Diagnosis Methods */}
        <div className="glass-card p-10 rounded-3xl space-y-10 border-primary/10">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white">Diagnostic Protocols</h3>
            <p className="text-slate-400 text-sm">Doctors utilize standardized laboratory metrics to confirm glucose dysregulation.</p>
          </div>
          
          <div className="space-y-6">
            {[
              { label: "HbA1c Analysis", desc: "Diabetes confirmed at 6.5% or above", trend: "6.5%+" },
              { label: "Fasting Plasma (FPG)", desc: "Requires 8-hour fast. Normal < 100 mg/dL", trend: "126+ mg/dL" },
              { label: "Oral Tolerance (OGTT)", desc: "Standard glucose load response test", trend: "Stress Test" }
            ].map((test, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-slate-950/40">
                <div className="space-y-1">
                  <p className="font-bold text-white">{test.label}</p>
                  <p className="text-xs text-slate-500">{test.desc}</p>
                </div>
                <div className="text-[10px] font-bold text-primary border border-primary/30 px-3 py-1 rounded-md">
                  {test.trend}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Risk Profiler Section */}
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold text-white">Am I at Risk?</h3>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">Clinical risk profiling for Type 2 Diabetes is based on a multi-factorial assessment of biology and lifestyle.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {riskFactors.map((risk, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center group hover:border-primary/20 transition-all">
              <p className="text-[10px] font-bold text-slate-500 uppercase mb-3">{risk.type}</p>
              <p className="text-sm font-bold text-slate-300 group-hover:text-white transition-colorsLeading-tight">{risk.factor}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Takeaways Section */}
      <div className="relative p-12 rounded-[40px] overflow-hidden bg-gradient-to-br from-indigo-950/40 to-slate-950 border border-white/10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.1),transparent_60%)]" />
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-white">Clinical Consistency <br /> Over Perfection.</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Managing diabetes is a long-term strategy centered on sustainable habits and regular biometric tracking.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-primary rounded-xl font-bold text-sm text-white hover:scale-105 transition-all">
                Download Management Guide
              </button>
              <button className="px-6 py-3 bg-white/5 rounded-xl border border-white/10 font-bold text-sm text-slate-300 hover:bg-white/10 transition-all">
                View Lab Protocols
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              "Consistency in monitoring prevents retinopathy.",
              "Healthy weight reduces risk of heart disease.",
              "Daily walking (30m) improves insulin sensitivity.",
              "Early detection is the ultimate complication shield."
            ].map((bullet, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="text-sm font-medium text-slate-300">{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
