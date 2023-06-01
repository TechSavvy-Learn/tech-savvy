<script>

    import '@public/css/style.css';
    import Hamburger from '../../../components/common/Hamburger.svelte';

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
.educationStateZipWrapper{
    display: flex;
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
}
section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
}

</style>

<div id="page-container" class="height-full">
    <Hamburger />
    <main>
        <div class="outterContainer">
            <div class="createContainer"></div>
        </div>
        <div>
            <div class="formWrap">
                <h1>About Tech Savvy</h1>
            </div>
        </div>
        <BackConBtn />
    </main>
</div>
