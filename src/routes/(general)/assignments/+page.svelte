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
    <Datatable style="width:100%">
        <Head>
            <Row>
                <Cell>CourseID</Cell>
                <Cell>Title</Cell>
                <Cell>Status</Cell>
                <Cell>Action</Cell>
            </Row>
        </Head>
        <Body>
            {#each data.assignments as assignment}
                <Row>
                    <Cell>{assignment.courseID}</Cell>
                    <Cell>{assignment.title}</Cell>
                    <Cell>{assignment.status}</Cell>
                    <Cell>
                        {#if assignment.status === 'Draft'}
                            <Button on:click={() => goto(`/assignments/${assignment.assignmentID}`)}><Label>Go</Label></Button>
                        {:else}
                            <Button on:click={() => goto(`/assignments/${assignment.assignmentID}/solution`)}><Label>Solution</Label></Button>
                        {/if}
                    </Cell>
                </Row>
            {/each}
        </Body>
    </Datatable>
    
</article>