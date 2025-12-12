<template>
  <div class="basic-actions">
    <h2>Basic Actions</h2>

    <input
      class="name-input"
      placeholder="Enter your name"
      v-model="name"
    />

    <button class="submit-btn" @click="submitName">
      Submit
    </button>

    <p class="result">{{ result }}</p>
  </div>
</template>

<script setup>
import {ref} from "vue";

const name = ref("");
const result = ref("");

const submitName = () => {
  result.value = `Hello, ${name.value}`;
};
</script>
