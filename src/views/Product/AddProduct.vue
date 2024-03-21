<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4>Add New Product</h4>
            </div>
        </div>
        <div class="row">
            <div class="col"></div>
        <div class="col-5">
            <form>
                <div class="form-group">
                    <label >Category</label> 
                    <select class="form-control" v-model="categoryId" required>
                        <option v-for="category in categories" 
                         :key="category.id" 
                         :value="category.id">{{ category.categoryName }}
                        </option>
                    </select>
                </div>
                <div class="for-group">
                    <label>Name</label>
                    <input type="text" v-model="name" required class="form-control" >
                </div>
                <div class="for-group">
                    <label>Description</label>
                    <input type="text" v-model="description" required class="form-control" >
                </div>
                <div class="for-group">
                    <label>Image Url</label>
                    <input type="text" v-model="ImageURl" required class="form-control">
                </div>
                <div class="for-group">
                    <label>Price</label>
                    <input type="number" v-model="price" required class="form-control">
                </div>
                <button type="button" class="btn btn-primary" @click="addProduct">Add Product</button>
            </form>
        </div>
        <div class="col"></div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
    export default {

        props: ["baseURL","categories"],
        data() {
            return {
                id: null,
                categoryId: null,
                name: null,
                description: null,
                imageURL: null,
                price: null,
            }
        },
        methods: {
            addProduct() {
                const newProduct = {
                    categoryId: this.categoryId,
                    description: this.description,
                    name: this.name,
                    imageURL: this.imageURL,
                    price: this.Price,
                }

                axios.post(this.baseURL+"product/add", newProduct)
                .then((res) => {
                    this.$router.push({name: 'AdminProducts'});
                    swal({
                        text: "Product added",
                        icon: "success"
                    })
                }).catch((err => {
                    console.log(err);
                    swal({
                        text:"Something Went Wrong",
                        icon: "error"
                    })
                }))


            }
        }
        
    }
</script>

<style  scoped>
    .btn { margin-top: 10px;}
</style>