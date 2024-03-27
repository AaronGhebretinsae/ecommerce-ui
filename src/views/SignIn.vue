<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center pt-3">
                <!-- Display Logo -->
                
            </div>
        </div>

        <!-- Header -->
        <div class="row">
            <div class="col-12 justify-content-center d-flex flex-row text-center pt-5">
                <div id="signin-div" class="flex-item border">
                    <h2 class="pt-4">Sign In</h2>
                    <form @submit="signin" class="pt-4 pl-4 pr-4">
                        <div class="form-group">
                            <label for="Email">Email</label>
                            <input type="Email" class="form-control" v-model="email" required/>
                        </div>
                        
                        <!-- password -->
                        <div class="form-group">
                            <label for="Password">Password</label>
                            <input type="Password" class="form-control" v-model="password" required/>
                        </div> 
                        <small class="form-text text-muted">By continuing, you agree to A-a-ron's Conditions of Use and Privacy Notice.</small>
                        <button class="btn btn-primary mt-2 mb-2">Continue</button>
                       
                    </form>
                    <hr>
                    <small class="form-text text-muted pt-2 pl-4 text-center">
                        New to A-a-ron's Ecommerce Store?
                    </small>
                    <p class="text-center">
                        <router-link :to="{name:'SignUp'}"
                        class="btn btn-light border text-center mx-auto px-5 py-1 mb-2"
                        >Create a New Account</router-link>
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
                password: null,
                token: null,
              
            }
        },

        methods: {
           async signin(e) {
                e.preventDefault();
             
                    // call signup api
                    const signInDto = {
                        email: this.email,
                        password: this.password,
                    }
                    await axios.post(this.baseURL+'user/signIn', signInDto)
                    .then((res) => {
                        this.token = res.data.token;
                        this.$router.replace('/');
                        swal({
                            text: "Signed In Successfully",
                            icon: "success",
                        });
                    }).catch(err => {  
                            console.log('err',err, this.token);
                            swal({
                                text:"Password is incorrect",
                                icon: "error",
                                })
                        });

                    // show error
                    
                

            }
        }
    }
</script>

<style scoped>
.btn-primary{
    background-color: rgb(248, 229, 60);
    color: black;
    border-color: aliceblue;

}

.btn-primary:hover{
    background-color: rgb(255, 196, 0);
}

@media screen and (min-width: 992px) {
    #signin-div{
        width: 40%;
    }
}
</style>