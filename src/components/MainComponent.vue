<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const slides = [
    {
        image: '/img/star_wars_figure.webp',
        bg: ''
    },
    { image: '/img/spiderman_funko.jpg' },
    { image: '/img/Batman_figure.webp'},
    { image: '/img/Iron_figura.webp' },
    { image: '/img/Harry_funko.webp' },
    { image: '/img/Mitsuri_figura.webp' }
];

const currentSlide = ref(0);
let slideInterval = null;

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
    currentSlide.value =
        (currentSlide.value - 1 + slides.length) % slides.length;
};

const startSlideAutoPlay = () => {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 5000); // Cambia cada 5 segundos
};

const stopSlideAutoPlay = () => {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
};

// Carrusel automático (solo imágenes)
const autoSlides = [
    { image: '/img/Superman.jpeg' },
    { image: '/img/geto_funko.webp'},
    { image: '/img/Gojo_figura.jpg' },
    { image: '/img/John_Wick_figura2.webp' },
    { image: '/img/coleccion_Marvel.png' },
    { image: '/img/my_hero_academy.webp' }
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
    startSlideAutoPlay();
    startAutoSlide();
});

onUnmounted(() => {
    stopSlideAutoPlay();
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

const cajas = [
    {
        id: 1,
        nombre: 'Caja Básica',
        precio: 24.99,
        destacado: false,
        items: [
            '3 figuras de 15 cm',
            'Envío rápido incluido',
            'Soporte por email'
        ]
    },
    {
        id: 2,
        nombre: 'Caja Premium',
        precio: 54.99,
        destacado: true,
        etiqueta: 'MÁS POPULAR',
        items: [
            '5 figuras de 20 cm',
            '2 figuras de 30 cm',
            'Envío express gratis',
            'Acceso VIP a lanzamientos',
            'Acceso a catálogo exclusivo'
        ]
    },
    {
        id: 3,
        nombre: 'Caja Coleccionista',
        precio: 37.99,
        destacado: false,
        items: [
            '5 figuras de 25 cm',
            'Figuras edición limitada',
            'Envío express internacional',
            'Seguro de envío incluido'
        ]
    }
];

// Testimonios
const testimonios = [
    {
        id: 1,
        nombre: 'Carlos M.',
        rol: 'Suscriptor Premium',
        rating: 5,
        texto: 'Recibir mi caja mensual se ha convertido en el momento más esperado del mes. La atención al detalle en cada figura es increíble y el empaque protege cada figura hasta la selección de personajes que siempre incluye piezas difíciles de encontrar en el mercado. ¡La figura de hoy de este mes es, sin duda, la pieza central de mi colección ahora.'
    },
    {
        id: 2,
        nombre: 'Carlos M.',
        rol: 'Suscriptor Premium',
        rating: 5,
        texto: 'Llevo 3 meses recibiendo la suscripción máxima y estoy muy satisfecho. El mes pasado recibí una figura firmada ¡No podía creerlo! Siempre que recibo mi caja mensual me sorprenden. Espero que siga siendo así para todas mis suscripciones.'
    },
    {
        id: 3,
        nombre: 'Carlos M.',
        rol: 'Suscriptor Premium',
        rating: 5,
        texto: 'Como coleccionista principiante, no podía estar más contento. Mi primera caja mensual fue solo luego bastante. El servicio de atención al cliente fue excelente en responder todas mis preguntas. Espero que siga siendo así para el resto de mis suscripciones.'
    },
    {
        id: 4,
        nombre: 'Carlos M.',
        rol: 'Suscriptor Premium',
        rating: 5,
        texto: 'Llevo 3 meses recibiendo la suscripción máxima y estoy muy satisfecho. El mes pasado recibí una figura firmada ¡No podía creerlo! Siempre que recibo mi caja mensual me sorprenden. Espero que siga siendo así para todas mis suscripciones.'
    },
    {
        id: 5,
        nombre: 'Carlos M.',
        rol: 'Suscriptor Premium',
        rating: 5,
        texto: 'Recibir mi caja mensual se ha convertido en el momento más esperado del mes. La atención al detalle en cada figura es increíble y el empaque protege cada figura hasta la selección de personajes que siempre incluye piezas difíciles de encontrar en el mercado. ¡La figura de hoy de este mes es, sin duda, la pieza central de mi colección ahora.'
    },
    {
        id: 6,
        nombre: 'Carlos M.',
        rol: 'Suscriptor Premium',
        rating: 5,
        texto: 'Llevo 3 meses recibiendo la suscripción máxima y estoy muy satisfecho. El mes pasado recibí una figura firmada ¡No podía creerlo! Siempre que recibo mi caja mensual me sorprenden. Espero que siga siendo así para todas mis suscripciones.'
    }
];

// FAQ
const faqsData = [
    {
        id: 1,
        pregunta: '¿Cómo funcionan las suscripciones mensuales?',
        respuesta: 'Cada mes recibes una caja sorpresa con figuras según tu plan. Puedes pausar o cancelar en cualquier momento desde tu cuenta.'
    },
    {
        id: 2,
        pregunta: '¿Cómo funcionan las suscripciones mensuales?',
        respuesta: 'Cada mes recibes una caja sorpresa con figuras según tu plan. Puedes pausar o cancelar en cualquier momento desde tu cuenta.'
    },
    {
        id: 3,
        pregunta: '¿Cómo funcionan las suscripciones mensuales?',
        respuesta: 'Cada mes recibes una caja sorpresa con figuras según tu plan. Puedes pausar o cancelar en cualquier momento desde tu cuenta.'
    },
    {
        id: 4,
        pregunta: '¿Cómo funcionan las suscripciones mensuales?',
        respuesta: 'Cada mes recibes una caja sorpresa con figuras según tu plan. Puedes pausar o cancelar en cualquier momento desde tu cuenta.'
    }
];

const faqs = ref(faqsData.map(faq => ({ ...faq, abierto: false })));

</script>

<template>
    <section class="w-full bg-[#0B0D1A] py-20 px-6 relative overflow-hidden">

        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8 items-center">

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

                    <RouterLink to="/ofertas" class="cta">
                        Ofertas <span class="ml-2">🏷️</span>
                    </RouterLink>
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
    <section class="w-full bg-[#0B0D1A] py-20 px-6 relative overflow-hidden">

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
                        <div class="shrink-0">
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

    <section class="w-full bg-[#0B0D1A] py-24 px-6 relative overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <p class="text-gray-400 text-sm uppercase tracking-widest mb-2">Cajas de Figuras</p>
                <h2 class="text-5xl md:text-6xl font-extrabold text-white mb-2">
                    Elige Tu Caja Sorpresa
                </h2>
                <h3 class="text-4xl md:text-5xl font-extrabold text-white">
                    de Colección
                </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div v-for="caja in cajas" :key="caja.id" :class="['caja-card', { 'caja-destacado': caja.destacado }]">
                    <div v-if="caja.destacado" class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        {{ caja.etiqueta }}
                    </div>

                    <div class="flex flex-col h-full">
                        <div class="mb-6">
                            <p class="text-blue-400 font-semibold text-sm mb-2">{{ caja.nombre }}</p>
                            <div class="flex items-baseline gap-1">
                                <span class="text-5xl font-extrabold text-white">${{ caja.precio }}</span>
                                <span class="text-gray-400 text-lg"> Dolares</span>
                            </div>
                            <p class="text-gray-400 text-sm mt-3">Te Ofrecemos</p>
                            <div class="border-t border-gray-600 mt-4 pt-4"></div>
                        </div>

                        <ul class="space-y-3 mb-8 grow">
                            <li v-for="(item, idx) in caja.items" :key="idx" class="flex items-start gap-3">
                                <svg class="h-5 w-5 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-300 text-sm">{{ item }}</span>
                            </li>
                        </ul>

                        <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2">
                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                            </svg>
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sección Testimonios -->
    <section class="w-full bg-[#0B0D1A] py-24 px-6 relative overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <p class="text-gray-400 text-sm uppercase tracking-widest mb-2">Testimonios</p>
                <h2 class="text-5xl md:text-6xl font-extrabold text-white">
                    Lo Que Dicen Nuestros<br>Coleccionistas
                </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="testimonial in testimonios" :key="testimonial.id" class="testimonial-card">
                    <div class="flex gap-1 mb-4">
                        <span v-for="i in 5" :key="i" :class="['text-xl', i <= testimonial.rating ? 'text-yellow-400' : 'text-gray-600']">★</span>
                    </div>

                    <p class="text-gray-300 text-sm mb-6 line-clamp-3">
                        {{ testimonial.texto }}
                    </p>

                    <!-- Avatar y nombre -->
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                            <span class="text-white font-bold text-sm">{{ testimonial.nombre.charAt(0) }}</span>
                        </div>
                        <div>
                            <p class="text-white font-semibold text-sm">{{ testimonial.nombre }}</p>
                            <p class="text-gray-400 text-xs">{{ testimonial.rol }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="w-full bg-[#0B0D1A] py-24 px-6 relative overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div>
                    <p class="text-gray-400 text-sm uppercase tracking-widest mb-2">FAQ</p>
                    <h2 class="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                        Preguntas Frecuentes:<br>Todo lo que Necesitas<br>Saber
                    </h2>
                    <p class="text-gray-400 text-lg mt-6">
                        Te ayudamos con estas dudas que todos tenemos al empezar. Aquí encuentras las respuestas que buscan sobre la experiencia de colección
                    </p>
                    <button class="mt-8 bg-transparent border border-blue-500 text-blue-400 px-6 py-2 rounded-lg hover:bg-blue-500/10 transition flex items-center gap-2">
                        <span>Contáctanos</span>
                        <span>🚀</span>
                    </button>
                </div>

                <!-- Preguntas expandibles -->
                <div class="space-y-4">
                    <div v-for="faq in faqs" :key="faq.id" class="faq-item">
                        <button role="combobox"
                            @click="faq.abierto = !faq.abierto"
                            @keydown.enter.prevent="faq.abierto = !faq.abierto"
                            class="w-full flex items-center justify-between p-4 bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700 rounded-lg transition"
                        >
                            <p class="text-white font-semibold text-left">{{ faq.pregunta }}</p>
                            <span :class="['text-2xl transition', faq.abierto ? 'text-blue-400 rotate-45' : 'text-gray-400']">+</span>
                        </button>
                        <div v-if="faq.abierto" 
                                    :id="`faq-panel-${index}`"
                                    role="region"
                                    :aria-labelledby="`faq-btn-${index}`"
                                    class="p-4 bg-gray-800/10 border-l-2 border-blue-500 mt-1 rounded">
                                    
                            <p class="text-gray-300 text-sm">{{ faq.respuesta }}</p>
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

.hero-image {
    min-height: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
}

    .hero-image .bg-box {
        position: absolute;
        right: 6%;
        top: 6%;
        width: 260px;
        opacity: 0.12;
        transform: translateZ(0);
        pointer-events: none; /* evitar bloquear clicks en móviles */
    }

.hero-image .figure {
    position: relative;
    max-height: 520px;
    height: auto;
    width: auto;
    max-width: 100%;
    z-index: 5; /* bajar por debajo del contenido textual (z-20) para que botones sean clicables */
    object-fit: contain;
    transform: translateY(4%);
    filter: drop-shadow(0 18px 30px rgba(0,0,0,0.55));
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

/* Tarjetas de Cajas */
.caja-card {
    border: 2px solid rgba(59, 130, 246, 0.3);
    border-radius: 12px;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(30, 58, 138, 0.2), rgba(15, 23, 42, 0.4));
    position: relative;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
}

.caja-card:hover {
    border-color: rgba(59, 130, 246, 0.8);
    background: linear-gradient(135deg, rgba(30, 58, 138, 0.5), rgba(15, 23, 42, 0.8));
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
        0 20px 40px rgba(59, 130, 246, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        0 0 30px rgba(84, 167, 255, 0.15);
}

.caja-destacada {
    border-color: rgba(59, 130, 246, 0.8);
    background: linear-gradient(135deg, rgba(30, 58, 138, 0.4), rgba(15, 23, 42, 0.6));
    position: relative;
    box-shadow: 0 0 20px rgba(84, 167, 255, 0.1);
}

.caja-destacada:hover {
    box-shadow: 
        0 25px 50px rgba(59, 130, 246, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.15),
        0 0 40px rgba(84, 167, 255, 0.25);
}

/* Tarjetas de Testimonios */
.testimonial-card {
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 12px;
    padding: 1.5rem;
    background: linear-gradient(135deg, rgba(30, 58, 138, 0.15), rgba(15, 23, 42, 0.3));
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
}

.testimonial-card:hover {
    border-color: rgba(59, 130, 246, 0.4);
    background: linear-gradient(135deg, rgba(30, 58, 138, 0.25), rgba(15, 23, 42, 0.4));
    transform: translateY(-4px);
}

/* FAQ Items */
.faq-item button span:last-child {
    transition: transform 0.3s ease;
}

/* pequeños ajustes responsivos */
@media (max-width: 768px) {
    .edition { font-size: 2rem; }
    .hero-image { min-height: 260px; }
    .hero-image .figure { max-height: 220px; }
    .arrow { display: none; }
    .chev { font-size: 20px; }
    .auto-image-wrapper { display: none; }
    .caja-card { padding: 1rem; }
}

</style>
