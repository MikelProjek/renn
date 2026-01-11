📘 Panduan Mengubah dan Menambahkan File & Teks pada Website

Website ini dibuat menggunakan HTML, CSS, dan JavaScript. Untuk melakukan perubahan atau penambahan konten seperti video, gambar poster, dan teks, ikuti panduan berikut.

📁 Struktur File Website

Pastikan semua file berada dalam satu folder agar website berjalan dengan baik.

index.html
video.html
poster.png
video1.mp4
video2.mp4
video3.mp4


Keterangan:

index.html → file utama website

poster.png → gambar tampilan awal sebelum video diputar

video1.mp4, video2.mp4, dst → file video yang ditampilkan

🎬 Cara Mengganti File Video

Siapkan file video dengan format .mp4

Masukkan file video ke dalam folder website

Buka file index.html

Cari bagian berikut:

<source src="video2.mp4" type="video/mp4">


Ganti video2.mp4 dengan nama file video baru, contoh:

<source src="tutorial.mp4" type="video/mp4">


Simpan file dan refresh website

➕ Cara Menambahkan Video Baru

Copy salah satu blok video berikut:

<div class="video-box" onclick="playVideo(this)">
  <video poster="poster.png">
    <source src="video4.mp4" type="video/mp4">
  </video>
  <div class="overlay">?</div>
</div>


Paste di bawah video terakhir

Ganti nama file videonya

Jika ingin fokus ke atas, tambahkan class top:

<div class="video-box top" onclick="playVideo(this)">

🖼️ Cara Mengganti Gambar Poster

Siapkan gambar poster (disarankan rasio 16:9)

Ganti file poster.png dengan gambar baru
atau

Ubah nama file di HTML:

<video poster="poster-baru.png">

✏️ Cara Mengubah Teks di Website
1️⃣ Mengubah Tanda ?

Cari kode berikut:

<div class="overlay">?</div>


Ganti teks ? menjadi teks lain, contoh:

<div class="overlay">PLAY</div>

2️⃣ Menambahkan Judul atau Deskripsi

Tambahkan teks di atas atau bawah video:

<h3>Video Tutorial Lampu Motor</h3>
<p>Klik video untuk memulai pemutaran</p>


Contoh penempatan:

<div class="video-box" onclick="playVideo(this)">
  <h3>Video 2</h3>
  <video poster="poster.png">
    <source src="video2.mp4" type="video/mp4">
  </video>
  <div class="overlay">?</div>
</div>
