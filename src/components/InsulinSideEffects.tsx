"use client"

import { motion } from "framer-motion"
import { 
  AlertCircle, 
  Scale, 
  Activity, 
  Thermometer, 
  Utensils, 
  TrendingUp, 
  Info,
  ChevronRight,
  ShieldAlert,
  Clock,
  Zap,
  Heart,
  Droplets,
  Wine,
  Settings
} from "lucide-react"

export function InsulinSideEffects() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-20">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
         <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest">
               <Info className="w-4 h-4" /> Medication Vigilance
            </div>
            <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
               Glycemic <span className="text-primary tracking-tight">Side Effects.</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
               Everyone reacts to insulin differently. Understanding the common metabolic shifts and safety windows is key to maintaining long-term stability.
            </p>
         </div>

         <div className="p-12 glass-card rounded-[3.5rem] bg-rose-500/5 border border-rose-500/10 space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <Clock className="w-40 h-40 text-rose-500" />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">The 72-Hour Window</h4>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
               Inform your healthcare team if you experience headaches, nausea, or flu-like symptoms within the first **72 hours** of starting any new insulin.
            </p>
            <div className="flex items-center gap-3 text-[10px] font-black text-rose-500 uppercase tracking-widest">
               <Thermometer className="w-4 h-4" /> 72-HOUR MONITOR ACTIVE
            </div>
         </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
         {/* Hypoglycemia: The Most Common Shift */}
         <div className="p-12 rounded-[4rem] bg-slate-950 border border-white/5 space-y-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-12 -translate-y-12 group-hover:opacity-10 transition-opacity">
               <Droplets className="w-64 h-64 text-primary" />
            </div>
            
            <div className="space-y-6 relative z-10">
               <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 shadow-xl shadow-primary/5"><Zap className="text-primary w-8 h-8" /></div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tight">Hypoglycemia (Hypos)</h3>
               </div>
               <p className="text-xs text-slate-400 leading-relaxed font-medium italic">
                  "The most frequent side effect. Defined as blood sugar falling below **4.0 mmol/L**."
               </p>
               
               <div className="space-y-4">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Common Risk Factors</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                     {[
                       { t: "Dose Accuracy", d: "Miscalculating carb/insulin coverage.", icon: Settings },
                       { t: "Missing Meals", d: "Delaying or skipping carbohydrate intake.", icon: Utensils },
                       { t: "Intense Activity", d: "Exercise without dose adjustment.", icon: Activity },
                       { t: "Alcohol Logic", d: "Drinking on an empty stomach.", icon: Wine }
                     ].map((r, i) => (
                       <div key={i} className="flex gap-4 items-center p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-primary/20 transition-all">
                          <r.icon className="text-primary w-4 h-4" />
                          <div>
                             <p className="text-[10px] text-white font-black uppercase tracking-tight">{r.t}</p>
                             <p className="text-[9px] text-slate-500 font-bold leading-tight">{r.d}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* Weight Management: The Growth Hormone Factor */}
         <div className="p-12 rounded-[4rem] bg-slate-950 border border-white/5 space-y-10 group overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-12 -translate-y-12 group-hover:opacity-10 transition-opacity rotate-12">
               <Scale className="w-64 h-64 text-emerald-500" />
            </div>

            <div className="space-y-6 relative z-10">
               <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 shadow-xl shadow-emerald-500/5"><TrendingUp className="text-emerald-500 w-8 h-8" /></div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tight">Metabolic Weight Shift</h3>
               </div>
               <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  Insulin is a **growth hormone**. It enables your body to use and store glucose as energy, which can clinically manifest as weight gain.
               </p>

               <div className="grid gap-4">
                  <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 space-y-4">
                     <div className="flex items-center gap-4">
                        <Scale className="text-emerald-400 w-5 h-5" />
                        <h4 className="text-sm font-black text-white uppercase tracking-widest">Analogue vs. Human Insulin</h4>
                     </div>
                     <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                        Analogue insulins cause minimal weight gain. Human or animal insulins are more likely to stimulate metabolic storage.
                     </p>
                  </div>

                  <div className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-4">
                     <div className="flex items-center gap-4">
                        <Activity className="text-blue-400 w-5 h-5" />
                        <h4 className="text-sm font-black text-white uppercase tracking-widest">Recovery Re-gain</h4>
                     </div>
                     <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                        Weight regain post-diagnosis is often essential for recovery, as significant weight loss is a core symptom of untreated diabetes.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Hunger Protocol */}
      <div className="p-16 rounded-[4rem] bg-indigo-500/5 border border-indigo-500/10 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
         <div className="p-8 bg-indigo-500/10 rounded-[3rem] border border-indigo-500/20">
            <Heart className="text-indigo-400 w-16 h-16" />
         </div>
         <div className="space-y-4 flex-1">
            <h3 className="text-3xl font-black text-white tracking-tight uppercase">The Hunger Response</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl font-medium">
               High doses of insulin and frequent hypos both trigger internal hunger signals. If you find yourself overeating, consider a clinical review to optimize your dose and reduce metabolic burden.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
               <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-[9px] font-black text-white uppercase tracking-widest">Lifestyle Optimization</div>
               <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-[9px] font-black text-white uppercase tracking-widest">Dose Recalibration</div>
            </div>
         </div>
      </div>

      <div className="text-center pt-8 border-t border-white/5">
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] italic">
          Clinical Stewardship: Side Effects & Metabolic Monitoring
        </p>
      </div>

    </section>
  )
}
