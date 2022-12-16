<script context="module">
    export async function load({session, fetch, params, url}) {
        if(!(url.host === 'webdut.com' || url.host === 'localhost:4173' || url.host === 'localhost:3000')) {
            return {
                status: 301,
                redirect: `https://webdut.com/iitphysics`
            }
        }
        return {
            props: {

            }
        }
    }
</script>
<script>
// @ts-nocheck
    import Message from '$lib/ui/Message.svelte';

</script>
<style>

</style>
<svelte:head>
    <title>Webdut IIT Physics</title>
    <link rel="canonical" href="https://webdut.com/iitphysics" />
    <meta name="description" content="Learn and practice Physics for school, IIT JEE, Olympiad" />
</svelte:head>
<article>
    <h1 style="margin-bottom:0;">Learn and practice physics</h1>
    <h2 style="font-size: 1.2em; font-weight: 400;color: #888; margin-top:0;">Suitable for Class XI, XII and IIT JEE and other examinations.</h2>
    
</article>