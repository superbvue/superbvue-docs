<template>
  <div class="container border">
    <div class="card" style="width: 18rem;">
      <div class="card-header bg-primary text-white">
        Primary header
      </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SBCardWithHeader'
})
</script>

<style src="../public/bootstrap.css"></style>
