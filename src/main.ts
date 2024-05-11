import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import "primeflex/primeflex.css";
import 'primevue/resources/themes/aura-light-green/theme.css';
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";

import Ripple from 'primevue/ripple';

import Menubar from 'primevue/menubar';
import Button from "primevue/button"
import Skeleton from 'primevue/skeleton';
import Tag from 'primevue/tag';
import Badge from 'primevue/badge';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
import Paginator from 'primevue/paginator';
import Breadcrumb from 'primevue/breadcrumb';
import Carousel from 'primevue/carousel';
import Galleria from 'primevue/galleria';
import Card from 'primevue/card';

const app = createApp(App);

app.directive('ripple', Ripple);

[
  Menubar,
  Button,
  Skeleton,
  Tag,
  Badge,
  InputText,
  Avatar,
  Paginator,
  Breadcrumb,
  Carousel,
  Galleria,
  Card,
].map((component) => app.component(component.name, component));

app.use(router).use(PrimeVue, { ripple: true  }).mount('#app')
