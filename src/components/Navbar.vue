<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <!-- Navbar content -->
      <!--    Logo-->
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        <img id="logo" src="@\assets\house-icon.png" />
      </router-link>
      <!--    Burger Button-->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!--      Search Bar-->
        <form class="form-inline ml-auto mr-auto">
          <div class="input-group">
            <input
              size="100"
              type="text"
              class="form-control"
              placeholder="Search Items"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <div class="input-group-prepend">
              <span class="input-group-text" id="search-button-navbar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </form>

        <!-- dropdown for browse -->
        <!-- dropdown for account -->
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a 
            class="nav-link dropdown-toggle" 
            href="#" id="navbarAccount" 
            data-toggle="dropdown">Account</a>
            <div class="dropdown-menu" aria-labelledby="navbarAccount">
              <router-link class="dropdown-item" v-show="key == 0" :to="{name: 'SignUp'}">Sign Up</router-link>
              <router-link class="dropdown-item" v-show="key == 0" :to="{name: 'SignIn'}">Sign In</router-link>
              <router-link class="dropdown-item" v-show="key == 1"  :to="{name: 'Wishlist'}">Wishlist</router-link>
              <router-link class="dropdown-item" :to="{name: 'home'}" v-show="key == 1"  @click="signout">Sign Out</router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  <script>
  export default {
    name: "Navbar",
    data () {
      return{
        key: 0,
      }
    },
    methods: {
      signout() {
        localStorage.removeItem("token");
        this.key = 0;
      },
    },
    mounted () {
      if(localStorage.getItem("token")){
        this.key = 1;
      }
    },
  };
  </script>
  <style scoped>
  #logo {
    width: 70px;
    height: 70px;
    margin-left: 20px;
    margin-right: 20px;

    
  }


  a {
    color: white;
  }

  .navbar-nav a{
    color: black;
  }
  </style>