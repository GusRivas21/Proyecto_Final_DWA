import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import MainComponent from '../components/MainComponent.vue'
import figuresComponent from '../components/figuresComponent.vue'
import cartcomponent from '../components/cartcomponent.vue'
import ofertasComponent from '../components/ofertasComponent.vue'
const routes = [
    { path: '/', component: MainComponent }, //enlace que se conecta con el routerview de App.vue
    { path: '/inicio', component: MainComponent, name: 'inicio' }, //enlace al componente MainComponent
    { path: '/figuras', component: figuresComponent, name: 'figuras'}, //enlace para el componesnte de figura 
    { path: '/carrito', component: cartcomponent, name: 'carrito'}, //enlace de carrito
    { path: '/ofertas', component: ofertasComponent, name: 'ofertas'}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
