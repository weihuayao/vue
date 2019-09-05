import {
  ADD_LIST,
  DELETE_LIST,
  ALL,
  UN_FINISHED,
  FINISHED,
  CHANGE,
  CHECKED_ONE,
  CHECKED_ALL,
  DELETE_ALL,
} from './mutation-types'

export default {
  [ADD_LIST](state, {
    obj
  }) {
    state.list.push(obj)
  },
  [DELETE_LIST](state, {
    id
  }) {
    console.log(state)
    state.list.splice(state.list.findIndex(item => item.id === id), 1)
  },
  [ALL](state) {
    state.flag = 0
  },
  [UN_FINISHED](state) {
    state.flag = 1
  },
  [FINISHED](state) {
    state.flag = 2
  },
  [CHANGE](state, {
    id
  }) {
    let index = state.list.findIndex(item => {
      if (item.id === id) {
        return true
      }
    })
    state.list[index].isFinished = !state.list[index].isFinished
  },
  [CHECKED_ONE](state, {
    id
  }) {
    let idIndex = state.checkList.indexOf(id)
    if (idIndex >= 0) {
      // 如果已经包含了该id, 则去除(单选按钮由选中变为非选中状态)
      this.checkList.splice(idIndex, 1)
    } else {
      // 选中该checkbox
      state.checkList.push(id)
    }
  },
  [CHECKED_ALL](state) {
    state.isCheckedAll = !state.isCheckedAll
    if (state.isCheckedAll) {
      // 全选时
      state.checkList = []
      state.list.forEach(function (list) {
        state.checkList.push(list.id)
      }, state)
    } else {
      state.checkList = []
    }
    console.log(state.checkList)
  },
  [DELETE_ALL](state) {
    for (state.id in state.checkList) {
      console.log(state.id)
      let index = state.list.findIndex(item => {
        if (item.id === state.checkList[state.id]) {
          return true
        }
      })
      state.list.splice(index, 1)
    }
  },
}
