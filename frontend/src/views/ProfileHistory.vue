<template>
    <div class="profile_history__list">
      <h3>История покупок</h3>
      <ul v-if="history.length">
        <OrderCard v-for="order in history" :key="order.id" :order="order" />
      </ul>
      <p v-else>Ваша история покупок пуста.</p>
      <router-link to="/catalog" class="btn btn__black">Перейти в каталог</router-link>
    </div>
  </template>
  
  <script>
  import OrderCard from '../components/OrderCard.vue';
  
  export default {
    components: { OrderCard },
    computed: {
      history() {
        return this.$store.getters.userHistory; // Предполагается, что история хранится в Vuex
      }
    }
  };
  </script>