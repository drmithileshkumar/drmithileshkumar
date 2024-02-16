<script lang="ts">
    //@ts-nocheck
    import { goto } from "$app/navigation";
    import { page } from '$app/stores';
    import Card, { Content, Actions } from "@smui/card";
    import Button, { Label } from '@smui/button';
    import Datatable, {Head, Body, Row, Cell} from "@smui/data-table";
	import Question from "$lib/components/Question.svelte";
    import { currentPath } from '$lib/stores.js';
    import Select, {Option} from "@smui/select";
    // export let data;
    $currentPath = 'Questions'
    let courses = ["Mathematics II", 'Internet Technologies', 'Internet Technologies Lab'];
    let questions = [], assignments = [];
    let selectedCourse;
    const getQuestions = async () => {
        let res = await fetch(`/api/${$page.data.user.publicID}/questions?courseName=${selectedCourse}`);
        if(!res.ok) {
            alert('Failed to get questions');
            return;
        }
        questions = await res.json();
        let res1 = await fetch(`/api/${$page.data.user.publicID}/assignments?courseName=${selectedCourse}`)
        if(!res1.ok) {
            alert('Failed to get assignments');
            return;
        }
        assignments = await res1.json();
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
    <Button on:click={() => goto(`/${$page.data.user.publicID}/questions/new`)}>New Question</Button>
    <div class="courses">
        <Select variant="outlined" bind:value={selectedCourse} label="Course">
            <Option value="" />
            {#each courses as course}
                <Option value={course}>{course}</Option>
            {/each}
        </Select>
        <Button on:click={getQuestions}>Get Questions</Button>
    </div>
    
    {#each questions as question}
        <Question {question} assignments={assignments} />
    {/each}
</article>