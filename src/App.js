import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

const dataAnggota = [
  {
    id: "anjani-astagina",
    nama: "Anjani Astagina",
    nim: "253140700111035",
    kelas: "T2-A • Group 5",
    jurusan: "Teknologi Informasi",
    domisili: "Malang",
    foto: "/images/anjani.jpg",
    tentang: "Seorang mahasiswa jurusan Teknologi Informasi dari Fakultas Vokasi Universitas Brawijaya asal Malang yang memiliki ketertarikan mendalam pada pengembangan antarmuka pengguna serta front-end development untuk aplikasi interaktif, terutama pada games, karena saya sendiri telah tertarik dan mengenal games sedari kecil. Saya adalah pribadi yang senang mempelajari hal baru dan lingkungan baru, serta memiliki rasa ingin tahu yang tinggi terhadap perkembangan teknologi modern dan industri kreatif digital. Kedepannya, saya berharap dapat belajar menjadi seorang Front-end Developer di industri yang mampu menciptakan antarmuka yang intuitif, imersif, dan menarik, serta turut berkontribusi dalam menghadirkan pengalaman bermain yang bermakna bagi masyarakat luas di masa depan."
  },
  {
    id: "tzurayya-aisyah",
    nama: "Tzurayya Aisyah",
    nim: "253140700111037",
    kelas: "T2-A • Group 5",
    jurusan: "Teknologi Informasi",
    domisili: "Bekasi",
    foto: "/images/tzurayya.jpeg", 
    tentang: "Halo! Saya merupakan mahasiswi program studi Teknologi Informasi di Universitas Brawijaya yang memiliki minat besar dalam bidang pengembangan aplikasi web serta Cyber Security. Selama perkuliahan, saya telah mempelajari dasar-dasar pemrograman seperti ReactJS dan Tailwind CSS, yang kemudian saya terapkan dalam pembuatan mini project ini.Saya adalah pribadi yang mampu bekerja sama dalam tim, cepat beradaptasi, dan memiliki semangat belajar yang tinggi terhadap perkembangan teknologi. Melalui project biodata kelompok ini, saya mendapatkan pengalaman berharga dalam berkolaborasi menggunakan GitHub serta memahami alur pengembangan proyek secara terstruktur. Ke depannya, saya bercita-cita menjadi seorang Front-end Developer yang dapat mengembangkan tampilan aplikasi yang menarik, interaktif, dan memberikan manfaat bagi banyak orang."
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

// HALAMAN DAFTAR (HOME)
function Home() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <header className="mb-20 text-center animate-bounce-slow">
        <span className="px-6 py-2 bg-white border-2 border-[#5C4033] rounded-full text-[10px] font-black tracking-[0.3em] uppercase shadow-[4px_4px_0px_#5C4033] mb-4 inline-block">
          Vokasi UB • Group 5
        </span>
        <h1 className="text-6xl md:text-9xl font-black text-[#432C23] leading-none uppercase font-['Outfit']">
          GROUP FIVE<br/>
          <span className="text-[#A67B5B] italic">DIRECTORY</span>
        </h1>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {dataAnggota.map((item) => (
          <Link to={`/profile/${item.id}`} key={item.id} className="group">
            <div className="bg-white border-4 border-[#5C4033] p-6 rounded-[2.5rem] shadow-[10px_10px_0px_#5C4033] transition-all duration-500 hover:-translate-y-3 hover:shadow-[18px_18px_0px_#A67B5B]">
              <div className="aspect-square rounded-3xl overflow-hidden mb-6 border-2 border-[#F5EFE6] bg-slate-100">
                <img src={item.foto} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt={item.nama} />
              </div>
              <h2 className="text-3xl font-black text-[#432C23] leading-none uppercase font-['Outfit']">{item.nama}</h2>
              <p className="text-[#A67B5B] font-bold mb-6">{item.nim}</p>
              <div className="w-full py-3 px-6 rounded-2xl border-2 border-[#5C4033] bg-[#FAF7F0] font-black text-[10px] tracking-widest uppercase flex justify-between items-center group-hover:bg-[#5C4033] group-hover:text-white transition-all">
                View Profile <span>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// HALAMAN DETAIL (PROFILE)
function ProfileDetail() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const user = dataAnggota.find((a) => a.id === id);

  if (!user) return <div className="text-center p-20 font-bold">User Not Found</div>;

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <button 
        onClick={() => navigate('/')} 
        className="mb-10 inline-flex items-center gap-2 text-xs font-bold border-2 border-[#5C4033] px-6 py-2.5 rounded-full bg-white shadow-[4px_4px_0px_#5C4033] hover:bg-[#5C4033] hover:text-white transition-all"
      >
        ← BACK TO DIRECTORY
      </button>

      <div className="bg-white border-4 border-[#5C4033] p-10 rounded-[2.5rem] shadow-[10px_10px_0px_#A67B5B] flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/3">
          <img src={user.foto} className="rounded-[2rem] border-4 border-[#A67B5B] w-full aspect-square object-cover shadow-lg" alt={user.nama} />
        </div>
        
        <div className="w-full md:w-2/3 space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-[#432C23] uppercase font-['Outfit'] leading-none">{user.nama}</h1>
          <p className="text-2xl font-bold text-[#A67B5B] border-b-4 border-[#EAD8C0] inline-block pb-1">{user.nim}</p>
          
          <div className="grid grid-cols-2 gap-4">
             {[
               { label: 'Class', value: user.kelas },
               { label: 'Program', value: user.jurusan },
               { label: 'Location', value: user.domisili },
               { label: 'Faculty', value: "Vokasi UB" }
             ].map((info, i) => (
               <div key={i} className="bg-[#F5EFE6] p-4 rounded-xl border-2 border-[#A67B5B] shadow-[4px_4px_0px_#5C4033]">
                  <p className="text-[9px] font-black text-[#A67B5B] uppercase tracking-widest mb-1">{info.label}</p>
                  <p className="text-sm font-bold text-[#5C4033] uppercase">{info.value}</p>
               </div>
             ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-[#FAF7F0] border-4 border-[#5C4033] p-10 rounded-[2.5rem] shadow-[8px_8px_0px_#5C4033] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-3 h-full bg-[#A67B5B]"></div>
        <h3 className="font-black text-[#5C4033] uppercase border-b-2 border-[#EAD8C0] mb-6 pb-1 inline-block font-['Outfit'] text-xl">Personal Biography</h3>
        <p className="italic font-semibold text-[#432C23] leading-relaxed text-lg">"{user.tentang}"</p>
      </div>
    </div>
  );
}

// ROUTING
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F5EFE6] font-['Plus_Jakarta_Sans'] text-[#432C23] p-4 relative overflow-x-hidden">
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@900&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
            @keyframes bounceSlow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
            .animate-bounce-slow { animation: bounceSlow 4s infinite ease-in-out; }
          `}
        </style>

        {/* Ornamen Background */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#EAD8C0]/30 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#D2B48C]/20 blur-[120px] rounded-full"></div>
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<ProfileDetail />} />
        </Routes>
      </div>
    </Router>
  );
}