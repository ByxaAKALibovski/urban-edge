<template>
    <li class="order__card">
      <div class="order__info">
        <p><strong>Заказ №{{ order.number }}</strong></p>
        <p>Дата: {{ order.date }}</p>
        <p>Сумма: {{ order.total }} ₽</p>
        <p>Статус: {{ order.status }}</p>
      </div>
      <router-link :to="'/order/' + order.id" class="btn btn__border">Подробнее</router-link>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      order: {
        type: Object,
        required: true
      }
    }
  };
  </script>