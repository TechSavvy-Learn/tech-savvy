<script>
    import '@public/css/style.css';
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
    width: 340px;
}
.emailParagraph{
    font-size: 1rem;
}
.imgWrap{
  display: flex;
  gap: 20px;
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
        <img class="pointer" src="public/images/signUp/topics/web.svg" alt="webDesign" >
        <img class="pointer" src="public/images/signUp/topics/engineering.svg" alt="engineering">
        <img class="pointer" src="public/images/signUp/topics/coding.svg" alt="coding">
    </div>
</section>

