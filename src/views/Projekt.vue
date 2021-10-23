<template>
  <div class="containerTitel">
      <div class="projekt">
        <fa class="icon" icon="code" /> 
        <h1>Projekt</h1> <hr>
      </div> 
      <p>Ich präsentiere Projekte, die ich gemacht habe, einige Projekte sind für den öffentlichen Gebrauch gemacht und einige sind Private Projekte.</p>
  </div>
  <projekteImg></projekteImg>

</template>
<script>
import ProjekteImg from '@/components/ProjekteImg.vue'

export default {
  name: 'Projekt',
  components: {
   ProjekteImg
  }
}
</script>

<style>
.containerTitel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 25vh;
}
.containerTitel .projekt{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50vw;
}
.containerTitel .projekt .icon {
  color: #42b983;
  font-size: 40px;
}
.containerTitel .projekt h1 {
  margin-left: 2em;
}
.containerTitel .projekt hr {
  width: 25vw;
}
.containerTitel  p {
  width: 332px;
  text-align: initial;
  position: relative;
  left: -15em;
}
</style>