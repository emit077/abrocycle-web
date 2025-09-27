<template>
  <div>
    <VAppBar
      :color="isScrolled ? 'white' : 'transparent'"
      :elevation="isScrolled ? 2 : 0"
      height="70"
      class="px-4 transition-all duration-300"
      :class="{
        'bg-white shadow-lg': isScrolled,
        'bg-transparent': !isScrolled,
      }"
    >
      <!-- <template #prepend>
        <VBtn icon variant="text" @click="toggleDrawer">
          <VIcon>mdi-menu</VIcon>
        </VBtn>
      </template> -->

      <VAppBarTitle class="text-h5 font-weight-bold"> ABRO Cycle </VAppBarTitle>

      <VSpacer />
      <!-- 
      <VBtn
        variant="text"
        color="abro-blue"
        to="/contact"
        class="hidden-sm-and-down"
      >
        Contact
      </VBtn> -->
    </VAppBar>

    <VNavigationDrawer v-model="drawer" temporary location="left">
      <VList>
        <VListItem
          prepend-icon="mdi-home"
          title="Home"
          to="/"
          @click="drawer = false"
        />
        <VListItem
          prepend-icon="mdi-bike"
          title="Products"
          to="/products"
          @click="drawer = false"
        />
        <VListItem
          prepend-icon="mdi-phone"
          title="Contact"
          to="/contact"
          @click="drawer = false"
        />
      </VList>
    </VNavigationDrawer>

    <main class="px-0">
      <slot />
    </main>

    <VFooter color="abro-blue" class="text-white">
      <VContainer>
        <VRow>
          <VCol cols="12" md="6">
            <h3 class="text-h6 mb-2">ABRO Cycle</h3>
            <p class="text-body-2">Premium bicycles and cycling accessories</p>
          </VCol>
          <VCol cols="12" md="6" class="text-md-right">
            <p class="text-body-2 mb-1">
              <VIcon icon="mdi-phone" class="mr-2" />
              +91 63959 36010
            </p>
            <p class="text-body-2">
              <VIcon icon="mdi-map-marker" class="mr-2" />
              Haridwar, Uttarakhand, India
            </p>
          </VCol>
        </VRow>
      </VContainer>
    </VFooter>
  </div>
</template>

<script setup>
const drawer = ref(false);
const isScrolled = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

// Scroll detection
onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
  };

  window.addEventListener("scroll", handleScroll);

  // Cleanup on unmount
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<style scoped>
/* Smooth transitions for header */
.v-app-bar {
  transition: all 0.3s ease-in-out;
}

/* Ensure proper backdrop blur effect when transparent */
.bg-transparent {
  background-color: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
}

/* White background with shadow when scrolled */
.bg-white {
  background-color: white !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
