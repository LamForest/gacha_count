<template>
  <!-- <HelloWorld /> -->
  <home/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./views/HelloWorld.vue";
import Home from "./views/home.vue"

@Options({
  components: {
    // HelloWorld,
    Home,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
  margin: auto;
  width: 100%;
  max-width: 800px;
}
</style>
