"use client"

import { motion } from "framer-motion"
import { 
  Baby, 
  Heart, 
  Brain, 
  Sparkles, 
  Scale, 
  CheckCircle2, 
  Info, 
  MessageSquare,
  Activity,
  UserPlus,
  ChevronRight
} from "lucide-react"

const womenChallenges = [
  {
    title: "Maternal Health & Pregnancy",
    icon: Baby,
    desc: "Achieving target HbA1c (under 6%) before the 7th week of conception is critical for fetal development.",
    cta: "Pre-conception Plan",
    color: "bg-pink-500/10 text-pink-500"
  },
  {
    title: "Body Image & Nutrition",
    icon: Scale,
    desc: "Realistic body standards are vital. Avoid 'shaming' cycles that lead to insulin purging/omission.",
    cta: "Wellness Guide",
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "Cardiovascular Risks",
    icon: Heart,
    desc: "Diabetes removes the natural cardiac protection women typically have, equalizing risk with men.",
    cta: "Heart Shield",
    color: "bg-rose-500/10 text-rose-500"
  },
  {
    title: "Emotional Wellbeing",
    icon: Brain,
    desc: "Women often face higher anxiety and lower family support in diabetes care. Expert counseling helps.",
    cta: "Get Support",
    color: "bg-indigo-500/10 text-indigo-500"
  }
]

export function WomenDiabetesSpecialist() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-20 border-t border-white/5">
      
      {/* Narrative Header */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/20 bg-pink-500/5 text-pink-500 text-[10px] font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            Specialist Module: Women & Diabetes
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Meeting the Challenge <br /> with <span className="text-pink-500 text-glow">Grace & Intelligence.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            "Diabetes chooses the stunning, smart women." — Dr. Lois Jovanovic. While the disease brings unique emotional and physical burdens, a balanced way of life ensures you feel like a million.
          </p>
        </div>

        <div className="flex-1 glass-card p-10 rounded-[40px] border-pink-500/10 bg-pink-500/[0.02] relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-3xl opacity-50" />
           <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
                  <Activity className="text-pink-500 w-6 h-6" />
                </div>
                <h4 className="font-bold text-white text-lg">The Pregnancy Window</h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Pre-planning is everything. Reducing HbA1c to <span className="text-white font-bold">under 6.0%</span> before pregnancy eliminates major risks. Success is built on action before the 7th week of conception.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black text-pink-500 uppercase tracking-tighter">
                <CheckCircle2 className="w-3 h-3" /> All the effort is worth it.
              </div>
           </div>
        </div>
      </div>

      {/* Challenge Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {womenChallenges.map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-[32px] bg-slate-900 border border-white/5 hover:border-pink-500/20 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-6">
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white underline decoration-white/5">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
            </div>
            
            <button className="mt-8 flex items-center gap-2 text-[10px] font-black text-slate-400 group-hover:text-pink-400 transition-colors uppercase tracking-widest">
              {item.cta} <ChevronRight className="w-3 h-3" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Support Logic Banner */}
      <div className="p-12 glass-card bg-gradient-to-r from-pink-500/10 via-slate-900 to-indigo-500/10 rounded-[3rem] border-white/5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Emotional Resilience</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Research shows women with diabetes may feel more hassled by spouses or less confident in self-care. It's okay to feel overwhelmed—getting help for emotional distress is a clinical requirement for stability.
            </p>
            <ul className="space-y-3">
               {[
                 "Involve family in meal preparation & praise.",
                 "Seek counselors who understand diabetic distress.",
                 "Practical help > Passive support."
               ].map((bullet, i) => (
                 <li key={i} className="flex items-center gap-3 text-xs text-slate-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-pink-500" />
                    {bullet}
                 </li>
               ))}
            </ul>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-5">
               <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                 <MessageSquare className="w-6 h-6 text-pink-400" />
               </div>
               <div className="flex-1">
                 <p className="text-sm font-bold text-white">Counseling referral</p>
                 <p className="text-xs text-slate-500">Specialized emotional care for women.</p>
               </div>
               <button className="p-2 bg-pink-500 rounded-lg hover:rotate-12 transition-transform">
                 <UserPlus className="w-4 h-4 text-white" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
