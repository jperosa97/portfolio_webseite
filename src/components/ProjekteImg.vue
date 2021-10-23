<template>
    <div class="containerProjekt">
    <ul class="projektImg">
      <li>
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
      </li>
     <li>
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
      </li>
     <li>
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
      </li>
      <li>
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
      </li>
   
   </ul>
  </div>
</template>

<style>
 .containerProjekt .projektImg {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 255vh;
}
.containerProjekt .projektImg li {
  list-style: none;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 110px;
  left: -10em;
  box-shadow: 15px -28px 25px #1a191c;
}
.containerProjekt .projektImg li .containerRechts h1 {
  font-size: 25px;
}
.containerProjekt .projektImg li .containerRechts p {
  display: flex;
  flex-direction: row;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 200px;
  top: 110px;
  box-shadow: 15px 20px 25px #1A191C;
}
.containerProjekt .projektImg li .containerLinks h1 {
  font-size: 25px;
}
.containerProjekt .projektImg li .containerLinks p {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 32vw;
}
.containerProjekt .projektImg .imgLinks {
  display: flex;
  width: 50vw;
  border-radius: 10px;
}
.containerProjekt .projektImg .imgRechts {
  display: flex;
  width: 50vw;
  margin-left: 200px;
  border-radius: 10px;
}
.containerProjekt .projektImg .icon {
  font-size: 30px;
  color: #FBFBFA;
  display: flex;
}
</style>