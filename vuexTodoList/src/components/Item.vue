<template>
  <td
    @mouseenter="handleEnter(true)"
    @mouseleave="handleEnter(false)"
    :style="{background:bgColor}"
  >
    <input
      type="checkbox"
      :checked="this.$store.state.checkList.indexOf(item.id) >= 0"
      @click='checkedOneItem()'
    >
    {{item.todoValue}}
    <input
      type="button"
      value="删除"
      class="btn btn-danger"
      @click="deleteItem()"
    />
    <Button
      type="button"
      v-text="item.isFinished ? '完成':'未完成'"
      :class="item.isFinished ? 'btn  btn-success':'btn btn-warning'"
      @click.prevent="changeStatus()"
    />
  </td>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data () {    return {
      bgColor: 'white',
      isShow: false
    }
  }, 
  methods: {
    handleEnter (isEnter) {
      if (isEnter) {
        this.bgColor = '#aaaaaa'
        this.isShow = true
      } else {
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    deleteItem () {
      this.$store.dispatch("deleteList",this.item.id)
    },
    changeStatus () {
      this.$store.dispatch("change",this.item.id)
    },
    checkedOneItem () {
      this.$store.dispatch("checkedOne",this.item.id)
    }
  }
}
</script>
<style>
.btn {
  float: right;
  margin-left: 5px;
}
</style>
