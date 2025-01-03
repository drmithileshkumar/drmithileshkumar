<script lang="ts">
    import Clock from '$lib/mathril/games/Clock.svelte';
    import Card, {Content, ActionButtons} from '@smui/card';
    import { goto } from '$app/navigation';
    import Button from '@smui/button';
    import { currentPath } from '$lib/mathril/stores';
    $currentPath = "Games/Clock";
</script>
<article>
    <Card>
        <Content>
            <Clock />
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