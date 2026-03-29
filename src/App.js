import React, { useState } from 'react';

const ProfilePage = ({ data, onBack }) => (
  <div className="animate-in fade-in zoom-in duration-500 max-w-6xl mx-auto py-12 px-6 font-['Plus_Jakarta_Sans']">
    <button 
      onClick={onBack} 
      className="mb-12 inline-flex items-center gap-2 text-xs font-bold border-2 border-[#5C4033] px-6 py-2.5 rounded-full hover:bg-[#5C4033] hover:text-white transition-all shadow-[4px_4px_0px_#5C4033]"
    >
      <span>←</span> BACK TO DIRECTORY
    </button>

    <div className="flex flex-col lg:flex-row gap-12 items-center">
      <div className="w-full lg:w-2/5 flex justify-center">
        <div className="p-2 rounded-[2.5rem] border-4 border-[#5C4033] shadow-[10px_10px_0px_#A67B5B] bg-white">
          <div className="rounded-[2rem] overflow-hidden w-full aspect-square max-w-[400px] bg-slate-50">
            <img 
              src={data.foto} 
              alt={data.nama} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-3/5 space-y-8">
        <div className="space-y-4 text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 border-2 border-[#5C4033] rounded-xl text-[10px] font-black uppercase tracking-widest bg-[#EAD8C0] text-[#5C4033] shadow-[3px_3px_0px_#5C4033]">
            Student Member
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#432C23] leading-none tracking-tighter uppercase font-['Outfit']">
            {data.nama}
          </h1>
          <p className="text-xl font-bold text-[#A67B5B] tracking-tighter border-b-4 border-[#EAD8C0] inline-block pb-1">{data.nim}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Class', value: data.kelas },
            { label: 'Program', value: data.jurusan },
            { label: 'Location', value: data.domisili },
            { label: 'Faculty', value: "Vokasi UB" }
          ].map((item, index) => (
            <div key={index} className="bg-white border-2 border-[#5C4033] p-5 rounded-2xl shadow-[5px_5px_0px_#5C4033]">
              <p className="text-[9px] uppercase font-black tracking-widest text-[#A67B5B] mb-1">{item.label}</p>
              <p className="text-sm font-bold text-[#5C4033] uppercase leading-tight">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#FAF7F0] border-4 border-[#5C4033] p-8 rounded-[2rem] shadow-[8px_8px_0px_#5C4033] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#A67B5B]"></div>
          <p className="text-[#5C4033] leading-relaxed font-semibold italic text-base relative z-10">
            "{data.tentang}"
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const dataAnggota = [
    {
      id: "anjani-astagina",
      nama: "Anjani Astagina",
      nim: "253140700111035",
      kelas: "T2-A • Group 5",
      jurusan: "Teknologi Informasi",
      domisili: "Malang",
      foto: "/images/anjani.jpeg",
      tentang: "isi biografi kamu di sini minimal 100 kata yaa"
    },
    {
      id: "tzurayya-aisyah",
      nama: "Tzurayya Aisyah",
      nim: "253140700111037",
      kelas: "T2-A • Group 5",
      jurusan: "Teknologi Informasi",
      domisili: "Depok",
      foto: "/images/tzurayya.jpeg", 
      tentang: "isi biografi kamu di sini minimal 100 kata yaa"
    },
    {
      id: "tabina-naila",
      nama: "Tabina Naila Griselda",
      nim: "253140701111031",
      kelas: "T2-A • Group 5",
      jurusan: "Teknologi Informasi",
      domisili: "Jombang",
      foto: "/images/tabina.jpeg",
      tentang: "Halo! Saya adalah mahasiswi program studi Teknologi Informasi Fakultas Vokasi di Universitas Brawijaya yang memiliki ketertarikan mendalam pada dunia pengembangan perangkat lunak dan desain antarmuka pengguna (UI/UX). Ketertarikan saya pada dunia visual bermula dari hobi membuat karya digital di Ibis Paint, dan kini saya sangat berambisi untuk mengasah kemampuan desain profesional saya menggunakan Figma untuk menciptakan antarmuka yang estetik. Di sisi lain, saya adalah pribadi yang sangat senang mengeksplorasi dunia tulis-menulis, khususnya di bidang jurnalistik. Hingga saat ini, saya telah memiliki beberapa portofolio artikel dan karya jurnalistik yang berhasil dipublikasikan di koran. Selain menulis berita, saya juga sangat hobi menonton film dan aktif menulis review film sebagai bentuk apresiasi terhadap karya sinematografi. Kegiatan ini seringkali saya lakukan sambil mendengarkan musik di waktu luang, yang bagi saya adalah sumber inspirasi utama dalam bekerja maupun merancang sebuah layout. Saya sangat menikmati bekerja dalam tim karena bagi saya kolaborasi adalah cara terbaik untuk bertukar ide dan belajar hal baru. Dengan gabungan kemampuan desain, ketajaman menulis, dan minat pada teknologi, saya berharap bisa terus berkarya dan menghasilkan solusi digital yang tidak hanya fungsional secara teknis, tetapi juga memiliki nilai seni dan narasi yang kuat." 
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5EFE6] font-['Plus_Jakarta_Sans'] text-[#432C23] p-6 md:p-12 overflow-x-hidden relative">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@900&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
        `}
      </style>

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#EAD8C0]/40 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#D2B48C]/20 blur-[120px] rounded-full"></div>
      </div>

      {currentPage === 'home' ? (
        <div className="relative z-10 animate-in fade-in duration-1000 max-w-7xl mx-auto">
          <header className="mb-24 flex flex-col items-center text-center space-y-4">
            <span className="px-6 py-2 bg-white border-2 border-[#5C4033] rounded-full text-xs font-black tracking-[0.3em] uppercase shadow-[4px_4px_0px_#5C4033]">
              Vokasi UB • Group 5
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-[#432C23] leading-none tracking-tighter uppercase font-['Outfit']">
              GROUP FIVE<br/>
              <span className="text-[#A67B5B] italic drop-shadow-[4px_4px_0px_#5C4033]">DIRECTORY</span>
            </h1>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {dataAnggota.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setCurrentPage(item.id)} 
                className="group cursor-pointer relative"
              >
                <div className="bg-white border-4 border-[#5C4033] p-6 rounded-[2.5rem] shadow-[10px_10px_0px_#5C4033] group-hover:shadow-[18px_18px_0px_#A67B5B] group-hover:-translate-y-3 group-hover:-translate-x-1 transition-all duration-500 ease-out">
                  <div className="aspect-square rounded-3xl overflow-hidden mb-6 border-2 border-[#F5EFE6] shadow-inner bg-slate-50">
                    <img 
                      src={item.foto} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                      alt={item.nama} 
                    />
                  </div>
                  <h2 className="text-3xl font-black text-[#432C23] mb-1 leading-none tracking-tighter uppercase font-['Outfit']">{item.nama}</h2>
                  <p className="text-[#A67B5B] text-sm font-bold tracking-tight mb-6">{item.nim}</p>
                  <div className="w-full py-3 px-6 rounded-2xl border-2 border-[#5C4033] bg-[#FAF7F0] font-black text-[10px] tracking-[0.2em] uppercase flex justify-between items-center group-hover:bg-[#5C4033] group-hover:text-white transition-all shadow-[4px_4px_0px_#5C4033]">
                    View Profile
                    <span>→</span>
                  </div>
                </div>
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