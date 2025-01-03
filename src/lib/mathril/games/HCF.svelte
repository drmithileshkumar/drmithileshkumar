<script lang='ts'>
    //@ts-nocheck
    export let divided = false;
    export let dividLevel;
    export let finalLevel;
    export let b;
    export let r;
    export let groups;
</script>



<style>
    .elements {
        width: 100%;
        height: 100%;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        flex-direction: row;
        flex-wrap: wrap;
        transition: all 1s;
    }
    .group {
        display: flex;
        gap: 0.5em;
        justify-content: center;
        align-items: center;
        border: 1px solid goldenrod;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0.5em;
        max-width: 150px;
        background-color: goldenrod;
    }
    .element {
        width: 20px;
        height: 20px;
        border: 2px solid teal;
        border-radius: 50%;
        background-color: teal;
    }
</style>