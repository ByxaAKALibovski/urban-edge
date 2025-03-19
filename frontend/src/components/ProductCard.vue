<template>
    <router-link :to="'/product/' + product.id" class="card__product">
      <div class="img__block">
        <img :src="product.image" :alt="product.title" class="img__card" />
        <span class="favorit__btn" @click.prevent="toggleFavorite">
          {{ isFavorite ? '❤️' : '🤍' }}
        </span>
      </div>
      <div class="text__block">
        <p class="title__product">{{ product.title }}</p>
        <p class="price__product">{{ product.price }} ₽</p>
      </div>
      <button class="btn add_basket__btn" @click.prevent="addToBasket">Добавить в корзину</button>
    </router-link>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    computed: {
      isFavorite() {
        return this.$store.state.favorites.includes(this.product.id);
      }
    },
    methods: {
      addToBasket() {
        this.$store.commit('addToBasket', this.product);
      },
      toggleFavorite() {
        this.$store.commit('toggleFavorite', this.product.id);
      }
    }
  };
  </script>