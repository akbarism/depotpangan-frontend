<template>
  <div class="grid grid-nogutter">
    <div class="col-4">
      <div
        class="
          track
          flex
          justify-content-center
          align-items-center
          p-5
          bg-red-600
        "
      >
        <div>
          <h2 class="text-white mb-2">LACAK KIRIMAN</h2>
          <inputText class="mr-3 input_track" />
          <Button label="TRACKING" />
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="track flex justify-content-center align-items-center pl-3">
        <div>
          <h2 class="mb-2">TARIF KIRIMAN</h2>
          <div class="flex">
            <div class="mr-2" style="width: 30%">
              <inputText placeholder="Origin" style="width: 100%" />
              <p class="small_txt mt-1 text-500"><i>Origin Shipment</i></p>
            </div>
            <div class="mr-2" style="width: 30%">
              <inputText placeholder="Destination" style="width: 100%" />
              <p class="small_txt mt-1 text-500">
                <i>Destination Shipment</i>
              </p>
            </div>
            <div class="mr-3">
              <InputNumber placeholder="1" inputStyle="width:50px" />
              <p class="small_txt mt-1 text-500">
                <i>Weight(Kg)</i>
              </p>
            </div>
            <div>
              <Button class="p-button-danger" label="CHECK" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="track flex justify-content-center align-items-center p-5">
        <div>
          <h2 class="mb-2">TITIK LAYANAN</h2>
          <Button
            label="TEMUKAN LOKASI TERDEKAT"
            class="p-button-danger"
            icon="pi pi-search"
            iconPos="left"
          />
          <p class="small_txt mt-1 text-500">
            <i>Our closest location</i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.track {
  width: 100%;
  height: 25vh;
}
.input_track {
  width: 260px;
}
.small_txt {
  font-size: 11px;
}
</style>