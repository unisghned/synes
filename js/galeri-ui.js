// ========================================================
// Gallery UI logic only (Polaroid grid + featured carousel + infinite ticker + lightbox)
// No Firebase here.
// ========================================================

const photoDatabase = [
  { src: "assets/panggung.JPG", caption: "Main Stage Soundcheck ✨", category: "stage", rotate: "-rotate-3" },
  { src: "assets/BAND (1).JPG", caption: "Opening Act Rocking Out! 🎸", category: "music", rotate: "rotate-2" },
  { src: "assets/DANCE (1).JPG", caption: "Traditional Heritage Show 🌸", category: "dance", rotate: "-rotate-2" },
  { src: "assets/TENANT.JPG", caption: "Bazaar Culinary Craze 🍔", category: "bazaar", rotate: "rotate-3" },
  { src: "assets/ARUMA.JPG", caption: "Aruma - Muak Live Session 🎤", category: "star", rotate: "-rotate-4" },
  { src: "assets/HIVI.JPG", caption: "HiVi! - Euphoria Closing ❤️", category: "star", rotate: "rotate-4" },
  { src: "assets/PANGGUNG (2).JPG", caption: "Midnight Beam Laser Show ⚡", category: "stage", rotate: "-rotate-1" },
  { src: "assets/BAND (3).JPG", caption: "Energetic Drum Solo Beat 🥁", category: "music", rotate: "rotate-3" },
  { src: "assets/DANCE (4).JPG", caption: "Modern Crew Synchronization ⚡", category: "dance", rotate: "-rotate-3" },
  { src: "assets/TENANT (2).JPG", caption: "Tenant Area Crowds Line Up 🥤", category: "bazaar", rotate: "rotate-1" },
  { src: "assets/ARUMA (3).JPG", caption: "Singing Along with Aruma 🌌", category: "star", rotate: "-rotate-2" },
  { src: "assets/HIVI (4).JPG", caption: "Festival Epic Final Peak 🎉", category: "star", rotate: "rotate-5" }
];

let isInited = false;

function renderGallery(filterCategory = 'all') {
  const rack = document.getElementById('polaroid-grid-rack');
  if (!rack) return;

  rack.innerHTML = '';

  photoDatabase.forEach((photo) => {
    if (filterCategory !== 'all' && photo.category !== filterCategory) return;

    const card = document.createElement('div');
    card.className = `bg-white p-3 pb-7 rounded-sm polaroid-shadow border border-white/95 transform ${photo.rotate} hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-300 cursor-pointer group relative`;

    card.innerHTML = `
      <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 w-14 h-5 bg-white/25 backdrop-blur-[2px] border border-white/10 shadow-sm -rotate-12 group-hover:opacity-75 transition-opacity pointer-events-none"></div>

      <div class="aspect-square w-full bg-zinc-950 overflow-hidden relative shadow-inner rounded-sm border border-zinc-200/20">
        <img src="${photo.src}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter contrast-[1.04] brightness-[0.98]">
        <div class="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"></div>
      </div>

      <div class="pt-3.5 px-0.5 text-center select-none">
        <p class="text-zinc-800 text-[10.5px] tracking-tight truncate polaroid-font filter drop-shadow-sm">${photo.caption}</p>
      </div>
    `;

    card.addEventListener('click', () => openLightbox(photo.src, photo.caption));
    rack.appendChild(card);
  });
}

function filterGallery(category, buttonElement) {
  const buttons = buttonElement?.parentElement?.children;
  if (buttons) {
    for (let btn of buttons) {
      btn.className = "px-5 py-2.5 rounded-full bg-white/5 text-white/60 border border-white/5 hover:bg-white/10 hover:text-white transition-all duration-300";
    }
  }

  if (buttonElement) {
    buttonElement.className = "px-5 py-2.5 rounded-full bg-synes-accent text-white border border-synes-accent shadow-lg shadow-synes-accent/20 transition-all duration-300";
  }

  renderGallery(category);
}

function renderCarousel() {
  const track = document.getElementById('featured-carousel-track');
  if (!track) return;

  track.innerHTML = '';

  photoDatabase.slice(0, 6).forEach((photo) => {
    const item = document.createElement('div');
    item.className = "w-[280px] sm:w-[360px] shrink-0 snap-start bg-synes-card border border-white/5 p-3 rounded-2xl space-y-3 group/item cursor-pointer hover:border-white/10 transition-all duration-300";

    item.innerHTML = `
      <div class="w-full aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden relative">
        <img src="${photo.src}" class="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      </div>
      <div class="px-1 flex items-center justify-between">
        <p class="text-xs font-semibold text-white/90 truncate">${photo.caption}</p>
        <span class="text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-synes-teal">${photo.category}</span>
      </div>
    `;

    item.addEventListener('click', () => openLightbox(photo.src, photo.caption));
    track.appendChild(item);
  });
}

function scrollFeaturedCarousel(dir) {
  const track = document.getElementById('featured-carousel-track');
  if (!track) return;
  track.scrollBy({ left: dir * 340, behavior: 'smooth' });
}

function renderInfiniteTicker() {
  const track = document.getElementById('infinite-ticker-track');
  if (!track) return;

  track.innerHTML = '';

  // Clone list dua kali biar seamless
  const doubleList = [...photoDatabase, ...photoDatabase];

  doubleList.forEach((photo) => {
    const node = document.createElement('div');
    node.className = "w-36 h-24 sm:w-48 sm:h-32 shrink-0 rounded-xl overflow-hidden border border-white/5 hover:border-synes-teal transition-colors duration-300 relative group/tick shadow-lg";

    node.innerHTML = `
      <img src="${photo.src}" class="w-full h-full object-cover filter brightness-90 group-hover/tick:brightness-100 group-hover/tick:scale-105 transition-all duration-500">
    `;

    node.addEventListener('click', () => openLightbox(photo.src, photo.caption));
    track.appendChild(node);
  });
}

function openLightbox(imageSrc, imageCaption) {
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCap = document.getElementById('lightbox-caption');

  if (!lightbox || !lightboxImg || !lightboxCap) return;

  lightboxImg.src = imageSrc;
  lightboxCap.textContent = imageCaption;
  lightbox.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');

  // Animate in (opsional)
  const modalContent = lightbox.querySelector('div');
  if (modalContent) {
    setTimeout(() => {
      modalContent.classList.remove('scale-95', 'opacity-0');
      modalContent.classList.add('scale-100', 'opacity-100');
    }, 20);
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('gallery-lightbox');
  const modalContent = lightbox?.querySelector('div');

  if (lightbox && modalContent) {
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
      lightbox.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }, 200);
  }
}

// Expose for inline onclick used in galeri.html
window.filterGallery = filterGallery;
window.scrollFeaturedCarousel = scrollFeaturedCarousel;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

document.addEventListener('DOMContentLoaded', () => {
  if (isInited) return;
  isInited = true;

  renderGallery('all');
  renderCarousel();
  renderInfiniteTicker();
});

