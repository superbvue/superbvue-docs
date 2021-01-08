<template>
  <div class="container">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th v-for="(value) in state.fields" v-bind:key="value.id">{{value.text}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value) in state.detail" v-bind:key="value.id">
          <td class="text-danger">{{ value.propertyText }}</td>
          <td class="text-danger">{{ value.typeText }}</td>
          <td class="text-danger">{{ value.defaultText }}</td>
          <td>{{ value.descriptionText }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SBPaginationProperty',
  data() {
    return {
      state: {
        fields: [
          {id: 1, text: 'Property'},
          {id: 2, text: 'Type'},
          {id: 3, text: 'Default'},
          {id: 4, text: 'Description'}
        ],
        detail: [
          { id: Math.random().toPrecision(10), propertyText: 'perPage', typeText: 'String | Number', defaultText: '', descriptionText: 'table header' },
          { id: Math.random().toPrecision(10), propertyText: 'totalRows', typeText: 'String | Number', defaultText: '', descriptionText: 'table data in array format, where each record (row) data are keyed objects.' },
          { id: Math.random().toPrecision(10), propertyText: 'ariaControls', typeText: 'String', defaultText: '', descriptionText: 'Set ID on element' },
          { id: Math.random().toPrecision(10), propertyText: 'ariaLabel', typeText: 'String', defaultText: '', descriptionText: 'Value to place in the "aria-label" attribute of the pagination control' },
          { id: Math.random().toPrecision(10), propertyText: 'disabled', typeText: 'String', defaultText: 'false', descriptionText: '' },
          { id: Math.random().toPrecision(10), propertyText: 'labelFirstPage', typeText: 'String', defaultText: ' "Go to first page" ', descriptionText: '' },
          { id: Math.random().toPrecision(10), propertyText: 'labelLastPage', typeText: 'String', defaultText: ' "Go to last page" ', descriptionText: '' },
          { id: Math.random().toPrecision(10), propertyText: 'labelNextPage', typeText: 'String', defaultText: ' "Go to next page" ', descriptionText: '' },
          { id: Math.random().toPrecision(10), propertyText: 'labelPrevPage', typeText: 'String', defaultText: ' "Go to prev page" ', descriptionText: '' },
          { id: Math.random().toPrecision(10), propertyText: 'firstText', typeText: 'String', defaultText: ' "«" ', descriptionText: '' },
          { id: Math.random().toPrecision(10), propertyText: 'lastText', typeText: 'String', defaultText: ' "»" ', descriptionText: '' },
          { id: Math.random().toPrecision(10), propertyText: 'nextText', typeText: 'String', defaultText: '', descriptionText: '' },
          { id: Math.random().toPrecision(10), propertyText: 'prevText', typeText: 'String', defaultText: '', descriptionText: '' },
          { id: Math.random().toPrecision(10), propertyText: 'limit', typeText: 'String | Number', defaultText: '', descriptionText: '' },
          { id: Math.random().toPrecision(10), propertyText: 'size', typeText: 'String', defaultText: '"md"', descriptionText: 'size of pagination. value:  sm | md | lg' },
          { id: Math.random().toPrecision(10), propertyText: 'class', typeText: 'String', defaultText: '', descriptionText: '' },
          { id: Math.random().toPrecision(10), propertyText: 'pills', typeText: 'Boolean', defaultText: 'false', descriptionText: '' }
        ]
      }
    }
  }
})
</script>

<style src="../public/bootstrap.css"></style>