<template>
    <div class="admin_main__dashboard">
      <h3>Добро пожаловать в админ-панель</h3>
      <div class="dashboard__stats">
        <div class="stat__card">
          <h4>Всего товаров</h4>
          <p>{{ totalProducts }}</p>
        </div>
        <div class="stat__card">
          <h4>Активные заказы</h4>
          <p>{{ activeOrders }}</p>
        </div>
        <div class="stat__card">
          <h4>Категорий</h4>
          <p>{{ totalCategories }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      totalProducts() {
        return this.$store.state.products.length;
      },
      activeOrders() {
        return this.$store.getters.activeOrders.length;
      },
      totalCategories() {
        return this.$store.state.categories.length;
      }
    }
  };
  </script>