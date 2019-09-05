<template>
  <table class="table table-bordered table-hover table-striped ">
    <tr>
      <th>任务列表
        <input
          type="button"
          value="未完成"
          class="btn btn-warning"
          @click="showUnFinished()"
        >
        <input
          type="button"
          value="完成"
          class="btn btn-success"
          @click="showFinished()"
        >
        <input
          type="button"
          value="全部"
          class="btn btn-primary"
          @click="showAll()"
        >
      </th>
    </tr>
    <tbody>
      <tr
        v-for="(item ,index) in filterList"
        :key="index"
      >
        <Item
          :item="item"
          :deleteList="deleteList"
          :change="change"
          :checkedOne="checkedOne"
          :checkList="checkList"
          :checked="checked"
        />
      </tr>
      <tr>
        <td>
          <input type="checkbox" @click="checkedAllItem()"/>全选
          <input
            type="button"
            value="删除所选"
            class="btn btn-danger"
            @click.prevent="deleteAllItem()"
          />
        </td>
      </tr>

    </tbody>
  </table>
</template>

<script>
import Item from '../components/Item'
export default {
  props: {
    flag: Number,
    list: Array,
    deleteList: Function,
    change: Function,
    all: Function,
    finished: Function,
    unFinished: Function,
    checked: Boolean,
    checkList: Array,
    deleteAll: Function,
    checkedOne: Function,
    checkedAll: Function
  },
  components: {
    Item
  },
  methods: {
    showAll () {
      this.all()
    },
    showFinished () {
      this.finished()
    },
    showUnFinished () {
      this.unFinished()
    },
    checkedAllItem () {
      this.checkedAll()
    },
    deleteAllItem () {
      this.deleteAll()
    }

  },
  computed: {
    filterList: function () {
      const temp = []
      if (this.flag === 0) {
        return this.list
      } else if (this.flag === 1) {
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].isFinished) {
            temp.push(this.list[i])
          }
        }
      } else if (this.flag === 2) {
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].isFinished === false) {
            temp.push(this.list[i])
            console.log(temp)
          }
        }
      }
      return temp
    }
  }
}
</script>

<style>
.table {
  width: 100%;
  /* margin:0 auto; */
}

.btn {
  float: right;
  margin-left: 5px;
}
</style>
