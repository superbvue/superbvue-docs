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
          <td class="text-danger">title</td>
          <td class="text-danger">String</td>
          <td>Text content to place in the title</td>
        </tr>
        <tr>
          <td class="text-danger">imgSrc</td>
          <td class="text-danger">String</td>
          <td>URL for the optional image</td>
        </tr>
        <tr>
          <td class="text-danger">imgTop</td>
          <td class="text-danger">Boolean</td>
          <td>image should appear at the top of the card</td>
        </tr>
        <tr>
          <td class="text-danger">imgBottom</td>
          <td class="text-danger">Boolean</td>
          <td>image should appear at the bottom of the card</td>
        </tr>
        <tr>
          <td class="text-danger">imgWidth</td>
          <td class="text-danger">String</td>
          <td></td>
        </tr>
        <tr>
          <td class="text-danger">imgHeight</td>
          <td class="text-danger">String</td>
          <td></td>
        </tr>
        <tr>
          <td class="text-danger">imgAlt</td>
          <td class="text-danger">String</td>
          <td>Value to set the image attribute 'alt'</td>
        </tr>
        <tr>
          <td class="text-danger">overlay</td>
          <td class="text-danger">Boolean</td>
          <td>will overlay the card body on top of the image</td>
        </tr>
        <tr>
          <td class="text-danger">borderVariant</td>
          <td class="text-danger">Boolean</td>
          <td>Bootstrap theme color variants to the body border</td>
        </tr>
        <tr>
          <td class="text-danger">header</td>
          <td class="text-danger">String</td>
          <td>Text content to place in the header</td>
        </tr>
        <tr>
          <td class="text-danger">headerBgVariant</td>
          <td class="text-danger">String</td>
          <td>Bootstrap theme color variants to the header background</td>
        </tr>
        <tr>
          <td class="text-danger">headerTextVariant</td>
          <td class="text-danger">String</td>
          <td>Bootstrap theme color variants to the header text</td>
        </tr>
        <tr>
          <td class="text-danger">align</td>
          <td class="text-danger">String</td>
          <td></td>
        </tr>
        <tr>
          <td class="text-danger">class</td>
          <td class="text-danger">String</td>
          <td></td>
        </tr>
        <tr>
          <td class="text-danger">id</td>
          <td class="text-danger">String</td>
          <td></td>
        </tr>
        <tr>
          <td class="text-danger">style</td>
          <td class="text-danger">String</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SBCardProperty',
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