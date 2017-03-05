/**
 * Created by elad on 15 נובמבר 2016.
 */
import HomePage from './views/HomePage.vue'
import MainPage from './views/MainPage.vue'
import VueRouter from 'vue-router'
import RegisterView from './views/login/RegisterView.vue'
import store from "./store";
import usersModule from "./store/module/user.module";


const routes = [
    {path: '/', component: HomePage},
    {path: '/main', component: MainPage, name: 'main', meta: {RequiresAuth: true}},
    {path: '/register', component: RegisterView},
];
const router = new VueRouter({
    history: false,
    routes
});


router.beforeEach((to, from, next) => {


    if (to.matched.some(record => record.meta.RequiresAuth)) {
        store.dispatch(usersModule.types.GETCONNECT).then(() => {
            if (store.state.userModule.nowUser == null) {
                next({
                    path: '/',
                    query: {redirect: to.fullPath}
                })
            }
            else {

                next()
            }
        });

    } else {

        next()
    }
})

export default router
