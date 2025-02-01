<script>
    import Introduction from '$lib/components/Introduction.svelte';
    import Interests from '$lib/components/Interests.svelte';
    import Education from "$lib/components/Education.svelte";
    import Experience from "$lib/components/Experience.svelte";
    import Skills from "$lib/components/Skills.svelte";
    import Research from "$lib/components/Research.svelte";
    import Contact from "$lib/components/Contact.svelte";
    import Papers from "$lib/components/Papers.svelte";
	import P from '$lib/presentation/P.svelte';
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
    p {
        margin: 0;
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
        <!-- <div class="name">
            <a href="/">Dr Mithilesh Kumar</a>
        </div> -->
        <div class="interests"></div>
    </div>
    <div class="welcome">
        <!-- <h1>Welcome to my page.</h1> -->
        <p>
            Hi, I'm <em>Mithilesh Kumar</em>.
        </p>
        <p>
        I am fascinated by the role of quantum mechanics in computation. My research spans
        parameterized algorithms, kernelization, cryptography, coding theory, and quantum
        information. Currently, my work focuses on the mathematics of quantum information
        theory, particularly quantum channels and quantum entanglement theory.
        I have briefly served as an Assistant Professor in the Department of Computer
        Science at Dayananda Sagar University. My postdoctoral research at Simula-UiB,
        Norway, explored post-quantum cryptography, while my Ph.D. research at the
        University of Bergen, Norway, focused on parameterized algorithms. I hold dual
        master’s degrees—one in Computer Science from the Chennai Mathematical Institute
        (CMI) and another in Physics from IIT Kanpur.
        Beyond research, I am passionate about mathematical problem-solving and
        education. I have developed two web applications:
        </p>
        <ul>
            <li>Mathril: A platform that generates mathematics practice problems for school
                students.</li>
            <li>Vectorial: A tool for creating SVG diagrams with LaTeX support, particularly
                useful for researchers.</li>
        </ul>
        <p>
        Additionally, I have integrated a browser-based editor for HTML, CSS, and
        JavaScript, furthering my interest in leveraging technology for education and research.
        </p>
    </div>
    <br>
    <!-- <Introduction /> -->
    <!-- <Interests /> -->
    <!-- <Education /> -->
    <!-- <Experience /> -->
    <!-- <Research /> -->
    <!-- <Skills /> -->
    <!-- <Contact /> -->
    <!-- <h2>Research Papers</h2>
    <Papers /> -->
    <!-- <Login /> -->
</div>


