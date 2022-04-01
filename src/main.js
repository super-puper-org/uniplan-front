import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
/* import VueModally from 'vue-modally-v3' */

const app = createApp(App);

app.AOS = new AOS.init();

app.mount('#app');
