<template>
  <div class="socialMedia">
    <ul>
      <li>
        <a href="https://github.com/jperosa97">
          <fa class="icon" :icon="['fab', 'github']"/>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/perosa-janick-665a49190/"> 
          <fa class="icon" :icon="['fab', 'linkedin']"/>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/mr_perosa/">
          <fa class="icon" :icon="['fab', 'instagram']"/>
        </a>
        
      </li>
      <li>
       <a href="mailto:janick.perosa97@hotmail.com">
          <fa class="icon" :icon="['fa', 'envelope']"/>
        </a>
      
        <hr>
      </li> 
      
    </ul>
   
  </div>
</template>

<style>
body {
  background-color: #1A191C;
}
.socialMedia {
  font-size: 50px;
}
.socialMedia ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 25vh;
  list-style: none;
  position: fixed;
  bottom: 75px;
  left: 50px;
}
.socialMedia ul li {
  font-size: 40px;
}
.socialMedia ul li a {
  color: #FBFBFA;
}
.socialMedia ul li a:hover{
  color: #42b983;
}
.socialMedia ul li hr {
  border: none;
  border-left: 2px solid #FBFBFA;
  height: 174px;
  width: 1px; 
}
</style>