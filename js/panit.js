/* ==========================================================================
   PANITIA OSIS UI CONTROLLER
   - Horizontal Landscape Card UI (Melebar ke Samping)
   - 37 Total Panitia Anonim
   ========================================================================== */

const panitiaOSISData = [
    // --- PIMPINAN UTAMA (PREZ & VICE) ---
    { id: "PAN-01", nama: "Panitia #01", jabatan: "President (Ketua OSIS)", divisi: "Presidium", divisiLabel: "Presidium", isTop: true, badgeBg: "bg-amber-400 text-slate-950 font-black", foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop", quote: "Memimpin pergerakan serta menyatukan visi seluruh divisi OSIS." },
    { id: "PAN-02", nama: "Panitia #02", jabatan: "Vice President (Wakil Ketua)", divisi: "Presidium", divisiLabel: "Presidium", isTop: true, badgeBg: "bg-amber-400 text-slate-950 font-black", foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop", quote: "Mengawasi jalannya roda organisasi dan sinergi internal." },

    // --- SECRETARY (2) ---
    { id: "PAN-03", nama: "Panitia #03", jabatan: "Secretary I", divisi: "Secretary", divisiLabel: "Secretary", badgeBg: "bg-blue-500 text-white", foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop", quote: "Pengelolaan persuratan dan administrasi organisasi." },
    { id: "PAN-04", nama: "Panitia #04", jabatan: "Secretary II", divisi: "Secretary", divisiLabel: "Secretary", badgeBg: "bg-blue-500 text-white", foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop", quote: "Penyusunan arsip, dokumen resmi, dan notulensi rapat." },

    // --- TREASURER (2) ---
    { id: "PAN-05", nama: "Panitia #05", jabatan: "Treasurer I", divisi: "Treasurer", divisiLabel: "Treasurer", badgeBg: "bg-emerald-500 text-white", foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop", quote: "Manajemen arus kas dan pengalokasian anggaran." },
    { id: "PAN-06", nama: "Panitia #06", jabatan: "Treasurer II", divisi: "Treasurer", divisiLabel: "Treasurer", badgeBg: "bg-emerald-500 text-white", foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop", quote: "Pembukuan keuangan transparan dan akuntabel." },

    // --- KREAVENTURE (5) ---
    { id: "PAN-07", nama: "Panitia #07", jabatan: "Coordinator Kreaventure", divisi: "Kreaventure", divisiLabel: "Kreaventure", badgeBg: "bg-pink-500 text-white", foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop", quote: "Pengembangan konsep kreatif dan estetika acara." },
    { id: "PAN-08", nama: "Panitia #08", jabatan: "Staff Kreaventure", divisi: "Kreaventure", divisiLabel: "Kreaventure", badgeBg: "bg-pink-500 text-white", foto: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop", quote: "Desain elemen visual dan perancangan dekorasi." },
    { id: "PAN-09", nama: "Panitia #09", jabatan: "Staff Kreaventure", divisi: "Kreaventure", divisiLabel: "Kreaventure", badgeBg: "bg-pink-500 text-white", foto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop", quote: "Produksi karya seni visual dan instalasi panggung." },
    { id: "PAN-10", nama: "Panitia #10", jabatan: "Staff Kreaventure", divisi: "Kreaventure", divisiLabel: "Kreaventure", badgeBg: "bg-pink-500 text-white", foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop", quote: "Inovasi konten program dan pementasan seni." },
    { id: "PAN-11", nama: "Panitia #11", jabatan: "Staff Kreaventure", divisi: "Kreaventure", divisiLabel: "Kreaventure", badgeBg: "bg-pink-500 text-white", foto: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop", quote: "Penyusunan rundown kreatif kegiatan siswa." },

    // --- VISION VAULT (6) ---
    { id: "PAN-12", nama: "Panitia #12", jabatan: "Coordinator Vision Vault", divisi: "Vision Vault", divisiLabel: "Vision Vault", badgeBg: "bg-purple-600 text-white", foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop", quote: "Pengawasan dokumentasi dan manajemen aset media." },
    { id: "PAN-13", nama: "Panitia #13", jabatan: "Staff Vision Vault", divisi: "Vision Vault", divisiLabel: "Vision Vault", badgeBg: "bg-purple-600 text-white", foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop", quote: "Videografi sinematik dan pascaproduksi." },
    { id: "PAN-14", nama: "Panitia #14", jabatan: "Staff Vision Vault", divisi: "Vision Vault", divisiLabel: "Vision Vault", badgeBg: "bg-purple-600 text-white", foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop", quote: "Fotografi dokumentasi momen kegiatan." },
    { id: "PAN-15", nama: "Panitia #15", jabatan: "Staff Vision Vault", divisi: "Vision Vault", divisiLabel: "Vision Vault", badgeBg: "bg-purple-600 text-white", foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop", quote: "Pengelolaan feed dan desain media sosial." },
    { id: "PAN-16", nama: "Panitia #16", jabatan: "Staff Vision Vault", divisi: "Vision Vault", divisiLabel: "Vision Vault", badgeBg: "bg-purple-600 text-white", foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop", quote: "Arsiparis rekaman dan galeri publik." },
    { id: "PAN-17", nama: "Panitia #17", jabatan: "Staff Vision Vault", divisi: "Vision Vault", divisiLabel: "Vision Vault", badgeBg: "bg-purple-600 text-white", foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop", quote: "Pengeditan video teaser dan recap event." },

    // --- LINGUAVERSE (4) ---
    { id: "PAN-18", nama: "Panitia #18", jabatan: "Coordinator Linguaverse", divisi: "Linguaverse", divisiLabel: "Linguaverse", badgeBg: "bg-teal-500 text-slate-950", foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop", quote: "Hubungan masyarakat dan publikasi komunikasi." },
    { id: "PAN-19", nama: "Panitia #19", jabatan: "Staff Linguaverse", divisi: "Linguaverse", divisiLabel: "Linguaverse", badgeBg: "bg-teal-500 text-slate-950", foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop", quote: "Penyusunan press release dan narasi pengumuman." },
    { id: "PAN-20", nama: "Panitia #20", jabatan: "Staff Linguaverse", divisi: "Linguaverse", divisiLabel: "Linguaverse", badgeBg: "bg-teal-500 text-slate-950", foto: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop", quote: "Protokoler acara dan komunikasi antar-pihak." },
    { id: "PAN-21", nama: "Panitia #21", jabatan: "Staff Linguaverse", divisi: "Linguaverse", divisiLabel: "Linguaverse", badgeBg: "bg-teal-500 text-slate-950", foto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop", quote: "Master of Ceremony (MC) dan pemandu acara." },

    // --- MASTER MIND (5) ---
    { id: "PAN-22", nama: "Panitia #22", jabatan: "Coordinator Master Mind", divisi: "Master Mind", divisiLabel: "Master Mind", badgeBg: "bg-indigo-500 text-white", foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop", quote: "Riset strategis dan perancangan arah kegiatan." },
    { id: "PAN-23", nama: "Panitia #23", jabatan: "Staff Master Mind", divisi: "Master Mind", divisiLabel: "Master Mind", badgeBg: "bg-indigo-500 text-white", foto: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop", quote: "Evaluasi program kerja dan pemetaan kendala." },
    { id: "PAN-24", nama: "Panitia #24", jabatan: "Staff Master Mind", divisi: "Master Mind", divisiLabel: "Master Mind", badgeBg: "bg-indigo-500 text-white", foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop", quote: "Penyusunan Standar Operasional Prosedur (SOP)." },
    { id: "PAN-25", nama: "Panitia #25", jabatan: "Staff Master Mind", divisi: "Master Mind", divisiLabel: "Master Mind", badgeBg: "bg-indigo-500 text-white", foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop", quote: "Pengembangan modul materi kepemimpinan." },
    { id: "PAN-26", nama: "Panitia #26", jabatan: "Staff Master Mind", divisi: "Master Mind", divisiLabel: "Master Mind", badgeBg: "bg-indigo-500 text-white", foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop", quote: "Analisis data masukan dan aspirasi siswa." },

    // --- GAME MASTER (5) ---
    { id: "PAN-27", nama: "Panitia #27", jabatan: "Coordinator Game Master", divisi: "Game Master", divisiLabel: "Game Master", badgeBg: "bg-orange-500 text-white", foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop", quote: "Manajemen kompetisi, perlombaan, dan e-sports." },
    { id: "PAN-28", nama: "Panitia #28", jabatan: "Staff Game Master", divisi: "Game Master", divisiLabel: "Game Master", badgeBg: "bg-orange-500 text-white", foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop", quote: "Penyusunan regulasi serta bracket pertandingan." },
    { id: "PAN-29", nama: "Panitia #29", jabatan: "Staff Game Master", divisi: "Game Master", divisiLabel: "Game Master", badgeBg: "bg-orange-500 text-white", foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop", quote: "Wasit teknis dan pengawas fair play perlombaan." },
    { id: "PAN-30", nama: "Panitia #30", jabatan: "Staff Game Master", divisi: "Game Master", divisiLabel: "Game Master", badgeBg: "bg-orange-500 text-white", foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop", quote: "Pengondisian peserta lomba dan sistem skor." },
    { id: "PAN-31", nama: "Panitia #31", jabatan: "Staff Game Master", divisi: "Game Master", divisiLabel: "Game Master", badgeBg: "bg-orange-500 text-white", foto: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop", quote: "Penyiapan perlengkapan dan arena tanding." },

    // --- DIVINE CORE (6) ---
    { id: "PAN-32", nama: "Panitia #32", jabatan: "Coordinator Divine Core", divisi: "Divine Core", divisiLabel: "Divine Core", badgeBg: "bg-cyan-500 text-slate-950", foto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop", quote: "Pengawasan keamanan, ketertiban, dan kedisiplinan." },
    { id: "PAN-33", nama: "Panitia #33", jabatan: "Staff Divine Core", divisi: "Divine Core", divisiLabel: "Divine Core", badgeBg: "bg-cyan-500 text-slate-950", foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop", quote: "Tim pertolongan pertama & kelengkapan medis (P3K)." },
    { id: "PAN-34", nama: "Panitia #34", jabatan: "Staff Divine Core", divisi: "Divine Core", divisiLabel: "Divine Core", badgeBg: "bg-cyan-500 text-slate-950", foto: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop", quote: "Pengelolaan logistik tempat dan penyediaan alat." },
    { id: "PAN-35", nama: "Panitia #35", jabatan: "Staff Divine Core", divisi: "Divine Core", divisiLabel: "Divine Core", badgeBg: "bg-cyan-500 text-slate-950", foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop", quote: "Sterilisasi area kegiatan dan pengamanan pintu." },
    { id: "PAN-36", nama: "Panitia #36", jabatan: "Staff Divine Core", divisi: "Divine Core", divisiLabel: "Divine Core", badgeBg: "bg-cyan-500 text-slate-950", foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop", quote: "Pengarahan massa dan pengaturan arus pengunjung." },
    { id: "PAN-37", nama: "Panitia #37", jabatan: "Staff Divine Core", divisi: "Divine Core", divisiLabel: "Divine Core", badgeBg: "bg-cyan-500 text-slate-950", foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop", quote: "Operasional teknis sound system dan kelistrikan." }
];

/**
 * Render Cards Panitia OSIS
 */
function renderPanitia(filterCategory = 'all') {
    const topContainer = document.getElementById('panitia-top-rack');
    const gridContainer = document.getElementById('panitia-grid-rack');

    if (!gridContainer || !topContainer) return;

    topContainer.innerHTML = '';
    gridContainer.innerHTML = '';

    const lowerFilter = filterCategory.toLowerCase();

    // Data filtering
    const filteredData = filterCategory === 'all' 
        ? panitiaOSISData 
        : panitiaOSISData.filter(item => item.divisi.toLowerCase() === lowerFilter || (lowerFilter === 'presidium' && item.isTop));

    const topLeaders = filteredData.filter(item => item.isTop);
    const standardMembers = filteredData.filter(item => !item.isTop);

    // Render President & Vice (Top Row 2 Cards Side-by-Side Landscape)
    if (topLeaders.length > 0 && (filterCategory === 'all' || lowerFilter === 'presidium')) {
        topContainer.parentElement.classList.remove('hidden');
        topLeaders.forEach(item => {
            topContainer.appendChild(createLeaderHorizontalCard(item));
        });
    } else {
        topContainer.parentElement.classList.add('hidden');
    }

    // Render Standard Divisions (Horizontal Landscape Cards)
    standardMembers.forEach(item => {
        gridContainer.appendChild(createMemberHorizontalCard(item));
    });
}

/**
 * Component: President & Vice President (Horizontal Landscape Card - Glowing Border Emas)
 */
function createLeaderHorizontalCard(item) {
    const card = document.createElement('div');
    card.className = "group relative w-full bg-gradient-to-r from-amber-500/20 via-slate-900/95 to-slate-900 border-2 border-amber-400/80 rounded-2xl p-4 sm:p-5 flex flex-row items-center gap-4 sm:gap-6 shadow-[0_0_30px_rgba(251,191,36,0.2)] hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden";
    card.onclick = () => openPanitiaModal(item);

    card.innerHTML = `
        <!-- Glow Blur Accent -->
        <div class="absolute -right-8 -bottom-8 w-36 h-36 bg-amber-400/10 rounded-full blur-2xl group-hover:bg-amber-400/25 transition-all pointer-events-none"></div>

        <!-- Foto Avatar Landscape Side -->
        <div class="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-xl overflow-hidden border-2 border-amber-400/80 shadow-lg bg-zinc-950">
            <img src="${item.foto}" alt="${item.nama}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        </div>

        <!-- Informasi Detail Horizontal -->
        <div class="flex-1 min-w-0 space-y-1.5">
            <div class="flex items-center justify-between gap-2">
                <span class="text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full ${item.badgeBg}">
                    ${item.divisiLabel}
                </span>
                <span class="text-[10px] text-amber-300/70 font-mono">${item.id}</span>
            </div>

            <h3 class="text-base sm:text-xl font-extrabold text-white font-display truncate group-hover:text-amber-300 transition-colors">${item.nama}</h3>
            <p class="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wider">${item.jabatan}</p>
            <p class="text-[11px] sm:text-xs text-white/80 line-clamp-2 italic font-light pt-1 border-t border-amber-400/20 leading-relaxed">
                "${item.quote}"
            </p>
        </div>
    `;
    return card;
}

/**
 * Component: Anggota Divisi (Horizontal Landscape Card - Melebar Ke Samping)
 */
function createMemberHorizontalCard(item) {
    const card = document.createElement('div');
    card.className = "group relative w-full bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-3.5 sm:p-4 flex flex-row items-center gap-4 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_8px_25px_rgba(0,242,254,0.15)] transition-all duration-300 cursor-pointer overflow-hidden";
    card.onclick = () => openPanitiaModal(item);

    card.innerHTML = `
        <!-- Thumbnail Foto di Samping Kiri -->
        <div class="relative w-20 h-20 sm:w-22 sm:h-22 shrink-0 rounded-xl overflow-hidden border border-white/10 bg-zinc-900">
            <img src="${item.foto}" alt="${item.nama}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-95">
        </div>

        <!-- Detail Profil di Samping Kanan -->
        <div class="flex-1 min-w-0 space-y-1">
            <div class="flex items-center justify-between">
                <span class="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${item.badgeBg}">
                    ${item.divisiLabel}
                </span>
                <span class="text-[9px] text-white/30 font-mono">${item.id}</span>
            </div>

            <h4 class="text-sm sm:text-base font-bold text-white font-display group-hover:text-cyan-400 transition-colors truncate">${item.nama}</h4>
            <p class="text-[11px] sm:text-xs text-cyan-300/90 font-semibold truncate">${item.jabatan}</p>
            <p class="text-[10px] sm:text-[11px] text-white/60 line-clamp-1 font-light italic border-t border-white/5 pt-1">
                "${item.quote}"
            </p>
        </div>
    `;
    return card;
}

/**
 * Filter Controller
 */
function filterPanitia(category, btnElement) {
    const buttons = btnElement.parentElement.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.className = "px-4 py-2 rounded-full bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300 text-[10px] uppercase font-bold tracking-wider";
    });

    btnElement.className = "px-4 py-2 rounded-full bg-cyan-500 text-slate-950 border border-cyan-400 font-bold shadow-lg shadow-cyan-500/20 transition-all duration-300 text-[10px] uppercase tracking-wider";

    renderPanitia(category);
}

/**
 * Lightbox Modal Preview
 */
function openPanitiaModal(item) {
    const modal = document.getElementById('panitia-lightbox');
    const modalBox = modal.querySelector('div');

    document.getElementById('panitia-img').src = item.foto;
    document.getElementById('panitia-badge').innerText = item.divisiLabel;
    document.getElementById('panitia-badge').className = `absolute top-3 left-3 text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md shadow-md ${item.badgeBg}`;
    document.getElementById('panitia-nama').innerText = item.nama;
    document.getElementById('panitia-jabatan').innerText = item.jabatan;
    document.getElementById('panitia-desc').innerText = `"${item.quote}"`;

    modal.classList.remove('hidden');
    setTimeout(() => {
        modalBox.classList.remove('scale-95', 'opacity-0');
        modalBox.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closePanitiaModal() {
    const modal = document.getElementById('panitia-lightbox');
    const modalBox = modal.querySelector('div');

    modalBox.classList.remove('scale-100', 'opacity-100');
    modalBox.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 200);
}

// Global Exports
window.renderPanitia = renderPanitia;
window.filterPanitia = filterPanitia;
window.openPanitiaModal = openPanitiaModal;
window.closePanitiaModal = closePanitiaModal;