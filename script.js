const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Vadim',
      lastName: 'Gadjimuradov',
      url: 'https://www.google.com/',
      raw_url: '<a href="https://www.google.com/" target="_blank">Google</a>',
      age: 20,
    };
  },

  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },

    increment() {
      this.age++;
    },

    decrement() {
      this.age--;
    },

    updateSecondName(msg, event) {
      event.preventDefault();
      console.log(msg);
      this.lastName = event.target.value;
    },
  },
}).mount('#app');
