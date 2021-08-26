const app = Vue.createApp({});

app.component('page-layout', {
  data() {
    return {
      completed: false,
    };
  },

  template: '#page-template',
});

app.mount('#app');
