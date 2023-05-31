<script>

    import '@public/css/style.css';

</script>

<style>
input {
    height: 40px;
}
.formWrap{
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 150px;
}
.fullName input{
    width: 100%;
}
.educationStateZip{
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
}
.education {
    flex: 2;
}
.state{
    flex: 1;
}
.zip{
    flex: 1;
}
.email input{
    width: 100%;
}
.passwords{
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
}
.password{
    width: 100%;
    flex:1;
}
.confirmPassword{
    width: 100%;
    flex: 1;
}
section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
}
section h1{
    font-weight: 400;
    font-size: 2rem;
}
section img {
    width: 340px;
}

@media only screen and (max-width: 500px) {
  .formWrap {
    flex-direction: column;
    gap: 20px;
  }
  form{
    width:70dvw;
  }
  .educationStateZip {
    flex-direction: column;
  }
  .education,
  .state,
  .zip {
    width: 100%;
  }
  .passwords {
    flex-direction: column;
  }
  .password,
  .confirmPassword {
    width: 100%;
  }
  section h1{
    font-weight: 400;
    font-size: 5dvw;
}
  section img {
    width: 80%;
}
}
</style>
<section class="container">
    <h1>Create an Account</h1>
    <img src="public/images/signUp/circle-dash/signup.svg" alt="signSvg">
    <h1>General Information</h1>
    <div class="formWrap">
        <form action="subimt">
            <div class="fullName">
                <label for="name"><p>Full Name</p></label>
                <input type="text" name="name" id="fullName">
            </div>
                <div class="educationStateZip">
                    <div>
                        <label for="education"><p>Your Level of Education</p></label>
                        <input type="text" name="education" id="education" class="education">
                    </div>
                    <div>
                        <label for="state"><p>State</p></label>
                        <input type="text" name="state" id="state" class="state">
                    </div>
                    <div>
                        <label for="zip"><p>Zip Code</p></label>
                        <input type="text" name="zip" id="zip" class="zip">
                    </div>
                </div>
            <div class="email">
                <label for="email"><p>Email</p></label>
                <input type="email" name="email" id="email">
            </div>
            <div class="passwords">
                <div class="password">
                    <label for="password"><p>Password</p></label>
                    <input type="password" name="password" id="password" class="password">
                </div>
                <div class="confirmPassword">
                    <label for="confirmPassword"><p>Confirm Password</p></label>
                    <input type="password" name="confirmPassword" id="confirmPassword" class="confirmPassword">
                </div>
            </div>
        </form>
    </div>
</section>