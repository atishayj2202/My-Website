<template>
  <div id="app">
    <Appbar/>
    <Mainbar/>
    <router-view/>
  </div>
</template>

<script>
import Appbar from './Appbar'
import Mainbar from './Mainbar'
export default {
  name: 'App',
  components: {
    Appbar, Mainbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin: auto;
  margin-top: 0;
  padding: 0px;
  height: 100vh;
  width: 80%;
}
@media only screen and (max-width: 820px){
  #app{
    width: 95%;
  }
}
</style>
