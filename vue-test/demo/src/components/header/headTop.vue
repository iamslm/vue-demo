<template>
  <div class="headtop">
    <div>
      <button class="headerBottom" @click="goFrom"><</button>
      <button class="headerBottom" @click="goTo">></button>
    </div>
    <p class="headerTitle">{{title}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ['title'],
  methods: {
    goFrom() {
      let path = this.$router.currentRoute.path;
      if(path == '/') {
        return;
      }
      this.$router.back();
    },

    goTo() {
      history.forward();
    },
  },
}

</script>

<style  lang='stylus' scoped>
.headtop
  display flex
  display: -webkit-flex;
  top 0.125rem
  width 100%
  height 1.875rem
  background-color #4b8681
  margin 0
  padding 0
.headerBottom
  left 0.0625rem
  top 50%
  margin 0.1875rem
  background-color #53c59b
  border-radius 0.3125rem
  border 2px solid #53c59b
  color white
  font-size 1.25rem
  padding 0
  width 2.1875rem
  text-align center
  line-height 0.9375rem
.headerTitle
  right 0.125rem
  top 50%
</style>
