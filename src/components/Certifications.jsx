import { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  Maximize2, 
  X,
  FileCheck2,
  ShieldCheck
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0a0d14]/70">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold uppercase mb-2">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional Certifications & Badges
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            100% genuine and verified industry credentials in Power BI, Advanced SQL, and Artificial Intelligence.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="group relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 overflow-hidden shadow-sm hover:shadow-2xl hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Certificate Image Thumbnail with Preview Trigger */}
                <div 
                  onClick={() => setSelectedCert(cert)}
                  className="relative h-44 w-full bg-slate-950 overflow-hidden cursor-pointer group/img"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-xs">
                    <Maximize2 className="h-4 w-4" />
                    <span>View High-Res Certificate</span>
                  </div>

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 rounded-lg bg-black/70 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono text-cyan-300 border border-white/10">
                    {cert.category}
                  </span>
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 mb-1">
                    <Calendar className="h-3 w-3 text-cyan-500" />
                    <span>Issued: {cert.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-300 mt-0.5">
                    {cert.issuer}
                  </div>

                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-1">
                    Signatory: {cert.authority}
                  </div>

                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills badges */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((sk, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-[11px] text-emerald-500 font-semibold font-mono">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Verified ID</span>
                </span>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="font-semibold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <span>Inspect</span>
                  <ExternalLink className="h-3 w-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* High-Resolution Certificate Modal Preview */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-9990 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in"
            onClick={() => setSelectedCert(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl text-slate-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono">
                    Issuer: {selectedCert.issuer} • ID: {selectedCert.credentialId}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 flex justify-center bg-slate-950 p-2 sm:p-4 rounded-2xl border border-slate-800 overflow-hidden">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[60vh] w-auto rounded-lg object-contain shadow-lg"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span className="text-slate-300">Authority: {selectedCert.authority} ({selectedCert.date})</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedCert.image}
                    download={`${selectedCert.id}.png`}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 font-semibold"
                  >
                    Save Image
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold"
                  >
                    Close Preview
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
