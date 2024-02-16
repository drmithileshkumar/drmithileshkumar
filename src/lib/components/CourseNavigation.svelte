<script lang="ts">
    //@ts-nocheck
    import Ripple from "@smui/ripple";
    export let contentNav;
    export let currentUrl;
</script>
<style>
    section {
        display:flex;
        justify-content: space-between;
        background-color: rgba(0, 0, 0, 0.1);
    }
    a {
        text-decoration: none;
        /* background-color: rgba(0, 140, 200, 1);
        color: white; */
        padding: 0.3em 0.5em;
        font-variant: small-caps;
    }
</style>
<section>
    <a use:Ripple={{surface: true}} href="{contentNav[currentUrl].previous}">Previous</a>
    <a use:Ripple={{surface: true}} href="{contentNav[currentUrl].next}">Next</a>
</section>