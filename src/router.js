import { createRouter, createWebHistory } from "vue-router";
import Homee from './views/Homee.vue'
import Login from './views/Login.vue'
import Registro from './views/Registro.vue'

import {useUseStore} from './stores/userStore.js'

const requireAuth  = async(to, from, next) => {
    const userStore = useUseStore();
    userStore.loadingSession = true ;
    const user = await userStore.currentUser();
    if(user){
        next(); 
    }else{
        next("/login")
    }
    userStore.loadingSession = false ;
}

const routes = [
    { path: "/", component: Homee, beforeEnter: requireAuth},
    { path: "/login", component: Login },
    { path: "/register", component: Registro },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
