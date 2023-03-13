<template>
  <div></div>
</template>

<script setup>
const router = useRoute();
onMounted(() => {
  if (router.fullPath == "/test") {
    navigateTo("/test/uploadimage");
  }
});
</script>

<style></style>
