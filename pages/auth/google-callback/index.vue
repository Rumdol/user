<template>
  <div>
    <p>Logging in...</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useGoogleAuthStore } from '~/store/google.js'

const googleAuth = useGoogleAuthStore()
const route = useRoute();

const code = route.query.code;

if (code) {
  try {
    await googleAuth.handleGoogleCallback(code);
  } catch (error) {
    console.error('Google login failed:', error);
  }
} else {
  console.error('No authorization code found in callback URL.');
}
</script>
