<template>
  <div id="app">
    <router-view/>
    <main-tar-bar/>
  </div>
</template>

<script>
import MainTarBar from '@/components/contents/maintarbar/MainTarBar'
import {INCREMENT} from '@/store/mutations.types'
import '@/assets/css/base.css'
export default {
  name: 'App',
  components:{
    MainTarBar
  },
  methods:{
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
