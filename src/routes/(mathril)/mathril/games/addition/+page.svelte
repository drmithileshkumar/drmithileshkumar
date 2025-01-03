<script lang="ts">
    import Addition from '$lib/mathril/games/Addition.svelte';
    import Card, {Content, ActionButtons} from '@smui/card';
    import { currentPath } from '$lib/mathril/stores';
    $currentPath = "Games/Beat Target";
</script>
<article>
    <Card>
        <Content>
            <Addition />
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