<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css" >
</svelte:head>
<style>
a{
    text-decoration: none;
}
button, input[type= submit] {
    background-color: var(--gray-blue);
    color: white;
    border-radius: 8px;
    font-size: 1.8rem;
    font-weight:500;
    cursor: pointer;
    width: 140px;
    height: 42px;
    border: none;
}
.btnWrapper{
    display: flex;
    justify-content: space-between;
    margin: 10vh 5% 0 5%;
}
.icons{
    display: none;
}
@media only screen and (max-width: 500px){
button, input[type= submit] {
    background-color: var(--gray-blue);
    color: white;
    border-radius: 8px;
    font-size: 1.8rem;
    font-weight:500;
    cursor: pointer;
    width: 20vw;
    height: 42px;
    border: none;
}
.btnWrapper{
    display: flex;
    justify-content: space-between;
    margin: 10vh 5% 0 5%;
}
.back-continue{
    display: none;
}
.icons{
    display: block;
}
}
</style>
<div class="btnWrapper">
    <a href="/login">
        <button class="back-continue">Back</button>
        <button class="icons"><i class="mi mi-chevron-left"><span class="u-sr-only"></span></i></button>
    </a>
    <a href="/emailVerification">
        <input type="submit" value="Continue" class="back-continue">
        <input type="submit" value=">" class="icons">
    </a>
</div>
