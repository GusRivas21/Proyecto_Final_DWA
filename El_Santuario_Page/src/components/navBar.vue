<template>
    <nav class="w-full " style="background-color: #141420;">
        <div class="w-[80%] mx-auto flex flex-row justify-between gap-x-4 py-3 ">

            <div class="w-1/3 justify-between md:justify-start content-center text-center">
                <h3 class="inter-text-semi-bold text-white">EL SANTUARIO</h3>
            </div>


            <!-- <div class="hidden md:flex w-2/3 justify-around"> -->
            <div class="flex w-2/3 justify-end md:justify-around">
                <button @click="isOpen = !isOpen"  class="inline xl:hidden text-3xl text-white justify-end">
                    ☰
                </button>
                <div class="hidden xl:flex flex-row gap-x-5 mx-5 justify-center content-center ">
                    <a class="inter-text-light text-white content-center" href="#">Inicio</a>
                    <a class="inter-text-light text-white content-center" href="#">Figuras</a>
                    <a class="inter-text-light text-white content-center" href="#">Ofertas</a>
                </div>
                <div class="hidden md:flex lg:justify-end flex-row gap-x-7">
                    <div class="flex flex-row bg-white w-3xs h-auto p-5 rounded-xl text-center justify-end">
                        <i class="fa-solid fa-magnifying-glass fa-2xl leading-none p-0 m-0 content-center justify-end" style="color: #539ff0;"></i>
                    </div>
                    <div class="flex flex-row py-3 gap-x-5">
                        <div><i class="fa-solid fa-user fa-2xl leading-none" style="color: #539ff0;"></i></div>
                        <div><i class="fa-solid fa-cart-shopping fa-2xl leading-none" style="color: #539ff0;"></i></div>
                    </div>                    
                </div>
            </div>
        </div>
            <div v-if="isOpen" class="flex flex-col items-center gap-6 pb-4 ">
                <div class="h-px w-100 bg-gray-400"></div>
                <div class="flex flex-col gap-5 justify-center text-center">
                    <a class="inter-text-light text-white content-center" href="#">Inicio</a>
                    <a class="inter-text-light text-white content-center" href="#">Figuras</a>
                    <a class="inter-text-light text-white content-center" href="#">Ofertas</a>
                </div>
                <div class="h-px w-100 bg-gray-400"></div>
                <div class="flex-col md:hidden">
                    <div class="flex flex-row bg-white w-3xs h-auto p-5 mb-5 rounded-xl text-center justify-end">
                        <i class="fa-solid fa-magnifying-glass fa-2xl leading-none p-0 m-0 content-center justify-end" style="color: #539ff0;"></i>
                    </div>
                    <div class="flex flex-row py-3 gap-x-5 justify-center">
                        <div><i class="fa-solid fa-user fa-2xl leading-none" style="color: #539ff0;"></i></div>
                        <div><i class="fa-solid fa-cart-shopping fa-2xl leading-none" style="color: #539ff0;"></i></div>
                    </div>                    
                </div>            
            </div>
    </nav>
</template>

<style>

    .inter-text-light {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 24px;
    font-style: normal;
    line-height: 100%;
    }

    .inter-text-semi-bold {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 24px;
    line-height: 100%;
    }
</style>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
</script>