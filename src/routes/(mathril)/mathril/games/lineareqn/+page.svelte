<script lang="ts">
    import LinearEquation from '$lib/mathril/games/LinearEquation.svelte';
    import Card, {Content, ActionButtons} from '@smui/card';
    import Button from '@smui/button';
    import { goto } from '$app/navigation';
    import { currentPath } from '$lib/mathril/stores';
    $currentPath = "Games/Linear Equation";
</script>
<article>
    <Card>
        <Content>
            <LinearEquation />
        </Content>
    </Card>
</article>
<style>
    article {
        display:flex;
        flex-direction:column;
        gap:0.5em;
    }
</style>