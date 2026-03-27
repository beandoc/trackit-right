"use client"

import { motion } from "framer-motion"
import { 
  Utensils, 
  CheckCircle2, 
  ArrowRight, 
  Info, 
  Heart, 
  Flame, 
  Leaf, 
  Fish, 
  Zap,
  Target,
  ChevronRight,
  TrendingUp,
  AlertCircle
} from "lucide-react"

export function IndianPlateMethod() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* Header: Cultural Context */}
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Utensils className="w-4 h-4" /> NUTRITIONAL STEWARDSHIP: INDIA
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
            The Indian <br />
            <span className="text-primary tracking-tight text-glow">Plate Method.</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-2xl">
            A simple 9-inch plate strategy tailored for Indian diets. Balance your favorite local staples with clinical portion control to manage blood sugar effectively.
          </p>
        </div>

        <div className="p-8 rounded-[3rem] bg-slate-950 border border-white/5 space-y-6">
           <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl"><Target className="text-primary w-6 h-6" /></div>
              <h4 className="text-xl font-bold text-white uppercase tracking-tight">The 9-Inch Standard</h4>
           </div>
           <p className="text-xs text-slate-500 font-medium leading-relaxed">
             Using a 9-inch plate is the first step in successful portion management. It naturally prevents overeating without feeling restricted.
           </p>
        </div>
      </div>

      {/* The Visual Plate */}
      <div className="grid lg:grid-cols-2 gap-20 items-center">
         <div className="relative aspect-square max-w-md mx-auto lg:mx-0 group">
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all" />
            
            {/* 9-Inch Plate SVG Architecture */}
            <svg viewBox="0 0 400 400" className="relative z-10 w-full h-full drop-shadow-2xl">
               {/* Plate Base */}
               <circle cx="200" cy="200" r="180" fill="#0f172a" stroke="#1e293b" strokeWidth="4" />
               <circle cx="200" cy="200" r="160" fill="#020617" stroke="#334155" strokeWidth="1" />

               {/* 50% Non-Starchy Veggies (Left Half) */}
               <path d="M 200 200 L 200 40 A 160 160 0 0 0 200 360 Z" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
               
               {/* 25% Protein (Top Right Quarter) */}
               <path d="M 200 200 L 360 200 A 160 160 0 0 0 200 40 Z" fill="#3b82f6" fillOpacity="0.15" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />

               {/* 25% Starch (Bottom Right Quarter) */}
               <path d="M 200 200 L 200 360 A 160 160 0 0 0 360 200 Z" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" />

               {/* Labels */}
               <text x="100" y="210" fill="#10b981" className="text-[14px] font-black uppercase tracking-widest pointer-events-none" textAnchor="middle">1/2 Veggies</text>
               <text x="280" y="120" fill="#3b82f6" className="text-[12px] font-black uppercase tracking-widest pointer-events-none" textAnchor="middle">1/4 Protein</text>
               <text x="280" y="300" fill="#f59e0b" className="text-[12px] font-black uppercase tracking-widest pointer-events-none" textAnchor="middle">1/4 Starch</text>
            </svg>
         </div>

         <div className="space-y-12">
            {[
              { 
                t: "1/2 Plate: Non-Starchy Veggies", 
                d: "The largest section. These don't spike glucose. Aim for diversity.",
                items: ["Bhindi (Okra)", "Palak (Spinach)", "Lauki (Gourd)", "Gobi (Cauliflower)", "Karela (Bitter Gourd)", "Zucchini", "Cabbage"],
                color: "text-emerald-500", bg: "bg-emerald-500/10", icon: Leaf
              },
              { 
                t: "1/4 Plate: Protein", 
                d: "Only slightly raises glucose. Essential for muscle and satiety.",
                items: ["Paneer (Low Fat)", "Dals & Soya", "Rajma / Chhole", "Fish (Rohu/Surmai)", "Chicken / Eggs", "Tofu"],
                color: "text-blue-500", bg: "bg-blue-500/10", icon: Fish
              },
              { 
                t: "1/4 Plate: Starches", 
                d: "Will increase glucose. Keep it to one quarter and choose whole grains.",
                items: ["Wheat Roti", "Bajra / Jowar", "Brown Rice", "Dalia / Poha", "Potato / Sweet Potato", "Corn / Peas"],
                color: "text-amber-500", bg: "bg-amber-500/10", icon: Flame
              }
            ].map((section, i) => (
              <div key={i} className="space-y-4">
                 <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl ${section.bg} ${section.color}`}><section.icon className="w-6 h-6" /></div>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight">{section.t}</h3>
                 </div>
                 <p className="text-xs text-slate-500 font-medium pl-14">{section.d}</p>
                 <div className="flex flex-wrap gap-2 pl-14 pt-2">
                    {section.items.map((item) => (
                      <div key={item} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[9px] font-bold text-slate-400 uppercase tracking-widest hover:border-white/10 transition-colors">
                         {item}
                      </div>
                    ))}
                 </div>
              </div>
            ))}
         </div>
      </div>

      {/* Pro-Tips & Contextual Strategy */}
      <div className="grid md:grid-cols-2 gap-8">
         <div className="p-12 rounded-[3.5rem] bg-slate-900/50 border border-white/5 space-y-6 flex flex-col justify-between group">
            <div className="space-y-4">
               <div className="flex items-center gap-4 text-emerald-500">
                  <TrendingUp className="w-6 h-6" />
                  <h4 className="text-xl font-black text-white uppercase tracking-tighter italic">Low-GI Hacks</h4>
               </div>
               <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  Swap white rice for **Bajra** or **Jowar** to significantly reduce the glycemic load of your meal. Always choose whole-wheat Rotis over Naan or Maida products.
               </p>
            </div>
            <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest">
               <span>Pravin's Tip: Add lemon for better absorption</span>
               <ChevronRight className="w-4 h-4" />
            </div>
         </div>

         <div className="p-12 rounded-[3.5rem] bg-rose-500/5 border border-rose-500/10 space-y-6 group">
            <div className="flex items-center gap-4 text-rose-500">
               <AlertCircle className="w-6 h-6" />
               <h4 className="text-xl font-black text-white uppercase tracking-tighter italic">Hidden Carbs Alert</h4>
            </div>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              **Rajma** and **Chhole** are excellent protein sources but also contain significant carbohydrates. If they are in the 'Protein' section, reduce your portion of Roti/Rice to maintain balance.
            </p>
            <div className="pt-6 border-t border-rose-500/10 flex items-center gap-4">
               <Zap className="text-rose-500 w-5 h-5 animate-pulse" />
               <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest">CRITICAL: Balance Protein with Starch to avoid spikes.</p>
            </div>
         </div>
      </div>

      <div className="text-center pt-8 border-t border-white/5 opacity-50">
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] italic">
          Clinical Standard: Indian Diabetes Plate Method (ADCES-inspired)
        </p>
      </div>

    </section>
  )
}
