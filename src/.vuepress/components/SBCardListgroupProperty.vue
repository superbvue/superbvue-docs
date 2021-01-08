<template>
  <div class="container border">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th v-for="(value) in state.fields" v-bind:key="value.id">{{value.text}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-danger">flush</td>
          <td class="text-danger">Boolean</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SBCardListgroupProperty',
  data() {
    return {
      state: {
        fields: [
          {id: 1, text: 'Property'},
          {id: 2, text: 'Type'},
          {id: 3, text: 'Description'}
        ]
      }
    }
  }
})
</script>

<style src="../public/bootstrap.css"></style>