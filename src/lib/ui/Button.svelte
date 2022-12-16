<script>
// @ts-nocheck
    import {ripple} from '$lib/ui/ripple';
</script>

<style>
    button {
        height: 2.5em;
        padding: 0 0.8em;
        font-size: 0.8em;
        font-weight: 500;
        font-family: Roboto;
        border: none;
        background: var(--light);
        color: var(--dark);
        cursor: pointer;
        border-radius: 5px;
        display: flex;
        align-items: center;
        gap: 0.5em;
        position: relative;
        overflow: hidden;
        transition: background 400ms;
        max-width: fit-content;
    }
    button:hover, button:focus {
        background: var(--lightmedium);
        font-weight: 600;
    }
</style>
<button {...$$restProps} use:ripple on:click >
    <slot />
</button>