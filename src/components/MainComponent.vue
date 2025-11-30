<script setup>
import { ref } from 'vue';

const slides = [
    {
        // figura + caja de fondo
        image: 'https://static.xtralife.com/conversions/XJC6-DD99401236-medium_w640_h480_q75-4897011185859-1655291361.webp',
        bg: ''
    },
    { image: '' },
    { image: '' }
];

const currentSlide = ref(0);

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
    currentSlide.value =
        (currentSlide.value - 1 + slides.length) % slides.length;
};
</script>

<template>
    <section class="w-full bg-[#0B0D1A] py-20 px-6 relative overflow-hidden">

        <div class="max-w-7xl mx-auto flex items-center gap-8">

        <!-- Flecha Izquierda -->
        <button @click="prevSlide" aria-label="Anterior" class="arrow left-6">
            <span class="chev">‹</span>
        </button>

        <!-- Texto -->
        <div class="flex-1 max-w-2xl relative z-20">

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

        <div class="hero-image w-1/2 relative flex justify-center items-center">
            <!-- Fondo tenue (por si hay varias capas) -->
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

/* Hero image composition */
.hero-image { min-height: 360px; }
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
    max-height: 520px;
    z-index: 25;
    object-fit: contain;
    transform: translateY(6%);
    filter: drop-shadow(0 25px 40px rgba(0,0,0,0.6));
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

/* pequeños ajustes responsivos */
@media (max-width: 768px) {
    .edition { font-size: 2.2rem; }
    .hero-image { display: none; }
    .arrow { display: none; }
    .chev { font-size: 20px; }
    }

</style>
