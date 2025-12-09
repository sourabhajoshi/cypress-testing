<template>
  <div class="login-page">
    <h1 data-cy="title">Login Page</h1>

    <input
      v-model="email"
      data-cy="email"
      placeholder="Enter email"
      class="input-field"
    />

    <input
      v-model="password"
      type="password"
      data-cy="password"
      placeholder="Enter password"
      class="input-field"
    />

    <button data-cy="submit" @click="handleLogin">
      Login
    </button>

    <p v-if="message" data-cy="message">{{ message }}</p>
  </div>
</template>

<script setup>
import {ref} from "vue";

const email = ref("");
const password = ref("");
const message = ref("");

const handleLogin = () => {
  if (email.value === "joshi@gmail.com" && password.value === "1234") {
    message.value = "Login successful!";
  } else {
    message.value = "Invalid credentials!";
  }
};
</script>

<style scoped>
.input-field {
  display: block;
  margin-bottom: 10px;
}
</style>
