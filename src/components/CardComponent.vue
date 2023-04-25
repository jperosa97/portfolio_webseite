<template>
    <v-card v-for="(service, index) in services" :key="index" class="mx-auto ma-10" height="280" max-width="344" variant="outlined">
        <v-row>
            <v-col>
                <v-card-item>
                    <div>
                        <div class="text-h5 ma-4">
                            <v-icon>{{ service.icon }}</v-icon> {{ service.title }}
                        </div>
                        <p class="text-left">{{ service.text }}</p>
                    </div>
                </v-card-item>
            </v-col>
        </v-row>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        services: [
            {
                icon: 'mdi-monitor',
                title: 'Frontend Developer',
                text: 'Konvertieren von Daten in eine grafische Oberfläche mithilfe von HTML, CSS und Javascript, damit Benutzer diesen Daten anzeigen und mit ihnen interagieren können.',
            },
            {
                icon: 'mdi-server',
                title: 'Backend developer',
                text: 'Entwicklung der Serverseite, die für das Speichern und Organisieren von Daten einer Anwendung und für alles, was zwischen der Datenbank und dem Browser kommuniziert, verantwortlich ist.',
            },
            {
                icon: 'mdi-pencil-box-outline',
                title: 'Website Managment',
                text: 'Verwaltung aller Aktivitäten, die im Prozess der Veröffentlichung und Pflege einer Website im World Wide Web enthalten sind. Dies beinhaltet Website Optimierung und SEO-freundlich.',
            },
        ],
    }),
}
</script>