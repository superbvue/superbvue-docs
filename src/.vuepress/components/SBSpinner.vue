<template>
  <div class="container border">
    <span>Border spinner</span>
    <br />
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <br />
    <span>Growing spinner</span>
    <br />
    <div class="spinner-grow" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SBSpinner'
})
</script>

<style src="../public/bootstrap.css"></style>
