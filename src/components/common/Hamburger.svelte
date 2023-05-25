<script>

    import '@public/css/style.css';
    let isMenuOpen = false;

    function toggleMenu(){
        isMenuOpen = !isMenuOpen;
    }

    let current = 0;
</script>
<style>
    .navbar {
        background-color: var(--light-gray-blue);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    .logo {
        margin-left: 6vw;
    }
    @media only screen and (max-width: 767px){
        nav {
            display: none;
        }
        nav.open{
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: var(--light-gray-blue);
            width: 100%;
        }
    }
    .navBtns {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 5vh;
        margin-top: 2vh;
        margin-bottom: 4vh;
        list-style: none;
        font-size: 1.1rem;
    }
    .current {
        position: relative;
    }
    .current::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--dark-gray-blue);
    }
    .burger {
        height: 28px;
        aspect-ratio: 1;
        border: 2px solid var(black);
        background-color: transparent;
        border-radius: 5px;
        margin-right: 6vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .burger > div {
        height: 2px;
        width: 14px;
        background-color: var(--dark-gray-blue);
        position: absolute;
    }

    .bar-1 {
        transform: translateY(-5px);
    }
    .bar-3 {
        transform: translateY(5px);
    }
    a {
        color: var(--dark-gray-blue);
        font-size: 1.8rem;
        text-decoration: none;
    }
    button{
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }

    @media only screen and (min-width: 768px){
        .logo{
            margin-left: 3vw;
        }
        .burger{
            display: none;
        }
        nav {
            display: block;
            position: relative;
        }
        .navBtns{
            margin: 0;
            flex-direction: row;
            gap: 2vw;
        }
        .lastItem{
            margin-inline: 2vw;
        }
    }
</style>
<div class="navbar">
    <a href="/"><h1 class="nav-title logotext logo"><span>TECH</span>SAVVY</h1></a>
    <nav class:open={isMenuOpen}>
        <section class="navBtns">
            <button on:click={() => (isMenuOpen = false)}>
                <a class:current={current === 0} on:click={()=> (current = 0)} href="/courses" class="nav-item lastItem">Courses</a>
            </button>
            <button on:click={() => (isMenuOpen = false)}>
                <a class:current={current === 1} on:click={()=> (current = 1)} href="/about" class="nav-item">About</a>
            </button>
            <button on:click={() => (isMenuOpen = false)}>
                <a class:current={current === 2} on:click={()=> (current = 2)} href="/signup" class="nav-item signup">Sign Up</a>
            </button>
            <button on:click={() => (isMenuOpen = false)}>
                <a class:current={current === 3} on:click={()=> (current = 3)} href="/login" class="nav-item lastItem">Login</a>
            </button>
        </section>
    </nav>
    <button class="burger pointer" on:click={toggleMenu}>
        <div class="bar-1"></div>
        <div class="bar-2"></div>
        <div class="bar-3"></div>
    </button>
</div>




