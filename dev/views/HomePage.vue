<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="jumbotron">
                    <h2>
                       main page
                    </h2>
                    <p>
                    
                    </p>
             
                </div>
            </div>

        </div>


            <div class="col-md-4">
                <h2>
                    <div>
                        <span>צור אפליקציית משחק</span>
                    </div>
                </h2>
                <p>
                    Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                    mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                    mollis euismod. Donec sed odio dui.
                </p>
                <p>
                    <a class="btn" href="#">View details »</a>
                </p>
            </div>
            <div class="col-md-4">
                <h2>
                    <div>
                        <span>צור אפליקציה אישית</span>
                    </div>
                </h2>
                <p>
                    Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                    mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                    mollis euismod. Donec sed odio dui.
                </p>
                <p>
                    <a class="btn" href="#">View details »</a>
                </p>
            </div>
            <div class="col-md-4">
                <h2>
                    <div>
                        <span>צור אפליקציה מסחרית</span>
                    </div>
                </h2>
                <p>
                    Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                    mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                    mollis euismod. Donec sed odio dui.
                </p>
                <p>
                    <a class="btn" href="#">View details »</a>
                </p>
            </div>
        </div>


    </div>

</template>

<script>
    //	import jquery from "jquery"
    //	import  "fullpage.js"
    import userModule from "../store/module/user.module"

    export default {
        components: {},
        props: [],
        data () {
            return {
                title: "dfdf"
            }
        },
        computed: {
            message: function () {
                return this.$store.state.msg;
            }
        },
        methods: {},
        created(){


            this.$store.dispatch(userModule.types.GETCONNECT)
        },
        mounted(){

        },
        updated(){
        },
        destroyed(){
        }
    }
</script>

<style>


</style>