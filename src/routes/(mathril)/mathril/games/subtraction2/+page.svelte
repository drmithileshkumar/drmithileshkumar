<script lang="ts">
    import Subtraction2 from '$lib/mathril/games/Subtraction2.svelte';
    import Card, {Content, ActionButtons} from '@smui/card';
    import Button from '@smui/button';
    import { goto } from '$app/navigation';
    import { currentPath } from '$lib/mathril/stores';
    $currentPath = "Games/Subtraction";
</script>
<article>
    <Card>
        <Content>
            <Subtraction2 />
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