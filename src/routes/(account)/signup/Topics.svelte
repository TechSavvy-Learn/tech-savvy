<script>
    import '@public/css/style.css';
    import { onMount } from 'svelte';

  onMount(() => {
    const inputFields = document.querySelectorAll('input[type="password"]');
    
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

  onMount(() => {
    const inputFields = document.querySelectorAll('input[type="password"]');
    
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

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css" >
</svelte:head>

<style>
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
.imgWrap{
  display: flex;
  gap: 20px;
  width: 60%;
}
.imgWrap img{
  width: 250px;
}
</style>

<section class="container">
    <h1>Create an Account</h1>
    <img src="public/images/signUp/circle-dash/topics.svg" alt="emailSvg">
    <h1>What do you want to learn?</h1>
    <div class="ptag">
        <p class="emailParagraph">You can always switch paths later on!
        </p>
    </div>
    <div class="imgWrap">
        <img src="public/images/signUp/topics/web.svg" alt="webDesign">
        <img src="public/images/signUp/topics/engineering.svg" alt="engineering">
        <img src="public/images/signUp/topics/coding.svg" alt="coding">
    </div>
</section>

