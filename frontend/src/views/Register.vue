<template>
    <main>
      <section class="title__page_sec">
        <div class="container">
          <h2>регистрация</h2>
        </div>
      </section>
      <section class="register__sec">
        <div class="container">
          <form class="def__form" @submit.prevent="register">
            <input type="email" class="input" v-model="email" placeholder="EMAIL" required>
            <input type="password" class="input" v-model="password" placeholder="ПАРОЛЬ" required>
            <button class="btn btn__black">зарегистрироваться</button>
            <router-link to="/auth" class="btn btn__border">авторизация</router-link>
          </form>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      register() {
        console.log('Регистрация:', this.email, this.password); // Здесь добавьте логику регистрации
      }
    }
  };
  </script>