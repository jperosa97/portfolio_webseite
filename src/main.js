// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import VueScrollTo from 'vue-scrollto';
// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app').use(VueScrollTo);
