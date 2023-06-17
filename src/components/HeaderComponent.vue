<template>
    <v-container class="container" id="section1">
        <v-row class="mt-16 pt-11">
            <v-col cols="12" md="8">
                <v-col class="d-flex justify-center align-center">
                    <h1>Über mich
                        <hr>
                    </h1>
                </v-col>
                <p class="text-left my-4" style="line-height: 1.6;"> Hallo, mein Name ist Janick Perosa und ich bin ein Webentwickler.
                    Ich bin leidenschaftlich daran interessiert, Dinge zu erstellen, die im Internet zum Leben erwachen, sei es Websites, 
                    Anwendungen oder eine Kombination aus beidem. <br> <br> Mein Ziel ist es, bei jeder Gelegenheit, die sich mir bietet, mitzuwirken oder 
                    zusammenzuarbeiten, um meine Fähigkeiten und Kenntnisse kontinuierlich zu erweitern und zu verbessern. Ich schätze herausfordernde Projekte 
                    und arbeite gerne mit Menschen unterschiedlicher Persönlichkeiten zusammen. Nach meinem Abschluss an der SAE Institute in Zürich im Bereich Webdesign 
                    und Entwicklung suche ich nun eine Stelle als Webentwickler. <br> <br> Dort möchte ich mit einer Vielzahl faszinierender Technologien arbeiten und an hilfreichen 
                    Projekten mitwirken.
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