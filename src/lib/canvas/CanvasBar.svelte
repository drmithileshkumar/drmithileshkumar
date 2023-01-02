<script>
    let colors = ['green', 'blue', 'red', 'orange', 'black', 'eraser'];
    export let strokeColor = 'black'; 
    export let lineWidth = 2;
    export let stMode = false;
    export let arcMode = false;
    export let globalCompositeOperation = 'source-over';
    function setColor(chosenColor) {
        globalCompositeOperation = 'source-over';
        lineWidth = 2;
        switch (chosenColor) {
            case "green":
                strokeColor = "green";
                break;
            case "blue":
                strokeColor = "blue";
                break;
            case "red":
                strokeColor = "red";
                break;
            case "orange":
                strokeColor = "orange";
                break;
            case "black":
                strokeColor = "black";
                break;
            case "white":
                strokeColor = "white";
                break;
            case 'eraser': {
                globalCompositeOperation = 'destination-out';
                strokeColor = 'rgba(0, 0, 0, 1)';
                lineWidth = 20;
                break
            }

        }
        // if (strokeColor == "white") lineWidth = 14;
        // else lineWidth = 2;
    
    }
</script>
<style>
    .colors {
        display: flex;
        gap: 0.2em;
        align-items: center;
        flex-direction: row;
        /* max-width: 100px;
        overflow: scroll; */
    }
    .lineWidth {
        display: flex;
        align-items: center;
    }
    .shapes {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .shapes span {
        display: flex;
        align-items: center;
        padding: 0.2em;
    }
    .colors button {
        width: 1em;
        height: 1em;
        padding: 0.6em;
    }
</style>
<div class="shapes">
    <span on:click={() => {stMode = !stMode, arcMode = false}}>
        <svg width='20px' height="20px" viewBox="0 -5 20 10">
            <line x1="0%" y1="0%" x2="100%" y2="0%" stroke="black" stroke-width="1" fill="none" />
            {#if stMode}
                <line x1="0%" y1="0%" x2="100%" y2="0%" stroke="black" stroke-width="2" fill="none" />
            {/if}
        </svg>
    </span>
    <span on:click={() => {arcMode = !arcMode, stMode = false}}>
        <svg width='20px' height="20px" viewBox="0 0 20 10">
            <circle cx="50%" cy="50%" r="8" stroke="black" stroke-width="1" fill="none" />
            {#if arcMode}
                <circle cx="50%" cy="50%" r="6" stroke="black" stroke-width="1" fill="none" />
            {/if}
        </svg>
    </span>
</div>

<div class="colors">
    {#each colors as color}
        <button style="background: {color}; border: white {strokeColor === color ? '5px double' : 'solid'}; border-radius: 50%; padding: {color === 'eraser' ? 0 : ''};" on:click={() => setColor(color)}>
            {#if color === 'eraser'}
                <svg width="100%" height="100%" viewBox="0 0 20 40">
                    <g transform="rotate(-45 10 20) translate(0 5)">
                        <rect x='0' y='0' width='20' height='10' stroke='black' stroke-width='1' />
                        <rect x='0' y='10' width='20' height='20' fill='none' stroke='black' stroke-width='1' />
                    </g>
                </svg>
            {/if}
        </button>
    {/each}
</div>
<div class="lineWidth">
    
    <svg width="20" height="20" viewBox="0 0 20 20" on:click={() => lineWidth = 2} style="cursor:pointer">
        {#if lineWidth === 2}
            <circle cx="10" cy="10" r="4" fill="none" stroke="black" stroke-width=1 />
        {/if}
        <circle cx="10" cy="10" r="2" fill="black" />
    </svg>
    <svg width="20" height="20" viewBox="0 0 20 20" on:click={() => lineWidth = 4} style="cursor:pointer">
        {#if lineWidth === 4}
            <circle cx="10" cy="10" r="6" fill="none" stroke="black" stroke-width=1 />
        {/if}
        <circle cx="10" cy="10" r="4" fill="black" />
    </svg>
    <svg width="20" height="20" viewBox="0 0 20 20" on:click={() => lineWidth = 20} style="cursor:pointer">
        {#if lineWidth === 20}
            <circle cx="10" cy="10" r="9" fill="none" stroke="black" stroke-width=1 />
        {/if}
        <circle cx="10" cy="10" r="7" fill="black" />
    </svg>
    <label><input style="width: 4em; height: 1em; padding-left: 0.5em; padding-right: 0.5em;" type="number" step="0.1" bind:value={lineWidth}></label>
</div>