<template>
  <div class="home-page hero-bg">
    <!-- Main Content -->
    <div class="main-content px-0">
      <!-- Desktop Hero Section -->
      <HomeHeroSection />

      <!-- Mobile Hero Section -->
      <HomeMobileHeroSection />

      <!-- Products Section -->
      <HomeProductsSection />

      <!-- Features Section -->
      <HomeFeaturesSection />
      <!-- Contact Section -->
      <HomeContactSection />
    </div>
  </div>
</template>

<script setup>
// SEO and Structured Data
useHead({
  title: "ABRO Cycle - Premium Bicycles in Haridwar, Uttarakhand",
  meta: [
    {
      name: "description",
      content:
        "Premium bicycles and cycling accessories in Haridwar, Uttarakhand, India. Quality bikes for every adventure with expert service and maintenance.",
    },
    {
      name: "keywords",
      content:
        "bicycles, bikes, cycling, Haridwar, Uttarakhand, premium bikes, cruiser cycles, mountain bikes, city bikes, cycling accessories",
    },
    {
      property: "og:title",
      content: "ABRO Cycle - Premium Bicycles in Haridwar",
    },
    {
      property: "og:description",
      content:
        "Premium bicycles and cycling accessories in Haridwar, Uttarakhand, India. Quality bikes for every adventure.",
    },
    {
      property: "og:image",
      content: "/abrocycle-web/images/hero-bg.png",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "ABRO Cycle - Premium Bicycles",
    },
    {
      name: "twitter:description",
      content: "Premium bicycles in Haridwar, Uttarakhand",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "ABRO Cycle",
        description:
          "Premium bicycles and cycling accessories in Haridwar, Uttarakhand, India",
        url: "https://yourdomain.com",
        telephone: "+91-XXXXXXXXXX",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Your Street Address",
          addressLocality: "Haridwar",
          addressRegion: "Uttarakhand",
          postalCode: "249401",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "29.9457",
          longitude: "78.1642",
        },
        openingHours: "Mo-Sa 09:00-18:00",
        priceRange: "₹15,999 - ₹55,000",
        image: "/abrocycle-web/images/hero-bg.png",
        sameAs: [
          "https://facebook.com/abrocycle",
          "https://instagram.com/abrocycle",
        ],
      }),
    },
  ],
});
</script>

<style lang="scss" scoped>
.hero-bg {
  background-image: url("/abrocycle-web/images/hero-bg.webp");
  background-repeat: no-repeat;
  background-size: contain;
}

// Mobile background
@media (max-width: 768px) {
  .hero-bg {
    background-image: url("/abrocycle-web/images/hero-bg-mobile.webp");
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
