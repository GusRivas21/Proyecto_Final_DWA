<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const slides = [
    {
        // figura + caja de fondo
        image: 'https://static.xtralife.com/conversions/XJC6-DD99401236-medium_w640_h480_q75-4897011185859-1655291361.webp',
        bg: ''
    },
    { image: './src/assets/img/Harry_funko.webp' },
    { image: './src/assets/img/Mitsuri_figura.webp' }
];

const currentSlide = ref(0);

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
    currentSlide.value =
        (currentSlide.value - 1 + slides.length) % slides.length;
};

// Carrusel automático (solo imágenes)
const autoSlides = [
    { image: '' },
    { image: '' },
    { image: '' },
    { image: 'https://static.xtralife.com/conversions/XJC6-DD99401236-medium_w640_h480_q75-4897011185859-1655291361.webp' }
];

const currentAutoSlide = ref(0);
let autoSlideInterval = null;

const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
        currentAutoSlide.value = (currentAutoSlide.value + 1) % autoSlides.length;
    }, 4000); // Cambia cada 4 segundos
};

const stopAutoSlide = () => {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
};

onMounted(() => {
    startAutoSlide();
});

onUnmounted(() => {
    stopAutoSlide();
});

// Comentarios para features
const features = [
    { title: 'Envío Express', text: 'Recibe tus figuras en 24-48h. Servicio prioritario para que tengas a tus personajes antes posible.' },
    { title: 'Garantía Oficial', text: 'Todos nuestros productos incluyen garantía oficial del fabricante.' },
    { title: 'Atención Personalizada', text: 'Soporte y asesoría para elegir la figura perfecta.' },
    { title: 'Envío Seguro', text: 'Embalaje reforzado para que tus figuras lleguen en perfecto estado.' },
    { title: 'Pago Seguro', text: 'Multiples métodos de pago con protección contra fraude.' },
    { title: 'Devoluciones', text: 'Cambio y devolución fácil dentro de los 14 días.' }
];
</script>

<template>
    <section class="w-full bg-[#0B0D1A] py-20 px-6 relative overflow-hidden">

        <div class="max-w-7xl mx-auto grid grid-cols-6 gap-8 items-center">

            <!-- Flecha Izquierda -->
            <button @click="prevSlide" aria-label="Anterior" class="arrow left-6">
                <span class="chev">‹</span>
            </button>

            <div class="col-span-6 md:col-span-3 relative z-20 max-w-2xl">

                <h1 class="text-[64px] md:text-7xl font-extrabold text-white leading-tight">
                    Descubre Figuras
                </h1>

                <!-- Texto grande con trazo y relleno transparente -->
                <h2 class="edition">Edición Limitada</h2>

                <p class="text-gray-300 max-w-lg text-lg leading-relaxed mt-4">
                    Lleva a casa a tus héroes de cómic en réplicas de máxima calidad.
                </p>

                <!-- Botones -->
                <div class="flex gap-4 pt-6">
                    <button class="cta">
                        Explorar <span class="ml-2">›</span>
                    </button>

                    <button class="cta">
                        Ofertas <span class="ml-2">🏷️</span>
                    </button>
                </div>
            </div>

            <div class="hero-image col-span-6 md:col-span-3 relative flex justify-center items-center">
                <!-- Fondo tenue -->
                <img v-if="slides[currentSlide].bg" :src="slides[currentSlide].bg" class="bg-box" alt="box"/>

                <!-- Figura principal -->
                <img :src="slides[currentSlide].image" class="figure" alt="figure"/>
            </div>

            <!-- Flecha Derecha -->
            <button @click="nextSlide" aria-label="Siguiente" class="arrow right-6">
                <span class="chev">›</span>
            </button>

        </div>

        <!-- Dots -->
        <div class="flex gap-3 absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
            <span v-for="(s, index) in slides" :key="index" @click="currentSlide = index" class="dot" :class="index === currentSlide ? 'active' : ''">
            </span>
        </div>

    </section>

    <!-- Carrusel -->
    <section class="w-full bg-[#0B0D1A] py-24 px-6 relative overflow-hidden">

        <div class="max-w-7xl mx-auto grid grid-cols-6 gap-12 items-center">

            <!-- Imagen izquierda con círculo azul -->
            <div class="auto-image-wrapper col-span-6 md:col-span-3 flex justify-center items-center relative">
                <!-- Círculo azul de fondo -->
                <div class="blue-circle"></div>
                <!-- Imagen que rota -->
                <img :src="autoSlides[currentAutoSlide].image" class="auto-figure" alt="featured"/>
            </div>

            <!-- Contenido derecha -->
            <div class="col-span-6 md:col-span-3">
                <h2 class="text-5xl font-extrabold text-white leading-tight mb-4">
                    Donde Los Personajes Favoritos<br>Cobran Vida
                </h2>

                <p class="text-gray-300 text-lg leading-relaxed mb-8">
                    Tu destino definitivo para figuras de colección de máxima calidad. Donde cada detalle importa y cada pieza cuenta una historia única.
                </p>

                <div class="space-y-4">
                        <div class="flex gap-4 items-center" v-for="(f, idx) in features" :key="idx">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500">
                                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </div>
                        <div>
                                <h3 class="text-blue-400 font-bold">{{ f.title }}</h3>
                                <p class="text-gray-400 text-sm">{{ f.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Texto grande con trazo rojo y relleno transparente */
.edition {
    font-size: 4.25rem;
    line-height: 1;
    font-weight: 800;
    color: transparent;
    -webkit-text-stroke: 2px #7f1416;
    mix-blend-mode: normal;
    margin-top: -8px;
}

/* Flechas cuadradas oscuras */
.arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(10,11,13,0.6);
    width: 54px;
    height: 54px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    z-index: 40;
}

.arrow.left-6 { left: 18px; }
.arrow.right-6 { right: 18px; }
.arrow:hover { background: rgba(10,11,13,0.8); }
.chev { font-size: 28px; }

.cta {
    border: 2px solid rgba(255,255,255,0.9);
    color: #fff;
    background: transparent;
    padding: 10px 20px;
    border-radius: 14px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
}
.cta:hover { background: rgba(255,255,255,0.95); color: #000; }

/* Hero image composition: mantener tamaño fijo para evitar saltos al cambiar imagen */
.hero-image {
    min-height: 520px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.hero-image .bg-box {
    position: absolute;
    right: 12%;
    top: 6%;
    width: 320px;
    opacity: 0.12;
    transform: translateZ(0);
}

.hero-image .figure {
    position: relative;
    height: 520px; /* altura fija para evitar cambios de layout */
    width: auto;
    max-width: 100%;
    z-index: 25;
    object-fit: contain;
    transform: translateY(6%);
    filter: drop-shadow(0 25px 40px rgba(0,0,0,0.6));
    transition: opacity 0.35s ease, transform 0.35s ease;
}

/* Dots */
.dot {
    width: 12px;
    height: 12px;
    border-radius: 9999px;
    background: #2d2d2d;
    display: inline-block;
    cursor: pointer; border:
    2px solid rgba(255,255,255,0.06);
}

.dot.active {
    background: #54a7ff;
    box-shadow: 0 0 0 6px rgba(84,167,255,0.08);
}

/* Carrusel Automático - Imagen con círculo */
.auto-image-wrapper {
    position: relative;
    min-height: 500px;
}

.blue-circle {
    position: absolute;
    width: 380px;
    height: 380px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, rgba(84, 167, 255, 0.25), rgba(84, 167, 255, 0.08));
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    border: 2px solid rgba(84, 167, 255, 0.15);
}

.auto-figure {
    position: relative;
    z-index: 10;
    max-height: 450px;
    object-fit: contain;
    transition: opacity 0.8s ease-in-out;
    filter: drop-shadow(0 20px 50px rgba(84, 167, 255, 0.2));
}

/* pequeños ajustes responsivos */
@media (max-width: 768px) {
    .edition { font-size: 2.2rem; }
    .hero-image { display: none; }
    .arrow { display: none; }
    .chev { font-size: 20px; }
    .auto-image-wrapper { display: none; }
    }

</style>
