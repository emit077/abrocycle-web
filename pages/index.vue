<template>
  <div class="home-page hero-bg">
    <!-- Main Content -->
    <div class="main-content px-0">
      <!-- Desktop Hero Section -->
      <HeroSection />

      <!-- Mobile Hero Section -->
      <MobileHeroSection />

      <!-- Products Section -->
      <ProductsSection />

      <!-- Features Section -->
      <FeaturesSection />
      <!-- Contact Section -->
      <ContactSection />
    </div>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: "ABRO Cycle - Premium Bicycles in Haridwar",
  meta: [
    {
      name: "description",
      content:
        "ABRO Cycle offers premium bicycles and cycling accessories in Haridwar, Uttarakhand, India. Quality bikes for every adventure.",
    },
  ],
});
</script>

<style lang="scss" scoped>
.hero-bg {
  background-image: url("/images/hero-bg-1.png");
  background-repeat: no-repeat;
  background-size: contain;
}

// Mobile background
@media (max-width: 768px) {
  .hero-bg {
    background-image: url("/images/hero-bg-mobile-1.png");
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
