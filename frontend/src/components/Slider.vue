<template>
    <div class="slider">
      <div class="slider__line">
        <div v-for="(slide, index) in slides" :key="index" class="slide">
          <div class="main__text">
            <h2 class="title">{{ slide.title }}</h2>
            <p class="price">{{ slide.price }} ₽</p>
          </div>
          <img class="product__img" :src="slide.image" alt="" />
          <div class="second__text">
            <div class="text__block">
              <p class="small">Состав</p>
              <p>{{ slide.composition }}</p>
            </div>
            <div class="text__block">
              <p class="small">Размер</p>
              <p>{{ slide.sizes.join(', ') }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="slider__nav">
        <div v-for="(_, index) in slides" :key="index" class="slider__btn" :class="{ active: index === 0 }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      slides: {
        type: Array,
        required: true
      }
    }
  };
  </script>