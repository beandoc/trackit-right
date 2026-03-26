"use client"

import { motion } from "framer-motion"
import { 
  FlameKindling, 
  Wind, 
  AlertTriangle, 
  Heart, 
  Activity, 
  Skull, 
  Ban, 
  Timer,
  CheckCircle2,
  Brain,
  Zap,
  ChevronRight
} from "lucide-react"

const riskMultipliers = [
  { label: "Diabetes Alone", value: "4X", desc: "Baseline cardiovascular risk multiplier." },
  { label: "Diabetes + Smoking", value: "11X", desc: "Exponential risk for heart attack/stroke." },
  { label: "Lungs vs Breast", value: "Higher", desc: "Lung cancer kills more women than breast cancer." }
]

const quitMethods = [
  { 
    id: "Addiction", 
    title: "The Chemical Guard", 
    desc: "Nicotine patches, gum, or clinical acupuncture for withdrawal.", 
    icon: Ban 
  },
  { 
    id: "Energy", 
    title: "Vitality Shift", 
    desc: "Replace nicotine with high-protein snacks and aerobic movement.", 
    icon: Zap 
  },
  { 
    id: "Stress", 
    title: "The Reset Protocol", 
    desc: "Soothing music, deep breathing, and restorative sleep cycles.", 
    icon: Wind 
  },
  { 
    id: "Weight", 
    title: "Metabolic Control", 
    desc: "Clinical dietitian support to manage appetite without tobacco.", 
    icon: Activity 
  }
]

export function CessationSpecialist() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24 border-t border-white/5 bg-slate-900/10">
      
      {/* Header section with 11X Alert */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-500 text-[10px] font-bold uppercase tracking-widest">
            <FlameKindling className="w-4 h-4" />
            Specialist Module: Tobacco Cessation
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
            The <span className="text-red-500 text-glow">11X Risk</span> Paradox.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            Smoking while diabetic doesn't just add risk—it multiplies it. You are **11 times more likely** to experience a major cardiovascular event compared to the general population.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-1 gap-4">
           {riskMultipliers.map((risk, i) => (
             <div key={i} className="flex items-center justify-between p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-red-500/20 transition-all group">
                <div className="space-y-1">
                   <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{risk.label}</p>
                   <p className="text-xs text-slate-400 font-medium">{risk.desc}</p>
                </div>
                <div className="text-3xl font-black text-white group-hover:text-red-500 transition-colors uppercase">
                   {risk.value}
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Complications Checklist */}
      <div className="p-12 glass-card bg-gradient-to-br from-red-500/5 to-slate-950 rounded-[40px] border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
             <h3 className="text-3xl font-bold text-white tracking-tight">Systemic Degradation</h3>
             <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { t: "Vascular Damage", d: "Accelerated nerve & vessel death." },
                  { t: "Foot Complications", d: "Slow-healing wounds & gangrene." },
                  { t: "Kidney Failure", d: "Exponential nephropathy progression." },
                  { t: "Oral Health", d: "Rapid tooth & gum decay." }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                     <div className="flex items-center gap-3">
                        <Skull className="w-4 h-4 text-red-500" />
                        <h4 className="font-bold text-white text-sm tracking-tight">{item.t}</h4>
                     </div>
                     <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{item.d}</p>
                  </div>
                ))}
             </div>
          </div>

          <div className="relative group p-1 rounded-3xl bg-gradient-to-br from-red-500/20 to-transparent">
             <div className="p-10 bg-slate-950 rounded-[2rem] space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-500/10 rounded-xl">
                    <Timer className="text-red-500 w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white tracking-widest uppercase text-sm">The 3-Month Window</h4>
                </div>
                <p className="text-xs text-slate-400 italic font-medium leading-loose">
                  "Most quitters are tempted for at least 3 months. It takes only one cigarette to revert an entire habit. Stay focused on why you quit: seeing your grandchildren, saving money, or avoiding nerve damage."
                </p>
                <div className="h-[1px] bg-white/5 w-full" />
                <button className="w-full py-4 bg-red-600 rounded-xl font-bold text-white text-xs hover:bg-red-500 transition-all">
                  START CESSATION PROTOCOL
                </button>
             </div>
          </div>
        </div>
      </div>

      {/* Quit Methodology Grid */}
      <div className="space-y-12">
        <h3 className="text-3xl font-bold text-white text-center">Identifying Your Smoke Profile</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {quitMethods.map((method, i) => (
             <motion.div 
               key={i}
               whileHover={{ y: -10 }}
               className="p-8 rounded-[36px] bg-slate-900 border border-white/5 hover:border-red-500/20 transition-all flex flex-col justify-between group"
             >
                <div className="space-y-6">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-red-500/10 transition-colors">
                      <method.icon className="w-7 h-7 text-slate-400 group-hover:text-red-500" />
                   </div>
                   <h4 className="text-xl font-bold text-white underline decoration-white/5 underline-offset-8">{method.title}</h4>
                   <p className="text-xs text-slate-500 leading-relaxed font-medium">{method.desc}</p>
                </div>
                <button className="mt-8 flex items-center gap-2 text-[10px] font-black text-slate-500 group-hover:text-white transition-colors uppercase tracking-widest">
                  {method.id} GUIDE <ChevronRight className="w-3 h-3 translate-y-[-1px]" />
                </button>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
