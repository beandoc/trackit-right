"use client"

import Image from "next/image"
import { Navbar } from "@/components/Navbar"
import { DiabetesInsights } from "@/components/DiabetesInsights"
import { DiabetesKnowledgeCenter } from "@/components/DiabetesKnowledgeCenter"
import { RiskManagement } from "@/components/RiskManagement"
import { ClinicalConsultation } from "@/components/ClinicalConsultation"
import { T1ScreeningMonitoring } from "@/components/T1ScreeningMonitoring"
import { PediatricInsulinTherapy } from "@/components/PediatricInsulinTherapy"
import { AdultT1Management } from "@/components/AdultT1Management"
import { ClinicalNavigator } from "@/components/ClinicalNavigator"
import { Type2Specialist } from "@/components/Type2Specialist"
import { Sidebar } from "@/components/Sidebar"
import { VascularDefenseHub } from "@/components/VascularDefenseHub"
import { MicrovascularDefense } from "@/components/MicrovascularDefense"
import { MacrovascularDefense } from "@/components/MacrovascularDefense"
import { ResilienceProtocol } from "@/components/ResilienceProtocol"
import { InfectionDefense } from "@/components/InfectionDefense"
import { WomenDiabetesSpecialist } from "@/components/WomenDiabetesSpecialist"
import { LifestyleNavigator } from "@/components/LifestyleNavigator"
import { FootCareSpecialist } from "@/components/FootCareSpecialist"
import { PsychologicalDefense } from "@/components/PsychologicalDefense"
import { ResourceHub } from "@/components/ResourceHub"
import { AdvancedDietProtocol } from "@/components/AdvancedDietProtocol"
import { CessationSpecialist } from "@/components/CessationSpecialist"
import { SickDayProtocol } from "@/components/SickDayProtocol"
import { ClinicalDrawer } from "@/components/ClinicalDrawer"
import { 
  Activity, 
  Shield, 
  Zap, 
  ChevronRight, 
  Play, 
  Stethoscope,
  Users,
  Sparkles,
  MapPin,
  Footprints,
  Scale,
  Ban,
  Thermometer,
  Baby,
  Search,
  Brain,
  Bug,
  ShieldEllipsis,
  Eye,
  Heart,
  ShieldCheck,
  ArrowRight
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const specialistGroups = [
  { 
    name: "Assessment", 
    items: [
      { id: 'foundation', label: 'Basics / 9 Pillars', icon: ShieldCheck, summary: 'The 9-pillar defensive baseline for diabetes.' },
      { id: 'screening', label: 'Screening', icon: Search, summary: 'Early detection protocols and bloodwork markers.' },
      { id: 'cardio', label: 'Heart Defense', icon: Heart, summary: 'Advanced cardiovascular risk mitigation.' },
    ]
  },
  {
    name: "Chronic Care",
    items: [
      { id: 'type1', label: 'Pediatric T1', icon: Baby, summary: 'Insulin titration and school-age management.' },
      { id: 'adult-t1', label: 'Adult T1', icon: Stethoscope, summary: 'Modern automation and lifestyle integration.' },
      { id: 'type2', label: 'Type 2 Care', icon: Users, summary: 'Metabolic health and long-term remission.' },
      { id: 'women', label: 'Women', icon: Sparkles, summary: 'Hormonal cycles and reproductive health.' },
      { id: 'infection', label: 'Immunity/Infection', icon: Bug, summary: 'Immune system resilience and skin care.' },
      { id: 'micro', label: 'Micro (Eye/Kidney)', icon: Eye, summary: 'Protecting tiny blood vessels and nerves.' },
      { id: 'macro', label: 'Macro (Stroke/Heart)', icon: ShieldEllipsis, summary: 'Large vessel protection and stroke prevention.' },
    ]
  },
  {
    name: "Lifestyle & Prevention",
    items: [
      { id: 'lifestyle', label: 'Lifestyle', icon: MapPin, summary: 'Exercise physiology and movement therapy.' },
      { id: 'footcare', label: 'Foot Care', icon: Footprints, summary: 'Clinical podiatry and ulcer prevention.' },
      { id: 'diet', label: 'Weight/Diet', icon: Scale, summary: 'Precision nutrition and weight management.' },
      { id: 'cessation', label: 'Cessation', icon: Ban, summary: 'Tobacco withdrawal and metabolic repair.' },
      { id: 'sickday', label: 'Sick Day', icon: Thermometer, summary: 'Emergency protocols for illness and fever.' },
      { id: 'support', label: 'Stressor/Resilience', icon: Brain, summary: 'Mental health and psychological resilience.' },
    ]
  }
]

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [activeSpecialty, setActiveSpecialty] = useState<any>(null)

  const openSpecialty = (item: any) => {
    setActiveSpecialty(item)
    setIsDrawerOpen(true)
  }

  return (
    <main className="min-h-screen relative bg-[#020617] text-slate-200 luxury-gradient overflow-hidden">
      <Navbar />
      <Sidebar />
      
      <div className="lg:pl-[280px]">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 blur-[150px] -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 blur-[120px] -z-10 rounded-full" />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 border-b border-border">
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest mb-6 animate-pulse">
              <Shield className="w-3.5 h-3.5" />
              Nirogyam Endocrine Health
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-slate-500">
              Personalized <br /> <span className="text-primary text-glow font-black">Clinical Care.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
              Welcome to your digital endocrine specialist. Explore precise medical modules designed to reduce complications and simplify your management.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('clinical-navigator')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto group relative px-8 py-4 bg-primary rounded-xl font-bold text-white shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 font-bold">Start My Assessment</span>
                <ChevronRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => document.getElementById('specialist-hub')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto group px-8 py-4 bg-white/5 dark:bg-slate-900/50 backdrop-blur-md border border-border rounded-xl font-bold text-foreground hover:bg-white/10 dark:hover:bg-slate-800/60 transition-all flex items-center justify-center gap-3"
              >
                Browse All Modules
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="flex-1 relative w-full lg:w-auto mt-12 lg:mt-0 max-w-2xl">
            <div className="relative z-10">
              <div className="rounded-3xl border border-border overflow-hidden shadow-2xl glass-card relative group max-h-[40vh] sm:max-h-[50vh] lg:max-h-none">
                <Image 
                  src="/assets/images/hero_endocrine.png" 
                  alt="Endocrine Portal" 
                  width={700} 
                  height={700}
                  className="w-full h-auto opacity-90 lg:opacity-80 group-hover:opacity-100 transition-opacity object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Navigator: Modular Discovery Path */}
        <section id="clinical-navigator">
          <ClinicalNavigator />
        </section>

        {/* Specialist Hub: Clean Modular Knowledge Directory */}
        <section id="specialist-hub" className="py-24 px-6 max-w-7xl mx-auto space-y-16 scroll-mt-20">
          <div className="text-center space-y-4">
             <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter">Clinical Specialist Hub</h2>
             <p className="text-slate-500 max-w-xl mx-auto font-medium text-lg">Select a dedicated medical module below to launch a focused clinical session.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {specialistGroups.map((group, gIdx) => (
              <div key={gIdx} className="space-y-6">
                <div className="flex items-center gap-3 px-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                   <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] font-display">{group.name}</h3>
                </div>
                
                <div className="flex flex-col gap-3">
                   {group.items.map((item, iIdx) => (
                     <button
                       key={iIdx}
                       onClick={() => openSpecialty(item)}
                       className="group relative flex flex-col items-start p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-500 text-left overflow-hidden"
                     >
                       <div className="flex items-center gap-4 mb-3">
                         <div className="p-3 rounded-2xl bg-slate-900 border border-white/5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                           <item.icon className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                         </div>
                         <h4 className="text-sm font-black text-white tracking-wide uppercase">{item.label}</h4>
                       </div>
                       <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed font-medium">
                         {item.summary}
                       </p>
                       <div className="mt-4 flex items-center gap-2 self-end">
                         <span className="text-[9px] font-black text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Launch Module</span>
                         <ArrowRight className="w-3.5 h-3.5 text-primary translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                       </div>
                       
                       <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-x-12 -translate-y-12" />
                     </button>
                   ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sliding Clinical Context */}
        <ClinicalDrawer 
          isOpen={isDrawerOpen} 
          onClose={() => setIsDrawerOpen(false)}
          title={activeSpecialty?.label || "Clinical Detail"}
          icon={activeSpecialty?.icon || Stethoscope}
          description={activeSpecialty?.summary}
        >
          {activeSpecialty?.id === 'foundation' && (
            <div className="space-y-16">
              <ResilienceProtocol />
              <DiabetesKnowledgeCenter />
              <RiskManagement />
            </div>
          )}
          {activeSpecialty?.id === 'screening' && <T1ScreeningMonitoring />}
          {activeSpecialty?.id === 'type1' && <PediatricInsulinTherapy />}
          {activeSpecialty?.id === 'adult-t1' && <AdultT1Management />}
          {activeSpecialty?.id === 'type2' && <Type2Specialist />}
          {activeSpecialty?.id === 'women' && <WomenDiabetesSpecialist />}
          {activeSpecialty?.id === 'infection' && <InfectionDefense />}
          {activeSpecialty?.id === 'cardio' && <VascularDefenseHub />}
          {activeSpecialty?.id === 'micro' && <MicrovascularDefense />}
          {activeSpecialty?.id === 'macro' && <MacrovascularDefense />}
          {activeSpecialty?.id === 'lifestyle' && <LifestyleNavigator />}
          {activeSpecialty?.id === 'footcare' && <FootCareSpecialist />}
          {activeSpecialty?.id === 'diet' && <AdvancedDietProtocol />}
          {activeSpecialty?.id === 'cessation' && <CessationSpecialist />}
          {activeSpecialty?.id === 'sickday' && <SickDayProtocol />}
          {activeSpecialty?.id === 'support' && <PsychologicalDefense />}
        </ClinicalDrawer>

        {/* Cross-Cutting Clinical Utilities */}
        <section className="bg-slate-950/40 py-24">
          <ResourceHub />
          <DiabetesInsights />
          <ClinicalConsultation />
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-12 px-6 bg-black/20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-500 text-sm">© 2026 Nirogyam Endocrine Sciences. All rights reserved.</p>
            <div className="flex gap-8 text-sm font-medium text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Integrations</a>
              <a href="#" className="hover:text-white transition-colors">Research Data</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Shield</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
