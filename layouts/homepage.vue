<template>
  <div>
    <!-- Header -->
    <header >
      <HeaderMenu />
    </header>
    <!-- menu bar -->
    <el-affix :offset="100">
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
  </el-affix>
    <!-- Page Content -->
    <main class="container mx-auto py-8 ">
      <slot />
    </main>
  </div>
</template>

<style scoped>



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
