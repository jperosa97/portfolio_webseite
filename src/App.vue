<template>
  <navBar></navBar>
  <sideBarMedie></sideBarMedie>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import SideBarMedie from '@/components/SideBarMedie.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    SideBarMedie 
  }
}
</script>

<style>
body {
  background-color: #1A191C;
}

</style>