<script lang="ts">
    //@ts-nocheck
    import { goto } from "$app/navigation";
    import { page } from '$app/stores';
    import Card, { Content, Actions } from "@smui/card";
    import Button, { Label } from '@smui/button';
    import Datatable, {Head, Body, Row, Cell} from "@smui/data-table";
	import Question from "$lib/components/Question.svelte";
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
    <h2>Questions</h2>
    <Button on:click={() => goto(`/${$page.data.user.publicID}/questions/new`)}>New Question</Button>
    {#each data.questions as question}
        <Question {question} assignments={data.assignments} />
    {/each}
</article>