<template>
    <div class="row">
        <div class="col-12 text-center">
            <h4 class="pt-3">Edit Category</h4>
        </div>
    </div>

    <div class="row">
        <div class="col"></div>
        <div class="col-3">
            <div v-if="category" class="card w-100 h-100" style="margin-top: 10px;" >

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
                </div>
            </div>
        </div>
        <div class="col"></div>
    </div>
   
    
            
    <div class="row">
        <div class="col"></div>
        <div class="col-5">
            <form v-if="category">
                
            <div class="form-group">
                <label>Category Name</label>
                <input type="text" class="form-control"
                        v-model="category.categoryName" required/>
            </div>
            <div class="form-group">
                <label>Description</label>
                <input type="text" class="form-control"
                        v-model="category.description" required/>
            </div>
            <div class="form-group">
                <label>Image URL</label>
                <input type="text" class="form-control"
                        v-model="category.imageUrl" required/>
            </div>
            <button type="button" class="btn btn-primary" @click="editCategory">Submit</button>
            <RouterLink :to="{name:'AdminCategory'}"><button type="button" class="btn btn-info" >Back to Categories</button></RouterLink>
            </form>
        </div>
        <div class="col"></div>
    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'



    export default {

        data() {
            return {
                category: null,
                id: null
            }
        },
        props: ["baseURL","categories"],
        methods: {
            async editCategory() {
                delete this.category["products"]
                console.log('category', this.category)
                await axios.post(this.baseURL+"category/update/"+this.id, this.category)
                .then((res) => {
                    this.$emit("fetchData");
                    swal ({
                        text: "category has been updated successfully",
                        icon: "success"
                    })
                }).catch((err) => console.log("err",err))
            }

        },
        mounted(){
            this.id = this.$route.params.id;
            this.category = this.categories.find(category => category.id == this.id)
        }
    }
</script>

<style scoped>
.btn {margin: 10px;}
.card-img-top {
        object-fit: cover;
    }
.row { margin-top: 10px;}

</style>