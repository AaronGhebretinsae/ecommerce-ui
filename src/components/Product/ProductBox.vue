<template>
<router-link class="card w-100 h-100 "  style="text-decoration: none; margin-top: 10px;" :to="{name:'ShowDetails', params: {id: product.id}}">
                

                <div class="embed-responsive embed-responsive-16by9">
                    <img class="card-img-top embed-responsive-item" 
                    :src="product.imageURL" 
                    alt="Card image cap">
                </div>

                <div class="card-body">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <p class="card-text">
                        {{ product.description}}
                    </p>
                    <router-link :to="{name:'EditProduct', params: {id: product.id}}"
                    v-show="$router.currentRoute.value.name == 'AdminProducts'">
                        <Button class="btn btn-primary">Edit</Button>
                    </router-link>
                    
                </div>
                
            </router-link>
    
</template>



<script>

    export default {
        name: "ProductBox",
        props: ["product"],
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