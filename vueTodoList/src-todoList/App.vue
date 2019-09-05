<template>
  <div class="box">
    <Header
      :addList="addList"
      :list="list"
    />
    <List
      :list="list"
      :flag="flag"
      :id="id"
      :deleteList="deleteList"
      :checked="checked"
      :checkList="checkList"
      :change="change"
      :all="all"
      :finished="finished"
      :unFinished="unFinished"
      :deleteAll="deleteAll"
      :checkedOne="checkedOne"
      :checkedAll="checkedAll"
    />
    <Footer :list="list" />
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default {
  components: {
    Header,
    List,
    Footer
  },
  data () {
    return {
      todoValue: '',
      flag: 0,
      id: '',
      checked: false, // 全选框
      checkList: [],
      list: [
        {
          id: 1,
          todoValue: '吃饭',
          isFinished: false
        },
        {
          id: 2,
          todoValue: '睡觉',
          isFinished: false
        },
        {
          id: 3,
          todoValue: 'coding',
          isFinished: true
        }
      ]
    }
  },
  methods: {
    addList (obj) {
      this.list.push(obj)
    },
    deleteList (id) {
      this.list.splice(this.list.findIndex(item => item.id === id), 1)
    },
    change (id) {
      let index = this.list.findIndex(item => {
        if (item.id === id) {
          return true
        }
      })
      this.list[index].isFinished = !this.list[index].isFinished
    },
    checkedOne (id) {
      let idIndex = this.checkList.indexOf(id)
      if (idIndex >= 0) {
        // 如果已经包含了该id, 则去除(单选按钮由选中变为非选中状态)
        this.checkList.splice(idIndex, 1)
      } else {
        // 选中该checkbox
        this.checkList.push(id)
      }
    },
    checkedAll () {
      this.isCheckedAll = !this.isCheckedAll
      if (this.isCheckedAll) {
        // 全选时
        this.checkList = []
        this.list.forEach(function (list) {
          this.checkList.push(list.id)
        }, this)
      } else {
        this.checkList = []
      }
      console.log(this.checkList)
    },
    deleteAll () {
      for (this.id in this.checkList) {
        console.log(this.id)
        let index = this.list.findIndex(item => {
          if (item.id === this.checkList[this.id]) {
            return true
          }
        })
        this.list.splice(index, 1)
      }
    },
    all () {
      this.flag = 0
    },
    finished () {
      this.flag = 1
    },
    unFinished () {
      this.flag = 2
    }
  }
}
</script>

<style>
.box {
  width: 50%;
  margin: 0 auto;
  border: 1px solid white;
}
</style>
