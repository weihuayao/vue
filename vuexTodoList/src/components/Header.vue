<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h2 class="panel-title">TodoList</h2>
    </div>
    <div class="panel-body form-inline text-center">
      <label>
        <input
          type="text"
          class="form-control"
          v-model="todoValue"
          placeholder="代办事项"
        >
        <input
          type="button"
          value="添加"
          class="btn btn-primary "
          @click="addItem()"
        >
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      todoValue: '',
      isFinished: ''
    }
  },
  methods: {
    addItem () {
      let obj = {
        id: this.$store.state.list.length + 1,
        todoValue: this.todoValue,
        isFinished: false
      }
      if (obj.todoValue === '') {
        alert('请输入待办事项')
      } else {
        this.$store.dispatch('addList', obj)
        this.todoValue = ''
      }
    }
  }
}
</script>

<style>
.panel {
  width: 100%;
}
.panel-title {
  text-align: center;
}
.btn {
  float: right;
  margin-left: 5px;
}
</style>
