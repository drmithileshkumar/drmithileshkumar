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
<article use:typeset>
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
            <h6>RSA</h6>
            <p>The RSA algorithm is a widely used public-key cryptosystem that facilitates secure data transmission. Named after its inventors, Ron Rivest, Adi Shamir, and Leonard Adleman, RSA was introduced in 1977 and remains one of the most respected and commonly implemented methods for encryption and digital signatures.</p>

            <h6>How RSA Works:</h6>
            <p>
                RSA operates on the principle of using two keys: a public key, which is shared openly, and a private key, which is kept secret. These keys are generated from a pair of large prime numbers along with a derivative value. The algorithm's security relies on the computational difficulty of factoring the product of these two large prime numbers, a problem known as prime factorization.
            </p>

            <h6>Key Steps in RSA:</h6>
            <ol>
                <li><strong>Key Generation</strong>:
                    <ul>
                    <li>Select two large prime numbers, {`\\(p\\)`} and {`\\(q\\)`}.</li>
                    <li>Compute {`\\(n = pq\\)`}, which will be used as the modulus for both keys.</li>
                    <li>Calculate the Euler's totient function, {`\\(\\phi(n) = (p-1)(q-1)\\)`}.</li>
                    <li>Choose an integer {`\\(e\\)`} such that {`\\(1 < e < \\phi(n)\\)`}, and {`\\(e\\)`} is co-prime to {`\\(\\phi(n)\\)`}; {`\\(e\\)`} becomes the public exponent.</li>
                    <li>Determine {`\\(d\\)`} as the modular multiplicative inverse of {`\\(e\\)`} modulo {`\\(\\phi(n)\\)`}; {`\\(d\\)`} is the private exponent.</li>
                    </ul>
                </li>
                <li><strong>Encryption</strong>:
                    <ul>
                    <li>Given a plaintext message {`\\(M\\)`}, it is converted into an integer {`\\(m\\)`} (such that {`\\(0 \\leq m < n\\)`}) using a reversible protocol known as padding.</li>
                    <li>The ciphertext {`\\(c\\)`} is then computed as {`\\(c = m^e \\mod n\\)`}.</li>
                    </ul>
                </li>
                <li><strong>Decryption</strong>:
                    <ul>
                    <li>The original message is recovered by computing {`\\(m = c^d \\mod n\\)`}.</li>
                    <li>The plaintext message {`\\(M\\)`} is then obtained from the integer {`\\(m\\)`} using the reverse padding protocol.</li>
                    </ul>
                </li>
            </ol>

            <h6>Security and Usage:</h6>
            <p>
                The RSA algorithm's security hinges on the difficulty of factoring the large composite number {`\\(n\\)`} into its prime factors, {`\\(p\\)`} and {`\\(q\\)`}, a task that is currently unfeasible for sufficiently large primes with today's computing power. RSA is used in various applications, including SSL/TLS for secure web browsing, digital signatures for document verification, and secure key exchange mechanisms.
            </p>

            <p>
                Despite the emergence of new encryption methods and the potential threat from quantum computing, RSA remains a cornerstone of public-key cryptography due to its robustness and widespread support across numerous platforms and technologies.
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
            <ul>
                <li><strong>ILOVEYOU</strong>
                    <ul>
                    <li><em>Year:</em> 2000</li>
                    <li><em>Description:</em> Also known as "Love Letter," this virus spread via email with a subject line "ILOVEYOU" and an attachment that appeared to be a text file. Once executed, it overwrote files, spread itself through email, and made unauthorized changes to the user's system.</li>
                    </ul>
                </li>
                <li><strong>Code Red</strong>
                    <ul>
                    <li><em>Year:</em> 2001</li>
                    <li><em>Description:</em> Code Red targeted computers running Microsoft's IIS web server. It exploited a buffer overflow vulnerability to execute itself, deface websites, and propagate to other systems. At its peak, it infected millions of servers worldwide.</li>
                    </ul>
                </li>
                <li><strong>Melissa</strong>
                    <ul>
                    <li><em>Year:</em> 1999</li>
                    <li><em>Description:</em> Melissa began as an infected Word document attached to an email. When opened, it propagated itself by sending emails to the top 50 contacts in the user’s Microsoft Outlook address book, causing significant disruption to personal and corporate email systems.</li>
                    </ul>
                </li>
                <li><strong>Conficker</strong>
                    <ul>
                    <li><em>Year:</em> 2008</li>
                    <li><em>Description:</em> Also known as Downup or Downadup, Conficker is a worm that exploited vulnerabilities in Windows OS to infect computers. It could spread via the Internet, removable drives, and local networks. It blocked access to security websites and downloaded additional malware.</li>
                    </ul>
                </li>
                <li><strong>Flashback</strong>
                    <ul>
                    <li><em>Year:</em> 2011</li>
                    <li><em>Description:</em> Initially, Flashback masqueraded as a Flash Player installer for Mac OS X but later exploited Java vulnerabilities to install itself without user interaction. It was one of the largest virus infections affecting Macs, designed to steal personal information.</li>
                    </ul>
                </li>
                </ul>
            <p>
                To protect against web-based viruses, it is essential to keep software, browsers, and operating systems updated, use reputable antivirus solutions, exercise caution with downloads and email attachments, enable a firewall, and regularly back up data.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Worms</h6>
            <p>
                Worms damage memory, like viruses, but spread on their own, rather than being attached to other files. Perhaps the most famous worm so far has been the Blaster worm, spawned in 2003.
            </p>
            <ol>
                <li><strong>SQL Slammer/Sapphire Worm</strong>
                    <ul>
                    <li><em>Year:</em> 2003</li>
                    <li><em>Description:</em> This worm targeted vulnerabilities in Microsoft SQL Server and MSDE, causing widespread denial of service on some internet hosts. It spread rapidly by generating random IP addresses and sending itself to those addresses, significantly slowing down internet traffic.</li>
                    </ul>
                </li>
                <li><strong>Mydoom Worm</strong>
                    <ul>
                    <li><em>Year:</em> 2004</li>
                    <li><em>Description:</em> Primarily spread through email, Mydoom also had a component that allowed it to propagate via the Kazaa file-sharing network. It is noteworthy for its attack on the SCO Group's website, launching a DDoS attack by instructing infected machines to connect to the site simultaneously.</li>
                    </ul>
                </li>
                <li><strong>Santy Worm</strong>
                    <ul>
                    <li><em>Year:</em> 2004</li>
                    <li><em>Description:</em> Santy, also known as PHPinclude.worm, exploited a vulnerability in PHP scripts used by bulletin board systems to spread itself. It searched Google for vulnerable forums and then used them to propagate, defacing websites in the process.</li>
                    </ul>
                </li>
                <li><strong>JS/Spacehero Worm</strong>
                    <ul>
                    <li><em>Year:</em> 2005</li>
                    <li><em>Description:</em> This worm spread through social networking sites by exploiting cross-site scripting (XSS) vulnerabilities. It propagated itself by adding links to the user's webpage or profile, which, when clicked by others, continued the spread of the worm.</li>
                    </ul>
                </li>
                <li><strong>Samy (XSS Worm)</strong>
                    <ul>
                    <li><em>Year:</em> 2005</li>
                    <li><em>Description:</em> This worm spread on the MySpace social networking site by exploiting XSS vulnerabilities. It was one of the first worms to spread through a social networking site, adding over a million friends to the creator's MySpace account within just 20 hours.</li>
                    </ul>
                </li>
                <li><strong>Storm Worm</strong>
                    <ul>
                    <li><em>Year:</em> 2007</li>
                    <li><em>Description:</em> Initially spread via email messages with sensational news subjects, the Storm Worm was a Trojan horse program that later allowed infected computers to be controlled remotely. It created a botnet used for various malicious activities, including sending more spam emails to spread further.</li>
                    </ul>
                </li>
            </ol>
              
        </Content>
    </Card>
</article>
