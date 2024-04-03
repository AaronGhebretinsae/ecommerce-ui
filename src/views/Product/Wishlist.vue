<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center" >
                <h4 class="pt-3"> Your Wishlist</h4>
                <div class="row">
                
                    <div v-for="product in products" :key="product.id" class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
                        <ProductBox :product="product"></ProductBox>
                    </div>

                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ProductBox from '@/components/Product/ProductBox.vue';

    export default {
        components: {ProductBox},
        props: ["baseURL"],
        data() {
            return {
                token: null,
                products: null,
            }
        },
        methods: {
            fetchWishList() {
                axios.get(this.baseURL+'wishlist/'+this.token)
                .then((data) =>{ this.products = data.data;} )
                .catch((err) => console.log(err))
            }

        },
        mounted() {
            this.token = localStorage.getItem("token");
            this.fetchWishList();
        },
    }
</script>

<style  scoped>

</style>