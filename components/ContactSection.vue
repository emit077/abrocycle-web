<template>
  <section class="contact-section">
    <!-- Background Elements -->
    <div class="contact-bg-elements">
      <div class="bg-circle bg-circle-1"></div>
      <div class="bg-circle bg-circle-2"></div>
      <div class="bg-circle bg-circle-3"></div>
    </div>

    <div class="contact-container">
      <!-- Header Section -->
      <div class="contact-header">
        <h2 class="contact-title typography-section-title-light">
          GET IN TOUCH
        </h2>
        <p class="contact-description typography-section-description">
          Ready to find your perfect bike? Contact us for personalized
          recommendations and expert advice.
        </p>
      </div>

      <!-- Main Content -->
      <div class="contact-content">
        <!-- Contact Methods Grid -->
        <div class="contact-methods">
          <div class="contact-method-card primary-card">
            <div class="method-icon">
              <VIcon icon="mdi-phone" size="28" color="white" />
            </div>
            <div class="method-content">
              <h3 class="method-title typography-subsection-title">Call Us</h3>
              <p class="method-number typography-hero-description">
                +91 63959 36010
              </p>
              <p class="method-description typography-product-description">
                Speak directly with our bike experts
              </p>
              <VBtn
                class="method-action-btn"
                variant="flat"
                color="white"
                size="small"
                @click="makeCall"
              >
                <VIcon icon="mdi-phone" class="mr-1" size="16" />
                Call Now
              </VBtn>
            </div>
          </div>

          <div class="contact-method-card">
            <div class="method-icon">
              <VIcon icon="mdi-map-marker" size="28" color="yellow" />
            </div>
            <div class="method-content">
              <h3 class="method-title typography-subsection-title">Visit Us</h3>
              <p class="method-address typography-hero-description">
                Haridwar, Uttarakhand
              </p>
              <p class="method-description typography-product-description">
                Experience our bikes in person
              </p>
              <VBtn
                class="method-action-btn"
                variant="outlined"
                color="yellow"
                size="small"
                @click="openMaps"
              >
                <VIcon icon="mdi-map" class="mr-1" size="16" />
                Get Directions
              </VBtn>
            </div>
          </div>

          <div class="contact-method-card">
            <div class="method-icon">
              <VIcon icon="mdi-email" size="28" color="yellow" />
            </div>
            <div class="method-content">
              <h3 class="method-title typography-subsection-title">Email Us</h3>
              <p class="method-email typography-hero-description">
                info@abrocycle.com
              </p>
              <p class="method-description typography-product-description">
                Send us your detailed queries
              </p>
              <VBtn
                class="method-action-btn"
                variant="outlined"
                color="yellow"
                size="small"
                @click="sendEmail"
              >
                <VIcon icon="mdi-email" class="mr-1" size="16" />
                Send Email
              </VBtn>
            </div>
          </div>
        </div>

        <!-- Business Hours & Quick Info -->
        <div class="business-info">
          <div class="info-card">
            <div class="info-header">
              <VIcon icon="mdi-clock-outline" size="24" color="yellow" />
              <h3 class="info-title typography-subsection-title">
                Business Hours
              </h3>
            </div>
            <div class="info-content">
              <div class="hours-item">
                <span class="days typography-product-description"
                  >Monday - Saturday</span
                >
                <span class="time typography-hero-description"
                  >9:00 AM - 7:00 PM</span
                >
              </div>
              <div class="hours-item">
                <span class="days typography-product-description">Sunday</span>
                <span class="time typography-hero-description">Closed</span>
              </div>
            </div>
          </div>

          <div class="info-card">
            <div class="info-header">
              <VIcon icon="mdi-star" size="24" color="yellow" />
              <h3 class="info-title typography-subsection-title">
                Why Choose Us?
              </h3>
            </div>
            <div class="info-content">
              <div class="feature-list">
                <div class="feature-item">
                  <VIcon icon="mdi-check-circle" color="green" size="18" />
                  <span class="typography-product-description"
                    >Free Test Rides</span
                  >
                </div>
                <div class="feature-item">
                  <VIcon icon="mdi-check-circle" color="green" size="18" />
                  <span class="typography-product-description"
                    >Expert Fitting</span
                  >
                </div>
                <div class="feature-item">
                  <VIcon icon="mdi-check-circle" color="green" size="18" />
                  <span class="typography-product-description"
                    >12 Month Warranty</span
                  >
                </div>
                <div class="feature-item">
                  <VIcon icon="mdi-check-circle" color="green" size="18" />
                  <span class="typography-product-description"
                    >Free Maintenance</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const navigateToContact = () => {
  navigateTo("/contact");
};

const navigateToProducts = () => {
  navigateTo("/products");
};

const makeCall = () => {
  window.open("tel:+916395936010", "_self");
};

const openMaps = () => {
  window.open("https://maps.google.com/?q=Haridwar,Uttarakhand", "_blank");
};

const sendEmail = () => {
  window.open("mailto:info@abrocycle.com", "_blank");
};
</script>

<style lang="scss" scoped>
.contact-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;

  .contact-bg-elements {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 1;

    .bg-circle {
      position: absolute;
      border-radius: 50%;
      background: linear-gradient(
        135deg,
        rgba(255, 215, 0, 0.1) 0%,
        rgba(255, 215, 0, 0.05) 100%
      );
      animation: float 6s ease-in-out infinite;

      &.bg-circle-1 {
        width: 200px;
        height: 200px;
        top: 10%;
        right: 10%;
        animation-delay: 0s;
      }

      &.bg-circle-2 {
        width: 150px;
        height: 150px;
        bottom: 20%;
        left: 5%;
        animation-delay: 2s;
      }

      &.bg-circle-3 {
        width: 100px;
        height: 100px;
        top: 60%;
        right: 20%;
        animation-delay: 4s;
      }
    }
  }

  .contact-container {
    position: relative;
    z-index: 10;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .contact-header {
    text-align: center;
    margin-bottom: 80px;

    .header-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 215, 0, 0.1);
      border: 1px solid rgba(255, 215, 0, 0.3);
      border-radius: 25px;
      padding: 8px 16px;
      margin-bottom: 20px;
      font-weight: 600;
      color: #333;
      font-size: 14px;
    }

    .contact-title {
      margin-bottom: 20px;
    }

    .contact-description {
      margin-bottom: 0;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .contact-content {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  .contact-methods {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
  }

  .contact-method-card {
    background: white;
    border-radius: 20px;
    padding: 40px 30px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    transition: all 0.4s ease;
    border: 1px solid rgba(255, 215, 0, 0.1);
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
        rgba(255, 215, 0, 0.05) 0%,
        rgba(255, 255, 255, 0.1) 100%
      );
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 1;
    }

    &:hover::before {
      opacity: 1;
    }

    &:hover {
      transform: translateY(-12px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
      border-color: rgba(255, 215, 0, 0.3);
    }

    &.primary-card {
      background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
      color: #333;
      border-color: rgba(255, 215, 0, 0.5);

      .method-icon {
        background: rgba(255, 255, 255, 0.2);
        border: 2px solid rgba(255, 255, 255, 0.3);
      }

      .method-title,
      .method-number,
      .method-description {
        color: #333;
      }
    }

    .method-icon {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 25px;
      background: rgba(255, 215, 0, 0.1);
      border: 2px solid rgba(255, 215, 0, 0.2);
      transition: all 0.3s ease;
      position: relative;
      z-index: 10;
    }

    &:hover .method-icon {
      background: rgba(255, 215, 0, 0.2);
      border-color: rgba(255, 215, 0, 0.4);
      transform: scale(1.1);
    }

    .method-content {
      position: relative;
      z-index: 10;

      .method-title {
        margin-bottom: 15px;
        color: #333;
      }

      .method-number,
      .method-address,
      .method-email {
        margin-bottom: 12px;
        color: #333;
        font-weight: 700;
      }

      .method-description {
        margin-bottom: 20px;
        color: #666;
      }

      .method-action-btn {
        border-radius: 25px;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 0.5px;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-2px);
        }
      }
    }
  }

  .business-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
  }

  .info-card {
    background: white;
    border-radius: 20px;
    padding: 35px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(255, 215, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
    }

    .info-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 25px;
      padding-bottom: 15px;
      border-bottom: 2px solid rgba(255, 215, 0, 0.2);

      .info-title {
        color: #333;
        margin: 0;
      }
    }

    .info-content {
      .hours-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);

        &:last-child {
          border-bottom: none;
        }

        .days {
          color: #666;
        }

        .time {
          color: #333;
          font-weight: 600;
        }
      }

      .feature-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          transition: all 0.3s ease;

          &:hover {
            transform: translateX(5px);
          }

          .v-icon {
            color: #4caf50;
            flex-shrink: 0;
          }

          span {
            color: #555;
            font-weight: 500;
          }
        }
      }
    }
  }

  .quick-actions {
    display: flex;
    gap: 25px;
    justify-content: center;
    flex-wrap: wrap;

    .action-btn {
      border-radius: 30px;
      padding: 15px 35px;
      min-width: 220px;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 1px;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.2),
          transparent
        );
        transition: left 0.5s ease;
      }

      &:hover::before {
        left: 100%;
      }

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      }

      &.primary-action {
        background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
        color: #333;
        box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
      }

      &.secondary-action {
        border: 2px solid #1976d2;
        color: #1976d2;
        background: transparent;

        &:hover {
          background: #1976d2;
          color: white;
        }
      }
    }
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .contact-section {
    padding: 80px 0;

    .contact-header {
      margin-bottom: 60px;
    }

    .contact-content {
      gap: 50px;
    }

    .contact-methods {
      grid-template-columns: 1fr;
      gap: 25px;
    }

    .contact-method-card {
      padding: 30px 25px;
    }

    .business-info {
      grid-template-columns: 1fr;
      gap: 25px;
    }

    .info-card {
      padding: 25px 20px;
    }

    .quick-actions {
      flex-direction: column;
      align-items: center;
      gap: 20px;

      .action-btn {
        width: 100%;
        max-width: 300px;
      }
    }
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 60px 0;

    .contact-container {
      padding: 0 15px;
    }

    .contact-header {
      margin-bottom: 40px;
    }

    .contact-content {
      gap: 40px;
    }

    .contact-method-card {
      padding: 25px 20px;
    }

    .info-card {
      padding: 20px 15px;
    }

    .feature-list {
      grid-template-columns: 1fr;
    }
  }
}
</style>
