"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  AlertCircle, 
  ShieldAlert, 
  Activity, 
  Clock, 
  Utensils, 
  BookOpen,
  ChevronRight,
  Zap,
  Info,
  History,
  AlertTriangle,
  LifeBuoy,
  Stethoscope,
  Heart
} from "lucide-react"

export function InsulinSafetyProtocol() {
  const [activeTab, setActiveTab] = useState<'overdose' | 'mistaken-type' | 'prevention'>('overdose')

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* Header: Emergency Logic */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/20 bg-rose-500/5 text-rose-400 text-[10px] font-bold uppercase tracking-widest">
            <AlertCircle className="w-4 h-4" /> EMERGENCY SAFETY PROTOCOL
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
            Insulin Error <span className="text-rose-500 tracking-tight">Response.</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed">
             Accidental overdose or confusing insulin types can lead to life-threatening hypoglycemia. Swift, informed action is the primary defense.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="inline-flex p-1.5 bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl">
            {[
              { id: 'overdose', label: 'Overdose Alert', icon: AlertTriangle },
              { id: 'mistaken-type', label: 'Wrong Type Matrix', icon: Zap },
              { id: 'prevention', label: 'Prevention Habits', icon: ShieldAlert }
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab.id ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/20' : 'text-slate-500 hover:text-white'}`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'overdose' && (
          <motion.div 
            key="overdose"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <div className="p-12 rounded-[4rem] bg-rose-500/5 border border-rose-500/10 space-y-8">
               <div className="flex items-center gap-4 text-rose-500">
                  <AlertCircle className="w-8 h-8" />
                  <h3 className="text-3xl font-black text-white tracking-tight uppercase">Accidental Overdose</h3>
               </div>
               <p className="text-slate-400 text-sm leading-relaxed font-secondary font-medium">
                 Injecting more insulin than required results in a severe metabolic imbalance. This can cause the following critical symptoms:
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { t: "Disorientation", d: "Confusion or loss of coordination.", icon: Info },
                    { t: "Seizures", d: "Uncontrolled physical movements.", icon: Activity },
                    { t: "Loss of Consciousness", d: "Potentially life-threatening state.", icon: Heart },
                    { t: "Urgent Hypo Risk", d: "Blood sugar may plummet instantly.", icon: Zap }
                  ].map((s, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-slate-950 border border-white/5 space-y-1">
                       <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest">{s.t}</p>
                       <p className="text-[9px] text-slate-500 font-bold uppercase">{s.d}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="p-12 rounded-[4rem] bg-slate-950 border border-white/10 space-y-10">
               <h4 className="text-2xl font-black text-white uppercase tracking-tight">Immediate Actions</h4>
               <div className="space-y-6">
                  <div className="flex gap-6 items-start p-6 rounded-3xl bg-white/5 border border-white/10">
                     <Activity className="text-primary w-6 h-6 shrink-0 mt-1" />
                     <div className="space-y-2">
                        <p className="text-sm font-black text-white uppercase tracking-tighter leading-tight font-display">Intensive Monitoring</p>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                          Monitor your blood sugar levels closely for several hours. The risk duration depends on the insulin type taken.
                        </p>
                     </div>
                  </div>
                  <div className="flex gap-6 items-start p-6 rounded-3xl bg-white/5 border border-white/10">
                     <Utensils className="text-emerald-400 w-6 h-6 shrink-0 mt-1" />
                     <div className="space-y-2">
                        <p className="text-sm font-black text-white uppercase tracking-tighter leading-tight font-display">Glucose Supplementation</p>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                          Consume fast-acting carbohydrates (glucose tabs, juice) at the first sign of a hypo or proactively if significant overdose occurred.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="pt-8 flex items-center gap-4 text-[10px] font-black text-rose-500 uppercase tracking-[0.2em] italic">
                  <LifeBuoy className="w-5 h-5 animate-pulse" /> CALL EMERGENCY SERVICES IF UNCONSCIOUS
               </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'mistaken-type' && (
          <motion.div 
            key="mistaken"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
               <h3 className="text-3xl font-black text-white tracking-tight text-glow">The "Wrong Insulin" Matrix</h3>
               <p className="text-slate-500 text-sm max-w-2xl mx-auto font-medium leading-relaxed"> Confusing your long-acting (Basal) and rapid-acting (Bolus) pens is common. Your response must match the pharmacokinetics of the error.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
               {/* Mistake A: Basal as Bolus */}
               <div className="p-12 rounded-[3.5rem] bg-slate-950 border border-amber-500/20 space-y-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                     <Clock className="w-40 h-40 text-amber-500" />
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="p-5 rounded-3xl bg-amber-500/10 border border-amber-500/20">
                        <History className="text-amber-500 w-8 h-8" />
                     </div>
                     <h4 className="text-2xl font-black text-white uppercase tracking-tight">Basal Instead of Bolus</h4>
                  </div>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">
                     You took slow-acting insulin before a meal. You will lack immediate coverage for your meal and have a lingering hypo risk later.
                  </p>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex justify-between items-center">
                     <div>
                        <p className="text-[10px] text-amber-400 font-black uppercase tracking-widest mb-1 italic">Risk Duration</p>
                        <p className="text-2xl font-black text-white">12 – 18 Hours</p>
                     </div>
                     <ShieldAlert className="text-amber-500/50 w-8 h-8" />
                  </div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest animate-pulse">Action: Extended Glucose Monitoring + Meal Coverage adjustment</p>
               </div>

               {/* Mistake B: Bolus as Basal */}
               <div className="p-12 rounded-[3.5rem] bg-slate-950 border border-rose-500/20 space-y-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                     <Zap className="w-40 h-40 text-rose-500" />
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="p-5 rounded-3xl bg-rose-500/10 border border-rose-500/20">
                        <Zap className="text-rose-500 w-8 h-8" />
                     </div>
                     <h4 className="text-2xl font-black text-white uppercase tracking-tight">Bolus Instead of Basal</h4>
                  </div>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">
                     You took rapid-acting insulin as a background dose. This is an acute emergency with immediate risk of plummeting glucose.
                  </p>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex justify-between items-center">
                     <div>
                        <p className="text-[10px] text-rose-400 font-black uppercase tracking-widest mb-1 italic">Risk Duration</p>
                        <p className="text-2xl font-black text-white">3 – 5 Hours</p>
                     </div>
                     <AlertCircle className="text-rose-500/50 w-8 h-8" />
                  </div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest animate-pulse">Action: Immediate Extra Carbs + 15-min BG intervals</p>
               </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'prevention' && (
          <motion.div 
            key="prevention"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="p-16 rounded-[4rem] bg-slate-900/30 border border-white/5 space-y-12"
          >
            <div className="text-center space-y-4">
               <h3 className="text-3xl font-black text-white tracking-tight">Preventing Future Errors</h3>
               <p className="text-slate-500 text-sm max-w-xl mx-auto font-medium leading-relaxed">Simple organizational habits can prevent a majority of insulin-related clinical errors.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
               {[
                 { t: "The Logging Habit", d: "Use a glucose diary or app to log every dose. Never rely on memory.", icon: BookOpen },
                 { t: "The Dual-Check", d: "Visually verify the label and pen color before EVERY injection.", icon: ShieldAlert },
                 { t: "Clear Separation", d: "Store your Basal and Bolus pens in distinct locations or marked cases.", icon: Heart }
               ].map((h, i) => (
                 <div key={i} className="space-y-6 flex flex-col items-center md:items-start">
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                       <h.icon className="text-primary w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-lg font-black text-white uppercase tracking-tight">{h.t}</h4>
                       <p className="text-xs text-slate-500 font-medium leading-relaxed">{h.d}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="flex gap-4 items-center">
                  <div className="p-3 bg-white/5 rounded-full"><Stethoscope className="text-primary w-5 h-5" /></div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Always report dosing errors to your clinical team at next review.</p>
               </div>
               <button className="px-6 py-2 rounded-xl bg-primary text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:scale-105 active:scale-95 transition-all">
                  LOG DOSE IN DIARY <ChevronRight className="w-4 h-4" />
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center pt-8 border-t border-white/5 opacity-50">
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] italic">
          Clinical Safety Standard: Accidental Overdose Response
        </p>
      </div>

    </section>
  )
}
