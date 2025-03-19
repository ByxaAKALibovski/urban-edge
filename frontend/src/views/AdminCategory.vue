<template>
    <div class="admin_category__list">
      <h3>Управление категориями</h3>
      <button class="btn btn__black" @click="showAddCategory">Добавить категорию</button>
      <ul>
        <li class="head">
          <p>Название</p>
          <p>Действия</p>
        </li>
        <li v-for="category in categories" :key="category.id">
          <p>{{ category.name }}</p>
          <div class="actions">
            <button @click="editCategory(category.id)">Редактировать</button>
            <button @click="deleteCategory(category.id)">Удалить</button>
          </div>
        </li>
      </ul>
      <div class="popup" v-if="showPopup">
        <div class="over" @click="hidePopup"></div>
        <form @submit.prevent="saveCategory">
          <h2>{{ isEditing ? 'Редактирование категории' : 'Добавление новой категории' }}</h2>
          <input type="text" class="input" v-model="currentCategory.name" placeholder="Название категории" required>
          <button class="btn btn__border">{{ isEditing ? 'Сохранить' : 'Добавить' }}</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showPopup: false,
        isEditing: false,
        currentCategory: { id: null, name: '' }
      };
    },
    computed: {
      categories() {
        return this.$store.state.categories;
      }
    },
    methods: {
      showAddCategory() {
        this.isEditing = false;
        this.currentCategory = { id: null, name: '' };
        this.showPopup = true;
      },
      editCategory(id) {
        const category = this.categories.find(c => c.id === id);
        if (category) {
          this.isEditing = true;
          this.currentCategory = { ...category };
          this.showPopup = true;
        }
      },
      saveCategory() {
        if (this.isEditing) {
          this.$store.commit('updateCategory', this.currentCategory);
        } else {
          this.$store.commit('addCategory', { ...this.currentCategory, id: Date.now() });
        }
        this.hidePopup();
      },
      deleteCategory(id) {
        if (confirm('Вы уверены, что хотите удалить эту категорию?')) {
          this.$store.commit('deleteCategory', id);
        }
      },
      hidePopup() {
        this.showPopup = false;
      }
    }
  };
  </script>