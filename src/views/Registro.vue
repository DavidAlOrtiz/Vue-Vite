<template>
    <div>
        <h1>Registro</h1>
        <form @submit.prevent="handleSubmit" >
            <input type="email" placeholder="email" v-model.trim="email">
            <input type="password" name="password" id="password" placeholder="password" v-model.trim="password">
            <button type="submit" :disabled="!useUseStore">Crear Usuarios</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import {useUseStore} from '../stores/userStore.js'


const userC = useUseStore();
const email = ref('juan2@gmail.com')
const password = ref('1234567')

const handleSubmit = async () =>{
    if(!email.value || !password.value){
        return alert('Please enter some values')
    }
    await userC.registerUser(email.value, password.value)

}

</script>

<style  scoped>

</style>