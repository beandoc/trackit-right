"use client"

import { motion } from "framer-motion"
import { 
  Thermometer, 
  Activity, 
  Droplets, 
  Coffee, 
  PhoneCall, 
  CheckCircle2, 
  AlertTriangle,
  Clock,
  BriefcaseMedical,
  Zap,
  ChevronRight
} from "lucide-react"

const sickDaySteps = [
  { 
    title: "Medication Adherence", 
    desc: "Continue taking your standard diabetes medications unless otherwise directed by your physician.", 
    icon: BriefcaseMedical,
    tag: "Rule #1"
  },
  { 
    title: "Vigilant Hydration", 
    desc: "Maintain constant fluid intake to prevent dehydration and metabolic acidosis during fever.", 
    icon: Droplets,
    tag: "Rule #2"
  },
  { 
    title: "High-Frequency Testing", 
    desc: "Escalate glucose monitoring to every 2-4 hours during the acute phase of illness.", 
    icon: Activity,
    tag: "Rule #3"
  },
  { 
    title: "Caloric Maintenance", 
    desc: "If regular meals are impossible, consume 45g of carbohydrates every 3-4 hours.", 
    icon: Coffee,
    tag: "Rule #4"
  }
]

export function SickDayProtocol() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-20 border-t border-white/5">
      
      {/* Narrative Header: The Illness Response */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-500 text-[10px] font-bold uppercase tracking-widest">
            <Thermometer className="w-4 h-4" />
            Specialist Module: Sick-Day Guidelines
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tighter">
            Managing Diabetes <br /> During <span className="text-amber-500 text-glow">Acute Illness.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            When you are ill, your body's stress response can cause blood glucose spikes even if you aren't eating. A dedicated protocol prevents severe complications like DKA.
          </p>
        </div>

        <div className="flex-1 glass-card p-10 rounded-[40px] border-amber-500/10 bg-amber-500/[0.02] relative group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl opacity-50" />
           <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <AlertTriangle className="text-amber-500 w-6 h-6" />
                </div>
                <h4 className="font-bold text-white text-lg">The Ketone Threshold</h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Test for urine ketones if glucose is <span className="text-white font-bold">&gt; 240 mg/dL</span>. Moderate to large ketones require an immediate call to your clinical team.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black text-amber-500 uppercase tracking-tighter">
                <PhoneCall className="w-3 h-3" /> Emergency Call: Enabled.
              </div>
           </div>
        </div>
      </div>

      {/* Protocol Step Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sickDaySteps.map((step, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-[36px] bg-slate-950 border border-white/5 hover:border-amber-500/20 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                 <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-amber-500/10 transition-colors">
                   <step.icon className="w-6 h-6 text-slate-400 group-hover:text-amber-500" />
                 </div>
                 <span className="text-[9px] font-black text-slate-600 uppercase border border-white/5 px-2 py-0.5 rounded tracking-widest">{step.tag}</span>
              </div>
              <h4 className="text-xl font-bold text-white tracking-tight">{step.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">{step.desc}</p>
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-[10px] font-black text-secondary uppercase tracking-widest">
              PRIMARY ACTION <CheckCircle2 className="w-3 h-3" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Emergency Kit & Contact Banner */}
      <div className="p-12 glass-card bg-gradient-to-br from-amber-500/10 to-slate-950 rounded-[3rem] border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-lg text-[10px] font-black uppercase tracking-widest">
               <Zap className="w-3 h-3" /> Preparation is Key
             </div>
             <h3 className="text-3xl font-bold text-white">The Clinical Sick-Day Kit.</h3>
             <p className="text-slate-400 text-sm leading-relaxed">
               Don't wait until you are ill to gather supplies. Your survival kit should be pre-staged and accessible to family members in case of confusion.
             </p>
             <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Ketone Test Strips",
                  "Fast-acting Sugar (Gel/Tabs)",
                  "Contact info for Doctor/Nurse",
                  "Backup Glucose Meter & Strips"
                ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-amber-500" />
                      <span className="text-xs font-bold text-slate-300">{item}</span>
                   </div>
                ))}
             </div>
          </div>
          
          <div className="p-10 rounded-[2.5rem] bg-amber-500/10 border border-amber-500/20 text-center space-y-6">
             <PhoneCall className="w-12 h-12 text-amber-500 mx-auto" />
             <h4 className="text-xl font-black text-white uppercase tracking-tighter italic">When to Call?</h4>
             <ul className="text-xs text-slate-400 space-y-3 leading-relaxed font-medium">
                <li>• Frequent vomiting (cannot keep fluids down)</li>
                <li>• Glucose consistently &gt; 240 mg/dL</li>
                <li>• Moderate/Large Ketones in urine</li>
                <li>• Difficulty breathing or extreme confusion</li>
             </ul>
             <button className="w-full py-4 bg-amber-500 text-white font-black rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
               TALK TO CLINICAL TEAM <ChevronRight className="w-4 h-4" />
             </button>
          </div>
        </div>
      </div>
    </section>
  )
}
