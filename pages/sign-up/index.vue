<template>
  <div class="container mx-auto py-8 flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center">Sign Up</h1>
      <el-form :model="registerForm" :rules="rules" ref="registerFormRef" label-position="top">
        <el-form-item label="Full Name" prop="fullName">
          <el-input v-model="registerForm.fullName" placeholder="Enter your full name"></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input v-model="registerForm.email" type="email" placeholder="Enter your email"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="registerForm.password" type="password" placeholder="Enter your password" show-password></el-input>
        </el-form-item>
        <el-form-item label="Confirm Password" prop="confirmPassword">
          <el-input v-model="registerForm.confirmPassword" type="password" placeholder="Confirm your password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="w-full" @click="handleRegister">Sign Up</el-button>
        </el-form-item>
      </el-form>
      <div class="text-center my-4 text-gray-500">or</div>
      <el-button
        type="success"
        class="w-full flex justify-center items-center gap-2"
        @click="handleGoogleSignUp">
        <i class="fa fa-google"></i> Sign Up with Google
      </el-button>
      <p class="text-center text-sm mt-4">
        Already have an account?
        <a @click="navigateTo('/sign-in')" class="text-blue-500">Login</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';

useSeoMeta({ title: 'Rumdul | Sign Up' });
definePageMeta({ layout: 'sign-up' });

const registerForm = reactive({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const rules = {
  fullName: [
    { required: true, message: 'Full name is required', trigger: 'blur' },
  ],
  email: [
    { required: true, message: 'Email is required', trigger: 'blur' },
    { type: 'email', message: 'Please enter a valid email address', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Password is required', trigger: 'blur' },
    { min: 6, message: 'Password must be at least 6 characters', trigger: 'blur' },
  ],
  confirmPassword: [
    { required: true, message: 'Confirm password is required', trigger: 'blur' },
    { validator: (rule, value) => value === registerForm.password, message: 'Passwords do not match', trigger: 'blur' },
  ],
};

const registerFormRef = ref(null);

const handleRegister = () => {
  registerFormRef.value.validate((valid) => {
    if (valid) {
      ElMessage.success('Registration successful');
      // Add your registration logic here
    } else {
      ElMessage.error('Please fill in the form correctly');
    }
  });
};

const handleGoogleSignUp = () => {
  ElMessage.info('Redirecting to Google Sign-Up...');
  // Add your Google OAuth registration logic here
};
</script>

<style scoped>
/* Add any additional custom styling here */
</style>
