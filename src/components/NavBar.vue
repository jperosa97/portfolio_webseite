<template>
  <div id="nav">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul>
      <li><router-link to="/">
      <fa icon="user" /> Über mich</router-link></li>
      <li><router-link to="/werdegang"><fa icon="suitcase"/> Werdegang</router-link></li>
      <li><router-link to="/projekt"> <fa icon="code"/> Projekte</router-link></li>
    </ul>
  </div>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');

#app {
  text-align: center;
  color: #FBFBFA;
}
#nav{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  width: 90vw;
}
#nav ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  width: 35vw;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  float: right;
  list-style: none; 
}
#nav ul li a {
  font-weight: bold;
  color: #FBFBFA;
  text-decoration: none;
  font-size: 17px;
}
#nav ul li a:hover{
  color: #42b983;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
#nav img {
  width: 90px;
  height: 90px;
  left: 60px;
  position: relative;
  top: 1em;
}
</style>