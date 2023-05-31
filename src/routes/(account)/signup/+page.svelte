<script>

    import '@public/css/style.css';
    import AltNav from './AltNav.svelte';

    // import { writable } from 'svelte/store';
    import Step1 from './SignUp.svelte';
    import Step2 from './Email.svelte';
    import Step3 from './Topics.svelte';
    import Step4 from './TechLevel.svelte';

    let currentStep = 1;
    const components = [Step1, Step2, Step3, Step4];

    function next() {
        if (currentStep < components.length) {
            currentStep++;
        }
    }

    function back() {
        if (currentStep > 1) {
            currentStep--;
        }
    }
</script>

<style>
button {
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
.btnWrapper {
    display: flex;
    justify-content: space-between;
    margin: 10vh 5% 0 5%;
}
.icons {
    display: none;
}
@media only screen and (max-width: 500px){
button {
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

<div id="page-container" class="height-full">
    <nav>
        <AltNav />
    </nav>
    <main>
        <svelte:component this={components[currentStep - 1]} />
    </main>
    <div class="btnWrapper">
        <div>
            <button on:click={back} disabled={currentStep === 1} class="back-continue">Back</button>
            <button on:click={back} disabled={currentStep === 1} class="icons"><i class="mi mi-chevron-left"><span class="u-sr-only"></span></i></button>
        </div>
        <div>    
            <button on:click={next} disabled={currentStep === components.length} class="back-continue">Continue</button>
            <button on:click={next} disabled={currentStep === components.length} class="icons"><i class="mi mi-chevron-right"><span class="u-sr-only"></span></i></button>
        </div>
    </div>
</div>
