import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import Index from '@/views/Index.vue'
import Typography from '@/views/Typography.vue'
import ButtonView from '@/views/ButtonView.vue'
import CheckboxView from '@/views/CheckboxView.vue'
import RadioButtonView from '@/views/RadioButtonView.vue'
import ProgressView from '@/views/ProgressView.vue'

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
        {
            path: '/checkbox',
            name: 'CheckboxView',
            component: CheckboxView,
        },
        {
            path: '/radiobutton',
            name: 'RadioButtonView',
            component: RadioButtonView,
        },
        {
            path: '/progress',
            name: 'ProgressView',
            component: ProgressView,
        },
    ]
})

export default router;