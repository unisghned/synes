// ========================================================
// Index Auth-only script (separated from main content)
// ========================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAFKDsOpIX9v5jZWfxMycpUCsPylJx3FSM",
  authDomain: "synes-a7da3.firebaseapp.com",
  projectId: "synes-a7da3",
  storageBucket: "synes-a7da3.firebasestorage.app",
  messagingSenderId: "572685837271",
  appId: "1:572685837271:web:7870bef9a49c7833672192"
};

let auth;

function firebaseShowMsg(text, classes) {
  const msgBox = document.getElementById('auth-message');
  if (msgBox) {
    msgBox.className = "mb-4 p-3 rounded-xl text-xs font-medium text-center " + classes;
    msgBox.innerText = text;
    msgBox.classList.remove('hidden');
  }
}

function mapError(code) {
  switch(code) {
    case 'auth/user-not-found': return 'Email tidak terdaftar.';
    case 'auth/wrong-password': return 'Kata sandi salah.';
    case 'auth/email-already-in-use': return 'Email sudah digunakan akun lain.';
    case 'auth/invalid-email': return 'Format penulisan email salah.';
    case 'auth/weak-password': return 'Kata sandi terlalu pendek (min. 6 karakter).';
    case 'auth/operation-not-allowed': return 'Metode ini belum diaktifkan di Firebase Console.';
    default: return 'Terjadi kendala sistem/config Firebase salah.';
  }
}

try {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);

  // Expose to window for index.html inline handlers
  window.handleFirebaseAuth = function(mode) {
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;

    if (!auth) {
      firebaseShowMsg('Firebase Auth belum siap.', 'bg-red-500/10 text-red-400 border border-red-500/20');
      return;
    }

    if (mode === 'login') {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          firebaseShowMsg('Login berhasil! Mengalihkan...', 'bg-green-500/10 text-green-400 border border-green-500/20');
          setTimeout(() => { window.location.href = 'main.html'; }, 1000);
        })
        .catch((error) => {
          firebaseShowMsg('Gagal Login: ' + mapError(error.code), 'bg-red-500/10 text-red-400 border border-red-500/20');
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          firebaseShowMsg('Registrasi berhasil! Mengalihkan...', 'bg-green-500/10 text-green-400 border border-green-500/20');
          setTimeout(() => { window.location.href = 'main.html'; }, 1000);
        })
        .catch((error) => {
          firebaseShowMsg('Gagal Daftar: ' + mapError(error.code), 'bg-red-500/10 text-red-400 border border-red-500/20');
        });
    }
  };

  window.handleFirebaseAnonymous = function() {
    if (!auth) {
      firebaseShowMsg('Firebase Auth belum siap.', 'bg-red-500/10 text-red-400 border border-red-500/20');
      return;
    }

    signInAnonymously(auth)
      .then(() => {
        firebaseShowMsg('Masuk sebagai Tamu berhasil! Mengalihkan...', 'bg-cyan-500/10 text-synes-teal border border-synes-teal/20');
        setTimeout(() => { window.location.href = 'main.html'; }, 1000);
      })
      .catch((error) => {
        firebaseShowMsg('Gagal Masuk Anonim: ' + mapError(error.code), 'bg-red-500/10 text-red-400 border border-red-500/20');
      });
  };
} catch (e) {
  console.error('Firebase Initialization Error:', e);
  firebaseShowMsg('Gagal memuat Firebase. Cek Console.', 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20');
}

