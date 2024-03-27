<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center pt-3">
                <!-- Display Logo -->
                
            </div>
        </div>

        <!-- Header -->
        <div class="row">
            <div class="col-12 justify-content-center d-flex flex-row text-center text-center pt-3">
                <div id="signup-div" class="flex-item border">
                    <h2 class="pt-4 pl-4">Create Account</h2>
                    <form @submit="signup" class="pt-4 pl-4 pr-4">
                        <div class="form-group">
                            <label for="Email">Email</label>
                            <input type="Email" class="form-control" v-model="email" required/>
                        </div>
                        <div class="form-row">
                            <div class="col">
                                <div class="form-group">
                                    <label >First Name</label>
                                    <input type="text" class="form-control" v-model="firstName" required/>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label >Last Name</label>
                                    <input type="text" class="form-control" v-model="lastName" required/>
                                </div>
                            </div>
                        </div>

                        <!-- password -->
                        <div class="form-group">
                            <label for="Password">Password</label>
                            <input type="Password" class="form-control" v-model="password" required/>
                        </div> 

                        <!-- confirm password -->
                        <div class="form-group">
                            <label for="Password">Confirm Password</label>
                            <input type="Password" class="form-control" v-model="passwordConfirm" required/>
                        </div> 

                        <button class="btn btn-primary mt-2 mb-2">Create Account</button>
                       
                    </form>
                    <hr>
                    <small class="form-text text-muted pt-2 pl-4 text-center">
                        Already Have an Account?
                    </small>
                    <p class="text-center">
                        <router-link :to="{name:'SignIn'}"
                        class="btn btn-light border text-center mx-auto px-5 py-1 mb-2"
                        >Log In</router-link>
                    </p>
                </div>
            </div>
        </div>


        <!-- Form -->
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

    export default {
        props:["baseURL"],
        data() {
            return{
                email: null,
                firstName: null,
                lastName: null,
                password: null,
                passwordConfirm: null,
            }
        },

        methods: {
           async signup(e) {
                e.preventDefault();
                if(this.password === this.passwordConfirm) {
                    // call signup api
                    const user = {
                        email: this.email,
                        firstName: this.firstName,
                        lastName: this.lastName,
                        password: this.password,
                    }
                    await axios.post(this.baseURL+'user/signup', user)
                    .then(() => {
                        this.$router.replace('/');
                        swal({
                            text: "User Signup Successful, Please Login",
                            icon: "success",
                        });
                    }).catch(err => console.log('err',err));
                }else {
                    // show error
                    swal({
                        text:"Passwords Do Not Match",
                        icon: "error",
                    })
                }

            }
        }
    }
</script>

<style scoped>
.btn-primary{
    background-color:rgb(248, 229, 60);
    color: black;
    border-color: aliceblue;

}

.btn-primary:hover{
    background-color: rgb(255, 196, 0);
}

@media screen and (min-width: 992px) {
    #signup-div{
        width: 40%;
    }
}
</style>