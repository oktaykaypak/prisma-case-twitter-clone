<template>
  <div class="container">
    <div class="row">
      <div class="col-3 "><h class="position-fixed"/></div>
      <div class="col-6"><router-view></router-view></div>
      <div class="col-3"><r /></div>
    </div>
  </div>
</template>

<script>
import h from "../components/header";
import r from "../components/right";
export default {
  components: { h, r },
};
</script>

<style></style>
