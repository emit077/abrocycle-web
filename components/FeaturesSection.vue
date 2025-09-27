<template>
  <section class="features-section">
    <div class="features-container">
      <h2 class="features-title typography-section-title-light text-white">
        OUR ADVANTAGES
      </h2>

      <div class="features-grid">
        <div class="feature-item" v-for="feature in features" :key="feature.id">
          <div class="feature-icon">
            <VIcon :icon="feature.icon" size="48" color="yellow" />
          </div>
          <div class="feature-content">
            <h3 class="feature-title typography-feature-title">
              {{ feature.title }}
            </h3>
            <p class="feature-description typography-feature-description">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Features data
const features = ref([
  {
    id: 1,
    icon: "mdi-truck-delivery",
    title: "Free Shipping",
    description: "Free shipping from ₹15,000",
  },
  {
    id: 2,
    icon: "mdi-shield-check",
    title: "Warranty Service",
    description: "Warranty service for 12 months",
  },
  {
    id: 3,
    icon: "mdi-swap-horizontal",
    title: "Exchange and Return",
    description: "Exchange and return within 7 days",
  },
  {
    id: 4,
    icon: "mdi-tag",
    title: "Discounts for Customers",
    description: "Special discounts for loyal customers",
  },
]);
</script>

<style lang="scss" scoped>
.features-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  position: relative;
  overflow: hidden;
}

.features-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("./images/bike.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.1;
  filter: blur(2px);
  z-index: 1;
}

.features-container {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 40px;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 215, 0, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.feature-item:hover::before {
  opacity: 1;
}

.feature-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 215, 0, 0.3);
}

.feature-icon {
  position: relative;
  z-index: 10;
  margin-bottom: 20px;
  padding: 16px;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 50%;
  border: 2px solid rgba(255, 215, 0, 0.3);
  transition: all 0.3s ease;
}

.feature-item:hover .feature-icon {
  background: rgba(255, 215, 0, 0.2);
  border-color: rgba(255, 215, 0, 0.5);
  transform: scale(1.1);
}

.feature-content {
  position: relative;
  z-index: 10;
}

.feature-title {
  margin-bottom: 12px;
}

.feature-description {
  // Typography handled by global class
}

// Responsive adjustments
@media (max-width: 768px) {
  .features-section {
    padding: 60px 0;
  }

  .features-title {
    margin-bottom: 40px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-top: 30px;
  }

  .feature-item {
    padding: 25px 15px;
  }

  .feature-title {
    // Typography handled by global class
  }

  .feature-description {
    // Typography handled by global class
  }
}

@media (max-width: 480px) {
  .features-section {
    padding: 50px 0;
  }

  .features-title {
    margin-bottom: 30px;
  }

  .features-grid {
    gap: 20px;
    margin-top: 20px;
  }

  .feature-item {
    padding: 20px 12px;
  }

  .feature-icon {
    margin-bottom: 15px;
    padding: 12px;
  }

  .feature-title {
    margin-bottom: 8px;
  }

  .feature-description {
    // Typography handled by global class
  }
}
</style>
