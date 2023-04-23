<template>
  <div>
    <h1 class="mb-9">Erfahrungen</h1>
    <v-row>
      <v-col>
        <v-tabs v-model="tab" align-tabs="center" centered stacked>
          <v-tab value="tab-1">
            <v-icon>mdi-briefcase-outline</v-icon>
            Arbeit
          </v-tab>
          <v-tab value="tab-2">
            <v-icon>mdi-account-school-outline</v-icon>
            Schule
          </v-tab>
        </v-tabs>

        <v-container center>
          <v-window v-model="tab">
            <v-window-item value="tab-1">
              <v-timeline>
                <v-timeline-item v-for="(work, index) in works" :key="index">
                  <v-card max-width="500" class="pa-2">
                    <v-card-title>{{ work.title }}</v-card-title>
                    <v-card-subtitle>
                      <span>{{ work.date }}, {{ work.firma }}</span>
                    </v-card-subtitle>
                    <v-card-text>{{ work.text }}</v-card-text>
                    <v-btn v-if="work.pdfUrl" :href="`../assets/${work.pdfUrl}`" target="_blank" variant="outlined">Button</v-btn>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-window-item>
            <v-window-item value="tab-2">
              <v-timeline>
                <v-timeline-item v-for="(experience, index) in experiences" :key="index">
                  <v-card max-width="auto" class="pa-2">
                    <v-card-title>{{ experience.title }}</v-card-title>
                    <v-card-subtitle>
                      <span>{{ experience.school }}, {{ experience.date }}</span>
                    </v-card-subtitle>
                    <v-btn v-if="experience.pdfUrl" :href="`../assets/diploma_zertifikat/${experience.pdfUrl}`" target="_blank" variant="outlined">Button</v-btn>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-window-item>
          </v-window>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
      tab: null,
      works: [
        {
          date: '02.2023 - 04.2023',
          title: 'Praktikum Webentwickler',
          firma: 'H2G Internetagentur in Aarau',
          text: 'Sicherstellen der Kundenaufträgen, Einrichten, Produktion und Überwachung der Produktionsanlag.',
          pdfUrl: 'Lebenslauf_Janick_Perosa.pdf',
        },
        {
          date: '01.2020 - 06.2020',
          title: 'Maschinenführer',
          firma: 'Effingermedien in Kleindöttingen',
          text: 'Sicherstellen der Kundenaufträgen, Einrichten, Produktion und Überwachung der Produktionsanlag.',
        },
        {
          date: '07.2019 - 11.2019',
          title: 'Mediendesigner',
          firma: 'Jobtv medienwerkstatt in Zürich',
          text: 'Digitalegrafische Konzepte, Screendesign, Logos und Flyer.',
        },
      ],
       experiences: [
      {
        title: 'Webdesign & Development',
        school: 'sae institute',
        date: '03.2019 - 03.2021',
        pdfUrl: 'zeugnisse.pdf',
      },
      {
        title: 'Printmedienverarbeiter Druckausrüster',
        school: 'Schule für Gestaltung Bern/Biel',
        date: '08.2014 - 07.2017'
      }
    ],
    }),
}
</script>

<style scoped></style>
