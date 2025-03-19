<template>
    <main>
      <section class="title__page_sec">
        <div class="container">
          <h2>избранное</h2>
        </div>
      </section>
      <section class="favorit__sec" v-if="favorites.length">
        <div class="container container__product">
          <div class="list__card">
            <ProductCard v-for="product in favorites" :key="product.id" :product="product" />
          </div>
        </div>
      </section>
      <section class="favorit__clear clear__section_screen" v-else>
        <div class="container">
          <h2 class="title__section">в избранном пока ничего нет</h2>
          <router-link to="/catalog" class="btn btn__black">перейти в каталог</router-link>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  import ProductCard from '../components/ProductCard.vue';
  
  export default {
    components: { ProductCard },
    computed: {
      favorites() {
        return this.$store.getters.favoriteProducts; // Предполагается, что избранное хранится в Vuex
      }
    }
  };
  </script>