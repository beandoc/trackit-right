"use client"

import { motion } from "framer-motion"
import { 
  Brain, 
  Wind, 
  ShieldCheck, 
  Smile, 
  Zap, 
  Activity, 
  Heart,
  Lightbulb,
  ArrowRight,
  Quote,
  Flame,
  Coffee
} from "lucide-react"

const stressMechanisms = [
  { 
    title: "The Hormonal Spike", 
    desc: "Stress triggers 'Fight or Flight' hormones (Cortisol/Adrenaline), releasing extra glucose into the bloodstream for fuel.",
    icon: Flame,
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  { 
    title: "The Wear & Tear", 
    desc: "Long-term stress drains the motivation for self-care, leading to slipped routines in testing, eating, and exercise.",
    icon: Activity,
    color: "text-red-500",
    bg: "bg-red-500/10" 
  },
  { 
    title: "The Vicious Cycle", 
    desc: "Higher blood sugar makes you feel worse, which creates more guilt/stress, leading to even higher sugar levels.",
    icon: Zap,
    color: "text-primary",
    bg: "bg-primary/10"
  }
]

const managementTips = [
  { title: "Reframing", desc: "Change your response to a situation by looking at it in a new, more manageable light." },
  { title: "Physical Shielding", desc: "Take small 'mental health breaks' like relaxing in a tub or deep breathing to reset." },
  { title: "Situational Change", desc: "Identify one specific stressor you can change—like removing tempting foods or setting boundaries." },
  { title: "Laughter Therapy", desc: "Find at least one thing to laugh about every day to heal the 'stressed-out soul'." }
]

export function PsychologicalDefense() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* Header: The Invisible Variable */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Brain className="w-4 h-4" />
            Specialist Module: Psychological & Emotional Resilience
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-foreground leading-[1.1] tracking-tighter">
            The Invisible <br /> <span className="text-primary text-glow">Variable.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-xl font-medium">
             Diabetes management is a 24/7 commitment. Stress isn't just a feeling—it's a clinical driver of glycemic instability.
          </p>
        </div>

        <div className="flex-1 glass-card p-12 rounded-[3.5rem] border-primary/20 bg-primary/5 relative group">
           <Quote className="absolute top-8 right-8 w-12 h-12 text-primary opacity-20" />
           <div className="space-y-6 relative z-10">
              <p className="text-xl font-medium text-foreground italic leading-relaxed">
                "I finally got the idea that I couldn't do it all. I made some hard choices and ended up with a much more manageable life."
              </p>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Smile className="text-white w-5 h-5" />
                 </div>
                 <div>
                    <p className="text-xs font-black uppercase text-foreground">The Serenity Protocol</p>
                    <p className="text-[10px] text-slate-500 font-bold">Acceptance vs. Action</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Grid: Mechanisms of Stress */}
      <div className="grid md:grid-cols-3 gap-8">
         {stressMechanisms.map((mech, i) => (
           <div key={i} className="p-10 rounded-[40px] bg-card border border-border group hover:border-primary/40 transition-all space-y-6">
              <div className={`w-14 h-14 rounded-2xl ${mech.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                 <mech.icon className={`w-7 h-7 ${mech.color}`} />
              </div>
              <h4 className="text-xl font-bold text-foreground">{mech.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {mech.desc}
              </p>
           </div>
         ))}
      </div>

      {/* Interactive: Reframing Practice */}
      <div className="p-12 glass-card rounded-[3rem] border-border bg-gradient-to-br from-background to-secondary/5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
             <div className="space-y-4">
               <h3 className="text-3xl font-bold text-foreground flex items-center gap-3">
                 <ShieldCheck className="text-secondary w-8 h-8" />
                 Defense Strategies
               </h3>
               <p className="text-sm text-slate-500 font-medium">Actionable techniques to lower cortisol and decouple stress from glucose.</p>
             </div>

             <div className="grid gap-4">
                {managementTips.map((tip, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-border group hover:bg-secondary/5 transition-colors">
                     <div className="p-3 bg-secondary/10 rounded-xl h-fit">
                        <Lightbulb className="w-5 h-5 text-secondary" />
                     </div>
                     <div>
                        <h5 className="text-sm font-black text-foreground uppercase tracking-widest mb-1">{tip.title}</h5>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">{tip.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="space-y-8 p-10 bg-card rounded-[3rem] border border-border flex flex-col items-center text-center justify-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
             <Wind className="w-16 h-16 text-secondary animate-pulse-slow" />
             <h4 className="text-2xl font-black text-foreground mt-4">The Serenity Prayer</h4>
             <p className="text-sm text-slate-500 italic max-w-sm leading-relaxed font-medium">
               "Grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference."
             </p>
             <div className="flex gap-4 pt-6">
                <div className="px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-full text-[10px] font-black uppercase text-slate-500">Faith</div>
                <div className="px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-full text-[10px] font-black uppercase text-slate-500">Resilience</div>
                <div className="px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-full text-[10px] font-black uppercase text-slate-500">Laughter</div>
             </div>
             <button className="mt-10 px-8 py-4 bg-secondary text-white font-black rounded-xl text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-secondary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group">
                IDENTIFY MY STRESSORS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>

      {/* Clinical Caution: The Satiety Effect of Stress */}
      <div className="grid lg:grid-cols-2 gap-8">
         <div className="p-12 glass-card bg-amber-500/5 border-amber-500/20 rounded-[3rem] flex items-center gap-8">
            <Flame className="w-12 h-12 text-amber-500 flex-shrink-0" />
            <div className="space-y-2">
               <h4 className="text-lg font-bold text-foreground line-clamp-1">Immediate Glycemic Impact</h4>
               <p className="text-xs text-slate-500 font-medium leading-relaxed">
                 High-stress environments (like toxic workplaces) can cause blood sugars to shoot up instantly, often requiring supplemental insulin corrections despite no food intake.
               </p>
            </div>
         </div>
         <div className="p-12 glass-card bg-blue-500/5 border-blue-500/20 rounded-[3rem] flex items-center gap-8">
            <Coffee className="w-12 h-12 text-blue-500 flex-shrink-0" />
            <div className="space-y-2">
               <h4 className="text-lg font-bold text-foreground">Mental Health Break</h4>
               <p className="text-xs text-slate-500 font-medium leading-relaxed">
                 Taking just 10 minutes for yourself isn't "slacking"—it's an essential clinical intervention to bring your endocrine system back to homeostasis.
               </p>
            </div>
         </div>
      </div>

    </section>
  )
}
