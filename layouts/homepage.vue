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
          <MenuBar />
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
