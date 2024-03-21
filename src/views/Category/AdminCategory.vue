/* eslint-disable */
<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">Categories</h3>
                <router-link :to="{ name:'AddCategory'}">
                <button class="btn btn-primary float-right">Add Category</button></router-link>
            </div>
        </div>

        
    
        <div class="row">
            <div 
            v-for="category of categories" 
            :key="category.id" class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
            <CategoryBox :category="category"></CategoryBox>
            </div>
        </div>
      
    </div>
</template>


<script>
 
import CategoryBox from "../../components/Category/CategoryBox.vue";
 //const swal = require('sweetalert')
export default {

    name: "AdminCategory",
    props:["categories"],
    components: {CategoryBox},
    
   
    data () {
        return{
        
           
        };
    },
    methods: {
    },
    mounted() {
       
    }
};
</script>

<style scoped></style>