import { LayoutPlugin, } from 'bootstrap-vue';
import Vue from 'vue';

const Main = () => import('./vue-templates/Main.vue');

Vue.use(LayoutPlugin);
new Vue({
    el: '#app',
    render: h => h(Main)
});
