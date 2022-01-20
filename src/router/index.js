//import vue router
import {
    createRouter,
    createWebHistory
} from 'vue-router'

//import store vuex
import store from '@/store'

//define a routes
const routes = [{
        path: '/register',
        name: 'register',
        component: () => import( /* webpackChunkName: "register" */
            '@/views/auth/Register.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import( /* webpackChunkName: "login" */
            '@/views/auth/Login.vue')
    },
    {
        path: '/customer/dashboard',
        name: 'dashboard',
        component: () => import( /* webpackChunkName: "login" */
            '@/views/dashboard/Index.vue'),
        //chek is loggedIn
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/customer/order',
        name: 'order',
        component: () => import( /* webpackChunkName: "order" */
            '../views/order/Index.vue'),
        meta: {
            //chek is loggedIn
            requiresAuth: true
        }
    },
    {
        path: '/customer/order/:snap_token',
        name: 'detail_order',
        component: () => import( /* webpackChunkName: "detail_order" */
            '../views/order/Show.vue'),
        meta: {
            //chek is loggedIn
            requiresAuth: true
        }
    },
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "home" */
            '@/views/home/Index.vue')
    },
    {
        path: '/produk/:slug',
        name: 'detail_produk',
        component: () => import( /* webpackChunkName: "detail_product" */
            '../views/produk/Show.vue')
    },
    {
        path: '/kategoris',
        name: 'kategoris',
        component: () => import( /* webpackChunkName: "category" */
            '../views/kategori/Index.vue')
    },
    {
        path: '/kategori/:slug',
        name: 'detail_kategori',
        component: () => import( /* webpackChunkName: "detail_category" */
            '../views/kategori/Show.vue')
    },
    {
        path: '/keranjang',
        name: 'keranjang',
        component: () => import( /* webpackChunkName: "cart" */
            '../views/keranjang/Index.vue'),
        meta: {
            //chek is loggedIn
            requiresAuth: true
        }
    }
]
//create router
const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes
})
//define route for handle authentication
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {

        //cek nilai dari getters isLoggedIn di module auth
        if (store.getters['auth/isLoggedIn']) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})
export default router   