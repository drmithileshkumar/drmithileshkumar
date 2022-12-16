<script>
    // @ts-nocheck
    
        export let value;
        export let label;
    </script>
    <style>
        label {
            display: flex;
            flex-direction: column;
            height: auto;
            border: 0.5px solid var(--medium);
            border-radius: 5px;
            overflow: hidden;
            width: auto;
        }
        label span {
            font-size: 0.7em;
            padding: 0.5em;
        }
        textarea {
            height: 2.5em;
            border: none;
            outline: none;
            padding: 0.5em 1em;
            background-color: var(--light);
        }
    </style>
    
    <label for="">
        <span>{label}</span>
        <textarea bind:value ></textarea>
    </label>