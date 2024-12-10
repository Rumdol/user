<template>
    <div class="container flex flex-col items-center justify-center gap-y-8">
      <Banner />
      <PromoItem />
    </div>
  
</template>

<script setup>
import PromoItem from '~/components/PromoItem.vue'

useSeoMeta({ title: 'Rumdul' })
definePageMeta({ layout: 'homepage' })
</script>
