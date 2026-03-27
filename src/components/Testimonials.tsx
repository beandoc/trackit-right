"use client"

import { motion } from "framer-motion"
import { Quote, Star, MapPin } from "lucide-react"

const testimonials = [
  {
    name: "Amol Deshmukh",
    location: "Pune, Maharashtra",
    text: "Managing Type 1 felt like a mountain until I found these protocols. The Indian Plate Method is a game-changer for my family and daily routine.",
    role: "Type 1 Patient"
  },
  {
    name: "Sunita Kulkarni",
    location: "Mumbai, Maharashtra",
    text: "As a caregiver for my elderly mother, the foot care and insulin injection guides have given us so much confidence. Truly a life-saver for our family.",
    role: "Family Caregiver"
  },
  {
    name: "Rajesh Patil",
    location: "Nagpur, Maharashtra",
    text: "The risk management modules helped me understand the 'why' behind my medications. My A1C has never been better since I started following these guides.",
    role: "Type 2 Patient"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-4xl lg:text-5xl font-black text-foreground tracking-tighter">
          Patient <span className="text-primary">Voice</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto font-medium">
          Trusted by patients and caregivers across Maharashtra for precise endocrine guidance.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2.5rem] bg-card border border-border relative group hover:border-primary/40 transition-all shadow-xl shadow-black/20"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <Quote className="text-white w-6 h-6 fill-current" />
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-400 font-medium leading-relaxed italic">
                "{t.text}"
              </p>
              
              <div className="pt-6 border-t border-border flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-foreground">{t.name}</h4>
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest">{t.role}</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-white/5 text-[9px] font-bold text-slate-500 uppercase tracking-tighter">
                  <MapPin className="w-3 h-3" />
                  {t.location.split(',')[0]}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
