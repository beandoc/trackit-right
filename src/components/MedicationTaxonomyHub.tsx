"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Zap, 
  FlaskConical, 
  Activity, 
  ShieldAlert, 
  Clock, 
  Settings, 
  Droplets, 
  Info, 
  Target, 
  ArrowRight, 
  Heart,
  Dna,
  Stethoscope,
  Scaling,
  AlertTriangle,
  ChevronRight,
  FlaskRound
} from "lucide-react"

const insulinTypes = [
  { id: 'rapid', title: 'Rapid Acting', duration: '4-5 Hours', effect: 'Meal-time Control', examples: 'Novolog, Fiasp, Humalog', color: 'bg-primary' },
  { id: 'short', title: 'Short Acting', duration: '7-8 Hours', effect: 'Meal-time Control', examples: 'Regular Insulin (R)', color: 'bg-emerald-500' },
  { id: 'intermediate', title: 'Intermediate', duration: '12-16 Hours', effect: '12-hour Coverage', examples: 'NPH (Humulin N)', color: 'bg-blue-500' },
  { id: 'long', title: 'Long Acting', duration: '24+ Hours', effect: 'Background (Basal)', examples: 'Lantus, Tresiba, Toujeo', color: 'bg-indigo-500' }
]

export function MedicationTaxonomyHub() {
  const [activeTab, setActiveTab] = useState<'organs' | 'insulin-profiles' | 'interference' | 'protective-toolbox'>('organs')
  
  const tabLabels: Record<string, string> = {
    'organs': 'Target Organs',
    'insulin-profiles': 'Insulin Timing',
    'interference': 'Side Effects',
    'protective-toolbox': 'Preventive Meds'
  }

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* Narrative Header */}
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
            <FlaskRound className="w-4 h-4" /> CLINICAL MEDICINE GUIDE
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
            The Treatment <br />
            <span className="text-primary tracking-tight text-glow">Roadmap.</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-2xl">
            Diabetes management utilizes a "toolbox" of medications targeting different organ systems. From insulin secretion to liver glucose output, precision is key.
          </p>
        </div>

        <div className="flex flex-col gap-3 shrink-0">
           {['organs', 'insulin-profiles', 'interference', 'protective-toolbox'].map((t) => (
             <button 
               key={t}
               onClick={() => setActiveTab(t as any)}
               className={`px-10 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${activeTab === t ? 'bg-primary border-primary text-white shadow-xl shadow-primary/20' : 'bg-slate-950 border-white/5 text-slate-500 hover:text-white hover:border-white/10'}`}
             >
               {tabLabels[t]}
             </button>
           ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'organs' && (
          <motion.div 
            key="organs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-16"
          >
             {/* Organ Network Grid */}
             <div className="grid lg:grid-cols-3 gap-8">
                {[
                  { t: "Pancreas", d: "Secretes Insulin (Lowers sugar) and Glucagon (Raises sugar). In T2, Glucagon effect is often too high.", icon: Activity, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                  { t: "Liver", d: "Stores sugar as glycogen. Releases it when fasting. Excessive output in T2 drives high morning sugars.", icon: Scaling, color: "text-blue-500", bg: "bg-blue-500/10" },
                  { t: "Kidneys", d: "Filter waste and reabsorb sugar until the 'renal threshold' is hit, leading to sugar in urine.", icon: Droplets, color: "text-amber-500", bg: "bg-amber-500/10" }
                ].map((organ, i) => (
                  <div key={i} className="p-10 rounded-[3.5rem] bg-slate-950 border border-white/5 space-y-6 group hover:border-white/10 transition-all shadow-inner">
                     <div className={`p-5 rounded-2xl ${organ.bg} ${organ.color} w-fit group-hover:scale-110 transition-transform`}><organ.icon className="w-8 h-8" /></div>
                     <div className="space-y-2">
                        <h4 className="text-2xl font-black text-white uppercase tracking-tight">{organ.t}</h4>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">{organ.d}</p>
                     </div>
                  </div>
                ))}
             </div>

             <div className="p-12 rounded-[4rem] bg-rose-500/5 border border-rose-500/10 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                   <h3 className="text-3xl font-black text-white leading-tight">The Ketone <br /> Logic.</h3>
                   <p className="text-slate-400 text-sm font-medium leading-relaxed">
                     When glycogen is low, the liver makes **Ketones** from fat as fuel. In some scenarios, too many ketones can become dangerous (DKA). Work with your team on monitoring protocols.
                   </p>
                </div>
                <div className="p-8 rounded-3xl bg-slate-950 border border-white/5 space-y-4">
                   <h4 className="text-xl font-black text-primary uppercase italic">Renal Threshold</h4>
                   <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                     When blood sugar is too high for the kidneys to handle, it spills into the urine. This is why frequent urination is a primary symptom of hyperglycemia.
                   </p>
                </div>
             </div>
          </motion.div>
        )}

        {activeTab === 'insulin-profiles' && (
          <motion.div 
            key="profiles"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-20"
          >
             {/* Insulin Duration Chart Recreation */}
             <div className="p-12 rounded-[4.5rem] bg-slate-950 border border-white/10 space-y-12 shadow-2xl overflow-hidden relative">
                <div className="space-y-4 text-center">
                   <h3 className="text-3xl font-black text-white uppercase tracking-tight">Timeline of Insulin Effect</h3>
                   <p className="text-sm text-slate-500 font-medium">Visualizing how long different insulin tools remain active in the physiology.</p>
                </div>
                
                <div className="relative h-64 border-b border-l border-white/10 mt-12 mb-8 mx-4">
                   {/* Digital Chart Rendering */}
                   <div className="absolute bottom-0 left-0 w-full h-full p-4 flex items-end gap-[1px]">
                      {/* Rapid Acting Curve */}
                      <motion.div 
                        initial={{ height: 0 }} animate={{ height: '90%' }} 
                        className="w-[20%] bg-primary/20 border-t-4 border-primary rounded-t-3xl relative group"
                      >
                         <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[9px] font-black text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity uppercase">Rapid: 4-5h</span>
                      </motion.div>
                      {/* Short Acting Curve */}
                      <motion.div 
                         initial={{ height: 0 }} animate={{ height: '70%', marginLeft: '10%' }} 
                         className="w-[25%] bg-emerald-500/20 border-t-4 border-emerald-500 rounded-t-3xl relative group"
                      >
                         <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[9px] font-black text-emerald-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity uppercase">Short: 7-8h</span>
                      </motion.div>
                      {/* Intermediate Curve */}
                      <motion.div 
                         initial={{ height: 0 }} animate={{ height: '40%', marginLeft: '15%' }} 
                         className="w-[35%] bg-blue-500/20 border-t-4 border-blue-500 rounded-t-3xl relative group"
                      >
                         <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[9px] font-black text-blue-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity uppercase">Intermed: 12-16h</span>
                      </motion.div>
                      {/* Long Acting Curve */}
                      <motion.div 
                         initial={{ height: 0 }} animate={{ height: '20%', marginLeft: '20%' }} 
                         className="w-[50%] bg-indigo-500/20 border-t-4 border-indigo-500 rounded-t-3xl absolute bottom-0 right-0 group"
                      >
                         <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[9px] font-black text-indigo-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity uppercase">Long: 24h+</span>
                      </motion.div>
                   </div>
                   
                   {/* X-Axis Labels */}
                   <div className="absolute -bottom-10 left-0 w-full flex justify-between px-4 text-[9px] font-black text-slate-600 uppercase tracking-widest leading-none">
                      <span>Injection</span>
                      <span>6 Hours</span>
                      <span>12 Hours</span>
                      <span>18 Hours</span>
                      <span>24 Hours</span>
                      <span>30h+</span>
                   </div>
                </div>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {insulinTypes.map((type) => (
                  <div key={type.id} className="p-8 rounded-3xl bg-slate-950 border border-white/5 space-y-4 hover:border-primary/20 transition-all group">
                     <div className={`w-3 h-3 rounded-full ${type.color}`} />
                     <h4 className="text-sm font-black text-white uppercase tracking-tight">{type.title}</h4>
                     <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{type.effect}</p>
                     <div className="pt-2 border-t border-white/5">
                        <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest">{type.duration}</p>
                        <p className="text-[10px] text-white font-black mt-1">{type.examples}</p>
                     </div>
                  </div>
                ))}
             </div>

             <div className="p-8 rounded-[3rem] bg-indigo-500/5 border border-indigo-500/10 flex flex-col md:flex-row items-center gap-10">
                <div className="p-6 bg-slate-950 rounded-2xl border border-white/10 shrink-0"><Scaling className="text-primary w-10 h-10" /></div>
                <div className="space-y-3">
                   <h4 className="text-xl font-black text-white tracking-tight uppercase">Concentration Alert</h4>
                   <p className="text-xs text-slate-500 leading-relaxed font-medium">
                     Insulin comes in different concentrations: **U-100, U-200, U-300, and U-500**. Depending on your age and kidney function, the duration of effect may vary. Always double-check your concentration with every refill.
                   </p>
                </div>
             </div>
          </motion.div>
        )}

        {activeTab === 'interference' && (
          <motion.div 
            key="interference"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-16"
          >
             <div className="text-center space-y-4">
                <h3 className="text-3xl font-black text-white tracking-tight uppercase">Blood Sugar Interference</h3>
                <p className="text-sm text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                  Several common medications can increase blood sugar levels. While this risk exists, the benefit of these medications (like heart health) often outweighs the glycemic impact.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { t: "Steroids", d: "Prednisone, Dex, etc. Cause significant sugar spikes.", icon: ShieldAlert, color: "text-rose-500" },
                  { t: "Heart & Statins", d: "Vital for stroke prevention. Benefit > glycemic risk.", icon: Heart, color: "text-blue-400" },
                  { t: "Decongestants", d: "Pseudoephedrine and Phenylephrine can raise glucose.", icon: Zap, color: "text-amber-500" },
                  { t: "Antibiotics", d: "Certain infection-fighting drugs may increase levels.", icon: FlaskConical, color: "text-emerald-500" },
                  { t: "Mood Meds", d: "Some psychiatric medications affect metabolic paths.", icon: Dna, color: "text-violet-400" },
                  { t: "Hormonal", d: "Birth control pills may influence insulin sensitivity.", icon: Activity, color: "text-pink-400" }
                ].map((item, i) => (
                  <div key={i} className="p-10 rounded-[3rem] bg-slate-950 border border-white/5 space-y-6 group hover:border-white/10 transition-all">
                     <div className={`p-4 rounded-2xl bg-white/5 ${item.color} group-hover:scale-110 transition-transform`}><item.icon className="w-5 h-5" /></div>
                     <h4 className="text-lg font-black text-white uppercase tracking-tight">{item.t}</h4>
                     <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.d}</p>
                  </div>
                ))}
             </div>

             <div className="p-12 rounded-[4rem] bg-slate-950 border border-white/10 flex flex-col items-center justify-center text-center space-y-6">
                <AlertTriangle className="text-amber-500 w-12 h-12" />
                <h4 className="text-2xl font-black text-white uppercase tracking-tight leading-tight">Don't Stop Your Meds.</h4>
                <p className="text-sm text-slate-500 max-w-xl mx-auto font-medium">
                  "The benefits of statins in preventing heart attack and stroke far outweigh the risk of elevated blood sugar levels." Always consult your provider before changing any prescribed medication.
                </p>
                <button 
                  onClick={() => setActiveTab('protective-toolbox')}
                  className="px-8 py-3 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black text-white uppercase tracking-widest hover:border-primary transition-all"
                >
                  Explore Protective Benefits <ChevronRight className="w-4 h-4 ml-2 inline" />
                </button>
             </div>
          </motion.div>
        )}

        {activeTab === 'protective-toolbox' && (
          <motion.div 
            key="protective"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-16"
          >
             <div className="text-center space-y-4">
                <h3 className="text-3xl font-black text-white tracking-tight uppercase">The Protective Toolbox</h3>
                <p className="text-sm text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                  Beyond glycemic control, these medications are designed to protect your most vital organs—the Heart and Kidneys—from long-term diabetes complications.
                </p>
             </div>

             <div className="grid lg:grid-cols-3 gap-8">
                {[
                  { t: "Statin Therapy", d: "Highly recommended for heart disease prevention, even if your cholesterol appears at goal.", icon: Heart, color: "text-blue-400", bg: "bg-blue-500/10" },
                  { t: "Aspirin Stewardship", d: "Used strategically to reduce the risk of heart attack and stroke in at-risk candidates.", icon: ShieldAlert, color: "text-pink-400", bg: "bg-pink-500/10" },
                  { t: "Renal BP Protection", d: "Specific blood pressure medications are prescribed specifically to prevent diabetic kidney disease.", icon: Droplets, color: "text-emerald-500", bg: "bg-emerald-500/10" }
                ].map((item, i) => (
                  <div key={i} className="p-10 rounded-[3.5rem] bg-slate-950 border border-white/5 space-y-6 group hover:border-white/10 transition-all shadow-xl">
                     <div className={`p-5 rounded-2xl ${item.bg} ${item.color} w-fit group-hover:scale-110 transition-transform`}><item.icon className="w-8 h-8" /></div>
                     <div className="space-y-3">
                        <h4 className="text-2xl font-black text-white uppercase tracking-tight">{item.t}</h4>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.d}</p>
                     </div>
                  </div>
                ))}
             </div>

             <div className="p-12 rounded-[4rem] bg-blue-500/5 border border-blue-500/10 flex flex-col md:flex-row items-center gap-10">
                <Info className="text-blue-400 w-12 h-12 shrink-0" />
                <p className="text-base text-slate-400 font-medium leading-relaxed italic">
                  "Having diabetes increases your baseline risk for cardiac events. Ask your provider specifically: 'Would I benefit from a statin or kidney-protective blood pressure medication?'"
                </p>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="p-10 rounded-[3rem] bg-slate-950 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
         <div className="flex gap-4 items-center">
            <Stethoscope className="text-primary w-6 h-6" />
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest max-w-sm">
              Note: Medication works differently for everyone depending on age and kidney function. Regular consultation is vital.
            </p>
         </div>
         <button className="px-10 py-4 rounded-3xl bg-primary shadow-xl shadow-primary/20 text-[10px] font-black text-white uppercase tracking-[0.2em] flex items-center gap-4 hover:scale-105 transition-all">
           REQUEST MEDICATION REVIEW <ChevronRight className="w-4 h-4" />
         </button>
      </div>

    </section>
  )
}
