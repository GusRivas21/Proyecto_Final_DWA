<script setup>
import { ref } from 'vue';
// Assets in `public/` are served from the root; reference them with absolute paths
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
    },
    {
        id: 4,
        nombre: 'ALL MIGHT',
        precio: 29.99,
        rating: 5.0,
        imagen: imgAllMight
    },
    {
        id: 5,
        nombre: 'IZUKU MIDORIYA',
        precio: 19.99,
        rating: 5.5,
        imagen: imgIzuku
    },
    {
        id: 6,
        nombre: 'Luffy Dressrosa',
        precio: 24.99,
        rating: 4.8,
        imagen: imgLuffy
    },
    {
        id: 7,
        nombre: 'SHOTO TODOROKI',
        precio: 21.50,
        rating: 5.0,
        imagen: imgShoto
    },
    {
        id: 8,
        nombre: 'ALL MIGHT',
        precio: 29.99,
        rating: 5.0,
        imagen: imgAllMight
    },

]);

const agregarAlCarrito = (nombre) => {
    alert(`¡${nombre} agregado al carrito!`);
}

</script>

<template>
    <div class="flex justify-center items-center flex-wrap gap-6  bg-gray-900 min-h-screen ">
        <div class="w-full flex justify-center mt-10">
            <nav class="flex items-center gap-2">
                <button
                    class="px-4 py-2 text-sm font-bold text-white bg-indigo-600 rounded-lg border border-indigo-500 hover:bg-indigo-500 transition-colors">
                    FIGURAS DE ANIME
                </button>
                <button
                    class="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 rounded-lg border border-gray-700 hover:bg-gray-600 hover:text-white transition-colors">
                    FIGURAS DE COMIC
                </button>
                <button
                    class="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 rounded-lg border border-gray-700 hover:bg-gray-600 hover:text-white transition-colors">
                    FIGURAS DE PELICULAS
                </button>
            </nav>
        </div>
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
            <button @click="agregarAlCarrito(producto.nombre)"
                :aria-label="`Agregar ${producto.nombre} al carrito`"
                class="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-lg transition duration-200 shadow-md">
                Agregar al carrito
            </button>
        </div>
        <div class="w-full flex justify-center mt-10">
            <nav class="flex items-center gap-2">
                <button
                    class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd"
                            d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
                <button
                    class="px-4 py-2 text-sm font-bold text-white bg-indigo-600 rounded-lg border border-indigo-500 hover:bg-indigo-500 transition-colors">
                    1
                </button>
                <button
                    class="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 rounded-lg border border-gray-700 hover:bg-gray-600 hover:text-white transition-colors">
                    2
                </button>
                <button
                    class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg border border-gray-700 hover:bg-gray-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd"
                            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </nav>
        </div>
    </div>
</template>

<style scoped></style>
