<script>
    // @ts-nocheck

        export let chips;
        export let selected;
        export let choice = false;
        export let background = "rgb(0, 115, 180)";
        export let label = '';
        let selection = new Set();
        const handleSelected = (item) => {
            if(choice) {
                selected = item;
            } else {
                selection.add(item);
                selected = Array.from(selection);
            }
        }
    </script>
    <style>
        .chips {
            display: flex;
            flex-direction: row;
            /* border: 1px solid; */
            /* border-radius: 10px; */
            align-items: center;
            justify-content: flex-start;
            gap: 0.5em;
            width: 100%;
            flex-wrap: wrap;
            overflow-y: hidden;
            overflow-x: auto;
        }
        .chip {
            border: 1px solid rgb(186, 186, 186);
            height: 2em;
            padding: 0 0.75em;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border-radius: 1em;

        }
        .label {
            font-size: 0.7em;
            padding: 0 0.2em;
        }
        .selected {
            background: var(--dark);
            color: white;
        }
    </style>
    <div class="container">
        {#if label.length > 0}
            <span class="label">{label}</span>
        {/if}
        <div class="chips">
            {#each chips as chip}
                <span style="--dark: {background}" class="chip {selected === chip || selected.includes(chip) ? 'selected' : ''}" on:click={ () => handleSelected(chip)} >
                    <slot chip={chip}></slot>
                </span>
            {/each}
        </div>
    </div>
    