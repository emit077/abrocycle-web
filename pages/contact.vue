<template>
  <div class="py-8">
    <VContainer>
      <VRow>
        <VCol cols="12" class="text-center mb-8">
          <h1 class="text-h3 text-md-h2 font-weight-bold text-abro-blue mb-4">
            Contact ABRO Cycle
          </h1>
          <p class="text-h6 text-grey-darken-1">
            Get in touch with us for inquiries, purchases, or service requests
          </p>
        </VCol>
      </VRow>

      <VRow>
        <VCol cols="12" md="6">
          <VCard elevation="2" class="pa-6 h-100">
            <h2 class="text-h5 font-weight-bold text-abro-blue mb-4">
              Contact Information
            </h2>

            <div class="mb-6">
              <div class="d-flex align-center mb-4">
                <VIcon
                  icon="mdi-phone"
                  color="abro-orange"
                  class="mr-3"
                  size="24"
                />
                <div>
                  <p class="text-h6 font-weight-bold mb-1">Phone</p>
                  <p class="text-body-1">+91 63959 36010</p>
                </div>
              </div>

              <div class="d-flex align-center mb-4">
                <VIcon
                  icon="mdi-map-marker"
                  color="abro-orange"
                  class="mr-3"
                  size="24"
                />
                <div>
                  <p class="text-h6 font-weight-bold mb-1">Address</p>
                  <p class="text-body-1">Haridwar, Uttarakhand, India</p>
                </div>
              </div>

              <div class="d-flex align-center mb-4">
                <VIcon
                  icon="mdi-clock"
                  color="abro-orange"
                  class="mr-3"
                  size="24"
                />
                <div>
                  <p class="text-h6 font-weight-bold mb-1">Business Hours</p>
                  <p class="text-body-1">
                    Monday - Saturday: 9:00 AM - 7:00 PM
                  </p>
                  <p class="text-body-1">Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <VBtn
              color="abro-orange"
              size="large"
              variant="elevated"
              block
              @click="callNow"
            >
              <VIcon icon="mdi-phone" class="mr-2" />
              Call Now
            </VBtn>
          </VCard>
        </VCol>

        <VCol cols="12" md="6">
          <VCard elevation="2" class="pa-6 h-100">
            <h2 class="text-h5 font-weight-bold text-abro-blue mb-4">
              Send us a Message
            </h2>

            <VForm @submit.prevent="submitForm">
              <VTextField
                v-model="form.name"
                label="Your Name"
                variant="outlined"
                class="mb-4"
                required
              />

              <VTextField
                v-model="form.phone"
                label="Phone Number"
                variant="outlined"
                class="mb-4"
                required
              />

              <VTextField
                v-model="form.email"
                label="Email Address"
                type="email"
                variant="outlined"
                class="mb-4"
              />

              <VSelect
                v-model="form.inquiry"
                label="Inquiry Type"
                :items="inquiryTypes"
                variant="outlined"
                class="mb-4"
                required
              />

              <VTextarea
                v-model="form.message"
                label="Message"
                variant="outlined"
                rows="4"
                class="mb-4"
                required
              />

              <VBtn
                type="submit"
                color="abro-blue"
                size="large"
                variant="elevated"
                block
                :loading="loading"
              >
                Send Message
              </VBtn>
            </VForm>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: "Contact - ABRO Cycle",
  meta: [
    {
      name: "description",
      content:
        "Contact ABRO Cycle for bicycle purchases, service requests, or inquiries. Located in Haridwar, Uttarakhand, India.",
    },
  ],
});

const form = ref({
  name: "",
  phone: "",
  email: "",
  inquiry: "",
  message: "",
});

const loading = ref(false);

const inquiryTypes = [
  "Product Inquiry",
  "Service Request",
  "General Information",
  "Warranty Claim",
  "Other",
];

const submitForm = async () => {
  loading.value = true;

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // In a real application, you would send this data to your backend
  console.log("Form submitted:", form.value);

  // Reset form
  form.value = {
    name: "",
    phone: "",
    email: "",
    inquiry: "",
    message: "",
  };

  loading.value = false;

  // Show success message (you could use a toast notification here)
  alert("Thank you for your message! We will contact you soon.");
};

const callNow = () => {
  window.open("tel:+916395936010", "_self");
};
</script>
