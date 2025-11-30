import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import MainComponent from '../components/MainComponent.vue'

const routes = [
    { path: '/', component: MainComponent }, //enlace que se conecta con el routerview de App.vue
    { path: '/inicio', component: MainComponent, name: 'inicio' }, //enlace al componente MainComponent
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
