"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Stethoscope, 
  Utensils, 
  Heart, 
  Handshake, 
  Clock, 
  Activity, 
  Move, 
  Users, 
  ChevronRight,
  Sparkles,
  Info
} from "lucide-react"

const diabetesTypes = [
  { id: 't1', label: 'Type 1 Diabetes', desc: 'Autoimmune insulin deficiency' },
  { id: 't2', label: 'Type 2 Diabetes', desc: 'Insulin resistance & metabolic health' },
  { id: 'unsure', label: 'Not Sure?', desc: 'Guidance on diagnosis & screening' }
]

const categories = [
  { 
    id: 'getting-started', 
    label: 'Getting Started', 
    summary: 'Essentials for your first 90 days of management.',
    icon: Info, 
    color: 'text-blue-500', 
    bg: 'bg-blue-500/10' 
  },
  { 
    id: 'eating', 
    label: 'Eating', 
    summary: 'Master MNT, carb counting, and portion control.',
    icon: Utensils, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-500/10' 
  },
  { 
    id: 'heart', 
    label: 'Heart Health', 
    summary: 'Protecting your large vessels and ABC targets.',
    icon: Heart, 
    color: 'text-red-500', 
    bg: 'bg-red-500/10' 
  },
  { 
    id: 'support', 
    label: 'Social & Emotional', 
    summary: 'Resilience protocols and stress management.',
    icon: Handshake, 
    color: 'text-purple-500', 
    bg: 'bg-purple-500/10' 
  },
  { 
    id: 'on-track', 
    label: 'Staying on Track', 
    summary: 'Consistency in monitoring and lab frequency.',
    icon: Clock, 
    color: 'text-amber-500', 
    bg: 'bg-amber-500/10' 
  },
  { 
    id: 'managing', 
    label: 'Managing Diabetes', 
    summary: 'Clinical procedures for insulin and oral meds.',
    icon: Stethoscope, 
    color: 'text-primary', 
    bg: 'bg-primary/10' 
  },
  { 
    id: 'moving', 
    label: 'Moving', 
    summary: 'Aerobic and resistance training protocols.',
    icon: Move, 
    color: 'text-secondary', 
    bg: 'bg-secondary/10' 
  },
  { 
    id: 'caregivers', 
    label: 'For Caregivers', 
    summary: 'Support strategies for pediatric & elder care.',
    icon: Users, 
    color: 'text-pink-500', 
    bg: 'bg-pink-500/10' 
  }
]

export function ClinicalNavigator() {
  const [selectedType, setSelectedType] = useState<string | null>(null)

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-20">
      
      {/* Question 1: Type Selection */}
      <div className="space-y-12">
        <div className="text-center lg:text-left space-y-4">
          <h2 className="text-3xl lg:text-5xl font-black text-foreground tracking-tighter">
            What type of <span className="text-primary text-glow">diabetes</span> do you have?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Select your path for a personalized clinical experience.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {diabetesTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`p-8 rounded-[2.5rem] border transition-all text-left group relative overflow-hidden ${
                selectedType === type.id 
                  ? 'border-primary bg-primary/5 shadow-2xl shadow-primary/20' 
                  : 'border-border bg-card hover:border-primary/40'
              }`}
            >
              <div className="relative z-10 space-y-2">
                <h3 className={`text-xl font-bold transition-colors ${selectedType === type.id ? 'text-primary' : 'text-foreground'}`}>
                  {type.label}
                </h3>
                <p className="text-xs text-slate-500 font-medium">{type.desc}</p>
              </div>
              {selectedType === type.id && (
                <motion.div 
                  layoutId="activeGlow"
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent -z-10" 
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Question 2: Category Selection */}
      <AnimatePresence>
        {selectedType && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12 pt-12 border-t border-border"
          >
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-3xl lg:text-5xl font-black text-foreground tracking-tighter">
                What type of <span className="text-secondary text-glow">information</span> are you looking for?
              </h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Fine-tune your dashboard with specific medical topics.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className="p-6 rounded-3xl bg-card border border-border hover:border-secondary/30 hover:shadow-xl transition-all group text-left space-y-4 flex flex-col justify-between"
                >
                  <div className={`p-3 rounded-2xl w-fit ${cat.bg} group-hover:scale-110 transition-transform`}>
                    <cat.icon className={`w-6 h-6 ${cat.color}`} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-black text-foreground uppercase tracking-wider">{cat.label}</h4>
                    <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{cat.summary}</p>
                    <div className="flex items-center gap-1 pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-black text-secondary uppercase tracking-widest">Explore</span>
                      <ChevronRight className="w-3 h-3 text-secondary" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="flex justify-center pt-8">
              <button 
                onClick={() => document.getElementById('specialist-hub')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-primary text-white font-black rounded-2xl text-xs uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group"
              >
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Customize My Experience
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
