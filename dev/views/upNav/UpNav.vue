<template>
    <!--<nav class="navbar navbar-default">-->
    <!--<div class="container">-->
    <!--<div class="navbar-header">-->
    <!--<a class="navbar-brand" href="#"><img src="../../../public/img/logo.png" class="img-responsive"-->
    <!--id="logo"-->
    <!--alt="Image"></a>-->
    <!--<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">-->
    <!--<span class="icon-bar"></span>-->
    <!--<span class="icon-bar"></span>-->
    <!--<span class="icon-bar"></span>-->
    <!--</button>-->

    <!--</div>-->
    <!--<div class="collapse navbar-collapse" id="myNavbar">-->
    <!--<ul class="nav navbar-nav navbar-left">-->
    <!--<li><a href="#myPage">יציאה</a></li>-->
    <!--<li><a href="#band">רשימת חברים</a></li>-->
    <!--<li><a href="#faq">שאלות נפוצות</a></li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</div>-->
    <!--</nav>-->

    <!--<nav class="navbar navbar-custom navbar-fixed-top" role="navigation">-->
    <!--<div class="container">-->
    <!--<div class="navbar-header">-->
    <!--<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">-->
    <!--Menu <i class="fa fa-bars"></i>-->
    <!--</button>-->
    <!--<a class="navbar-brand page-scroll" href="#page-top">-->
    <!--<i class="fa fa-play-circle"></i> <span class="light">יומני</span>-->
    <!--</a>-->
    <!--</div>-->

    <!--&lt;!&ndash; Collect the nav links, forms, and other content for toggling &ndash;&gt;-->
    <!--<div class="collapse navbar-collapse navbar-right navbar-main-collapse">-->
    <!--<ul class="nav navbar-nav">-->
    <!--&lt;!&ndash; Hidden li included to remove active class from about link when scrolled up past about section &ndash;&gt;-->
    <!--<li class="hidden">-->
    <!--<a href="#page-top"></a>-->
    <!--</li>-->
    <!--<li>-->
    <!--<a class="page-scroll" href="#about">התחבר</a>-->
    <!--</li>-->
    <!--<li>-->
    <!--<a class="page-scroll" href="#download">אודות</a>-->
    <!--</li>-->
    <!--<li>-->
    <!--<a class="page-scroll" href="#contact">צור קשר</a>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--&lt;!&ndash; /.navbar-collapse &ndash;&gt;-->
    <!--</div>-->
    <!--&lt;!&ndash; /.container &ndash;&gt;-->
    <!--</nav>-->


    <nav class="navbar navbar-default navbar-inverse" role="navigation" style="direction: rtl">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">

                    <!--<li><a href="#">מידע</a></li>-->
                    <!--<li class="dropdown">-->
                    <!--<a href="#" class="dropdown-toggle" data-toggle="dropdown">גלילה <span class="caret"></span></a>-->
                    <!--<ul class="dropdown-menu" role="menu">-->
                    <!--<li><a href="#">אודותינו</a></li>-->
                    <!--<li><a href="#">Another action</a></li>-->
                    <!--<li><a href="#">Something else here</a></li>-->
                    <!--<li class="divider"></li>-->
                    <!--<li><a href="#">Separated link</a></li>-->
                    <!--<li class="divider"></li>-->
                    <!--<li><a href="#">One more separated link</a></li>-->
                    <!--</ul>-->
                    <!--</li>-->
                </ul>
                <!--<form class="navbar-form navbar-left" role="search">-->
                <!--<div class="form-group">-->
                <!--<input type="text" class="form-control" placeholder="Search">-->
                <!--</div>-->
                <!--<button type="submit" class="btn btn-default">הרשם</button>-->
                <!--</form>-->
                <ul class="nav navbar-nav ">
                    <!--<li><p class="navbar-text">כבר יש לך חשבון?</p></li>-->
                    <li v-show="!isConnect" class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><b>כניסה</b> <span
                                class="caret"></span></a>
                        <ul id="login-dp" class="dropdown-menu">
                            <li>
                                <div class="row">
                                    <div class="col-md-12">
                                        באמצעות כניסה
                                        <div class="social-buttons">
                                            <a href="#" class="btn btn-fb"><i class="fa fa-facebook"></i> Facebook</a>
                                            <a href="#" class="btn btn-tw"><i class="fa fa-twitter"></i> Twitter</a>
                                        </div>
                                        או
                                        <form class="form" v-on:submit.prevent="onSubmit" id="login-nav">
                                            <div class="form-group">
                                                <label class="sr-only" for="exampleInputEmail2">הכנס מייל</label>
                                                <input type="email" class="form-control" id="exampleInputEmail2"
                                                       v-model="form.email" placeholder="כתובת מייל" required>
                                            </div>
                                            <div class="form-group">
                                                <label class="sr-only" for="exampleInputPassword2">סיסמא</label>
                                                <input type="password" class="form-control" id="exampleInputPassword2"
                                                       v-model="form.password" placeholder="סיסמא" required>
                                                <div class="help-block text-right"><a href="">שכחת סיסמא?</a></div>
                                            </div>
                                            <div class="form-group">
                                                <button type="submit" class="btn btn-primary btn-block">הכנס</button>
                                            </div>
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox"> שמור אותי מחובר
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="bottom text-center">
                                        חדש כאן ? <a href="#register"><b>הרשם</b></a>
                                    </div>
                                </div>
                            </li>

                        </ul>

                    </li>
                    <li v-if="isConnect"><a href="#main">{{hello}}</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-left">
                    <li class="active" v-if="isConnect"><a @click="disconnect">התנתק</a></li>

                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>


</template>
<script>
    import userModule from "../../store/module/user.module"

    export default {
        components: {},
        props: [],
        data () {
            return {
                form: {},
            }
        },
        computed: {
            hello: function () {
                if (this.$store.state.userModule.nowUser != null)
                    return 'שלום ' + this.$store.state.userModule.nowUser.name + ', לחץ לעריכת יומנים'
                return null
            },
            isConnect: function () {
                if (this.$store.state.userModule.nowUser != null) return true
                return false
            }

        },
        methods: {
            onSubmit(){
//                alert("submit")
                this.$store.dispatch(userModule.types.LOGIN, this.form);


            },
            disconnect(){
                this.$store.dispatch(userModule.types.LOGOUT);

            }

        },
        created(){

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
    #login-dp {
        min-width: 250px;
        padding: 14px 14px 0;
        overflow: hidden;
        background-color: rgba(255, 255, 255, .8);
    }

    #login-dp .help-block {
        font-size: 12px
    }

    #login-dp .bottom {
        background-color: rgba(255, 255, 255, .8);
        border-top: 1px solid #ddd;
        clear: both;
        padding: 14px;
    }

    #login-dp .social-buttons {
        margin: 12px 0
    }

    #login-dp .social-buttons a {
        width: 49%;
    }

    #login-dp .form-group {
        margin-bottom: 10px;
    }

    .btn-fb {
        color: #fff;
        background-color: #3b5998;
    }

    .btn-fb:hover {
        color: #fff;
        background-color: #496ebc
    }

    .btn-tw {
        color: #fff;
        background-color: #55acee;
    }

    .btn-tw:hover {
        color: #fff;
        background-color: #59b5fa;
    }

    @media (max-width: 768px) {
        #login-dp {
            background-color: inherit;
            color: #fff;
        }

        #login-dp .bottom {
            background-color: inherit;
            border-top: 0 none;
        }
    }
</style>