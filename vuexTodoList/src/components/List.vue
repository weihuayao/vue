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
import {mapState,mapGetters} from 'vuex'
import Item from '../components/Item'
export default {
  components: {
    Item
  },
  methods: {
    showAll () {
      this.$store.dispatch("all")
    },
    showFinished () {
      this.$store.dispatch("finished")
    },
    showUnFinished () {
      this.$store.dispatch("unFinished")
    },
    checkedAllItem () {
      this.$store.dispatch("checkedAll")
    },
     deleteAllItem () {
       this.$store.dispatch("deleteAll")
    }
  },
  computed: {
  ...mapState(["list"]),
  ...mapGetters(['filterList'])
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