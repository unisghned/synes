// ========================================================
// Main page auth-only script (separated from main UI)
// ========================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAFKDsOpIX9v5jZWfxMycpUCsPylJx3FSM",
  authDomain: "synes-a7da3.firebaseapp.com",
  projectId: "synes-a7da3",
  storageBucket: "synes-a7da3.firebasestorage.app",
  messagingSenderId: "572685837271",
  appId: "1:572685837271:web:7870bef9a49c7833672192"
};

let auth;
try {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);

  let hasResolved = false;
  onAuthStateChanged(auth, (user) => {
    // biar jelas kalau auth belum resolve dan redirect terjadi
    if (hasResolved) return;
    hasResolved = true;

    const currentFile = window.location.pathname.split("/").pop();
    console.log('[Auth] state resolved. user =', user ? (user.isAnonymous ? 'anonymous' : (user.email || 'unknown')) : 'null', 'currentFile=', currentFile);

    // Jika user null, hanya redirect jika jelas bukan index.html.
    // Hindari redirect agresif yang bisa bikin seolah konten main hilang.
    if (!user) {
      if (currentFile !== 'index.html' && currentFile !== '') {
        console.warn("[Auth] user null -> redirect ke index.html");
        window.location.replace('index.html');
      }
      return;
    }

    // Jika user valid dan user membuka index.html, alihkan ke main.html.
    if (currentFile === 'index.html' || currentFile === '') {
      console.log('[Auth] user valid -> redirect ke main.html');
      window.location.replace('main.html');
    }
  });
} catch (error) {
  console.error("Gagal menginisialisasi sistem modul Firebase:", error);
}

window.handleLogout = function() {
  try {
    if (!confirm("Apakah kamu yakin ingin keluar dari dokumentasi Synesthesia?")) return;

    if (!auth) {
      console.error('[Logout] auth belum terinisialisasi.');
      alert('Logout gagal: Firebase Auth belum siap. Buka F12 Console untuk melihat error.');
      return;
    }

    console.log('[Logout] melakukan signOut...');

    signOut(auth)
      .then(() => {
        console.log('[Logout] signOut sukses. Redirect ke index.html');
        window.location.href = 'index.html';
      })
      .catch((err) => {
        console.error('Gagal Logout:', err);
        alert('Gagal memproses keluar: ' + (err && err.message ? err.message : String(err)));
      });
  } catch (err) {
    console.error('[Logout] exception:', err);
    alert('Logout gagal karena error: ' + (err && err.message ? err.message : String(err)));
  }
};

