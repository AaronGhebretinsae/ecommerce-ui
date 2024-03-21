<template>
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <h3 class="pt-3">Add Category</h3>
            </div>
        </div>
        <div class="row">
            <div class="col"></div>
            <div class="col-5">
                <form>
                <div class="form-group">
                    <label>Category Name</label>
                    <input type="text" class="form-control" v-model="categoryName">
                </div>
                <div class="form-group">
                    <label>Category Description</label>
                    <input type="text" class="form-control" v-model="description">
                </div>
                <div class="form-group">
                    <label>Category Image Url</label>
                    <input type="text" class="form-control" v-model="imageUrl">
                </div>
                <button type="submit" class="btn btn-primary" @click="addCategory">Submit</button>
            </form>
            </div>
            <div class="col"></div>
            
        </div>
    </div>
</template>


<script>
 
 const axios = require("axios");
 const swal = require('sweetalert')

export default {
   
    data () {
        return {
            categoryName: "",
            description: "",
            imageUrl: "",
        }
    },
    methods: {
        addCategory() {
            console.log(this.categoryName, this.description, this.imageUrl)
            const newCategory = {
                categoryName: this.categoryName,
                description: this.description,
                imageUrl: this.imageUrl,
            };

            const baseURL = "https://limitless-lake-55070.herokuapp.com";

            axios ({
                method: 'post',
                url: baseURL+'/category/create',
                data: JSON.stringify(newCategory),
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(() => {
                swal({
                    text: 'Category added successfully',
                    icon: 'success'
                })
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }
};
</script>

<style scoped></style>