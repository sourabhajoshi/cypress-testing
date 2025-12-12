<template>
  <div class="layout">

    <header class="app-header">
      <h2>Action Command</h2>
      <nav class="nav">
        <RouterLink to="/action/basic">Basic</RouterLink>
        <RouterLink to="/action/mid">MId</RouterLink>
        <RouterLink to="/action/advance">Advance</RouterLink>
      </nav>
    </header>

    <main class="app-content">
      <RouterView/>
    </main>

  </div>
</template>

<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<style>
/* Full width layout */
.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}

/* Header full width */
.app-header {
  width: 100%;
  background-color: #eef1ff;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 40px;
  box-sizing: border-box;
}

/* Navigation links */
.nav {
  display: flex;
  gap: 30px;
}

.nav a {
  font-weight: 600;
  text-decoration: none;
  color: #222;
}

/* Main content full width */
.app-content {
  flex: 1;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid black;
}

/* Footer full width */
.app-footer {
  width: 100%;
  background: #d4d4d4;
  padding: 16px;
  text-align: center;
  font-size: 14px;
  margin-top: auto;
}
</style>
