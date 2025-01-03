<script lang="ts">
    import BeatTarget from '$lib/mathril/games/BeatTarget.svelte';
    import Card, {Content, ActionButtons} from '@smui/card';
    import Button from '@smui/button';
    import { goto } from '$app/navigation';
    import { currentPath } from '$lib/mathril/stores';
    $currentPath = "Games/Beat Target";
</script>
<article>
    <Card>
        <Content>
            <BeatTarget />
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