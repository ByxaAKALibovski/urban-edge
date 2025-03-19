import { createRouter, createWebHistory } from 'vue-router';

// Основные страницы
import Home from '../views/Home.vue';
import Catalog from '../views/Catalog.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Basket from '../views/Basket.vue';
import Contact from '../views/Contact.vue';
import DeliveryPayment from '../views/DeliveryPayment.vue';
import Favorites from '../views/Favorites.vue';
import Auth from '../views/Auth.vue';
import Register from '../views/Register.vue';

// Страницы профиля
import Profile from '../views/Profile.vue';
import ProfileOrders from '../views/ProfileOrders.vue';
import ProfileHistory from '../views/ProfileHistory.vue';

// Страницы админ-панели
import Admin from '../views/Admin.vue';
import AdminMain from '../views/AdminMain.vue';
import AdminCategory from '../views/AdminCategory.vue';
import AdminProduct from '../views/AdminProduct.vue';
import AdminOrders from '../views/AdminOrders.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/catalog', name: 'Catalog', component: Catalog },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail },
  { path: '/basket', name: 'Basket', component: Basket },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/delivery-payment', name: 'DeliveryPayment', component: DeliveryPayment },
  { path: '/favorites', name: 'Favorites', component: Favorites },
  { path: '/auth', name: 'Auth', component: Auth },
  { path: '/register', name: 'Register', component: Register },

  // Маршруты для профиля с вложенными подстраницами
  {
    path: '/profile',
    component: Profile,
    children: [
      { path: 'orders', name: 'ProfileOrders', component: ProfileOrders },
      { path: 'history', name: 'ProfileHistory', component: ProfileHistory },
      { path: '', redirect: 'orders' } // По умолчанию переходим на заказы
    ]
  },

  // Маршруты для админ-панели с вложенными подстраницами
  {
    path: '/admin',
    component: Admin,
    children: [
      { path: 'main', name: 'AdminMain', component: AdminMain },
      { path: 'category', name: 'AdminCategory', component: AdminCategory },
      { path: 'product', name: 'AdminProduct', component: AdminProduct },
      { path: 'orders', name: 'AdminOrders', component: AdminOrders },
      { path: '', redirect: 'main' } // По умолчанию переходим на главную админ-панели
    ]
  }
];

const router = createRouter({
  history: createWebHistory(), // Убираем process.env.BASE_URL
  routes
});

export default router;