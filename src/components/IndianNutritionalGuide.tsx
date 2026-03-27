"use client"

import { motion } from "framer-motion"
import { 
  Utensils, 
  Droplets, 
  AlertTriangle, 
  CheckCircle2, 
  Target, 
  ArrowRight, 
  Clock, 
  Search, 
  Heart, 
  Zap, 
  Beer, 
  Wine, 
  GlassWater,
  Flame,
  Scale,
  Stethoscope,
  Info
} from "lucide-react"

export function IndianNutritionalGuide() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* Header: Cultural Precision */}
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Utensils className="w-4 h-4" /> LOCALIZED STEWARDSHIP: INDIA
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
            Indian Meal <br />
            <span className="text-primary tracking-tight text-glow">Calculus.</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-2xl">
            A flexible 30-45g carbohydrate meal plan respecting regional Indian food preferences. Balance local grains with fiber-rich proteins.
          </p>
        </div>

        <div className="p-8 rounded-[3rem] bg-slate-950 border border-white/5 space-y-4">
           <div className="flex items-center gap-4 text-emerald-500">
              <CheckCircle2 className="w-6 h-6" />
              <h4 className="text-xl font-black text-white uppercase tracking-tighter italic">The 15g Unit</h4>
           </div>
           <p className="text-xs text-slate-500 font-medium leading-relaxed italic">
             "1 ADA Serving = 15 grams of Carbohydrate. Use this to count your intake."
           </p>
        </div>
      </div>

      {/* Menu Matrix */}
      <div className="grid lg:grid-cols-3 gap-8">
         {[
           {
             t: "Breakfast",
             m: "30-45g Carb Targets",
             options: [
               "2 Whole Wheat Rotis (30g) + 1 Egg Bhurji + 1 Guava (15g)",
               "1 Bowl Veggie Oats/Upma (30g) + 1 Cup Buttermilk",
               "1 Besan Chilla (15g) + 2 Small Idlis (30g) + Sambar"
             ],
             color: "text-amber-500", bg: "bg-amber-500/10"
           },
           {
             t: "Lunch",
             m: "30-45g Carb Targets",
             options: [
               "1.5 Phulkas (30g) + 1 Bowl Dal (15g) + 2 Bowls Bhindi/Palak",
               "1 Bowl Brown Rice/Dalia (45g) + Kadai Chicken + Curd",
               "1 Paneer Tikka + 1 Multigrain Roti (15g) + Large Salad"
             ],
             color: "text-blue-500", bg: "bg-blue-500/10"
           },
           {
             t: "Dinner",
             m: "30-45g Carb Targets",
             options: [
               "1 Bowl Multigrain Khichdi (45g) + Lauki Sabzi + Surmai Fish",
               "1 Bowl Chickpea Pasta (45g) + Marinara + Minced Turkey/Soya",
               "Tossed Salad + 1 Millet Roti (15g) + 3oz Baked Chicken"
             ],
             color: "text-rose-500", bg: "bg-rose-500/10"
           }
         ].map((meal, i) => (
           <div key={i} className="p-10 rounded-[3.5rem] bg-slate-950 border border-white/5 space-y-8 flex flex-col group hover:border-white/10 transition-all">
              <div className="space-y-1">
                 <p className={`text-[10px] font-black uppercase tracking-widest ${meal.color}`}>{meal.m}</p>
                 <h4 className="text-3xl font-black text-white uppercase">{meal.t}</h4>
              </div>
              <ul className="space-y-4 flex-1">
                 {meal.options.map((opt, idx) => (
                   <li key={idx} className="flex gap-4 items-start p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-[11px] text-slate-400 font-medium leading-relaxed group-hover:bg-white/5 transition-colors">
                      <Target className={`w-4 h-4 mt-0.5 shrink-0 ${meal.color}`} /> {opt}
                   </li>
                 ))}
              </ul>
           </div>
         ))}
      </div>

      {/* Snacks & Beverages split */}
      <div className="grid lg:grid-cols-2 gap-10">
         <div className="p-12 rounded-[4rem] bg-emerald-500/5 border border-emerald-500/10 space-y-10 group overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-12 -translate-y-12 group-hover:opacity-10 transition-opacity">
               <Zap className="w-64 h-64 text-emerald-500" />
            </div>
            <h3 className="text-3xl font-black text-white uppercase tracking-tight">Indian Snack IDs</h3>
            <div className="grid grid-cols-2 gap-6">
               <div className="space-y-4">
                  <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">15g Carb Ideas</p>
                  <ul className="space-y-3">
                     {["1 Medium Apple", "1 Cup Papaya", "1 Cup Makhana", "Masala Sprouted Moong"].map(s => (
                       <li key={s} className="text-xs text-slate-400 font-medium flex gap-2 items-center"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> {s}</li>
                     ))}
                  </ul>
               </div>
               <div className="space-y-4">
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Zero Carb Fix</p>
                  <ul className="space-y-3">
                     {["7 Almonds + 2 Walnuts", "1/2 Cup Low-fat Paneer", "Cucumber + Lime", "1 Piece Boiled Egg"].map(s => (
                       <li key={s} className="text-xs text-slate-400 font-medium flex gap-2 items-center"><CheckCircle2 className="w-3 h-3 text-blue-400" /> {s}</li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>

         <div className="p-12 rounded-[4rem] bg-slate-950 border border-white/5 space-y-10">
            <h3 className="text-3xl font-black text-white uppercase tracking-tight">The Beverage Guard</h3>
            <div className="grid sm:grid-cols-2 gap-6">
               <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 space-y-4">
                  <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Safe Choice (0-Cal)</h4>
                  <ul className="space-y-2 text-xs text-slate-400 font-medium">
                     <li>Still / Sparkling Water</li>
                     <li>Masala Chaas (Diluted)</li>
                     <li>Masala Chai (No Sugar)</li>
                     <li>Nimbu Paani (Stevia/No Sugar)</li>
                  </ul>
               </div>
               <div className="p-6 rounded-3xl bg-rose-500/5 border border-rose-500/10 space-y-4">
                  <h4 className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Avoid Completely</h4>
                  <ul className="space-y-2 text-xs text-slate-400 font-medium">
                     <li>Sugarcane Juice</li>
                     <li>Fruit Punch / Lassi (Sugar)</li>
                     <li>Regular Soda (40g Carbs!)</li>
                     <li>Energy / Sports Drinks</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>

      {/* Alcohol Safety Matrix */}
      <div className="p-16 rounded-[4rem] bg-rose-500/5 border border-rose-500/10 space-y-12 relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-12 -translate-y-12">
            <AlertTriangle className="w-64 h-64 text-rose-500" />
         </div>
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <h3 className="text-4xl font-black text-white leading-tight uppercase tracking-tight">Alcohol & <br /> Delayed Hypoglycemia.</h3>
               <p className="text-slate-400 text-lg font-medium leading-relaxed">
                 The liver stops releasing glucose to prioritize cleaning alcohol. This can cause **severe lows up to 24 hours later**.
               </p>
               <div className="grid grid-cols-3 gap-4">
                  {[
                    { t: "12oz Beer", icon: Beer },
                    { t: "5oz Wine", icon: Wine },
                    { t: "1.5oz Shot", icon: GlassWater }
                  ].map((d, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center gap-3">
                       <d.icon className="w-6 h-6 text-rose-500" />
                       <span className="text-[9px] font-black text-slate-500 uppercase">{d.t}</span>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="p-8 rounded-[3rem] bg-slate-950 border border-white/5 space-y-6 relative">
               <div className="absolute top-4 right-4 animate-pulse"><Info className="text-rose-500 w-5 h-5" /></div>
               <h4 className="text-xl font-black text-white">Safety Protocols</h4>
               <ul className="space-y-4">
                  {[
                    "Never drink on an empty stomach.",
                    "Limit: 1 (Women) or 2 (Men) drinks per day.",
                    "Test blood sugar more often the next day.",
                    "Glucagon will NOT work for alcohol-induced lows."
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs text-slate-400 font-bold uppercase tracking-tight">
                       <ArrowRight className="text-rose-500 w-4 h-4 shrink-0" /> {step}
                    </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>

      {/* Heart Health Matrix */}
      <div className="p-16 rounded-[4rem] bg-blue-500/5 border border-blue-500/10 space-y-12">
         <div className="text-center space-y-4">
            <h3 className="text-3xl font-black text-white uppercase tracking-tight">The Heart Health Guard</h3>
            <p className="text-sm text-slate-500 font-medium">Reducing high blood pressure and cardiac risk through simple flavor swaps.</p>
         </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Salt Swap", d: "Limit to 2300mg (1 tsp). Use lemon/Amchur for flavor.", icon: Flame, color: "text-amber-500" },
              { t: "Oil Wisdom", d: "Mustard, Rice Bran, or Olive oil over Ghee/Dalda.", icon: Droplets, color: "text-blue-400" },
              { t: "Fish Bonus", d: "2+ servings weekly (Rohu, Surmai, Salmon).", icon: Utensils, color: "text-emerald-500" },
              { t: "Fiber Surge", d: "Dals, nuts, and whole grains. Target 25-30g daily.", icon: Heart, color: "text-rose-500" }
            ].map((card, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-950 border border-white/5 space-y-4 hover:border-blue-500/20 transition-all group">
                 <div className={`p-4 rounded-xl bg-white/5 group-hover:scale-110 transition-transform ${card.color}`}><card.icon className="w-5 h-5" /></div>
                 <h4 className="text-xs font-black text-white uppercase tracking-widest">{card.t}</h4>
                 <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{card.d}</p>
              </div>
            ))}
         </div>
      </div>

      <div className="text-center pt-8 border-t border-white/5 flex flex-col items-center gap-6">
         <div className="flex gap-4 items-center p-4 bg-slate-950 rounded-2xl border border-white/5">
            <Stethoscope className="text-slate-500 w-4 h-4" />
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
              Care Standard: ADCES / ADA 2024 Nutritional Guidelines (Localized)
            </p>
         </div>
      </div>

    </section>
  )
}
