<template>
    <div class="container flex flex-col items-center justify-center gap-y-8">
       <Banner />
       <Categories />
       <Promote />
       <MostSale />
    </div>
</template>

<script setup>
useSeoMeta({ title: 'Rumdul' })
definePageMeta({ layout: 'homepage' })
</script>
