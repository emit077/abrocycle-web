<template>
  <section class="features-section px-5 py-10 text-center features-bg">
    <!-- Header -->
    <div class="mb-10">
      <h2 class="features-title typography-section-title-light text-white mb-5">
        OUR ADVANTAGES
      </h2>
      <p class="features-subtitle typography-section-description text-white">
        Why thousands of customers choose ABRO Cycle for their cycling needs
      </p>
    </div>

    <!-- Features Grid -->
    <v-row class="justify-center mb-10">
      <v-col
        cols="12"
        md="3"
        v-for="feature in features"
        :key="feature.id"
        class="text-center"
      >
        <img
          :src="feature.icon"
          :alt="feature.title"
          class="feature-icon mb-5"
        />
        <h3 class="feature-title typography-feature-title">
          {{ feature.title }}
        </h3>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
// Features data
const features = ref([
  {
    id: 1,
    icon: "/icons/shipping.png",
    title: "Free Shipping",
    description: "Free shipping from ₹15,000",
    highlight: "No hidden charges",
  },
  {
    id: 2,
    icon: "/icons/warranty.png",
    title: "Warranty Service",
    description: "Warranty service for 12 months",
    highlight: "Full coverage included",
  },
  {
    id: 3,
    icon: "/icons/style.png",
    title: "Premium Style",
    description: "Latest designs and trends",
    highlight: "Always in fashion",
  },
  {
    id: 4,
    icon: "/icons/maintenance.png",
    title: "Free Maintenance",
    description: "Complimentary service for 6 months",
    highlight: "Expert care included",
  },
]);

// Navigation function
const navigateToProducts = () => {
  navigateTo("/products");
};
</script>

<style lang="scss" scoped>
.features-bg {
  background-image: url("/images/feature-bg.png");
  background-size: cover;
}
.feature-icon {
  width: 80px;
  height: 80px;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
}

.feature-title {
  color: white;
  margin-bottom: 0;
}
</style>
