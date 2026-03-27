"use client"

import { motion } from "framer-motion"
import { 
  Calendar, 
  Eye, 
  Footprints, 
  FlaskConical, 
  Activity, 
  Stethoscope, 
  ShieldCheck, 
  Search, 
  ArrowRight, 
  Zap, 
  Heart, 
  ChevronRight,
  TrendingUp,
  Smile,
  Ban
} from "lucide-react"

export function HealthMaintenanceHub() {
  const annualLabs = [
    { title: "A1C Glycemic Level", freq: "Every 3-6 Months", desc: "The average blood sugar for the past 2-3 months.", icon: Activity, color: "text-primary" },
    { title: "Dilated Eye Exam", freq: "Yearly", desc: "Detect retinopathy before vision is impaired.", icon: Eye, color: "text-amber-500" },
    { title: "Lipid Panel (Fats)", freq: "Yearly", desc: "Monitor LDL/HDL/Triglycerides for heart defense.", icon: Heart, color: "text-rose-500" },
    { title: "Kidney (Microalbumin)", freq: "Yearly", desc: "Urine test to detect early signs of kidney disease.", icon: FlaskConical, color: "text-blue-500" },
    { title: "Clinical Foot Exam", freq: "Yearly", desc: "Professional check for nerve damage and circulation.", icon: Footprints, color: "text-emerald-500" },
    { title: "Dental Health", freq: "Every 6 Months", desc: "Gum disease impacts glycemic control.", icon: Smile, color: "text-indigo-400" }
  ]

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* Narrative Header: The Consistency Rule */}
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Calendar className="w-4 h-4" /> CLINICAL ADHERENCE
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
            Staying on <br />
            <span className="text-primary tracking-tight text-glow">Track.</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-2xl">
            Consistency in monitoring and lab frequency is the foundation of early intervention. Don't wait for symptoms; follow the clinical roadmap for annual screening.
          </p>
        </div>

        <div className="p-10 rounded-[3rem] bg-rose-500/5 border border-rose-500/10 flex items-center gap-8 relative overflow-hidden group">
           <Ban className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity w-48 h-48 text-rose-500" />
           <div className="p-4 bg-rose-500/10 rounded-2xl border border-rose-500/20 shadow-inner">
              <Zap className="text-rose-500 w-8 h-8" />
           </div>
           <div className="space-y-2 relative z-10">
              <h4 className="text-xl font-bold text-white uppercase italic">Smoking Cessation</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium max-w-xs">
                "The **single most vital action** you can take to prevent heart and kidney failure is to quit smoking."
              </p>
           </div>
        </div>
      </div>

      {/* Lab Frequency Matrix */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         {annualLabs.map((lab, i) => (
           <div key={i} className="p-10 rounded-[3.5rem] bg-slate-950 border border-white/5 space-y-6 flex flex-col group hover:border-white/10 hover:shadow-2xl hover:shadow-primary/5 transition-all">
              <div className="flex justify-between items-start">
                 <div className={`p-4 rounded-2xl bg-white/5 ${lab.color} group-hover:scale-110 transition-transform`}>
                    <lab.icon className="w-6 h-6" />
                 </div>
                 <span className="px-3 py-1 bg-white/5 text-[9px] font-black uppercase text-slate-500 rounded-lg">{lab.freq}</span>
              </div>
              <div className="space-y-2 flex-1 pt-4">
                 <h4 className="text-xl font-black text-white uppercase tracking-tight">{lab.title}</h4>
                 <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{lab.desc}</p>
              </div>
              <button className="pt-6 border-t border-white/5 text-[10px] font-black text-slate-600 uppercase tracking-widest flex items-center gap-2 group-hover:text-primary transition-colors">
                VIEW DETAILS <ChevronRight className="w-4 h-4" />
              </button>
           </div>
         ))}
      </div>

      {/* Daily Self-Check Visual */}
      <div className="p-12 rounded-[4rem] bg-indigo-500/5 border border-indigo-500/10 space-y-12">
         <div className="text-center space-y-4">
            <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-tight">Home Stewardship Matrix</h3>
            <p className="text-sm text-slate-500">What you do between visits matters most.</p>
         </div>

         <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[3.5rem] bg-slate-950 border border-white/5 flex gap-8 items-center">
               <div className="p-5 bg-emerald-500/10 rounded-2xl shadow-inner"><Footprints className="text-emerald-500 w-8 h-8" /></div>
               <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white uppercase">Daily Foot Watch</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Check for sores, cuts, or redness. Use a mirror if needed. Never walk barefoot.
                  </p>
               </div>
            </div>

            <div className="p-10 rounded-[3.5rem] bg-slate-950 border border-white/5 flex gap-8 items-center">
               <div className="p-5 bg-primary/10 rounded-2xl shadow-inner"><TrendingUp className="text-primary w-8 h-8" /></div>
               <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white uppercase">Glucose Logbook</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Record readings in a logbook or app. Bring your log and meter to every visit.
                  </p>
               </div>
            </div>
         </div>
      </div>

      {/* A1C to Estimated Mean Glucose Logic */}
      <div className="p-12 rounded-[4rem] bg-slate-950 border border-white/5 flex flex-col lg:flex-row items-center gap-10">
         <div className="space-y-4 flex-1">
            <h3 className="text-3xl font-black text-white uppercase tracking-tight">Estimated Mean Glucose</h3>
            <p className="text-slate-400 text-sm font-medium leading-relaxed italic">
              "Your A1C tells a story. 7.0% corresponds to an average blood sugar of **154 mg/dL**. Each 1% change tracks to roughly 28-30 mg/dL difference in your daily mean."
            </p>
         </div>
         <div className="grid grid-cols-2 gap-4 shrink-0">
            <div className="p-6 bg-primary/10 rounded-3xl border border-primary/20 text-center">
               <span className="block text-3xl font-black text-white leading-none">7.0 %</span>
               <span className="text-[9px] font-black uppercase text-primary tracking-widest">A1C Level</span>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-center">
               <span className="block text-3xl font-black text-white leading-none">154</span>
               <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Mean Glucose</span>
            </div>
         </div>
      </div>

      <div className="text-center pt-8 border-t border-white/5 flex flex-col items-center gap-6">
         <div className="flex gap-4 items-center p-4 bg-slate-950 rounded-2xl border border-white/5">
            <ShieldCheck className="text-slate-500 w-4 h-4" />
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
              Standard: ADA 2024 Lab & Screening Frequency Standards
            </p>
         </div>
      </div>
    </section>
  )
}
