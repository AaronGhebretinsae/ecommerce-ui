<template>

    <div class="row">
        <div class="col-12 text-center">
            <h4 class="pt-3">Edit Product</h4>
        </div>
    </div>

    <div class="row">
        <div class="col"></div>
        <div class="col-3">
            <div v-if="product" class="card w-10 h-100" style="margin-top: 10px;" >

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
                </div>
            </div>
        </div>
        <div class="col"></div>
    </div>

    <div class="row">
                <div class="col"></div>
                <div class="col-5">
                    <form v-if="product">
                        <div class="form-group">
                            <label>Category</label>
                            <select class="form-control" v-model="product.categoryId" required>
                            <option v-for="category of categories"
                                    :key="category.id"
                                    :value="category.id"
                            >{{ category.categoryName }}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" 
                            v-model="product.name" required>
                        </div>

                        <div class="form-group">
                            <label>Description</label>
                            <input type="text" class="form-control" 
                            v-model="product.description" required>
                        </div>
                        <div class="form-group">
                            <label> Image URL</label>
                            <input type="text" class="form-control" 
                            v-model="product.imageURL" required>
                        </div>
                        <div class="form-group">
                            <label>Price</label>
                            <input type="text" class="form-control" 
                            v-model="product.price" required>
                        </div>
                       
                        <button type="button" class="btn btn-primary" @click="editProduct">Submit</button>
                        <RouterLink :to="{name:'AdminProducts'}"><button type="button" class="btn btn-info" >Back to Products</button></RouterLink>
                        
                    </form>
                </div>
                <div class="col"></div>
    </div>
    
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
    export default {
        props:["products","categories","baseURL"],
        data() {
            return{
                product: null,
                id: null,
                categoryName: null,
            }
        },
        methods: {
            async editProduct() {
                console.log('product', this.product);
                await axios.post(this.baseURL+"product/update/"+this.id, this.product)
                .then((res) => {
                    this.$emit("fetchData");
                    swal ({
                        text: "Product has been updated successfully",
                        icon: "success"
                    })
                }).catch((err) => console.log("err",err))
            }

        },
        mounted() {
            this.id = this.$route.params.id;
            this.product = this.products.find(product => product.id == this.id);
            this.categoryName = this.categories.find(categoryId => categoryId = this.product.categoryId).categoryName;
        },
        
    }
</script>

<style scoped>
.btn {margin: 10px;}
.card-img-top {
        object-fit: cover;
    }

    .row { margin-top: 10px;}
</style>