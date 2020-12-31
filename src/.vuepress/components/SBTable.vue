<template>
  <div class="container border">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" v-for="(value) in state.fields" v-bind:key="value.id">{{value.text}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan={2}>Larry the Bird</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SBTable',
  data() {
    return {
      state: {
        items: [
          { isActive: true, age: 40, fistName: 'Dickerson', lastName: 'Macdonald' },
          { isActive: false, age: 21, fistName: 'Larsen', rowVariant: 'primary', lastName: 'Shaw' },
          { isActive: false, age: 89, fistName: 'Geneva', lastName: 'Wilson' },
          { isActive: true, age: 38, fistName: 'Jami', lastName: 'Carney', cellVariant: { fistName: 'info' } }
        ],
        fields: [
          {id: 1, text: 'Age'},
          {id: 2, text: 'First'},
          {id: 3, text: 'Last'},
        ]
      }
    }
  }
}
</script>

<style src="../public/bootstrap.css"></style>
