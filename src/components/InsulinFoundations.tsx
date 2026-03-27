"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Key, 
  Zap, 
  Droplets, 
  Thermometer, 
  Calendar, 
  ShieldCheck, 
  Info,
  ChevronRight,
  Target,
  FlaskConical,
  Activity,
  Syringe,
  Settings,
  Heart,
  Utensils,
  Moon,
  Sun,
  Snowflake,
  Refrigerator,
  AlertTriangle,
  Users,
  Scale,
  Clock
} from "lucide-react"

export function InsulinFoundations() {
  const [activeView, setActiveView] = useState<'physiology' | 'storage' | 'delivery' | 'resistance' | 'types'>('physiology')

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto space-y-16">
      
      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
          {[
            { id: 'physiology', label: 'Mechanism: The Key', icon: Key },
            { id: 'delivery', label: 'Delivery Methods', icon: Syringe },
            { id: 'storage', label: 'Storage & Safety', icon: Refrigerator },
            { id: 'types', label: 'Insulin Types', icon: FlaskConical },
            { id: 'resistance', label: 'Resistance & Sensitivity', icon: Activity }
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveView(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeView === tab.id ? 'bg-primary text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeView === 'physiology' && (
          <motion.div 
            key="physiology"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="space-y-24"
          >
            {/* Mechanism Header */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                  <Zap className="w-4 h-4" /> Essential Hormone Physiology
                </div>
                <h2 className="text-4xl lg:text-7xl font-black text-white leading-[1.05] tracking-tighter">
                  The Cellular <span className="text-primary tracking-tight">Access Key.</span>
                </h2>
                <p className="text-slate-400 text-lg sm:text-xl leading-relaxed font-medium">
                  We cannot live without insulin. It's a hormone produced in the pancreas that acts like a **key**, unlocking your cells to allow glucose to enter and fuel your body.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className="p-6 rounded-3xl bg-slate-950 border border-white/5 space-y-2">
                      <Target className="text-primary w-5 h-5 mb-2" />
                      <h4 className="text-sm font-black text-white uppercase tracking-widest">Energy Transfer</h4>
                      <p className="text-[10px] text-slate-500 font-medium leading-relaxed">Moves glucose from the bloodstream into cells for immediate energy.</p>
                   </div>
                   <div className="p-6 rounded-3xl bg-slate-950 border border-white/5 space-y-2">
                      <ShieldCheck className="text-emerald-400 w-5 h-5 mb-2" />
                      <h4 className="text-sm font-black text-white uppercase tracking-widest">Storage Logic</h4>
                      <p className="text-[10px] text-slate-500 font-medium leading-relaxed">Signals the body to store extra glucose for later use (glycogen/fat).</p>
                   </div>
                </div>
              </div>

              {/* Visual Metaphor Card */}
              <div className="relative group p-1 rounded-[3.5rem] bg-gradient-to-br from-primary/30 via-transparent to-transparent">
                 <div className="p-12 bg-slate-950 rounded-[3rem] border border-white/5 space-y-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
                    
                    <div className="space-y-6">
                       <div className="flex items-center gap-4">
                          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                             <Key className="text-primary w-8 h-8" />
                          </div>
                          <h4 className="text-2xl font-black text-white">Insulin Action</h4>
                       </div>
                       <p className="text-xs text-slate-400 leading-relaxed font-medium italic">
                         "Imagine your body's cells are locked rooms. Glucose is the fuel outside the door. Insulin is the only key that fits."
                       </p>
                    </div>

                    <div className="space-y-4">
                       {[
                         { t: "Glucose Source", d: "Derived from broken down carbohydrates in food/drink.", icon: Utensils },
                         { t: "The Build-up", d: "Without enough insulin, sugar builds up in the blood, starving cells.", icon: AlertTriangle }
                       ].map((step, i) => (
                         <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                            <step.icon className="w-5 h-5 text-slate-500 mt-0.5" />
                            <div>
                               <p className="text-[10px] font-black text-white uppercase tracking-widest">{step.t}</p>
                               <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{step.d}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>

            {/* Treatment Pillars Section */}
            <div className="p-16 rounded-[4rem] bg-slate-900/30 border border-white/5 space-y-12">
               <div className="text-center space-y-4">
                  <h3 className="text-3xl font-black text-white tracking-tight">The Three Pillars of Management</h3>
                  <p className="text-slate-500 text-sm max-w-xl mx-auto font-medium">Insulin therapy is most effective when combined with holistic health strategies.</p>
               </div>
               <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { t: "Precision Dosing", d: "Matched to your specific type (T1, T2, or Gestational).", icon: FlaskConical, color: "text-primary" },
                    { id: '2', t: "Active Lifestyle", d: "Activity as your general health allows to boost sensitivity.", icon: Activity, color: "text-secondary" },
                    { t: "Nutritional Care", d: "Healthy diet helps keep blood sugar in the target range.", icon: Heart, color: "text-rose-500" }
                  ].map((p, i) => (
                    <div key={i} className="flex flex-col items-center text-center space-y-6 p-8 rounded-3xl bg-slate-950 border border-white/5 group hover:border-white/10 transition-all">
                       <div className={`p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform ${p.color}`}>
                          <p.icon className="w-8 h-8" />
                       </div>
                       <div className="space-y-2">
                          <h4 className="text-lg font-black text-white leading-tight uppercase tracking-tight">{p.t}</h4>
                          <p className="text-xs text-slate-500 font-medium leading-relaxed">{p.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>
        )}

        {activeView === 'delivery' && (
          <motion.div 
            key="delivery"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="space-y-24"
          >
            {/* Delivery Header */}
            <div className="text-center space-y-6">
              <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
                Methods of <span className="text-primary tracking-tight">Administration.</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                Whether through daily injections or automated pumps, the goal is consistent insulin delivery to manage glycemia and prevent complications.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
               {/* Injections */}
               <div className="p-12 rounded-[3.5rem] bg-slate-950 border border-white/5 space-y-8 group hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-4">
                     <div className="p-5 rounded-3xl bg-primary/10 border border-primary/20">
                        <Syringe className="text-primary w-8 h-8" />
                     </div>
                     <h3 className="text-3xl font-black text-white">Injection (Pen/Needle)</h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    The most common method using liquid insulin. Your healthcare team will teach you the correct techniques and dosing schedules.
                  </p>
                  <div className="space-y-4">
                     {[
                       "Free on prescription (along with pens & needles).",
                       "English residents < 60y require a Medical Exemption Certificate.",
                       "Training provided by your GP or specialist healthcare team."
                     ].map((point, i) => (
                       <div key={i} className="flex gap-4 items-start">
                          <div className="p-1 rounded-full bg-primary/20 mt-1">
                             <ChevronRight className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-[11px] text-slate-400 font-medium leading-relaxed">{point}</span>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Insulin Pump */}
               <div className="p-12 rounded-[3.5rem] bg-slate-950 border border-white/5 space-y-8 group hover:border-secondary/30 transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[100px] -z-10" />
                  <div className="flex items-center gap-4">
                     <div className="p-5 rounded-3xl bg-secondary/10 border border-secondary/20">
                        <Settings className="text-secondary w-8 h-8" />
                     </div>
                     <h3 className="text-3xl font-black text-white">Insulin Pump</h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    An electronic device attached to your body that releases a continuous flow of insulin. 
                  </p>
                  <div className="p-6 rounded-3xl bg-secondary/10 border border-secondary/20 space-y-4">
                     <p className="text-[10px] text-secondary font-black uppercase tracking-[0.2em] italic">Eligibility Note</p>
                     <p className="text-xs text-slate-300 font-black leading-relaxed">
                       Usually offered free (NHS) to some people with Type 1 Diabetes who meet specific clinical criteria. 
                     </p>
                  </div>
                  <div className="pt-4 flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                     <Settings className="w-3.5 h-3.5" /> Automated Basal Delivery Flow
                  </div>
               </div>
            </div>
          </motion.div>
        )}

        {activeView === 'storage' && (
          <motion.div 
            key="storage"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="space-y-24"
          >
            {/* Storage Protocol Header */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em]">
                <Refrigerator className="w-4 h-4" /> POTENCY PROTOCOL
              </div>
              <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
                Temperature <span className="text-blue-400 tracking-tight">Preservation.</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                Insulin degrades when exposed to heat, sunlight, or freezing temperatures. Maintain the "Cold Chain" for maximum efficacy.
              </p>
            </div>

            {/* Storage Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
               {/* In Use */}
               <div className="p-10 rounded-[3rem] bg-slate-950 border border-white/5 space-y-6 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-amber-500/10 transition-colors uppercase font-black text-5xl tracking-widest leading-none">
                     LIVE
                  </div>
                  <div className="p-4 rounded-2xl bg-amber-500/10 w-fit">
                     <Thermometer className="text-amber-500 w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-tight">Insulin In Use</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Most insulins currently being used (opened) can stay at room temperature for up to **28 days**.
                  </p>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">Max Threshold</p>
                     <p className="text-sm text-white font-black">&lt; 25°C (77°F)</p>
                  </div>
               </div>

               {/* Spare Stock */}
               <div className="p-10 rounded-[3rem] bg-slate-950 border border-blue-500/20 space-y-6 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-blue-400/10 transition-colors uppercase font-black text-5xl tracking-widest leading-none">
                     STOCK
                  </div>
                  <div className="p-4 rounded-2xl bg-blue-500/10 w-fit">
                     <Refrigerator className="text-blue-400 w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-tight">Spare Stock</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Keep spare vials/cartridges in their boxes in the fridge to protect from light and temperature fluctuations.
                  </p>
                  <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                     <p className="text-[10px] font-black text-blue-200 uppercase tracking-widest mb-1 italic">Ideal Fridge Temp</p>
                     <p className="text-sm text-white font-black">2°C – 6°C (36°F – 43°F)</p>
                  </div>
               </div>

               {/* Safety Alerts */}
               <div className="p-10 rounded-[3rem] border border-white/5 bg-slate-900/40 space-y-8 flex flex-col justify-center">
                  <div className="space-y-6">
                     <div className="flex gap-4 p-4 rounded-2xl bg-red-500/5 border border-red-500/10">
                        <Snowflake className="text-blue-300 w-5 h-5 shrink-0" />
                        <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                          **DON'T FREEZE**. Freezing temp permanently damages the insulin protein structure.
                        </p>
                     </div>
                     <div className="flex gap-4 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10">
                        <Sun className="text-amber-500 w-5 h-5 shrink-0" />
                        <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                          **AVOID EXPOSURE**. Don't leave in hot cars, near cookers, or in direct sunlight.
                        </p>
                     </div>
                     <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                        <Calendar className="text-slate-500 w-5 h-5 shrink-0" />
                        <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                          Check the expiry date. Don't use if it's expired or has been out of the fridge &gt;28 days.
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Stock Mgmt Tip */}
            <div className="max-w-3xl mx-auto p-12 glass-card rounded-[3rem] border-white/10 bg-slate-900/50 flex flex-col md:flex-row items-center gap-10">
               <div className="p-6 rounded-[2rem] bg-primary/10 border border-primary/20">
                  <ShieldCheck className="text-primary w-12 h-12" />
               </div>
               <div className="space-y-4">
                  <h4 className="text-2xl font-black text-white">Clinical Stewardship: Stock Rotation</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">
                    Maintain a 3-month supply at home. We recommend re-ordering when you have 2 weeks of stock remaining to ensure continuity of care.
                  </p>
                  <div className="pt-2 flex items-center gap-4 text-[10px] font-black text-primary uppercase tracking-widest">
                     <Calendar className="w-4 h-4" /> 2-WEEK REFILL RULE
                  </div>
               </div>
            </div>
          </motion.div>
        )}

        {activeView === 'types' && (
          <motion.div 
            key="types"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="space-y-24"
          >
            {/* Types Header */}
            <div className="text-center space-y-6">
              <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
                The Insulin <span className="text-primary tracking-tight">Taxonomy.</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                From rapid-release boluses to slow-acting basal coverage, understanding the profile of your specific insulin is critical for glycemic stability.
              </p>
            </div>

            {/* Bolus vs Basal Grid */}
            <div className="grid lg:grid-cols-2 gap-10">
               <div className="p-12 rounded-[3.5rem] bg-slate-950 border border-white/5 space-y-8">
                  <div className="flex items-center gap-4">
                     <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                        <Zap className="text-amber-400 w-8 h-8" />
                     </div>
                     <h3 className="text-3xl font-black text-white">Bolus (Meal-time)</h3>
                  </div>
                  <div className="space-y-6">
                     <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 space-y-4">
                        <h4 className="text-[10px] font-black text-primary uppercase tracking-widest italic">Rapid Acting</h4>
                        <p className="text-xs text-slate-300 font-bold leading-relaxed">Fiasp, Novorapid, Apidra.</p>
                        <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Starts in minutes. Lasts 3–5 hours. Take shortly before or after meals.</p>
                     </div>
                     <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 space-y-4">
                        <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest italic">Short Acting</h4>
                        <p className="text-xs text-slate-300 font-bold leading-relaxed">Actrapid, Humulin S.</p>
                        <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Starts in 30–60 mins. Lasts 5–8 hours. Take ~25 mins before eating.</p>
                     </div>
                  </div>
               </div>

               <div className="p-12 rounded-[3.5rem] bg-slate-950 border border-white/5 space-y-8">
                  <div className="flex items-center gap-4">
                     <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                        <Clock className="text-blue-400 w-8 h-8" />
                     </div>
                     <h3 className="text-3xl font-black text-white">Basal (Background)</h3>
                  </div>
                  <div className="space-y-6">
                     <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 space-y-4">
                        <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest italic">Intermediate</h4>
                        <p className="text-xs text-slate-300 font-bold leading-relaxed">Humulin I, Insulatard.</p>
                        <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Cloudy insulin. Taken once or twice a day. Deals with sugar during the day.</p>
                     </div>
                     <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 space-y-4">
                        <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest italic">Long Acting</h4>
                        <p className="text-xs text-slate-300 font-bold leading-relaxed">Lantus, Tresiba, Degludec.</p>
                        <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Slower onset, once-daily. Proven reduction in hypoglycemia risk compared to intermediate.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Cloudy Insulin Protocol */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <div className="space-y-8">
                  <h3 className="text-3xl font-black text-white leading-tight">The Cloudy <br /> Mix Protocol.</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    Some insulins (Intermediate or Mixed) are cloudy. They MUST be mixed correctly before EVERY injection to ensure dose accuracy.
                  </p>
                  <div className="p-8 rounded-[2.5rem] bg-rose-500/5 border border-rose-500/10 flex items-center gap-6">
                     <AlertTriangle className="text-rose-500 w-10 h-10" />
                     <p className="text-xs text-rose-200 font-bold italic leading-relaxed">
                       "Do NOT vigorously shake the insulin. This causes bubbles and inaccurate dosing. Only use a rolling/inversion technique."
                     </p>
                  </div>
               </div>

               <div className="p-12 glass-card rounded-[3.5rem] border-white/5 bg-slate-950 space-y-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <div className="flex justify-center gap-4">
                     <div className="flex flex-col items-center gap-2">
                        <div className="p-4 rounded-full bg-white/5 shadow-inner border border-white/10 animate-pulse">
                           <Activity className="text-primary w-8 h-8" />
                        </div>
                        <span className="text-[9px] text-slate-500 font-black uppercase">Roll (10x)</span>
                     </div>
                     <div className="flex flex-col items-center justify-center">
                        <Target className="text-slate-800 w-4 h-4" />
                     </div>
                     <div className="flex flex-col items-center gap-2">
                        <div className="p-4 rounded-full bg-white/5 shadow-inner border border-white/10 animate-bounce">
                           <ShieldCheck className="text-secondary w-8 h-8 rotate-180" />
                        </div>
                        <span className="text-[9px] text-slate-500 font-black uppercase">Invert (10x)</span>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-xl font-black text-white">The 20-Step Rule</h4>
                     <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Inversion and rolling should be performed a total of **20 times** immediately before every injection until the solution becomes milky white.
                     </p>
                  </div>
               </div>
            </div>

            {/* Mixed Insulin Section */}
            <div className="p-16 rounded-[4rem] bg-indigo-950/20 border border-white/5 space-y-8 text-center">
               <h3 className="text-3xl font-black text-white">Mixed Insulin (Combination)</h3>
               <p className="text-sm text-slate-400 max-w-xl mx-auto font-medium">
                 Commonly prescribed for Type 2 or Gestational diabetes. Pre-mixed combination of short/rapid and intermediate insulin.
               </p>
               <div className="flex justify-center gap-4">
                  <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-black text-white uppercase tracking-widest">Humalog Mix25</div>
                  <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-black text-white uppercase tracking-widest">Insuman Comb 25</div>
               </div>
               <p className="text-[10px] text-slate-500 font-medium italic">
                  *Eliminates the need for separate background injections during meal-times.
               </p>
            </div>
          </motion.div>
        )}

        {activeView === 'resistance' && (
          <motion.div 
            key="resistance"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="space-y-20"
          >
            {/* Resistance Header */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-[10px] font-bold uppercase tracking-[0.2em]">
                  <Activity className="w-4 h-4" /> Metabolic Responsiveness
                </div>
                <h2 className="text-4xl lg:text-7xl font-black text-white leading-[1.05] tracking-tighter">
                  Insulin <span className="text-secondary tracking-tight">Resistance.</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  Insulin resistance occurs when your body’s cells don’t respond properly to the hormone. Instead of keeping blood sugar levels stable, they begin to rise.
                </p>
                <div className="p-6 rounded-3xl bg-slate-950 border border-secondary/20 space-y-3">
                   <h4 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
                     <Target className="text-secondary w-4 h-4" /> Sensitivity Metrics
                   </h4>
                   <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                         <p className="text-[10px] text-emerald-400 font-black uppercase mb-1">High Sensitivity</p>
                         <p className="text-xs text-white font-bold">1 Unit : 10g Carbs</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                         <p className="text-[10px] text-rose-400 font-black uppercase mb-1">Low Sensitivity</p>
                         <p className="text-xs text-white font-bold">1 Unit : 5g Carbs</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                 {[
                   { t: "The Link", d: "More common during puberty, pregnancy, menopause, or with conditions like PCOS.", icon: Users },
                   { t: "Pathology", d: "High triglycerides, cholesterol, or fat stored around liver/pancreas drive resistance.", icon: Scale },
                   { t: "Symptoms", d: "Tiredness, hunger, and difficulty concentrating are common indicators.", icon: Moon }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 p-8 rounded-[2.5rem] bg-slate-950 border border-white/5 hover:border-white/10 transition-all">
                      <div className="p-4 rounded-2xl bg-white/5 h-fit">
                         <item.icon className="text-slate-400 w-6 h-6" />
                      </div>
                      <div>
                         <h4 className="text-lg font-black text-white mb-1 uppercase tracking-tight">{item.t}</h4>
                         <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>

            {/* Management & Remission */}
            <div className="grid lg:grid-cols-3 gap-8">
               <div className="p-12 glass-card rounded-[3.5rem] border-white/5 bg-gradient-to-br from-slate-950 to-emerald-500/5 space-y-6">
                  <div className="p-4 bg-emerald-500/10 rounded-2xl w-fit"><Activity className="text-emerald-400 w-6 h-6" /></div>
                  <h3 className="text-2xl font-black text-white">Management</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    Weight loss and increased activity are the primary treatments to improve responsiveness across all diabetes types.
                  </p>
               </div>

               <div className="p-12 glass-card rounded-[3.5rem] border-white/5 bg-slate-950 space-y-6">
                  <div className="p-4 bg-primary/10 rounded-2xl w-fit"><Settings className="text-primary w-6 h-6" /></div>
                  <h3 className="text-2xl font-black text-white">Clinical Synergy</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    Metformin can be prescribed to reduce resistance in both Type 1 and Type 2 patients alongside insulin therapy.
                  </p>
               </div>

               <div className="p-12 glass-card rounded-[3.5rem] border-white/5 bg-gradient-to-br from-slate-950 to-indigo-500/5 space-y-6">
                  <div className="p-4 bg-indigo-500/10 rounded-2xl w-fit"><Target className="text-indigo-400 w-6 h-6" /></div>
                  <h3 className="text-2xl font-black text-white">The ReTUNE Study</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    Shows that people even at lower body weights can put Type 2 diabetes into remission through strategic weight loss.
                  </p>
               </div>
            </div>

            {/* Severe Resistance Protocol */}
            <div className="p-12 rounded-[4rem] bg-rose-500/5 border border-rose-500/10 space-y-8">
               <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="p-6 bg-rose-500/10 rounded-[2rem] border border-rose-500/20">
                     <AlertTriangle className="text-rose-500 w-12 h-12" />
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-3xl font-black text-white leading-tight">Severe Insulin Resistance</h3>
                     <p className="text-sm text-slate-400 leading-relaxed font-medium">
                       Rare conditions (mutations, antibodies, lipodystrophy) requiring high-concentration insulin or metreleptin therapy.
                     </p>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center pt-8 border-t border-white/5">
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] italic">
          Clinical Education: Fundamentals of Insulin Therapy
        </p>
      </div>

    </section>
  )
}
