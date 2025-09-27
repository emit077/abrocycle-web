<template>
  <div class="py-8">
    <VContainer>
      <VRow>
        <VCol cols="12" class="text-center mb-8">
          <h1 class="text-h3 text-md-h2 font-weight-bold text-abro-blue mb-4">
            Our Product Range
          </h1>
          <p class="text-h6 text-grey-darken-1">
            Explore our complete collection of premium bicycles
          </p>
        </VCol>
      </VRow>

      <VRow class="product-grid">
        <VCol
          v-for="product in products"
          :key="product.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <VCard
            class="card-hover h-100"
            elevation="2"
            @click="navigateToProduct(product.id)"
          >
            <VImg :src="product.image" :alt="product.name" height="250" cover />
            <VCardTitle class="text-h6">
              {{ product.name }}
            </VCardTitle>
            <VCardText>
              <p class="text-body-2 text-grey-darken-1 mb-3">
                {{ product.description }}
              </p>
              <div class="d-flex justify-space-between align-center">
                <span class="text-h6 text-abro-orange font-weight-bold">
                  ₹{{ product.price.toLocaleString() }}
                </span>
                <VBtn color="abro-blue" variant="outlined" size="small">
                  View Details
                </VBtn>
              </div>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: "Products - ABRO Cycle",
  meta: [
    {
      name: "description",
      content:
        "Browse our complete range of premium bicycles at ABRO Cycle. Mountain bikes, city cruisers, racing bikes and more.",
    },
  ],
});

// Extended products data
const products = ref([
  {
    id: 1,
    name: "Mountain Explorer Pro",
    description:
      "Advanced mountain bike with full suspension and premium components",
    price: 45000,
    image: "/images/mountain-bike-pro.jpg",
  },
  {
    id: 2,
    name: "City Cruiser Deluxe",
    description:
      "Comfortable urban bike with ergonomic design and smooth gear system",
    price: 22000,
    image: "/images/city-bike-deluxe.jpg",
  },
  {
    id: 3,
    name: "Speed Racer Elite",
    description:
      "Professional racing bike with carbon frame and aerodynamic design",
    price: 55000,
    image: "/images/racing-bike-elite.jpg",
  },
  {
    id: 4,
    name: "Family Fun Plus",
    description: "Safe and comfortable family bike with child safety features",
    price: 20000,
    image: "/images/family-bike-plus.jpg",
  },
  {
    id: 5,
    name: "Electric Commuter",
    description: "Eco-friendly electric bike for effortless commuting",
    price: 65000,
    image: "/images/electric-bike.jpg",
  },
  {
    id: 6,
    name: "Folding Compact",
    description: "Space-saving folding bike perfect for urban living",
    price: 28000,
    image: "/images/folding-bike.jpg",
  },
]);

const navigateToProduct = (productId) => {
  navigateTo(`/products/${productId}`);
};
</script>
