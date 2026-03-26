"use client"

import { motion } from "framer-motion"
import { HelpCircle, ChevronRight, MessageSquare, ShieldAlert, Users, ArrowUpRight } from "lucide-react"

const questions = [
  {
    id: "01",
    question: "What specific steps can I take to lower my risk for heart disease and stroke?",
    category: "Preventative Action",
    tip: "Ask for personalized BP and LDL targets."
  },
  {
    id: "02",
    question: "Do any of my current medications help manage my risks for cardiovascular complications?",
    category: "Pharmacology",
    tip: "Mention Metformin or any prescribed SGLT2i/GLP-1 RA."
  },
  {
    id: "03",
    question: "Are there local programs or referrals available to help me manage this condition?",
    category: "Resources",
    tip: "Request a referral to a Certified Diabetes Educator."
  },
  {
    id: "04",
    question: "How can I connect with others who are going through the same health experience?",
    category: "Community",
    tip: "Inquire about hospital-led support groups."
  }
]

export function ClinicalConsultation() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left: The "2X Risk" Alert Banner */}
        <div className="lg:w-1/3 space-y-8">
          <div className="p-8 rounded-[40px] bg-gradient-to-br from-rose-600 to-rose-900 shadow-2xl shadow-rose-900/20 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-1000" />
            
            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <ShieldAlert className="w-8 h-8 text-white" />
              </div>
              
              <div className="space-y-2">
                <span className="text-4xl font-black text-white">2X RISK</span>
                <p className="text-rose-100 text-sm leading-relaxed font-medium">
                  Adults with Type 2 diabetes are twice as likely to experience a heart attack or stroke compared to adults without.
                </p>
              </div>
              
              <div className="pt-4 border-t border-white/20">
                <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Clinical Fact Check</p>
              </div>
            </div>
          </div>

          <div className="p-8 glass-card rounded-[32px] border-primary/20 space-y-4">
             <h4 className="text-lg font-bold text-white">Advocate for Your Health</h4>
             <p className="text-slate-400 text-sm leading-relaxed">
               If you are living with type 2 diabetes, learning about your higher risk for heart disease and stroke is one of the best ways you can take care of yourself.
             </p>
          </div>
        </div>

        {/* Right: The 4 Questions Grid */}
        <div className="lg:w-2/3 space-y-12">
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-white flex items-center gap-4">
              <HelpCircle className="text-primary w-8 h-8" />
              Physician Consultation Guide
            </h3>
            <p className="text-slate-400 text-lg">Four critical questions to ask during your next medical appointment.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {questions.map((q, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-primary/20 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-black text-primary/20 group-hover:text-primary/40 transition-colors font-mono tracking-tighter">{q.id}</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-white/5 px-2 py-1 rounded-md">{q.category}</span>
                  </div>
                  <p className="text-white font-bold leading-relaxed">{q.question}</p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                  <p className="text-[10px] text-primary font-black uppercase tracking-widest flex items-center gap-2">
                    <MessageSquare className="w-3 h-3" /> Note for Patient
                  </p>
                  <p className="text-xs text-slate-400 italic">"{q.tip}"</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-6 p-6 rounded-2xl bg-primary/5 border border-primary/20">
             <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-primary" />
             </div>
             <div className="flex-1">
                <p className="text-sm font-bold text-white">Join the Endocrine Community</p>
                <p className="text-xs text-slate-400">Connect with others and share clinical management strategies.</p>
             </div>
             <button className="p-3 rounded-full bg-slate-900 border border-white/10 hover:border-primary transition-all">
                <ArrowUpRight className="w-5 h-5 text-primary" />
             </button>
          </div>
        </div>

      </div>
    </section>
  )
}
