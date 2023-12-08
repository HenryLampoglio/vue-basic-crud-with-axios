import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import router from './router'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-green/theme.css'


const pinia = createPinia()
const app = createApp(App)

app.use(PrimeVue)
app.use(pinia)
app.use(router)
app.mount('#app')
