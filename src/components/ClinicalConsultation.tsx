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
      <div className="flex flex-col lg:flex-row gap-16 items-stretch">
        
        {/* Left: The "2X Risk" Alert Banner */}
        <div className="lg:w-2/5 flex flex-col gap-6">
          <div className="flex-1 p-10 rounded-[2.5rem] bg-rose-600 dark:bg-rose-950/40 border border-rose-500/20 shadow-2xl shadow-rose-900/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 blur-[100px] rounded-full group-hover:scale-110 transition-transform duration-1000" />
            
            <div className="relative z-10 h-full flex flex-col justify-between space-y-12">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-[1.25rem] bg-white/20 dark:bg-rose-500/20 backdrop-blur-md flex items-center justify-center border border-white/20 dark:border-rose-400/30">
                  <ShieldAlert className="w-8 h-8 text-white dark:text-rose-400" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-5xl font-black text-white dark:text-rose-50">2X RISK</h3>
                  <p className="text-xl leading-relaxed font-semibold text-rose-50/90 dark:text-rose-100/80">
                    Adults with Type 2 diabetes are twice as likely to experience a heart attack or stroke compared to adults without.
                  </p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10 dark:border-rose-400/20">
                <p className="text-xs font-black text-white/50 dark:text-rose-400/60 uppercase tracking-[0.3em]">Clinical Fact Check</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-[2rem] bg-card border border-border space-y-6 shadow-sm">
             <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 w-fit">
               <HelpCircle className="w-6 h-6 text-primary" />
             </div>
             <div className="space-y-3">
               <h4 className="text-xl font-bold text-foreground">Advocate for Your Health</h4>
               <p className="text-muted-foreground text-sm leading-relaxed">
                 Mastering your risk profile for heart disease and stroke is one of the most proactive steps you can take for long-term metabolic stability.
               </p>
             </div>
          </div>
        </div>

        {/* Right: The 4 Questions Grid */}
        <div className="lg:w-3/5 flex flex-col gap-10">
          <div className="space-y-4">
            <h3 className="text-4xl font-bold text-foreground tracking-tight">Physician Consultation Guide</h3>
            <p className="text-muted-foreground text-lg">Four mission-critical questions for your next medical appointment.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {questions.map((q, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.01 }}
                className="p-8 rounded-[2rem] bg-secondary/5 dark:bg-slate-900/40 border border-border hover:border-primary/20 transition-all flex flex-col group h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl font-black text-primary/10 group-hover:text-primary/20 transition-colors font-mono tracking-tighter self-start">{q.id}</span>
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest bg-muted/50 px-2 py-1 rounded-lg border border-border">{q.category}</span>
                </div>
                
                <p className="text-lg font-bold text-foreground leading-[1.4] mb-8 flex-1">
                  {q.question}
                </p>
                
                <div className="p-5 rounded-2xl bg-background border border-border/50 group-hover:border-primary/20 group-hover:shadow-lg group-hover:shadow-primary/5 transition-all space-y-3">
                  <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest">
                    <MessageSquare className="w-3.5 h-3.5" /> 
                    Note for Patient
                  </div>
                  <p className="text-xs text-muted-foreground font-medium italic border-l-2 border-primary/30 pl-3 py-1 bg-primary/5 rounded-r-md">"{q.tip}"</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-auto flex flex-col sm:flex-row items-center gap-6 p-8 rounded-[2rem] bg-primary/5 border border-primary/20">
             <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                <Users className="w-7 h-7 text-white" />
             </div>
             <div className="flex-1 text-center sm:text-left space-y-1">
                <p className="text-lg font-bold text-foreground">Join the Endocrine Community</p>
                <p className="text-sm text-muted-foreground">Connect with others and share clinical management strategies.</p>
             </div>
             <button className="h-14 px-8 rounded-2xl bg-foreground text-background font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
                Join Now
                <ArrowUpRight className="w-4 h-4" />
             </button>
          </div>
        </div>

      </div>
    </section>
  )
}
