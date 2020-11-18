<template>
  <div>
    <div>
      <button @click="goFrom"><</button>
      <button @click="goTo">></button>
    </div>
    <p>{{title}}</p>
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

<style>
</style>
