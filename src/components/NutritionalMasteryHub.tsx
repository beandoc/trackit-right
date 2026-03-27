"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Utensils, 
  Search, 
  CheckCircle2, 
  Droplets, 
  Heart, 
  ChevronRight, 
  Info, 
  Flame, 
  Zap, 
  Target, 
  Activity,
  ArrowRight,
  ShieldCheck,
  Scale,
  FlaskConical,
  Crosshair,
  Timer
} from "lucide-react"

export function NutritionalMasteryHub() {
  const [activeTab, setActiveTab] = useState<'habits' | 'label-literacy' | 'carb-counting'>('habits')

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-20">
      
      {/* Narrative Header */}
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Utensils className="w-4 h-4" /> NUTRITIONAL STEWARDSHIP
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
            Fueling with <br />
            <span className="text-primary tracking-tight text-glow">Precision.</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-2xl">
            "Sugar-free does not mean carbohydrate-free." Master the art of label literacy and carbohydrate counting to stabilize your glycemic baseline.
          </p>
        </div>

        <div className="flex flex-col gap-3 shrink-0">
           {['habits', 'label-literacy', 'carb-counting'].map((t) => (
             <button 
               key={t}
               onClick={() => setActiveTab(t as any)}
               className={`px-10 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${activeTab === t ? 'bg-primary border-primary text-white shadow-xl shadow-primary/20' : 'bg-slate-950 border-white/5 text-slate-500 hover:text-white hover:border-white/10'}`}
             >
               {t.replace('-', ' ')}
             </button>
           ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'habits' && (
          <motion.div 
            key="habits"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-16"
          >
             {/* General Habits Grid */}
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { t: "Regular Intervals", d: "Eat at regular times. Don't skip meals to avoid overeating later.", icon: Timer },
                  { t: "Hydration Standard", d: "Drink 6-8 cups (approx 2 litres) of water or sugar-free fluids daily.", icon: Droplets },
                  { t: "Protein Baseline", d: "Target 5-7 ounces (140-200g) of lean protein daily.", icon: Flame },
                  { t: "The 5-7% Goal", d: "Small weight loss (min 5-7%) drastically improves insulin sensitivity.", icon: Scale }
                ].map((habit, i) => (
                  <div key={i} className="p-8 rounded-[3rem] bg-slate-950 border border-white/5 space-y-6 group hover:border-primary/20 transition-all">
                     <div className="p-4 rounded-2xl bg-primary/10 w-fit group-hover:scale-110 transition-transform"><habit.icon className="text-primary w-6 h-6" /></div>
                     <div className="space-y-2">
                        <h4 className="text-lg font-black text-white uppercase tracking-tight">{habit.t}</h4>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">{habit.d}</p>
                     </div>
                  </div>
                ))}
             </div>

             <div className="p-12 rounded-[4rem] bg-primary/5 border border-primary/10 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                   <h3 className="text-3xl font-black text-white leading-tight tracking-tight">Respect your <br /> Roots.</h3>
                   <p className="text-slate-400 text-sm font-medium leading-relaxed">
                     A healthy eating plan is not a "strict diet." Your meal plan should respect your **culture, ethnicity, and faith** (Topic #10). Work with your dietitian to tailor traditional foods to your clinical needs.
                   </p>
                </div>
                <div className="p-8 rounded-3xl bg-slate-950 border border-white/5 space-y-4 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Heart className="w-48 h-48 text-primary" />
                   </div>
                   <h4 className="text-xl font-black text-white">Heart Health Guard</h4>
                   <ul className="space-y-3">
                      {[
                        "Prioritize Fiber: Target 25-38g daily.",
                        "Minimize Saturated & Trans-Fats.",
                        "Sodium Limit: < 2300mg daily (500mg per meal).",
                        "Avoid Liquid Sugars (Sodas/Juice)."
                      ].map((tip, i) => (
                        <li key={i} className="flex gap-4 items-center text-[10px] font-black text-slate-400 uppercase">
                           <CheckCircle2 className="text-primary w-4 h-4" /> {tip}
                        </li>
                      ))}
                   </ul>
                </div>
             </div>
          </motion.div>
        )}

        {activeTab === 'label-literacy' && (
          <motion.div 
            key="labels"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
             {/* Virtual Nutrition Label */}
             <div className="p-1 glass-card rounded-[3.5rem] bg-slate-900 overflow-hidden shadow-2xl relative">
                <div className="bg-white p-10 text-slate-900 space-y-2 font-sans rounded-[3.4rem]">
                   <h3 className="text-5xl font-black border-b-[6px] border-slate-900 pb-2">Nutrition Facts</h3>
                   <p className="text-lg font-black border-b border-slate-900 pb-1">4 servings per container</p>
                   <div className="flex justify-between items-end border-b-[8px] border-slate-900 pb-2">
                      <p className="text-xl font-black">Serving size</p>
                      <p className="text-xl font-black">1 cup (228g)</p>
                   </div>
                   
                   <div className="flex justify-between py-2 border-b border-slate-900">
                      <div className="space-y-1">
                         <p className="text-lg font-black leading-none">Amount per serving</p>
                         <h4 className="text-5xl font-black leading-none">Calories</h4>
                      </div>
                      <h4 className="text-6xl font-black leading-none self-end">280</h4>
                   </div>

                   <div className="py-2 space-y-1 border-b-[4px] border-slate-900">
                      <div className="flex justify-between border-b border-slate-300 py-1">
                         <p className="text-lg font-black">Total Fat <span className="font-normal text-slate-600">9g</span></p>
                         <p className="text-lg font-black">12%</p>
                      </div>
                      <div className="flex justify-between border-b border-slate-300 py-1 pl-4">
                         <p className="text-lg font-medium">Saturated Fat <span className="font-normal text-slate-600">4.5g</span></p>
                         <p className="text-lg font-black">23%</p>
                      </div>
                      <div className="flex justify-between border-b border-slate-300 py-1 pl-4">
                         <p className="text-lg font-medium italic">Trans Fat <span className="font-normal text-slate-600">0g</span></p>
                      </div>
                      <div className="flex justify-between border-b border-slate-300 py-1">
                         <p className="text-lg font-black">Sodium <span className="font-normal text-slate-600">160mg</span></p>
                         <p className="text-lg font-black">7%</p>
                      </div>
                      <div className="flex justify-between border-b border-slate-900 py-1">
                         <p className="text-lg font-black">Total Carbohydrate <span className="font-normal text-slate-600">34g</span></p>
                         <p className="text-lg font-black">12%</p>
                      </div>
                      <div className="flex justify-between border-b border-slate-300 py-1 pl-4 bg-primary/10">
                         <p className="text-lg font-black">Dietary Fiber <span className="font-normal text-slate-600">7g</span></p>
                         <p className="text-lg font-black">25%</p>
                      </div>
                      <div className="flex justify-between border-b border-slate-300 py-1 pl-4">
                         <p className="text-lg font-medium">Total Sugars <span className="font-normal text-slate-600">5g</span></p>
                      </div>
                      <div className="flex justify-between border-b border-slate-300 py-1 pl-8">
                         <p className="text-lg font-medium">Includes <span className="font-normal text-slate-600">2g Added Sugars</span></p>
                         <p className="text-lg font-black">4%</p>
                      </div>
                      <div className="flex justify-between items-center py-1">
                         <p className="text-lg font-black">Protein <span className="font-normal text-slate-600">15g</span></p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="space-y-8">
                <div className="p-8 rounded-[3rem] bg-slate-950 border border-white/5 space-y-6">
                   <h4 className="text-2xl font-black text-white uppercase tracking-tight">The 6-Point Guard</h4>
                   <div className="space-y-4 shadow-inner">
                      {[
                        { t: "Serving Size", d: "Information is based on 1 serving. More servings = higher carbs/fat.", icon: Crosshair },
                        { t: "Total Carb Logic", d: "Sum of fiber, sugar, and starch. (15g = 1 ADA serving).", icon: Zap },
                        { t: "Fiber Advantage", d: "Look for >3g per serving. Goal: 25g (F) / 38g (M) daily.", icon: Search },
                        { t: "Saturated vs Monounsaturated", d: "Subtract bad fats (Sat/Trans) from Total to find good fats.", icon: Heart },
                        { t: "The Sugar-Free Myth", d: "Sugar-free does NOT mean carb-free. Always check total carbs.", icon: Info },
                        { t: "Sodium Stealth", d: "Processed foods often hide high sodium. Target < 2300mg daily.", icon: Activity }
                      ].map((point, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all">
                           <point.icon className="text-primary w-4 h-4 shrink-0 mt-0.5" />
                           <div>
                              <p className="text-[10px] font-black text-white uppercase tracking-widest">{point.t}</p>
                              <p className="text-xs text-slate-500 font-medium leading-relaxed">{point.d}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </motion.div>
        )}

        {activeTab === 'carb-counting' && (
          <motion.div 
            key="carbs"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-16"
          >
             {/* General Goals Card */}
             <div className="grid lg:grid-cols-2 gap-10">
                <div className="p-12 rounded-[4rem] bg-pink-500/5 border border-pink-500/10 space-y-8 group transition-all">
                   <div className="flex items-center gap-4">
                      <div className="p-4 rounded-2xl bg-pink-500/10 text-pink-500 group-hover:scale-110 transition-transform"><Utensils className="w-8 h-8" /></div>
                      <div>
                         <p className="text-[10px] font-black text-pink-500/70 uppercase tracking-widest">General Meal Goals</p>
                         <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Women's Baseline</h3>
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 rounded-3xl bg-slate-950 border border-white/5 text-center">
                         <h4 className="text-4xl font-black text-white">2-3</h4>
                         <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Carb Servings</p>
                      </div>
                      <div className="p-6 rounded-3xl bg-slate-950 border border-white/5 text-center">
                         <h4 className="text-4xl font-black text-white">30-45</h4>
                         <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Total Grams</p>
                      </div>
                   </div>
                </div>

                <div className="p-12 rounded-[4rem] bg-blue-500/5 border border-blue-500/10 space-y-8 group transition-all">
                   <div className="flex items-center gap-4">
                      <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform"><Utensils className="w-8 h-8" /></div>
                      <div>
                         <p className="text-[10px] font-black text-blue-500/70 uppercase tracking-widest">General Meal Goals</p>
                         <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Men's Baseline</h3>
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 rounded-3xl bg-slate-950 border border-white/5 text-center">
                         <h4 className="text-4xl font-black text-white">3-4</h4>
                         <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Carb Servings</p>
                      </div>
                      <div className="p-6 rounded-3xl bg-slate-950 border border-white/5 text-center">
                         <h4 className="text-4xl font-black text-white">45-60</h4>
                         <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Total Grams</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="p-12 rounded-[4rem] bg-slate-950 border border-white/5 space-y-12 shadow-inner">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                   <div className="flex-1 space-y-6">
                      <h4 className="text-3xl font-black text-white uppercase tracking-tight leading-tight">Total Consumed Analysis</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">
                        In the 1-cup label example, youConsumed **34g** (roughly 2.3 servings). If you consume the entire container (4 cups), you have consumed **136g**—over 9 carbohydrate servings.
                      </p>
                   </div>
                   <div className="w-full lg:w-1/3 p-10 rounded-[3rem] bg-amber-500/5 border border-amber-500/10 text-center space-y-4">
                      <FlaskConical className="text-amber-500 w-10 h-10 mx-auto" />
                      <h4 className="text-xl font-black text-white italic">Self-Care Rule</h4>
                      <p className="text-[11px] text-slate-500 font-medium leading-relaxed uppercase tracking-widest">
                         Reducing overall carbohydrates is the single most effective baseline for glycemic control.
                      </p>
                   </div>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center pt-8 border-t border-white/5 flex flex-col items-center gap-6">
         <button className="px-10 py-4 rounded-3xl bg-slate-950 border border-white/10 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-4 hover:text-white transition-all group">
           DOWNLOAD DIETARY WORKBOOK (PDF) <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
         </button>
         <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest italic opacity-50">
           Standard: ADA 2024 Nutritional Stewardship Criteria
         </p>
      </div>

    </section>
  )
}
