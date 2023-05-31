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
.agesContainer{
    display: flex;
    gap: 10px;
}
.agesInner{
    display: flex;
    flex-direction: column;
}
.line{
    background-color: var(--gray-blue);
    width: 100%;

}
.levelToggle{
    display: flex;
    gap: 10px;
}
.toggle{
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white-col);
    font-size: 18px;
    background-color: var(--gray-blue);
    width: 180px;
    height: 90px;
    border-radius: 5px;
}
</style>

<section class="container">
    <h1>Create an Account</h1>
    <img src="public/images/signUp/circle-dash/level.svg" alt="emailSvg">
    <h1>How tech savy are you?</h1>
    <div class="agesContainer">
        <div class="agesInner">
            <p>AGES 7 - 12</p>
            <hr style="height:3px;border-width:0;color:gray;background-color:gray">
        </div>
        <div class="agesInner">
            <p>AGES 7 - 12</p>
            <div class="line"></div>
        </div>
    </div>
    <div class="levelToggle">
        <div class="toggle">BEGINNER</div>
        <div class="toggle">INTERMEDIATE</div>
        <div class="toggle">ADVANCED</div>
    </div>
</section>

