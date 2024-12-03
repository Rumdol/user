<template>
  <div>
    <!-- Header -->
    <header class="bg-white-800 text-black">
      <div class="container mx-auto flex items-center justify-between p-4">
        <!-- Logo -->
        <div class="logo flex items-center">
          <NuxtLink to="/">
            <img src="/images/rumdulLogo.png" alt="Logo" class="h-20 w-auto" />
          </NuxtLink>
        </div>

        <!-- Search Bar -->
        <div class="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search for products..."
            class="w-full px-4 py-2 rounded-md text-gray-700 outline focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Icons -->
        <div class="flex items-center space-x-4">
          <!-- Wishlist -->
          <NuxtLink to="/wishlist" class="hover:text-blue-400">
            <i class="fas fa-heart"></i> Wishlist
          </NuxtLink>
          <!-- Cart -->
          <NuxtLink to="/cart" class="hover:text-blue-400">
            <i class="fas fa-shopping-cart"></i> Cart
          </NuxtLink>
          <!-- Join Business -->
          <NuxtLink to="/joinbusiness" class="hover:text-blue-400">
            <i class="fas fa-briefcase"></i> Join Business 
          </NuxtLink>
          <p>|</p>
          <!-- Sign In -->
          <NuxtLink to="/signin" class="hover:text-blue-400">
            <i class="fas fa-user"></i> Sign In
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <main class="container mx-auto py-8">
      <slot />
    </main>
  </div>
</template>
