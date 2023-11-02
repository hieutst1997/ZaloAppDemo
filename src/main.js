import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'
import App from './App.vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@/assets/css/style.css';
import '@vuepic/vue-datepicker/dist/main.css';
const app = createApp(App)

app.use(router)
app.use(store)
app.component('VueDatePicker', VueDatePicker);

router.isReady().then(() => app.mount('#app'))
