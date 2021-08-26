const app = Vue.createApp({
  data() {
    return {
      usernames: ['hootlex', 'vadiminsk'],
    };
  },
});

app.component('alert-card', {
  props: {
    type: {
      type: String,
    },
    header: {
      type: String,
    },
  },

  data() {
    return {
      hidden: false,
    };
  },

  methods: {
    hide() {
      this.hidden = !this.hidden;
    },
  },

  template: `
   <div v-if="!hidden" class="toast" :class="type" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">{{header}}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close" @click="hide"></button>
      </div>
    
      <slot></slot>
  </div>
  `,
});

app.mount('#app');
