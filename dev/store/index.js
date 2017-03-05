/**
 * Created by elad on 20 נובמבר 2016.
 */
import Vue from "vue/dist/vue";
import Vuex from "vuex";
import userModule from "./module/user.module";
Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        msg: "hello "
    },
    modules: {
        userModule
    }
});
window.ss = store;
export default store;

