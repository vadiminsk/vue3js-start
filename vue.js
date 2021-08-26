const app = Vue.createApp({
  data() {
    return {
      plans: [
        { id: 1, name: 'Create App' },
        { id: 2, name: 'Buld VueJS App' },
        { id: 3, name: 'Rebuild the project' },
      ],
    };
  },
});

app.component('plan', {
  props: {
    name: String,
  },

  template: `<div>
        <span>{{name}}</span>
      </div>`,
});

app.mount('#app');
