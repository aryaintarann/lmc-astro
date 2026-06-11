export const clinic = {
  name: "Legian Medical Clinic",
  tagline: "Your Trusted Medical Care in Legian, Bali",
  description:
    "Trusted medical clinic in Legian, Bali offering general practice, emergency care, IV therapy, travel medicine, wound treatment, and more. English-speaking doctors available daily.",
  url: "https://legianmedicalclinic.com",
  logo: "/images/logo.png",
  ogImage: "/images/og-image.jpg",
  address: {
    street: "Jl. Padma Utara No. 5",
    locality: "Legian",
    region: "Bali",
    postalCode: "80361",
    country: "Indonesia",
    countryCode: "ID",
    full: "Jl. Padma Utara No. 5, Legian, Kuta, Badung, Bali 80361, Indonesia",
  },
  geo: {
    latitude: -8.7102,
    longitude: 115.1653,
  },
  contact: {
    phone: "+62-361-123456",
    whatsapp: "+628123456789",
    whatsappDisplay: "+62 812-3456-789",
    email: "info@legianmedicalclinic.com",
  },
  hours: {
    display: "Mon – Sun, 08:00 – 22:00 WIB",
    opens: "08:00",
    closes: "22:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
  languages: ["English", "Indonesian"],
  payment: {
    currencies: "IDR, USD",
    methods: "Cash, Credit Card, Debit Card",
  },
  priceRange: "$$",
  socialMedia: {
    instagram: "https://www.instagram.com/legianmedicalclinic",
    googleBusiness: "https://g.page/legian-medical-clinic",
  },
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.5!2d115.1653!3d-8.7102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLegian+Medical+Clinic!5e0!3m2!1sen!2sid!4v1",
  googleMapsLink: "https://maps.google.com/?q=Legian+Medical+Clinic+Bali",
};

export type Clinic = typeof clinic;
