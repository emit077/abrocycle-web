<template>
  <div v-if="product" class="product-details-page">
    <!-- Hero Section -->
    <section class="product-hero">
      <div class="hero-background"></div>
      <VContainer class="hero-container">
        <VRow align="center" class="hero-content">
          <VCol cols="12" md="6" class="hero-image-col bg-transparent">
            <div class="product-image-container">
              <VImg
                :src="product.image"
                :alt="`${product.name} - ABRO Cycle Premium Bicycle`"
                class="product-hero-image"
                :cover="false"
              />
            </div>
          </VCol>
          <VCol cols="12" md="6" class="hero-text-col">
            <div class="hero-text-content">
              <h1 class="product-title typography-hero-title">
                {{ product.name }}
              </h1>
              <p class="product-subtitle typography-hero-description">
                {{ product.description }}
              </p>
              <div class="price-section">
                <div class="price-container">
                  <span class="price-label typography-price-label"
                    >Starting from</span
                  >
                  <span class="price-amount typography-price-amount">
                    ₹{{ product.price.toLocaleString() }}
                  </span>
                </div>
                <VChip class="stock-chip" color="success" variant="outlined">
                  <VIcon icon="mdi-check-circle" class="mr-1" />
                  In Stock
                </VChip>
              </div>
              <div class="hero-actions">
                <VBtn
                  class="contact-btn typography-button-primary"
                  color="yellow"
                  size="large"
                  variant="flat"
                  @click="contactUs"
                >
                  <VIcon icon="mdi-phone" class="mr-2" />
                  Contact for Purchase
                </VBtn>
                <VBtn
                  class="back-btn typography-button-secondary"
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
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <VContainer>
        <div class="features-container">
          <h2 class="features-title typography-section-title-light">
            KEY FEATURES
          </h2>
          <p class="features-subtitle typography-section-description">
            Discover what makes this bike special with our premium features
          </p>

          <div class="features-grid">
            <div
              v-for="(feature, index) in product.features"
              :key="index"
              class="feature-card"
            >
              <div class="feature-icon">
                <VIcon icon="mdi-check-circle" color="success" />
              </div>
              <div class="feature-content">
                <h3 class="feature-title typography-subsection-title">
                  {{ feature }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </VContainer>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section">
      <VContainer>
        <div class="cta-container">
          <div class="cta-content">
            <h2 class="cta-title typography-section-title-light text-white">
              Ready to Experience This Bike?
            </h2>
            <p
              class="cta-description typography-section-description text-white"
            >
              Contact our experts today to schedule a test ride or get more
              information about this amazing bike.
            </p>
            <div class="cta-actions">
              <VBtn
                class="cta-button typography-button-primary"
                color="white"
                size="large"
                variant="flat"
                @click="contactUs"
              >
                <VIcon icon="mdi-phone" class="mr-2" />
                Contact Our Experts
              </VBtn>
              <VBtn
                class="cta-button-secondary typography-button-secondary"
                color="white"
                size="large"
                variant="outlined"
                @click="goBack"
              >
                <VIcon icon="mdi-arrow-left" class="mr-2" />
                View All Products
              </VBtn>
            </div>
          </div>
        </div>
      </VContainer>
    </section>
  </div>

  <!-- Product Not Found -->
  <div v-else class="not-found-section">
    <VContainer>
      <div class="not-found-content">
        <VIcon icon="mdi-bike" size="120" color="grey-lighten-1" class="mb-4" />
        <h2 class="not-found-title typography-section-title-light">
          Product Not Found
        </h2>
        <p class="not-found-description typography-section-description">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <VBtn
          class="not-found-btn typography-button-primary"
          color="abro-blue"
          variant="outlined"
          @click="goBack"
        >
          <VIcon icon="mdi-arrow-left" class="mr-2" />
          Back to Products
        </VBtn>
      </div>
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
    image: "/abrocycle-web/images/bike.webp",
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
    image: "/abrocycle-web/images/bike.webp",
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
    image: "/abrocycle-web/images/bike.webp",
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
    image: "/abrocycle-web/images/bike.webp",
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
    image: "/abrocycle-web/images/bike.webp",
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
    image: "/abrocycle-web/images/bike.webp",
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

// SEO and Structured Data
useHead({
  title: computed(() =>
    product.value
      ? `${product.value.name} - ABRO Cycle Premium Bicycles`
      : "Product - ABRO Cycle"
  ),
  meta: [
    {
      name: "description",
      content: computed(() =>
        product.value
          ? `${
              product.value.description
            } Starting from ₹${product.value.price.toLocaleString()}. Available at ABRO Cycle, Haridwar.`
          : "Product details from ABRO Cycle"
      ),
    },
    {
      name: "keywords",
      content: computed(() =>
        product.value
          ? `${product.value.name}, bicycle, bike, cycling, Haridwar, Uttarakhand, ABRO Cycle, premium bikes`
          : "bicycle, bike, cycling, Haridwar"
      ),
    },
    {
      property: "og:title",
      content: computed(() =>
        product.value
          ? `${product.value.name} - ABRO Cycle`
          : "Product - ABRO Cycle"
      ),
    },
    {
      property: "og:description",
      content: computed(
        () => product.value?.description || "Product details from ABRO Cycle"
      ),
    },
    {
      property: "og:image",
      content: computed(
        () => product.value?.image || "/abrocycle-web/images/bike.webp"
      ),
    },
    {
      property: "og:type",
      content: "product",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: computed(() =>
        product.value
          ? `${product.value.name} - ABRO Cycle`
          : "Product - ABRO Cycle"
      ),
    },
    {
      name: "twitter:description",
      content: computed(
        () => product.value?.description || "Product details from ABRO Cycle"
      ),
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: computed(() =>
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.value?.name || "Bicycle",
          description:
            product.value?.description || "Premium bicycle from ABRO Cycle",
          image: product.value?.image || "/abrocycle-web/images/bike.webp",
          brand: {
            "@type": "Brand",
            name: "ABRO Cycle",
          },
          offers: {
            "@type": "Offer",
            price: product.value?.price || 0,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "LocalBusiness",
              name: "ABRO Cycle",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Haridwar",
                addressRegion: "Uttarakhand",
                addressCountry: "IN",
              },
            },
          },
          category: "Bicycles",
          additionalProperty:
            product.value?.features?.map((feature) => ({
              "@type": "PropertyValue",
              name: "Feature",
              value: feature,
            })) || [],
        })
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

<style lang="scss" scoped>
// Product Details Page
.product-details-page {
  min-height: 100vh;
  background: white;
  padding-top: 60px; // Account for navbar height
}

// Hero Section
.product-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  overflow: hidden;

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(25, 118, 210, 0.05) 0%,
      rgba(255, 215, 0, 0.05) 100%
    );
    z-index: 1;
  }

  .hero-container {
    position: relative;
    z-index: 2;
  }

  .hero-content {
    min-height: 80vh;
  }

  .hero-image-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .product-image-container {
    position: relative;
    width: 100%;
    max-width: 500px;
    min-height: 400px;
    height: auto;
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
    background: transparent !important;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: translateY(-10px);
    }

    .product-hero-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }

    &:hover .image-overlay {
      opacity: 1;
    }
  }

  .hero-text-col {
    display: flex;
    align-items: center;
  }

  .hero-text-content {
    max-width: 500px;
    text-align: left;

    .product-title {
      margin-bottom: 20px;
      color: #333;
    }

    .product-subtitle {
      margin-bottom: 30px;
      color: #666;
    }

    .price-section {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 40px;
      padding: 20px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

      .price-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .price-label {
          margin-bottom: 4px;
        }

        .price-amount {
          color: #333;
        }
      }

      .stock-chip {
        background: linear-gradient(135deg, #4caf50, #66bb6a) !important;
        color: white !important;
        border: none !important;
        box-shadow: 0 4px 16px rgba(76, 175, 80, 0.3);
      }
    }

    .hero-actions {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;

      .contact-btn {
        background: linear-gradient(135deg, #ffd700, #ffed4e) !important;
        color: #333 !important;
        border: none !important;
        box-shadow: 0 6px 24px rgba(255, 215, 0, 0.4);
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(255, 215, 0, 0.5);
        }
      }

      .back-btn {
        border: 2px solid #1976d2 !important;
        color: #1976d2 !important;
        background: transparent !important;
        transition: all 0.3s ease;

        &:hover {
          background: #1976d2 !important;
          color: white !important;
          transform: translateY(-2px);
        }
      }
    }
  }
}

// Features Section
.features-section {
  padding: 80px 0;
  background: #f8f9fa;

  .features-container {
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;

    .features-title {
      margin-bottom: 16px;
    }

    .features-subtitle {
      margin-bottom: 50px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
      margin-top: 40px;

      .feature-card {
        background: white;
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 16px;

        &:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
        }

        .feature-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #4caf50, #66bb6a);
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(76, 175, 80, 0.3);

          .v-icon {
            color: white;
            font-size: 24px;
          }
        }

        .feature-content {
          flex: 1;

          .feature-title {
            color: #333;
            margin: 0;
            text-align: left;
          }
        }
      }
    }
  }
}

// Call to Action Section
.cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    z-index: 1;
  }

  .cta-container {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;

    .cta-content {
      .cta-title {
        margin-bottom: 20px;
        color: white;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      .cta-description {
        margin-bottom: 40px;
        color: rgba(255, 255, 255, 0.9);
        line-height: 1.6;
      }

      .cta-actions {
        display: flex;
        gap: 20px;
        justify-content: center;
        flex-wrap: wrap;

        .cta-button {
          background: white !important;
          color: #1976d2 !important;
          border-radius: 30px;
          padding: 16px 32px;
          box-shadow: 0 6px 24px rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 32px rgba(255, 255, 255, 0.4);
            background: rgba(255, 255, 255, 0.95) !important;
          }
        }

        .cta-button-secondary {
          border: 2px solid white !important;
          color: white !important;
          background: transparent !important;
          border-radius: 30px;
          padding: 14px 30px;
          transition: all 0.3s ease;

          &:hover {
            background: white !important;
            color: #1976d2 !important;
            transform: translateY(-3px);
          }
        }
      }
    }
  }
}

// Not Found Section
.not-found-section {
  padding: 120px 0;
  background: #f8f9fa;
  text-align: center;

  .not-found-content {
    max-width: 500px;
    margin: 0 auto;

    .not-found-title {
      margin-bottom: 20px;
    }

    .not-found-description {
      margin-bottom: 40px;
    }

    .not-found-btn {
      border: 2px solid #1976d2 !important;
      color: #1976d2 !important;
      background: transparent !important;
      transition: all 0.3s ease;

      &:hover {
        background: #1976d2 !important;
        color: white !important;
        transform: translateY(-2px);
      }
    }
  }
}

// Responsive Design
@media (max-width: 768px) {
  .product-hero {
    min-height: auto;
    padding: 40px 0;

    .hero-content {
      min-height: auto;
    }

    .hero-image-col {
      margin-bottom: 40px;
    }

    .product-image-container {
      min-height: 300px;
      height: auto;
    }

    .hero-text-content {
      text-align: center;

      .hero-actions {
        justify-content: center;
        flex-direction: column;
        align-items: center;

        .contact-btn,
        .back-btn {
          width: 100%;
          max-width: 300px;
        }
      }
    }
  }

  .features-section {
    padding: 60px 0;

    .features-grid {
      grid-template-columns: 1fr;
      gap: 16px;

      .feature-card {
        padding: 20px;
        flex-direction: column;
        text-align: center;

        .feature-content .feature-title {
          text-align: center;
        }
      }
    }
  }

  .cta-section {
    padding: 60px 0;

    .cta-actions {
      flex-direction: column;
      align-items: center;

      .cta-button,
      .cta-button-secondary {
        width: 100%;
        max-width: 300px;
      }
    }
  }
}

@media (max-width: 480px) {
  .product-hero {
    .product-image-container {
      min-height: 250px;
      height: auto;
    }

    .hero-text-content {
      .price-section {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 16px;
      }
    }
  }

  .features-section {
    padding: 40px 0;

    .features-grid {
      gap: 12px;

      .feature-card {
        padding: 16px;
      }
    }
  }

  .cta-section {
    padding: 40px 0;
  }
}
</style>
