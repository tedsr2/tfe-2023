import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    routes : [
        {
            path : '', name : 'home', component : () => import('../views/Home.vue')
        },
        {
            path : '/hans-zimmer', name : 'hans', component : () => import('../views/Hans.vue')
        },
        {
            path : '/john-williams', name : 'john', component : () => import('../views/John.vue')
        }
    ],
    history : createWebHistory()
})

export default router