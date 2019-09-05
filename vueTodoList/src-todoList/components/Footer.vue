<template>
  <div>
    <p>共项{{todo}}任务，已完成{{finish}}项，未完成{{unFinish}}项</p>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  computed: {
    todo () {
      return this.list.filter(function (item) {
        return item
      }).length
    },
    finish () {
      return this.list.filter(function (item) {
        return item.isFinished
      }).length
    },
    unFinish () {
      return this.list.filter(function (item) {
        return !item.isFinished
      }).length
    }
  }
}
</script>

<style>
</style>
