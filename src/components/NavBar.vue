<template>
      <div id="nav">
        <img alt="jpe logo" src="../assets/logo.png">
        <!-- <ul> 
          <li class="nav-link"><a  @click="scrollToSection('#section1')" class="active" >Über mich</a></li>
          <li class="nav-link"><a  @click="scrollToSection('#section2')"> Werdegang & Zeugnis</a></li>
          <li class="nav.link"><a  @click="scrollToSection('#section3')">Projekte</a></li> 
        </ul> -->
      </div>
      <router-view/>
</template>
<script>
export default {
    methods: {
    scrollToSection(sectionId) {
      this.$scrollTo(sectionId, 500);
    },
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');

#app {
    text-align: center;
}

#nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background-color: #2c3439; 
    position: fixed;
    z-index: 2;
    width: 100%;
    border-bottom: solid 1px #ced9bf;
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

#nav ul li a:hover {
    color: #42b983;
}

#nav a.active {
    color: #42b983;
}

#nav img {
    width: 90px;
    height: 90px;
    left: 60px;
    position: relative;
    top: 1em;
}</style>