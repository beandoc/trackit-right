"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { 
  Zap, 
  Activity, 
  Settings, 
  Smartphone, 
  Syringe, 
  Baby, 
  AlertCircle,
  TrendingUp,
  Target,
  Clock,
  ChevronRight,
  ShieldAlert,
  Droplets,
  Users,
  Smile,
  CheckCircle2,
  Heart,
  Stethoscope,
  Footprints,
  MapPin,
  Trash2
} from "lucide-react"

const clinicalHoneymoon = {
  title: "The Honeymoon Phase",
  desc: "A temporary period of partial remission where remaining beta cells recover, reducing exogenous insulin needs to <0.5 units/kg/day.",
  warning: "Hypoglycemia risk is high; rapid dose reduction is mandatory."
}

const aidBenefits = [
  { label: "A1C Reduction", value: "-0.41%", desc: "In pediatric trials (2025 Meta-analysis)." },
  { label: "Time in Range", value: "+11.5%", desc: "Overall improvement in glycemic stability." },
  { label: "Overnight TIR", value: "+19.7%", desc: "Significant reduction in nocturnal variability." }
]

export function PediatricInsulinTherapy() {
  const { theme } = useTheme()

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* Header: Technological Standard */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
        <div className="flex-1 space-y-6 lg:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest">
            <Zap className="w-4 h-4" />
            Specialist Module: Pediatric Insulin Physiology
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-foreground leading-[1.05] tracking-tighter">
            Automated <br /> 
            <span className="text-primary text-glow">Delivery</span> <br /> 
            Standard.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg sm:text-xl leading-relaxed max-w-xl font-medium">
            2025 clinical consensus identifies **Automated Insulin Delivery (AID)** as the standard of care for pediatric T1DM, significantly improving nocturnal stability and A1C metrics.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
             <div className="px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-xl border border-border flex items-center gap-2 shadow-sm">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-black uppercase text-foreground">Target A1C &lt; 7.0%</span>
             </div>
             <div className="px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-xl border border-border flex items-center gap-2 shadow-sm">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="text-[10px] font-black uppercase text-foreground">Time in Range &gt; 70%</span>
             </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-4">
           {aidBenefits.map((stat, i) => (
             <div key={i} className="p-8 rounded-[2rem] bg-card border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all group relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mb-1">{stat.label}</p>
                  <h4 className="text-4xl font-black text-foreground group-hover:text-primary transition-colors">{stat.value}</h4>
                  <p className="text-[11px] text-muted-foreground mt-2 font-medium leading-relaxed">{stat.desc}</p>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl rounded-full translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 transition-opacity" />
             </div>
           ))}
        </div>
      </div>

      {/* Dosing Architecture: MDI vs AID */}
      <div className="p-12 glass-card rounded-[3rem] border-border bg-gradient-to-br from-background to-primary/5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
             <div className="space-y-4">
               <h3 className="text-3xl font-bold text-foreground flex items-center gap-3">
                 <Settings className="text-primary w-8 h-8" />
                 Initial Dosing Framework
               </h3>
               <p className="text-sm text-slate-500 font-medium">Weight-based estimation for newly diagnosed pediatric patients.</p>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { range: "0.3 - 0.7 u/kg", label: "Prepubertal", context: "Classic new onset" },
                  { range: "0.7 - 1.5 u/kg", label: "Pubertal", context: "Hormonal resistance" },
                  { range: "< 0.5 u/kg", label: "Honeymoon", context: "Partial remission" },
                  { range: "1:10 - 1:50", label: "ICR", context: "Carb Coverage Ratio" }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-border flex flex-col gap-2">
                     <span className="text-2xl font-black text-primary">{item.range}</span>
                     <span className="text-[10px] font-black uppercase tracking-widest text-foreground">{item.label}</span>
                     <span className="text-[9px] text-slate-500 uppercase font-bold">{item.context}</span>
                  </div>
                ))}
             </div>
          </div>

          <div className="space-y-8 p-10 bg-card rounded-[2.5rem] border border-border relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Activity className="w-32 h-32 text-primary" />
             </div>
             
             <h4 className="text-xl font-bold text-foreground">The 50/50 Rule (MDI)</h4>
             <div className="space-y-6">
                <div className="flex gap-4">
                   <div className="w-1.5 h-auto bg-primary rounded-full" />
                   <div>
                      <p className="text-xs font-black uppercase text-foreground transition-colors group-hover:text-primary">50% Basal</p>
                      <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1">
                        Long-acting analogs (Glargine/Degludec) to suppress hepatic glucose production.
                      </p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-1.5 h-auto bg-secondary rounded-full" />
                   <div>
                      <p className="text-xs font-black uppercase text-foreground transition-colors group-hover:text-secondary">50% Bolus</p>
                      <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1">
                        Rapid-acting analogs (Aspart/Lispro) for carbohydrate coverage & correction.
                      </p>
                   </div>
                </div>
             </div>
             <div className="pt-6 border-t border-border">
                <p className="text-[9px] text-slate-500 font-bold uppercase italic tracking-tighter">
                   *Correction Factor (ISF) calculation: 1800 / Total Daily Dose
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* AID Technology: AI Stewardship */}
      <div className="grid lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 p-12 glass-card border-primary/20 bg-primary/5 rounded-[3rem] space-y-8 relative overflow-hidden">
            <div className="relative z-10 flex flex-col h-full justify-between gap-12">
               <div className="space-y-6">
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-primary rounded-2xl">
                        <Smartphone className="text-white w-6 h-6" />
                     </div>
                     <h3 className="text-3xl font-black text-foreground">HCL: Hybrid Closed Loop</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl font-medium">
                     The current 2025 standard utilizes an algorithm to automate basal delivery based on real-time CGM data. This "Intelligent Stewardship" reduces the burden of manual adjustments, especially during sleep.
                  </p>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                     { t: "Basal", d: "Auto-adjusted", icon: Activity },
                     { t: "Meals", d: "User-initiated bolus", icon: Target },
                     { t: "Correction", d: "Auto-microbolus", icon: Settings }
                  ].map((feat, i) => (
                     <div key={i} className="space-y-2">
                        <feat.icon className="w-5 h-5 text-primary" />
                        <p className="text-[10px] font-black uppercase text-foreground">{feat.t}</p>
                        <p className="text-[11px] text-slate-500 font-medium">{feat.d}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="p-12 glass-card bg-amber-500/5 border-amber-500/10 rounded-[3rem] space-y-6 flex flex-col items-center text-center justify-center">
            <ShieldAlert className="text-amber-500 w-12 h-12" />
            <h4 className="text-xl font-bold text-foreground">Pump Failure (DKA Risk)</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
               Pumps lack long-acting insulin depots. **Infusion set failure** can lead to DKA within hours. Ketone testing is mandatory for persistent unexplained hyperglycemia.
            </p>
            <div className="h-[1px] bg-border w-full" />
            <button className="flex items-center gap-2 text-[10px] font-black text-amber-600 dark:text-amber-500 uppercase tracking-widest group">
               VIEW EMERGENCY PROTOCOL <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
         </div>
      </div>

      {/* Special Situations: The Vulnerable Honeymoon */}
      <div className="grid lg:grid-cols-2 gap-12">
         <div className="p-10 rounded-[3rem] border border-border bg-card space-y-6">
            <div className="flex items-center gap-3">
               <Baby className="w-6 h-6 text-primary" />
               <h4 className="text-xl font-bold text-foreground">Infants & Toddlers (&lt; 0.5u)</h4>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
               Precision is critical. **Dilute Insulin (U-10/U-20)** may be required for doses under 0.5 units to prevent catastrophic hypoglycemia in metabolically volatile toddlers.
            </p>
         </div>

         <div className="p-10 rounded-[3rem] border border-border bg-card space-y-6">
            <div className="flex items-center gap-3">
               <TrendingUp className="text-secondary w-6 h-6" />
               <h4 className="text-xl font-bold text-foreground">{clinicalHoneymoon.title}</h4>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
               {clinicalHoneymoon.desc} <br />
               <span className="text-primary font-black mt-2 block uppercase text-[10px]">{clinicalHoneymoon.warning}</span>
            </p>
         </div>
      </div>

      {/* Junior Mastery & Family Support */}
      <div className="space-y-16 pt-16 border-t border-border">
         <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-black text-foreground tracking-tighter">Junior Mastery & <span className="text-primary text-glow">Family Support.</span></h2>
            <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">Transitioning to self-injection is a milestone, not a mandate. Support your child's readiness at their own pace.</p>
         </div>

         <div className="grid lg:grid-cols-2 gap-12">
            {/* Readiness & Psychology */}
            <div className="p-12 rounded-[3.5rem] bg-indigo-500/5 border border-indigo-500/10 space-y-10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Smile className="w-48 h-48 text-indigo-500" />
               </div>
               <div className="space-y-6 relative z-10">
                  <h3 className="text-2xl font-black text-foreground uppercase tracking-tight">Psychological Readiness</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">There is no "right age" to start. Some children start immediately; others take years. The transition must be child-led and supported.</p>
                  
                  <div className="space-y-4">
                     {[
                       "Don't pressure your child—wait for their signal.",
                       "Let them take control if they express interest.",
                       "Offer to do it yourself if they feel tired or overwhelmed.",
                       "Keep an eye on their technique to prevent bad habits."
                     ].map((tip, i) => (
                       <div key={i} className="flex gap-4 items-start p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-border/50">
                          <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-1 shrink-0" />
                          <span className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-tight">{tip}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* The 6-Step Junior Guide */}
            <div className="p-12 rounded-[3.5rem] bg-card border border-border space-y-10">
               <h3 className="text-2xl font-black text-foreground uppercase tracking-tight">Step-by-Step (For Kids)</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { t: "Hygiene", d: "Wash and dry your hands.", icon: Activity },
                    { t: "Site Choice", d: "Choose stomtach, thighs, or bum.", icon: MapPin },
                    { t: "Prime Pen", d: "Dial 2 units, press till drop appears.", icon: Droplets },
                    { t: "Inject (90°)", d: "Dial dose, insert and press to zero.", icon: Syringe },
                    { t: "Count to 10", d: "Slowly, to give insulin time.", icon: Clock },
                    { t: "Safety Bin", d: "Discard needle in sharps bin.", icon: Trash2 }
                  ].map((s, i) => (
                    <div key={i} className="flex gap-4 items-start p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-border">
                       <div className="p-3 bg-primary/10 rounded-xl"><s.icon className="w-4 h-4 text-primary" /></div>
                       <div>
                          <p className="text-[10px] font-black uppercase text-foreground mb-1">{s.t}</p>
                          <p className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter leading-tight">{s.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Critical Clinical Warning: Activity & Site Selection */}
         <div className="p-12 rounded-[4rem] bg-rose-500/5 border border-rose-500/10 flex flex-col lg:flex-row items-center gap-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
               <Activity className="w-64 h-64 text-rose-500" />
            </div>
            <div className="p-8 bg-rose-500/10 rounded-[2.5rem] border border-rose-500/20 shadow-inner">
               <Users className="text-rose-500 w-12 h-12" />
            </div>
            <div className="space-y-4 flex-1 relative z-10">
               <h3 className="text-3xl font-black text-foreground leading-tight tracking-tight uppercase">The Activity Site Rule</h3>
               <p className="text-slate-500 text-sm leading-relaxed font-medium">
                 <span className="text-rose-500 font-black">NEVER</span> inject into a limb that will be used for intense activity immediately. For example, don't inject into a leg just before a football match.
               </p>
               <div className="flex gap-4 items-center pt-2">
                  <div className="p-2 bg-rose-500/10 rounded-lg"><AlertCircle className="w-4 h-4 text-rose-500" /></div>
                  <p className="text-[10px] font-black text-rose-600 dark:text-rose-400 uppercase tracking-widest">WHY? Exercise increases blood flow, speeding up absorption and triggering severe hypos.</p>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}
