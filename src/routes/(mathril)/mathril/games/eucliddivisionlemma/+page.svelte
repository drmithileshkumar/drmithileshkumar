<script lang="ts">
    import EuclidLemma from '$lib/mathril/games/EuclidLemma.svelte';
    import Card, {Content, ActionButtons} from '@smui/card';
    import Button from '@smui/button';
    import { goto } from '$app/navigation';
    import { currentPath } from '$lib/mathril/stores';
    $currentPath = "Games/Euclid's Division Lemma";
</script>
<article>
    <Card>
        <Content>
            <EuclidLemma />
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