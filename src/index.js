require('bootstrap.native/dist/bootstrap-native-v4');
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';

import Main from './vue-templates/Main.vue';

Vue.use(BootstrapVue);
new Vue({
    el: '#app',
    render: h => h(Main)
});