import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: import.meta.env.PROD
    ? {
        kind: 'github',
        repo: 'Naufal Rizqullah/alatantrian-Transportasi', // GANTI INI! (Contoh: ammaralhaidar/alatantrian-kesehatan)
      }
    : {
        kind: 'local',
      },

  collections: {
    // 1. KOLEKSI BLOG (Artikel)
    post: collection({
      label: 'Blog & Artikel',
      slugField: 'title',
      path: 'src/content/post/*', // Sesuai folder yang kita perbaiki tadi
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: {
            label: 'Judul Artikel (SEO)',
            validation: {
              length: {
                min: 20,
                max: 70,
              },
            },
          },
        }),
        publishDate: fields.date({
          label: 'Tanggal Publish',
          defaultValue: { kind: 'today' },
        }),
        draft: fields.checkbox({ label: 'Draft (Sembunyikan)', defaultValue: false }),
        excerpt: fields.text({
          label: 'Meta Description (Excerpt)',
          multiline: true,
          validation: {
            length: {
              min: 100,
              max: 160,
            },
          },
        }),
        image: fields.image({
          label: 'Gambar Utama',
          directory: 'src/assets/images', // Simpan gambar di sini
          publicPath: '~/assets/images/', // Cara Astro memanggilnya
        }),
        category: fields.text({ label: 'Kategori' }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),
        author: fields.text({ label: 'Penulis', defaultValue: 'Admin' }),
        content: fields.mdx({
          label: 'Isi Artikel',
          options: {
            image: {
              directory: 'src/assets/images',
              publicPath: '~/assets/images/',
            },
          },
        }),
      },
    }),

    // 2. KOLEKSI PRODUK & LAYANAN (Unified)
    product: collection({
      label: 'Katalog (Produk & Layanan)',
      slugField: 'title',
      path: 'src/content/products/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Nama Produk/Layanan' } }),
        productType: fields.select({
          label: 'Tipe Item',
          description: 'Pilih apakah ini Barang atau Jasa',
          options: [
            { label: 'Produk (Barang)', value: 'product' },
            { label: 'Layanan (Jasa)', value: 'service' },
          ],
          defaultValue: 'product',
        }),
        description: fields.text({ label: 'Deskripsi Singkat', multiline: true }),
        price: fields.text({ label: 'Label Harga (Contoh: Hubungi Sales)' }),
        category: fields.text({ label: 'Kategori' }),
        image: fields.image({
          label: 'Foto Produk',
          directory: 'src/assets/images',
          publicPath: '~/assets/images/',
        }),
        // Fitur Unggulan (List)
        features: fields.array(fields.text({ label: 'Fitur' }), { label: 'Poin-poin Fitur Unggulan' }),
        icon: fields.text({ label: 'Nama Icon (Contoh: tabler:tool) - Khusus Layanan' }),
        content: fields.mdx({ label: 'Deskripsi Lengkap' }),
      },
    }),

    // 3. KOLEKSI PORTOFOLIO
    portfolio: collection({
      label: 'Portofolio Klien',
      slugField: 'title',
      path: 'src/content/portfolio/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Judul Project' } }),
        clientName: fields.text({ label: 'Nama Klien/Instansi' }),
        completionDate: fields.date({ label: 'Tanggal Selesai' }),
        description: fields.text({ label: 'Deskripsi Singkat' }),
        category: fields.text({ label: 'Kategori (RS, Bank, dll)' }),
        image: fields.image({
          label: 'Foto Dokumentasi',
          directory: 'src/assets/images',
          publicPath: '~/assets/images/',
        }),
        tags: fields.array(fields.text({ label: 'Teknologi/Fitur' }), { label: 'Tags' }),
        content: fields.mdx({ label: 'Cerita Studi Kasus' }),
      },
    }),
  },
});
