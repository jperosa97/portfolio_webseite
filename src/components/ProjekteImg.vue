<template>
  <h1>Projekte</h1>
  <v-carousel class="mt-9" cycle height="500" hide-delimiter-background :show-arrows="false">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-card class="mx-auto" max-width="400">
        <v-img class="align-end text-white" height="200" :src="slide.src" cover>
          <v-card-title>{{ slide.title }}</v-card-title>
        </v-img>
        <v-card-subtitle class="pt-4">
          {{ slide.tool }}
        </v-card-subtitle>
        <v-card-text>
          <p>{{ slide.text }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn :href="slide.githubLink" target="_blank" color="orange" >
                Github
          </v-btn>
          <v-btn :href="slide.livePreview" color="orange" target="_blank">
            Webseite
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import projectImg1 from '../assets/projectImg/1.png'
import projectImg2 from '../assets/projectImg/2.png'
import projectImg3 from '../assets/projectImg/3.png'
import projectImg4 from '../assets/projectImg/4.png'
export default {
  data() {
    return {
      slides: [
        {
          src: projectImg1,
          title: 'Vue Js Animelist',
          text: 'Ich habe das Vue Framework für JS angefangen zu lernen. Beim lernen habe ich eine Anime Webseite gemacht, mithilfe der Jikan Api.',
          tool: 'Vue Js Vuetify Jikan Api',
          githubLink: 'https://github.com/jperosa97/VueJS_Anime',
          livePreview: 'https://anime-vue-js.netlify.app/'
        },
        {
          src: projectImg2,
          title: 'Js Wetter App',
          text: 'Mithilfe von der OpenWeatherMap Api, habe ich eine Wetter suche Funktion gemacht. Wo man das Wetter nur von der Schweiz und auch nur nach der PLZ suchen kann.',
          tool: 'JS OpenWeathermAP HTML & CSS',
          githubLink: 'https://github.com/jperosa97/Wetter_Api_JS',
          livePreview: 'https://jperosa97.github.io/Wetter_Api_JS/',
        },
        {
          src: projectImg3,
          title: 'Wordpress Webseite',
          text: 'Diese Webseite habe für einen Kollegen mittels Wordpress erstellt und diese ist auch Online. Besuchen Sie die Webseite.',
          tool: 'Wordpress Theme Frontend',
          livePreview: 'https://beni-gaertner.ch/',
        },
        {
          src: projectImg4,
          title: 'JS Gsap',
          text: 'Mithilfe von Gsap animation, habe ich eine Animation gemacht, wo man eine Banneranimation mit einer Nintendo Switch sieht.',
          tool: 'JS Gsap HTML & CSS',
          githubLink: 'https://github.com/jperosa97/Javascript_GSAP_Animation',
          livePreview: 'https://jperosa97.github.io/Javascript_GSAP_Animation/',
        },
      ],
    }
  },
}
</script>