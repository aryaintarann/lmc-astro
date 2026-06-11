# PRD — Legian Medical Clinic Website
**Product Requirements Document**
**Version:** 1.0
**Tanggal:** Juni 2026
**Author:** Teridox
**Status:** Draft

---

## 1. Overview

### 1.1 Latar Belakang
Legian Medical Clinic membutuhkan website company profile profesional yang dapat mewakili identitas klinik secara digital, mempermudah pasien menemukan informasi layanan dan dokter, serta tampil secara optimal di mesin pencari tradisional (SEO), mesin pencari berbasis lokasi (GEO), dan sistem AI generatif seperti ChatGPT, Perplexity, Google AI Overview, dan lainnya (AI Search Optimization / AIO / GEO-AI).

### 1.2 Tujuan Produk
- Memberikan informasi lengkap dan terpercaya tentang klinik kepada calon pasien
- Meningkatkan visibilitas online klinik di Legian, Bali dan sekitarnya
- Menjadi referensi yang dikutip oleh AI generatif saat pengguna bertanya tentang klinik medis di Legian
- Membangun kepercayaan melalui tampilan profesional dan informatif

### 1.3 Target Pengguna
| Segmen | Deskripsi |
|--------|-----------|
| Wisatawan Asing | Turis yang sedang berada di Bali & butuh layanan medis darurat/rutin |
| Wisatawan Domestik | Pengunjung lokal dari luar Bali yang membutuhkan klinik |
| Penduduk Lokal Legian | Warga sekitar Legian, Kuta, Seminyak |
| Expat di Bali | Warga asing yang tinggal & bekerja di Bali |

---

## 2. Scope

### 2.1 Halaman yang Dibangun
1. **Home** — Halaman utama, hero section, ringkasan layanan, CTA
2. **About** — Tentang klinik, visi misi, nilai, sejarah singkat
3. **Services** — Daftar layanan medis lengkap beserta deskripsi
4. **Doctors** — Profil dokter dan tenaga medis
5. **Contact** — Informasi kontak, peta lokasi, form inquiry

### 2.2 Out of Scope (v1.0)
- Sistem booking online (dipertimbangkan untuk v2.0)
- Portal pasien / rekam medis digital
- Blog / artikel kesehatan (dipertimbangkan untuk v2.0)
- Fitur pembayaran online

---

## 3. Tech Stack

### 3.1 Framework & Core
| Komponen | Pilihan | Alasan |
|----------|---------|--------|
| Framework | **Astro 5.x** | Static-first, performa tinggi, SEO-friendly by default |
| Styling | **Tailwind CSS v4** | Utility-first, ringan di production |
| Bahasa | **TypeScript** | Type safety, maintainability |
| Package Manager | **pnpm** | Lebih cepat, efisien disk |

### 3.2 Integrasi Astro (Official)
```bash
npx astro add sitemap      # @astrojs/sitemap — auto-generate sitemap.xml
npx astro add tailwind     # @astrojs/tailwind — Tailwind CSS integration
npx astro add compress     # @playform/compress — HTML/CSS/JS compression
```

### 3.3 SEO & Performance Packages
```bash
pnpm add astro-seo          # astro-seo — meta tags, OG, Twitter Card
pnpm add schema-dts         # TypeScript types untuk JSON-LD Schema.org
```

### 3.4 Deployment
| Komponen | Pilihan |
|----------|---------|
| Hosting | **Cloudflare Pages** |
| CDN | Cloudflare (otomatis) |
| Domain | Kustom (contoh: legianmedicalclinic.com) |
| Build Output | `output: 'static'` (SSG) |

---

## 4. Struktur Proyek

```
legian-medical-clinic/
├── public/
│   ├── robots.txt
│   ├── favicon.ico
│   ├── favicon.svg
│   └── images/
│       ├── og-image.jpg          # 1200x630px untuk Open Graph
│       ├── clinic-exterior.jpg
│       └── doctors/
├── src/
│   ├── assets/                   # Gambar dioptimasi Astro
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.astro
│   │   │   ├── Footer.astro
│   │   │   └── Head.astro        # Meta, OG, JSON-LD
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── ServiceCard.astro
│   │   │   ├── DoctorCard.astro
│   │   │   └── ContactForm.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       └── Badge.astro
│   ├── content/
│   │   ├── config.ts             # Content Collections schema
│   │   ├── doctors/              # Data dokter (JSON/YAML)
│   │   └── services/             # Data layanan (JSON/YAML)
│   ├── data/
│   │   └── clinic.ts             # Data statis klinik (nama, alamat, jam buka, dll)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro           # Home
│   │   ├── about.astro           # About
│   │   ├── services.astro        # Services
│   │   ├── services/
│   │   │   └── [slug].astro      # Detail service (untuk SEO per-halaman)
│   │   ├── doctors.astro         # Doctors
│   │   └── contact.astro         # Contact
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## 5. Spesifikasi Halaman

### 5.1 Home (`/`)
**Tujuan:** First impression, konversi pengunjung menjadi pasien

**Sections:**
1. **Hero Section**
   - Headline: nama klinik + tagline singkat (contoh: *"Your Trusted Medical Care in Legian, Bali"*)
   - Sub-headline: kalimat singkat layanan utama
   - CTA Buttons: "Our Services" + "Contact Us"
   - Background: foto klinik atau gambar medis profesional

2. **Quick Info Bar**
   - Ikon + jam operasional
   - Ikon + nomor telepon / WhatsApp
   - Ikon + alamat singkat
   - Ikon + bahasa yang dilayani (Indonesian, English)

3. **Featured Services** (3–4 layanan unggulan)
   - Icon + nama layanan + deskripsi singkat
   - Link "View All Services"

4. **Why Choose Us**
   - 3–4 poin keunggulan (dokter berpengalaman, fasilitas modern, dll)

5. **Meet Our Doctors** (preview 2–3 dokter)
   - Foto, nama, spesialisasi
   - Link "See All Doctors"

6. **CTA Banner**
   - "Need Medical Assistance? Contact Us Now"
   - Tombol telepon / WhatsApp

---

### 5.2 About (`/about`)
**Tujuan:** Membangun kepercayaan dan kredibilitas

**Sections:**
1. **Clinic Story** — Paragraf tentang sejarah & latar belakang pendirian klinik
2. **Mission & Vision** — Misi dan visi dalam format yang mudah dibaca
3. **Core Values** — 3–5 nilai utama klinik (Compassionate, Professional, Accessible, dll)
4. **Facilities** — Foto dan deskripsi fasilitas klinik
5. **Certifications / Accreditations** — Izin operasional, sertifikasi (jika ada)

---

### 5.3 Services (`/services` & `/services/[slug]`)
**Tujuan:** Informasi lengkap setiap layanan; setiap layanan punya URL tersendiri untuk SEO

**Daftar Layanan (contoh — disesuaikan dengan klinik):**
- General Practice / Dokter Umum
- Emergency Care / UGD
- Wound Treatment / Perawatan Luka
- IV Drip & Infusion Therapy
- Travel Medicine & Vaccination
- Minor Surgery
- Laboratory / Blood Test
- Medical Check-Up
- Dental Care (jika tersedia)
- Physiotherapy (jika tersedia)

**Komponen ServiceCard:**
```typescript
// src/content/config.ts
const services = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/services" }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    shortDescription: z.string().max(160),
    fullDescription: z.string(),
    icon: z.string(),           // nama icon Lucide/Heroicons
    image: z.string().optional(),
    features: z.array(z.string()),
    isEmergency: z.boolean().default(false),
    order: z.number(),
  })
});
```

---

### 5.4 Doctors (`/doctors`)
**Tujuan:** Menampilkan profesionalitas tim medis, membangun trust

**Komponen DoctorCard:**
```typescript
// src/content/config.ts
const doctors = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/doctors" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    title: z.string(),          // "dr." / "drg." / "dr. Sp.PD"
    specialization: z.string(),
    education: z.array(z.string()),
    languages: z.array(z.string()),  // ["Indonesian", "English"]
    photo: z.string(),
    schedule: z.string().optional(), // "Mon-Fri, 08.00-17.00"
    bio: z.string().optional(),
  })
});
```

**Layout:** Grid 2–3 kolom, foto dokter, nama, spesialisasi, bahasa, jadwal praktik

---

### 5.5 Contact (`/contact`)
**Tujuan:** Mempermudah pasien menghubungi klinik

**Konten:**
1. **Informasi Kontak**
   - Alamat lengkap (Jl. ... No. ..., Legian, Kuta, Badung, Bali 80361)
   - Telepon / WhatsApp
   - Email
   - Jam operasional (hari & jam)

2. **Peta Google Maps** — Embed iframe dengan `loading="lazy"`

3. **Contact Form** (opsional, kirim ke email via Formspree/Netlify Forms)
   - Nama, Email, Pesan
   - Honeypot field (anti-spam)

4. **Tombol Aksi Cepat**
   - WhatsApp Direct: `https://wa.me/628...`
   - Google Maps Directions link

---

## 6. SEO Strategy

### 6.1 On-Page SEO (per halaman)

| Halaman | Title Tag | Meta Description |
|---------|-----------|-----------------|
| Home | `Legian Medical Clinic – Medical Care in Legian Bali` | `Trusted clinic in Legian, Bali offering general practice, emergency care, IV drip, wound treatment & travel medicine. Open daily.` |
| About | `About Us – Legian Medical Clinic` | `Learn about Legian Medical Clinic's mission, team, and commitment to providing quality healthcare in Bali.` |
| Services | `Medical Services – Legian Medical Clinic Bali` | `Comprehensive medical services in Legian Bali: general practice, emergency care, IV therapy, vaccinations, lab tests & more.` |
| Doctors | `Our Doctors – Legian Medical Clinic` | `Meet our qualified medical team at Legian Medical Clinic, Bali. Experienced doctors speaking English and Indonesian.` |
| Contact | `Contact Legian Medical Clinic – Location & Hours` | `Find us in Legian, Bali. Get directions, contact number, WhatsApp, and clinic hours for Legian Medical Clinic.` |

### 6.2 Technical SEO

**`astro.config.mjs` (konfigurasi lengkap):**
```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://legianmedicalclinic.com',
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date(),
    }),
    tailwind(),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
```

**`public/robots.txt`:**
```txt
User-agent: *
Allow: /

Sitemap: https://legianmedicalclinic.com/sitemap-index.xml
```

**Canonical URL** — setiap halaman wajib memiliki `<link rel="canonical">`.

**Hreflang** — Jika ada versi bahasa Indonesia di masa depan:
```html
<link rel="alternate" hreflang="en" href="https://legianmedicalclinic.com/" />
<link rel="alternate" hreflang="id" href="https://legianmedicalclinic.com/id/" />
<link rel="alternate" hreflang="x-default" href="https://legianmedicalclinic.com/" />
```

---

## 7. GEO (Geographic SEO) Strategy

GEO SEO memastikan klinik ditemukan saat pengguna mencari layanan medis berdasarkan lokasi (Google Maps, Local Pack, "near me" searches).

### 7.1 Google Business Profile (GBP)
- Wajib daftarkan/claim di [Google Business Profile](https://business.google.com)
- Kategori: **Medical Clinic** + **Urgent Care Center**
- Isi lengkap: nama, alamat, telepon, jam buka, website, foto
- Konsistensi NAP (Name, Address, Phone) antara GBP dan website

### 7.2 NAP Consistency di Website
Pastikan nama, alamat, dan telepon **identik** di:
- Footer website (setiap halaman)
- Halaman Contact
- JSON-LD LocalBusiness (lihat bagian Schema.org)
- Google Business Profile
- Direktori lokal (Foursquare, TripAdvisor, dll)

### 7.3 Local Keywords
Integrasikan keyword berbasis lokasi secara natural:
- "clinic in Legian Bali"
- "doctor in Legian Kuta"
- "medical clinic near Legian Beach"
- "emergency clinic Bali Legian"
- "klinik di Legian Bali"

### 7.4 Google Maps Embed
Tambahkan Google Maps embed di halaman Contact dengan `title` yang deskriptif:
```html
<iframe
  src="https://maps.google.com/maps?q=Legian+Medical+Clinic&output=embed"
  title="Legian Medical Clinic Location Map"
  loading="lazy"
  allowfullscreen
/>
```

---

## 8. AI Search Optimization (AIO / GEO-AI)

AI Search Optimization memastikan konten website dikutip atau direferensikan oleh AI generatif (Google AI Overview, ChatGPT, Perplexity, Gemini, dll) saat pengguna menanyakan klinik medis di Legian.

### 8.1 Prinsip Utama AIO
1. **Factual & Authoritative** — Tulis konten faktual, jelas, dan bisa diverifikasi
2. **Entity Clarity** — Sebut nama klinik, lokasi, dan layanan secara eksplisit
3. **Structured Information** — Gunakan heading hierarkis (H1 → H2 → H3) dan list
4. **FAQ Format** — Tambahkan FAQ yang menjawab pertanyaan yang mungkin ditanyakan ke AI
5. **Consistent NAP** — Konsistensi data nama, alamat, nomor telepon di seluruh web

### 8.2 FAQ Section (untuk Setiap Halaman Utama)
Contoh FAQ yang direkomendasikan di halaman Home:
```
Q: Is Legian Medical Clinic open 24 hours?
A: Legian Medical Clinic operates from [jam buka]. For after-hours emergencies...

Q: Do the doctors speak English?
A: Yes, our medical staff are fluent in both English and Indonesian to serve international patients.

Q: Where is Legian Medical Clinic located?
A: We are located at [alamat lengkap], Legian, Kuta, Badung, Bali.

Q: What services does Legian Medical Clinic offer?
A: We offer general practice, emergency care, IV therapy, wound treatment, travel medicine, vaccinations, laboratory tests, and more.
```

### 8.3 Schema Markup untuk AI Understanding
Lihat Bagian 9 (JSON-LD Schema.org) untuk implementasi teknis lengkap.

### 8.4 llms.txt (Emerging Standard)
Tambahkan file `public/llms.txt` — format teks yang membantu AI crawler memahami konten website:
```
# Legian Medical Clinic

> A trusted medical clinic located in Legian, Bali, Indonesia. 
> Serving local residents, Indonesian tourists, and international visitors.

## Services
- General Practice
- Emergency Care
- IV Drip Therapy
- Wound Treatment
- Travel Medicine & Vaccination
- Laboratory Tests
- Medical Check-Up

## Location
Jl. [nama jalan], Legian, Kuta, Badung, Bali 80361, Indonesia

## Contact
Phone: +62-xxx-xxxx-xxxx
WhatsApp: +62-xxx-xxxx-xxxx
Email: info@legianmedicalclinic.com
Hours: [jam operasional]
```

---

## 9. JSON-LD Schema.org (Structured Data)

### 9.1 MedicalClinic Schema (Global — di `<head>` setiap halaman)
```astro
---
// src/components/layout/Head.astro
const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://legianmedicalclinic.com/#clinic",
  "name": "Legian Medical Clinic",
  "alternateName": "Legian Medical",
  "description": "Trusted medical clinic in Legian, Bali offering general practice, emergency care, IV therapy, travel medicine, and more.",
  "url": "https://legianmedicalclinic.com",
  "logo": "https://legianmedicalclinic.com/images/logo.png",
  "image": "https://legianmedicalclinic.com/images/clinic-exterior.jpg",
  "telephone": "+62-xxx-xxxx-xxxx",
  "email": "info@legianmedicalclinic.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. [nama jalan] No. [nomor]",
    "addressLocality": "Legian",
    "addressRegion": "Bali",
    "postalCode": "80361",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -8.7xxx,     // isi koordinat aktual
    "longitude": 115.1xxx    // isi koordinat aktual
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "08:00",
      "closes": "22:00"
    }
  ],
  "hasMap": "https://maps.google.com/?q=Legian+Medical+Clinic",
  "priceRange": "$$",
  "currenciesAccepted": "IDR, USD",
  "paymentAccepted": "Cash, Credit Card",
  "availableLanguage": ["Indonesian", "English"],
  "medicalSpecialty": [
    "General Practice",
    "Emergency Medicine",
    "Travel Medicine"
  ],
  "sameAs": [
    "https://g.page/legian-medical-clinic",
    "https://www.instagram.com/legianmedicalclinic"
  ]
};
---
<script type="application/ld+json" set:html={JSON.stringify(clinicSchema)} />
```

### 9.2 FAQPage Schema (Halaman Home & Services)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Legian Medical Clinic open every day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Legian Medical Clinic is open every day from 08:00 to 22:00 WIB."
      }
    },
    {
      "@type": "Question",
      "name": "Do the doctors at Legian Medical Clinic speak English?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our medical team is fluent in both English and Indonesian to serve our international and local patients."
      }
    }
  ]
}
```

### 9.3 Physician Schema (Halaman Doctors)
```json
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. [Nama Dokter]",
  "medicalSpecialty": "General Practice",
  "worksFor": {
    "@type": "MedicalClinic",
    "@id": "https://legianmedicalclinic.com/#clinic"
  },
  "image": "https://legianmedicalclinic.com/images/doctors/dr-nama.jpg",
  "knowsLanguage": ["id", "en"]
}
```

### 9.4 BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://legianmedicalclinic.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://legianmedicalclinic.com/services"
    }
  ]
}
```

---

## 10. Open Graph & Twitter Card

Setiap halaman harus memiliki meta OG yang unik:

```astro
<!-- src/components/layout/Head.astro -->
---
interface Props {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonicalURL?: string;
}
const {
  title,
  description,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  canonicalURL = Astro.url.href,
} = Astro.props;
---

<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="canonical" href={canonicalURL} />
<link rel="sitemap" href="/sitemap-index.xml" />

<!-- Primary Meta -->
<title>{title}</title>
<meta name="description" content={description} />
<meta name="robots" content="index, follow" />
<meta name="author" content="Legian Medical Clinic" />

<!-- Open Graph -->
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:type" content={ogType} />
<meta property="og:url" content={canonicalURL} />
<meta property="og:image" content={new URL(ogImage, Astro.site)} />
<meta property="og:image:alt" content="Legian Medical Clinic - Bali" />
<meta property="og:site_name" content="Legian Medical Clinic" />
<meta property="og:locale" content="en_US" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={new URL(ogImage, Astro.site)} />
```

---

## 11. Performance Requirements

| Metrik | Target | Tools |
|--------|--------|-------|
| Lighthouse Performance | ≥ 95 | Chrome DevTools |
| Lighthouse SEO | ≥ 95 | Chrome DevTools |
| Lighthouse Accessibility | ≥ 90 | Chrome DevTools |
| Core Web Vitals LCP | < 2.5s | PageSpeed Insights |
| Core Web Vitals CLS | < 0.1 | PageSpeed Insights |
| Core Web Vitals INP | < 200ms | PageSpeed Insights |
| First Contentful Paint | < 1.5s | WebPageTest |

**Implementasi Performance:**
- Semua gambar menggunakan `<Image />` dari `astro:assets` (otomatis optimasi + WebP)
- Font di-preload dengan `<link rel="preload">`
- Critical CSS di-inline, non-critical di-defer
- `ClientRouter` dari `astro:transitions` untuk navigasi halus tanpa full page reload
- Tidak ada JavaScript yang tidak perlu (Astro zero-JS by default)

---

## 12. Accessibility

- Semua gambar wajib memiliki `alt` text deskriptif
- Kontras warna memenuhi WCAG AA (rasio minimal 4.5:1)
- Keyboard navigation berfungsi penuh
- ARIA labels pada elemen interaktif
- Heading hierarchy: satu `<h1>` per halaman, diikuti `<h2>`, `<h3>`
- Form fields memiliki `<label>` yang terhubung

---

## 13. Desain & Brand Guidelines

### 13.1 Palet Warna (Rekomendasi)
| Nama | Hex | Penggunaan |
|------|-----|------------|
| Primary Blue | `#0A6EBD` | CTA, heading, link |
| Light Blue | `#E8F4FD` | Background section |
| Accent Green | `#2ECC71` | Badge "Open", status positif |
| Neutral Dark | `#1A1A2E` | Body text |
| Neutral Gray | `#6B7280` | Secondary text |
| White | `#FFFFFF` | Background utama |

### 13.2 Typography
| Peran | Font | Source |
|-------|------|--------|
| Heading | **Plus Jakarta Sans** | Google Fonts |
| Body | **Inter** | Google Fonts |

Font di-load dengan `font-display: swap` dan di-preload untuk performa optimal.

### 13.3 Tone of Voice
- Profesional namun hangat dan approachable
- Mengutamakan kepercayaan dan ketenangan pasien
- Bilingual: Inggris sebagai bahasa utama (target wisatawan), Indonesian sebagai bahasa sekunder

---

## 14. Multilingual Strategy

**v1.0:** Website dalam bahasa **Inggris** sebagai bahasa utama (target wisatawan asing yang dominan di Legian).

**v2.0 (Opsional):** Tambahkan bahasa Indonesia menggunakan Astro i18n routing:
```
/              → English (default)
/id/           → Indonesian
/id/tentang    → About (Indonesian)
```

---

## 15. Content Collections Schema Lengkap

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/services" }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    shortDescription: z.string().max(160),
    fullDescription: z.string(),
    icon: z.string(),
    image: z.string().optional(),
    features: z.array(z.string()),
    isEmergency: z.boolean().default(false),
    isFeatured: z.boolean().default(false),
    order: z.number(),
  })
});

const doctors = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/doctors" }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    title: z.string(),
    specialization: z.string(),
    education: z.array(z.string()),
    languages: z.array(z.string()),
    photo: z.string(),
    schedule: z.string().optional(),
    bio: z.string().optional(),
    order: z.number(),
  })
});

export const collections = { services, doctors };
```

---

## 16. Deployment & DevOps

### 16.1 Cloudflare Pages Setup
```bash
# Build command
pnpm run build

# Output directory
dist

# Environment variables (Cloudflare Pages dashboard)
PUBLIC_SITE_URL=https://legianmedicalclinic.com
```

### 16.2 Cloudflare Pages Configuration
```toml
# wrangler.toml (opsional, untuk custom config)
name = "legian-medical-clinic"
compatibility_date = "2026-01-01"
```

### 16.3 CI/CD Workflow
1. Push ke branch `main` → auto-deploy ke production
2. Push ke branch lain → auto-deploy ke preview URL
3. Cloudflare Pages otomatis generate SSL/HTTPS

---

## 17. Checklist Pre-Launch

### SEO
- [ ] Title & meta description unik setiap halaman
- [ ] Canonical URL terpasang di semua halaman
- [ ] `robots.txt` tersedia dan benar
- [ ] `sitemap.xml` ter-generate dan bisa diakses
- [ ] Sitemap didaftarkan ke Google Search Console
- [ ] Google Search Console terverifikasi
- [ ] JSON-LD Schema valid (cek: [schema.org validator](https://validator.schema.org))
- [ ] Open Graph tags benar (cek: [opengraph.xyz](https://opengraph.xyz))
- [ ] Semua gambar punya alt text

### GEO
- [ ] Google Business Profile terdaftar & terverifikasi
- [ ] NAP konsisten di website dan GBP
- [ ] Google Maps embed berfungsi
- [ ] Local keywords tersebar natural di konten

### AIO
- [ ] FAQ section tersedia
- [ ] `llms.txt` tersedia di `/llms.txt`
- [ ] Konten informatif, faktual, dan terstruktur
- [ ] Schema.org MedicalClinic lengkap

### Teknis
- [ ] Lighthouse score ≥ 95 (Performance & SEO)
- [ ] Core Web Vitals lulus semua
- [ ] Website tampil baik di mobile (responsive)
- [ ] SSL aktif (HTTPS)
- [ ] 404 page tersedia
- [ ] Form contact berfungsi
- [ ] Semua link tidak broken
- [ ] WhatsApp button berfungsi
- [ ] Google Maps embed berfungsi

---

## 18. Timeline Estimasi

| Fase | Deskripsi | Estimasi |
|------|-----------|---------|
| 1 | Setup project, konfigurasi Astro, layout dasar | 1–2 hari |
| 2 | Komponen UI (Navbar, Footer, Hero, Cards) | 2–3 hari |
| 3 | Halaman Home & About | 1–2 hari |
| 4 | Halaman Services & detail service | 1–2 hari |
| 5 | Halaman Doctors | 1 hari |
| 6 | Halaman Contact + form + maps | 1 hari |
| 7 | SEO, Schema.org, sitemap, robots.txt | 1 hari |
| 8 | Testing, optimasi performa, review | 1–2 hari |
| 9 | Deployment ke Cloudflare Pages | 0.5 hari |
| **Total** | | **~10–15 hari kerja** |

---

## 19. Referensi

- [Astro Documentation](https://docs.astro.build) — v5.x
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Schema.org MedicalClinic](https://schema.org/MedicalClinic)
- [Google Business Profile Help](https://support.google.com/business)
- [Google Search Central — Local SEO](https://developers.google.com/search/docs/specialty/local)
- [llms.txt Specification](https://llmstxt.org)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)

---

*Dokumen ini dibuat oleh Teridox untuk keperluan pengembangan website Legian Medical Clinic.*
*Versi: 1.0 | Juni 2026*