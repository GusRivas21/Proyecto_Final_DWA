import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import MainComponent from '../components/MainComponent.vue'
import FiguresComponent from '../components/figuresComponent.vue'
import cartcomponent from '../components/cartcomponent.vue'
import OfertasComponent from '../components/ofertasComponent.vue'
const routes = [
    { path: '/', component: MainComponent }, //enlace a la vista principal
    { path: '/inicio', component: MainComponent, name: 'inicio' }, //enlace al componente MainComponent
    { path: '/figuras', component: FiguresComponent, name: 'figuras'}, //enlace para el componesnte de figura
    { path: '/carrito', component: cartcomponent, name: 'carrito'}, //enlace de carrito
    { path: '/ofertas', component: OfertasComponent, name: 'ofertas'} //enlace de ofertas
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
