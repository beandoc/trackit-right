"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Activity, 
  AlertCircle, 
  Droplets, 
  Utensils, 
  Thermometer, 
  Timer, 
  CheckCircle2, 
  ArrowUpCircle, 
  ArrowDownCircle, 
  Clock, 
  Beer, 
  Zap,
  Info,
  ChevronRight,
  LifeBuoy,
  Stethoscope,
  Target,
  Flame
} from "lucide-react"

export function GlycemicManagementHub() {
  const [activeMode, setActiveMode] = useState<'targets' | 'hyperglycemia' | 'hypoglycemia' | '1515rule'>('targets')

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-20">
      
      {/* Header: Dynamic Dashboard */}
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Activity className="w-4 h-4" /> GLYCEMIC STEWARDSHIP
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
            Active Range <br />
            <span className="text-primary tracking-tight text-glow">Management.</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-2xl">
            Maintaining blood sugar within target ranges reduces long-term complications. Use the protocols below for daily management and emergency response.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
           {[
             { id: 'targets', label: 'Target Ranges', icon: Target },
             { id: 'hyperglycemia', label: 'Hyper (High)', icon: ArrowUpCircle },
             { id: 'hypoglycemia', label: 'Hypo (Low)', icon: ArrowDownCircle },
             { id: '1515rule', label: 'The 15-15 Rule', icon: LifeBuoy }
           ].map((mode) => (
             <button 
               key={mode.id}
               onClick={() => setActiveMode(mode.id as any)}
               className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${activeMode === mode.id ? 'bg-primary border-primary text-white shadow-xl shadow-primary/20' : 'bg-slate-950 border-white/5 text-slate-500 hover:text-white hover:border-white/10'}`}
             >
               <mode.icon className="w-4 h-4 shrink-0" />
               {mode.label}
             </button>
           ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeMode === 'targets' && (
          <motion.div 
            key="targets"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { t: "Fasting / Wake-up", v: "80 - 130", u: "mg/dL", icon: Clock },
              { t: "Before Meals", v: "80 - 130", u: "mg/dL", icon: Utensils },
              { t: "2h Post-Meal", v: "80 - 180", u: "mg/dL", icon: Zap },
              { t: "At Bedtime", v: "90 - 150", u: "mg/dL", icon: Flame }
            ].map((card, i) => (
              <div key={i} className="p-8 rounded-[3.5rem] bg-slate-950 border border-white/5 space-y-6 flex flex-col items-center text-center group hover:border-primary/20 transition-all">
                 <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <card.icon className="text-primary w-6 h-6" />
                 </div>
                 <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{card.t}</p>
                    <h4 className="text-3xl font-black text-white">{card.v}</h4>
                    <p className="text-[9px] text-slate-600 font-bold uppercase">{card.u}</p>
                 </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeMode === 'hyperglycemia' && (
          <motion.div 
            key="hyper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid lg:grid-cols-2 gap-10"
          >
             <div className="p-12 rounded-[4rem] bg-amber-500/5 border border-amber-500/10 space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-12 -translate-y-12 group-hover:opacity-10 transition-opacity">
                   <ArrowUpCircle className="w-64 h-64 text-amber-500" />
                </div>
                <div className="space-y-4">
                   <h3 className="text-2xl font-black text-white uppercase tracking-tight">Hyperglycemia (High)</h3>
                   <p className="text-sm text-slate-500 font-medium italic">Usually &gt;130 pre-meal or &gt;180 post-meal.</p>
                </div>
                <div className="space-y-4">
                   <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Immediate Symptoms</p>
                   <div className="grid grid-cols-2 gap-3">
                      {['Dry Mouth', 'Hunger', 'Thirst', 'Weakness', 'Headache', 'Blurred Vision', 'Frequent Urination'].map((s) => (
                        <div key={s} className="px-4 py-2 rounded-xl bg-slate-950 border border-white/5 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                           {s}
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             <div className="p-12 rounded-[4rem] bg-slate-950 border border-white/10 space-y-10 group relative overflow-hidden">
                <h3 className="text-2xl font-black text-white uppercase">High Range Response</h3>
                <div className="space-y-6">
                   {[
                     { t: "Hydration Strategy", d: "Drink plenty of water or sugar-free beverages.", icon: Droplets },
                     { t: "Intensive Monitoring", d: "Check your blood sugar more often than usual.", icon: Activity },
                     { t: "Food Log Vigilance", d: "Identify 'trigger' foods via a diary.", icon: Utensils }
                   ].map((a, i) => (
                     <div key={i} className="flex gap-6 items-start">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-amber-500/30 transition-all"><a.icon className="w-5 h-5 text-amber-500" /></div>
                        <div>
                           <h4 className="text-xs font-black text-white uppercase tracking-tight">{a.t}</h4>
                           <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1">{a.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
                <div className="pt-8 border-t border-white/5 flex gap-4 items-center">
                   <AlertCircle className="text-rose-500 w-5 h-5 animate-pulse" />
                   <p className="text-[10px] font-black text-rose-500 uppercase tracking-[0.15em]">CALL PROVIDER IF FREQUENTLY &gt; 250 MG/DL</p>
                </div>
             </div>
          </motion.div>
        )}

        {activeMode === 'hypoglycemia' && (
          <motion.div 
            key="hypo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid lg:grid-cols-2 gap-10"
          >
             <div className="p-12 rounded-[4rem] bg-rose-500/5 border border-rose-500/10 space-y-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-12 -translate-y-12 group-hover:opacity-10 transition-opacity">
                   <ArrowDownCircle className="w-64 h-64 text-rose-500" />
                </div>
                <div className="space-y-4">
                   <h3 className="text-2xl font-black text-white uppercase tracking-tight">Hypoglycemia (Low)</h3>
                   <div className="inline-flex px-3 py-1 bg-rose-500/20 text-rose-400 rounded-lg text-[10px] font-black uppercase tracking-widest animate-pulse">Needs Treatment Now</div>
                </div>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                   Blood sugar &lt; 70 mg/dL (&lt; 60 mg/dL in pregnancy) is clinically dangerous.
                </p>
                <div className="p-6 rounded-3xl bg-slate-950 border border-white/5 space-y-4">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Common Causes</p>
                   <div className="space-y-3">
                      {[
                        { t: "Missed Meal", d: "Taking insulin and not eating.", icon: Utensils },
                        { t: "Alcohol Logic", d: "Drinking on an empty stomach.", icon: Beer },
                        { t: "Excessive Exercise", d: "Intense activity without dose adjustment.", icon: Activity },
                        { t: "Dosing Error", d: "Taking too high a dose of medication.", icon: Zap }
                      ].map((c, i) => (
                        <div key={i} className="flex gap-4 items-center">
                           <c.icon className="text-rose-500 w-4 h-4" />
                           <span className="text-[10px] text-slate-400 font-black uppercase">{c.t}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             <div className="p-12 rounded-[4rem] bg-slate-950 border border-white/5 space-y-12 flex flex-col justify-center">
                <div className="space-y-6">
                   <h4 className="text-2xl font-black text-white tracking-tight leading-tight">Can't feel symptoms?</h4>
                   <p className="text-sm text-slate-500 leading-relaxed font-medium">
                     You may feel nothing at all during a low. Ask your diabetes team about **Continuous Glucose Monitors (CGM)** that can sound alarms for silent lows.
                   </p>
                </div>
                <button 
                  onClick={() => setActiveMode('1515rule')}
                  className="w-full p-6 rounded-3xl bg-primary text-white text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20"
                >
                  LEARN THE 15-15 RULE <ChevronRight className="w-5 h-5" />
                </button>
             </div>
          </motion.div>
        )}

        {activeMode === '1515rule' && (
          <motion.div 
            key="1515"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
             <div className="text-center space-y-4">
                <h3 className="text-3xl font-black text-white tracking-tight uppercase">The 15-15 Rescue Rule</h3>
                <p className="text-sm text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">The clinical standard for rescuing sugar levels below 70 mg/dL safely and effectively.</p>
             </div>

             <div className="grid lg:grid-cols-3 gap-8">
                {[
                  { s: "STEP 1", t: "Consume 15g Carbs", d: "Eat 15 grams of fast-acting carbohydrate.", icon: Utensils },
                  { s: "STEP 2", t: "Wait 15 Minutes", d: "Give the sugar time to enter your bloodstream.", icon: Timer },
                  { s: "STEP 3", t: "Re-Check Glucose", d: "If still <70, repeat Step 1 and 2.", icon: Activity }
                ].map((step, i) => (
                  <div key={i} className="p-10 rounded-[3rem] bg-slate-950 border border-white/5 space-y-6 flex flex-col items-center text-center group">
                     <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">{step.s}</span>
                     <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20 group-hover:bg-primary/10 transition-colors"><step.icon className="text-primary w-8 h-8" /></div>
                     <div className="space-y-2">
                        <h4 className="text-lg font-black text-white uppercase tracking-tighter">{step.t}</h4>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed">{step.d}</p>
                     </div>
                  </div>
                ))}
             </div>

             <div className="p-12 rounded-[4rem] bg-slate-950 border border-white/5 space-y-10">
                <div className="flex flex-col lg:flex-row gap-12">
                   <div className="flex-1 space-y-6">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">15g Carb Examples</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         {[
                           "3-4 Glucose Tablets",
                           "1 Tube of Glucose Gel",
                           "4oz (1/2 Cup) Juice/Soda",
                           "1 Tbsp Sugar or Honey",
                           "Hard Candies (Check Label)"
                         ].map((ex) => (
                           <div key={ex} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black text-white uppercase tracking-tight">
                              <CheckCircle2 className="text-emerald-500 w-4 h-4 shrink-0" /> {ex}
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="w-full lg:w-1/3 p-8 rounded-[3rem] bg-amber-500/5 border border-amber-500/10 space-y-6 flex flex-col items-center text-center justify-center relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-2 h-full bg-amber-500 opacity-20" />
                      <AlertCircle className="text-amber-500 w-10 h-10" />
                      <h4 className="text-lg font-black text-white uppercase tracking-tighter italic">Pro-Tip!</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                        DO NOT treat a low with chocolate or peanut butter. **High-fat foods** slow down sugar absorption; they won't raise your levels fast enough in an emergency.
                      </p>
                   </div>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="p-8 rounded-[2.5rem] bg-slate-950 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
         <div className="flex gap-4 items-center">
            <Stethoscope className="text-primary w-6 h-6" />
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest max-w-sm">
              Note: Individual targets may vary. Always carry a logbook and bring your meter to every provider visit.
            </p>
         </div>
         <button className="px-8 py-3 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-3 hover:text-white transition-all">
           OPEN DIGITAL LOGBOOK <ChevronRight className="w-4 h-4" />
         </button>
      </div>

    </section>
  )
}
