"use client"

import { motion } from "framer-motion"
import { 
  Heart, 
  Stethoscope, 
  CigaretteOff, 
  Activity, 
  Droplets, 
  Scale, 
  Zap, 
  Moon, 
  Brain, 
  Clock,
  ShieldCheck,
  ChevronRight,
  Pill
} from "lucide-react"

const managementSteps = [
  { icon: Activity, title: "Diabetes Mapping", desc: "Monitor glucose & carb intake daily.", color: "text-primary" },
  { icon: CigaretteOff, title: "Zero Nicotine", desc: "Avoid tobacco & second-hand smoke.", color: "text-red-500" },
  { icon: Heart, title: "Blood Pressure", desc: "Target 130/80 or lower as guided.", color: "text-rose-500" },
  { icon: Droplets, title: "Lipid Control", desc: "Monitor LDL, HDL, and Triglycerides.", color: "text-amber-500" },
  { icon: Scale, title: "Weight Balance", desc: "Maintain a clinical BMI range.", color: "text-emerald-500" },
  { icon: Zap, title: "25min Movement", desc: "Moderate daily physical activity.", color: "text-orange-500" },
  { icon: Moon, title: "Deep Sleep", desc: "7-8 hours for metabolic recovery.", color: "text-indigo-400" },
  { icon: Brain, title: "Stress Relief", desc: "Mental health affects glucose levels.", color: "text-purple-400" },
  { icon: Stethoscope, title: "Regular Labs", desc: "Quarterly A1C and renal screenings.", color: "text-cyan-400" },
]

export function RiskManagement() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-20">
      
      {/* Header with Hero-like intensity */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/20 bg-rose-500/5 text-rose-500 text-[10px] font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            Vascular Protection Protocol
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Defending Against <br /> <span className="text-rose-500 text-glow">Heart Disease & Stroke.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            Managing diabetes is about more than blood sugar—it's a comprehensive strategy to prevent cardiovascular events. Habits are your primary medicine.
          </p>
        </div>

        <div className="flex-1 glass-card p-10 rounded-[40px] border-emerald-500/10 bg-emerald-500/[0.02] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl" />
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                <Pill className="text-emerald-500 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">First-Line Therapy</h4>
                <p className="text-emerald-500/60 text-xs font-bold uppercase tracking-widest">Clinical Protocol</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Metformin is often prescribed as a primary medication. It works by <span className="text-white font-semibold underline decoration-emerald-500">decreasing the glucose produced in your liver</span>, acting as a baseline for your metabolic health journey.
            </p>
            <div className="pt-4 border-t border-white/5">
              <p className="text-[10px] text-slate-500 font-medium italic">
                Note: Additional medications help if lifestyle and metformin aren't achieving target A1C.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 9-Step Prevention Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {managementSteps.map((step, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02, y: -5 }}
            className="p-8 rounded-[32px] bg-slate-900/40 border border-white/5 hover:border-white/10 transition-all group"
          >
            <div className={`w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center mb-6 border border-white/10 group-hover:border-primary/40 transition-colors`}>
              <step.icon className={`w-6 h-6 ${step.color}`} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              {i + 1}. {step.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action: The Heart-Healthy Plan */}
      <div className="p-1 glass-card bg-gradient-to-r from-primary/10 via-transparent to-rose-500/10 rounded-[3rem]">
        <div className="p-12 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12 bg-slate-950/80 rounded-[2.9rem] backdrop-blur-xl">
           <div className="space-y-6 text-center md:text-left">
             <h3 className="text-4xl font-bold text-white tracking-tight">Your Heart-Healthy <br /> Action Plan.</h3>
             <p className="text-slate-400 max-w-md">Comprehensive habits to reduce cardiovascular risk by 50%+. Consistency is your best medication.</p>
           </div>
           
           <div className="flex flex-col gap-4 w-full md:w-auto">
              <button className="px-10 py-5 bg-white text-slate-950 font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)]">
                DOWNLOAD PROTOCOL
              </button>
              <button className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                SCHEDULE LAB WORK <Clock className="w-4 h-4" />
              </button>
           </div>
        </div>
      </div>
    </section>
  )
}
