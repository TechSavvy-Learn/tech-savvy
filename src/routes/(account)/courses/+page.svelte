<script>

    import '@public/css/style.css';
    import Hamburger from '../../../components/common/Hamburger.svelte';

</script>

<style>
.formWrap{
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 150px;
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
                <h1>Courses</h1>
            </div>
        </div>
    </main>
</div>
