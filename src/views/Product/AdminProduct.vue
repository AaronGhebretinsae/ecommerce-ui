<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center"> 
                <h4 class="pt-3">Products</h4>
                <router-link :to="{name:'AddProduct'}">
                <button class="btn btn-primary float-right">Add Product</button>
                </router-link>
            </div>
            
        </div>
        <div class="row">
           <div
           v-for="product of products"
           :key="product.id" class="col-xl-4 col-md-6 col-12 pt-3 flex">
            <ProductBox :product="product"></ProductBox> 
           </div>
        </div>

    </div>
</template>

<script>

import ProductBox from "@/components/Product/ProductBox";

    export default {
        
        name: "AdminProduct",
        props: ["products"],
        components: {ProductBox},
    };
</script>

<style  scoped>
.card-img-top {
        object-fit: cover;
    }
</style>