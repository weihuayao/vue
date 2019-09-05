export default{
  todo (state) {
    return state.list.filter(function (item) {
      return item
    }).length
  },
  finish (state) {
    return state.list.filter(function (item) {
      return item.isFinished
    }).length
  },
  unFinish (state) {
    return state.list.filter(function (item) {
      return !item.isFinished
    }).length
  },
  filterList(state) {
    const temp = []
    if (state.flag === 0) {
      return state.list
    } else if (state.flag === 2) {
      for (let i = 0; i < state.list.length; i++) {
        if (state.list[i].isFinished) {
          temp.push(state.list[i])
        }
      }
    } else if (state.flag === 1) {
      for (let i = 0; i <state.list.length; i++) {
        if (state.list[i].isFinished === false) {
          temp.push(state.list[i])
          console.log(temp)
        }
      }
    }
    return temp
  }
}

