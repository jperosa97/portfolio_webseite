<template>
  <div class="home">
    <div class="profilBild">
      <img src="../assets/portfoliofoto.jpg" alt="">
    </div>
    <div class="titel">
      <fa class="icon" icon="user" /><h1>Über mich</h1> <hr>
    </div>
    <div class="beschreibung">
      <p>Hallo ich bin Janick Perosa und ein Webdeveloper </p>
      <p> Ich mag es Dinge zu erstellen die im Internet leben, sei es Websites, Anwendungen oder irgendetwas dazwischen. 
        Mein Ziel ist es, bei jeder Gelegenheit mitzumachen oder zu arbeiten, die mir hilft, meine Fähigkeiten und Kenntnisse zu
        erweitern und zu verbessern. Ich freue mich über herausfordernde Projekte und arbeite gerne mit
        allen möglichen Persönlichkeiten. 
      </p> 
      <p> 
        Nach meinem Abschluss an der SAE Institute in 
        Zürich als Webdesign & Development, suche ich eine stelle als Webdeveloper. Dort möchte ich an Vielzahl von 
        faszinierende Technologien und hilfreiche Projekte mit arbeiten. 
      </p> 
      <p> Hier sind einige Technologien, mit denen ich in letzter Zeit gearbeitet habe: </p>
    </div>
    <div class="programmierSprache">
      <ul id="programmierBox">
        <li>
          <div class="content">
            <div class="test">
              <fa class="icon" :icon="['fab', 'html5']"/> <h1>HTML & CSS</h1>
          </div>
          <div class="test"> 
            <fa class="icon" :icon="['fab', 'js-square']"/> <h1>Javascript</h1>
          </div>
             <div class="test"> 
            <fa class="icon" :icon="['fab', 'angular']"/> <h1>Angular</h1>
          </div>
             <div class="test"> 
            <fa class="icon" :icon="['fab', 'php']"/> <h1>PHP & MYSQL</h1>
          </div>
            </div>
         </li>
          <li>
             <div class="content">
            <div class="test">
              <fa class="icon" :icon="['fab', 'symfony']"/> <h1>Symfony</h1>
          </div>
          <div class="test"> 
            <fa class="icon" :icon="['fab', 'laravel']"/> <h1>Laravel</h1>
          </div>
             <div class="test"> 
            <fa class="icon" :icon="['fab', 'vuejs']"/> <h1>Vue Js</h1>
          </div>
             <div class="test"> 
            <fa class="icon" :icon="['fab', 'node']"/> <h1>Node Js</h1>
          </div>
            </div>
          </li>
          <li>
             <div class="content">
            <div class="test">
              <fa class="icon" :icon="['fab', 'wordpress']"/> <h1>Wordpress</h1>
          </div>
            </div>
          </li>
        </ul>
      </div>
      </div>
    <div class="service">
      <div class="titel">
        <h1>Was kann ich anbieten / Service</h1>
      </div>
      <ul id="service"> 
        <li class="frontend">
          <fa class="icon" :icon="['fa', 'window-maximize']"/>
          <h1>Frontend Developer</h1>
          <p>
            Konvertieren von Daten in eine grafische Oberfläche mithilfe von HTML, CSS und Javascript, 
            damit Benutzer diesen Daten anzeigen und mit ihnen interagieren können. 
          </p>
        </li>
        <li class="backend">
          <fa class="icon" :icon="['fa', 'database']"/>
          <h1>Backend development</h1>
          <p>
            Entwicklung der Serverseite, die für das Speichern und Organisieren von Daten einer Anwendung und für alles, 
            was zwischen der Datenbank und dem Browser kommuniziert, verantwortlich ist. 
          </p>
        </li>
        <li class="managment">
          <fa class="icon" :icon="['fa', 'edit']"/>
          <h1>Website Managment</h1>
          <p>
            Verwaltung aller Aktivitäten, die im Prozess der Veröffentlichung und Pflege einer Website im World Wide Web enthalten sind. 
            Dies beinhaltet Website Optimierung und SEO-freundlich. 
          </p>
        </li>
      </ul>
    </div>  
</template>

<script>
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default {
  name: 'Home',
  components: {
  },
    mounted() {
    this.startAnimation()    
  },  
  methods: {
    startAnimation: function(){  
       gsap.registerPlugin(ScrollTrigger);  
        gsap.defaults({
          duration: 2,
          opacity: 0
      })
           let timeLine01 = gsap.timeline({
        scrollTrigger: {
          trigger: ".programmierSprache",
          start: "top center"
        }
      }) 
      timeLine01.from('#programmierBox', {x: -300,})
      
      let timeLine02 = gsap.timeline({
        scrollTrigger: {
          trigger: "#service",
          start: "top center"
        }
      }) 
      timeLine02.from('.frontend', {y: 300}, "-=1")
      
      let timeLine03 = gsap.timeline({
        scrollTrigger: {
          trigger: "#service",
          start: "top center"
        }
      }) 
      timeLine03.from('.backend', {y: 300}, "+=1")

       let timeLine04 = gsap.timeline({
        scrollTrigger: {
          trigger: "#service",
          start: "top center"
        }
      }) 
      timeLine04.from('.managment', {y: 300}, "+=2")
    }
  },
}
</script>

<style scoped>
.home {
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
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  margin-left: -7em;
  margin-top: -21em;
  height: 120vh;
}
.profilBild {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: right;
      -ms-flex-pack: right;
          justify-content: right;
  width: 96vw;
  position: relative;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  height: 53vh;
  left: 10px;
  top: 22em;
}
.profilBild  img{
  width: 265px;
  -o-object-fit: cover;
     object-fit: cover;
  height: 265px;
  border-radius: 10px;
}
.home  .titel {
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
}
.home  .titel .icon {
  color: #42b983;
  font-size: 40px;
}
.home .titel h1 {
  margin-left: 2em;
}
.home  .titel hr {
  width: 25vw;
}
.home .beschreibung{
  font-size: 15px;
  width: 50vw;
  text-align: initial;
}
.home  .programmierSprache ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  height: 25vh;
}
.home .programmierSprache ul li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.home .programmierSprache ul li .content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  width: 50vw;
  margin-left: -72px;
}
.home .programmierSprache ul li .test {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border: solid 1px #FBFBFA;
  border-radius: 6px;
  height: 55px;
  width: 160px;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
}
.home .programmierSprache ul li .test:hover {
  color: #42b983;
  border-color: #42b983;
}
.home .programmierSprache ul li .icon {
  font-size: 30px;
}
.home .programmierSprache ul li .test h1 {
  font-size: 15px;
}
.service {
  height: 95vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
.service .titel {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.service #service {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  list-style: none;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  width: 75vw;
  margin-left: 12em;
}
.service #service li {
  border: 1px solid #25251D;
  background-color: #25251D;
  width: 350px;
  height: 410px;
  border-radius: 15px;
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
  -ms-flex-pack: distribute;
      justify-content: space-around;
}
.service #service li:hover{
box-shadow: 0 0.5em 0.5em -0.4em #25251D;
-webkit-transform: translateY(-0.25em);
        transform: translateY(-0.25em);
}
.service #service li .icon {
    font-size: 65px;
    color: #42b983;
    position: relative;
    top: 30px;
}
.service #service li h1 {
  top: 10px;
  font-size: 25px;
}
.service #service li p {
  width: 332px;
  position: relative;
  left: 0;
  top: -28px;
}
</style>