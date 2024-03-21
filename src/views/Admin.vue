<template>
    <RouterLink :to="{name:'AdminCategory'}">
        <button class="btn btn-primary btn-lg">View/Edit Categories</button>
    </RouterLink>
    <br/>
    <RouterLink :to="{name:'AdminProducts'}">
        <button class="btn btn-primary btn-lg">View/Edit Products</button>
    </RouterLink>
    
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .btn {
        margin-top: 20px;
        margin-bottom: 5px;
        }
</style>