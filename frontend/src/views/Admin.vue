<template>
    <main>
      <section class="title__page_sec">
        <div class="container">
          <h2>администратор</h2>
        </div>
      </section>
      <section class="admin__sec">
        <div class="container">
          <nav class="sider__nav admin__nav">
            <router-link to="/admin/main" :class="{ active: $route.path === '/admin/main' }">главная</router-link>
            <router-link to="/admin/category" :class="{ active: $route.path === '/admin/category' }">категории</router-link>
            <router-link to="/admin/product" :class="{ active: $route.path === '/admin/product' }">товары</router-link>
            <router-link to="/admin/orders" :class="{ active: $route.path === '/admin/orders' }">заказы</router-link>
          </nav>
          <router-view></router-view>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  export default {
    name: 'Admin'
  };
  </script>