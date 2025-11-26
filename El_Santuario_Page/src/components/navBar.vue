<template>
    <nav class="w-full" style="background-color: #141420;">
        <div class="w-16 md:w-32 lg:w-48 mx-auto flex flex-row justify-center gap-x-4 py-3 ">

            <div class="w-1/3 justify-start content-center">
                <h3 class="inter-text-semi-bold text-white">EL SANTUARIO</h3>
            </div>

            <div class="flex flex-row w-2/3">
                <div class="flex flex-row gap-x-5 mx-32 justify-center content-center ">
                    <a class="inter-text-light text-white content-center" href="#">Inicio</a>
                    <a class="inter-text-light text-white content-center" href="#">Figuras</a>
                    <a class="inter-text-light text-white content-center" href="#">Ofertas</a>
                </div>
                <div class="flex flex-row gap-x-7">
                    <div class="flex flex-row bg-white w-3xs h-auto p-5 rounded-xl text-center justify-end">
                        <i class="fa-solid fa-magnifying-glass fa-2xl leading-none p-0 m-0 content-center" style="color: #539ff0;"></i>
                    </div>
                    <div class="flex flex-row py-3 gap-x-5">
                        <div><i class="fa-solid fa-user fa-2xl leading-none" style="color: #539ff0;"></i></div>
                        <div><i class="fa-solid fa-cart-shopping fa-2xl leading-none" style="color: #539ff0;"></i></div>
                    </div>                    
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