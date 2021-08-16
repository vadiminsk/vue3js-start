const TodoList = {
  data() {
    return {
      javascriptFrameworks: [
        { id: 1, text: 'Vue' },
        { id: 2, text: 'React' },
        { id: 3, text: 'Angular' },
      ],
    };
  },
  // methods: {
  //   toggleText() {
  //     this.seen = !this.seen;
  //   },
  // },
};

const app = Vue.createApp(TodoList);

app.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>',
});

app.mount('#todo');
