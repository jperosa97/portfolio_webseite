<template>
    <v-container class="container">
        <v-row>
            <v-col cols="12" md="8">
                <v-col class="d-flex justify-center align-center">
                    <v-icon class="icon" icon="mdi-account"></v-icon>
                    <h1>Über mich
                        <hr>
                    </h1>
                </v-col>
                <p class="text-left my-4" style="line-height: 1.6;">Hallo ich bin Janick Perosa und ein Webdeveloper <br>

                    Ich mag es Dinge zu erstellen die im Internet leben, sei es Websites, Anwendungen oder irgendetwas
                    dazwischen.
                    Mein Ziel ist es, bei jeder Gelegenheit mitzumachen oder zu arbeiten, die mir hilft, meine Fähigkeiten
                    und
                    Kenntnisse zu
                    erweitern und zu verbessern. Ich freue mich über herausfordernde Projekte und arbeite gerne mit
                    allen möglichen Persönlichkeiten.

                    Nach meinem Abschluss an der SAE Institute in
                    Zürich als Webdesign & Development, suche ich eine stelle als Webdeveloper. Dort möchte ich an Vielzahl
                    von
                    faszinierende Technologien und hilfreiche Projekte mit arbeiten.
                </p>
            </v-col>
            <v-col>
                <v-card class="my-card" max-width="400">
                    <v-img src="../assets/portfoliofoto.jpg" contain></v-img>
                </v-card>
            </v-col>
            <v-container class="container">
                 <ProgrammiersprachenComponent/>
                <CardComponent/>
            </v-container>
           
        </v-row>
    </v-container>
</template>
<script>
import ProgrammiersprachenComponent from './ProgrammiersprachenComponent.vue'
import CardComponent from './CardComponent.vue'

export default {
    components: {
        ProgrammiersprachenComponent,
        CardComponent
    }
}
</script>
<style scoped>
h1 {
    font-size: 18px;
}

.my-card {
    margin: 0 auto;
}
@media screen and (min-width: 480px) {
    h1 {
        font-size: 30px;
    }
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 16px;
}
.icon {
    color: #42b983;
    font-size: 40px;
}
</style>