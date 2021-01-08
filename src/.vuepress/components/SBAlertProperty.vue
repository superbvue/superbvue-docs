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
          <td class="text-danger">disabled</td>
          <td class="text-danger">Boolean</td>
          <td class="text-danger">false</td>
          <td>disable element for clickable</td>
        </tr>
        <tr>
          <td class="text-danger">onClick</td>
          <td class="text-danger">Function</td>
          <td class="text-danger"></td>
          <td>callback function payload: <code>$event</code></td>
        </tr>
        <tr>
          <td class="text-danger">class</td>
          <td class="text-danger">String</td>
          <td class="text-danger"></td>
          <td></td>
        </tr>
        <tr>
          <td class="text-danger">variant</td>
          <td class="text-danger">String</td>
          <td class="text-danger"></td>
          <td>Set background color. <code>primary | secondary | success | danger | warning | info | light | dark</code></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SBAlertProperty',
  data() {
    return {
      state: {
        fields: [
          {id: 1, text: 'Property'},
          {id: 2, text: 'Type'},
          {id: 4, text: 'Default'},
          {id: 3, text: 'Description'}
        ]
      }
    }
  }
})
</script>

<style src="../public/bootstrap.css"></style>