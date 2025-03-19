<template>
    <main>
      <section class="title__page_sec">
        <div class="container">
          <h2>корзина</h2>
        </div>
      </section>
      <section class="basket__fill" v-if="basket.length">
        <div class="container">
          <ul class="basket_product__list">
            <li v-for="item in basket" :key="item.id" class="basket_product__item">
              <div class="img__block">
                <img :src="item.image" :alt="item.title" />
              </div>
              <div class="main__block">
                <div class="title__price">
                  <h3 class="title__product">{{ item.title }}</h3>
                  <p class="price__product">{{ item.price }} ₽</p>
                </div>
                <div class="size__product">{{ item.selectedSize }}</div>
                <button @click="removeFromBasket(item.id)">Удалить</button>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section class="basket__clear clear__section_screen" v-else>
        <div class="container">
          <h2 class="title__section">в корзине пока ничего нет</h2>
          <router-link to="/catalog" class="btn btn__black">перейти в каталог</router-link>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  export default {
    computed: {
      basket() {
        return this.$store.state.basket; // Предполагается, что корзина хранится в Vuex
      }
    },
    methods: {
      removeFromBasket(productId) {
        this.$store.commit('removeFromBasket', productId); // Удаление товара из корзины
      }
    }
  };
  </script>