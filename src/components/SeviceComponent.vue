<template>
    <!-- Service Section Start  -->
    <div class="service">
        <div class="titel">
            <h1>Was kann ich anbieten / Service</h1>
        </div>
        <ul id="service">
            <li class="frontend">
                <fa class="icon" :icon="['fa', 'window-maximize']" />
                <h1>Frontend Developer</h1>
                <p>
                    Konvertieren von Daten in eine grafische Oberfläche mithilfe von HTML, CSS und Javascript,
                    damit Benutzer diesen Daten anzeigen und mit ihnen interagieren können.
                </p>
            </li>
            <li class="backend">
                <fa class="icon" :icon="['fa', 'database']" />
                <h1>Backend development</h1>
                <p>
                    Entwicklung der Serverseite, die für das Speichern und Organisieren von Daten einer Anwendung und für
                    alles,
                    was zwischen der Datenbank und dem Browser kommuniziert, verantwortlich ist.
                </p>
            </li>
            <li class="managment">
                <fa class="icon" :icon="['fa', 'edit']" />
                <h1>Website Managment</h1>
                <p>
                    Verwaltung aller Aktivitäten, die im Prozess der Veröffentlichung und Pflege einer Website im World Wide
                    Web enthalten sind.
                    Dies beinhaltet Website Optimierung und SEO-freundlich.
                </p>
            </li>
        </ul>
    </div>
<!-- Service Section Ende -->
</template>