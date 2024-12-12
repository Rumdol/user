<template>
  <div>
    <!-- Header -->
    <el-affix :offset="0">
      <header class="bg-white text-black">
        <div class="container mx-auto flex items-center justify-between p-4">
          <!-- Logo -->
          <div class="logo flex items-center">
            <NuxtLink to="/">
              <img
                src="/images/rumdulLogo.png"
                alt="Logo"
                class="h-20 w-auto"
              />
            </NuxtLink>
          </div>

          <!-- Navigation header -->
          <nav class="flex-1 mx-4">
            <ul class="flex items-center space-x-6">
              <!-- Search Bar -->
              <li class="flex-1 relative">
                <!-- Input field for the search bar -->
                <input
                  type="text"
                  placeholder="Search for products..."
                  class="search-bar w-full px-4 py-2 rounded-full text-gray-700 outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                />
                <!-- Element Plus search icon inside the input field -->
                <el-icon
                  class="Search-el-cion absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <Search />
                </el-icon>
              </li>
              <!-- Wishlist -->
              <li>
                <NuxtLink
                  to="/wishlist"
                  class="hover:text-blue-400 flex items-center"
                >
                  <i class="bx bx-heart text-2xl cursor-pointer"></i>
                  <span class="ml-2">Wishlist</span>
                </NuxtLink>
              </li>
              <!-- Cart -->
              <li>
                <NuxtLink
                  to="/cart"
                  class="hover:text-blue-400 flex items-center"
                >
                  <el-icon class="cart-icon">
                    <ShoppingBag />
                  </el-icon>
                  <span class="ml-2">Cart</span>
                </NuxtLink>
              </li>
              <!-- Join Business -->
              <li>
                <NuxtLink to="/join-business" class="hover:text-blue-400">
                  <p class="business">Join Business</p>
                </NuxtLink>
              </li>
              <li>
                <p>|</p>
              </li>
              <!-- Sign In -->
              <li v-if="isLogin">
                <p>Account</p>
              </li>
              <li v-else>
                <NuxtLink
                  to="/sign-in"
                  class="hover:text-blue-400 flex items-center"
                >
                  <el-icon size="30">
                    <UserFilled />
                  </el-icon>
                  <span class="ml-2">Sign In</span>
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </el-affix>
  </div>
</template>

<script setup>
defineProps({
  isLogin: Boolean,
});
</script>

<style scoped>
/* Icons */
.wishlist-icon,
.cart-icon {
  font-size: 1.6rem;
}

/* Search Bar */
.search-bar {
  position: relative;
  border: 1px solid #e2e8f0;
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

.Search-el-cion {
  position: absolute;
  left: 0.75rem; /* Adjust as per your preference */
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem; /* Adjust size if necessary */
  color: #6b7280; /* Light gray color for the icon */
}
</style>
