<template>
  <header class="ma-16">
    <HeaderComponent />
  </header>
 <section class="ma-16">
    <TimeLine />
 </section>
  <main class="ma-16">
     <ProjekteImg/>
  </main>
 
</template>
<script>
import TimeLine from '@/components/TimeLine.vue';
import HeaderComponent from '@/components/HeaderComponent.vue'; 
import ProjekteImg from '@/components/ProjekteImg.vue'; 

export default {
  components: {
    HeaderComponent,
    TimeLine,
    ProjekteImg
}
}
</script>

<style scoped></style>
