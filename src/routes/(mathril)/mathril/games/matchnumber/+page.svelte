<script lang="ts">
    import MatchMyNumber from '$lib/mathril/games/MatchMyNumber.svelte';
    import Card, {Content, ActionButtons} from '@smui/card';
    import Button from '@smui/button';
    import { goto } from '$app/navigation';
    import { currentPath } from '$lib/mathril/stores';
    $currentPath = "Games/Match Number";
</script>
<article>
    <Card>
        <Content>
            <MatchMyNumber />
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