<script>
    export let choices = ['Yes', 'No'];
    export let selected = choices[0];
</script>
<style>
    .toggle {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        align-items: center;
    }
    .switch {
        display: flex;
        width: 3.2em;
        height: 1.7em;
        background: var(--medium);
        border-radius: 1em;
        position: relative;
        align-items: center;
    }
    .choice {
        cursor: pointer;
    }
    .indicator {
        display: inline-block;
        width: 1.5em;
        height: 1.5em;
        border-radius: 50%;
        background-color: white;
        /* position: absolute; */
        margin-left: 0.1em;
        margin-right: 0.1em;
        transition: transform 0.3s ease-in-out;
    }
    .left {
        transform: translateX(0);
    }
    .right {
        transform: translateX(1.5em);
    }
</style>
<div class="toggle">
    <span class="choice" on:click={() => selected = choices[0]}>{choices[0]}</span>
    <span class="switch">
        <span class="indicator {selected === choices[0] ? 'left' : 'right'}"></span>
    </span>
    <span class="choice" on:click={() => selected = choices[1]}>{choices[1]}</span>
</div>