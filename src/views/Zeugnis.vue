<template>
   <section class="container">
        <div class="zeugnis">
        <fa class="icon" icon="file-alt" /> 
        <h1>Zeugnis</h1> <hr>
        </div>
        <p>Hier ist mein Zeugnis von der SAE als Webdesign & Development Diplom und meine Zertifikate, von der Udemy 
            Lernplattform erworben habe. 
        </p>
    </section> 
    <zeugnisImg></zeugnisImg>
</template>

<script>
import ZeugnisImg from '@/components/ZeugnisImg.vue'

export default {
    name: 'Zeugnis',
    components: {
        ZeugnisImg
    }
}
</script>

<style  scoped>
.container{
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
.zeugnis {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 50vw;
  font-size: 20px;
}
.zeugnis .icon {
  color: #42b983;
  font-size: 40px;
}
.zeugnis h1 {
  margin-left: 2em;
}
.zeugnis hr {
  width: 25vw;
}
.container p {
  width: 380px;
  text-align: initial;
  position: relative;
  left: -12em;
}
</style>