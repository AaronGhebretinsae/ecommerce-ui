<template>
    <div class="container py-4">
        <RouterLink :to="{name:'AdminCategory'}">
        <button class="btn btn-primary btn-lg">View/Edit Categories</button>
    </RouterLink>
    <br/>
    <RouterLink :to="{name:'AdminProducts'}">
        <button class="btn btn-primary btn-lg">View/Edit Products</button>
    </RouterLink>
    </div>
   
    
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