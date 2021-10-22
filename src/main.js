import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faSymfony, faJsSquare, faAngular, faPhp, faHtml5, faLaravel, faVuejs, faNode, faWordpress, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faSymfony, faJsSquare, faAngular, faPhp, faHtml5, faLaravel, faVuejs, faNode, faWordpress, faGithub, faLinkedin, faInstagram)

createApp(App)
.component('fa', FontAwesomeIcon)
.use(router).mount('#app')
