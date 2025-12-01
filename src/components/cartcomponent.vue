<script setup>
import { ref } from 'vue';
// Reference public assets with root-based paths
const imgAllMight = '/img/imgAllMight.png';
const imgIzuku = '/img/imgIzuku.png';
const imgShoto = '/img/imgshoto.png';
const imgLuffy = '/img/imgLuffy.png';


const productos = ref([
    {
        id: 1,
        nombre: 'IZUKU MIDORIYA',
        precio: 19.99,
        rating: 5.5,
        imagen: imgIzuku
    },
    {
        id: 2,
        nombre: 'Luffy Dressrosa',
        precio: 24.99,
        rating: 4.8,
        imagen: imgLuffy
    },
    {
        id: 3,
        nombre: 'SHOTO TODOROKI',
        precio: 21.50,
        rating: 5.0,
        imagen: imgShoto
    }

]);

</script>

<template>
    <div class="flex justify-center items-center flex-wrap gap-6  bg-gray-900 min-h-screen ">
        
        <div v-for="producto in productos"
            class="bg-gray-700 hover:bg-gray-600 p-4  rounded-xl shadow-2xl max-w-xs w-full flex flex-col items-center ">
            <div class="bg-white rounded-lg p-2 mb-3">
                <img :src="producto.imagen" :alt="'Figura de acción de ' + producto.nombre" class="w-full h-auto max-w-[200px] mx-auto" />
            </div>
            <div class="w-full flex justify-between items-start mb-4">
                <div class="text-left">
                    <h2 class="text-white text-2xl font-bold leading-tight">{{ producto.nombre }}</h2>
                </div>
                <div class="flex flex-col items-end">
                    <div class="flex items-center space-x-1 text-yellow-400 mb-1" role="img" :aria-label="'Calificación: ' + producto.rating + ' de 5 estrellas'">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                clip-rule="evenodd" />
                        </svg>

                        <span aria-hidden="true" class="text-xl font-bold text-white block" >{{ producto.rating }}</span>
                    </div>
                    <span class="text-xl font-bold text-white block" :aria-label="'Precio: ' + producto.precio + ' dólares'">${{ producto.precio }}</span>
                </div>
            </div>
        </div>
        <aside class="w-full lg:w-1/4 bg-gray-800 p-6 m-6 rounded-xl shadow-2xl border border-gray-700">
            <div class="w-full flex justify-between items-center mb-6 border-b border-gray-600 pb-4">
                <span class="text-xl font-bold text-gray-300" >Total a pagar:</span>
                <span class="text-2xl font-bold text-green-400" :aria-label="'66.48 dólares'">$66.48</span>
            </div>
            <div class="space-y-3">
                 <div class="flex justify-between text-gray-400 text-sm">
                    <span>Subtotal</span>
                    <span>$66.48</span>
                 </div>
                 <div class="flex justify-between text-gray-400 text-sm">
                    <span>Envío</span>
                    <span>Gratis</span>
                 </div>
            </div>
            <button 
                class="w-full mt-6 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-lg transition duration-200 shadow-lg text-lg uppercase tracking-wide">
                Continuar Compra
            </button>
        </aside>
    </div>
</template>

<style scoped>

</style>