const shoppingList = Vue.createApp({
  data() {
    return {
      header: 'Shopping List App',
      newItem: '',
      newItemPriority: false,
      editing: false,
      purchased: false,
      items: [
        { id: 1, title: '10 hats' },
        { id: 2, title: '5 cups' },
        { id: 3, title: '2 games' },
      ],
    };
  },
  methods: {
    saveItem() {
      this.items.push({
        id: this.items.length + 1,
        title: this.newItem,
        highPriority: this.newItemPriority,
      });
      this.newItem = '';
      this.newItemPriority = false;
    },
    doEdit() {
      this.editing = !this.editing;
      this.newItem = '';
      this.newItemPriority = false;
    },
    togglePurchased(item) {
      item.purchased = !item.purchased;
    },
  },
}).mount('#shopping-list');
