<script>
    // @ts-nocheck
    import Card, {Content} from "@smui/card";
    import Message from '$lib/ui/Message.svelte';
    import Link from '$lib/ui/Link.svelte';
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    import { currentPath } from "$lib/stores";
    import { darkMode } from "$lib/stores"
    $currentPath = "Students";
    $darkMode = false;
    onMount(() => {
        MathJax.typeset();
    });
</script>
<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        max-width: 750px;
        width: 90%;
        margin: auto;
    }
    p, li {
        opacity: 0.8;
    }
    h2, h3, h4, h5 {
        margin: 0.5em 0;
    }
    h5 {
        font-size: 1.1em;
    }
    h6 {
        font-size: 1em;
        margin: 0.5em 0;
        color: rgb(240, 85, 0);
    }
    strong {
        color: goldenrod;
        opacity: 1;
    }
    a {
        cursor: pointer;
    }
    .question {
        cursor: pointer;
        padding: 0.3em;
    }
</style>
    <svelte:head>
        <title>Students</title>
        <link rel="canonical" href="https://drmithileshkumar.com/students" />
        <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
    </svelte:head>
    
    <article>
        <h3>
            Students
        </h3>
        <Card>
            <Content>
                <div class="remark">
                    <p>
                        For mini projects or projects, write either to <code>admin@drmithileshkumar.com</code> or <code>mithileshkumar-bca@dsu.edu.in</code>
                    </p>
                    <h6>Contents of the email</h6>
                    <ul>
                        <li>Names of group members</li>
                        <li>Semester</li>
                        <li>Topic (Project title)</li>
                        <li>Contact information (email/phone)</li>
                    </ul>
                </div>
            </Content>
        </Card>
        
    </article>