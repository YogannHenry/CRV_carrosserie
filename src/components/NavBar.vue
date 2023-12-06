<template>
    <div class="navbar text-white bg-black">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white border rounded-box w-52 ">
                    <RouterLink class="p-2 rounded-lg hover:text-black hover:bg-white" to="/">Accueil</RouterLink>

                    <RouterLink to="/realisations" class="p-2 rounded-lg hover:text-black hover:bg-white">Réalisations</RouterLink>
                    <RouterLink to="/contact" class="p-2 rounded-lg hover:text-black hover:bg-white">Contact</RouterLink>
                </ul>
            </div>
            <a class="btn btn-ghost text-xl text-lime-500 font-Cormorant_Garamond font-bold">CRV Carrosserie</a>
        </div>
        <div class="navbar-center hidden lg:flex text-white">
            <ul class="menu menu-horizontal px-1">
                <RouterLink class="p-2 text-red " to="/">Accueil</RouterLink>
                <RouterLink to="/realisations" class="p-2">Réalisations</RouterLink>
                <RouterLink to="/contact" class="p-2">Contact</RouterLink>
            </ul>
        </div>
        <div class="navbar-end">

        </div>
    </div>
</template>

