<template>
    <nav class="w-full text-white"style="background-color: #141420;">
        <div class="w-[80%] mx-auto flex flex-row justify-between gap-x-4 py-3 ">
            <h3 class="inter-subtitle-semi-bold  w-1/3 justify-between md:justify-start content-center text-center">EL SANTUARIO</h3>
            <div class="flex w-2/3 justify-end md:justify-around">
                <button @click="isOpen = !isOpen"  class="inline xl:hidden text-3xl justify-end cursor-pointer"     
                    aria-label="Abrir menú de navegación"
                    :aria-expanded="isOpen.toString()"
                    aria-controls="mobile-menu">
                    ☰
                </button>
                <ul class="hidden xl:flex flex-row gap-x-5 mx-5 justify-center content-center" role="navigation">
                    <li class="flex content-cemter"><a class="inter-subtitle-regular content-center" href="#">Inicio</a></li>
                    <li class="flex content-cemter"><RouterLink class="inter-subtitle-regular content-center" :to="{ name: 'figuras'}">Figuras</RouterLink></li>
                    <li class="flex content-cemter"><a class="inter-subtitle-regular content-center" href="#">Ofertas</a></li>
                </ul>
                <div class="hidden md:flex lg:justify-end flex-row gap-x-7">
                    <form aria-hidden="true" tabindex="0"
                    class="flex content-around flex-row bg-white w-3xs p-3 rounded-xl text-center justify-between text-black focus-visible:ring-2 focus-visible:ring-blue-500  " >
                        <input type="text" class="w-[80%] caret-black outline-none">
                        <button class="w-fit">
                            <i class="fa-solid fa-magnifying-glass fa-2xl leading-none cursor-pointer" style="color: #539ff0;"></i>
                        </button>
                    </form>

                    <div class="flex flex-row py-3 gap-x-5">
                        <button><i class="fa-solid fa-user fa-2xl leading-none cursor-pointer" style="color: #539ff0;"></i></button>
                        <button><i class="fa-solid fa-cart-shopping fa-2xl leading-none cursor-pointer" style="color: #539ff0;"></i></button>
                    </div>                    
                </div>
            </div>
        </div>
            <div v-if="isOpen" class="flex flex-col items-center gap-6 pb-4 ">
                <div class="h-px w-100 bg-gray-400"></div>
                <ul class="flex flex-col gap-5 justify-center text-center">
                    <li class="text-center"><a class="inter-subtitle-regular content-center" href="#">Inicio</a></li>
                    <li class="text-center"><a class="inter-subtitle-regular content-center" href="#">Figuras</a></li>
                    <li class="text-center"><a class="inter-subtitle-regular content-center" href="#">Ofertas</a></li>
                </ul>
                <div class="h-px w-100 bg-gray-400"></div>
                <div class="flex-col md:hidden">
                    <form tabindex="0"
                    class="flex content-around flex-row bg-white w-3xs p-3 rounded-xl text-center justify-between text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 mb-4">
                        <input type="text" class="w-[80%] caret-black outline-none">
                        <button class="w-fit">
                            <i class="fa-solid fa-magnifying-glass fa-2xl leading-none cursor-pointer" style="color: #539ff0;"></i>
                        </button>
                    </form>
                    <div class="flex flex-row py-3 gap-x-5 justify-center">
                        <button><i class="fa-solid fa-user fa-2xl leading-none cursor-pointer" style="color: #539ff0;"></i></button>
                        <button><i class="fa-solid fa-cart-shopping fa-2xl leading-none cursor-pointer" style="color: #539ff0;"></i></button>
                    </div>                    
                </div>            
            </div>
    </nav>
</template>

<style>

    .inter-subtitle-regular {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 24px;
    font-style: normal;
    line-height: 100%;
    }

    .inter-subtitle-semi-bold {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 24px;
    line-height: 100%;
    }
</style>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isOpen = ref(false);
</script>