<template>
    <main>
      <section class="title__page_sec">
        <div class="container">
          <h2>личный кабинет</h2>
        </div>
      </section>
      <section class="profile__sec">
        <div class="container">
          <nav class="sider__nav profile__nav">
            <router-link to="/profile/orders" :class="{ active: $route.path === '/profile/orders' }">заказы</router-link>
            <router-link to="/profile/history" :class="{ active: $route.path === '/profile/history' }">покупки</router-link>
          </nav>
          <router-view></router-view>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  export default {
    name: 'Profile'
  };
  </script>