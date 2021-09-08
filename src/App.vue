<template>
  <app-form>
    <form action="">
      <div class="help">
        <p>This is some help text</p>
      </div>
      <div class="fields">
        <input type="email" placeholder="email" />
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
      </div>
      <div class="buttons">
        <button type="submit">Submit</button>
      </div>
    </form>
  </app-form>
  <app-form></app-form>
</template>

<script>
import AppForm from './components/AppForm.vue';

export default {
  name: 'App',
  components: {
    AppForm,
  },
};
</script>
