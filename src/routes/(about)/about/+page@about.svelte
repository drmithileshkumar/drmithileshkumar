<script>
    import Introduction from '$lib/components/Introduction.svelte';
    import Interests from '$lib/components/Interests.svelte';
    import Education from "$lib/components/Education.svelte";
    import Experience from "$lib/components/Experience.svelte";
    import Skills from "$lib/components/Skills.svelte";
    import Research from "$lib/components/Research.svelte";
    import Contact from "$lib/components/Contact.svelte";
    import Papers from "$lib/components/Papers.svelte";
</script>
<style>
    .container {
        padding: 1em;
    }
    .profile {
        position: relative;

    }
    .dp {
        aspect-ratio: 1 / 1;
        width: 15%;
        border-radius: 50%;
        position: absolute;
        top: 60%;
        left: 2%;
        overflow: hidden;
        border: 2px solid black;
        box-shadow: 1px 1px 3px gray;
    }
    .bar {
        height: 1em;
    }
    .intro {
        margin-top: auto;
    }
    .name {
        font-size: 1.3em;
    }
    .welcome {
        display: flex;
        justify-content: flex-start;
        /* align-items: center; */
        flex-direction: column;
        line-height: 1.45;
        word-spacing: 0.1em;
        color: black;
    }
</style>
<svelte:head><title>Dr Mithilesh Kumar</title></svelte:head>
<div class="container">
    <div class="profile">
        <div class="cover">
            <img src="/notes/quantum/teleportation.svg">
        </div>
        <div class="dp">
            <img width="100%" height="100%" src="/favicon.png">
        </div>
    </div>
    <div class="bar"></div>
    <div class="intro">
        <div class="name">
            <a href="/">Dr Mithilesh Kumar</a>
        </div>
        <div class="interests"></div>
    </div>
    <div class="welcome">
        <!-- <h1>Welcome to my page.</h1> -->
        <p>
            Hello, my passion is teaching, but I'm a full-time learner. I'm a self-taught full-stack web developer. In addition, I've master degrees in theoretical physics (<strong>AIR 971, IIT Kanpur</strong>) and theoretical computer science (<strong>Gold Medalist, CMI, Chennai</strong>). I've done PhD in parameterized algorithms (<strong>UiB, Norway</strong>) and Post Doctoral research (<strong>Simula-UiB, Norway</strong>) in quantum-safe cryptography. I taught quantum algorithm to my research group at Simula-UiB. My goal is to contribute to the society by teaching young ones what I have learnt so far and learn from them in return. ( <a href="/cv">My CV</a> )
        </p>
    </div>
    <br>
    <Introduction />
    <!-- <Interests /> -->
    <Education />
    <!-- <Experience /> -->
    <Research />
    <Skills />
    <!-- <Contact /> -->
    <h2>Research Papers</h2>
    <Papers />
    <!-- <Login /> -->
</div>


