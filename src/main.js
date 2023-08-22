import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'


// COMPONENTES INSTANCIADOS DE FORMA GLOBAL
import btn from './components/Button.vue'
import modal from './components/Modal.vue'
import tooltip from './components/Tooltip.vue'
import toast from './components/Toast.vue'
import datatable from './components/DataTable.vue'
import Input from './components/Input.vue'
import Card from './components/Card.vue'
import ValidateErrors from './components/ValidateErrors.vue'
import axios from 'axios'

library.add(fas)

axios.defaults.baseURL = import.meta.env.VITE_MY_URL_BASE

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.component('icon', FontAwesomeIcon)
app.component('modal', modal)
app.component('tooltip', tooltip)
app.component('toast', toast)
app.component('datatable', datatable)
app.component('btn', btn)
app.component('text-field', Input)
app.component('card', Card)
app.component('validate-errors', ValidateErrors)

app.mount('#app')



