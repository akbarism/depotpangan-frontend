<template>
  <div class="grid grid-nogutter">
    <div class="col-12 md:col-4">
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
    <div class="col-12 md:col-4">
      <div class="track flex justify-content-center align-items-center px-3">
        <div>
          <h2 class="mb-2">TARIF KIRIMAN</h2>
          <div class="grid grid-nogutter">
            <div class="col-12 md:col-4 p-1">
              <inputText placeholder="Origin" style="width: 100%" />
              <p class="small_txt mt-1 text-500"><i>Origin Shipment</i></p>
            </div>
            <div class="col-12 md:col-4 p-1">
              <inputText placeholder="Destination" style="width: 100%" />
              <p class="small_txt mt-1 text-500">
                <i>Destination Shipment</i>
              </p>
            </div>
            <div class="col-12 md:col-4 p-1">
              <div class="flex">
                <div class="mr-2">
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
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="track point_service p-5">
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
  min-height: 25vh;
}
.input_track {
  width: 260px;
}
.small_txt {
  font-size: 11px;
}
.point_service {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 600px) {
  .track {
    width: 100%;
    min-height: 25vh;
    padding: 10px 0;
  }
  .point_service {
    display: block;
    margin-top: 10px;
  }
}
</style>