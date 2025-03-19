<template>
    <main>
      <section class="title__page_sec">
        <div class="container">
          <h2>авторизация</h2>
        </div>
      </section>
      <section class="auth__sec">
        <div class="container">
          <form class="def__form" @submit.prevent="login">
            <input type="email" class="input" v-model="email" placeholder="EMAIL" required>
            <input type="password" class="input" v-model="password" placeholder="ПАРОЛЬ" required>
            <button class="btn btn__black">вход</button>
            <router-link to="/register" class="btn btn__border">Регистрация</router-link>
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
      login() {
        console.log('Авторизация:', this.email, this.password); // Здесь добавьте логику авторизации
      }
    }
  };
  </script>