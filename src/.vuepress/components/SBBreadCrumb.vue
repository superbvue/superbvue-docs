<template>
  <div class=" border">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#breadcrumb">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SBBreadCrumb'
})
</script>

<style src="../public/bootstrap.css"></style>
