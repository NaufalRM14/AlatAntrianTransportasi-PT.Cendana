# Alat Antrian Transportasi (Microsite)

Website ini adalah _microsite_ khusus yang berfokus pada solusi sistem antrian untuk sektor kesehatan (Rumah Sakit, Puskesmas, Klinik). Dibangun menggunakan **Astro** untuk performa maksimal dan SEO yang optimal.

Website ini berfungsi sebagai _lead generator_ dan _educational hub_ yang mendukung website utama **AlatAntrian Transportasi.com**.

![Preview Website](src/assets/images/hero-image.png)

## 🚀 Fitur Utama

### 1. Unified Content Management (Produk & Layanan)

- Sistem katalog terpusat yang menggabungkan **Hardware** (Kiosk), **Software** (BPJS Bridging), dan **Jasa** (Instalasi/Training).
- Dikelola via CMS tanpa koding.

### 2. Blog Edukasi "Level Ahrefs"

- **Layout 3 Kolom:** Daftar Isi (Sticky TOC) di kiri, Artikel di tengah, Profil Penulis di kanan.
- **Reading Progress Bar:** Indikator progres membaca di bagian atas layar (z-index tinggi).
- **SEO Friendly:** Struktur heading yang rapi dan meta tags otomatis.

### 3. Portofolio Dinamis

- Showcase studi kasus klien (misal: RS Bhayangkara) dengan galeri foto dan deskripsi proyek.

### 4. Dashboard Admin (Keystatic)

- CMS terintegrasi untuk mengelola konten Blog, Produk, dan Portofolio.
- Tampilan GUI yang mudah digunakan oleh tim konten/magang tanpa menyentuh kode.
- Mendukung mode **Local** (simpan ke hardisk) dan **GitHub** (simpan ke repo).

### 5. Fitur Eksklusif Internal

- **SEO Checker Widget:** Alat analisis konten _real-time_ (mirip Yoast SEO) yang tersembunyi dari publik. Hanya muncul di Localhost atau via URL rahasia (`?mode=seo`).
- **Contact Form:** Terintegrasi dengan **Web3Forms** untuk pengiriman email langsung tanpa backend.

---

## 🛠️ Teknologi yang Digunakan

- **Framework:** [Astro v5](https://astro.build) (Static Site Generator)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **CMS:** [Keystatic](https://keystatic.com) (React-based)
- **Icons:** Tabler Icons via `astro-icon`
- **Form Handler:** Web3Forms
- **Deployment:** Vercel

---

## 💻 Cara Menjalankan (Development)

Pastikan Anda sudah menginstal **Node.js** (versi 18+).

1.  **Clone Repository**

    ```bash
    git clone [https://github.com/username/alatantrian-kesehatan.git](https://github.com/username/alatantrian-kesehatan.git)
    cd alatantrian-kesehatan
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Jalankan Server Lokal**
    ```bash
    npm run dev
    ```
    Buka browser di `http://localhost:4321`.

---

## 📝 Mengelola Konten (Admin Dashboard)

Tidak perlu mengedit file kodingan untuk menambah artikel atau produk.

### Mode Lokal (Development)

1.  Jalankan `npm run dev`.
2.  Buka `http://localhost:4321/keystatic`.
3.  Anda bisa langsung menambah/edit konten. File akan otomatis tersimpan di folder `src/content/`.

### Mode Live (Production)

1.  Buka `https://alatantrian-kesehatan.vercel.app/keystatic`.
2.  Login menggunakan akun **GitHub** yang sudah terdaftar sebagai _Collaborator_.
3.  Setiap perubahan yang di-save akan otomatis memicu _redeploy_ di Vercel.

---

## 📂 Struktur Folder Penting

```text
src/
├── assets/             # Gambar, Logo, Favicon
├── components/
│   ├── blog/           # Komponen khusus Blog (SinglePost, TOC, ReadingProgress)
│   ├── common/         # Komponen umum (SEO Checker, Metadata)
│   ├── ui/             # UI Kit (Button, Form, WidgetWrapper)
│   └── widgets/        # Widget Halaman (Hero, Features, Stats)
├── content/            # DATABASE KONTEN (Markdown/MDX)
│   ├── portfolio/      # Data Studi Kasus Klien
│   ├── products/       # Data Produk & Layanan
│   └── post/           # Data Artikel Blog
├── pages/              # Routing Halaman Website
│   ├── produk/         # Halaman Katalog & Detail Produk
│   ├── portfolio/      # Halaman Galeri & Detail Portofolio
│   ├── [...blog]/      # Halaman Blog & Artikel
│   └── index.astro     # Homepage (Landing Page)
├── navigation.ts       # Konfigurasi Menu Header & Footer
└── config.yaml         # Konfigurasi Global Site (Judul, Deskripsi)
```
