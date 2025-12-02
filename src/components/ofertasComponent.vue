<script setup>
import { ref, computed } from 'vue';
import Swal from 'sweetalert2';

// --- 1. IMÁGENES ---
const imgAllMight = '/img/imgAllMight.png';
const imgIzuku = '/img/imgIzuku.png';
const imgShoto = '/img/imgshoto.png';
const imgLuffy = '/img/imgLuffy.png';
const imgbatman = '/img/Batman_figure.webp';
const imgGeco = '/img/geto_funko.webp';
const imgGojo = '/img/Gojo_figura.jpg';
const imgHarry = '/img/Harry_funko.webp';
const imgMiku = '/img/imgMiku.jpg';
const imgIron = '/img/Iron_figura.webp';
const imgMitsuri = '/img/Mitsuri_figura.webp';
const imgSuperman = '/img/Superman.jpeg';
const imgspiderman = '/img/spiderman_funko.jpg';
const imgJohn2 = '/img/John_Wick_figura2.webp';
const imgJohn = '/img/John_Wick_figura.webp';

// --- 2. DATOS DE PRODUCTOS ---
const productos = ref([
    {id: 1, nombre: 'IZUKU MIDORIYA', precio: 19.99, rating: 5.5, imagen: imgIzuku, categoria: 'Anime', descuento: '20% off'},
    {id: 2, nombre: 'Luffy Dressrosa', precio: 24.99, rating: 4.8, imagen: imgLuffy, categoria: 'Anime', descuento: '80% off'},
    {id: 3, nombre: 'SHOTO TODOROKI', precio: 21.50, rating: 5.0, imagen: imgShoto, categoria: 'Anime', descuento: '10% off'},
    {id: 4, nombre: 'ALL MIGHT', precio: 29.99, rating: 5.0, imagen: imgAllMight, categoria: 'Anime', descuento: '90% off'},
    {id: 5, nombre: 'IZUKU MIDORIYA', precio: 19.99, rating: 5.5, imagen: imgIzuku, categoria: 'Anime', descuento: '70% off'},
    {id: 6, nombre: 'Luffy Dressrosa', precio: 24.99, rating: 4.8, imagen: imgLuffy, categoria: 'Anime', descuento: '40% off'},
    {id: 7, nombre: 'SHOTO TODOROKI', precio: 21.50, rating: 5.0, imagen: imgShoto, categoria: 'Anime', descuento: '50% off'},
    {id: 8, nombre: 'ALL MIGHT', precio: 29.99, rating: 5.0, imagen: imgAllMight, categoria: 'Anime', descuento: '30% off'},
    {id: 9, nombre: 'Geto Suguru', precio: 29.99, rating: 5.0, imagen: imgGeco, categoria: 'Anime', descuento: '70% off'},
    {id: 10, nombre: 'Gojo Satoru', precio: 29.99, rating: 5.0, imagen: imgGojo, categoria: 'Anime', descuento: '80% off'},
    {id: 11, nombre: 'Harry Potter', precio: 29.99, rating: 5.0, imagen: imgHarry, categoria: 'Pelicula', descuento: '70% off'},
    {id: 12, nombre: 'Miku Hatsune', precio: 29.99, rating: 5.0, imagen: imgMiku, categoria: 'Anime', descuento: '90% off'},
    {id: 13, nombre: 'Iron Man', precio: 29.99, rating: 5.0, imagen: imgIron, categoria: 'Pelicula', descuento: '30% off'},
    {id: 14, nombre: 'Batman', precio: 29.99, rating: 5.0, imagen: imgbatman, categoria: 'Comic', descuento: '70% off'},
    {id: 15, nombre: 'Mitsuri Kanroji', precio: 29.99, rating: 5.0, imagen: imgMitsuri, categoria: 'Anime', descuento: '20% off'},
    // {id: 16, nombre: 'Superman', precio: 29.99, rating: 5.0, imagen: imgSuperman, categoria: 'Comic', descuento: '20% off'},
    {id: 17, nombre: 'Spider-Man', precio: 29.99, rating: 5.0, imagen: imgspiderman, categoria: 'Comic', descuento: '20% off'},
    {id: 18, nombre: 'John Wick', precio: 29.99, rating: 5.0, imagen: imgJohn2, categoria: 'Pelicula', descuento: '20% off'},
    {id: 19, nombre: 'John Wick', precio: 29.99, rating: 5.0, imagen: imgJohn, categoria: 'Pelicula', descuento: '20% off'},
]);

// --- 3. LÓGICA DEL CARRITO ---
const agregarAlCarrito = (producto) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end", 
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: '#1f2937', 
        color: '#ffffff', 
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    Toast.fire({
        icon: "success",
        title: "¡Agregado!",
        text: `se añadió al carrito`,
        imageUrl: producto.imagen,
        imageWidth: 50, 
        imageHeight: 50,
        imageAlt: producto.nombre,
    });
}

// --- 4. VARIABLES DE ESTADO (DECLARADAS UNA SOLA VEZ) ---
const categoriaActual = ref('Anime');
const currentPage = ref(1);
const itemsPerPage = 8;

// --- 5. LÓGICA DE FILTRADO Y PAGINACIÓN ---
const filtrar = (categoria) => {
    categoriaActual.value = categoria;
    currentPage.value = 1; // Al cambiar de categoría, volvemos a la página 1
};

// Computed 1: Filtra la lista completa según la categoría seleccionada
const productosFiltrados = computed(() => {
    return productos.value.filter(p => p.categoria === categoriaActual.value);
});

// Computed 2: Calcula el total de páginas basándose en los productos filtrados
const totalPages = computed(() => Math.ceil(productosFiltrados.value.length / itemsPerPage));

// Computed 3: Corta la lista filtrada para mostrar solo 8 por página
const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return productosFiltrados.value.slice(start, end);
});

// Funciones de navegación (Flechas y números)
const nextPage = () => { if (currentPage.value < totalPages.value) currentPage.value++; };
const prevPage = () => { if (currentPage.value > 1) currentPage.value--; };
const goToPage = (page) => { currentPage.value = page; };
</script>

<template>

    <div class="flex justify-center items-center flex-wrap gap-6  bg-gray-900 min-h-screen ">
        <div class="w-full flex justify-center mt-10">
            <nav class="flex items-center gap-2">
                <button @click="filtrar('Anime')" :class="[
                    'px-4 py-2 text-sm font-bold rounded-lg border transition-colors',
                    categoriaActual === 'Anime'
                        ? 'text-white bg-indigo-600 border-indigo-500 hover:bg-indigo-500' 
                        : 'text-gray-300 bg-gray-700 border-gray-700 hover:bg-gray-600 hover:text-white' ]">
                    FIGURAS DE ANIME
                </button>
                <button @click="filtrar('Comic')" :class="[
                    'px-4 py-2 text-sm font-bold rounded-lg border transition-colors',
                    categoriaActual === 'Comic'
                        ? 'text-white bg-indigo-600 border-indigo-500 hover:bg-indigo-500'
                        : 'text-gray-300 bg-gray-700 border-gray-700 hover:bg-gray-600 hover:text-white']">
                    FIGURAS DE COMIC
                </button>
                <button @click="filtrar('Pelicula')" :class="[
                    'px-4 py-2 text-sm font-bold rounded-lg border transition-colors',
                    categoriaActual === 'Pelicula'
                        ? 'text-white bg-indigo-600 border-indigo-500 hover:bg-indigo-500'
                        : 'text-gray-300 bg-gray-700 border-gray-700 hover:bg-gray-600 hover:text-white']">
                    FIGURAS DE PELICULAS
                </button>
            </nav>
        </div>
        <div v-for="producto in paginatedProducts" :key="producto.id"
            class="bg-gray-700 hover:bg-gray-600 p-4  rounded-xl shadow-2xl max-w-xs w-full flex flex-col items-center relative overflow-hidden">
                <div class="absolute right-0 top-0 h-16 w-16">
                    <div
                        class="absolute transform rotate-45 bg-green-600 text-center text-white font-semibold py-1 right-[-35px] top-8 w-[170px]">
                        {{ producto.descuento }}
                    </div>
                </div>
            <div class="bg-white rounded-lg p-4 mb-4 flex justify-center items-center h-64">
                <img :src="producto.imagen" :alt="'Figura de acción de ' + producto.nombre" class="w-full h-auto max-w-[200px] mx-auto" />
            </div>
            <div class="w-full flex justify-between items-start mb-4 ">
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
            <button @click="agregarAlCarrito(producto)"
                :aria-label="`Agregar ${producto.nombre} al carrito`"
                class="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-lg transition duration-200 shadow-md">
                Agregar al carrito
            </button>
        </div>
        <div class="w-full flex justify-center my-10">
            <nav class="flex items-center gap-2">
                <button @click="prevPage" :disabled="currentPage === 1" :class="['flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg border transition-colors',
                    currentPage === 1
                        ? 'bg-gray-800 text-gray-500 border-gray-700 cursor-not-allowed'
                        : 'text-white bg-gray-700 border-gray-600 hover:bg-gray-600']">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd"
                            d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
                <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="['px-4 py-2 text-sm font-bold rounded-lg border transition-colors',
                    currentPage === page
                        ? 'text-white bg-indigo-600 border-indigo-500 hover:bg-indigo-500'  // Estilo Activo
                        : 'text-gray-300 bg-gray-700 border-gray-700 hover:bg-gray-600 hover:text-white' // Estilo Inactivo
                ]">
                    {{ page }}
                </button>
                <button @click="nextPage" :disabled="currentPage === totalPages" :class="['flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg border transition-colors',
                    currentPage === totalPages
                        ? 'bg-gray-800 text-gray-500 border-gray-700 cursor-not-allowed'
                        : 'text-white bg-gray-700 border-gray-700 hover:bg-gray-600']">
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
