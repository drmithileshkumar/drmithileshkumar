<script lang="ts">
    //@ts-nocheck
    import { goto } from "$app/navigation";
    import { page } from '$app/stores';
    import Card, { Content, Actions } from "@smui/card";
    import Button, { Label } from '@smui/button';
    import Datatable, {Head, Body, Row, Cell} from "@smui/data-table";
	import Assignment from "$lib/components/Assignment.svelte";
    export let data;
</script>
<style>
    article {
        display:flex;
        flex-direction: column;
        gap: 0.5em;
    }
</style>
<article>
    <h2>Assignments</h2>
    <Button on:click={() => goto(`/${$page.data.user.publicID}/assignments/new`)}>New assignment</Button>
    {#each data.assignments as assignment}
        <Assignment {assignment} />
    {/each}
</article>