// Creare la nostra prima app utilizzando Vue.js
// Usiamo vue dalla cdn, usate le slide per aitutarvi o la
//  documentazione: https://vuejs.org/guide/quick-start.html#using-vue-from-cdn
// MILESTONE 1:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Il mio primo messaggio con Vue!',
        imgPath : 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D'
      }
    }
  }).mount('#app')
