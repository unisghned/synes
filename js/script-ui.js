// ========================================================
// Main UI interactions only (no Firebase)
// ========================================================

// ========================================================
// 1. KAMUS DATA KONTEN UNTUK SISTEM PREVIEW JENDELA MODAL
// ========================================================
const modalData = {
  stage: {
    title: "Panggung Utama Synesthesia 2024",
    badge: "Main Stage Area",
    desc: "Panggung Utama Synesthesia 2024 dikonsep megah dengan rancangan tata tata cahaya sorot Moving Beam cerdas serta instalasi sistem pengeras suara berkekuatan tinggi dari tim teknisi ahli profesional kelas konser akbar. Panggung megah ini didedikasikan penuh sebagai saksi bisu bersatunya gelombang harmoni melodi, gempita keceriaan sorak penonton, serta kilau apresiasi ekspresi performa mahakarya seni anak muda.",
    images: [
      "assets/panggung.JPG",
      "assets/PANGGUNG (1).JPG",
      "assets/PANGGUNG (2).JPG",
      "assets/PANGGUNG (3).JPG",
      "assets/PANGGUNG (4).JPG",
      "assets/PANGGUNG (5).JPG",
      "assets/PANGGUNG (6).JPG"
    ]
  },
  music: {
    title: "Musik Sesi (Penampilan Band Pilihan)",
    badge: "Live Band Performance",
    desc: "Sesi eksklusif panggung musik yang didedikasikan khusus menyajikan aransemen melodi instrumen lagu terbaik dari deretan grup band audisi internal sekolah berprestasi serta musisi lokal berbakat. Membawa tempo ketukan energi tinggi distorsi melodi gitar yang memukau palet jiwa, memicu gemuruh keseruan para pengunjung di sekeliling panggung festival.",
    images: [
      "assets/BAND (1).JPG",
      "assets/BAND (2).JPG",
      "assets/BAND (3).JPG",
      "assets/BAND (4).JPG",
      "assets/BAND (5).JPG",
      "assets/BAND (6).JPG",
      "assets/BAND (7).JPG",
      "assets/BAND (8).JPG",
      "assets/BAND (9).JPG",
      "assets/BAND (10).JPG",
      "assets/BAND (11).JPG",
      "assets/BAND (12).JPG",
      "assets/BAND (13).JPG",
      "assets/BAND (14).JPG",
      "assets/BAND (15).JPG",
      "assets/BAND (16).JPG",
      "assets/BAND (17).JPG",
      "assets/BAND (18).JPG",
      "assets/BAND (19).JPG",
      "assets/BAND (20).JPG",
      "assets/BAND (21).JPG",
      "assets/BAND (22).JPG",
      "assets/BAND (23).JPG",
      "assets/BAND (24).JPG",
      "assets/BAND (25).JPG",
      "assets/BAND (26).JPG",
      "assets/BAND (27).JPG",
      "assets/BAND (28).JPG",
      "assets/BAND (29).JPG",
      "assets/BAND (30).JPG",
      "assets/BAND (31).JPG",
      "assets/BAND (32).JPG",
      "assets/BAND (33).JPG",
      "assets/BAND (34).JPG",
      "assets/BAND (35).JPG",
      "assets/BAND (36).JPG",
      "assets/BAND (37).JPG",
      "assets/BAND (38).JPG",
      "assets/BAND (39).JPG",
      "assets/BAND (40).JPG",
      "assets/BAND (41).JPG",
      "assets/BAND (42).JPG",
      "assets/BAND (43).JPG",
      "assets/BAND (44).JPG"
    ]
  },
  dance: {
    title: "Dance modern dan tradisional",
    badge: "Art & Cultural Show",
    desc: "Kolaborasi gerakan koreografi ekspresif dinamis modern dance terkemuka dengan keanggunan penjiwaan tarian etnik nusantara Indonesia tradisional yang kaya akan nilai budaya leluhur. Menampilkan perpaduan visual kostum dinamis warna-warni memikat mata demi meningkatkan apresiasi keragaman seni gerak kultural holistik nusantara.",
    images: [
      "assets/DANCE (1).JPG",
      "assets/DANCE (2).JPG",
      "assets/DANCE (3).JPG",
      "assets/DANCE (4).JPG",
      "assets/DANCE (5).JPG",
      "assets/DANCE (6).JPG",
      "assets/DANCE (7).JPG",
      "assets/DANCE (8).JPG",
      "assets/DANCE (9).JPG",
      "assets/DANCE (10).JPG",
      "assets/DANCE (11).JPG",
      "assets/DANCE (12).JPG",
      "assets/DANCE (13).JPG"
    ]
  },
  bazaar: {
    title: "Kuliner Kreatif & Area Bazaar Stand",
    badge: "Bazaar & Merchant Tenants",
    desc: "Area zona eksklusif jajaran stan festival kuliner jajanan nusantara Food-Truck pilihan serta lapak kreatif tenant UMKM siswa. Menyediakan aneka santapan lezat pelepas dahaga, spot bersantai ria melepas penat bersama rekan sejawat, sekaligus stan pusat merchandise cinderamata resmi original Synesthesia 2024.",
    images: [
      "assets/TENANT.JPG",
      "assets/TENANT (1).JPG",
      "assets/TENANT (2).JPG",
      "assets/TENANT (3).JPG",
      "assets/TENANT (4).JPG",
      "assets/TENANT (5).JPG",
      "assets/TENANT (6).JPG",
      "assets/TENANT (7).JPG",
      "assets/TENANT (8).JPG"
    ]
  },
  aruma: {
    title: "Guest Star Utama: Aruma",
    badge: "Guest Star Performance",
    desc: "Penyanyi solois nasional berbakat, Aruma, sukses menghipnotis ribuan pasang mata audiens melalui petikan nada gitar akustik dan lantunan suara emas merdu lagu hits andalannya yang emosional. Membawa keheningan romantis syahdu yang mendalam, menyentuh relung hati sanubari seluruh penonton festival malam puncak.",
    images: [
      "assets/ARUMA.JPG",
      "assets/ARUMA (1).JPG",
      "assets/ARUMA (2).JPG",
      "assets/ARUMA (3).JPG",
      "assets/ARUMA (4).JPG",
      "assets/ARUMA (5).JPG",
      "assets/ARUMA (6).JPG",
      "assets/ARUMA (7).JPG",
      "assets/ARUMA (8).JPG",
      "assets/ARUMA (9).JPG"
    ]
  },
  hivi: {
    title: "Guest Star Utama: HiVi!",
    badge: "Guest Star Performance",
    desc: "Grup band pop legendaris ternama tanah air Indonesia, HiVi!, mengguncang arena panggung utama dengan rangkaian lagu hits super ceria andalan mereka penuh vibrasi positif. Mengajak seluruh lautan manusia berdendang bernyanyi bersama dalam kemeriahan selebrasi penutup malam puncak festival Synesthesia 2024.",
    images: [
      "assets/HIVI.JPG",
      "assets/HIVI (1).JPG",
      "assets/HIVI (2).JPG",
      "assets/HIVI (3).JPG",
      "assets/HIVI (4).JPG",
      "assets/HIVI (5).JPG",
      "assets/HIVI (6).JPG",
      "assets/HIVI (7).JPG"
    ]
  },
  zaga: {
    title: "Profil Maskot Penting: Zaga 🐘⚡",
    badge: "Official Mascot Profile",
    desc: "Zaga hadir berwujud karakter gajah tangguh perkasa mandiri yang melambangkan pondasi utama kekuatan internal organisasi, konsistensi komitmen kerja keras kepanitiaan, serta pilar energi besar yang menopang penuh terwujudnya kesuksesan mahakarya festival Synesthesia dari awal perancangan hingga garis akhir.",
    images: ["assets/Zaga.png"]
  },
  lala: {
    title: "Profil Maskot Penting: Lala 🐘🌸",
    badge: "Official Mascot Profile",
    desc: "Lala mendampingi Zaga sebagai karakter maskot gajah betina yang super imut, ramah, dan penuh keceriaan tanpa batas. Karakter Lala memancarkan hospitality kehangatan persahabatan sejati, menyapa riang seluruh pengunjung arena festival, serta menyebarkan getaran aura kegembiraan positif.",
    images: ["assets/Lala.png"]
  },
  rocky: {
    title: "Profil Maskot Penting: Rocky 🎸🔥",
    badge: "Official Mascot Profile",
    desc: "Rocky merepresentasikan gelora distorsi melodi petikan gitar elektrik yang berani, merdeka, bebas, dan penuh gelora ekspresi eksploratif. Karakter Rocky melambangkan kebebasan jiwa muda berekspresi tanpa batas dalam menembus ruang kreasi melodi orisinalitas seni musik.",
    images: ["assets/Rocky.png"]
  },
  kila: {
    title: "Profil Maskot Penting: Kila 🎻✨",
    badge: "Official Mascot Profile",
    desc: "Kila melambangkan keanggunan ritme kedamaian melodi akustik yang menyejukkan sanubari serta keindahan estetika visual harmonis. Kila bertugas menyeimbangkan gelora distorsi festival dengan sentuhan kehalusan estetika seni, menyinari kilau palet keindahan seni jiwa.",
    images: ["assets/Kila.png"]
  }
};

// ========================================================
// 2. MODAL INTERAKTIF (GLOBAL WINDOW)
// ========================================================
let activeModalImages = [];
let currentModalSlideIdx = 0;

window.openItemModal = function(key) {
  const data = modalData[key];
  if(!data) return;

  const modalTitle = document.getElementById('modal-title');
  const modalBadge = document.getElementById('modal-badge');
  const modalDesc = document.getElementById('modal-desc');
  const track = document.getElementById('modal-carousel-track');
  const modal = document.getElementById('recap-modal');

  if(modalTitle) modalTitle.textContent = data.title;
  if(modalBadge) modalBadge.textContent = data.badge;
  if(modalDesc) modalDesc.textContent = data.desc;

  activeModalImages = data.images;
  currentModalSlideIdx = 0;

  if(track) {
    track.innerHTML = '';
    activeModalImages.forEach((imgSrc) => {
      const slideDiv = document.createElement('div');
      slideDiv.className = "w-full h-full shrink-0 bg-cover bg-center";
      slideDiv.style.backgroundImage = `url('${imgSrc}')`;
      track.appendChild(slideDiv);
    });
    updateModalSlidePosition();
  }

  if(modal) modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
};

window.closeItemModal = function() {
  const modal = document.getElementById('recap-modal');
  if(modal) modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
};

window.moveModalSlide = function(dir) {
  if(activeModalImages.length <= 1) return;
  currentModalSlideIdx = (currentModalSlideIdx + dir + activeModalImages.length) % activeModalImages.length;
  updateModalSlidePosition();
};

function updateModalSlidePosition() {
  const track = document.getElementById('modal-carousel-track');
  if(track) track.style.transform = `translateX(-${currentModalSlideIdx * 100}%)`;
}

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') window.closeItemModal();
});

window.addEventListener('click', function(e) {
  const modal = document.getElementById('recap-modal');
  if (e.target === modal) window.closeItemModal();
});

// ========================================================
// 3. AUDIO & NAVIGATION UI
// ========================================================
window.toggleMusic = function() {
  const audioEngine = document.getElementById('bg-music');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');

  if (!audioEngine) return;

  if (audioEngine.paused) {
    audioEngine.play().catch(e => console.log("Playback diblokir browser:", e));
    if(playIcon) playIcon.classList.add('hidden');
    if(pauseIcon) pauseIcon.classList.remove('hidden');
  } else {
    audioEngine.pause();
    if(playIcon) playIcon.classList.remove('hidden');
    if(pauseIcon) pauseIcon.classList.add('hidden');
  }
};

window.setVolume = function(val) {
  const audioEngine = document.getElementById('bg-music');
  if(audioEngine) audioEngine.volume = val;
};

window.toggleMobileMenu = function() {
  const menu = document.getElementById('mobile-menu');
  if(menu) menu.classList.toggle('hidden');
};

// Pastikan hamburger hanya membuka/menutup mobile menu (bukan toggle class lain)
document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('hamburger-menu');
  const menu = document.getElementById('mobile-menu');
  if (burgerBtn && menu) {
    burgerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      menu.classList.toggle('hidden');
    });
  }
});

window.scrollCarousel = function(dir) {
  const container = document.getElementById('recap-items-container');
  const itemWidth = 350;
  if(container) container.scrollBy({ left: dir * itemWidth, behavior: 'smooth' });
};

// ========================================================
// 4. SCROLL REVEAL ENGINE
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    revealElements.forEach(el => observer.observe(el));
  }

  const burgerBtn = document.getElementById('hamburger-menu');
  if (burgerBtn) burgerBtn.addEventListener('click', window.toggleMobileMenu);
});

