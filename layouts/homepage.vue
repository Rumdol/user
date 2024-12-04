<template>
  <div>
    <!-- Header -->
    <header class="bg-white text-black">
      <div class="container mx-auto flex items-center justify-between p-4">
        <!-- Logo -->
        <div class="logo flex items-center">
          <NuxtLink to="/">
            <img src="/images/rumdulLogo.png" alt="Logo" class="h-20 w-auto" />
          </NuxtLink>
        </div>

        <!-- Navigation header -->
        <nav class="flex-1 mx-4">
          <ul class="flex items-center space-x-6">
            <!-- Search Bar -->
            <li class="flex-1">
              <input
                type="text"
                placeholder="Search for products..."
                class="search-bar w-full px-4 py-2 rounded-md text-gray-700 outline focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </li>
            <!-- Wishlist -->
            <li>
              <NuxtLink to="/wishlist" class="hover:text-blue-400 flex items-center">
                <el-icon class="wishlist-icon"><star /></el-icon>
                <span class="ml-2">Wishlist</span>
              </NuxtLink>
            </li>
            <!-- Cart -->
            <li>
              <NuxtLink to="/cart" class="hover:text-blue-400 flex items-center">
                <el-icon class="cart-icon"><ShoppingBag /></el-icon>
                <span class="ml-2">Cart</span>
              </NuxtLink>
            </li>
            <!-- Join Business -->
            <li>
              <NuxtLink to="/joinbusiness" class="hover:text-blue-400">
                <p class="business">Join Business</p>
              </NuxtLink>
            </li>
            <li>
              <p>|</p>
            </li>
            <!-- Sign In -->
            <li>
              <NuxtLink
                to="/signin"
                class="hover:text-blue-400 flex items-center">
                <el-icon size="30"><UserFilled /></el-icon>
                <span class="ml-2">Sign In</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <!-- menu bar -->
    <nav class="bg-gray-100">
      <div class="menu container mx-auto">
        <ul class="flex items-center space-x-16 p-4">
          <li>
            <NuxtLink to="/menu-bar/new-arrival" class="hover:text-blue-500">New Arrival</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/menu-bar/men" class="hover:text-blue-500">Men</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/menu-bar/women" class="hover:text-blue-500">Women</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/menu-bar/concentration" class="hover:text-blue-500">Concentration</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/menu-bar/fragrance-family" class="hover:text-blue-500">Fragrance Family</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/menu-bar/purpose-time" class="hover:text-blue-500">Purpose Time</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Page Content -->
    <main class="container mx-auto py-8">
      <slot />
    </main>
  </div>
</template>

<style scoped>
/* Icons */
.wishlist-icon,
.cart-icon {
  font-size: 1.6rem;
}

/* Search Bar */
.search-bar {
  border: 1px solid #e2e8f0; /* Optional border */
  transition: box-shadow 0.4s ease;
}

.search-bar:focus {
  box-shadow: 0 0 0 2px #3b82f6;
}

/* Navigation Links */
ul {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
}

li a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

li a:hover {
  color: #3b82f6;
}
.menu{
    display: flex;
    justify-content: center;
}

</style>
