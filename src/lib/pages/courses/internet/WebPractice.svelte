<script lang="ts">
    //@ts-nocheck
    import Textfield from '@smui/textfield';
    import Button from '@smui/button';
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
  
    let htmlContent = '';
    let cssContent = '';
    let jsContent = '';
    let previewFrame;
    let previewDocument;
  
    const updatePreview = () => {
        if (!browser) return;
        //const previewFrame = document.getElementById('previewFrame');
        previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;
        previewDocument.open();
        previewDocument.write(htmlContent);
        // const style = document.createElement('style');
        // style.innerHTML = cssContent;
        // previewDocument.head.appendChild(style);
        // const script = document.createElement('script');
        // script.type = 'module';
        // script.innerHTML = jsContent;
        // previewDocument.body.appendChild(script);
        previewDocument.close();
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
  </script>
  
<div class="inputFrame">
<Textfield 
    style="min-width: 100%; min-height: 300px;" 
    label="HTML" 
    bind:value={htmlContent} 
    on:keydown={handleKeyDown} 
    textarea></Textfield>
</div>
<Button on:click={updatePreview}>Preview</Button>
<iframe class="preview" bind:this={previewFrame} style="width:100%; height:300px;">
</iframe>

<style>
    .inputFrame {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        align-items: center;
        margin-top: 1em;
    }
    .preview {
        all: unset;
    }
    :global(.preview *) {
        all: default;
    }
</style>