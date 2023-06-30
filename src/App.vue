<template>
  <div id = "body">
    <h1>암호화폐 실시간 TOP 100</h1>
    <BitCoin msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import BitCoin from './components/BitCoin.vue'

export default {
  name: 'App',
  components: {
    BitCoin
  }
}
</script>

<style>

body {
    background-color: #222;
    color: white;
}
h1 {
    text-align: center;
}

/* * {
  margin: 0;
  padding: 0;
}

#app {
  background-color: #27374D;
}

#app h1 {
  text-align: center;
  color: white;
} */
</style>
