<script>
    import {presentationMode, currentSlide} from '$lib/pages/notes/maths/stores';
    export let item = -2;
</script>

{#if !$presentationMode || $currentSlide >= item}
    <slot />
{/if}
