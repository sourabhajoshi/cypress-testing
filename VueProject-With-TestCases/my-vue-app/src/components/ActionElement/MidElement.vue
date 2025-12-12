<template>
  <div class="mid-actions">
    <h2>Mid-Level Actions</h2>

    <input
      class="email-input"
      placeholder="Enter email"
      v-model="email"
    />

    <select v-model="country" class="country-select">
      <option value="">Select country</option>
      <option value="India">India</option>
      <option value="USA">USA</option>
      <option value="Germany">Germany</option>
    </select>

    <label>
      <input
        type="checkbox"
        class="terms-checkbox"
        v-model="terms"
      />
      Accept Terms
    </label>

    <button class="save-btn" @click="saveForm">Save</button>

    <p class="output">{{ output }}</p>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const email = ref('');
const country = ref('');
const terms = ref(false);
const output = ref('');

const saveForm = () => {
  if (email.value && country.value && terms.value) {
    output.value = `Saved: ${email.value}, ${country.value}`;
  } else {
    output.value = 'Please fill all fields';
  }
};
</script>
