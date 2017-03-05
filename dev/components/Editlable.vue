<template>
    <div>
        <span @click="toggle=!toggle" v-if="!toggle"> <h1>{{text}} <i class="fa fa-pencil"
                                                                      aria-hidden="true"></i></h1></span>
        <input type="text" class="form-control col-xs-4" v-model="text" v-if="toggle" @blur="toggle=!toggle">
    </div>
</template>

<script>


    export default {
        props: ["text"],
        components: {},
        data () {
            return {
//                dataa: this.texto,
                toggle: false,
//                dataa: this.text
            }
        }

        ,
        computed: {}
        ,
        methods: {}
        ,
        created()
        {

        }
        ,
        mounted()
        {
        }
        ,
        updated()
        {
        }
        ,
        destroyed()
        {
        }
    }
</script>

<style>

</style>