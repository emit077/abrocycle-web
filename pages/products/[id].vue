<template>
  <div v-if="product" class="py-8">
    <VContainer>
      <VRow>
        <VCol cols="12" md="6">
          <VImg
            :src="product.image"
            :alt="product.name"
            height="500"
            cover
            class="rounded-lg"
          />
        </VCol>
        <VCol cols="12" md="6">
          <div class="pa-4">
            <h1 class="text-h4 text-md-h3 font-weight-bold text-abro-blue mb-4">
              {{ product.name }}
            </h1>
            <p class="text-h6 text-grey-darken-1 mb-6">
              {{ product.description }}
            </p>
            <div class="mb-6">
              <h3 class="text-h5 font-weight-bold mb-3">Features:</h3>
              <VList>
                <VListItem
                  v-for="feature in product.features"
                  :key="feature"
                  class="px-0"
                >
                  <template #prepend>
                    <VIcon
                      icon="mdi-check-circle"
                      color="success"
                      class="mr-3"
                    />
                  </template>
                  <VListItemTitle>{{ feature }}</VListItemTitle>
                </VListItem>
              </VList>
            </div>
            <div class="d-flex align-center mb-6">
              <span class="text-h4 text-abro-orange font-weight-bold mr-4">
                ₹{{ product.price.toLocaleString() }}
              </span>
              <VChip color="success" variant="outlined"> In Stock </VChip>
            </div>
            <div class="d-flex gap-4">
              <VBtn
                color="abro-orange"
                size="large"
                variant="elevated"
                @click="contactUs"
              >
                <VIcon icon="mdi-phone" class="mr-2" />
                Contact for Purchase
              </VBtn>
              <VBtn
                color="abro-blue"
                size="large"
                variant="outlined"
                @click="goBack"
              >
                <VIcon icon="mdi-arrow-left" class="mr-2" />
                Back to Products
              </VBtn>
            </div>
          </div>
        </VCol>
      </VRow>
    </VContainer>
  </div>
  <div v-else class="py-16 text-center">
    <VContainer>
      <VIcon icon="mdi-bike" size="120" color="grey-lighten-1" class="mb-4" />
      <h2 class="text-h4 text-grey-darken-1 mb-4">Product Not Found</h2>
      <VBtn color="abro-blue" variant="outlined" @click="goBack">
        Back to Products
      </VBtn>
    </VContainer>
  </div>
</template>

<script setup>
const route = useRoute();
const productId = route.params.id;

// Extended product data with features
const products = {
  1: {
    id: 1,
    name: "Mountain Explorer Pro",
    description:
      "Advanced mountain bike designed for challenging terrains and off-road adventures. Built with premium components and full suspension system.",
    price: 45000,
    image: "/images/mountain-bike-pro.jpg",
    features: [
      "Full suspension system for smooth rides",
      "Premium aluminum frame",
      "21-speed gear system",
      "Disc brakes for reliable stopping",
      "Shock-absorbing front fork",
      "Durable mountain tires",
    ],
  },
  2: {
    id: 2,
    name: "City Cruiser Deluxe",
    description:
      "Comfortable urban bike perfect for daily commuting and city tours. Features ergonomic design and smooth gear transitions.",
    price: 22000,
    image: "/images/city-bike-deluxe.jpg",
    features: [
      "Ergonomic saddle for comfort",
      "7-speed gear system",
      "Lightweight aluminum frame",
      "Comfortable upright riding position",
      "Reflective safety features",
      "Easy maintenance design",
    ],
  },
  3: {
    id: 3,
    name: "Speed Racer Elite",
    description:
      "Professional racing bike with carbon frame and aerodynamic design. Built for speed and performance.",
    price: 55000,
    image: "/images/racing-bike-elite.jpg",
    features: [
      "Carbon fiber frame",
      "Professional racing components",
      "Aerodynamic design",
      "Lightweight construction",
      "High-performance gear system",
      "Professional racing tires",
    ],
  },
  4: {
    id: 4,
    name: "Family Fun Plus",
    description:
      "Safe and comfortable family bike with child safety features. Perfect for family outings and recreational cycling.",
    price: 20000,
    image: "/images/family-bike-plus.jpg",
    features: [
      "Child safety features",
      "Stable and comfortable ride",
      "Easy-to-use gear system",
      "Durable construction",
      "Safety reflectors",
      "Family-friendly design",
    ],
  },
  5: {
    id: 5,
    name: "Electric Commuter",
    description:
      "Eco-friendly electric bike for effortless commuting. Features powerful motor and long-lasting battery.",
    price: 65000,
    image: "/images/electric-bike.jpg",
    features: [
      "Electric motor assistance",
      "Long-lasting lithium battery",
      "Eco-friendly design",
      "Digital display",
      "Regenerative braking",
      "Quick charging capability",
    ],
  },
  6: {
    id: 6,
    name: "Folding Compact",
    description:
      "Space-saving folding bike perfect for urban living. Easy to store and transport.",
    price: 28000,
    image: "/images/folding-bike.jpg",
    features: [
      "Compact folding design",
      "Lightweight aluminum frame",
      "Easy storage solution",
      "Portable and convenient",
      "Quick folding mechanism",
      "Urban-friendly features",
    ],
  },
};

const product = computed(() => products[productId]);

// SEO
useHead({
  title: computed(() =>
    product.value
      ? `${product.value.name} - ABRO Cycle`
      : "Product - ABRO Cycle"
  ),
  meta: [
    {
      name: "description",
      content: computed(
        () => product.value?.description || "Product details from ABRO Cycle"
      ),
    },
  ],
});

const contactUs = () => {
  window.open("tel:+916395936010", "_self");
};

const goBack = () => {
  navigateTo("/products");
};
</script>
