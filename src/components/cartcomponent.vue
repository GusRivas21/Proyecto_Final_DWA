<script setup>
import { ref, computed } from 'vue';
import Swal from 'sweetalert2';
// Reference public assets with root-based paths
const imgIzuku = '/img/imgIzuku.png';
const imgShoto = '/img/imgshoto.png';
const imgLuffy = '/img/imgLuffy.png';


const productos = ref([
    {
        id: 1,
        nombre: 'IZUKU MIDORIYA',
        precio: 19.99,
        rating: 5.5,
        imagen: imgIzuku,
        cantidad: 1
    },
    {
        id: 2,
        nombre: 'Luffy Dressrosa',
        precio: 24.99,
        rating: 4.8,
        imagen: imgLuffy,
        cantidad: 1
    },
    {
        id: 3,
        nombre: 'SHOTO TODOROKI',
        precio: 21.50,
        rating: 5.0,
        imagen: imgShoto,
        cantidad: 1

    }

]);

const totalGeneral = computed(() => {
    return productos.value.reduce((suma, producto) => {
        return suma + (producto.precio * producto.cantidad);
    }, 0);
});



const procederPago = (producto) => {

    Swal.fire({
        title: "¡Pago Exitoso!",      
        text: "Tu compra ha sido procesada correctamente.",
        icon: "success",             
        draggable: true,             
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#4f46e5", 
        background: '#1f2937',        
        color: '#ffffff',             
        allowOutsideClick: false      
    });
}

</script>

<template>
    <main class="bg-gray-900 min-h-screen p-6" role="main">
        <h1 class="text-3xl font-bold text-white mb-6" aria-label="Carrito de Compras">Carrito de Compras</h1>
        <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
            <section class="w-full lg:w-2/3 space-y-4" aria-label="Lista de productos en el carrito">
                <article v-for="producto in productos" :key="producto.id"
                    class="bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700 flex flex-col sm:flex-row items-center gap-6 focus-within:ring-2 focus-within:ring-indigo-500">
                    <div class="bg-white rounded-lg p-2 w-full sm:w-32 flex-shrink-0">
                        <img :src="producto.imagen" :alt="`Figura coleccionable de ${producto.nombre}`"
                            class="w-full h-auto object-contain" />
                    </div>
                    <div class="flex-1 w-full flex flex-col justify-between h-full">
                        <div>
                            <h2 class="text-white text-xl font-bold mb-1">
                                {{ producto.nombre }}
                            </h2>
                            <p class="text-gray-300 text-sm">Colección de My Hero Academy</p>
                        </div>
                        <div
                            aria-label="true"
                            class="mt-4 flex flex-col sm:flex-row justify-between items-end sm:items-center border-t border-gray-700 pt-4">
                            <div class="text-sm text-gray-300 mb-2 sm:mb-0">
                                <div class="flex items-center text-yellow-400 mb-1" role="img"
                                    :aria-label="`Calificación de los usuarios: ${producto.rating} de 5 estrellas`">

                                    <span aria-hidden="true" class="font-bold mr-1">{{ producto.rating }}</span>
                                    <svg aria-hidden="true" class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                </div>
                                <ul class="text-xs text-gray-400 list-none pl-0">
                                    <li>• Recoger en Tienda</li>
                                    <li>• Entrega por Delivery</li>
                                </ul>
                            </div>
                            <div class="flex items-center gap-4">
                                <div
                                    class="flex items-center border border-gray-600 rounded-lg px-2 py-1 text-gray-300 focus-within:border-indigo-500">
                                    <label :for="`cantidad-${producto.id}`" class="sr-only">
                                        Cantidad para {{ producto.nombre }}
                                    </label>
                                    <input :id="`cantidad-${producto.id}`" type="number"
                                        v-model.number="producto.cantidad" @change="validarCantidad(producto)" min="1"
                                        max="100"
                                        class="w-12 bg-transparent text-center text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded" />
                                </div>
                                <span class="text-2xl font-bold text-white"
                                    :aria-label="`Precio unitario: ${producto.precio} dólares`">
                                    ${{ producto.precio }}
                                </span>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <aside   class="w-full lg:w-1/3 h-fit bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700 top-6"
                role="complementary">
                <h2 class="sr-only">Detalles del pago</h2>
                <div class="flex justify-between items-center text-gray-300 text-sm mb-6 border-b border-gray-600 pb-4">
                    <div class="flex items-center gap-2">
                        <svg aria-hidden="true" class="w-5 h-5 text-green-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        <span>Recoger en Tienda</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg aria-hidden="true" class="w-5 h-5 text-green-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        <span>Delivery</span>
                    </div>
                </div>
                <div class="space-y-3 mb-6">
                    <div class="flex justify-between text-gray-300">
                        <span>Sub Total:</span>
                        <span>${{ totalGeneral.toFixed(2) }}</span>
                    </div>
                    <div class="flex justify-between text-gray-300">
                        <span>Costo de Entrega:</span>
                        <span aria-label="0 dólares, Gratis">$0.00</span>
                    </div>
                </div>
                <div aria-live="polite" aria-atomic="true" class="flex justify-between items-center border-t border-gray-600 pt-4 mb-6">
                    <span class="text-xl font-bold text-white">Total a pagar:</span>
                    <span class="text-2xl font-bold text-white" :aria-label="totalGeneral.toFixed(2) + ' dólares'">${{ totalGeneral.toFixed(2)}}</span>
                </div>
                <button
                    @click="procederPago()"
                    class="w-full bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-500 text-white font-medium py-3 rounded-lg transition shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/50">
                    Proceder al Pago
                </button>
            </aside>
        </div>
    </main>
</template>

<style scoped></style>