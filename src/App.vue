<template>
  <div>
    <h1>Hola desde el vue vite juans</h1>
    <nav v-if="!userStoreU.loadingSession">
      <router-link to="/" v-if="userStoreU.userData">Home</router-link> |
      <router-link to="/login" v-if="!userStoreU.userData">Login</router-link> |
      <router-link to="/register" v-if="!userStoreU.userData">Register</router-link> |
      <button @click="userStore.logoutUser.loadingUser" v-if="userStoreU.userData" >Logout</button>
    </nav>
    <div v-else>
      Cargando.....
    </div>
     
  </div>
  <router-view></router-view>
  
</template>

<script setup>
import {useUseStore} from './stores/userStore'
const userStoreU = useUseStore();
</script>

<style lang="scss" scoped>

</style>