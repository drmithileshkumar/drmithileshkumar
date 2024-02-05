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
    $currentPath = "The Internet";
    $darkMode = false;
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/intro" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
    {#if $darkMode}
        {@html githubDark}
    {:else}
        {@html github}
    {/if}
</svelte:head>
<article>
    <h4>
        The Internet
    </h4>
    <Card>
        <Content>
            <h6>Origins</h6>
            <p>
                The Internet began in the 1960s with funding from the US Department of Defense (DoD). The purpose was to establish communication between computers so that programs can be shared and there can be remote access.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>What is the Internet?</h6>
            <p>
                The Internet is a huge collection of devices (computers, mobiles, printers, smart devices) connected in a communications network. These devices communicate via a protocol called Transmission Control Protocol/Internet Protocol (TCP/IP).
            </p>
            <p>
                Rather than connecting every computer on the Internet directly to every other computer on the Internet, normally the individual computers in an organization are connected to each other in a local network. One node on this local network is physically connected to the Internet.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Internet Protocol Addresses (IP)</h6>
            <p>
                The Internet Protocol (IP) address of a machine connected to the Internet is a unique 32-bit number, typically represented as four decimal numbers separated by dots (e.g., 192.168.1.1). Each number can range from 0 to 255.
            </p>
            <p class="example">
                The IP address of google is 8.8.8.8
            </p>
            <p use:typeset>
                Total number of unique IP addresses that can be assigned is {`\\(2^{32} = 4294967296\\)`} which is approximately 4.3 billion. Due to being 32 bits in size, IPv4 allows for approximately 4.3 billion unique addresses. With the growth of the internet and the increasing number of devices online, this has led to a shortage of available IPv4 addresses.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Domain Names</h6>
            <p>
                IP addresses have some drawbacks.
            </p>
            <ol>
                <li>They are hard to remember.</li>
                <li>IP address of a device can be changed by the internet service provider.</li>
            </ol>
            <p>
                Domain names are human-readable addresses used to access websites on the internet, serving as a memorable and intuitive alternative to numerical IP addresses. The Domain Name System (DNS) translates these domain names into IP addresses that computers use to locate and communicate with each other on the internet.
            </p>
            <p>
                As we know <code>8.8.8.8</code> is reserved as IP address of <code>google.com</code>. But it is possible for Google to change its IP address to something else. Still the website <code>google.com</code> will continue to function (after appropriate configurations by Google).
            </p>
            <h6>Domain Name to IP address conversion</h6>
            <p class="question">
                How does <code>google.com</code> gets converted to <code>8.8.8.8</code>?
            </p>
            <div class="solution">
                <p>
                    As we know computers can only <em>see</em> numbers. There must be some mechanism that converts the domain name to IP address. This mechanism is called <strong>DNS Lookup</strong>. The image below shows how does it work.
                </p>
                <img width="100%" src="/courses/internet/wwwhtml/fundamentals/intro/dns.png">
                <ol>
                    <li><strong>Browser Cache Lookup:</strong> The browser checks its cache to see if the domain's IP address is already stored. If found, the DNS lookup process ends here.</li>
                    <li><strong>OS Cache Lookup:</strong> If the IP address is not in the browser cache, the operating system's DNS cache is checked next.</li>
                    <li><strong>Router Cache Lookup:</strong> If the IP address is not found in the OS cache, the search moves to the router, which typically maintains its own DNS cache.</li>
                    <li><strong>ISP DNS Cache Lookup:</strong> If the router does not have the IP address cached, the request is forwarded to the Internet Service Provider's (ISP) DNS server.</li>
                    <li><strong>Root Name Server Query:</strong> If the ISP's DNS server does not have the information, it queries a root name server, which responds with the address of a Top-Level Domain (TLD) server (e.g., .com, .net) that holds information for the domain's zone.</li>
                    <li><strong>TLD Server Query:</strong> The ISP's DNS server then queries the TLD server, which responds with the IP address of the domain's authoritative name server.</li>
                    <li><strong>Authoritative Name Server Query:</strong> Finally, the ISP's DNS server queries the domain's authoritative name server, which responds with the IP address of the requested domain.</li>
                    <li><strong>Caching the Response:</strong> The resolved IP address is sent back through the chain to the original requester. Each server along the path can cache the DNS record to speed up future requests.</li>
                    <li><strong>Browser Receives IP Address:</strong> The browser receives the IP address for the domain and can now initiate a connection to the web server hosting the website.</li>
                  </ol>
                  
            </div>
            <h6>Structure of Domain Names</h6>
            <ul>
                <li><strong>Top-Level Domain (TLD)</strong>: The last segment of the domain name, located after the last dot. Examples include .com, .org, .net, and country-specific TLDs like .uk, .ca.</li>
                <li><strong>Second-Level Domain (SLD)</strong>: The part directly to the left of the TLD, considered the "name" of the website. For example, in example.com, "example" is the SLD.</li>
                <li><strong>Subdomain</strong>: Located to the left of the SLD, used to organize or navigate to different sections of a website. Common examples include www, blog.example.com, or shop.example.com.</li>
            </ul>

            <h6>Functions and Features</h6>
            <ul>
                <li><strong>DNS (Domain Name System)</strong>: Translates domain names into IP addresses, functioning like a phone book for the internet.</li>
                <li><strong>Hierarchy and Delegation</strong>: The DNS is hierarchical, allowing for the domain name space to be divided and managed by different organizations and entities.</li>
                <li><strong>Registrars and Registries</strong>: Domain names are registered through registrars, accredited by ICANN or a national country code authority, interacting with registries that manage the TLDs.</li>
            </ul>

            <h6>Importance of Domain Names</h6>
            <ul>
                <li><strong>Branding and Visibility</strong>: A domain name is a critical part of a brand's identity and online presence.</li>
                <li><strong>SEO (Search Engine Optimization)</strong>: Having a relevant and memorable domain can impact search engine rankings and click-through rates.</li>
                <li><strong>Credibility and Professionalism</strong>: A custom domain name enhances the credibility and professionalism of a website.</li>
            </ul>

            <h6>Technical Aspects</h6>
            <ul>
                <li><strong>DNS Lookup</strong>: The process of finding the corresponding IP address for a domain name through querying DNS servers.</li>
                <li><strong>Caching</strong>: DNS lookups are often cached by various components of the internet infrastructure to improve efficiency.</li>
            </ul>
            
        </Content>
    </Card>
</article>
