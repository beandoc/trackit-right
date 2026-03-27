"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ClipboardCheck, 
  Activity, 
  Target, 
  AlertCircle, 
  ShieldAlert, 
  Stethoscope, 
  Info,
  ChevronRight,
  User,
  History,
  Scale,
  Zap,
  Microscope,
  Baby,
  Users,
  Eye,
  Utensils,
  Droplets,
  ZapOff,
  Clock,
  FlaskConical,
  Bandage,
  ThermometerSnowflake
} from "lucide-react"

const diagnosisCriteria = [
  { id: 'A1', letter: 'A', title: 'Age', desc: 'Consider T1D for individuals <35 years old', icon: User, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { id: 'A2', letter: 'A', title: 'Autoimmunity', desc: 'Medical or family history of autoimmune disease or syndromes', icon: Zap, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { id: 'B1', letter: 'B', title: 'Background', desc: 'Strong family history of type 1 diabetes', icon: History, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
  { id: 'B2', letter: 'B', title: 'Body habitus', desc: 'Leaner BMI, typically <25 kg/m²', icon: Scale, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
  { id: 'C1', letter: 'C', title: 'Comorbidities', desc: 'Prior treatment with immune checkpoint inhibitors (cancer)', icon: ShieldAlert, color: 'text-violet-400', bg: 'bg-violet-400/10' },
  { id: 'C2', letter: 'C', title: 'Control', desc: 'Glucose management on noninsulin therapies (rapid failure)', icon: Activity, color: 'text-violet-500', bg: 'bg-violet-500/10' }
]

const t1Stages = [
  { 
    stage: "STAGE 1", 
    title: "Presymptomatic / Normoglycemia", 
    criteria: ["Autoimmunity", "Normoglycemia", "Presymptomatic"], 
    details: "Multiple islet autoantibodies (usually ≥2). No IGT or IFG.",
    label: "Multiple Autoantibodies"
  },
  { 
    stage: "STAGE 2", 
    title: "Presymptomatic / Dysglycemia", 
    criteria: ["Autoimmunity", "Dysglycemia", "Presymptomatic"], 
    details: "IFG 100–125 mg/dL. 2-h PG 140–199 mg/dL. A1C 5.7–6.4% or ≥10% increase.",
    label: "Glucose Impairment"
  },
  { 
    stage: "STAGE 3", 
    title: "Symptomatic / Clinical", 
    criteria: ["Autoimmunity", "Overt Hyperglycemia", "Symptomatic"], 
    details: "Diabetes by standard criteria. Autoantibodies may become absent over time.",
    label: "Overt Diabetes"
  }
]

const cgmGoals = [
  { metric: "TIR (70–180 mg/dL)", targetMost: ">70%", targetOlder: ">50%", level: "In Range", color: "text-emerald-400" },
  { metric: "TAR (181–250 mg/dL)", targetMost: "<25%", targetOlder: "<50%", level: "Above Range", color: "text-amber-400" },
  { metric: "TAR (>250 mg/dL)", targetMost: "<5%", targetOlder: "<10%", level: "High", color: "text-orange-400" },
  { metric: "TBR (54–69 mg/dL)", targetMost: "<4%", targetOlder: "<1%", level: "Below Range", color: "text-rose-400" },
  { metric: "TBR (<54 mg/dL)", targetMost: "<1%", targetOlder: "<1%", level: "Low", color: "text-red-500" }
]

const dkaTriad = [
  { label: "Hyperglycemia", criteria: "Glucose ≥200 mg/dL or History", sub: "Relative or Absolute insulin deficiency" },
  { label: "Ketosis", criteria: "β-OHB ≥3.0 mmol/L or Urine 2+", sub: "Fatty acid oxidation overflow" },
  { label: "Acidosis", criteria: "pH <7.3 and/or Bicarb <18 mmol/L", sub: "Metabolic anion gap acidosis" }
]

const symptoms = {
  adult: [
    { name: "Urinating Often", icon: Droplets, desc: "Increased frequency of urination" },
    { name: "Extreme Thirst", icon: FlaskConical, desc: "Polydipsia even after drinking" },
    { name: "Extreme Hunger", icon: Utensils, desc: "Hungry even though eating" },
    { name: "Extreme Fatigue", icon: ZapOff, desc: "Weakness and lethargy" },
    { name: "Slow Healing", icon: Bandage, desc: "Cuts and bruises are slow to heal" },
    { name: "Weight Loss", icon: Scale, desc: "Losing weight while eating more" },
    { name: "Blurry Vision", icon: Eye, desc: "Visual changes and focus issues" }
  ],
  child: [
    { name: "Often Urinating", icon: Droplets, desc: "Frequency or Bed-wetting" },
    { name: "Very Thirsty", icon: FlaskConical, desc: "Inability to satisfy thirst" },
    { name: "Very Hungry", icon: Utensils, desc: "Hungry despite eating well" },
    { name: "Extreme Fatigue", icon: ZapOff, desc: "Less energy for play" },
    { name: "Fungal Infections", icon: Microscope, desc: "Oral thrush, Diaper rash, UTI" },
    { name: "Weight Loss", icon: Scale, desc: "Failure to gain or losing weight" },
    { name: "Blurry Vision", icon: Eye, desc: "Focus issues and squinting" }
  ]
}

export function ADAGuidelines2024() {
  const [activeTab, setActiveTab] = useState<'diagnosis' | 'symptoms' | 'management' | 'dka'>('diagnosis')
  const [symptomView, setSymptomView] = useState<'adult' | 'child'>('adult')

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto space-y-16">
      
      {/* Tab Navigation */}
      <div className="flex justify-center flex-wrap gap-4">
        <div className="flex p-1.5 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-x-auto no-scrollbar">
          {[
            { id: 'diagnosis', label: 'Screening' },
            { id: 'symptoms', label: 'Symptoms' },
            { id: 'management', label: 'Management' },
            { id: 'dka', label: 'DKA Protocol' }
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab.id ? 'bg-primary text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'diagnosis' && (
          <motion.div 
            key="diagnosis"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="space-y-20"
          >
            {/* Header */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                <Microscope className="w-4 h-4" />
                ADA Standards of Care 2024
              </div>
              <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
                Diagnosis & <span className="text-primary tracking-tight">Phenotype.</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                Type 1 Diabetes can develop at any age. Use the gold-standard AABBCC approach and staging logic to prevent misdiagnosis.
              </p>
            </div>

            {/* AABBCC Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {diagnosisCriteria.map((item, i) => (
                <div key={item.id} className="group relative p-8 rounded-[2.5rem] bg-slate-950/50 border border-white/5 hover:border-primary/40 transition-all overflow-hidden">
                  <div className={`p-4 rounded-2xl ${item.bg} w-fit mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className="absolute top-8 right-8 text-4xl font-black text-white/5 group-hover:text-primary/10 transition-colors uppercase tracking-widest">
                    {item.letter}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Staging Timeline */}
            <div className="space-y-12">
              <div className="text-center md:text-left space-y-4">
                <h3 className="text-3xl font-black text-white tracking-tight">The 3-Tier Staging Path</h3>
                <p className="text-slate-500 font-medium max-w-lg">Progression from preclinical autoimmunity to clinical manifestation.</p>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {t1Stages.map((stage, i) => (
                  <div key={i} className="flex flex-col p-10 rounded-[3rem] bg-slate-950 border border-white/5 hover:bg-slate-900/50 transition-all group overflow-hidden shadow-2xl">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">{stage.stage}</span>
                    <h4 className="text-2xl font-black text-white mb-6 leading-tight">{stage.title}</h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {stage.criteria.map((c, ci) => (
                        <span key={ci} className="text-[9px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 font-bold uppercase">{c}</span>
                      ))}
                    </div>
                    <div className="mt-auto pt-8 border-t border-white/5">
                       <p className="text-xs text-slate-500 font-medium leading-relaxed italic">{stage.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'symptoms' && (
          <motion.div 
            key="symptoms"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="space-y-16"
          >
            {/* Symptom Toggle */}
            <div className="flex flex-col items-center space-y-12">
               <div className="text-center space-y-6">
                <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
                  Watch for <span className="text-amber-400 tracking-tight">Warning Signs.</span>
                </h2>
                <div className="inline-flex p-1.5 bg-slate-950 border border-white/10 rounded-2xl shadow-xl">
                  <button 
                    onClick={() => setSymptomView('adult')}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${symptomView === 'adult' ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' : 'text-slate-500 hover:text-white'}`}
                  >
                    <User className="w-4 h-4" /> Adult Profile
                  </button>
                  <button 
                    onClick={() => setSymptomView('child')}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${symptomView === 'child' ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' : 'text-slate-500 hover:text-white'}`}
                  >
                    <Baby className="w-4 h-4" /> Child Profile
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {symptoms[symptomView].map((s, i) => (
                  <div key={i} className="p-8 rounded-[2.5rem] bg-slate-950/50 border border-white/5 hover:border-amber-400/30 transition-all group text-center space-y-4">
                     <div className="mx-auto w-14 h-14 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                        <s.icon className="w-7 h-7" />
                     </div>
                     <h4 className="text-lg font-black text-white leading-tight">{s.name}</h4>
                     <p className="text-[10px] text-slate-500 font-medium italic">{s.desc}</p>
                  </div>
                ))}
              </div>

              <div className="w-full p-10 rounded-[3rem] bg-gradient-to-br from-slate-900 to-amber-500/5 border border-white/5 text-center">
                 <p className="text-sm text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                   {symptomView === 'child' 
                     ? "Symptom onset in children can occur over several days to a few weeks. New treatments for early T1D can possibly delay the need for insulin." 
                     : "LADA (Latent Autoimmune Diabetes in Adults) is often misdiagnosed as Type 2. Early antibody testing is vital for proper management."}
                 </p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'management' && (
          <motion.div 
            key="management"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="space-y-20"
          >
            {/* Management Cards */}
             <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-[10px] font-bold uppercase tracking-[0.2em]">
                  <Activity className="w-4 h-4" />
                  Glycemic Targets
                </div>
                <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
                  Treatment <span className="text-secondary tracking-tight">Goals.</span>
                </h2>
                <div className="space-y-6">
                  <div className="p-8 rounded-3xl bg-slate-950 border border-white/5 space-y-4">
                    <h4 className="flex items-center gap-2 text-sm font-black text-white uppercase tracking-widest">
                       A1C Measure
                    </h4>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed">
                      Aim for **&lt;7%** for most, or up to **8%** for limited life expectancy.
                    </p>
                    <div className="flex gap-4 pt-2">
                       <div className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/5">
                          <p className="text-[9px] text-slate-500 font-bold uppercase mb-1 italic italic">Fasting Goal</p>
                          <p className="text-sm text-white font-black">80 – 130 mg/dL</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CGM Target Table */}
              <div className="p-10 bg-slate-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-8">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-black text-white uppercase tracking-widest">CGM Glycemic Goals</h4>
                    <Target className="text-primary w-6 h-6" />
                  </div>
                  <div className="space-y-3">
                    {cgmGoals.map((goal, i) => (
                      <div key={i} className="flex justify-between items-center p-4 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="space-y-1">
                          <p className={`text-[10px] font-bold ${goal.color}`}>{goal.level}</p>
                          <p className="text-[8px] text-slate-600 font-black">{goal.metric}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] text-white font-black">{goal.targetMost} (Adult)</p>
                          <p className="text-[9px] text-slate-600 font-bold">{goal.targetOlder} (Older)</p>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'dka' && (
          <motion.div 
            key="dka"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="space-y-20"
          >
            {/* DKA Emergency */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-400 text-[10px] font-bold uppercase tracking-[0.3em]">
                <ShieldAlert className="w-4 h-4" /> EMERGENCY PROTOCOL
              </div>
              <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
                Diabetic <span className="text-red-600 tracking-tight">Ketoacidosis.</span>
              </h2>
            </div>

            {/* Diagnostic Triad */}
            <div className="grid lg:grid-cols-3 gap-8">
               {dkaTriad.map((t, i) => (
                 <div key={i} className="p-8 rounded-[2.5rem] bg-slate-950 border border-white/5 hover:border-red-500/30 transition-all group">
                    <h4 className="text-lg font-black text-white mb-4">{t.label}</h4>
                    <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 mb-6">
                       <p className="text-xs text-red-500 font-bold">{t.criteria}</p>
                    </div>
                    <p className="text-[10px] text-slate-500 font-medium uppercase tracking-[0.2em]">{t.sub}</p>
                 </div>
               ))}
            </div>

            {/* Management Row */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { title: "Fluid Replacement", desc: "0.9% NaCl (1L/hr severe). Add Dextrose when BG <250.", icon: Droplets, color: "text-blue-400" },
                 { title: "Potassium Mgmt", desc: "Replace if K+ <5.0 mmol/L. Insulin drives K+ into cells.", icon: Zap, color: "text-emerald-400" },
                 { title: "Insulin Therapy", desc: "0.1u/kg IV + 0.1u/kg/hr drip. Transition 1-2h prior to SubQ.", icon: Target, color: "text-purple-400" },
                 { title: "Bicarbonate", desc: "Generally NOT recommended unless pH <7.0.", icon: FlaskConical, color: "text-slate-500" }
               ].map((m, i) => (
                 <div key={i} className="p-8 rounded-[2.5rem] bg-slate-950 border border-white/5 space-y-4">
                    <m.icon className={`w-5 h-5 ${m.color}`} />
                    <h4 className="text-sm font-black text-white uppercase tracking-widest">{m.title}</h4>
                    <p className="text-[10px] text-slate-400 leading-relaxed font-medium">{m.desc}</p>
                 </div>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center pt-12 border-t border-white/5">
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] max-w-2xl mx-auto">
          ADA’s Standards of Care in Diabetes—2024. Supported by Type 1 Diabetes DKA Awareness initiative.
        </p>
      </div>

    </section>
  )
}
