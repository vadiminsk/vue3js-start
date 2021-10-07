<template>
  <div class="navbar">
    <h3 @click="$router.push('/')">Site logo</h3>
    <div class="navbar__btns">
      <app-button @click="$router.push('/posts')">Posts</app-button>
      <app-button @click="$router.push('/about')">About Us</app-button>
      <app-button @click="$router.push('/store')">Store</app-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 1rem;
  background-color: rgb(41, 230, 220);
  box-shadow: 2px 2px 4px #cecece;
}

.navbar__btns {
  display: flex;
  align-items: center;
}

.navbar__btns button {
  background: #3742dd;
  color: #fff;
  border: none;
}

.navbar__btns button {
  margin-right: 10px;
}
</style>
