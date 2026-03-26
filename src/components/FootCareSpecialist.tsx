"use client"

import { motion } from "framer-motion"
import { 
  ShieldCheck, 
  Thermometer, 
  Activity, 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  Droplets, 
  Footprints,
  Wind,
  Stethoscope,
  ChevronRight
} from "lucide-react"

const footCareTips = [
  { title: "Daily Inspection", desc: "Check for cuts, red spots, or any abnormalities. Use a mirror for the soles.", icon: Search },
  { title: "Bathing Protocol", desc: "Wash with warm water and dry thoroughly, especially between the toes.", icon: Droplets },
  { title: "Nailed Precision", desc: "Trim straight across. Never attempt to remove corns or calluses yourself.", icon: Activity },
  { title: "Moisture Balance", desc: "Apply moisturizer sparingly to dry areas, but NEVER between the toes.", icon: Wind },
]

export function FootCareSpecialist() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24 border-t border-white/5">
      
      {/* Header section with risk context */}
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-[10px] font-bold uppercase tracking-widest">
            <Footprints className="w-4 h-4" />
            Specialist Module: Foot Vigilance
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tighter">
            Steering Clear of <br /> <span className="text-emerald-500 text-glow">Amputation.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            Foot complications arise when poor circulation (PVD) meets nerve damage (Neuropathy). With daily vigilance and clinical standards, most severe outcomes are 100% preventable.
          </p>
        </div>

        <div className="flex-1 space-y-6">
           <div className="p-8 rounded-3xl bg-amber-500/10 border border-amber-500/20 space-y-4 group overflow-hidden relative">
              <div className="absolute -right-4 -top-4 opacity-10 group-hover:rotate-12 transition-transform">
                <Thermometer className="w-24 h-24 text-amber-500" />
              </div>
              <h4 className="font-bold text-white text-lg">The Cold Foot Indicator</h4>
              <p className="text-slate-400 text-sm leading-relaxed italic">
                Notice pain in your legs during exercise that stops quickly with rest? This is known as <span className="text-amber-500 font-bold">Intermittent Claudication</span>—a certain clue of poor circulation.
              </p>
           </div>
           
           <div className="p-8 rounded-3xl bg-blue-500/5 border border-white/5 flex items-center gap-8 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-blue-500/30 transition-all">
                <Activity className="text-blue-500 w-6 h-6" />
              </div>
              <div>
                 <h5 className="font-bold text-white text-sm">Vessel Regeneration</h5>
                 <p className="text-xs text-slate-500">Regular exercise is the best treatment for circulation. It helps <span className="text-white font-medium">new blood vessels grow</span> over time.</p>
              </div>
           </div>
        </div>
      </div>

      {/* 4-Column Protocol Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {footCareTips.map((tip, i) => (
           <motion.div 
             key={i}
             whileHover={{ y: -8 }}
             className="p-8 rounded-[32px] bg-slate-950 border border-white/5 hover:border-emerald-500/20 transition-all space-y-6"
           >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                 <tip.icon className="w-6 h-6 text-emerald-500" />
              </div>
              <h4 className="font-bold text-white tracking-tight underline decoration-white/5">{tip.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">{tip.desc}</p>
           </motion.div>
        ))}
      </div>

      {/* Critical Safety Banner */}
      <div className="p-12 glass-card bg-gradient-to-br from-emerald-500/10 to-teal-900/10 rounded-[40px] border-emerald-500/10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
             <h3 className="text-4xl font-black text-white">Never Go Barefoot.</h3>
             <p className="text-slate-400 leading-relaxed">Always wear shoes and socks that fit properly. Shoes that are too tight cause blisters; shoes that are too loose cause ulcers from friction. Check for anything in your shoes before putting them on.</p>
             
             <div className="space-y-4">
                {[
                  "Step on a tack? Seek immediate care.",
                  "New sore or Irritated spot?",
                  "Break in the skin that isn't healing?"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-xs font-bold text-slate-300">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    {item}
                  </div>
                ))}
             </div>
          </div>

          <div className="p-8 rounded-[36px] bg-slate-900/80 border border-white/10 space-y-8 relative group">
             <div className="absolute top-4 right-4 text-emerald-500 hover:rotate-45 transition-transform cursor-pointer">
                <Stethoscope className="w-6 h-6" />
             </div>
             <h4 className="text-xl font-bold text-white tracking-widest uppercase text-sm">Clinical Intervention</h4>
             <div className="space-y-4">
                <p className="text-xs text-slate-500 font-medium leading-relaxed italic border-l-2 border-emerald-500 pl-4">
                  "Only in severe cases of gangrene or uncontrolled infection is amputation necessary. Early clinical intervention can prevent this with modern wound methods."
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                   {["Podiatry referral", "Wound Scraping", "Scraping", "Surgery"].map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-white/5 text-[9px] font-black uppercase tracking-widest text-slate-500">
                        {tag}
                      </span>
                   ))}
                </div>
                <button className="w-full mt-6 py-4 bg-emerald-600 rounded-xl font-bold text-white text-xs hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 group">
                  REQUEST FOOT EXAM PROTOCOL <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
