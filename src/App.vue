<template>
  <div>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld,
  },
}
</script>
