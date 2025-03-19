<template>
    <main>
      <section class="catalog__sec">
        <div class="container">
          <nav class="sider__nav category__nav">
            <a href="#" :class="{ active: !selectedCategory }" @click.prevent="selectCategory(null)">Все товары</a>
            <a v-for="category in categories" :key="category.id" href="#" :class="{ active: selectedCategory === category.id }" @click.prevent="selectCategory(category.id)">{{ category.name }}</a>
          </nav>
          <div class="detail__product_container">
            <router-link to="/catalog" class="back__arrow">
              <svg width="27" height="13" viewBox="0 0 27.0041 13.3223" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.58 5.66L19.63 1.71C19.24 1.31 19.24 0.69 19.63 0.29C20.03 -0.1 20.65 -0.1 21.05 0.29L26.7 5.95C27.1 6.34 27.1 6.97 26.7 7.36L21.05 13.02C20.65 13.42 20.03 13.42 19.63 13.02C19.24 12.62 19.24 12 19.63 11.61L23.58 7.66L1 7.66C0.44 7.66 0 7.22 0 6.66C0 6.1 0.44 5.66 1 5.66L23.58 5.66Z" fill="#000000"/>
              </svg>
            </router-link>
            <div class="detail__product_info" :data-product="product.id">
              <div class="info__block">
                <div class="main__img">
                  <img :src="product.image" :alt="product.title" />
                </div>
                <div class="main__info">
                  <h3 class="title__product">{{ product.title }}</h3>
                  <div class="price__block">
                    <p class="price__product">{{ product.price }} ₽</p>
                    <span class="favorit__btn" @click="toggleFavorite">{{ isFavorite ? '❤️' : '🤍' }}</span>
                  </div>
                  <div class="properties__product">
                    <div class="item">
                      <p class="desc">состав</p>
                      <p class="compaund__product">{{ product.composition }}</p>
                    </div>
                    <div class="item">
                      <p class="desc">размер</p>
                      <ul class="size__product">
                        <li v-for="size in product.sizes" :key="size" :class="{ active: selectedSize === size }" @click="selectedSize = size">{{ size }}</li>
                      </ul>
                    </div>
                  </div>
                  <button class="btn btn__black" @click="addToBasket">добавить в корзину</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedCategory: null,
        selectedSize: null
      };
    },
    computed: {
      product() {
        return this.$store.state.products.find(p => p.id === parseInt(this.$route.params.id)) || {};
      },
      categories() {
        return this.$store.state.categories;
      },
      isFavorite() {
        return this.$store.state.favorites.includes(this.product.id);
      }
    },
    methods: {
      selectCategory(categoryId) {
        this.selectedCategory = categoryId;
      },
      addToBasket() {
        if (this.selectedSize) {
          this.$store.commit('addToBasket', { ...this.product, selectedSize: this.selectedSize });
        } else {
          alert('Выберите размер');
        }
      },
      toggleFavorite() {
        this.$store.commit('toggleFavorite', this.product.id);
      }
    }
  };
  </script>