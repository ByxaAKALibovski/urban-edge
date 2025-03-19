<template>
    <main>
      <section class="title__page_sec">
        <div class="container">
          <h2>каталог</h2>
        </div>
      </section>
      <section class="catalog__sec">
        <div class="container">
          <nav class="sider__nav category__nav">
            <a href="#" :class="{ active: !selectedCategory }" @click.prevent="selectCategory(null)">Все товары</a>
            <a v-for="category in categories" :key="category.id" href="#" :class="{ active: selectedCategory === category.id }" @click.prevent="selectCategory(category.id)">{{ category.name }}</a>
          </nav>
          <div class="container__product">
            <div class="list__card">
              <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
            </div>
            <a href="#" class="btn btn__product">Показать еще</a>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  import ProductCard from '../components/ProductCard.vue';
  
  export default {
    components: { ProductCard },
    data() {
      return {
        selectedCategory: null
      };
    },
    computed: {
      categories() {
        return this.$store.state.categories;
      },
      filteredProducts() {
        return this.selectedCategory
          ? this.$store.state.products.filter(p => p.categoryId === this.selectedCategory)
          : this.$store.state.products;
      }
    },
    methods: {
      selectCategory(categoryId) {
        this.selectedCategory = categoryId;
      }
    }
  };
  </script>