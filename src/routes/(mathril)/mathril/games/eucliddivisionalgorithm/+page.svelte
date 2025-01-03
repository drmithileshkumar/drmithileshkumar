<script lang="ts">
    import EuclidHCF from '$lib/mathril/games/EuclidHCF.svelte';
    import Card, {Content, ActionButtons} from '@smui/card';
    import Button from '@smui/button';
    import { goto } from '$app/navigation';
    import { currentPath } from '$lib/mathril/stores';
    $currentPath = "Games/Euclid's Division Algorithm";
</script>
<article>
    <Card>
        <Content>
            <EuclidHCF />
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