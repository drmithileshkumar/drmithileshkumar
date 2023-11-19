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
        padding: 0 1em;
    }
    .profile {
        position: relative;

    }
    .dp {
        aspect-ratio: 1 / 1;
        width: 15%;
        height: auto;
        border-radius: 50%;
        position: absolute;
        top: 60%;
        left: 2%;
        overflow: hidden;
        border: 2px solid transparent;
        box-shadow: 1px 1px 3px gray;
        background: white;
    }
    .bar {
        height: 1em;
    }
    .intro {
        margin-top: 1em;
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
            Hello, I'm Mithilesh Kumar. I'm passionate about anything related to Quantum Mechanics. Currently, I'm working actively in quantum error correction. I have done research in quantum-safe cryptography (Post-Doc). My PhD involved studying parameterized algorithms. Prior to that I have masters in two fields, computer science (CMI) and physics (IIT Kanpur). In addition, I have founded two websites <a href="https://mathril.com">Mathril</a> (Mathematics) and <a href="https://vectorial.app">Vectorial</a> (Graphics). ( <a href="/cv">My CV</a> )
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


