<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import { browser } from '$app/environment';
    export let htmlContent = '';
    export let cssContent = '';
    export let jsContent = '';
    
    export let extFrame = null;
    
    // Create a reactive store to hold log messages
    const logs = writable([]);
    let previewFrame;
    let previewDocument;
    let style, script;

    function captureConsole() {
        const originalLog = extFrame ? extFrame.console.log : console.log;

        extFrame.console.log = (...args) => {
            let message = args.map(arg => 
                typeof arg === "object" ? JSON.stringify(arg) : arg
            ).join(" ");

            // Use `logs.update` correctly
            // logs.update(currentLogs => [...currentLogs, message]);
            $logs = [...$logs, message]
            originalLog(...args); // Still log to browser console
        };
    }

    // Capture console logs when the component is mounted
    onMount(() => {
        captureConsole();
        console.log($logs)
        if(!extFrame) alert("nope")
    });

    // Function to clear logs
    function clearLogs() {
        logs.set([]); // Reset logs to an empty array
    }
    const updatePreview = () => {
        
        if (!browser) return;
        // const previewFrame = document.getElementById('previewFrame');
        // previewFrame.contentWindow.location.reload();
        // previewDocument.body.removeChild(script);
        
        previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;
        style = document.createElement('style');
        script = document.createElement('script');
        script.type = 'text/javascript';
        
        previewDocument.open();
        
        // logs = [];
        // if(showConsole) {
        //     overrideConsole();
        //     htmlContent = 'Console';
        // }
        
        // console.log("hello")
        // for(let i = 0; i < logs.length; i++) {
        //     htmlContent += `<div>` + logs[i] + `</div>`
        // }
        
        previewDocument.write(htmlContent);
        // const style = document.createElement('style');
        style.innerHTML = cssContent;
        // const head = 
        previewDocument.head.appendChild(style);
        // const script = document.createElement('script');
        // script.type = 'text/javascript';
        
        script.innerHTML = jsContent;
        previewDocument.body.appendChild(script);
        
        previewDocument.close();
        const sandboxAttributes = "allow-scripts allow-same-origin";
        previewFrame.setAttribute("sandbox", sandboxAttributes);
    };
</script>

<style>
    .console {
        background: black;
        color: lime;
        font-family: monospace;
        padding: 10px;
        border-radius: 5px;
        max-height: 300px;
        overflow-y: auto;
        white-space: pre-wrap;
    }
    button {
        margin-top: 10px;
        padding: 5px 10px;
        border: none;
        cursor: pointer;
        background: red;
        color: white;
        border-radius: 3px;
    }
</style>

<article>
    <!-- <div>
        {#key rerun}
        <iframe class="preview" bind:this={previewFrame} title="" style="width:100%; min-height:200px; max-height:50vh;">
        </iframe>
        {/key}
    </div> -->
    <!-- Display logs in a styled console -->
    <div class="console">
        {#each $logs as log}
            <div>{log}</div>
        {/each}
    </div>
    <!-- Button to clear logs -->
    <button on:click={clearLogs}>Clear Console</button>
</article>

