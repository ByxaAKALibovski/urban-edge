<template>
    <header>
      <div class="container">
        <router-link to="/" class="logo"><h1>urban edge</h1></router-link>
        <nav class="header__nav">
          <router-link to="/contact">контакты</router-link>
          <router-link to="/catalog">каталог</router-link>
          <router-link to="/delivery-payment">доставка и оплата</router-link>
        </nav>
        <div class="widget__block">
          <router-link to="/profile" class="personal">
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.44 6.59C20.44 9.57 18.02 11.98 15.05 11.98C12.07 11.98 9.66 9.57 9.66 6.59C9.66 3.62 12.07 1.2 15.05 1.2C18.02 1.2 20.44 3.62 20.44 6.59Z" fill="#000000"/>
              <path d="M25.37 28.36L25.37 22.6C25.37 18.12 21.54 14.5 16.82 14.5L13.38 14.5C8.66 14.5 4.83 18.12 4.83 22.6L4.83 28.36L25.37 28.36Z" fill="#000000"/>
            </svg>
          </router-link>
          <router-link to="/favorites" class="favorit">
            <svg width="26.67" height="23.19" viewBox="0 0 26.6666 23.1875" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0C20 0 15 0 13.33 5.35C11.66 0 6.66 0 6.66 0C3 0 0 3.21 0 7.13C0 14.44 13.33 23.18 13.33 23.18C13.33 23.18 26.66 14.26 26.66 7.13C26.66 3.21 23.66 0 20 0Z" fill="#000000"/>
            </svg>
            <span v-if="favoritesCount > 0">{{ favoritesCount }}</span>
          </router-link>
          <router-link to="/basket" class="basket">
            <svg width="26.67" height="25" viewBox="0 0 26.6666 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.33 20.16L23.33 18.33L7.66 18.33L8.66 16.5L24 15L26.66 5L6.16 5L5 0L0 0L0 1.66L3.66 1.66L7.16 15.66L5 20L5 22.5C5 23.83 6.16 25 7.5 25C8.83 25 10 23.83 10 22.5C10 21.16 8.83 20 7.5 20L20 20L20 22.5C20 23.83 21.16 25 22.5 25C23.83 25 25 23.83 25 22.5C25 21.33 24.33 20.5 23.33 20.16Z" fill="#000000"/>
            </svg>
            <span v-if="basketCount > 0">{{ basketCount }}</span>
          </router-link>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    computed: {
      basketCount() {
        return this.$store.getters.basketCount;
      },
      favoritesCount() {
        return this.$store.getters.favoritesCount;
      }
    }
  };
  </script>