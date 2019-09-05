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
export default {
  data () {
    return {
      count: 0
    }
  },
  computed: {
    evenOrOdd () {
      return this.count % 2 === 0 ? '偶数' : '奇数'
    }
  },
  methods: {
    increment () {
      const count = this.count
      this.count = count + 1
    },
    decrement () {
      const count = this.count
      this.count = count - 1
    },
    incrementIfOdd () {
      const count = this.count
      if (count % 2 === 1) {
        this.count = count + 1
      }
    },
    incrementAsync () {
      setTimeout(() => {
        const count = this.count
        this.count = count + 1
      }, 1000)
    }
  }
}

</script>
<style>
</style>
