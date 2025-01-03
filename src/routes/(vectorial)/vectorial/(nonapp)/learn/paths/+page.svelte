<script lang='ts'>
    //@ts-nocheck
    import Card, {Content, Actions} from '@smui/card';
    import Button, {Label} from '@smui/button';
    import {goto} from '$app/navigation';
    import { currentPath } from '$lib/vectorial/stores';
    $currentPath = 'Paths'
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
            <p>A path is the most important part of SVG. A path is a sequence of vertices connected by commands. Each command specifies the end vertex and how to reach there from the current vertex. Following are a list of commonds used in SVG path:</p>
            <ul>
                <li>
                    <code>H</code>: Horizontal line
                </li>
                <li>
                    <code>V</code>: Vertical line
                </li>
                <li>
                    <code>L</code>: Line
                </li>
                <li>
                    <code>Q</code>: Quadratic curve
                </li>
                <li>
                    <code>C</code>: Cubic curve
                </li>
                <li>
                    <code>A</code>: Elliptical arc
                </li>
            </ul>
            <p>The most commonly used commands are <code>L, C</code> and <code>A</code>, although it is possible to work with any command type in Vectorial.</p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5">Creating a path</h1>
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5">Adding a node to the path</h1>
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5">Deleting a node from the path</h1>
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5">Command types and inter-conversion</h1>
        </Content>
    </Card>
</article>

