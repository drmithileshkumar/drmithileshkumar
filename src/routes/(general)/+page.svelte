<script>
	import Vectorial from "$lib/pages/home/Vectorial.svelte";
	import { currentPath } from "$lib/stores";
    $currentPath = "Dr Mithilesh Kumar"
</script>
<style>
    /* .welcome {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        line-height: 1.45;
        word-spacing: 0.1em;
    } */
    /* .homepage {
        background: white;
    } */
    
</style>
<svelte:head><title>Dr Mithilesh Kumar</title></svelte:head>
<!-- Youtube, Twitter -->
<div class="homepage">
    <Vectorial />
</div>

