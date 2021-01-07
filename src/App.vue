<template>
  <div id="app">
    <router-view v-if="routerAlive" v-on:click="routerRefresh" class="route_app"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      routerAlive:true,
    }
  },
  methods:{
    routerRefresh(){
      this.routerAlive = false;
      this.$nextTick(()=>{
        this.routerAlive = true;
      });
    },
  }
}
</script>

<style>
</style>
