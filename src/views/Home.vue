<template><div class="profilBild">
      <img src="../assets/portfoliofoto.jpg" alt="">
      </div>
    <section class="home">
      
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
        <ul>
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
    </section>
    <section class="service">
      <div class="titel">
        <h1>Was kann ich anbieten / Service</h1>
      </div>
      <ul id="service"> 
        <li>
          <fa class="icon" :icon="['fa', 'code']"/>
          <h1>Frontend Developer</h1>
          <p>
            Konvertieren von Daten in eine grafische Oberfläche mithilfe von HTML, CSS und Javascript, 
            damit Benutzer diesen Daten anzeigen und mit ihnen interagieren können. 
          </p>
        </li>
        <li>
          <fa class="icon" :icon="['fa', 'database']"/>
          <h1>Backend development</h1>
          <p>
            Entwicklung der Serverseite, die für das Speichern und Organisieren von Daten einer Anwendung und für alles, 
            was zwischen der Datenbank und dem Browser kommuniziert, verantwortlich ist. 
          </p>
        </li>
        <li>
          <fa class="icon" :icon="['fa', 'window-maximize']"/>
          <h1>Website Managment</h1>
          <p>
            Verwaltung aller Aktivitäten, die im Prozess der Veröffentlichung und Pflege einer Website im World Wide Web enthalten sind. 
            Dies beinhaltet Website Optimierung und SEO-freundlich. 
          </p>
        </li>
      </ul>
    </section>  
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: -15em;
    margin-top: -40em;
    height: 140vh;
}
.profilBild {
    display: flex;
    position: relative;
    justify-content: right;
    width: 96vw;
    align-items: flex-end;
    height: 53vh;
    left: -3em;
}
.profilBild  img{
  width: 265px;
  object-fit: cover;
  height: 265px;
  border-radius: 10px;
}
.home  .titel {
  display: flex;
  justify-content: flex-start;
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
  width: 50vw;
  text-align: initial;
}
.home  .programmierSprache ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 25vh;
}
.home .programmierSprache ul li {
  display: flex;
}
.home .programmierSprache ul li .content {
  display: flex;
  justify-content: space-around;
  width: 50vw;
  margin-left: -72px;
}
.home .programmierSprache ul li .test {
  display: flex;
  align-items: center;
  border: solid 1px #FBFBFA;
  border-radius: 6px;
  height: 55px;
  width: 160px;
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
    height: 65vh;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.service .titel {
  display: flex;
  justify-content: center;
}
.service #service {
  display: flex;
  list-style: none;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.service #service li .icon {
  font-size: 75px;
  color: #42b983;
  position: relative;
  top: 40px;
}
.service #service li h1 {
  position: relative;
  top: 2em;
}
.service #service li p {
    width: 332px;
    text-align: initial;
    position: relative;
    left: 0;
}
</style>