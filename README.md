# 🎬 Galeri Video Interaktif (HTML, CSS & JavaScript)

Website galeri video sederhana dengan tampilan modern.  
Video akan menampilkan gambar poster sebelum diputar, lalu **memutar otomatis saat diklik** dan **kembali ke tampilan awal setelah selesai**.

---

## ✨ Fitur
- Tampilan poster dengan tanda `?`
- Klik untuk memutar video
- Video kembali ke awal setelah selesai
- Fokus video dapat diatur (contoh: video ke-2 fokus ke atas)
- Responsif (Desktop & Mobile)
- Mudah dikembangkan dan dimodifikasi

---

## 📁 Struktur Folder
.
├── index.html
├── poster.png
├── video1.mp4
├── video2.mp4
├── video3.mp4
└── README.md

yaml
Salin kode

---

## 🎥 Cara Mengganti Video
1. Masukkan file video baru ke folder project
2. Buka `index.html`
3. Cari baris berikut:
   ```html
   <source src="video2.mp4" type="video/mp4">
Ganti nama file video sesuai kebutuhan:

html
Salin kode
<source src="tutorial.mp4" type="video/mp4">
Simpan file dan refresh browser

➕ Cara Menambahkan Video Baru
Salin salah satu blok video:

html
Salin kode
<div class="video-box" onclick="playVideo(this)">
  <video poster="poster.png">
    <source src="video4.mp4" type="video/mp4">
  </video>
  <div class="overlay">?</div>
</div>
Tempelkan di bawah video terakhir

Ganti nama file videonya

🎯 Mengatur Fokus Tampilan Video
🔹 Video Normal (Default)
css
Salin kode
video{
  object-position: center;
}
🔹 Fokus ke Atas (contoh video ke-2)
Tambahkan class top pada video:

html
Salin kode
<div class="video-box top" onclick="playVideo(this)">
css
Salin kode
.video-box.top video{
  object-position: top center;
}
🖼️ Mengganti Gambar Poster
Ganti file poster.png dengan gambar baru
atau

Ubah atribut poster di HTML:

html
Salin kode
<video poster="poster-baru.png">
✏️ Mengubah Teks Overlay
Cari baris berikut:

html
Salin kode
<div class="overlay">?</div>
Ganti teks sesuai keinginan:

html
Salin kode
<div class="overlay">PLAY</div>
🧠 Catatan Penting
Gunakan format video .mp4

Hindari spasi pada nama file

Pastikan huruf besar-kecil nama file sesuai
