<template>
  <div class="container border">
    <span>Progress bar</span>
    <div class="progress">
      <div class="progress-bar bg-warning" role="progressbar" :style="`width: ${state.progressValue}%`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>

    <br />
    <span>Progress bar with label</span>
    <div class="progress">
      <div class="progress-bar bg-warning" role="progressbar" :style="`width: ${state.progressValue}%`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        {{state.progressValue}}%
      </div>
    </div>

    <br />
    <span>Multiple Progress bars</span>
    <div class="progress">
      <div class="progress-bar bg-warning" role="progressbar" style="width: 80%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">80%</div>
      <div class="progress-bar bg-success" role="progressbar" style="width: 20%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">20%</div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SBProgress',
  data() {
    return {
      state: {
        progressValue: 50
      }
    }
  }
})
</script>

<style src="../public/bootstrap.css"></style>
