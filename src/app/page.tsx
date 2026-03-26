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
import { 
  Activity, 
  Shield, 
  Droplets, 
  Zap, 
  ChevronRight, 
  Play, 
  ArrowUpRight,
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
  MessageCircleOff,
  Bug,
  ShieldEllipsis,
  Eye,
  Heart,
  ShieldCheck
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const specialistGroups = [
  { 
    name: "Assessment", 
    items: [
      { id: 'foundation', label: 'Basics / 9 Pillars', icon: ShieldCheck },
      { id: 'screening', label: 'Screening', icon: Search },
      { id: 'cardio', label: 'Heart Defense', icon: Heart },
    ]
  },
  {
    name: "Chronic Care",
    items: [
      { id: 'type1', label: 'Pediatric T1', icon: Baby },
      { id: 'adult-t1', label: 'Adult T1', icon: Stethoscope },
      { id: 'type2', label: 'Type 2 Care', icon: Users },
      { id: 'women', label: 'Women', icon: Sparkles },
      { id: 'infection', label: 'Immunity/Infection', icon: Bug },
      { id: 'micro', label: 'Micro (Eye/Kidney)', icon: Eye },
      { id: 'macro', label: 'Macro (Stroke/Heart)', icon: ShieldEllipsis },
    ]
  },
  {
    name: "Lifestyle & Prevention",
    items: [
      { id: 'lifestyle', label: 'Lifestyle', icon: MapPin },
      { id: 'footcare', label: 'Foot Care', icon: Footprints },
      { id: 'diet', label: 'Weight/Diet', icon: Scale },
      { id: 'cessation', label: 'Cessation', icon: Ban },
      { id: 'sickday', label: 'Sick Day', icon: Thermometer },
      { id: 'support', label: 'Stressor/Resilience', icon: Brain },
    ]
  }
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('foundation')

  return (
    <main className="min-h-screen relative bg-[#020617] text-slate-200 luxury-gradient overflow-hidden">
      <Navbar />
      <Sidebar />
      
      <div className="lg:pl-[280px]">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 blur-[150px] -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 blur-[120px] -z-10 rounded-full" />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest mb-6 animate-pulse">
              <Shield className="w-3.5 h-3.5" />
              Endocrine Specialization Hub
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-display leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-slate-500">
              Hormonal Health  <br /> <span className="text-primary text-glow">Refined.</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
              Track-it-Right redefines endocrine care with ultra-precision monitoring and scientific insight, tailor-made for high-performance patient outcomes.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="group relative px-8 py-4 bg-primary rounded-xl font-bold text-white shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 overflow-hidden">
                <span className="relative z-10 font-bold">Start Your Recovery Journey</span>
                <ChevronRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </button>
              
              <button className="group px-8 py-4 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-xl font-bold text-slate-300 hover:bg-slate-800/60 transition-all flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </div>
                View Science Demo
              </button>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-white">99.2%</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Data Precision</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-white">2.4k</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Active Monitoring</p>
              </div>
              <div className="space-y-1 hidden md:block">
                <p className="text-2xl font-bold text-white">ISO-C</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Compliance Certified</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full lg:w-auto mt-12 lg:mt-0 max-w-2xl">
            <div className="relative z-10 animate-float">
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl blur-[40px] opacity-50 -z-10" />
              <div className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl glass-card">
                <Image 
                  src="/assets/images/hero_endocrine.png" 
                  alt="Endocrine Anatomy Hologram" 
                  width={700} 
                  height={700}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-1000 grayscale-[0.2] hover:grayscale-0"
                  priority
                />
              </div>
              
              {/* Overlay Widgets */}
              <div className="absolute -top-10 -right-10 glass-card p-5 rounded-2xl animate-bounce-slow hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Metabolic Rate</p>
                    <p className="text-sm font-bold text-emerald-500">Normal Range</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl border-accent/20 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold tracking-widest">HORMONE UPDATE</p>
                    <p className="text-xs font-semibold text-white">T3/T4 Stabilized</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Navigator: Personalized Entry Path */}
        <ClinicalNavigator />

        {/* Specialist Hub: Grouped Navigation */}
        <section id="specialist-hub" className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-y border-white/5 py-4 scroll-mt-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
              {specialistGroups.map((group, idx) => (
                <div key={idx} className="flex flex-col gap-2.5">
                  <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">{group.name}</span>
                  <div className="flex gap-1.5 p-1 bg-white/5 border border-white/5 rounded-2xl relative">
                    {group.items.map((tab) => {
                      const isActive = activeTab === tab.id
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={cn(
                            "flex items-center gap-2 px-4 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-[0.1em] transition-all duration-300 relative group min-w-fit",
                            isActive 
                              ? "text-white bg-primary shadow-lg shadow-primary/20" 
                              : "text-slate-400 hover:text-white"
                          )}
                        >
                          <tab.icon className={cn(
                            "w-3.5 h-3.5",
                            isActive ? "scale-110" : "group-hover:scale-110"
                          )} />
                          {tab.label}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Content Area */}
        <div className="min-h-[800px] relative">
          <div key={activeTab} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            {activeTab === 'foundation' && (
              <>
                <ResilienceProtocol />
                <DiabetesKnowledgeCenter />
                <RiskManagement />
              </>
            )}
            
            {activeTab === 'screening' && <T1ScreeningMonitoring />}
            {activeTab === 'type1' && <PediatricInsulinTherapy />}
            {activeTab === 'adult-t1' && <AdultT1Management />}
            {activeTab === 'type2' && <Type2Specialist />}
            {activeTab === 'women' && <WomenDiabetesSpecialist />}
            {activeTab === 'infection' && <InfectionDefense />}
            {activeTab === 'cardio' && <VascularDefenseHub />}
            {activeTab === 'micro' && <MicrovascularDefense />}
            {activeTab === 'macro' && <MacrovascularDefense />}
            {activeTab === 'lifestyle' && <LifestyleNavigator />}
            {activeTab === 'footcare' && <FootCareSpecialist />}
            {activeTab === 'diet' && <AdvancedDietProtocol />}
            {activeTab === 'cessation' && <CessationSpecialist />}
            {activeTab === 'sickday' && <SickDayProtocol />}
            {activeTab === 'support' && <PsychologicalDefense />}
          </div>
        </div>

        {/* Cross-Cutting Clinical Utilities */}
        <ResourceHub />
        <DiabetesInsights />
        <ClinicalConsultation />

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
