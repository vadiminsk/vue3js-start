const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Vadim',
      middleName: '',
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

    updateLastName(msg, event) {
      console.log(msg);
      this.lastName = event.target.value;
    },

    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
}).mount('#app');
