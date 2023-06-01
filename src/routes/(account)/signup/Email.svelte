<script>
import '@public/css/style.css';
  import { onMount } from 'svelte';

  onMount(() => {
    const inputFields = document.querySelectorAll('input[type="number"]');
    
    inputFields.forEach((input, index) => {
      input.addEventListener('input', (event) => {
        const currentInput = event.target;
        const value = currentInput.value;
        
        if (value.length === 1 && index < inputFields.length - 1) {
          inputFields[index + 1].focus();
        }
      });
    });
  });

  function showPopUp() {
    alert("Verification code resent!");
  }

</script>

<style>
input {
    height: 33px;
    width: 27px;
    background-color: var(--light-gray);
    border: none;
    border-radius: 5px;
    margin: 3px 3px 3px 0px;
}
.formWrap{
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
}
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
}
.container h1{
    font-weight: 400;
    font-size: 2rem;
}
.container img {
    width: 340px;
}
.emailParagraph{
    font-size: 1rem;
}
.confirmation-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 20px;
    margin-left: 32%;
}
.confirmation-container{
    display: flex;
}
.noCode{
    margin-top: 5px;
}
.resend{
    display: flex;
    justify-content:baseline;
    align-items: baseline;
    gap: 5px;
}
.resend a{
    color: var(--gray-blue);
    font-weight: 550;
}
@media only screen and (max-width: 500px) {
  .formWrap {
    gap: 20px;
  }
  form{
    width:70dvw;
  }
  section h1{
    font-weight: 400;
    font-size: 5dvw;
}
  section img {
    width: 80%;
}
}
a{
    text-decoration: none;
}
</style>
<section class="container">
    <h1>Create an Account</h1>
    <img src="public/images/signUp/circle-dash/email.svg" alt="emailSvg">
    <h1>Email Verification</h1>
    <div class="ptag">
        <p class="emailParagraph">We have sent you a verification code to example@emailcom.<br>
            Please check your inbox and enter the verification code below to continue.
        </p>
    </div>
</section>
<section class="confirmation-wrapper">
    <div class="confirmation-container">
        <p class="confirmationCode">Confirmation Code</p>
    </div>
    <div class="formWrap">
        <form action="subimt">
            <input type="number" name="email-one" id="email-one">
            <input type="number" name="email-two" id="email-two">
            <input type="number" name="email-three" id="email-three">
            <input type="number" name="email-four" id="email-four">
            <input type="number" name="email-five" id="email-five">
            <input type="number" name="email-six" id="email-six">
        </form>
    </div>
    <div class="resend">
        <p class="noCode">Didn't receive a code?</p>
        <a href="/emailVerification" on:click|preventDefault={showPopUp}>Click Here to resend</a>
        </div>
</section>