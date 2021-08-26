const app = Vue.createApp({
  data() {
    return {
      usernames: ['hootlex', 'vadiminsk'],
    };
  },
});

app.component('github-user-card', {
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      user: {},
    };
  },
  created() {
    axios
      .get(`https://api.github.com/users/${this.username}`)
      .then((response) => (this.user = response.data));
  },
  template: `
    <div class="col">
      <div class="card" style="width: 18rem">
        <img :src="user.avatar_url" class="card-img-top" :alt="user.name" />
        <div class="card-body">
          <h5 class="card-title">
          <a :href="user.html_url" target="blank">{{user.name}}</a>
          </h5>
          <p class="card-text">
            {{user.bio}}
          </p>
          <p><strong>Location:</strong> {{user.location}}</p>
        </div>
      </div>
    </div>
  `,
});

app.mount('#app');
