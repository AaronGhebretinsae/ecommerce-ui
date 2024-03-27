<template>

    <router-link class="card w-100 h-100 "  style="text-decoration: none; margin-top: 10px;" :to="{name:'CategoryProducts', params: {id: category.id} }">
        <div class="embed-responsive embed-responsive-16by9">
            <img class="card-img-top embed-responsive-item" 
            :src="category.imageUrl" 
            alt="Card image cap">
        </div>
        
        <div class="card-body">
            <h5 class="card-title">{{ category.categoryName }}</h5>
            <p class="card-text">
                {{ category.description }}
            </p>
            <router-link :to="{ name:'EditCategory', params: {id: category.id}}" 
            v-show="$router.currentRoute.value.name == 'AdminCategory'">
            <button class="btn btn-primary">Edit</button></router-link>
        </div>
    </router-link>

        
    
</template>


<script>
import { RouterLink } from 'vue-router';


    export default {
        name: "CategoryBox",
        props: ["category"],
        methods: {},
    };

</script>

<style scoped>

    h5,p, router-link:hover, p:hover {
            color: black;
            text-decoration-line: none;
            
        }
        .card-img-top {
            object-fit: cover;
        }
</style>