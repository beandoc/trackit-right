"use client"

import { motion } from "framer-motion"
import { 
  Users, 
  ShieldCheck, 
  Info, 
  Activity, 
  Zap, 
  Heart, 
  TrendingUp, 
  Stethoscope,
  ChevronRight,
  Flame,
  BatteryLow,
  Target,
  Clock,
  Briefcase
} from "lucide-react"

export function T2DInsulinStewardship() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* Header: Addressing the Stigma */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Users className="w-4 h-4" /> 1 in 4 T2D Patients
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
            Insulin & Type 2 <br /> <span className="text-primary tracking-tight">Stewardship.</span>
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed font-medium">
             Transitioning to insulin therapy is a common clinical evolution in Type 2 Diabetes. It represents a shift in treatment, not a failure in management.
          </p>
          <div className="p-8 rounded-[3rem] bg-slate-900/40 border border-white/5 space-y-6 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck className="w-40 h-40 text-primary" />
             </div>
             <h4 className="text-xl font-bold text-white flex items-center gap-3">
                <Heart className="text-rose-500 w-6 h-6" /> It Is Not Your Fault.
             </h4>
             <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-lg">
                Insulin is simply another medication to keep you healthy. Needing it doesn't mean you haven’t managed your diabetes well—it's often the most appropriate clinical choice for long-term health.
             </p>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 gap-6">
           <div className="p-10 rounded-[3rem] bg-slate-950 border border-white/5 space-y-4 hover:border-primary/40 transition-all">
              <h4 className="text-lg font-black text-white uppercase tracking-tight">Still Type 2</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Taking insulin doesn’t mean you have Type 1. You still have Type 2 Diabetes; your treatment has simply evolved to meet your body's changing metabolic needs.
              </p>
           </div>
           <div className="p-10 rounded-[3rem] bg-slate-950 border border-white/5 space-y-4 hover:border-primary/40 transition-all">
              <h4 className="text-lg font-black text-white uppercase tracking-tight">The Burnout Cycle</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Insulin resistance forces the pancreas to overproduce. Over time, the pancreas can become "worn out" and produce less insulin, necessitating exogenous support.
              </p>
              <div className="flex gap-4 pt-4">
                 <div className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <p className="text-[10px] text-primary font-black uppercase mb-1">Resistance</p>
                    <Flame className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                    <p className="text-[8px] text-slate-500 font-bold uppercase">Over-production</p>
                 </div>
                 <div className="w-8 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-slate-700" />
                 </div>
                 <div className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <p className="text-[10px] text-rose-400 font-black uppercase mb-1">Exhaustion</p>
                    <BatteryLow className="w-5 h-5 text-rose-500 mx-auto mb-1" />
                    <p className="text-[8px] text-slate-500 font-bold uppercase">Production Drops</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Clinical Timeline: When & Why */}
      <div className="space-y-12">
        <div className="text-center space-y-4">
           <h3 className="text-3xl font-black text-white tracking-tight">When is Insulin Indicated?</h3>
           <p className="text-slate-500 text-sm max-w-xl mx-auto font-medium">Insulin therapy can be used as a short-term bridge or a long-term cornerstone of care.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { t: "Initial Diagnosis", d: "Used short-term to quickly bring down dangerously high blood sugar levels.", icon: Target, context: "Rapid Stabilization" },
             { t: "Medication Shield", d: "When other medications are no longer appropriate or fail to reach targets.", icon: Zap, context: "Treatment Failure" },
             { t: "Specific Life Events", d: "Temporary bridging during Pregnancy, severe Illness, or major Surgery.", icon: Clock, context: "Metabolic Stress" }
           ].map((p, i) => (
             <div key={i} className="p-10 rounded-[3rem] bg-slate-950 border border-white/5 space-y-6 group hover:bg-slate-900/50 transition-all text-center md:text-left">
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 w-fit mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                   <p.icon className="text-primary w-6 h-6" />
                </div>
                <div className="space-y-4">
                   <h4 className="text-xl font-bold text-white uppercase tracking-tight">{p.t}</h4>
                   <p className="text-xs text-slate-500 font-medium leading-relaxed">{p.d}</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                   <p className="text-[10px] text-primary font-black uppercase tracking-widest">{p.context}</p>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Holistic Anchor */}
      <div className="p-16 rounded-[4rem] bg-gradient-to-br from-slate-900 to-primary/5 border border-white/5 relative overflow-hidden">
         <div className="absolute top-0 right-0 -m-20 w-80 h-80 bg-primary/5 blur-[120px] rounded-full -z-10" />
         <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
            <div className="space-y-8">
               <h3 className="text-3xl lg:text-5xl font-black text-white leading-tight">Beyond the <br /> Prescription.</h3>
               <p className="text-slate-400 text-lg font-medium max-w-xl leading-relaxed">
                  Taking insulin is a powerful tool, but it doesn't replace the need for healthy lifestyle choices. Staying active and eating a balanced diet remains paramount.
               </p>
               <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                     <Activity className="text-primary w-5 h-5" />
                     <span className="text-[10px] font-black uppercase text-white">Daily Physical Activity</span>
                  </div>
                  <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                     <Briefcase className="text-secondary w-5 h-5" />
                     <span className="text-[10px] font-black uppercase text-white">Clinical Stewardship</span>
                  </div>
               </div>
            </div>
            <div className="grid grid-cols-1 gap-4 w-full md:w-auto">
               {[
                 { t: "Minimize Complications", d: "Effective management safeguards organ health.", icon: ShieldCheck },
                 { t: "Maintain Stability", d: "Routine checks keep sugars within target ranges.", icon: TrendingUp },
                 { t: "Specialist Support", d: "Regular access to your clinical care team.", icon: Stethoscope }
               ].map((benefit, i) => (
                 <div key={i} className="flex gap-4 p-6 rounded-[2rem] bg-slate-950 border border-white/5 w-80">
                    <benefit.icon className="text-primary w-6 h-6 mt-1" />
                    <div>
                       <p className="text-xs font-black text-white uppercase tracking-tight">{benefit.t}</p>
                       <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{benefit.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>

    </section>
  )
}
