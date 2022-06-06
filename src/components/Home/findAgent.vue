<template>
  <div class="grid">
    <div class="col-5">
      <div class="flex align-items-center">
        <img
          src="https://www.wahana.com/assets/img/icons/icon/Location@2x.png"
          class="marker_ico mr-2"
          alt=""
        />
        <h3>Cari Agen</h3>
      </div>
      <div v-if="agents.length">
        <div class="border-round mt-3 mb-5 flex rounded p-3 bg-red-600">
          <i
            class="pi pi-map-marker mr-2"
            style="font-size: 1rem; color: #fff"
          ></i>
          <p class="text-white"><b> 5 Agen terdekat dari lokasi Anda</b></p>
        </div>
        <div class="temp_list_agent">
          <div class="mb-3" v-for="(item, i) in agents" :key="i">
            <div class="grid">
              <div class="col-10">
                <p class="font-bold text-red-600">{{ item.address }}</p>
              </div>
              <div class="col-2 flex text-xs">
                <p>{{ item.distanceInKm }} Km</p>
                <i class="pi pi-chevron-right"></i>
              </div>
            </div>
            <Divider />
          </div>
        </div>
      </div>
      <div v-if="vm.loading" class="mt-3">
        <Skeleton
          v-for="i in 5"
          :key="`skel${i}`"
          class="mb-3"
          shape="rectangle"
          width="100%"
          height="2rem"
        />
      </div>
    </div>
    <div class="col-7 bg-blue-800">leaflet</div>
  </div>
</template>

<script setup>
import { ref, reactive } from "@vue/reactivity";
import { mainStore } from "../../store/store";

const store = mainStore();

const vm = reactive({
  loading: false,
});
const loading = ref(false);
const agents = ref([]);

const getPosition = async (position) => {
  vm.loading = true;
  const coor = {
    lat: position.coords.latitude,
    long: position.coords.longitude,
  };
  const data = {
    path: `getMap/${coor.lat}/${coor.long}`,
  };
  try {
    let res = await store.getData(data);
    console.log(res.data.locationDetail);
    agents.value = res.data.locationDetail;
    vm.loading = false;
  } catch (err) {
    console.log(err);
    vm.loading = false;
  }
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition);
}
</script>

<style>
.marker_ico {
  height: 35px;
}
</style>