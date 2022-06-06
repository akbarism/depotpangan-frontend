<template>
  <Galleria
    containerClass="content-img"
    :value="images"
    :circular="true"
    :showThumbnails="false"
    :showItemNavigators="true"
    :numVisible="3"
    indicatorsContentClass="indicator"
  >
    <template #item="item">
      <img :src="getImageUrl(item.item)" class="img-item" alt="" /> </template
  ></Galleria>
</template>

<script setup>
import { ref } from "vue";

const images = ref([
  "Gunung-Fuji-Jepang-1024x640.jpg",
  "ke_2.jpg",
  "pemandangan-gunung-kertas.jpg",
]);

const getImageUrl = (name) => {
  return new URL(`../../assets/img/${name}`, import.meta.url).href;
};
</script>

<style scoped>
.img-item {
  height: 65vh;
  width: 100%;
  object-fit: cover;
}
.indicator {
  display: none;
}
</style>