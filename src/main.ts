import { createApp } from 'vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import './style.css'
// add vuetify as types
const vuetify = createVuetify({
 components,
 directives,
})

createApp(App)
 .use(vuetify)
 .mount('#app')