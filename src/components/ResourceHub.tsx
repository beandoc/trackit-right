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
    { title: "How to Inject Insulin", duration: "04:32", thumbnail: "https://img.youtube.com/vi/6TBaXTh2ECM/maxresdefault.jpg", type: "Patient Guide", url: "https://www.youtube.com/watch?v=6TBaXTh2ECM" },
    { title: "What is Type 1 Diabetes?", duration: "03:45", thumbnail: "https://img.youtube.com/vi/5W7i5TWa2Y8/maxresdefault.jpg", type: "Clinical Intro", url: "https://www.youtube.com/watch?v=5W7i5TWa2Y8" },
    { title: "What is Type 2 Diabetes?", duration: "04:12", thumbnail: "https://img.youtube.com/vi/uOaZeNjiikM/maxresdefault.jpg", type: "Clinical Intro", url: "https://www.youtube.com/watch?v=uOaZeNjiikM" },
    { title: "What is Gestational Diabetes?", duration: "05:24", thumbnail: "https://img.youtube.com/vi/MLxwtwYPkHU/maxresdefault.jpg", type: "Maternal Health", url: "https://www.youtube.com/watch?v=MLxwtwYPkHU" },
    { title: "How to Test Blood Glucose", duration: "03:15", thumbnail: "https://img.youtube.com/vi/jZ4Tujvz9zg/maxresdefault.jpg", type: "Practical Skill", url: "https://www.youtube.com/watch?v=jZ4Tujvz9zg" }
  ],
  podcasts: [
    { title: "अपनी साँस से मापें फैट लॉस", duration: "15:42", host: "Dr. Sreevatsa", type: "Health Tip", url: "/अपनी_साँस_से_मापें_फैट_लॉस.m4a" },
    { title: "Living with T1D: Patient Stories", duration: "45:00", host: "Dr. Sharma", type: "Patient Perspectives", url: "#" },
    { title: "2025 Diabetes Research Update", duration: "32:15", host: "Clinical Board", type: "Scientific Journal", url: "#" }
  ],
  downloads: [
    { title: "Carb Counting Cheat Sheet", format: "PDF", size: "1.2 MB" },
    { title: "Hypoglycemia Emergency Protocol", format: "PDF", size: "850 KB" }
  ],
  faqs: [
    { q: "Can I exercise during the honeymoon phase?", a: "Yes, but close monitoring is mandatory as insulin needs may drop further during physical activity." },
    { q: "How often should I test for ketones?", a: "Whenever blood sugar is persistently >250 mg/dL or during any illness." },
    { q: "What healthy eating habits can I start today?", a: "Focus on balanced meals with lean protein (5-7 oz), stay hydrated (6-8 cups of water), and maintain regular meal times to prevent sugar spikes." },
    { q: "How much weight do I need to lose to improve control?", a: "Even a modest loss of 5-7% of your body weight can significantly improve insulin sensitivity and heart health." },
    { q: "What is the primary treatment for Type 1 Diabetes?", a: "Since the pancreas stops producing insulin, the main treatment is insulin replacement delivered via a pen, syringe, or smart pump." },
    { q: "Why are heart medications often prescribed for diabetes?", a: "Diabetes increases the risk of heart disease; medications like statins or aspirin are tools to help protect your cardiovascular health regardless of initial numbers." },
    { q: "What does Basal (long-acting) insulin do?", a: "Basal insulin works for 24+ hours to keep your sugars stable between meals and during the night." }
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
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Video className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-foreground tracking-tight">Clinical Videos</h3>
                  </div>
                  <button className="text-[10px] font-black uppercase text-slate-500 hover:text-primary transition-colors flex items-center gap-1">VIEW ALL <ChevronRight className="w-3 h-3" /></button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {resources.videos.map((vid, i) => (
                    <a key={i} href={vid.url} target="_blank" rel="noopener noreferrer" className="block group p-3 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all cursor-pointer relative overflow-hidden">
                       <div className="w-full aspect-[16/9] rounded-xl mb-3 bg-slate-950 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                          <img src={vid.thumbnail} alt={vid.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                          <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-primary transition-all z-10 shadow-2xl">
                             <Play className="w-4 h-4 text-white fill-current" />
                          </div>
                          <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 rounded text-[9px] font-black text-white z-10 backdrop-blur-sm shadow-lg">{vid.duration}</div>
                       </div>
                       <div className="space-y-1 px-1">
                          <p className="text-[9px] text-primary font-black uppercase tracking-widest">{vid.type}</p>
                          <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">{vid.title}</h4>
                       </div>
                    </a>
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
                    <a key={i} href={pod.url} target="_blank" rel="noopener noreferrer" className="block group p-5 bg-card border border-border rounded-2xl hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5 transition-all cursor-pointer flex gap-4">
                       <div className="p-3 bg-secondary/10 rounded-xl h-fit group-hover:scale-110 transition-transform">
                          <Mic className="text-secondary w-5 h-5" />
                       </div>
                       <div>
                          <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">{pod.type}</p>
                          <h4 className="text-sm font-black text-foreground mt-0.5 group-hover:text-secondary transition-colors line-clamp-1">{pod.title}</h4>
                          <div className="flex items-center gap-3 mt-2 text-[10px] text-slate-500 font-medium">
                             <Clock className="w-3 h-3" /> {pod.duration}
                             <span className="opacity-30">|</span>
                             <span>By {pod.host}</span>
                          </div>
                       </div>
                    </a>
                  ))}
                </div>
              </div>
           </div>
        </div>

        {/* Sidebar: Downloads & Useful Links */}
        <div className="space-y-8">
           {/* Downloads */}
           <div className="p-6 md:p-8 glass-card border-border rounded-2xl md:rounded-[2.5rem] space-y-6">
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
                            <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">{dl.title}</p>
                            <p className="text-[9px] text-slate-500 font-bold uppercase">{dl.format} • {dl.size}</p>
                         </div>
                      </div>
                      <Download className="w-4 h-4 text-slate-400 group-hover:text-primary transition-all flex-shrink-0" />
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
      <div className="glass-card border-border rounded-3xl md:rounded-[3rem] p-8 md:p-12 space-y-8 md:space-y-12">
        <div className="flex items-center gap-4">
           <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-primary" />
           <h3 className="text-2xl md:text-3xl font-black text-foreground">Frequently Asked Questions</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
           {resources.faqs.map((faq, i) => (
             <div key={i} className="space-y-3">
                <p className="text-sm font-black text-foreground flex items-start gap-2">
                   <MessageCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
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
