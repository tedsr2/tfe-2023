import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', name: 'home', component: () => import('../views/Home.vue')
        },
        {
            path: '/hans-zimmer', name: 'hans', component: () => import('../views/Hans.vue')
        },
        {
            path: '/john-williams', name: 'john', component: () => import('../views/John.vue')
        },
        {
            path: '/michael-giacchino', name: 'michael', component: () => import('../views/Michael.vue')
        },
        {
            path: '/daniel-pemberton', name: 'daniel', component: () => import('../views/Daniel.vue')
        },
        {
            path: '/alexandre-desplat', name: 'alex', component: () => import('../views/Alex.vue')
        },
        {
            path: '/about', name: 'about', component: () => import('../views/About.vue')
        },
        {
            path: '/contact', name: 'contact', component: () => import('../views/Contact.vue')
        },
        {
            path: '/credits', name: 'credits', component: () => import('../views/Credits.vue')
        }
    ],
})

export default router

// /projets/tfe