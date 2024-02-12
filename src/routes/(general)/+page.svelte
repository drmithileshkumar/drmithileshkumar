<script>
	import Notes from "$lib/components/Notes.svelte";
	import Practice from "$lib/components/Practice.svelte";
	import Twitter from "$lib/components/Twitter.svelte";
	import Youtube from "$lib/components/Youtube.svelte";
	import Vectorial from "$lib/pages/home/Vectorial.svelte";
	import Trigonometry from "$lib/pages/home/Trigonometry.svelte";
    import HTML from "$lib/pages/home/HTML.svelte";
	
    
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
    .courses {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>
<svelte:head><title>Dr Mithilesh Kumar</title></svelte:head>
<!-- Youtube, Twitter -->
<div class="homepage">
    <div class="courses">
        
        <!-- <Trigonometry />
        <HTML /> -->
    </div>
    
    <Vectorial />
    <!-- <Youtube />
    <Notes />
    <Practice /> -->
    <!-- <Twitter /> -->
</div>

