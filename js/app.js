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
        imgPath : 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?cs=srgb&dl=pexels-james-wheeler-1619317.jpg&fm=jpg'
      }
    }
  }).mount('#app')
