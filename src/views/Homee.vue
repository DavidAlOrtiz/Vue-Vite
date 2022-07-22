<template>
    <div>
        <h1>Hola desde el home de esta mamada</h1>
        {{useStore.userData?.email}}
    </div>
</template>

<script setup>
    import {useUseStore} from '../stores/userStore.js'
    const useStore = useUseStore();
</script>

<style lang="scss" scoped>

</style>