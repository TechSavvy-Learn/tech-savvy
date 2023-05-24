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
    <section class="landing-about">
    </section>
</div>