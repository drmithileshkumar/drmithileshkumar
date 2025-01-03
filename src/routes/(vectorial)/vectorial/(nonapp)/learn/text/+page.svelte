<script lang='ts'>
    //@ts-nocheck
    import Card, {Content, Actions} from '@smui/card';
    import Button, {Label} from '@smui/button';
    import {goto} from '$app/navigation';
    import { currentPath } from '$lib/vectorial/stores';
    $currentPath = 'Text'
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
            <p>Under texts <span class="material-icons" style="vertical-align:middle;">text_fields</span>,  <code>text</code> is defined. Upon clicking the button a text field appears in the topbar that asks to enter text.</p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5">Modify text under styles <span class="material-icons" style="vertical-align:middle;">tune</span></h1>
            
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5">Modify text under transforms <span class="material-icons" style="vertical-align:middle;">picture_in_picture</span></h1>
            
        </Content>
    </Card>
</article>

