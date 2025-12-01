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
                    <li class="flex content-cemter"><RouterLink class="inter-subtitle-regular content-center" :to="{ name: 'inicio'}">Inicio</RouterLink></li>
                    <li class="flex content-cemter"><RouterLink class="inter-subtitle-regular content-center" :to="{ name: 'figuras'}">Figuras</RouterLink></li>
                    <li class="flex content-cemter"><RouterLink class="inter-subtitle-regular content-center" :to="{ name: 'ofertas'}">Ofertas</RouterLink></li>
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
                        <button  @click="open = true" ><i class="fa-solid fa-user fa-2xl leading-none cursor-pointer" style="color: #539ff0;" ></i></button>
                        <button><RouterLink class="fa-solid fa-cart-shopping fa-2xl leading-none cursor-pointer" style="color: #539ff0;" :to="{ name: 'carrito'}"></RouterLink></button>
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
                        <button  @click="open = true" ><i class="fa-solid fa-user fa-2xl leading-none cursor-pointer" style="color: #539ff0;"></i></button>
                        <button><i class="fa-solid fa-cart-shopping fa-2xl leading-none cursor-pointer" style="color: #539ff0;"></i></button>
                    </div>                    
                </div>            
            </div>
    </nav>
      <div>
    <div v-if="open" class="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div class="bg-[#141420] border border-gray-700 rounded-2xl shadow-2xl p-8 w-full max-w-md animate-fadeIn">
        <div class="text-center">
          <h2 class="inter-subtitle-semi-bold text-white text-xl">EL SANTUARIO</h2>
          <h3 class="mt-6 text-2xl font-bold tracking-tight text-white">Iniciar sesión</h3>
        </div>

        <form class="mt-10 space-y-6" @submit.prevent="login">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-200">Correo electrónico</label>
            <input
              v-model="email"
              id="email"
              type="email"
              required
              class="mt-2 block w-full rounded-md bg-white/5 px-3 py-2 text-white outline outline-white/10 placeholder-gray-500 focus:outline-indigo-500"
            />
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium text-gray-200">Contraseña</label>
              <a href="#" class="text-sm font-semibold text-indigo-400 hover:text-indigo-300">¿Olvidaste tu contraseña?</a>
            </div>
            <input
              v-model="password"
              id="password"
              type="password"
              required
              class="mt-2 block w-full rounded-md bg-white/5 px-3 py-2 text-white outline outline-white/10 placeholder-gray-500 focus:outline-indigo-500"
            />
          </div>

          <button type="submit" class="w-full flex justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400">
            Iniciar sesión
          </button>
        </form>

        <p class="mt-8 text-center text-sm text-gray-400">
          ¿No tienes cuenta?
          <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300"> Crea una cuenta</a>
        </p>

        <button
          @click="open = false"
          class="mt-6 w-full py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
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

    .inter-text-regular {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    font-style: normal;
    line-height: 100%;
    }

    .inter-text-semi-bold {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 16px;
    line-height: 100%;
    }
    @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
    }
    .animate-fadeIn {
    animation: fadeIn 0.2s ease-out;
}
</style>

<script setup>

import { ref } from "vue";
import { RouterLink } from "vue-router";
const isOpen = ref(false);
const open = ref(false);
const email = ref("");
const password = ref("");
</script>