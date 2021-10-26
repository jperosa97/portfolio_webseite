<template>
    <div class="containerProjekt">
    <ul class="projektImg">
      <li id="box01">
        <div class="containerAnim01">
        <div class="containerLinks">
          <h1>Symfony Menukart</h1>
          <p> 
            Ich habe das Symfony Framework für PHP angefangen zu lernen. Beim lernen habe ich ein Projekt gemacht, wo eine Digitale Speisekarte 
            angepriesen.
          </p>
          <n-space>
            <n-tag type="success">Symfony</n-tag>
            <n-tag type="success">PHP</n-tag>
            <n-tag type="success">Twig</n-tag>
            <a href="https://github.com/jperosa97/Symfony_Menukarte"> 
              <fa class="icon" :icon="['fab', 'github']"/>
            </a>
          </n-space>   
        </div>
        <img class="imgLinks" src="../assets/projektImg/1.png" alt="Symfony"> 
        </div>
      </li>
     <li id="box02">
      <div class="containerAnim02">
        <img class="imgRechts" src="../assets/projektImg/2.png" alt="Vue Js">
        <div class="containerRechts">
          <h1>Vuejs Anime</h1>
          <p>
            Ich habe das Vue Framework für JS angefangen zu lernen. Beim lernen habe ich eine Anime Webseite gemacht, 
            mithilfe einer Api namen's Jikan. 
          </p>
          <n-space>
            <n-tag type="success">Vue JS</n-tag>
            <n-tag type="success">Primevue</n-tag>
            <n-tag type="success">Jikan Api</n-tag>
            <a href="https://github.com/jperosa97/VueJS_Anime"> 
              <fa class="icon" :icon="['fab', 'github']"/>
            </a>
          </n-space>
        </div>
        </div>
      </li>
     <li id="box03">
     <div class="containerAnim03">
      <div class="containerLinks">
        <h1>Node Js Webapp</h1>
        <p>
         Ich habe das Node Framework für JS angefangen zu lernen. Beim lernen habe ich eine Food Webseite gemacht, mithilfe einer Api namen's Spoonacular.
        </p>
        <n-space>
          <n-tag type="success">Node Js</n-tag>
          <n-tag type="success">EJS</n-tag>
          <n-tag type="success">Spoonacular Api</n-tag>
          <a href="https://github.com/jperosa97/lets_cook_webapp"> 
            <fa class="icon" :icon="['fab', 'github']"/>
          </a>
        </n-space>
        </div>
        <img class="imgLinks" src="../assets/projektImg/3.png" alt="Node Js ">
        </div>
      </li>
      <li id="box04">
      <div  class="containerAnim04">
        <img class="imgRechts" src="../assets/projektImg/4.png" alt="JS">
         <div class="containerRechts">
        <h1>JS Wetter App</h1>
        <p>
          Mithilfe von der OpenWeatherMap Api, habe ich eine Wetter suche Funktion gemacht. Wo man das Wetter nur von der Schweiz 
          und auch nur nach der PLZ suchen kann.
        </p>
        <n-space>
          <n-tag type="success">JS</n-tag>
          <n-tag type="success">OpenWeatherMap</n-tag>
          <n-tag type="success">HTML & CSS</n-tag>
          <a  href="https://github.com/jperosa97/Wetter_Api_JS"> 
            <fa class="icon" :icon="['fab', 'github']"/>
          </a>
        </n-space>
        
        </div>
      </div>
      </li>
   
   </ul>
  </div>
</template>

<script>
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default {
  mounted() {
    this.startAnimation()    
  },  
  methods: {
    startAnimation: function(){  
        gsap.registerPlugin(ScrollTrigger);  
        gsap.defaults({
          duration: 1.5,
          opacity: 0
      })
      let timeLine01 = gsap.timeline({
        scrollTrigger: {
          trigger: "#box01",
          start: "top center"
        }
      })
      timeLine01.from('.containerAnim01', { y: 300, });

      let timeLine02 = gsap.timeline({
        scrollTrigger: {
          trigger: "#box02",
          start: "top center"
        }
      })
        timeLine02.from('.containerAnim02', { y: 300, });
      
        
      let timeLine03 = gsap.timeline({
        scrollTrigger: {
          trigger: "#box03",
          start: "top center"
        }
      })
      timeLine03.from('.containerAnim03', { y: 300, })
      
      let timeLine04 = gsap.timeline({
        scrollTrigger: {
          trigger: "#box04",
          start: "top center"
        }
      })
      timeLine04.from('.containerAnim04', { y: 300, });
    }
  },
}
</script>

<style>
 .containerProjekt .projektImg {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  height: 255vh;
}
.containerAnim01{
  display: flex;
}
.containerAnim02{
  display: flex;
  width: 0;
}
.containerAnim03{
  display: flex;
}
.containerAnim04{
  display: flex;
  width: 0;
}
.containerProjekt .projektImg li {
  list-style: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.containerProjekt .projektImg li .containerRechts{
  border: #25251D solid 1px;
  background-color: #25251D;
  width: 556px;
  height: 213px;
  position: relative;
  border-radius: 10px;
  text-align: left;
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
  top: 110px;
  left: -10em;
  box-shadow: -20px -20px 25px #1a191c;
}
.containerProjekt .projektImg li .containerRechts h1 {
  font-size: 25px;
}
.containerProjekt .projektImg li .containerRechts p {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: 32vw;
  margin: 15px;
}
.containerProjekt .projektImg li .containerLinks{
  border: #25251D solid 1px;
  background-color: #25251D;
  width: 556px;
  height: 213px;
  position: relative;
  border-radius: 10px;
  text-align: initial;
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
  left: 200px;
  top: 110px;
  box-shadow: 15px 20px 25px #1A191C;
}
.containerProjekt .projektImg li .containerLinks h1 {
  font-size: 25px;
}
.containerProjekt .projektImg li .containerLinks p {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: 32vw;
}
.containerProjekt .projektImg .imgLinks {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 50vw;
  height: 50vh;
  border-radius: 10px;
}
.containerProjekt .projektImg .imgRechts {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 50vw;
  height: 50vh;
  margin-left: 200px;
  border-radius: 10px;
}
.containerProjekt .projektImg .icon {
  font-size: 30px;
  color: #FBFBFA;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.containerProjekt .projektImg .icon:hover{
  color: #42b983;
}
</style>