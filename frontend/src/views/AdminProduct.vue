<template>
    <div class="admin_item__list product_admin__list">
      <button class="btn btn__black" @click="showAddProduct">Добавить товар</button>
      <ul>
        <li class="head">
          <p>Наименование</p>
          <p>Цена</p>
          <p>Категория</p>
          <p></p>
        </li>
        <li v-for="product in products" :key="product.id" :data-product-id="product.id">
          <p class="title">{{ product.name }}</p>
          <p class="price">{{ product.price }} ₽</p>
          <p class="category">{{ product.category }}</p>
          <p class="del"><button @click="deleteProduct(product.id)"><img src="./assets/media/icons/trash.svg" alt="trash"></button></p>
        </li>
      </ul>
      <div class="popup" v-if="showPopup">
        <div class="over" @click="hidePopup"></div>
        <form @submit.prevent="addProduct">
          <h2>Добавление нового товара</h2>
          <input type="text" class="input" v-model="newProduct.name" placeholder="НАИМЕНОВАНИЕ" required>
          <input type="number" class="input" v-model="newProduct.price" placeholder="ЦЕНА" required>
          <select v-model="newProduct.category" class="input" required>
            <option value="" disabled>Выберите категорию</option>
            <option v-for="cat in categories" :key="cat.id" :value="cat.name">{{ cat.name }}</option>
          </select>
          <label for="img_product" class="label__file">
            <input type="file" @change="handleFileUpload" id="img_product">
            <p>Изображение <img src="./assets/media/admin-img/upload.png" alt="upload"></p>
          </label>
          <button class="btn btn__border">Добавить</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showPopup: false,
        newProduct: { name: '', price: '', category: '', image: null }
      };
    },
    computed: {
      products() {
        return this.$store.state.products;
      },
      categories() {
        return this.$store.state.categories;
      }
    },
    methods: {
      showAddProduct() {
        this.showPopup = true;
      },
      hidePopup() {
        this.showPopup = false;
      },
      handleFileUpload(event) {
        this.newProduct.image = event.target.files[0];
      },
      addProduct() {
        console.log('Добавление товара:', this.newProduct);
        this.hidePopup();
      },
      deleteProduct(id) {
        console.log('Удаление товара:', id);
      }
    }
  };
  </script>