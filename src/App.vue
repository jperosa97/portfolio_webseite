<template>
  <NavBar />
  <SideBarMenu />
  <Home />
</template>

<script setup>
  //  import NavBar from '@/components/NavBar.vue';
   import Home from '@/views/Home.vue';
   import SideBarMenu from '@/components/SideBarMenu.vue';
</script>
<style>
body {
  font-family: 'Roboto Mono', monospace;
  background-color: #262c30;
}
</style>