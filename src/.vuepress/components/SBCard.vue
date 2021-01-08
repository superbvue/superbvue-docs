<template>
  <div class="container border">
    <div class="card" style="width: 18rem;">
      <img src="https://picsum.photos/600/300/?image=25" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button type="button" class="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SBCard'
})
</script>

<style src="../public/bootstrap.css"></style>
