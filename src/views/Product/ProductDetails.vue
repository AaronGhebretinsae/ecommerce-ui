<template>
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-1"></div>

            <!--Display  Image-->
            <div class="col-md-4 col-12">
                <img :src="product.imageURL" class="img-fluid">
            </div>
            <!--Display Product Details-->
            <div class="col-md-6 col-12 pt-3 pt-md-0">
                <h4>{{ product.name }}</h4>
                <h6 class="category font=italic"> {{ category.categoryName }}</h6>
                <h6 class="font-weight-bold">${{ product.price }}</h6>
                <p>
                    {{ product.description  }}
                </p>
                <div class="features pt-3">
                    <h5><strong>Features</strong></h5>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Officia quas, officiis eius magni error magnam voluptatem</li>
                        <li>nesciunt quod! Earum voluptatibus quaerat dolorem doloribus</li>
                        <li>molestias ipsum ab, ipsa consectetur laboriosam soluta et</li>
                        <li>ut doloremque dolore corrupti, architecto iusto beatae.</li>
                    </ul>
                </div>
                <button id="wishlist-button"
                class="btn mr-3 p-1 py-0" @click="addToWishList">
                {{wishListString}}
                </button>
            </div>

        </div>
    </div>
</template>

<script>

import axios from "axios";
import swal from "sweetalert"

    export default {
        data ( ) {
            return {
                product: {},
                category: {},
                wishListString: "Add to wishlist",
                token: null,
            }
        },
        props: ["baseURL", "products", "categories"],
        methods: {
           async addToWishList() {
                if(!this.token) {
                    //user is not logged in show error
                    swal({
                        text: "Please Log in to add item in wishlist",
                        icon: "error",
                    })
                    return;

                }
                // add item to wishlist
                axios.post(this.baseURL+'wishlist/add?token='+this.token, {
                    id: this.product.id, 
                })
                .then((res)=> {
                    if (res.status === 201) {
                        this.wishListString = "Added to Wishlist"
                        swal({
                            text: "Added to Wishlist",
                            icon: "success",
                        })
                    }
                })
                .catch((err) => {
                    console.log("err",err);
                });

            },
        },
        mounted () {
            this.id = this.$route.params.id;
            this.product =  this.products.find((product) => product.id == this.id);
            this.category = this.categories.find((category) => category.id == this.product.categoryId);
            this.token = localStorage.getItem("token")
        }
    }
</script>

<style scoped>
    .category{
        font-weight: 400;
    }

    #wishlist-button {
        background-color: #b9b9b9;
    }
</style>