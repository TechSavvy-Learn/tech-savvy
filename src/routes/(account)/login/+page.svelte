<script>

    import '@public/css/style.css';

</script>

<style>
.container{
    display: flex;
}
.loginbox{
    background-color: var(--desaturated-light-gray-blue);
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
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
.welcome-back {
    font-size: 1.8rem;
    font-weight: 300;
}
.login-inputs{
    display: flex;
    flex-direction: column;
    column-gap: 5px;
}
.login-inputs input{
    padding: 10px;
    width: 225px;
    margin: 10px;
    border: 1px solid var(--light-gray);
}
input[type="submit"]{
    background-color: var(--gray-blue);
    border-radius: 3px;
    border: none;
    color: white;
    width: 225px;
    height: 40px;
}
.forgot-signup{
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
}
.forgot-pass{
    color: black;
    text-decoration: none;
    font-size: 1.2rem;
}
.forgot-pass >span{
    color: var(--fire-orange);
}

@media (max-width: 840px) {
    .container {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
}

img {
  flex: 0;
  width: 80%;
  margin: 0;
}

.loginbox {
  background-color: var(--desaturated-light-gray-blue);
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 60px;
  margin-top: 40px;
  box-shadow: 5px 0px 5px rgb(171, 171, 171);
  border-radius: 20px;
}
}

</style>

    <main>
        <div class="container">
            <img src="public/images/login-animation.png" alt="login animation">
            <div class="loginbox">
                <h1 class="nav-title-alt logotext"><span>TECH</span>SAVVY</h1>
                <p class="welcome-back">Welcome Back!</p>
                <section class="login-inputs">
                    <input type="text" name="username" id="username" placeholder="Username">
                    <input type="password" name="password" id="password" placeholder="Password">
                </section>
                <input type="submit" value="Login" class="loginBtn pointer">
                <section class="forgot-signup">
                    <a href="/login" class="forgot-pass"> <span> Forgot username/password?</span></a>
                    <a href="/signup" class="forgot-pass"> Don't have an account? <span>Sign Up</span>.</a>
                </section>
            </div>
        </div>
    </main>

