<template>
  <div class="basic-container">
    <h1 data-test="title">Locating Basic Elements</h1>

    <input
      type="text"
      placeholder="Enter name"
      id="nameInput"
      class="input-field"
    />

    <button id="submitBtn" class="btn-primary">Submit</button>
  </div>
</template>

<script>
export default {
  name: "BasicElement"
};
</script>

<style scoped>
.input-field {
  margin-bottom: 10px;
}
</style>
