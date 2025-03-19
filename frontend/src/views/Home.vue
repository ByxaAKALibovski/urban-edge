<template>
    <main>
      <section class="slider__sec">
        <div class="container">
          <Slider :slides="slides" />
        </div>
      </section>
      <section class="category__main">
      <div class="container">
        <h2 class="title__section">все наши товары</h2>
        <ul class="category__list">
          <CategoryItem
            v-for="category in categories"
            :key="category.id"
            :title="category.title"
            :image="category.image"
            :category-link="category.link"
          />
        </ul>
      </div>
    </section>
      <section class="new__sec">
        <div class="container container__product">
          <div class="list__card">
            <div class="product__start">
              <h2 class="title__section">Новинки</h2>
            </div>
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
          </div>
          <router-link to="/catalog" class="btn btn__product">Перейти в каталог</router-link>
        </div>
      </section>
    </main>
  </template>
  
<script>
    import Slider from '../components/Slider.vue';
    import ProductCard from '../components/ProductCard.vue';
    import CategoryItem from '../components/CategoryItem.vue';
    import slide1 from '@/assets/media/img/slide1.png'; // Импорт изображения
    import slide2 from '@/assets/media/img/slide2.png'; // Импорт изображения
    import categoryImage from '@/assets/media/img/category1.png'; // Импорт изображения

    export default {
        components: {
            Slider,
            ProductCard,
            CategoryItem
        },
        computed: {
        slides() {
            return [
                { title: 'Свитшот с принтом', price: 3700, image: slide1, composition: '65% - полиэстер; 35% - хлопок', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
                { title: 'Свитшот с принтом', price: 3200, image: slide2, composition: '65% - полиэстер; 35% - хлопок', sizes: ['S', 'M', 'L', 'XL', 'XXL'] }
            ];
        },
        categories() {
            return [
                { id: 1, title: 'футболки', image: categoryImage, link: '/catalog' },
                { id: 2, title: 'штаны/брюки', image: categoryImage, link: '/catalog' },
                { id: 3, title: 'рубашки', image: categoryImage, link: '/catalog' },
                { id: 4, title: 'шорты', image: categoryImage, link: '/catalog' },
                { id: 5, title: 'кофты/толстовки', image: categoryImage, link: '/catalog' },
                { id: 6, title: 'куртки', image: categoryImage, link: '/catalog' },
                { id: 7, title: 'комплекты', image: categoryImage, link: '/catalog' }
            ];
        },
        products() {
            return this.$store.state.products;
        }
        }
    };
</script>