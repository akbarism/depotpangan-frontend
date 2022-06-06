<template>
  <div>
    <Toolbar>
      <template #start> </template>
    </Toolbar>
    <div class="banner">
      <Banner />
    </div>
    <div class="service">
      <Service />
    </div>
    <div class="discover py-5">
      <Discover />
    </div>
    <div class="discover py-5">
      <FindAgent />
    </div>
    <div class="discover py-5 surface-400">
      <AllBrand />
    </div>
    <div class="discover py-5 bg-red-600" style="height: 100vh"></div>
  </div>
</template>

<script setup>
import Banner from "../components/Home/Banner.vue";
import Service from "../components/Home/Service.vue";
import Discover from "../components/Home/Discover.vue";
import FindAgent from "../components/Home/findAgent.vue";
import AllBrand from "../components/Home/allBrand.vue";
</script>

<style scoped>
.p-toolbar {
  background: #fff;
  border: none;
  height: 10vh;
}
.banner {
  height: 65vh;
}
.service {
  min-height: 25vh;
  box-sizing: border-box;
  box-shadow: 0px 5px 15px 0px rgb(153 153 153 / 58%);
}
.discover {
  padding: 0 100px;
}
.allbrand {
  padding: 0 100px;
}

@media (max-width: 600px) {
  .discover {
    padding: 0 20px;
  }
}
@media (max-width: 480px) {
  .discover {
    padding: 0 10px;
  }
}
</style>