"use client"

import { motion } from "framer-motion"
import { 
  ShieldCheck, 
  Activity, 
  Utensils, 
  Move, 
  Zap, 
  Heart, 
  Footprints, 
  Eye, 
  Ban, 
  CheckCircle2,
  ChevronRight,
  Stethoscope,
  Wind
} from "lucide-react"

const complicationTips = [
  { 
    id: 1, 
    title: "Control Glucose", 
    target: "A1C < 7.0%", 
    desc: "Average blood sugar should stay within 90-130 mg/dL consistently.",
    icon: Activity,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  { 
    id: 2, 
    title: "Eat Healthy", 
    target: "Balanced Plate", 
    desc: "Focus on vegetables, fruits, whole grains, and lean protein. Limit saturated fat.",
    icon: Utensils,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  { 
    id: 3, 
    title: "Daily Activity", 
    target: "Routine Motion", 
    desc: "Regular exercise reduces the need for medication and improves insulin sensitivity.",
    icon: Move,
    color: "text-secondary",
    bg: "bg-secondary/10"
  },
  { 
    id: 4, 
    title: "Blood Pressure", 
    target: "< 130/80", 
    desc: "Lose weight and reduce salt intake to protect heart and kidney function.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  { 
    id: 5, 
    title: "Lower Cholesterol", 
    target: "LDL < 100", 
    desc: "High LDL clogs arteries. Target levels should be strictly monitored yearly.",
    icon: Heart,
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  { 
    id: 6, 
    title: "Daily Foot Check", 
    target: "Neuropathy Watch", 
    desc: "Check for cuts/sores daily. Wear well-fitting shoes and always use socks.",
    icon: Footprints,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  { 
    id: 7, 
    title: "Heart Awareness", 
    target: "Know the Signs", 
    desc: "Watch for chest pain, shortness of breath, or uncommon arm/jaw pain.",
    icon: Stethoscope,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10"
  },
  { 
    id: 8, 
    title: "Annual Eye Exam", 
    target: "Retinopathy", 
    desc: "An ophthalmologist can detect damage before your sight is impaired.",
    icon: Eye,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  { 
    id: 9, 
    title: "Quit Smoking", 
    target: "Cessation", 
    desc: "The most vital thing you can do to prevent heart and kidney failure.",
    icon: Ban,
    color: "text-slate-500",
    bg: "bg-slate-500/10"
  }
]

export function ResilienceProtocol() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* Header: The 9-Pillar Shield */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-[10px] font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            Specialist Module: Complication Defense Roadmap
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-foreground leading-[1.1] tracking-tighter">
            Nine Pillars of <br /> <span className="text-emerald-500 text-glow">Resilience.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-xl font-medium">
             Managing diabetes is more than just blood sugar. Follow this clinical roadmap to reduce long-term risks and protect your overall health.
          </p>
        </div>

        <div className="flex-1 glass-card p-12 rounded-[3.5rem] border-emerald-500/20 bg-emerald-500/5 relative group overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Wind className="w-32 h-32 text-emerald-500" />
           </div>
           <div className="space-y-6 relative z-10">
              <h4 className="text-xl font-bold text-foreground italic">Prevention is better than Cure</h4>
              <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed font-medium">
                "It doesn't stop at control. These nine actions form a comprehensive wall against the micro and macrovascular risks that follow diabetes."
              </p>
              <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest rounded-md">
                Protocol: Lifelong Adherence
              </div>
           </div>
        </div>
      </div>

      {/* Grid: 9 Ways to Avoid Complications */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         {complicationTips.map((tip, i) => (
           <motion.div 
             key={i}
             whileHover={{ y: -10 }}
             className="p-10 rounded-[40px] bg-card border border-border group hover:border-emerald-500/40 transition-all space-y-6 relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] text-8xl font-black group-hover:scale-110 transition-transform">
                 {tip.id}
              </div>
              <div className={`w-14 h-14 rounded-2xl ${tip.bg} flex items-center justify-center transition-transform group-hover:rotate-12`}>
                 <tip.icon className={`w-7 h-7 ${tip.color}`} />
              </div>
              <div className="space-y-1">
                 <h4 className="text-xl font-bold text-foreground">{tip.title}</h4>
                 <p className={`text-xs font-black uppercase tracking-widest ${tip.color}`}>{tip.target}</p>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {tip.desc}
              </p>
           </motion.div>
         ))}
      </div>

      {/* Clinical Dashboard Trigger */}
      <div className="p-12 glass-card rounded-[3rem] border-border bg-gradient-to-br from-background to-emerald-500/5 text-center space-y-8">
         <h3 className="text-4xl font-black text-foreground tracking-tighter">Your Health, Your <span className="text-primary">Responsibility.</span></h3>
         <p className="text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
           Adhering to these pillars isn't just about avoiding illness—it's about reclaiming your quality of life. Start with one pillar today.
         </p>
         <button className="px-12 py-5 bg-foreground text-background font-black rounded-2xl text-xs uppercase tracking-[0.2em] shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 mx-auto group">
            DOWNLOAD FULL COMPLIANCE CHECKLIST <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
         </button>
      </div>

    </section>
  )
}
