<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addCommet="addCommet" />
      <List :comments="comments" :deleteCommet="deleteCommet" />
    </div>
  </div>
</template>

<script>
import Add from './components/Add'
import List from './components/List'
export default {
  data () {
    return {
      comments: [
        {
          name: 'ywh',
          content: '不知道怎么说'
        },
        {
          name: 'ywh1',
          content: '不知道怎么说'
        },
        {
          name: 'ywh2',
          content: '不知道怎么说'
        }
      ]
    }
  },
  methods: {
    addCommet (comment) {
      this.comments.unshift(comment)
    },
    deleteCommet (index) {
      this.comments.splice(index, 1)
    }
  },
  components: {
    Add,
    List
  }
}
</script>

<style scoped>
</style>
