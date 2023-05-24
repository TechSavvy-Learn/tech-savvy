<script>
    
    import '@public/css/style.css';
    import NavBar from '@components/common/NavBar.svelte';

</script>

<div id="page-container" class="height-full">
    <header>
        <NavBar />
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>

    </footer>
</div>