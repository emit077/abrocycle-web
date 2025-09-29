<template>
  <div>
    <!-- Navbar Component -->
    <LayoutNavbar />

    <!-- Main Content -->
    <main class="px-0">
      <slot />
    </main>

    <!-- Footer Component -->
    <LayoutFooter />
  </div>
</template>

<script setup>
// Layout logic is now handled by individual components
</script>

<style scoped>
/* Layout-specific styles can be added here if needed */
</style>
