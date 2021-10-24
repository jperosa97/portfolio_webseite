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
   display: flex;
    justify-content: space-between;
    width: 90vw;
}
#nav ul {
    display: flex;
    justify-content: space-around;
    width: 35vw;
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

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav img {
    width: 90px;
    left: 60px;
    position: relative;
    top: 1em;
}
</style>