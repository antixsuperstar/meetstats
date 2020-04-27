import { LayoutPlugin, BButton } from 'bootstrap-vue';
import Vue from 'vue';

import Main from './vue-templates/Main.vue';

Vue.use(LayoutPlugin);
Vue.use(BButton);
new Vue({
    el: '#app',
    render: h => h(Main)
});
