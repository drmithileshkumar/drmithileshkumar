<script lang="ts">
    //@ts-nocheck
    import { goto } from "$app/navigation";
    import { page } from '$app/stores';
    import Card, { Content, Actions } from "@smui/card";
    import Button, { Label } from '@smui/button';
    import Datatable, {Head, Body, Row, Cell} from "@smui/data-table";
	import Assignment from "$lib/components/Assignment.svelte";
	import { currentPath } from "$lib/stores.js";
    import Select, {Option} from "@smui/select";
    $currentPath = 'Assignments'
    export let data;
    let courses = ["Mathematics II", 'Internet Technologies', 'Internet Technologies Lab'];
    let questions = [], assignments = [];
    let selectedCourse;
    const getAssignments = async () => {
        let res = await fetch(`/api/${$page.data.user.publicID}/assignments?courseName=${selectedCourse}`);
        if(!res.ok) {
            alert('Failed to get questions');
            return;
        }
        assignments = await res.json();
        // let res1 = await fetch(`/api/${$page.data.user.publicID}/assignments?courseName=${selectedCourse}`)
        // if(!res1.ok) {
        //     alert('Failed to get assignments');
        //     return;
        // }
        // assignments = await res1.json();
    }
</script>
<style>
    article {
        display:flex;
        flex-direction: column;
        gap: 0.5em;
    }
</style>
<article>
    <Button on:click={() => goto(`/${$page.data.user.publicID}/assignments/new`)}>New assignment</Button>
    <div class="courses">
        <Select variant="outlined" bind:value={selectedCourse} label="Course">
            <Option value="" />
            {#each courses as course}
                <Option value={course}>{course}</Option>
            {/each}
        </Select>
        <Button on:click={getAssignments}>Get Assignments</Button>
    </div>
    {#each assignments as assignment}
        <Assignment {assignment} />
    {/each}
</article>