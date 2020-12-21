<template>
  <div class="container border">
    <br />
    <select class="form-select" v-on:change="handleSetSelected">
      <option selected>Open this select menu</option>
      <option v-for="value in state.options" v-bind:key="value.text">{{ value.text }}</option>
    </select>
    <br />
    <span>Selected: {{ state.selected }}</span>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SBFormSelect',
  data() {
    return {
      state: {
        selected: '',
         options: [
          { text: 'Toggle', value: 'first' },
          { text: 'toggle other', value: 'second' },
          { text: 'I am  Disabled', value: 'third', disabled: true },
          { text: 'Another text with radio', value: { fourth: 4 } }
        ]
      }
    }
  },
  methods: {
    handleSetSelected(event) {
      this.state.selected = event.target.value
    }
  }
})
</script>

<style src="../public/bootstrap.css"></style>
