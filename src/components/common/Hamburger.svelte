<script>

    import '@public/css/style.css';

</script>
<div class="hamburger">
    <a href="/">
        <h1 class="nav-title-alt logotext"><span>TECH</span>SAVVY</h1>
    </a>
    <section>
        <ul>
            <li><a href="/courses" class="nav-item">Courses</a></li>
            <li><a href="/about" class="nav-item">About</a></li>
            <li><a href="/signup" class="nav-item signup">Sign Up</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
    </section>
    <button class="burger">
        <div class="bar-1"></div>
        <div class="bar-2"></div>
        <div class="bar-3"></div>
    </button>
</div>

<style>
    .hamburger {
        background-color: var(--desaturated-light-gray-blue);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    section{
        position: absolute;
        top: 100%;
        left: 0;
        background-color: var(--desaturated-light-gray-blue);
        width: 100%;
    }
    ul {
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
    .burger {
        height: 28px;
        aspect-ratio: 1;
        border: 2px solid var(--dark-gray-blue);
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
</style>