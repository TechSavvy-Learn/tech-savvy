<script>
    const TOPICS = [
        {
            title: 'WEB DESIGN',
            description: 'Learn the basics of web design, including HTML, CSS, and cool design tricks.Get creative with hands-on activities and build your own awesome websites.'
        },
        {
            title: 'ENGINEERING',
            description: 'Discover the fascinating world of engineering as you dive into hands-on projects and experiments. Learn about design, problem-solving, and teamwork while building amazing structures and inventions.'
        },
        {
            title: 'CODING',
            description: 'Dive into the captivating world of programming as you learn the basics of coding languages like Python and JavaScript. Unleash your problem-solving skills, create awesome games and interactive projects.'
        },
        {
            title: 'HTML',
            description: 'Dive into the world of coding as you learn HTML, the language that powers the internet. Discover how to create and structure web pages, add text, images, and links, and bring your own creative ideas to life.'
        },
        {
            title: 'CSS',
            description: "In this exciting course, you'll learn CSS, the magic behind making web pages look amazing. Discover how to add colors, fonts, and eye-catching layouts to your web creations."
        },
        {
            title: 'JavaScript',
            description: 'Dive into the world of coding and learn JavaScript, the language that adds life to web pages. Discover how to create dynamic and interactive elements, build fun games, and make your web projects come alive.'
        }
    ]
</script>

<div class="landing-container">
    <section class="landing-hero flex column gap-2rem">
        <h2>Tech E-Learning: Empowering Young Innovators for the Future!</h2>
        <p>Discover the Thrilling World of Technology with Engaging E-Learning Courses Designed Just for Kids!</p>
        <a href="/login" style="width: 110px"><button class="borderless pointer">Getting Started</button></a>
    </section>
    <section class="landing-explore flex column align-center justify-center">
        <h1>EXPLORE OUR EXCITING TECH COURSES</h1>
        <div class="topics flex wrap justify-center">
            {#each TOPICS as topic}
                <div class="topic">
                    <h2 class="text-center">{topic.title}</h2>
                    <p>{topic.description}</p>
                </div>
            {/each}
        </div>
    </section>
    <section class="landing-about grid place-center gap-4rem">
        <div class="about-heading">
            <h1 class="text-center">Why Kids and Young Adults Should Learn Tech with</h1>
            <h1 class="text-center logo">TECH<span>SAVVY</span></h1>
        </div>
        <div class="about-container flex">
            <div class="about-card flex column align-center">
                <div class="icon-container">
                    <img src="icons/school-solid.svg" alt="">
                </div>
                <h2>Free Education</h2>
                <p>We offer completely free education in the field of technology, ensuring that knowledge is accessible to all aspiring learners.</p>
            </div>
            <div class="about-card flex column align-center">
                <div class="icon-container">
                    <img src="icons/laptop-code-solid.svg" alt="">
                </div>
                <h2>Online Learning</h2>
                <p>Our courses are delivered through a convenient online platform, allowing learners to access educational materials and engage in interactive lessons from anywhere, at any time.</p>
            </div>
            <div class="about-card flex column align-center">
                <div class="icon-container">
                    <img src="icons/trophy-solid.svg" alt="">
                </div>
                <h2>Engaging Content</h2>
                <p>We believe in making learning enjoyable and engaging. Our courses are designed to be interactive, incorporating practical examples, hands-on exercises, and multimedia elements to enhance the learning experience.</p>
            </div>
        </div>
    </section>
</div>