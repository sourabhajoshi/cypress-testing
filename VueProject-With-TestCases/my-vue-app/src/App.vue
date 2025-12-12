<template>
  <div class="layout">
    <!-- HEADER -->
    <header class="app-header">
      <img src="@/assets/logo.svg" class="logo"/>

      <nav class="nav">
        <RouterLink to="/navigation">Navigation</RouterLink>
        <RouterLink to="/locating">Locating Elements</RouterLink>
        <RouterLink to="/action">Actions</RouterLink>
        <RouterLink to="/assertions">Assertions</RouterLink>
        <RouterLink to="/waiting">Waiting</RouterLink>
      </nav>
    </header>

    <!-- CONTENT -->
    <main class="app-content">
      <RouterView/>
    </main>

    <!-- FOOTER -->
    <footer class="app-footer">
      © 2025 Cypress Training Portal
    </footer>

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

/* Logo */
.logo {
  width: 60px;
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
