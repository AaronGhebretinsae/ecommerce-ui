<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">{{category.categoryName}}</h4>
                <h5>{{ msg }}</h5>
                <RouterLink :to="{name:''}"><button type="button" class="btn btn-info " >Back to Categories</button></RouterLink>
            </div>
        </div>

        <div class="row">
            <div v-for="product of category.products" :key="product.id" class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
            <ProductBox :product="product"/>
            </div>
        </div>
    </div>
</template>

<script>
import ProductBox from '@/components/Product/ProductBox.vue';

    export default {
        data() {
            return {
                id: null,
                category: 0,
                msg: ''
            }
        },
        props: ["categories"],
        components: {ProductBox},
        mounted() {
            this.id = this.$route.params.id;
            this.category = this.categories.find(category => category.id == this.id);
            if(this.category.products.length == 0){
                this.msg = 'no products found!'
            }
            else {
                this.msg = this.category.products.length + " products found!"
            }

        }
        
    }
</script>

<style scoped>

</style>