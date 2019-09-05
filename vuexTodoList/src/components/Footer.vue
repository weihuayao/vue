<template>
  <div>
    <p>共项{{todo}}任务，已完成{{finish}}项，未完成{{unFinish}}项</p>
  </div>
</template>

<script>
import{mapGetters} from "vuex"
export default {
  computed: {
    ...mapGetters(['todo','finish','unFinish'])
  },
}
</script>

<style>
</style>
