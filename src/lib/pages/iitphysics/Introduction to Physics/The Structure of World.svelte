<script context="module">
    export async function load({session, fetch, params, url}) {
        if(!(url.host === 'webdut.com' || url.host === 'localhost:4173' || url.host === 'localhost:3000')) {
            return {
                status: 301,
                redirect: `https://webdut.com${url.pathname}`
            }
        }
        return {
            props: {

            }
        }
    }
</script>
<script id="MathJax-script">
// @ts-nocheck
    import {chapters, sections, selectedChapter, selectedSection} from '$lib/pages/iitphysics/stores';
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    $selectedChapter = 'Introduction to Physics';
    $selectedSection = 'The Structure of World';
    onMount(() => {
        MathJax.typeset();
    });
</script>
<style>
    p {
        text-indent: 2em;
    }
</style>
<svelte:head>
    <title>{$selectedSection}</title>
    <link rel="canonical" href="https://webdut.com{$page.url.pathname}" />
    <meta name="description" content="What is the structure of our universe?" />
    
</svelte:head>
<article>
    <h1>{$selectedSection}</h1>
    <p>The way we see world around us is constantly changing. The first things that we try to explain are ones that we can see with naked eyes. From the ground, the earth looks pretty much flat. People thought that earth is flat. But, now we can see from sattelites (for example, the International Space Station) the earth is not flat, it is almost spherical. (Although through indirect means Indians concluded that the earth is a <em>pind</em>, meaning a round object. The study of geography is called <em>bhugol shashtra</em>, meaning study of the round earth. ) Indians knew that matter can be divided into small parts called <em>kana</em>. Even <em>kana</em> is composed of <em>anu</em> which in tern is composed of <em>paramanu</em>. </p>
    <p>Western thinkers developed these ideas even further. First we concluded that all matter is made up of atoms, that in turn are made up of electrons, protons, and neutrons. High energy physics has revealed that even these particles can be broken down further to quarks, laptons, muons etc. Now there is an entire zoo of smaller particles and it appears that there really is no limit to how small can we go into this particle heirarchy.</p>
    <p>
        The scale of things vary so much that we have divided study of physics based on the sizes of objects under consideration. Large objects (larger than hair or dust particle) obey Newton's laws of motion. This is studied under Classical Physics. Einstien made some crucial changes to the understanding of space and time, it is studied under classical physics.
    </p>
    <p>
        For objects smaller than a few atoms are studied under quantum physics. At this scale, the objects can no longer be seen with naked eyes. Strong microscopes (like electron microscopes) are needed to observe some phenomena.
    </p>
    <p>
        Then there is high energy physics. Particles when collide with each other at high energy, break into smaller (possibly new type of particles). 
    </p>
</article>