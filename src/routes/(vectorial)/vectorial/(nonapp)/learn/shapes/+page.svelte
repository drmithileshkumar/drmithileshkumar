<script lang='ts'>
    //@ts-nocheck
    import Card, {Content, Actions} from '@smui/card';
    import Button, {Label} from '@smui/button';
    import List, {Item} from '@smui/list';
    import {goto} from '$app/navigation';
    import { currentPath } from '$lib/vectorial/stores';
    $currentPath = 'Shapes'
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
            <p>
                Vectorial current supports following shapes:
            </p>
            <ul>
                <li>Circle</li>
                <li>Ellipse</li>
                <li>Rectangle</li>
                <li>Regular Polygon</li>
                <li>Grid</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5">Circle</h1>
            <p>
                A circle is defined by center <code>cx, cy</code> and radius <code>r</code>. Click on the button <span class="material-icons" style="vertical-align:middle;">circle</span> under <span class="material-icons" style="vertical-align:middle;">category</span> to add a circle to the canvas.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5">Ellipse</h1>
            <p>
                An ellipse is defined by center <code>cx, cy</code> and radii <code>rx, ry</code>. Click on the button <span style="vertical-align:middle;"><svg width="32px" viewBox="-10 -8 20 16"><ellipse rx="10" ry="8" fill="currentColor" /></svg></span> under <span class="material-icons" style="vertical-align:middle;">category</span> to add an ellipse to the canvas.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5">Rectangle</h1>
            <p>
                An ellipse is defined by upper-left corner <code>x, y</code>, <code>width</code> and <code>height</code>. Click on the button <span class="material-icons" style="vertical-align:middle;">square</span> under <span class="material-icons" style="vertical-align:middle;">category</span> to add a rectangle to the canvas.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5">Regular polygon</h1>
            <p>
                A regular polygon has equal sides. Click on the button <span class="material-icons" style="vertical-align:middle;">hexagon</span> under <span class="material-icons" style="vertical-align:middle;">category</span> to add a regular polygon to the canvas. A text field asks to enter the numbeer of sides.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5">Grid</h1>
            <p>
                A rectangular grid can be created by clicking on the button <span class="material-icons" style="vertical-align:middle;">grid_on</span> under <span class="material-icons" style="vertical-align:middle;">category</span>.
            </p>
        </Content>
    </Card>
</article>

