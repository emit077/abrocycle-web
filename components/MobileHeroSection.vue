<template>
  <section class="mobile-hero-section">
    <!-- Mobile Hero Background -->
    <div class="mobile-hero-bg">
      <div class="hero-overlay"></div>
    </div>

    <!-- Mobile Hero Content -->
    <div class="mobile-hero-content">
      <div class="hero-text">
        <h1 class="mobile-hero-title typography-hero-title-mobile">
          BEST BIKES FOR YOU
        </h1>
        <p class="mobile-hero-description typography-hero-description-mobile">
          ABRO Cycles brings you precision-crafted cruiser cycles designed for
          the modern Indian rider. Experience the perfect blend of comfort,
          style, and engineering excellence.
        </p>
        <!-- <VBtn
          class="mobile-buy-now-btn"
          variant="outlined"
          color="yellow"
          size="large"
          block
        >
          BUY NOW
        </VBtn> -->
      </div>

      <!-- Mobile Bike Image -->
      <div class="mobile-bike-container">
        <VImg
          src="./images/bike.png"
          alt="Featured Bike"
          class="mobile-bike-image"
          :cover="false"
        />
      </div>
    </div>
    <VBtn
      class="mobile-buy-now-btn typography-button-primary"
      variant="outlined"
      color="yellow"
      size="large"
      block
    >
      BUY NOW
    </VBtn>
  </section>
</template>

<script setup>
// Mobile-specific logic can be added here if needed
</script>

<style lang="scss" scoped>
.mobile-hero-section {
  min-height: 70vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-top: 80px; // Add padding to avoid navbar overlap
}

.mobile-hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.1;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(248, 249, 250, 0.8) 100%
  );
}

.mobile-hero-content {
  position: relative;
  z-index: 10;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
}

.hero-text {
  max-width: 400px;
  margin-bottom: 30px;
}

.mobile-hero-title {
  margin-bottom: 16px;
}

.mobile-hero-description {
  margin-bottom: 24px;
}

.mobile-buy-now-btn {
  border: 2px solid #ffd700 !important;
  color: #333 !important;
}

.mobile-bike-container {
  position: relative;
  width: 100%;
  // max-width: 300px;
  margin: 0 auto;
  z-index: 10;
}

.mobile-bike-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: top center;
  filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.15));
}

.mobile-features {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;

  .feature-item {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #555;

    .v-icon {
      color: #4caf50;
    }
  }
}

// Responsive adjustments for tablet
@media (max-width: 768px) and (min-width: 481px) {
  .mobile-hero-section {
    padding-top: 90px; // More padding for tablet screens
  }
}

// Responsive adjustments for very small screens
@media (max-width: 480px) {
  .mobile-hero-section {
    padding-top: 70px; // Slightly less padding for very small screens
  }

  .mobile-hero-content {
    padding: 16px;
  }

  .mobile-hero-title {
    margin-bottom: 12px;
  }

  .mobile-hero-description {
    margin-bottom: 20px;
  }

  .mobile-features {
    padding: 16px;
    gap: 16px;

    .feature-item {
      // Typography handled by global class
    }
  }
}

// Hide on desktop
@media (min-width: 769px) {
  .mobile-hero-section {
    display: none;
  }
}
</style>
