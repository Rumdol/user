<template>
  <div
    class="container mx-auto py-8 flex justify-center items-center min-h-screen bg-gray-100"
  >
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>

      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginFormRef"
        label-position="top"
        @submit.prevent="handleLogin"
      >
        <el-form-item label="Email" prop="email">
          <el-input
            v-model="loginForm.email"
            type="email"
            placeholder="Enter your email"
          ></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="Enter your password"
            show-password
          ></el-input>
        </el-form-item>
        <div class="flex justify-between items-center mb-4">
          <el-checkbox v-model="loginForm.rememberMe">Remember Me</el-checkbox>
          <a href="#" class="text-blue-500 text-sm">Forgot Password?</a>
        </div>
        <el-form-item>
          <el-button type="primary" class="w-full" @click="handleLogin"
            >Login
          </el-button>
        </el-form-item>
      </el-form>

      <div class="text-center my-4 text-gray-500">or</div>
      <el-button
        type="success"
        class="w-full flex justify-center items-center gap-2"
        @click="handleGoogleLogin"
      >
        <i class="fa fa-google"></i> Login with Google
      </el-button>

      <p class="text-center text-sm mt-4">
        Don’t have an account?
        <a @click="navigateTo('/sign-up')" class="text-blue-500">Sign Up</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useAuthStore } from '~/store/auth.js'

useSeoMeta({ title: 'Rumdul | Sign In' })
definePageMeta({
  layout: 'auth',
  middleware: ['redirect-if-authenticated'],
})

const authStore = useAuthStore()

const loginForm = reactive({
  email: '',
  password: '',
  rememberMe: false,
})

const rules = {
  email: [
    { required: true, message: 'Email is required', trigger: 'blur' },
    {
      type: 'email',
      message: 'Please enter a valid email address',
      trigger: 'blur',
    },
  ],
  password: [
    { required: true, message: 'Password is required', trigger: 'blur' },
    {
      min: 6,
      message: 'Password must be at least 6 characters',
      trigger: 'blur',
    },
  ],
}

const loginFormRef = ref(null)

const handleLogin = async () => {
  loginFormRef.value.validate(async (valid) => {
    if (valid) {
      await authStore.login({
        email: loginForm.email,
        password: loginForm.password,
      })
      navigateTo('/')
      ElMessage.success('Login successful')
    } else {
      ElMessage.error('Please fill in the form correctly')
    }
  })
}

const handleGoogleLogin = () => {
  ElMessage.info('Redirecting to Google login...')
}
</script>
