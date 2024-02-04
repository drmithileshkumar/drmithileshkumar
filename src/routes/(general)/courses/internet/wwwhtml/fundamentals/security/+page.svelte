<script lang="ts">
    // @ts-nocheck
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import xml from "svelte-highlight/languages/xml";
    import github from "svelte-highlight/styles/github";
    import githubDark from "svelte-highlight/styles/github-dark";
    import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

    import { typeset } from "$lib/shared/typeset";
    import Link from '$lib/ui/Link.svelte';
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    import Card, { Content, Actions } from "@smui/card";
    import Button from "@smui/button";
    import Ripple from "@smui/ripple";
    import NavList from '$lib/components/NavList.svelte'
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores";
    import { contents } from "$lib/pages/courses/internet/content";
    $navList = contents;
    $currentPath = "Security";
    $darkMode = true;
    // onMount(() => {
    //     MathJax.typeset();
    // });
    
</script>
<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
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
    <title>Internet Technologies</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/security" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
    {#if $darkMode}
        {@html githubDark}
    {:else}
        {@html github}
    {/if}
</svelte:head>
<article>
    <h2>
        Security
    </h2>
    <Card>
        <Content>
            <h6>Security</h6>
            <p>
                The Internet and Web pose significant security challenges, with vulnerabilities present at both the server and browser levels. Web servers can be accessed by anyone with an Internet connection, allowing for the execution of software and potential access to data and databases. Similarly, browsers can download and execute server-provided software, which may access unauthorized areas of the host machine. This situation is likened to letting strangers into a house with the challenge of preventing them from leaving, taking, or altering anything. The complexity and size of modern web servers and browsers amplify these security risks, making it increasingly difficult to safeguard against breaches. Consequently, security represents a major concern in the development and operation of Web applications.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Secure Communication</h6>
            <p>
                One aspect of Web security is the matter of getting one's data from the browser to the server and having the server deliver data back to the browser without anyone or any device intercepting or corrupting those data along the way.
            </p>
            <p>
                One aspect of Web security is the matter of getting one's data from the browser to the server and having the server deliver data back to the browser without anyone or any device intercepting or corrupting those data along the way. Consider a simple case of transmitting a credit card number to a company from which a purchase is being made. The security issues for this transaction are as follows:
            </p>
            <ol>
                <li>
                    <strong>Privacy</strong>: It must not be possible for the credit card number to be stolen on its way to the company's server.
                </li>
                <li>
                    <strong>Integrity</strong>: It must not be possible for the credit card number to be modified on its way to the company's server.                    
                </li>
                <li>
                    <strong>Authentication</strong>: It must be possible for both the purchaser and the seller to be certain of each other's identity.
                </li>
                <li>
                    <strong>Nonrepudiation</strong>: It must be possible to prove legally that the message was actually sent and received.
                </li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Encryption</h6>
            <p>
                Encryption is the fundamental technology underpinning data privacy and integrity, transforming data into a format that unauthorized parties cannot easily decipher. Historically, encryption required the same key for both encrypting and decrypting data, posing challenges in key transmission. This changed in 1976 with the advent of public-key encryption by Whitfield Diffie and Martin Hellman, introducing a system that uses a pair of keys—one public and one private—for secure communication. In this system, the public key is used to encrypt messages sent to the holder of the private key, who alone can decrypt these messages. This method ensures the private key does not need to be transmitted, maintaining security since it is computationally infeasible to derive the private key from the public key. The RSA algorithm, developed in 1977 by MIT professors Ron Rivest, Adi Shamir, and Leonard Adleman, is the most widely adopted public-key encryption method, particularly in e-commerce among large companies.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Denial of Service</h6>
            <p>
                Denial of Service (DoS) attacks can be created simply by flooding a Web server with requests, overwhelming its ability to operate effectively. Most DoS attacks are conducted with the use of networks of virally infected zombie computers, whose owners are unaware of their sinister use.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Viruses</h6>
            <p>
                Viruses are programs that often arrive in a system in attachments to electronic mail messages or attached to free downloaded programs. Then they attach to other programs. When executed, they replicate and can overwrite memory and attached memory devices, destroying programs and data alike.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Worms</h6>
            <p>
                Worms damage memory, like viruses, but spread on their own, rather than being attached to other files. Perhaps the most famous worm so far has been the Blaster worm, spawned in 2003.
            </p>
        </Content>
    </Card>
</article>
