import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/primevue.min.css'; /* Deprecated */
import 'primeicons/primeicons.css';

import Ripple from 'primevue/ripple';

import globalComponents from '@/components/globalComponents';

const app = createApp(App);
const pinia = createPinia()

app.directive('ripple', Ripple);

globalComponents.map((component) => app.component(component.name, component));

app.use(router).use(PrimeVue, { ripple: true  }).use(pinia).mount('#app')
