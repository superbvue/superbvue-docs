<template>
  <div class="container border">
    <!-- Basic Button variant -->
    <h6>Basic Button variant</h6>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <button class="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li class="page-item"><button class="page-link">1</button></li>
        <li class="page-item"><button class="page-link">2</button></li>
        <li class="page-item"><button class="page-link">3</button></li>
        <li class="page-item">
          <button class="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>

    <!-- Alignment -->
    <h6 class="text-center">Alignment</h6>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <button class="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li class="page-item"><button class="page-link">1</button></li>
        <li class="page-item"><button class="page-link">2</button></li>
        <li class="page-item"><button class="page-link">3</button></li>
      <li class="page-item">
          <button class="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>

    <!-- Use text in props -->
    <h6>Use text as button</h6>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <button class="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li class="page-item">
          <button class="page-link" aria-label="Prev">
            <span aria-hidden="true">Prev</span>
          </button>
        </li>
        <li class="page-item"><button class="page-link">1</button></li>
        <li class="page-item"><button class="page-link">2</button></li>
        <li class="page-item"><button class="page-link">3</button></li>
        <li class="page-item">
          <button class="page-link" aria-label="Next">
            <span aria-hidden="true">Next</span>
          </button>
        </li>
        <li class="page-item">
          <button class="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SBPaginationButtonVariant',
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

<style>
.sb-pagination-pills > .page-item > .page-link {
  border-radius: 50rem;
  margin-left: 0.25rem;
  line-height: 1;
}
</style>