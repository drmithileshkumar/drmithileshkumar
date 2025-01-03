<script lang='ts'>
    //@ts-nocheck
    import Card, {Content, Actions} from '@smui/card';
    import Button, {Label} from '@smui/button';
    import {goto} from '$app/navigation';
    import { currentPath } from '$lib/vectorial/stores';
    $currentPath = 'Styles'
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
            <p>Under styles <span class="material-icons" style="vertical-align:middle;">tune</span>,  <code>fill</code> and <code>stroke</code> attributes are modified. </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5">Colors</h1>
            
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5">Linear gradient</h1>
            
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5">Radial gradient</h1>
            
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5">Stroke properties</h1>
            
        </Content>
    </Card>
</article>

