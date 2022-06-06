<template>
  <div class="grid">
    <div class="col-4">
      <div class="flex align-items-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div class="col-8">
      <Carousel
        :value="brands"
        :numVisible="3"
        :numScroll="1"
        :circular="true"
        :autoplayInterval="3000"
      >
        <template #item="item">
          <div class="p-3">
            <Card>
              <template #content>
                <div class="flex justify-content-center">
                  <img :src="item.data.img" class="img_item" alt="" />
                </div>
                <h3>{{ item.data.title }}</h3>
                <p>{{ item.data.desc }}</p>
              </template>
            </Card>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const brands = ref([
  {
    img: "https://www.sicepat.com/static/img/fitur-1@2x.png",
    title: "halu",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "https://www.sicepat.com/static/img/fitur-2@2x.png",
    title: "Gokil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "https://www.sicepat.com/static/img/fitur-3@2x.png",
    title: "H3lo",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "https://www.sicepat.com/static/img/fitur-4@2x.png",
    title: "Syariah",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]);
</script>

<style>
.img_item {
  height: 100px;
}
</style>