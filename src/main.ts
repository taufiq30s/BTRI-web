/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import VueSmoothScroll from 'v-smooth-scroll'

const app = createApp(App)

registerPlugins(app)

app.use(VueSmoothScroll, {offset: -120})
app.mount('#app')
