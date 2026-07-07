// script.js - Kontrol Interaktif Musik, Animasi Scroll, dan Preview Multi-Carousel Modal

// Kamus Kamus Data Konten Untuk Sistem Preview Jendela Modal & Galeri Carousel Internal
const modalData = {
    stage: {
        title: "Panggung Utama Synesthesia 2024",
        badge: "Main Stage Area",
        desc: "Panggung Utama Synesthesia 2024 dikonsep megah dengan rancangan tata tata cahaya sorot Moving Beam cerdas serta instalasi sistem pengeras suara berkekuatan tinggi dari tim teknisi ahli profesional kelas konser akbar. Panggung megah ini didedikasikan penuh sebagai saksi bisu bersatunya gelombang harmoni melodi, gempita keceriaan sorak penonton, serta kilau apresiasi ekspresi performa mahakarya seni anak muda.",
        images: ["assets/panggung.JPG", "assets/PANGGUNG (1).jpg", "assets/PANGGUNG (2).jpg", "assets/PANGGUNG (3).jpg", "assets/PANGGUNG (4).jpg", "assets/PANGGUNG (5).jpg", "assets/PANGGUNG (6).jpg"]
    },
    music: {
        title: "Musik Sesi (Penampilan Band Pilihan)",
        badge: "Live Band Performance",
        desc: "Sesi eksklusif panggung musik yang didedikasikan khusus menyajikan aransemen melodi instrumen lagu terbaik dari deretan grup band audisi internal sekolah berprestasi serta musisi lokal berbakat. Membawa tempo ketukan energi tinggi distorsi melodi gitar yang memukau palet jiwa, memicu gemuruh keseruan para pengunjung di sekeliling panggung festival.",
        images: ["assets/BAND (1).JPG", "assets/BAND (2).JPG", "assets/BAND (3).JPG", "assets/BAND (4).JPG", "assets/BAND (5).JPG", "assets/BAND (6).JPG", "assets/BAND (7).JPG", "assets/BAND (8).JPG", "assets/BAND (9).JPG", "assets/BAND (10).JPG", "assets/BAND (11).JPG", "assets/BAND (12).JPG", "assets/BAND (13).JPG", "assets/BAND (14).JPG", "assets/BAND (15).JPG", "assets/BAND (16).JPG", "assets/BAND (17).JPG", "assets/BAND (18).JPG", "assets/BAND (19).JPG", "assets/BAND (20).JPG", 
            "assets/BAND (21).JPG", "assets/BAND (22).JPG", "assets/BAND (23).JPG", "assets/BAND (24).JPG", "assets/BAND (25).JPG", "assets/BAND (26).JPG", "assets/BAND (27).JPG", "assets/BAND (28).JPG", "assets/BAND (29).JPG", "assets/BAND (30).JPG", "assets/BAND (31).JPG", "assets/BAND (32).JPG", "assets/BAND (33).JPG", "assets/BAND (34).JPG", "assets/BAND (35).JPG", "assets/BAND (36).JPG", "assets/BAND (37).JPG", "assets/BAND (38).JPG", "assets/BAND (39).JPG", "assets/BAND (40).JPG", "assets/BAND (41).JPG", "assets/BAND (42).JPG", "assets/BAND (43).JPG", "assets/BAND (44).JPG" ]
    },
    dance: {
        title: "Dance modern dan tradisional",
        badge: "Art & Cultural Show",
        desc: "Kolaborasi gerakan koreografi ekspresif dinamis modern dance terkemuka dengan keanggunan penjiwaan tarian etnik nusantara Indonesia tradisional yang kaya akan nilai budaya leluhur. Menampilkan perpaduan visual kostum dinamis warna-warni memikat mata demi meningkatkan apresiasi keragaman seni gerak kultural holistik nusantara.",
        images: ["assets/DANCE (1).JPG", "assets/DANCE (2).JPG", "assets/DANCE (3).JPG", "assets/DANCE (4).JPG", "assets/DANCE (5).JPG", "assets/DANCE (6).JPG", "assets/DANCE (7).JPG", "assets/DANCE (8).JPG", "assets/DANCE (9).JPG", "assets/DANCE (10).JPG", 
            "assets/DANCE (11).JPG", "assets/DANCE (12).JPG", "assets/DANCE (13).JPG", "assets/DANCE (14).JPG", "assets/DANCE (15).JPG", "assets/DANCE (16).JPG", "assets/DANCE (17).JPG", "assets/DANCE (18).JPG", "assets/DANCE (19).JPG", "assets/DANCE (20).JPG"]
    },
    bazaar: {
        title: "Kuliner Kreatif & Area Bazaar Stand",
        badge: "Bazaar & Merchant Tenants",
        desc: "Area zona eksklusif jajaran stan festival kuliner jajanan nusantara Food-Truck pilihan serta lapak kreatif tenant UMKM siswa. Menyediakan aneka santapan lezat pelepas dahaga, spot bersantai ria melepas penat bersama rekan sejawat, sekaligus stan pusat merchandise cinderamata resmi original Synesthesia 2024.",
        images: ["assets/TENANT.JPG", "assets/bg.jpg"]
    },
    aruma: {
        title: "Guest Star Utama: Aruma",
        badge: "Guest Star Performance",
        desc: "Penyanyi solois nasional berbakat, Aruma, sukses menghipnotis ribuan pasang mata audiens melalui petikan nada gitar akustik dan lantunan suara emas merdu lagu hits andalannya yang emosional. Membawa keheningan romantis syahdu yang mendalam, menyentuh relung hati sanubari seluruh penonton festival malam puncak.",
        images: ["assets/ARUMA.JPG", "assets/stage-view.jpg"]
    },
    hivi: {
        title: "Guest Star Utama: HiVi!",
        badge: "Guest Star Performance",
        desc: "Grup band pop legendaris ternama tanah air Indonesia, HiVi!, mengguncang arena panggung utama dengan rangkaian lagu hits super ceria andalan mereka penuh vibrasi positif. Mengajak seluruh lautan manusia berdendang bernyanyi bersama dalam kemeriahan selebrasi penutup malam puncak festival Synesthesia 2024.",
        images: ["assets/HIVI.JPG", "assets/HIVI (1).JPG", "assets/HIVI (2).JPG", "assets/HIVI (3).JPG", "assets/HIVI (4).JPG","assets/HIVI (5).JPG", "assets/HIVI (6).JPG", "assets/HIVI (7).JPG"]
    },
    zaga: {
        title: "Profil Maskot Penting: Zaga 🐘",
        badge: "Official Mascot Profile",
        desc: "Zaga hadir berwujud karakter gajah tangguh perkasa mandiri yang melambangkan pondasi utama kekuatan internal organisasi, konsistensi komitmen kerja keras kepanitiaan, serta pilar energi besar yang menopang penuh terwujudnya kesuksesan mahakarya festival Synesthesia dari awal perancangan hingga garis akhir.",
        images: ["assets/all-mascots.jpg"]
    },
    lala: {
        title: "Profil Maskot Penting: Lala 🐘",
        badge: "Official Mascot Profile",
        desc: "Lala mendampingi Zaga sebagai karakter maskot gajah betina yang super imut, ramah, dan penuh keceriaan tanpa batas. Karakter Lala memancarkan hospitality kehangatan persahabatan sejati, menyapa riang seluruh pengunjung arena festival, serta menyebarkan getaran aura kegembiraan positif.",
        images: ["assets/all-mascots.jpg"]
    },
    rocky: {
        title: "Profil Maskot Penting: Rocky 🎸",
        badge: "Official Mascot Profile",
        desc: "Rocky merepresentasikan gelora distorsi melodi petikan gitar elektrik yang berani, merdeka, bebas, dan penuh gelora ekspresi eksploratif. Karakter Rocky melambangkan kebebasan jiwa muda berekspresi tanpa batas dalam menembus ruang kreasi melodi orisinalitas seni musik.",
        images: ["assets/all-mascots.jpg"]
    },
    kila: {
        title: "Profil Maskot Penting: Kila 🎸",
        badge: "Official Mascot Profile",
        desc: "Kila melambangkan keanggunan ritme kedamaian melodi akustik yang menyejukkan sanubari serta keindahan estetika visual harmonis. Kila bertugas menyeimbangkan gelora distorsi festival dengan sentuhan kehalusan estetika seni, menyinari kilau palet keindahan seni jiwa.",
        images: ["assets/all-mascots.jpg"]
    }
};

let currentModalSlideIdx = 0;
let activeModalImages = [];

// 1. Fungsi Gerbang Memori Masuk Situs Landing Screen
function enterWebsite() {
    const welcome = document.getElementById('welcome-screen');
    welcome.classList.add('opacity-0', 'pointer-events-none');
    
    // Memutar otomatis lagu setelah ada gesture interaksi pengguna eksplisit
    const audio = document.getElementById('bg-music');
    audio.play().then(() => {
        document.getElementById('play-icon').classList.add('hidden');
        document.getElementById('pause-icon').classList.remove('hidden');
    }).catch(e => console.log("Autoplay tercegah browser awal: ", e));
}

// Inisialisasi Deteksi Efek Animasi Scroll Tepat Waktu (Scroll Reveal Engine)
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const welcomeContent = document.getElementById('welcome-content');
        if(welcomeContent) welcomeContent.classList.remove('opacity-0', 'scale-95');
    }, 150);

    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    revealElements.forEach(el => observer.observe(el));
});

// 2. Kontrol Sistem Audio Pemutar Lagu Eksternal (.mp3)
const audioEngine = document.getElementById('bg-music');
function toggleMusic() {
    if (audioEngine.paused) {
        audioEngine.play();
        document.getElementById('play-icon').classList.add('hidden');
        document.getElementById('pause-icon').classList.remove('hidden');
    } else {
        audioEngine.pause();
        document.getElementById('play-icon').classList.remove('hidden');
        document.getElementById('pause-icon').classList.add('hidden');
    }
}
function setVolume(val) {
    if(audioEngine) audioEngine.volume = val;
}

// 3. Pemicu Dropdown Navigasi Menu Perangkat Seluler
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if(menu) menu.classList.toggle('hidden');
}

// 4. Penggeser Carousel Preview Utama Horizontal Konten Rekap
function scrollCarousel(dir) {
    const container = document.getElementById('recap-items-container');
    const itemWidth = 350; 
    if(container) {
        container.scrollBy({ left: dir * itemWidth, behavior: 'smooth' });
    }
}

// 5. Mesin Kontrol Utama Jendela Pop-up Modal Interaktif
function openItemModal(key) {
    const data = modalData[key];
    if(!data) return;

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-badge').textContent = data.badge;
    document.getElementById('modal-desc').textContent = data.desc;

    activeModalImages = data.images;
    currentModalSlideIdx = 0;
    
    const track = document.getElementById('modal-carousel-track');
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

    const modal = document.getElementById('recap-modal');
    if(modal) modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

function closeItemModal() {
    const modal = document.getElementById('recap-modal');
    if(modal) modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

function moveModalSlide(dir) {
    if(activeModalImages.length <= 1) return;
    currentModalSlideIdx = (currentModalSlideIdx + dir + activeModalImages.length) % activeModalImages.length;
    updateModalSlidePosition();
}

function updateModalSlidePosition() {
    const track = document.getElementById('modal-carousel-track');
    if(track) {
        track.style.transform = `translateX(-${currentModalSlideIdx * 100}%)`;
    }
}

// Tutup Jendela Modal Menggunakan Tombol Escape Key Keyboard
document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        closeItemModal();
    }
});
