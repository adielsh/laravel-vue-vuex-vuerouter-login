<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="jumbotron">
                    <h2>
                       main page
                    </h2>                
                </div>
            </div>
        </div>     
   </div>
</template>

<script>

    import userModule from "../store/module/user.module"

    export default {
        components: {},
        props: [],
        data () {
            return {          
            }
        },
        computed: {
           
        },
        methods: {},
        created()
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
