"use client"

import { motion } from "framer-motion"
import { 
  Brain, 
  Wind, 
  Smile, 
  Zap, 
  Heart, 
  Lightbulb, 
  ArrowRight, 
  Quote, 
  Flame, 
  Coffee,
  ShieldCheck,
  Puzzle,
  Compass,
  HandHeart
} from "lucide-react"

export function MentalHealthResilience() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* Narrative Header: The Invisible Variable */}
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Brain className="w-4 h-4" /> EMOTIONAL STEWARDSHIP
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
            The Invisible <br />
            <span className="text-secondary tracking-tight text-glow">Variable.</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-2xl">
            Stress isn't just a feeling—it's a clinical driver of glycemic instability. Mastering "Healthy Coping" is as vital as mastering your insulin dose.
          </p>
        </div>

        <div className="flex-1 glass-card p-12 rounded-[3.5rem] border-primary/20 bg-primary/5 relative group">
           <Quote className="absolute top-8 right-8 w-12 h-12 text-primary opacity-20" />
           <div className="space-y-6 relative z-10">
              <p className="text-xl font-medium text-white italic leading-relaxed">
                "I finally got the idea that I couldn't do it all. I made some hard choices and ended up with a much more manageable life."
              </p>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                    <Smile className="text-white w-5 h-5" />
                 </div>
                 <div>
                    <p className="text-xs font-black uppercase text-white">The Serenity Protocol</p>
                    <p className="text-[10px] text-slate-500 font-bold">Resilience & Acceptance</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Stress Mechanisms Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
         {[
           { t: "Hormonal Spikes", d: "Fight-or-flight hormones (Cortisol/Adrenaline) trigger the liver to dump extra glucose for energy.", icon: Flame, color: "text-orange-500", bg: "bg-orange-500/10" },
           { t: "The Satiety Trap", d: "Chronic stress drains motivation, leading to skipped routines in testing, eating, and exercise.", icon: Compass, color: "text-blue-500", bg: "bg-blue-500/10" },
           { t: "The Guilt Loop", d: "High blood sugar causes more stress/guilt, which triggers even higher sugar. Break the cycle with self-compassion.", icon: Zap, color: "text-primary", bg: "bg-primary/10" }
         ].map((m, i) => (
           <div key={i} className="p-10 rounded-[3.5rem] bg-slate-950 border border-white/5 space-y-6 group hover:border-white/10 transition-all">
              <div className={`p-5 rounded-2xl ${m.bg} ${m.color} w-fit group-hover:scale-110 transition-transform`}><m.icon className="w-8 h-8" /></div>
              <h4 className="text-2xl font-black text-white uppercase tracking-tight">{m.t}</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{m.d}</p>
           </div>
         ))}
      </div>

      {/* Coping & Problem Solving Strategies */}
      <div className="p-16 rounded-[4.5rem] bg-slate-950 border border-white/5 space-y-16">
         <div className="text-center space-y-4">
            <h3 className="text-3xl font-black text-white uppercase tracking-tight">Healthy Coping Toolkit</h3>
            <p className="text-sm text-slate-500 max-w-xl mx-auto font-medium">Four clinical-grade psychological interventions to decouple stress from glucose.</p>
         </div>

         <div className="grid md:grid-cols-2 gap-8">
            {[
              { t: "Cognitive Reframing", d: "Look at your situation in a new light. Instead of 'Failure', see 'Data points for correction'.", icon: Lightbulb },
              { t: "Physical Reset", d: "Use 10-minute mental health breaks—relaxation, deep breathing, or simple silence.", icon: Wind },
              { t: "Problem Solving", d: "Identify one specific stressor you CAN change today—like meal prepping or setting boundaries.", icon: Puzzle },
              { t: "Laughter Stewardship", d: "Laughter heals the soul and lowers cortisol. Find at least one reason to laugh daily.", icon: Smile }
            ].map((tip, i) => (
              <div key={i} className="flex gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all group">
                 <div className="p-4 bg-primary/10 rounded-2xl h-fit group-hover:scale-110 transition-transform"><tip.icon className="text-primary w-6 h-6" /></div>
                 <div className="space-y-2">
                    <h5 className="text-sm font-black text-white uppercase tracking-widest">{tip.t}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed font-medium">{tip.d}</p>
                 </div>
              </div>
            ))}
         </div>
      </div>

      {/* Situational Adaptation Card */}
      <div className="p-12 rounded-[4rem] bg-indigo-500/5 border border-indigo-500/10 flex flex-col lg:flex-row items-center gap-10">
         <HandHeart className="text-indigo-500 w-16 h-16 shrink-0" />
         <div className="space-y-4 flex-1">
            <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-tight">Situational Change</h3>
            <p className="text-slate-400 text-sm font-medium leading-relaxed">
              Accepting what you cannot change is half the battle; the other half is the **courage to change what you can**. Remove the temptation, fix the boundary, or ask for help. Self-care is a team effort.
            </p>
         </div>
         <div className="p-8 rounded-[2.5rem] bg-slate-950 border border-white/5 text-center space-y-2 min-w-[200px]">
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Psychology Rule</p>
            <h4 className="text-2xl font-black text-white italic">Self-Compassion</h4>
            <p className="text-[9px] text-slate-600 font-bold uppercase tracking-tighter">Over Perfection</p>
         </div>
      </div>

      <div className="text-center pt-8 border-t border-white/5">
         <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest italic opacity-50">
           ADCES Guideline: Psychological Resilience & Healthy Coping (Behavioral Pillar)
         </p>
      </div>

    </section>
  )
}
