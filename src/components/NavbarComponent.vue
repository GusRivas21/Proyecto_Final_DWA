<script setup>

import { ref } from "vue";
import { RouterLink } from "vue-router";
const isOpen = ref(false);
const open = ref(false);
const email = ref("");
const password = ref("");

</script>

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
                <div class="hidden md:flex lg:justify-end flex-row gap-x-7 items-center">
                  <!-- Buscador (desktop) -->
                  <form role="search" @submit.prevent class="nav-form hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10">
                    <label for="nav-search" class="sr-only">Buscar productos</label>
                    <input id="nav-search" type="search" placeholder="Buscar figuras, ofertas..." class="nav-input" />
                    <button type="submit" aria-label="Buscar" class="nav-search-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#539ff0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                  </form>

                  <div class="flex flex-row py-3 gap-x-5 items-center">
                    <button aria-label="iniciar sesion" @click="open = true" class="icon-btn"><i class="fa-solid fa-user fa-2xl leading-none" style="color: #539ff0;"></i></button>
                    <RouterLink :to="{ name: 'carrito'}" class="icon-btn" aria-label="Ver carrito">
                      <i class="fa-solid fa-cart-shopping fa-2xl leading-none" style="color: #539ff0;"></i>
                    </RouterLink>
                  </div>
                </div>
            </div>
        </div>
            <div v-if="isOpen" class="flex flex-col items-center gap-6 pb-4 ">
                <div class="h-px w-100 bg-gray-400"></div>
                <ul class="flex flex-col gap-5 justify-center text-center">
                    <li class="text-center"><RouterLink class="inter-subtitle-regular content-center" :to="{ name: 'inicio'}">Inicio</RouterLink></li>
                    <li class="text-center"><RouterLink class="inter-subtitle-regular content-center" :to="{ name: 'figuras'}">Figuras</RouterLink></li>
                    <li class="text-center"><RouterLink class="inter-subtitle-regular content-center" :to="{ name: 'ofertas'}">Ofertas</RouterLink></li>
                </ul>
                <div class="h-px w-100 bg-gray-400"></div>
                <div class="flex-col md:hidden">
                  <!-- Buscador (mobile) -->
                  <form role="search" @submit.prevent class="nav-form-mobile flex items-center gap-2 bg-white/5 rounded-xl p-2 mb-4">
                    <label for="nav-search-mobile" class="sr-only">Buscar</label>
                    <input id="nav-search-mobile" type="search" placeholder="Buscar figuras..." class="nav-input-mobile" />
                    <button type="submit" aria-label="Buscar" class="nav-search-btn-mobile">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#539ff0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                  </form>
                  <div class="flex flex-row py-3 gap-x-5 justify-center">
                    <button @click="open = true" class="icon-btn"><i class="fa-solid fa-user fa-2xl leading-none" style="color: #539ff0;"></i></button>
                    <RouterLink :to="{ name: 'carrito'}" class="icon-btn" aria-label="Ver carrito">
                      <i class="fa-solid fa-cart-shopping fa-2xl leading-none" style="color: #539ff0;"></i>
                    </RouterLink>
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

    /* Navbar search + helpers */
    .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0; }
    .nav-form { border: 1px solid rgba(255,255,255,0.04); }
    .nav-input { background: transparent; border: none; outline: none; color: #fff; padding: 6px 8px; min-width: 180px; }
    .nav-search-btn { background: transparent; border: none; display: inline-flex; align-items: center; justify-content: center; padding: 4px; }
    .nav-form-mobile { width: 100%; }
    .nav-input-mobile { background: transparent; border: none; outline: none; color: #fff; padding: 6px 8px; width: 100%; }
    .nav-search-btn-mobile { background: transparent; border: none; display: inline-flex; align-items: center; justify-content: center; padding: 6px; }
    .icon-btn { background: transparent; border: none; padding: 4px; display: inline-flex; align-items: center; justify-content: center; }

    /* small responsive tweaks */
    @media (max-width: 640px) {
      .nav-input { min-width: 100px; }
    }
</style>
