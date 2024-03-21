<template>
  <div id="home">
    <div id="background-div" class="page-holder bg-cover">
      
      <!--Welcome Banner-->

      <div class="container py-5">
        <header class="text-left text-white py-5">
          <h3 class="mb-4 rounded text-white" id="heading">
            <a href="#start-shopping" class="bg-white px-2 py-2 rounded">Start Shopping</a>
          </h3>
          <p class="lead mb-0 bg-dark p-1 rounded"> Demo Ecommerce</p>
        </header>
      </div>
      <hr />

      
    </div>

    <!--Display Categories-->

    <div class="container">
        <div class="row">
          <div class="col-12 text-Center">
            <h2 class="pt-3">Top Categories</h2>
          </div>
        </div>

        <div class="row">
          <div v-for="index in this.categorySize" :key="index" class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <CategoryBox  :category="categories[index-1]" />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

import CategoryBox from '@/components/Category/CategoryBox.vue';
export default {
  name: 'HomeView',
  components: {CategoryBox},
  props: ["categories"],
  data() {
    return{
      categorySize: 0,
    }
  },
  mounted() {
    this.categorySize = Math.min(6, this.categories.length);
  }
}
</script>

<style>
#heading {
  font-weight: 400;
}
.page-holder {
  min-height: 100vh;
}
.bg-cover {
  background-size: cover !important;
}
#background-div {
  background: url("../assets/blake-wisz-Xn5FbEM9564-unsplash.jpg");
}
</style>
