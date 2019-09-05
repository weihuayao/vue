<template>
  <td
    @mouseenter="handleEnter(true)"
    @mouseleave="handleEnter(false)"
    :style="{background:bgColor}"
  >
    <input
      type="checkbox"
      :checked="checkList.indexOf(item.id) >= 0"
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
    >
    </Button>
  </td>
</template>

<script>
export default {
  props: {
    item: Object,
    deleteList: Function,
    change: Function,
    checked: Boolean,
    checkList: Array,
    checkedOne: Function
  },
  data () {
    return {
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
      console.log(this.id)
      this.deleteList(this.item.id)
    },
    changeStatus () {
      this.change(this.item.id)
    },
    checkedOneItem () {
      this.checkedOne(this.item.id)
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
