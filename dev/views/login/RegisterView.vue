<template>
    <div>

        <h1>
            הרשמה
        </h1>

        <form id="registerform" class="form-horizontal" v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="name" class="col-xs-3 control-label">שם:</label>
                <div class="col-xs-9"><input required type="name" class="form-control" id="name"
                                             v-model="form.name"></div>

            </div>
            <div class="form-group">
                <label class="col-xs-3 control-label" for="name">שם משפחה:</label>
                <div class="col-xs-9"><input required type="family" class="form-control" id="family"
                                             v-model="form.family"></div>

            </div>

            <div class="form-group">
                <label class="col-xs-3 control-label" for="email">דוא"ל</label>
                <div class="col-xs-9"><input required type="email" class="form-control" id="email"
                                             v-model="form.email"></div>
            </div>

            <div class="form-group">
                <label class="col-xs-3 control-label" for="cellular">פלאפון:</label>
                <div class="col-xs-9"><input required type="cellular" class="form-control" id="cellular"
                                             v-model="form.cellular"></div>
            </div>
            <div class="form-group">
                <label class="col-xs-3 control-label" for="password"> סיסמא:</label>
                <div class="col-xs-9"><input required type="password" class="form-control" id="password"
                                             v-model="form.password"></div>
            </div>
            <div class="form-group">
                <label class="col-xs-3 control-label" for="reenteredPassword"> אימות סיסמא</label>
                <div class="col-xs-9"><input required type="password" class="form-control" id="reenteredPassword"
                                             v-model="reenteredPassword">
                    <!--<div v-show="validation.reenteredPassword.dirty">-->
                    <div v-show="notMatchPassword">סיסמאות לא תואמות</div>
                    <!--</div>-->
                </div>

            </div>

            <div class="form-group">
                <div class="col-xs-9">
                    <button type="submit" class="btn btn-primary">הרשם </button>
                </div>
            </div>

        </form>
    </div>
</template>

<script>
    import usersModule from "../../store/module/user.module"

    export default {
        props: ["form1"],
        components: {
//            "modal-compo": require("../../components/ModalVue.vue"),

        },
        data () {
            return {
                form: {},
                reenteredPassword: '',

            }
        },
        computed: {
            notMatchPassword: function () {
//                console.log(this.form.password)
//                console.log(this.reenteredPassword)
                return this.form.password != this.reenteredPassword && this.form.password != null
            }
        },
        validator: {
            validates: {
                match: function (v, result) {
                    return result
                }
            }
        },
        methods: {
            onSubmit: function () {
                console.log(this.form.ios, "formios")
//                console.log(this.form)
                this.error = null;
//                Object.assign(this.form, this.temp)
                this.form.confirm = 0;

                if (!this.notMatchPassword) {
                    console.log(this.form, "this.form")
                    this.$store.dispatch(usersModule.types.SAVE, this.form);
//                this.$store.commit(therapistsModule.types.CREATE);
//                this.$emit('close')
//                this.$emit('fetch')
                }
                else {
                    alert('סיסאות לא תואמות')
                }
            },

            onDataToggleChanged(){
                console.log("onDataToggleChanged")
//                this.$store.dispatch(therapistsModule.types.SAVE, this.form);


            },

        },
        created(){
//            this.form.ios = 0
//            Object.assign(this.temp, this.form)
//            console.log(this.temp)

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

    #registerform {
        width: 30%;
        left: -41%;
        position: relative;

    }
</style>