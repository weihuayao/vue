import { ADD_LIST,DELETE_LIST,ALL,UN_FINISHED ,FINISHED,CHANGE,CHECKED_ONE,CHECKED_ALL,DELETE_ALL,} from './mutation-types'

export default {
  addList({commit},obj) {
    commit(ADD_LIST,{obj})
  },
  deleteList({commit},id) {
    commit(DELETE_LIST,{id})
  },
  all({commit}) {
    commit(ALL)
  },
  finished({commit}){
    commit(FINISHED)
  },
  unFinished({commit}){
    commit(UN_FINISHED)
  },
  change({commit},id){
    commit(CHANGE,{id})
  },
  checkedOne({commit},id){
    commit(CHECKED_ONE,{id})
  },
  checkedAll({commit}){
    commit(CHECKED_ALL)
  },
  deleteAll({commit}){
    commit(DELETE_ALL)
  }
}
