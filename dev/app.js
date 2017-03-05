require('bootstrap');
require('flickity');
// require('rtlcss');
// var result = rtlcss.process("body { direction:ltr; }");
var rtlcss = require('rtlcss');
var result = rtlcss.process("body { direction:ltr; }");


var VueMaterial = require('vue-material')

Vue.use(VueMaterial)
import Vue from "vue/dist/vue";
import router from './router';
import {sync} from 'vuex-router-sync';
import VueRouter from 'vue-router';
import store from "./store";
import UpNav from "./views/upNav/UpNav.vue";
import ModalVue from "./components/ModalVue.vue";
import EditLable from "./components/Editlable.vue";
import VuePaginate from 'vue-paginate'


// import "../node_modules/font-awesome"
import jquery from "jquery"
Vue.component("modal-vue", ModalVue);
Vue.component("editable-label", EditLable);

sync(store, router);

Vue.use(VueRouter);
Vue.use(VuePaginate);
const app = new Vue({
    store,
    router,

    components: {
        "up-nav": UpNav
    },
    created(){


    }
}).$mount('#app');