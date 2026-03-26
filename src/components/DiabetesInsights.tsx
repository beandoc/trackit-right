"use client"

import { motion } from "framer-motion"
import { Apple, Utensils, HeartPulse, Brain, Zap, Stethoscope } from "lucide-react"
import Image from "next/image"

const categories = [
  {
    title: "Healthy Coping",
    description: "Manage stress through yoga, meditation, community support, and regular nature walks.",
    icon: Brain,
    color: "from-blue-500 to-indigo-600",
    details: ["Yoga & Pranayama", "Community Support", "Journaling", "Nature Walks"]
  },
  {
    title: "Activity & Movement",
    description: "Aim for 20-25 minutes of moderate activity daily—walking, dancing, or yardwork.",
    icon: Zap,
    color: "from-orange-500 to-red-600",
    details: ["Strength Training", "Daily Walking", "Dance Therapy", "Housework Activity"]
  },
  {
    title: "Risk Reduction",
    description: "Prevent complications with regular screenings, vaccinations, and oral care.",
    icon: Stethoscope,
    color: "from-emerald-500 to-teal-600",
    details: ["Foot Health", "Regular Vaccines", "Eye Screenings", "Dental Care"]
  }
]

export function DiabetesInsights() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-32">
      {/* Nutrition Section */}
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-[10px] font-bold uppercase tracking-wider">
            <Apple className="w-3 h-3" />
            Precise Nutrition
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            The Science of <br /> The Portion Plate
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            Diabetes management starts with visual proportioning. Our clinical guide helps you balance macros without complex weighing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold">50%</div>
              <h4 className="font-bold text-white">Bhindi Masala & Salad</h4>
              <p className="text-xs text-slate-500">Fiber-rich sautéed okra and leafy green vegetables for low GI impact.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">25%</div>
              <h4 className="font-bold text-white">Moong Dal & Protein</h4>
              <p className="text-xs text-slate-500">Lentils or Paneer/Chicken for essential amino acids and satiety.</p>
            </div>
          </div>
        </div>

        <div className="flex-1 relative group">
          <div className="absolute -inset-4 bg-secondary/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 glass-card">
            <Image 
              src="/assets/images/indian_plate.png"
              alt="Indian Medical Nutrition Plate"
              width={600}
              height={600}
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>
      </div>

      {/* Grid Modules */}
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.color} blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity`} />
            
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-8 shadow-lg`}>
              <cat.icon className="w-7 h-7 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">{cat.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">{cat.description}</p>
            
            <ul className="space-y-3">
              {cat.details.map((detail, j) => (
                <li key={j} className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Monitoring Widget - The 15-15 Rule */}
      <div className="glass-card p-12 rounded-[40px] border-primary/20 bg-gradient-to-br from-slate-900/60 to-primary/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent_70%)]" />
        <div className="relative z-10 flex flex-col items-center text-center space-y-8">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 animate-pulse">
            <HeartPulse className="w-10 h-10 text-primary" />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">The 15-15 Monitoring Rule</h2>
            <p className="text-slate-400 max-w-2xl text-lg">
              When blood sugar drops below 70 mg/dL, act quickly: Consume 15g of fast-acting carbs and wait 15 minutes to recheck.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { label: "Check Sugar", step: "01" },
              { label: "15g Carbs", step: "02" },
              { label: "Wait 15m", step: "03" },
              { label: "Re-Check", step: "04" }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center font-mono text-primary font-bold">
                  {step.step}
                </div>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
