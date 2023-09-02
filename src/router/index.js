import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import Index from '@/views/Index.vue'
import Typography from '@/views/Typography.vue'
import ButtonView from '@/views/ButtonView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
        },
        {
            path: '/button',
            name: 'ButtonView',
            component: ButtonView,
        },
        {
            path: '/typography',
            name: 'Typography',
            component: Typography,
        },
    ]
})

export default router;