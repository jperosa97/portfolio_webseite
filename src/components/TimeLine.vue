<template>
  <div>
    <h1>Experience</h1>
    <v-row>
      <v-col>
        <v-timeline>
          <v-timeline-item v-for="(item, i) in items" :key="i">
            <v-card max-width="500" height="auto" class="pa-2">
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-subtitle>
                <span>{{ item.date }}, {{ item.firma }}</span>
              </v-card-subtitle>
              <v-card-text>{{ item.text }}</v-card-text>
              <v-btn @click="showPDF(item.pdfUrl)" variant="outlined"> Button</v-btn>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        date: '02.2023 - 04.2023',
        title: 'Praktikum Webentwickler',
        firma: 'H2G Internetagentur in Aarau',
        text: 'Sicherstellen der Kundenaufträgen, Einrichten, Produktion und Überwachung der Produktionsanlag.',
        pdfUrl: '../assets/Lebenslauf_Janick_Perosa.pdf',
      },
      {
        date: '03.2019 - 03.2021',
        title: 'Webdesgin & Development',
        firma: 'SAE Institute in Zürich',
        text: '',
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
  }),
  methods: {
    showPDF(pdfUrl) {
      console.log(pdfUrl);
      window.open(pdfUrl, '_blank')
    }
  }
}
</script>

<style scoped>

</style>
