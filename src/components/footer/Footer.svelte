<style>

    footer {
        gap: 2rem;
        padding: 5.5rem 8rem;
        background-color: var(--dark-gray-blue);
    }

    footer a {
        color: white;
        text-decoration: none;
    }

    .copyright p {
        font-size: 2em;
        color: white;
    }

    .social-media-container {
        flex-wrap: wrap;
    }

    .social-media {
        min-width: 20rem;
    }

    .social-media img {
        max-width: 3rem;
    }

    @media (max-width: 700px) {

        .social-media {
            width: 100%;
        }
    }

</style>

<footer class="flex column">
    <section class="links flex width-full justify-space-between">
        <div class="navigation flex column">
            <a href="/">Home</a>
            <a href="/">Parents</a>
            <a href="/">Educators</a>
            <a href="/">Kids</a>
        </div>
        <div class="support flex column">
            <a href="/">Support</a>
            <a href="/">FAQs</a>
            <a href="/">Contact Us</a>
            <a href="/">My Account</a>
        </div>
    </section>
    <hr>
    <section class="social-media-container flex justify-space-between width-full gap-2rem">
        <div class="copyright">
            <p>© 2023 TechSavvy</p>
        </div>
        <div class="social-media flex justify-space-between gap-2rem">
            <img src="icons/square-facebook.svg" alt="">
            <img src="icons/instagram.svg" alt="">
            <img src="icons/tiktok.svg" alt="">
            <img src="icons/pinterest.svg" alt="">
        </div>
    </section>
</footer>