<template>
  <div class="container-fluid home-content">
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <el-button @click="navigateTo('/dashboard')">Go to Dashboard</el-button>
  </div>
</template>

<script setup>
useSeoMeta({ title: 'ITE | Home' })
</script>

<style scoped>
</style>
