<script lang='ts'>
    //@ts-nocheck
    import Card, {Content, Actions} from '@smui/card';
    import Button, {Label} from '@smui/button';
    import {goto} from '$app/navigation';
    import { currentPath } from '$lib/vectorial/stores';
    $currentPath = 'Transforms'
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
            <h1 class="mdc-typography--headline4">{$currentPath}</h1>
            <p>Under transforms <span class="material-icons" style="vertical-align:middle;">picture_in_picture</span>,  <code>position</code> and <code>size</code> attributes are modified. </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5">Position</h1>
            
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5">Bounding box</h1>
            
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5">Rotation</h1>
            
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5">Distribution</h1>
            
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5">Alignments</h1>
            
        </Content>
    </Card>
</article>

