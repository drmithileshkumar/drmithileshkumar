<script>
    // @ts-nocheck
        import {createEventDispatcher} from 'svelte';
        export let chip;
        export let title = '';
        let dispatch = createEventDispatcher();
        const dispatcher = (event) => {
            event.preventDefault();
            dispatch('click$preventDefault', {});
        }
    </script>
    <style>
    
    </style>
    <span {title} on:click={dispatcher}>
        <slot>
            <span {title}>{chip}</span>
        </slot>
    </span>