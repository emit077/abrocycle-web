<template>
  <section class="hero-section px-5">
    <!-- Featured Bike -->
    <div class="featured-bike">
      <VImg src="./images/bike.png" alt="Featured Bike" class="bike-image" />
    </div>
    <!-- container for hero content -->
    <div class="hero-content">
      <h1 class="hero-title typography-hero-title">BEST BIKES FOR YOU</h1>
      <p class="hero-description typography-hero-description">
        ABRO Cycles brings you precision-crafted cruiser cycles designed for the
        modern Indian rider. Experience the perfect blend of comfort, style, and
        engineering excellence.
      </p>
      <VBtn
        class="buy-now-btn typography-button-primary"
        variant="outlined"
        color="yellow"
        size="large"
      >
        BUY NOW
      </VBtn>
    </div>
  </section>
</template>

<script setup>
// Pre-generate X shapes for consistent rendering
const xShapes = ref([]);

// Initialize X shapes on mount
onMounted(() => {
  xShapes.value = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    size: Math.random() * 20 + 10,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.1,
    animationDelay: Math.random() * 2,
  }));
});
</script>

<style lang="scss" scoped>
// Hero Section
.hero-section {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 0;
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 500px;
  text-align: center;

  .hero-title {
    margin-bottom: 20px;
  }

  .hero-description {
    margin-bottom: 40px;
  }

  .buy-now-btn {
    border: 2px solid #ffd700 !important;
    color: #333 !important;
    padding: 12px 40px;
  }
}

.featured-bike {
  position: relative;
  z-index: 10;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .bike-image {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
  }
}

// Responsive adjustments
@media (max-width: 1200px) {
  .hero-content .hero-title {
    // Typography handled by global class
  }

  .featured-bike .bike-image {
    max-width: 400px;
  }
}

// Hide on mobile - use MobileHeroSection instead
@media (max-width: 768px) {
  .hero-section {
    display: none;
  }
}
</style>
