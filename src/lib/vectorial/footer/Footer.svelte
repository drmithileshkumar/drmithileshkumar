<script>
    import Contact from "./Contact.svelte";
    import Copyright from "./Copyright.svelte";
    import Social from "./Social.svelte";
    // import a from '$lib/vectorial/ui/a.svelte';
</script>

<footer>
    <Social />
    <Contact />
    <nav>
        <ul>
            <li><a href="/vectorial/about">About Us</a></li>
            <!-- <li>
                <a href="/subscription">Pricing</a>
            </li> -->
            <li>
                <a href="/vectorial/legal/privacy"
                    >Privacy Policy</a
                >
            </li>
            <!-- <li>
                <a href="/vectorial/legal/refund"
                    >Refund Policy</a
                >
            </li> -->
            <li>
                <a href="/vectorial/legal/terms"
                    >Terms and Conditions</a
                >
            </li>
            <!-- <li>
                <a
                    href="/shipping"
                    >Shipping</a
                >
            </li> -->
        </ul>
    </nav>
    <Copyright />
</footer>

<style>
    footer {
        /* border-top: 2px solid rgb(0, 100, 150); */
        padding-top: 1em;
        /* padding: 1em; */
        /* background: radial-gradient(rgb(35 100 120), black); */
        font-family: roboto;
        padding-bottom: 4em;
    }
    nav {
        display: flex;
        gap: 0.5em;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 1em;
    }
    a {
        font-size: 0.8em;
    }
</style>
