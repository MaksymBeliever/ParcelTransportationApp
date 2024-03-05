import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import index from '@/plugins/router/index.js';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import uiComponents from '@/components/UI';
import store from '@/store';

const app = createApp(App);

uiComponents.forEach(component => {
    app.component(component.name, component)
})

loadFonts()

app
    .use(index)
    .use(vuetify)
    .use(store)
    .mount('#app')
