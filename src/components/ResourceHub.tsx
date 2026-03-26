"use client"

import { motion } from "framer-motion"
import { 
  Play, 
  Mic, 
  Download, 
  HelpCircle, 
  ExternalLink, 
  ChevronRight,
  Video,
  FileText,
  Clock,
  MessageCircle,
  VideoIcon
} from "lucide-react"

const resources = {
  videos: [
    { title: "Basics of T1D Management", duration: "12:45", thumbnail: "bg-primary/20", type: "Clinical Masterclass" },
    { title: "Using Insulin Pumps (AID)", duration: "08:20", thumbnail: "bg-emerald-500/20", type: "Tech Guide" }
  ],
  podcasts: [
    { title: "Living with T1D: Patient Stories", duration: "45:00", host: "Dr. Sharma", type: "Patient Perspectives" },
    { title: "2025 Diabetes Research Update", duration: "32:15", host: "Clinical Board", type: "Scientific Journal" }
  ],
  downloads: [
    { title: "Carb Counting Cheat Sheet", format: "PDF", size: "1.2 MB" },
    { title: "Hypoglycemia Emergency Protocol", format: "PDF", size: "850 KB" }
  ],
  faqs: [
    { q: "Can I exercise during the honeymoon phase?", a: "Yes, but close monitoring is mandatory as insulin needs may drop further during physical activity." },
    { q: "How often should I test for ketones?", a: "Whenever blood sugar is persistently >250 mg/dL or during any illness." }
  ],
  usefulLinks: [
    { label: "ISPAD Clinical Guidelines", url: "#" },
    { label: "Diabetes Technology Registry", url: "#" }
  ]
}

export function ResourceHub() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24 border-t border-border">
      
      <div className="space-y-4 text-center lg:text-left">
        <h2 className="text-4xl lg:text-5xl font-black text-foreground tracking-tighter">
          Educational <span className="text-primary">Stewardship</span> Hub
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl font-medium">
          Access curated clinical media, research PDFs, and expert-led discussions.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Video & Podcasts: Media Section */}
        <div className="lg:col-span-2 space-y-8">
           <div className="grid md:grid-cols-2 gap-8">
              {/* Videos */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Video className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Videos</h3>
                </div>
                <div className="space-y-4">
                  {resources.videos.map((vid, i) => (
                    <div key={i} className="group p-4 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all cursor-pointer">
                       <div className={`w-full h-32 rounded-xl mb-4 ${vid.thumbnail} flex items-center justify-center relative overflow-hidden`}>
                          <Play className="w-8 h-8 text-white fill-current opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                          <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 rounded text-[9px] font-black text-white">{vid.duration}</div>
                       </div>
                       <p className="text-[10px] text-primary font-black uppercase tracking-widest">{vid.type}</p>
                       <h4 className="text-sm font-bold text-foreground mt-1 group-hover:text-primary transition-colors">{vid.title}</h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Podcasts */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mic className="w-5 h-5 text-secondary" />
                  <h3 className="text-xl font-bold text-foreground">Podcasts</h3>
                </div>
                <div className="space-y-4">
                  {resources.podcasts.map((pod, i) => (
                    <div key={i} className="group p-5 bg-card border border-border rounded-2xl hover:border-secondary/30 transition-all cursor-pointer flex gap-4">
                       <div className="p-3 bg-secondary/10 rounded-xl h-fit">
                          <Mic className="text-secondary w-5 h-5" />
                       </div>
                       <div>
                          <p className="text-[9px] text-slate-500 font-black uppercase">{pod.type}</p>
                          <h4 className="text-sm font-bold text-foreground mt-0.5 group-hover:text-secondary transition-colors line-clamp-1">{pod.title}</h4>
                          <div className="flex items-center gap-3 mt-2 text-[10px] text-slate-500 font-medium">
                             <Clock className="w-3 h-3" /> {pod.duration}
                             <span className="opacity-30">|</span>
                             <span>By {pod.host}</span>
                          </div>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
           </div>
        </div>

        {/* Sidebar: Downloads & Useful Links */}
        <div className="space-y-8">
           {/* Downloads */}
           <div className="p-8 glass-card border-border rounded-[2.5rem] space-y-6">
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Downloads</h3>
              </div>
              <div className="space-y-3">
                 {resources.downloads.map((dl, i) => (
                   <div key={i} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-white/5 border border-border rounded-xl group hover:bg-primary/5 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                            <FileText className="text-red-500 w-4 h-4" />
                         </div>
                         <div>
                            <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">{dl.title}</p>
                            <p className="text-[9px] text-slate-500 font-bold uppercase">{dl.format} • {dl.size}</p>
                         </div>
                      </div>
                      <Download className="w-4 h-4 text-slate-400 group-hover:text-primary transition-all" />
                   </div>
                 ))}
              </div>
           </div>

           {/* Useful Links */}
           <div className="p-8 glass-card border-border rounded-[2.5rem] bg-secondary/5 space-y-6">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                 <ExternalLink className="w-5 h-5 text-secondary" />
                 Useful Links
              </h3>
              <div className="flex flex-col gap-3">
                 {resources.usefulLinks.map((link, i) => (
                   <a key={i} href={link.url} className="flex items-center justify-between text-xs font-bold text-slate-500 hover:text-secondary transition-colors group">
                      {link.label}
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1" />
                   </a>
                 ))}
              </div>
           </div>
        </div>
      </div>

      {/* FAQ Section: Accordion Placeholder */}
      <div className="glass-card border-border rounded-[3rem] p-12 space-y-12">
        <div className="flex items-center gap-4">
           <HelpCircle className="w-8 h-8 text-primary" />
           <h3 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
           {resources.faqs.map((faq, i) => (
             <div key={i} className="space-y-3">
                <p className="text-sm font-black text-foreground flex items-center gap-2">
                   <MessageCircle className="w-4 h-4 text-primary" />
                   {faq.q}
                </p>
                <p className="text-xs text-slate-500 border-l-2 border-primary/20 pl-4 py-1 leading-relaxed font-medium">
                   {faq.a}
                </p>
             </div>
           ))}
        </div>
      </div>

    </section>
  )
}
