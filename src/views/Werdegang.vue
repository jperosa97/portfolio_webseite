<template>
  <section class="container">
    <div class="werdegang">
      <fa class="icon" icon="suitcase" /> 
      <h1>Werdegang</h1> <hr>
    </div>
    <p>Dies sind Unternehmen, für die ich gearbeitet habe. Ich habe gelernt und es genossen, mit diesen Unternehmen zu arbeiten. </p>
  </section> 
  <section class="tab"> 
    <tabs></tabs>
  </section>
</template>

<script>
import Tabs from '@/components/Tabs.vue'

export default {
  name: 'Werdegang',
  components: {
   Tabs
  }
}

</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45vh;
}
.werdegang {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50vw;
  font-size: 20px;
}
.werdegang .icon {
  color: #42b983;
  font-size: 40px;
}
.werdegang  h1 {
  margin-left: 2em;
}
.werdegang hr {
  width: 25vw;
}
.container p {
  width: 380px;
  text-align: initial;
  position: relative;
  left: -12em;
}
</style>