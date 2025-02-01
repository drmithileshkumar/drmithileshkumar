<script>
    import {presentationMode, currentSlide} from '$lib/pages/notes/maths/stores';
    export let item = -2;
    // $: console.log($currentSlide, item)
</script>
<div>
{#if !$presentationMode || $currentSlide >= item}
   
    <slot />
{/if}
</div>