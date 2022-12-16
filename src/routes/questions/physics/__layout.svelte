<script>
// @ts-nocheck

    import { page } from '$app/stores'
    import { goto } from "$app/navigation";
    
</script> 
<style>
    /* nav {
        display: grid;
        grid-template-columns: 1fr 1fr;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin:auto;
        margin-top: 0.5em;
        max-width: 600px;
    } */
    .questions {
        max-width: 600px;
        margin: auto;
        font-family: 'Georgia', serif;
        line-height: 1.5;
        word-spacing: 0.5ex;
    }
</style>
<svelte:head>
    <!-- <script defer src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
	<script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg-full.js"></script> -->
</svelte:head>

<div class="questions">
    <slot />
</div>
