<template>
  <div class="containerTitel">
      <div class="projekt">
        <fa class="icon" icon="code" /> 
        <h1>Projekt</h1> <hr>
      </div> 
      <p>Ich präsentiere Projekte, die ich gemacht habe, einige Projekte sind für den öffentlichen Gebrauch 
        gemacht und einige sind Private Projekte.
      </p>
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  height: 45vh;
}
.containerTitel .projekt{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 50vw;
  font-size: 20px;
}
.containerTitel .projekt .icon {
  color: #42b983;
  font-size: 40px;
}
.containerTitel .projekt h1 {
  margin-left: 1em;
}
.containerTitel .projekt hr {
  width: 25vw;
}
.containerTitel  p {
  width: 380px;
  text-align: initial;
  position: relative;
  left: -12em;
}
</style>