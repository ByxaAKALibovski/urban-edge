<template>
    <div class="admin_item__list orders_admin__list">
      <h3>Заказы</h3>
      <ul>
        <li class="head">
          <p>Номер заказа</p>
          <p>Дата</p>
          <p>Сумма</p>
          <p>Статус</p>
          <p></p>
        </li>
        <li v-for="order in orders" :key="order.id" :data-order-id="order.id">
          <p class="title">{{ order.number }}</p>
          <p class="date">{{ order.date }}</p>
          <p class="total">{{ order.total }} ₽</p>
          <p class="status">{{ order.status }}</p>
          <p class="del"><button @click="deleteOrder(order.id)"><img src="./assets/media/icons/trash.svg" alt="trash"></button></p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      orders() {
        return this.$store.getters.allOrders; // Предполагается, что заказы хранятся в Vuex
      }
    },
    methods: {
      deleteOrder(id) {
        console.log('Удаление заказа:', id);
      }
    }
  };
  </script>