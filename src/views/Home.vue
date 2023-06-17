<template>
  <header>
    <HeaderComponent />
  </header>
 <section>
    <TimeLine />
 </section>
  <main class="ml-16 mr-16">
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

<style scoped>
section{
  background-color: #2c3439;
}

</style>
