"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Heart, 
  Activity, 
  Utensils, 
  Settings, 
  ShieldAlert, 
  Search, 
  Smile,
  ShieldCheck,
  Zap,
  Info,
  ChevronRight,
  Hand,
  Target,
  FlaskConical,
  Stethoscope,
  Droplets,
  Timer
} from "lucide-react"

const pillars = [
  { id: 'eat', label: 'Healthy Eating', icon: Utensils, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { id: 'active', label: 'Being Active', icon: Activity, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { id: 'monitor', label: 'Monitoring', icon: Target, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { id: 'meds', label: 'Taking Medication', icon: FlaskConical, color: 'text-primary', bg: 'bg-primary/10' },
  { id: 'solve', label: 'Problem Solving', icon: Settings, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
  { id: 'risk', label: 'Reducing Risks', icon: ShieldAlert, color: 'text-rose-500', bg: 'bg-rose-500/10' },
  { id: 'cope', label: 'Healthy Coping', icon: Smile, color: 'text-violet-500', bg: 'bg-violet-500/10' }
]

const a1cMap = [
  { a1c: 14.0, mg: 380, status: 'Critical Action' },
  { a1c: 12.0, mg: 315, status: 'High Risk' },
  { a1c: 10.0, mg: 250, status: 'Action Suggested' },
  { a1c: 8.0, mg: 180, status: 'Above Goal' },
  { a1c: 7.0, mg: 150, status: 'Good Control' },
  { a1c: 6.0, mg: 115, status: 'Near Goal' },
  { a1c: 5.0, mg: 80, status: 'Excellent' }
]

export function DiabetesBasicsHub() {
  const [activeTab, setActiveTab] = useState<'basics' | 'diagnostics' | 'a1c-converter'>('basics')

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* Header: Personalization First */}
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" /> FUNDAMENTAL STEWARDSHIP
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
            The Basics of <br />
            <span className="text-primary tracking-tight text-glow">Diabetes Care.</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-2xl">
            "Your care is SPECIFIC TO YOU." Diabetes is a manageable journey, and your goals are determined in partnership with your clinical team.
          </p>
        </div>

        <div className="flex flex-col gap-3">
           {['basics', 'diagnostics', 'a1c-converter'].map((t) => (
             <button 
               key={t}
               onClick={() => setActiveTab(t as any)}
               className={`px-12 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${activeTab === t ? 'bg-primary border-primary text-white shadow-xl shadow-primary/20' : 'bg-slate-950 border-white/5 text-slate-500 hover:text-white'}`}
             >
               {t.replace('-', ' ')}
             </button>
           ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'basics' && (
          <motion.div 
            key="basics"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-20"
          >
            {/* The Seven Pillars Grid */}
            <div className="space-y-8">
               <div className="text-center space-y-3">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">The 7 Pillars of Self-Care</h3>
                  <p className="text-sm text-slate-500 font-medium">Core skills developed with your healthcare team to manage daily life with diabetes.</p>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  {pillars.map((p) => (
                    <div key={p.id} className="flex flex-col items-center text-center p-6 rounded-3xl bg-slate-950 border border-white/5 group hover:border-primary/20 transition-all">
                       <div className={`p-4 rounded-2xl mb-4 ${p.bg} ${p.color} group-hover:scale-110 transition-transform`}>
                          <p.icon className="w-6 h-6" />
                       </div>
                       <p className="text-[10px] font-black uppercase text-foreground leading-tight tracking-tight">{p.label}</p>
                    </div>
                  ))}
               </div>
            </div>

            {/* Pathophysiology Cards */}
            <div className="grid lg:grid-cols-2 gap-10">
               <div className="p-12 rounded-[3.5rem] bg-slate-950 border border-white/5 space-y-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-12 -translate-y-12 group-hover:opacity-10 transition-opacity">
                     <Zap className="w-64 h-64 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase">Understanding Type 1</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    Autoimmune, genetic, or environmental factors cause the body to destroy insulin-producing cells.
                  </p>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                     <h4 className="text-[10px] font-black text-primary uppercase tracking-widest">Risk Factors</h4>
                     <p className="text-xs text-slate-400 font-medium">Family history of Thyroid disorders, Lupus, or Type 1 Diabetes.</p>
                  </div>
               </div>

               <div className="p-12 rounded-[3.5rem] bg-slate-950 border border-white/5 space-y-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-12 -translate-y-12 group-hover:opacity-10 transition-opacity">
                     <Activity className="w-64 h-64 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase">Understanding Type 2</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    The body makes some insulin but cells do not use it properly (Resistance) or output is insufficient.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                     {['Weight Gain', 'Family History', 'Older Age', 'Sedentary', 'Gestational History', 'PCOS'].map((f) => (
                       <div key={f} className="px-3 py-1.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-[9px] font-black text-emerald-500 uppercase tracking-widest">
                          {f}
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'diagnostics' && (
          <motion.div 
            key="diagnostics"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-12"
          >
            <div className="grid lg:grid-cols-3 gap-8">
               {[
                 { t: "Fasting Glucose", v: "≥ 126", u: "mg/dL", d: "No food for at least 8 hours." },
                 { t: "Random Glucose", v: "≥ 200", u: "mg/dL", d: "Tested at any time of day." },
                 { t: "A1C Measurement", v: "≥ 6.5", u: "%", d: "3-month average calculation." }
               ].map((c, i) => (
                 <div key={i} className="p-10 rounded-[3rem] bg-slate-950 border border-white/5 text-center space-y-6">
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{c.t}</p>
                    <div>
                       <h4 className="text-6xl font-black text-white leading-none">{c.v}</h4>
                       <span className="text-xs font-bold text-slate-500 uppercase">{c.u}</span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium italic">{c.d}</p>
                 </div>
               ))}
            </div>

            {/* Skills & Tips */}
            <div className="p-12 rounded-[4rem] bg-indigo-500/5 border border-indigo-500/10 grid md:grid-cols-2 gap-12 items-center">
               <div className="space-y-6">
                  <h3 className="text-3xl font-black text-white leading-tight">Accurate <br /> Testing Tips.</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">Ensure successful readings with these simple procedural habits from your care book.</p>
               </div>
               <div className="grid gap-4">
                  <div className="p-6 rounded-3xl bg-slate-950 border border-white/10 flex gap-6 items-center">
                     <div className="p-4 bg-orange-500/10 rounded-2xl"><Droplets className="text-orange-500 w-6 h-6" /></div>
                     <div>
                        <h4 className="text-sm font-black text-white uppercase">The Lancet Rule</h4>
                        <p className="text-[10px] text-slate-500 font-medium">Change Lancet EVERY TIME. Dull needles cause pain.</p>
                     </div>
                  </div>
                  <div className="p-6 rounded-3xl bg-slate-950 border border-white/10 flex gap-6 items-center">
                     <div className="p-4 bg-blue-500/10 rounded-2xl"><Hand className="text-blue-400 w-6 h-6" /></div>
                     <div>
                        <h4 className="text-sm font-black text-white uppercase">Flow Strategy</h4>
                        <p className="text-[10px] text-slate-500 font-medium">Rub hands to warm them or use warm water to wash hands first.</p>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'a1c-converter' && (
          <motion.div 
            key="a1c"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
             <div className="text-center space-y-4">
                <h3 className="text-3xl font-black text-white tracking-tight text-glow">A1C Correlation Guide</h3>
                <p className="text-sm text-slate-500 max-w-xl mx-auto font-medium">
                  A1C measures how much sugar "sticks" to red blood cells over the last 3 months as they regenerate.
                </p>
             </div>

             <div className="p-1 bg-slate-900 border border-white/10 rounded-[4rem] overflow-hidden shadow-2xl">
                <table className="w-full text-left border-collapse">
                   <thead>
                      <tr className="bg-slate-950/50">
                         <th className="p-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">A1C Test Score (%)</th>
                         <th className="p-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">Mean Blood Glucose (mg/dL)</th>
                         <th className="p-8 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Clinical Status</th>
                      </tr>
                   </thead>
                   <tbody>
                      {a1cMap.map((row, i) => (
                        <tr key={i} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors group">
                           <td className="p-8 font-black text-2xl text-white group-hover:text-primary transition-colors">{row.a1c.toFixed(1)}%</td>
                           <td className="p-8 font-black text-2xl text-slate-400">{row.mg}</td>
                           <td className="p-8 text-right">
                              <span className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest ${
                                row.a1c <= 6.0 ? 'bg-emerald-500/10 text-emerald-500' :
                                row.a1c <= 7.0 ? 'bg-blue-500/10 text-blue-400' :
                                row.a1c <= 10.0 ? 'bg-amber-500/10 text-amber-500' :
                                'bg-rose-500/10 text-rose-500'
                              }`}>
                                 {row.status}
                              </span>
                           </td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center pt-8 border-t border-white/5 flex flex-col items-center gap-6">
         <div className="flex gap-4 items-center p-4 bg-slate-950 rounded-2xl border border-white/5">
            <Info className="text-slate-500 w-4 h-4" />
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
              Care Standard: Fundamentals of Healthy Coping & Monitoring
            </p>
         </div>
      </div>

    </section>
  )
}
