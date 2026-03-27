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
import { Testimonials } from "@/components/Testimonials"
import { ClinicalDrawer } from "@/components/ClinicalDrawer"
import { ADAGuidelines2024 } from "@/components/ADAGuidelines2024"
import { InsulinFoundations } from "@/components/InsulinFoundations"
import { T2DInsulinStewardship } from "@/components/T2DInsulinStewardship"
import { InsulinInjectionGuide } from "@/components/InsulinInjectionGuide"
import { InsulinSafetyProtocol } from "@/components/InsulinSafetyProtocol"
import { InsulinSideEffects } from "@/components/InsulinSideEffects"
import { DiabetesBasicsHub } from "@/components/DiabetesBasicsHub"
import { GlycemicManagementHub } from "@/components/GlycemicManagementHub"
import { IndianPlateMethod } from "@/components/IndianPlateMethod"
import { NutritionalMasteryHub } from "@/components/NutritionalMasteryHub"
import { MedicationTaxonomyHub } from "@/components/MedicationTaxonomyHub"
import { MentalHealthResilience } from "@/components/MentalHealthResilience"
import { HealthMaintenanceHub } from "@/components/HealthMaintenanceHub"
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

const clinicalPillars = [
  { 
    id: 'foundation', 
    label: 'Basics & Checkups', 
    icon: ShieldCheck, 
    summary: 'The foundations of care and your early checkup schedule.',
    groups: ['Assessment', 'Screening']
  },
  { 
    id: 'type1', 
    label: 'Type 1 Care', 
    icon: Baby, 
    summary: 'Everything for Type 1, from kids to adults.',
    groups: ['Pediatric T1', 'Adult T1']
  },
  { 
    id: 'type2', 
    label: 'Hormones & Health', 
    icon: Users, 
    summary: 'Type 2 care plans and specific health tips for women.',
    groups: ['Type 2 Care', 'Women Health']
  },
  { 
    id: 'macro', 
    label: 'Heart & Organ Care', 
    icon: ShieldEllipsis, 
    summary: 'Protecting your Heart, Kidneys, Eyes, and staying safe.',
    groups: ['Heart', 'Kidney', 'Eye', 'Stroke']
  },
  { 
    id: 'lifestyle', 
    label: 'Daily Life & Mood', 
    icon: MapPin, 
    summary: 'Exercise, healthy eating, and managing your mood.',
    groups: ['Lifestyle', 'Mental Health', 'Nutrition']
  }
]

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [activeSpecialty, setActiveSpecialty] = useState<any>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSpecialty = (item: any) => {
    setActiveSpecialty(item)
    setIsDrawerOpen(true)
  }

  return (
    <main className="min-h-screen relative bg-[#020617] text-slate-200 luxury-gradient overflow-hidden">
      <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Sidebar isOpen={isSidebarOpen} onToggle={setIsSidebarOpen} />
      
      <div className="w-full">
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
          <ClinicalNavigator onSelectSpecialty={openSpecialty} />
        </section>

        {/* Specialist Hub: Simplified Clinical Pillars */}
        <section id="specialist-hub" className="py-24 px-6 max-w-7xl mx-auto space-y-16 scroll-mt-20">
          <div className="text-center space-y-4">
             <h2 className="text-4xl lg:text-6xl font-black text-foreground tracking-tighter">Clinical Specialist Hub</h2>
             <p className="text-muted-foreground max-w-xl mx-auto font-medium text-lg">Focus on a core clinical pillar to access specialized protocols and defensive guidelines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {clinicalPillars.map((pillar, pIdx) => (
              <button
                 key={pIdx}
                 onClick={() => openSpecialty(pillar)}
                 className="group relative flex flex-col items-center p-8 rounded-[2.5rem] bg-card border border-border hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 text-center overflow-hidden"
               >
                 <div className="p-5 rounded-3xl bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform mb-6">
                   <pillar.icon className="w-8 h-8 text-primary" />
                 </div>
                 
                 <div className="space-y-4 flex-1 flex flex-col items-center">
                   <h4 className="text-sm font-black text-foreground tracking-wide uppercase">{pillar.label}</h4>
                   <p className="text-[10px] text-muted-foreground leading-relaxed font-medium line-clamp-3">
                     {pillar.summary}
                   </p>
                 </div>

                 <div className="mt-8 flex items-center justify-center gap-2 group/btn py-3 px-6 rounded-2xl bg-muted text-foreground group-hover:bg-primary group-hover:text-white transition-all w-full">
                   <span className="text-[10px] font-black uppercase tracking-widest">Open Pillar</span>
                   <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                 </div>
                 
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-x-12 -translate-y-12" />
               </button>
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
            <div className="space-y-20">
               {/* Internal Sub-Navigator */}
               <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8 rounded-3xl bg-slate-900/50 border border-white/5">
                  {[
                    { t: 'The Basics', id: 'basics-sec' },
                    { t: 'Maintenance', id: 'maint-sec' },
                    { t: 'Eating Guide', id: 'eating-sec' },
                    { t: 'Medications', id: 'meds-sec' },
                    { t: 'Resilience', id: 'res-sec' },
                    { t: 'Risk Check', id: 'risk-sec' }
                  ].map(sec => (
                    <button 
                      key={sec.id}
                      onClick={() => document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth' })}
                      className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/40 text-center transition-all group"
                    >
                      <h4 className="text-xs font-black uppercase text-slate-400 group-hover:text-primary transition-colors">{sec.t}</h4>
                    </button>
                  ))}
               </div>

               <div id="basics-sec"><DiabetesBasicsHub /></div>
               <div id="maint-sec"><HealthMaintenanceHub /></div>
               <div id="eating-sec" className="space-y-16">
                  <IndianPlateMethod />
                  <NutritionalMasteryHub />
               </div>
               <div id="meds-sec" className="space-y-16">
                  <MedicationTaxonomyHub />
                  <GlycemicManagementHub />
                  <InsulinFoundations />
                  <InsulinInjectionGuide />
               </div>
               <div id="res-sec"><ResilienceProtocol /></div>
               <div id="risk-sec" className="space-y-16">
                  <DiabetesKnowledgeCenter />
                  <RiskManagement />
               </div>
            </div>
          )}
          {activeSpecialty?.id === 'screening' && <T1ScreeningMonitoring />}
          {activeSpecialty?.id === 'type1' && (
            <div className="space-y-16">
              <ADAGuidelines2024 />
              <GlycemicManagementHub />
              <InsulinFoundations />
              <InsulinInjectionGuide />
              <InsulinSafetyProtocol />
              <InsulinSideEffects />
              <PediatricInsulinTherapy />
            </div>
          )}
          {activeSpecialty?.id === 'adult-t1' && <AdultT1Management />}
          {activeSpecialty?.id === 'type2' && (
            <div className="space-y-16">
              <T2DInsulinStewardship />
              <GlycemicManagementHub />
              <InsulinInjectionGuide />
              <InsulinSafetyProtocol />
              <InsulinSideEffects />
              <Type2Specialist />
            </div>
          )}
          {activeSpecialty?.id === 'women' && <WomenDiabetesSpecialist />}
          {activeSpecialty?.id === 'infection' && <InfectionDefense />}
          {activeSpecialty?.id === 'cardio' && <VascularDefenseHub />}
          {activeSpecialty?.id === 'micro' && <MicrovascularDefense />}
          {activeSpecialty?.id === 'macro' && <MacrovascularDefense />}
          {activeSpecialty?.id === 'lifestyle' && <LifestyleNavigator />}
          {activeSpecialty?.id === 'footcare' && <FootCareSpecialist />}
          {activeSpecialty?.id === 'diet' && (
            <div className="space-y-16">
               <IndianPlateMethod />
               <NutritionalMasteryHub />
               <AdvancedDietProtocol />
            </div>
          )}
          {activeSpecialty?.id === 'medications' && (
            <div className="space-y-16">
               <MedicationTaxonomyHub />
               <InsulinInjectionGuide />
               <InsulinFoundations />
            </div>
          )}
          {activeSpecialty?.id === 'cessation' && <CessationSpecialist />}
          {activeSpecialty?.id === 'sickday' && <SickDayProtocol />}
          {activeSpecialty?.id === 'support' && (
            <div className="space-y-16">
               <MentalHealthResilience />
               <PsychologicalDefense />
            </div>
          )}
        </ClinicalDrawer>

        {/* Cross-Cutting Clinical Utilities */}
        <section className="bg-slate-950/40 py-24">
          <Testimonials />
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
