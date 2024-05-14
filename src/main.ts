import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Ripple from 'primevue/ripple';
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/primevue.min.css'; /* Deprecated */
import 'primeicons/primeicons.css';
import App from '@/App.vue';
import router from '@/router';

import globalComponents from '@/components/globalComponents';

const app = createApp(App);
const pinia = createPinia();

app.directive('ripple', Ripple);

globalComponents.map((component) => app.component(component.name, component));

app
  .use(router)
  .use(pinia)
  .use(PrimeVue, { ripple: true  })
  .use(ToastService)
  .mount('#app');
