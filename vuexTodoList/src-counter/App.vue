<template>
  <div>
    <p>Click {{count}} times ,count is{{evenOrOdd}}</p>
    <button calss="btn btn-primary " @click="increment()"> + </button>
    <button calss="btn btn-primary " @click="decrement()"> - </button>
    <button calss="btn btn-primary " @click="incrementIfOdd()"> increment if odd </button>
    <button calss="btn btn-primary " @click="incrementAsync()"> increment saync </button>
  </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
export default {
  computed: {
    ...mapState(['count']), // {{$store.this.state.count}}
    ...mapGetters(['evenOrOdd']) // return this.$store.getters.evenOrOdd
  },
  methods: {
    ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync']) // this.$store.dispatch("increment")
  }
}

</script>
<style>
</style>
