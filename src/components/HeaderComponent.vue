<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="8">
                <v-col class="d-flex justify-center align-center">
                    <v-icon class="icon" icon="mdi-account"></v-icon>
                    <h1>Über mich
                        <hr>
                    </h1>
                </v-col>
                <p class="text-left">Hallo ich bin Janick Perosa und ein Webdeveloper <br>

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
                <v-card class="my-card" max-width="415">
                    <v-img src="../assets/portfoliofoto.jpg" contain height="400" max-width="100%"></v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
h1 {
    font-size: 18px;
}

.my-card {
    margin: 0 auto;
    /* Zum Zentrieren der Karte */
}

/*p{
     line-height: 1.5;
}*/
@media screen and (min-width: 480px) {
    h1 {
        font-size: 30px;
    }
}

.icon {
    color: #42b983;
    font-size: 40px;
}
</style>