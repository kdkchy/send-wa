import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import moshaToast from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
library.add(fab)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('navigation', require('./components/NavApp.vue').default)
    .use(moshaToast)
    .use(router).mount('#app')
