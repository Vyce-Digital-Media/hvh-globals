import React from 'react';
import { FileBadge, CheckCircle, ShieldCheck } from 'lucide-react';

const AccreditationPage = () => {
  const certifications = [
    { name: "FIEO RCMC", file: "FIEO RCMC", desc: "Federation of Indian Export Organisations Registration" },
    { name: "IEC Certificate", file: "IEC certificate", desc: "Importer-Exporter Code Certification" },
    { name: "RCMC EEPC", file: "RCMC EEPC CERTIFICATE", desc: "Engineering Export Promotion Council Registration" }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-12 md:py-24 lg:px-12 max-w-full lg:max-w-[90vw]">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-md text-primary mb-6 md:mb-8 border border-gray-100">
            <FileBadge size={32} className="md:hidden" />
            <FileBadge size={40} className="hidden md:block" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6 tracking-tight uppercase">Our Accreditations</h1>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed font-medium">
            We operate at the highest standards of international trade. Below are the certificates and accreditations we hold with our trusted global partners.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <a 
              key={index} 
              href={`/certi/${cert.file}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center bg-white p-4 rounded-3xl border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 mb-6 relative">
                <img loading="lazy" decoding="async" 
                  src={`/certi/${cert.file}.png`} 
                  alt={cert.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 bg-white text-primary px-6 py-3 rounded-full font-black shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 uppercase tracking-wide">
                    <FileBadge size={18} /> View PDF
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight text-center mb-2">{cert.name}</h3>
              <p className="text-gray-500 font-medium text-center text-sm">{cert.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccreditationPage;
