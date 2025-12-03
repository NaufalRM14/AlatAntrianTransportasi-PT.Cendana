import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Produk & Layanan', // MENU GABUNGAN 1
      href: getPermalink('/products'),
      links: [
        // Kelompok Produk
        {
          text: 'Hardware Kiosk RS',
          href: getPermalink('/products/kiosk-rs'), // Pastikan slug sesuai nama file md
        },
        {
          text: 'Software BPJS',
          href: getPermalink('/products/software-bpjs'),
        },
        {
          text: 'Sistem Poliklinik',
          href: getPermalink('/products/poliklinik'),
        },
        // Kelompok Layanan (Urutan di bawah produk)
        {
          text: 'Jasa Instalasi',
          href: getPermalink('/products/instalasi'),
        },
        {
          text: 'Training Staff',
          href: getPermalink('/products/training'),
        },
        {
          text: 'Maintenance',
          href: getPermalink('/products/maintenance'),
        },
      ],
    },
    {
      text: 'Portofolio',
      href: getPermalink('/portfolio'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Perusahaan', // MENU GABUNGAN 2
      links: [
        {
          text: 'Tentang Kami',
          href: getPermalink('/about'),
        },
        {
          text: 'Kontak & Lokasi',
          href: getPermalink('/contact'),
        },
      ],
    },
  ],
  actions: [
    { text: 'Kunjungi Website Utama', href: 'https://alatantrian.com', target: '_blank', icon: 'tabler:world-www' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Produk Unggulan',
      links: [
        { text: 'Kiosk Touchscreen', href: getPermalink('/produk/kiosk-rs') },
        { text: 'Software Bridging', href: '#' },
        { text: 'Display TV Poli', href: '#' },
      ],
    },
    {
      title: 'Layanan',
      links: [
        { text: 'Instalasi', href: '#' },
        { text: 'Training', href: '#' },
        { text: 'Maintenance', href: '#' },
      ],
    },
    {
      title: 'Microsite Lain',
      links: [
        { text: 'Pelayanan Publik', href: '#' },
        { text: 'Perbankan', href: '#' },
        { text: 'Pendidikan', href: '#' },
      ],
    },
    {
      title: 'Perusahaan',
      links: [
        { text: 'AlatAntrian.com', href: 'https://alatantrian.com' },
        { text: 'Tentang Kami', href: getPermalink('/about') },
        { text: 'Kontak', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `
    © 2025 <a class="text-blue-600 underline dark:text-muted" href="https://alatantrian.com/">AlatAntrian.com Group</a> · Spesialis Antrian Transportasi.
  `,
};
