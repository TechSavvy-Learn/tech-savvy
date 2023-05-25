<script>

    import '@public/css/style.css';
    import BackConBtn from '@components/common/BackConBtn.svelte';
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
                <form action="subimt">
                    <div class="fullName">
                        <label for="name"><p>Full Name</p></label>
                        <input type="text" name="name" id="fullName">
                    </div>
                    <div class="educationStateZipWrapper">
                        <div class="educationStateZip">
                            <label for="name"><p>Your Level of Education</p></label>
                            <input type="text" name="name" id="fullName" class="education">
                            <label for="name"><p>State</p></label>
                            <input type="text" name="name" id="fullName" class="state">
                            <label for="name"><p>Zip Code</p></label>
                            <input type="text" name="name" id="fullName" class="zip">
                        </div>
                    </div>
                    <div class="email">
                        <label for="name"><p>Email</p></label>
                        <input type="text" name="name" id="fullName">
                    </div>
                    <div class="passwords">
                        <label for="name"><p>Password</p></label>
                        <input type="text" name="name" id="fullName">
                        <label for="name"><p>Confirmed Password</p></label>
                        <input type="text" name="name" id="fullName">
                    </div>
                </form>
            </div>
        </div>
        <BackConBtn />
    </main>
</div>
