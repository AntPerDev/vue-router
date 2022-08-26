<template>
  <div>
    <router-link to="/">PokemonList</router-link>
    <!-- <router-link to="/10">Pokemon por id</router-link> -->
    <router-link :to="{name:'pokemon-id',   params:  $route.params.id } ">
     Pokemon por id
    </router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
div {
  padding: 0 30px;
}
div a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}
div .router-link-exact-active {
  color: #42b983
}
</style>