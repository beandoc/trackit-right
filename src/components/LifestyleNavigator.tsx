"use client"

import { motion } from "framer-motion"
import { 
  Plane, 
  Briefcase, 
  Heart, 
  Dna, 
  Zap, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight,
  MapPin,
  Clock,
  Car,
  Wind
} from "lucide-react"

const lifestyleCategories = [
  {
    id: "Travel",
    icon: Plane,
    title: "The Nomad Protocol",
    desc: "Never check your insulin. Keep your medical kit in your carry-on to avoid thermal exposure and loss.",
    items: ["Carry-on Insulin Kit", "Backup Glucagon", "Extra Batteries", "Carb Snacks (Emergency)"]
  },
  {
    id: "Employment",
    icon: Briefcase,
    title: "Professional Control",
    desc: "Diabetes shouldn't bar you from success. Maintain control to ensure top performance on the job.",
    items: ["Rights Advocacy", "Workplace Disclosure", "Timed Meal Breaks", "Safety-Critical Roles"]
  },
  {
    id: "Exercise",
    icon: Wind,
    title: "Aerobic Vitality",
    desc: "Walking, swimming, or dancing improves insulin sensitivity. Scale slowly to build deep strength.",
    items: ["Pre/Post Testing", "25m Daily Movement", "Heart Rate Sync", "Hydration Guard"]
  },
  {
    id: "Intimacy",
    icon: Heart,
    title: "Sexual Wellness",
    desc: "Glucose control is the foundation of intimacy. Address neuropathy and erectile health with a specialist.",
    items: ["Neuropathy Support", "Vaginal Health", "ED Solutions", "Hormonal Balance"]
  }
]

export function LifestyleNavigator() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-20 border-t border-white/5">
      
      {/* Narrative Header */}
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-500 text-[10px] font-bold uppercase tracking-widest">
            <MapPin className="w-4 h-4" />
            Specialist Module: Life navigator
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Diabetes Doesn't <br /> <span className="text-blue-500 text-glow">Stand in the Way.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            From professional success to global travel, managing your lifestyle metrics ensures diabetes remains a managed condition, not a barrier.
          </p>
        </div>

        <div className="flex-1 glass-card p-10 rounded-[40px] border-blue-500/10 bg-blue-500/[0.02] relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl opacity-50 transition-all group-hover:scale-150" />
           <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Car className="text-blue-500 w-6 h-6" />
                </div>
                <h4 className="font-bold text-white text-lg">The Driving Safety Code</h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                On road trips: Test before you start and <span className="text-white font-bold">every 2 hours</span>. Keep fast-acting carbohydrates within reach at all times.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black text-blue-500 uppercase tracking-tighter">
                <Clock className="w-3 h-3" /> Safety first, Always.
              </div>
           </div>
        </div>
      </div>

      {/* Navigator Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {lifestyleCategories.map((cat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-[32px] bg-slate-950 border border-white/5 hover:border-blue-500/20 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 flex items-center justify-center transition-all">
                <cat.icon className="w-7 h-7 text-slate-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-white tracking-tight">{cat.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">{cat.desc}</p>
              
              <ul className="space-y-2 pt-4">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[10px] text-slate-400 font-bold">
                    <CheckCircle2 className="w-3 h-3 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="mt-8 flex items-center gap-2 text-[10px] font-black text-slate-400 group-hover:text-white transition-colors uppercase tracking-widest">
              EXPLORE {cat.id} <ChevronRight className="w-3 h-3" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Geriatric / Senior Care Module */}
      <div className="p-12 glass-card bg-gradient-to-br from-slate-900 to-blue-900/10 rounded-[3rem] border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-lg text-[10px] font-black uppercase tracking-widest">
               <AlertTriangle className="w-3 h-3" /> Senior Mobility Alert
             </div>
             <h3 className="text-3xl font-bold text-white">Specific Care for <br /> Older Adults.</h3>
             <p className="text-slate-400 text-sm leading-relaxed">
               Managing diabetes in later stages requires special attention to fall prevention. <span className="text-white font-bold">Dizziness from hypoglycemia</span> is a leading cause of fractures in seniors. Poor vision or dexterity may also require assisted glucose monitoring.
             </p>
             <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-white/5 space-y-2">
                   <p className="text-primary font-bold text-xs uppercase">Vision Check</p>
                   <p className="text-[10px] text-slate-500">Regular eye exams to ensure monitoring visibility.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 space-y-2">
                   <p className="text-primary font-bold text-xs uppercase">Fall Prevention</p>
                   <p className="text-[10px] text-slate-500">Stability audits for hypoglycemia-related dizziness.</p>
                </div>
             </div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden glass-card p-1">
             <div className="p-10 bg-slate-950/80 rounded-[2.5rem] space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    <Zap className="text-secondary w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white tracking-widest uppercase text-sm">Vitality Protocol</h4>
                </div>
                <p className="text-xs text-slate-400 italic font-medium leading-loose">
                  "You may have to change some things you've been doing for a long time. It can feel like a challenge, but the outcome is a higher quality of life and sustained independence."
                </p>
                <button className="w-full py-4 bg-secondary rounded-xl font-bold text-white text-xs hover:bg-secondary/80 transition-all">
                  VIEW SENIOR CARE PLAN
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
