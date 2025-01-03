<script lang="ts">
    import AppDerivative from '$lib/mathril/games/AppDerivative.svelte';
    import Card, {Content, ActionButtons} from '@smui/card';
    import Button from '@smui/button';
    import { goto } from '$app/navigation';
    import { currentPath } from '$lib/mathril/stores';
    $currentPath = "Games/Differentiation";
</script>
<article>
    <Card>
        <Content>
            <AppDerivative />
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