<template>
    <div class="profile_orders__list">
      <h3>Ваши заказы</h3>
      <ul v-if="orders.length">
        <OrderCard v-for="order in orders" :key="order.id" :order="order" />
      </ul>
      <p v-else>У вас пока нет активных заказов.</p>
      <router-link to="/catalog" class="btn btn__black">Перейти в каталог</router-link>
    </div>
  </template>
  
  <script>
  import OrderCard from '../components/OrderCard.vue';
  
  export default {
    components: { OrderCard },
    computed: {
      orders() {
        return this.$store.getters.userOrders; // Предполагается, что заказы хранятся в Vuex
      }
    }
  };
  </script>