<template>
  <div class="container border">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" v-for="(value) in state.fields" v-bind:key="value.id">{{ value.text }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value) in state.items" v-bind:key="value.firstName">
          <td scope="row">{{ value.age }}</td>
          <td>{{ value.fistName }}</td>
          <td>{{ value.lastName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SBTableBasic',
  data() {
    return {
      state: {
        items: [
          { age: 45, fistName: 'Jonhson', lastName: 'Macdonald' },
          { age: 15, fistName: 'Larsen', lastName: 'Shaw' },
          { age: 65, fistName: 'Geneva', lastName: 'Wilson' },
          { age: 35, fistName: 'Jami', lastName: 'Carney' }
        ],
        fields: [
          {id: 1, text: 'Age'},
          {id: 2, text: 'First Name'},
          {id: 3, text: 'Last Name'}
        ]
      }
    }
  }
})
</script>

<style src="../public/bootstrap.css"></style>
