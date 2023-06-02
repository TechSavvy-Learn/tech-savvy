<script>
    import '@public/css/style.css';
    let designActive = false;
    let engineeringActive = false;
    let codingActive = false;

</script>

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
    width: 300px;
}
.emailParagraph{
    font-size: 1rem;
}
.imgWrap{
  display: flex;
  gap: 20px;
}
.imgWrap input{
  width: 200px;
}
.active{
    box-shadow: 10px 5px 5px var(--light-gray-blue);
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
        <input 
            class="pointer {designActive ? 'active' : ''}" 
            on:click={() => { designActive = !designActive }} 
            type="image" 
            name="webDesign" 
            src="public/images/signUp/topics/web.svg" 
            alt="webDesign"
        >
        <input 
            class="pointer {engineeringActive ? 'active' : ''}" 
            on:click={() => { engineeringActive = !engineeringActive }} 
            type="image" 
            name="webDesign" 
            src="public/images/signUp/topics/engineering.svg" 
            alt="engineering"
        >
        <input 
            class="pointer {codingActive ? 'active' : ''}" 
            on:click={() => { codingActive = !codingActive }} 
            type="image" 
            name="coding" 
            src="public/images/signUp/topics/coding.svg" 
            alt="coding"
        >
    </div>
</section>

