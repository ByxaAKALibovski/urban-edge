<template>
    <li class="category__item">
      <router-link :to="categoryLink">
        <img :src="image" :alt="title" />
        <h3>
          {{ title }}
          <svg
            width="27.004089"
            height="13.322266"
            viewBox="0 0 27.0041 13.3223"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Стрелка 1"
              d="M23.58 5.66L19.63 1.71C19.24 1.31 19.24 0.69 19.63 0.29C20.03 -0.1 20.65 -0.1 21.05 0.29L26.7 5.95C27.1 6.34 27.1 6.97 26.7 7.36L21.05 13.02C20.65 13.42 20.03 13.42 19.63 13.02C19.24 12.62 19.24 12 19.63 11.61L23.58 7.66L1 7.66C0.44 7.66 0 7.22 0 6.66C0 6.1 0.44 5.66 1 5.66L23.58 5.66Z"
              fill="#000000"
              fill-opacity="1.000000"
              fill-rule="evenodd"
            />
          </svg>
        </h3>
      </router-link>
    </li>
  </template>
  
  <script>
  export default {
    name: 'CategoryItem',
    props: {
      title: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      categoryLink: {
        type: String,
        default: '/catalog' // По умолчанию ссылка ведёт в каталог
      }
    }
  };
  </script>