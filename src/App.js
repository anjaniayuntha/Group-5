import React, { useState } from 'react';

// HALAMAN PROFIL
const ProfilePage = ({ data, onBack }) => (
  <div className="animate-in slide-in-from-right fade-in duration-700 max-w-5xl mx-auto relative z-10 text-left">
    <button onClick={onBack} className="mb-12 flex items-center gap-3 text-slate-500 hover:text-white transition-all group font-bold tracking-widest text-[10px] uppercase">
      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500 transition-all">
        <span className="text-white group-hover:-translate-x-0.5 transition-transform">←</span>
      </div>
      Back to Home
    </button>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 bg-[#0B0F1A]/60 border border-white/10 rounded-[3.5rem] p-8 md:p-16 backdrop-blur-3xl shadow-3xl overflow-hidden relative">
      <div className="md:col-span-5 relative">
        <div className={`relative p-1 rounded-[3rem] bg-gradient-to-br ${data.warna}`}>
          <div className="rounded-[2.8rem] overflow-hidden aspect-[3/4] bg-slate-900">
            <img src={data.foto} alt={data.nama} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="md:col-span-7 flex flex-col justify-center">
        <h4 className={`inline-block w-max px-3 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase mb-4 bg-gradient-to-r ${data.warna} text-white`}>
          Student Profile
        </h4>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-2 leading-none tracking-tighter">{data.nama}</h1>
        <p className="text-xl font-mono text-blue-500/80 mb-8">{data.nim}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="border-l-2 border-white/10 pl-4"><p className="text-[9px] text-slate-500 uppercase font-black tracking-[0.2em] mb-1">Class</p><p className="text-sm text-slate-200 font-semibold uppercase">{data.kelas}</p></div>
          <div className="border-l-2 border-white/10 pl-4"><p className="text-[9px] text-slate-500 uppercase font-black tracking-[0.2em] mb-1">Prodi</p><p className="text-sm text-slate-200 font-semibold uppercase">{data.jurusan}</p></div>
          <div className="border-l-2 border-white/10 pl-4"><p className="text-[9px] text-slate-500 uppercase font-black tracking-[0.2em] mb-1">Location</p><p className="text-sm text-slate-200 font-semibold uppercase">{data.domisili}</p></div>
        </div>

        <div className="bg-black/40 p-8 rounded-[2rem] border border-white/5 italic">
          <p className="text-slate-400 leading-relaxed text-sm md:text-base whitespace-pre-line">
            "{data.tentang}"
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // DATA ANGGOTA 
  const dataAnggota = [
    {
      id: "anjani-astagina",
      nama: "Anjani Astagina",
      nim: "253140700111035",
      kelas: "T2-A",
      jurusan: "Teknologi Informasi",
      domisili: "Malang",
      foto: "/images/anjani.jpeg",
      warna: "from-blue-600 to-cyan-400",
      tentang: "Anjani, silakan isi biografi kamu di sini minimal 100 kata agar memenuhi syarat penilaian tugas project ini..."
    },
    {
      id: "tzurayya-aisyah",
      nama: "Tzurayya Aisyah Priantika",
      nim: "253140700111037",
      kelas: "T2-A",
      jurusan: "Teknologi Informasi",
      domisili: "Depok",
      foto: "/images/tzurayya.jpeg", 
      warna: "from-emerald-500 to-cyan-500",
      tentang: "Tzurayya, silakan isi biografi kamu di sini minimal 100 kata agar memenuhi syarat penilaian tugas project ini..."
    },
    {
      id: "tabina-naila",
      nama: "Tabina Naila Griselda",
      nim: "253140701111031",
      kelas: "T2-A",
      jurusan: "Teknologi Informasi",
      domisili: "Jombang",
      foto: "/images/tabina.jpeg",
      warna: "from-purple-600 to-pink-400",
      tentang: "Halo! Saya adalah mahasiswi program studi Teknologi Informasi di Universitas Brawijaya yang memiliki ketertarikan mendalam pada pengembangan perangkat lunak dan desain antarmuka pengguna (UI/UX). Selama menempuh pendidikan di semester ini, saya telah mempelajari berbagai dasar pemrograman seperti ReactJS dan Tailwind CSS yang saya implementasikan langsung dalam mini project ini. \n\nSaya adalah pribadi yang senang bekerja sama dalam tim, mudah beradaptasi dengan lingkungan baru, serta memiliki rasa ingin tahu yang tinggi terhadap perkembangan teknologi masa kini. Melalui project biodata kelompok ini, saya belajar banyak mengenai kolaborasi menggunakan GitHub serta bagaimana mengelola sebuah proyek secara sistematis. Cita-cita saya adalah menjadi seorang Front-end Developer yang mampu menciptakan solusi digital inovatif dan bermanfaat bagi masyarakat luas di masa depan." 
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] font-sans text-slate-300 p-10 md:p-20 overflow-x-hidden relative">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full"></div>
      </div>

      {currentPage === 'home' ? (
        <div className="relative z-10 text-center animate-in fade-in zoom-in duration-700">
          <header className="mb-20">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter uppercase">Group 5 Biodata</h1>
            <p className="text-blue-500 font-bold tracking-[0.5em] uppercase text-xs">Vokasi Universitas Brawijaya</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {dataAnggota.map((item) => (
              <div key={item.id} onClick={() => setCurrentPage(item.id)} className="group cursor-pointer bg-slate-900/40 border border-white/10 p-6 rounded-[2.5rem] hover:-translate-y-4 transition-all duration-500">
                <div className="aspect-square rounded-3xl overflow-hidden mb-6">
                  <img src={item.foto} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt={item.nama} />
                </div>
                <h2 className="text-xl font-bold text-white mb-1 leading-tight">{item.nama}</h2>
                <p className="text-slate-500 text-xs mb-4 font-mono">{item.nim}</p>
                <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest group-hover:underline">Explore Profile →</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <ProfilePage data={dataAnggota.find(a => a.id === currentPage)} onBack={() => setCurrentPage('home')} />
      )}
    </div>
  );
}