<template>
  <section class="products-section">
    <div class="products-container">
      <h2 class="products-title typography-section-title-light">
        OUR PREMIUM BIKES
      </h2>
      <p class="products-subtitle typography-section-description">
        Discover our carefully crafted cruiser cycles designed for the modern
        Indian rider
      </p>

      <div class="products-grid">
        <div class="product-card" v-for="product in products" :key="product.id">
          <div class="product-image">
            <VImg
              :src="product.image"
              :alt="product.name"
              class="bike-image"
              :cover="false"
            />
            <div class="product-badge" v-if="product.isPro">PRO</div>
          </div>

          <div class="product-content">
            <h3 class="product-name typography-product-title">
              {{ product.name }}
            </h3>
            <p class="product-description typography-product-description">
              {{ product.description }}
            </p>

            <div class="product-price">
              <span class="price-label typography-price-label"
                >Starting from</span
              >
              <span class="price-amount typography-price-amount"
                >₹{{ product.price.toLocaleString() }}</span
              >
            </div>

            <div class="product-actions">
              <VBtn
                class="buy-now-btn typography-button-secondary"
                variant="flat"
                color="yellow"
                size="large"
                block
                @click="buyNow(product.id)"
              >
                VIEW DETAILS
              </VBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Product data
const products = ref([
  {
    id: 1,
    name: "ABRO Cruiser Falcon",
    description:
      "Perfect for city commuting and leisure rides. Features premium comfort seating and smooth gear shifting.",
    image: "./images/bike.png",
    price: 15999,
    isPro: false,
    features: [
      "Premium Comfort Seating",
      "Smooth 7-Speed Gear System",
      "Alloy Frame Construction",
      "Puncture Resistant Tires",
      "LED Headlight & Taillight",
    ],
  },
  {
    id: 2,
    name: "ABRO Cruiser Falcon Pro",
    description:
      "Advanced cruiser with premium features for the discerning rider. Enhanced performance and luxury comfort.",
    image: "./images/bike.png",
    price: 22999,
    isPro: true,
    features: [
      "Luxury Comfort Seating",
      "Advanced 21-Speed Gear System",
      "Carbon Fiber Frame",
      "Premium Disc Brakes",
      "Smart LED Display",
      "Wireless Phone Charging",
    ],
  },
]);

// Methods
const viewProduct = (productId) => {
  navigateTo(`/products/${productId}`);
};

const buyNow = (productId) => {
  // Handle buy now action
  console.log(`Buying product ${productId}`);
  // You can implement actual purchase logic here
};
</script>

<style lang="scss" scoped>
// Products Section
.products-section {
  padding: 60px 0;
  background: #f8f9fa;
}

.products-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  text-align: center;
}

.products-title {
  margin-bottom: 12px;
}

.products-subtitle {
  margin-bottom: 40px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 32px;
}

.product-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }
}

.product-image {
  position: relative;
  height: 220px;
  overflow: hidden;

  .bike-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0% 0%;
    transition: transform 0.3s ease;
  }

  .product-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    color: #333;
    padding: 6px 12px;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);
  }

  &:hover .bike-image {
    transform: scale(1.03);
  }
}

.product-content {
  padding: 20px;
}

.product-name {
  margin-bottom: 8px;
}

.product-description {
  margin-bottom: 16px;
}

.product-features {
  margin-bottom: 16px;

  .feature-item {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 6px;
    color: #555;

    .v-icon {
      color: #4caf50;
    }
  }
}

.product-price {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 6px;

  .price-label {
    margin-bottom: 2px;
  }

  .price-amount {
    // Typography handled by global class
  }
}

.product-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;

  .view-details-btn {
    border: 2px solid #1976d2 !important;
    color: #1976d2 !important;
    padding: 8px 16px;
  }

  .buy-now-btn {
    background: linear-gradient(135deg, #ffd700, #ffed4e) !important;
    color: #333 !important;
    padding: 8px 16px;
    box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);
    }
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .products-section {
    padding: 40px 0;
  }

  .products-container {
    padding: 0 12px;
  }

  .products-title {
    margin-bottom: 8px;
  }

  .products-subtitle {
    margin-bottom: 32px;
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 24px;
  }

  .product-card {
    max-width: 100%;
    margin: 0 auto;
  }

  .product-image {
    height: 180px;
  }

  .product-content {
    padding: 16px;
  }

  .product-name {
    // Typography handled by global class
  }

  .product-description {
    margin-bottom: 12px;
  }

  .product-features {
    margin-bottom: 12px;

    .feature-item {
      margin-bottom: 4px;
    }
  }

  .product-price {
    margin-bottom: 12px;
    padding: 10px;

    .price-amount {
      // Typography handled by global class
    }
  }

  .product-actions {
    gap: 6px;

    .view-details-btn,
    .buy-now-btn {
      padding: 6px 12px;
    }
  }
}

@media (max-width: 480px) {
  .products-section {
    padding: 32px 0;
  }

  .products-container {
    padding: 0 8px;
  }

  .products-title {
    // Typography handled by global class
  }

  .products-subtitle {
    margin-bottom: 24px;
  }

  .products-grid {
    gap: 16px;
    margin-top: 20px;
  }

  .product-image {
    height: 160px;
  }

  .product-content {
    padding: 12px;
  }

  .product-name {
    // Typography handled by global class
  }

  .product-description {
    // Typography handled by global class
  }

  .product-features {
    .feature-item {
      // Typography handled by global class
    }
  }

  .product-price {
    padding: 8px;

    .price-label {
      // Typography handled by global class
    }

    .price-amount {
      // Typography handled by global class
    }
  }

  .product-actions {
    .view-details-btn,
    .buy-now-btn {
      padding: 6px 10px;
    }
  }
}
</style>
