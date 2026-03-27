"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  CheckCircle2, 
  RotateCcw, 
  MapPin, 
  ShieldAlert, 
  CloudRain, 
  Info,
  ChevronRight,
  Hand,
  Droplets,
  Zap,
  Clock,
  Trash2,
  Syringe,
  Map,
  Users,
  Target,
  Heart,
  Smile,
  AlertTriangle,
  Thermometer,
  Moon,
  Stethoscope
} from "lucide-react"

const injectionSteps = [
  { step: 1, title: "Hygiene", desc: "Wash and dry your hands thoroughly.", icon: Hand },
  { step: 2, title: "Site Selection", desc: "Choose your injection site (Stomach, Thighs, or Bum).", icon: MapPin },
  { step: 3, title: "Mist & Roll", desc: "For cloudy insulin, roll pen between palms 10x and gently move up/down until white/cloudy. Then attach needle.", icon: CloudRain },
  { step: 4, title: "Priming", desc: "Dial 2 units, face up, and press until a drop appears. This removes air for accuracy.", icon: Droplets },
  { step: 5, title: "Dose & Insertion", desc: "Dial dose. Insert at 90° (No pinch if <6mm). Press until dial hits zero.", icon: Target },
  { step: 6, title: "The 10-Second Rule", desc: "Hold needle in skin for 10 slow seconds before removing to ensure full absorption.", icon: Clock },
  { step: 7, title: "Safety Disposal", desc: "Remove needle and discard in Sharps Container immediately.", icon: Trash2 }
]

export function InsulinInjectionGuide() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Zap className="w-4 h-4" /> Practical Skill: Pen Technique
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
            Injection <span className="text-primary tracking-tight">Mastery.</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed">
            Precise injection technique ensures consistent insulin absorption and prevents long-term skin complications like lipohypertrophy.
          </p>
        </div>

        <div className="flex-1 p-12 glass-card rounded-[3.5rem] border-primary/20 bg-primary/5 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <RotateCcw className="w-40 h-40 text-primary" />
           </div>
           <h4 className="text-xl font-bold text-white mb-4">The Rotation Rule</h4>
           <p className="text-sm text-slate-500 font-medium leading-relaxed">
             Vital rotation requires choosing a different spot every time, at least **1cm (0.5 inch)** from your last site. Failure to rotate causes hard lumps that block absorption.
           </p>
        </div>
      </div>

      {/* Step-by-Step Interactive */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
         <div className="space-y-6">
            {injectionSteps.map((s, i) => (
              <button
                key={i}
                onClick={() => setCurrentStep(i)}
                className={`w-full flex items-center gap-6 p-6 rounded-3xl border transition-all text-left ${currentStep === i ? 'bg-primary border-primary shadow-xl shadow-primary/20 scale-[1.02]' : 'bg-slate-950 border-white/5 hover:border-white/10'}`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${currentStep === i ? 'bg-white/20' : 'bg-white/5'}`}>
                   <s.icon className={`w-6 h-6 ${currentStep === i ? 'text-white' : 'text-slate-500'}`} />
                </div>
                <div className="flex-1">
                   <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${currentStep === i ? 'text-white/70' : 'text-primary'}`}>Step 0{s.step}</p>
                   <h4 className={`text-lg font-black ${currentStep === i ? 'text-white' : 'text-slate-200'}`}>{s.title}</h4>
                </div>
                {currentStep === i && <CheckCircle2 className="w-6 h-6 text-white animate-in zoom-in" />}
              </button>
            ))}
         </div>

         <div className="sticky top-24">
            <AnimatePresence mode="wait">
               <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="p-16 rounded-[4rem] bg-slate-950 border border-white/10 space-y-10 relative overflow-hidden"
               >
                  <div className="absolute top-0 right-0 p-12 opacity-[0.02] -z-10 rotate-12">
                     <Syringe className="w-96 h-96 text-white" />
                  </div>
                  <div className="space-y-6">
                     <div className="p-6 rounded-[2rem] bg-primary/10 border border-primary/20 w-fit">
                        {(() => {
                          const Icon = injectionSteps[currentStep].icon;
                          return <Icon className="w-12 h-12 text-primary" />;
                        })()}
                     </div>
                     <h3 className="text-4xl font-black text-white">{injectionSteps[currentStep].title}</h3>
                     <p className="text-xl text-slate-400 font-medium leading-relaxed">
                        {injectionSteps[currentStep].desc}
                     </p>
                  </div>

                  {currentStep === 2 && (
                    <div className="p-8 rounded-3xl bg-amber-500/5 border border-amber-500/10 space-y-4">
                       <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest flex items-center gap-2">
                          <Droplets className="w-4 h-4" /> Priming Logic
                       </h4>
                       <p className="text-xs text-slate-500 leading-relaxed font-medium">
                          Priming regulates your dose by removing air from the needle and cartridge. Repeat if no drop appears.
                       </p>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-4">
                       <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest flex items-center gap-2">
                          <Target className="w-4 h-4" /> The No-Pinch Era
                       </h4>
                       <p className="text-xs text-slate-500 leading-relaxed font-medium">
                          If your needle is **6mm or shorter**, DO NOT pinch your skin. Modern short needles absorb more effectively when the skin is flat.
                       </p>
                    </div>
                  )}

                  {currentStep === 5 && (
                    <div className="p-8 rounded-3xl bg-rose-500/5 border border-rose-500/10 space-y-4">
                       <h4 className="text-[10px] font-black text-rose-500 uppercase tracking-widest flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" /> Drop Alert
                       </h4>
                       <p className="text-xs text-slate-500 leading-relaxed font-medium">
                          If you see insulin drops after removing the pen, **DO NOT** give another injection. Simply count slower or longer (12-15s) next time.
                       </p>
                    </div>
                  )}
               </motion.div>
            </AnimatePresence>
         </div>
      </div>

      {/* Sites & Safety Grid */}
      <div className="grid lg:grid-cols-2 gap-12">
         {/* Injection Sites */}
         <div className="p-16 rounded-[4rem] bg-slate-950 border border-white/5 space-y-10 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
               <Map className="w-64 h-64 text-white" />
            </div>
            <h3 className="text-3xl font-black text-white tracking-tight">Anatomic Sites</h3>
            <p className="text-slate-500 text-sm font-medium">Focus on areas with sufficient fatty tissue for subcutaneous absorption.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 { t: "Stomach", d: "Semi-circle under belly button.", icon: Target },
                 { t: "Outer Thighs", d: "Ideal for slower absorption.", icon: MapPin },
                 { t: "Glutes (Bum)", d: "Consistent fatty tissue depots.", icon: Info },
                 { t: "Vital Rotation", d: "At least 1cm from last site.", icon: RotateCcw }
               ].map((site, i) => (
                 <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/20 transition-all">
                    <site.icon className="text-primary w-5 h-5 shrink-0" />
                    <div>
                       <p className="text-[10px] font-black text-white uppercase tracking-tight">{site.t}</p>
                       <p className="text-[9px] text-slate-500 font-bold">{site.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Complications Prevention */}
         <div className="p-16 rounded-[4rem] bg-rose-500/5 border border-rose-500/10 space-y-10">
            <div className="flex items-center gap-4 text-rose-500">
               <ShieldAlert className="w-8 h-8" />
               <h3 className="text-3xl font-black text-white tracking-tight">Complication Guard</h3>
            </div>
            <div className="space-y-6">
               <div className="p-8 rounded-3xl bg-slate-950 border border-white/5 space-y-4">
                  <h4 className="text-lg font-black text-white">Lipohypertrophy</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Hard lumps formed by injecting in the same spot or re-using needles. These lumps block insulin absorption effectively.
                  </p>
                  <div className="flex gap-4">
                     <div className="px-4 py-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-[9px] font-black text-rose-500 uppercase tracking-widest">Never Re-use Needles</div>
                     <div className="px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[9px] font-black text-orange-500 uppercase tracking-widest">Rotate Every Site</div>
                  </div>
               </div>
               <div className="flex gap-4 items-center p-6 rounded-2xl bg-white/5">
                  <AlertTriangle className="text-orange-400 w-5 h-5 shrink-0" />
                  <p className="text-[10px] text-slate-400 font-medium leading-relaxed italic">
                    "Bruising is normal (hitting a tiny blood vessel). If concerned, speak to your specialist nurse about needle size."
                  </p>
               </div>
            </div>
         </div>
      </div>

      {/* Anxiety Shield Section */}
      <div className="p-16 rounded-[4rem] bg-emerald-500/5 border border-emerald-500/10 space-y-12 relative overflow-hidden">
         <div className="absolute top-0 right-0 -m-12 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />
         <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h3 className="text-3xl lg:text-5xl font-black text-white tracking-tighter">Injection Support Shield</h3>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
               Anxiety about needles is natural. Here are peer-tested strategies to simplify your first transitions.
            </p>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Quiet Spaces", d: "Find a private spot at work or public to build confidence.", icon: Moon },
              { t: "Temp Tactics", d: "Cold insulin is uncomfortable. Inject at room temperature.", icon: Thermometer },
              { t: "Pain Comparison", d: "Many find injecting less painful than finger-prick testing.", icon: Smile },
              { t: "Peer Support", d: "Join online forums or helpline to talk about worries.", icon: Users },
              { t: "Open Dialogue", d: "Write a list of silly questions. No concern is too small.", icon: Heart },
              { t: "Specialist Review", d: "Ask your nurse to check your technique at every review.", icon: Stethoscope }
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-4 p-8 rounded-3xl bg-slate-950 border border-white/5 hover:border-emerald-500/20 transition-all group">
                 <div className="p-3 rounded-xl bg-emerald-500/10 group-hover:scale-110 transition-transform">
                    <s.icon className="text-emerald-400 w-5 h-5" />
                 </div>
                 <div className="space-y-1">
                    <p className="text-sm font-black text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{s.t}</p>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{s.d}</p>
                 </div>
              </div>
            ))}
         </div>
      </div>

      <div className="text-center pt-8 border-t border-white/5">
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] italic">
          Clinical Guidance: Subcutaneous Pen Injection Mastery
        </p>
      </div>

    </section>
  )
}
