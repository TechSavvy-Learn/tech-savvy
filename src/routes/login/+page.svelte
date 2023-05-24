<script>

    import '@public/css/style.css';
    import BackConBtn from '@components/common/BackConBtn.svelte';

</script>

<style>
.container{
    /* height: 930px; */
    display: flex;
}
/* .container img{
    width: 50%;
    left: 3%;
    top: 3%;
} */
.loginbox{
    background-color: var(--desaturated-light-gray-blue);
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-right: 80px;
    box-shadow: 1px 3px 2px rgb(171, 171, 171);;
    border-radius: 20px;
}
img{
    flex: 1;
    width: 50%;
    margin: 13dvh 0 0 5dvh;
    /* height: auto; */
}
.logotext{
    margin-top: 30px;
}
p {
    font-size: 20px;
    font-weight: 300;
}
.login-inputs{
    display: flex;
    flex-direction: column;
    column-gap: 5px;
}
</style>

    <main>
        <div class="container">
            <img src="public/images/login-animation.png" alt="login animation">
            <div class="loginbox">
                <h1 class="nav-title-alt logotext"><span>TECH</span>SAVVY</h1>
                <p>Welcome Back!</p>
                <section class="login-inputs">
                <input type="text" name="username" id="username" placeholder="Username">
                <input type="text" name="password" id="password" placeholder="Password">
                </section>
            </div>
        </div>
    </main>

