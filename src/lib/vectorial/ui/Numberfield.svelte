<script lang='ts'>
    // @ts-nocheck
    
        export let value;
        export let label;
        export let background = "rgb(246, 253, 255)";
        export let align = 'top';
        export let placeholder = '';
    </script>
    <style>
        .top {
            display: flex;
            flex-direction: column;
            height: 3em;
            border: 0.5px solid var(--medium);
            border-radius: 5px;
            overflow: hidden;
        }
        .left {
            display: flex;
            flex-direction: row;
            border: 0.5px solid var(--medium);
            border-radius: 5px;
            overflow: hidden;
            align-items: center;
        }
        label span {
            font-size: 0.7em;
            padding: 0.5em;
            font-weight: 500;
            min-width: 20px;
        }
        input {
            height: 2.5em;
            border: none;
            outline: none;
            padding: 0 1em;
            background-color: var(--light);
            width: 100%;
        }
    </style>
    
    <label class={align} for="">
        <span>{label}</span>
        <input style="--light: {background}" {placeholder} type="number" bind:value >
    </label>