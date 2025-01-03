<script lang='ts'>
    //@ts-nocheck
    import Card, {Content, Actions} from '@smui/card';
    import Button, {Label} from '@smui/button';
    import {goto} from '$app/navigation';
    import { currentPath } from '$lib/vectorial/stores';
    $currentPath = 'Advanced'
</script>
<style>
    article {
        display:flex;
        flex-direction: column;
        gap: 0.5em;
    }
</style>
<svelte:head>
    <title>Vectorial</title>
    <link rel="canonical" href="https://drmithileshkumar.com/vectorial/learn" />
    <meta name="description" content="Create SVG graphics" />
</svelte:head>
<article class="container">
    <Card>
        <Content>
            <h1 class="mdc-typography--headline4">Text On Path</h1>
            <p>Text can be aligned to follow a path. The following steps are needed to set a text to align along a path</p>
            <ol>
                <li>Select the text.</li>
                <li>In the context box, check <code>Text on path</code></li>
                <li>Click on the button CHOOSE PATH</li>
                <li>Click on a path from the canvas</li>
                <li>Use <code>Start Offset</code> and <code>Rotate</code> to position and orient the text.</li>
            </ol>
        </Content>
    </Card>
</article>

