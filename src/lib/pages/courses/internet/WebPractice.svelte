<script lang="ts">
    //@ts-nocheck
    import SegmentedButton, { Segment } from '@smui/segmented-button';
    import { Label } from '@smui/common';
    import Textfield from '@smui/textfield';
    import Card, {Content} from '@smui/card';
    import Button from '@smui/button';
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import CodeMirror from "svelte-codemirror-editor";
    import { javascript } from "@codemirror/lang-javascript";
    import { xml } from "@codemirror/lang-xml";
    import { css } from "@codemirror/lang-css";
	import { writable } from "svelte/store";
    import Console from './Console.svelte';
	

    let value = "";
    let choices = ['HTML', 'CSS', 'JS'];
    
    export let selected = 'HTML';
    export let showConsole = false;
    let rerun = 1;

    export let htmlContent = '';
    export let cssContent = '';
    export let jsContent = '';
    let previewFrame;
    let previewDocument;
    let previewWindow;
    
    // Capture console.log messages
    
    let style, script;
    onMount(() => {
        updatePreview();
    })
    const updatePreview = () => {
        
        if (!browser) return;
        previewWindow = previewFrame.contentWindow;
        previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;
        
        
        previewDocument.open();
        
        previewDocument.write(htmlContent);
        style = document.createElement('style');
        script = document.createElement('script');
        script.type = 'text/javascript';
        style.innerHTML = cssContent;
        
        previewDocument.head.appendChild(style);
        let newJS = `function mkPreview() {` + jsContent + `} mkPreview()`
        script.innerHTML = newJS;
        previewDocument.body.appendChild(script);
        
        previewDocument.close();
        const sandboxAttributes = "allow-scripts allow-same-origin";
        previewFrame.setAttribute("sandbox", sandboxAttributes);
    };
    function handleKeyDown(event) {
        if (event.key === 'Tab') {
            // Prevent moving to the next focusable element
            event.preventDefault();
            
            // Get the text field
            const textarea = event.target;
            
            // Insert tab character at the current cursor position
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            
            // Set the text value to include the tab
            textarea.value = textarea.value.substring(0, start) + '\t' + textarea.value.substring(end);
            
            // Move the cursor to the right of the inserted tab
            textarea.selectionStart = textarea.selectionEnd = start + 1;
        }
    }
    const runAgain = () => {
        rerun++;
        updatePreview();
    }
</script>
<Card>
    <Content>
        <h4 style="padding-left: 0.5em;background: #c9abce; color: white; margin: 0.2em 0; font-size: 1.5em;font-variant:all-petite-caps;">Code editor</h4>
        <div style="display:flex; gap: 1em;justify-content:space-between;">
            <SegmentedButton segments={choices} let:segment singleSelect bind:selected>
                <!-- Note: the `segment` property is required! -->
                <Segment {segment}>
                    <Label>{segment}</Label>
                </Segment>
            </SegmentedButton>
            <Button variant="raised" style="background: green;" on:click={runAgain}>Run</Button>
        </div>
        
        <br>
        {#if selected === 'HTML'}
            <CodeMirror 
                bind:value={htmlContent} 
                lang={xml()} 
                styles={{
                    "&": {
                        width: "100%",
                        maxWidth: "100%",
                        minHeight: "200px",
                        maxHeight: "50vh",
                    },
                }}
                lineWrapping 
            />
        {:else if selected === 'CSS'}
            <CodeMirror 
                bind:value={cssContent} 
                lang={css()} 
                styles={{
                    "&": {
                        width: "100%",
                        maxWidth: "100%",
                        minHeight: "200px",
                        maxHeight: "50vh",
                    },
                }}
                lineWrapping 
            />
        {:else}
            <CodeMirror 
                bind:value={jsContent} 
                lang={javascript()} 
                styles={{
                    "&": {
                        width: "100%",
                        maxWidth: "100%",
                        minHeight: "200px",
                        maxHeight: "50vh",
                    },
                }}
                lineWrapping 
            />
        {/if}
        <br>
    </Content>
</Card>
<Card>
    
    <iframe class="preview" bind:this={previewFrame} title="" style="width:100%; min-height:200px; max-height:50vh;">
    </iframe>
    
    {#if showConsole && previewWindow}
        <Content>
            <Console extFrame={previewWindow} />
        </Content>
    {/if}
</Card>


<style>
    .preview {
        border: 0;
    }
    /* .inputFrame {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        align-items: center;
        margin-top: 1em;
    } */
    :global(.CodeMirror) {
        border: 1px solid #b005ff;
        height: auto;
    }
    .preview {
        resize: vertical;
    }
</style>