<template>
  <div class="container border">
    <br />
    <input type="text" v-model="state.text" class="form-control">
    <span>Value: {{state.text}}</span>
    <br />
    <label for="customRange1" class="form-label">Range</label>
    <input type="range" class="form-range">
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SBFormInput',
  data() {
    return {
      state: {
        text: '',
        rangeValue: ''
      }
    }
  }
})
</script>

<style src="../public/bootstrap.css"></style>
