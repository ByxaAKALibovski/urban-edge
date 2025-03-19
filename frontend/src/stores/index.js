import { createStore } from 'vuex';
import product1 from '@/assets/media/img/new1.png'; // Импорт изображения
import product2 from '@/assets/media/exemple/product-detail/main.png'; // Импорт изображения
import category1 from '@/assets/media/img/category1.png'; // Импорт изображения
import category2 from '@/assets/media/img/category1.png'; // Импорт изображения

export default createStore({
  state: {
    products: [
      { id: 1, title: 'Футболка оверсайз с принтом на спине', price: 4000, image: product1, categoryId: 1 },
      { id: 2, title: 'Брюки Карго Джоггеры', price: 4445, image: product2, categoryId: 2, composition: 'полиэстер 100%', sizes: ['S', 'M', 'L', 'XL', 'XXL'] }
      // Добавьте другие товары
    ],
    categories: [
      { id: 1, name: 'футболки', image: category1 },
      { id: 2, name: 'штаны/брюки', image: category2 }
      // Добавьте другие категории
    ],
    basket: [],
    favorites: []
  },
  mutations: {
    addToBasket(state, product) {
      state.basket.push(product);
    },
    removeFromBasket(state, productId) {
      state.basket = state.basket.filter(item => item.id !== productId);
    },
    toggleFavorite(state, productId) {
      const index = state.favorites.indexOf(productId);
      if (index === -1) {
        state.favorites.push(productId);
      } else {
        state.favorites.splice(index, 1);
      }
    },
    addCategory(state, category) {
      state.categories.push(category);
    },
    updateCategory(state, updatedCategory) {
      const index = state.categories.findIndex(c => c.id === updatedCategory.id);
      if (index !== -1) {
        state.categories[index] = updatedCategory;
      }
    },
    deleteCategory(state, id) {
      state.categories = state.categories.filter(c => c.id !== id);
    }
  },
  actions: {},
  getters: {
    basketCount: state => state.basket.length,
    favoritesCount: state => state.favorites.length,
    favoriteProducts: state => state.products.filter(p => state.favorites.includes(p.id))
  }
});