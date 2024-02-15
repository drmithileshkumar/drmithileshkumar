<script lang="ts">
    //@ts-nocheck
    import Card, { Content, Actions } from '@smui/card';
    import Button, { Label } from '@smui/button';
    import Checkbox from '@smui/checkbox';
    import FormField from "@smui/form-field";
    import Select, { Option } from '@smui/select';
    import { typeset } from '$lib/shared/typeset';
	import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { createEventDispatcher } from 'svelte';
    let dispatch = new createEventDispatcher();
    export let question;
    export let answer = [];
    export let assignmentID = '';
    export let showOptions = true;
    export let showSolution = true;
    export let showActions = true;
    export let marks = 0;
    
    const addQuestion = async () => {
        
        let assignmentIndex;
        assignments.forEach((assignment, i) => {
            if(assignment._id === assignmentID) assignmentIndex = i;
        });
        if(assignments[assignmentIndex].questions.indexOf(question._id) !== -1) {
            alert('Question already added.');
            return;
        }
        let res = await fetch(`/api/${$page.data.user.publicID}/assignments/${assignmentID}/question`, {
            method: 'PUT',
            'Content-Type': 'application/json',
            body: JSON.stringify({questionID: question._id})
        })
        if(res.ok) {
            alert('Question added to the assignment')
        } else {
            alert('Failed');
        }
    }
    const remove = async () => {
        let res = await fetch(`/api/${$page.data.user.publicID}/assignments/${assignmentID}/question`, {
            method: 'DELETE',
            'Content-Type': 'application/json',
            body: JSON.stringify({questionID: question._id})
        })
        if(res.ok) {
            alert('Quesiton removed');
            dispatch('deleted', {questionID: question._id});
            return;
        }
        alert('Something went wrong.')
    }
</script>
<style>
    .options {
        display: flex;
        flex-direction: column;
        margin: 1em 0;
    }
    .solution {
        margin-top: 1em;
    }
    .marks {
        display: flex;
        justify-content: end;
        gap: 0.5em;
        color: white;
        background: rgba(0, 155, 0, 0.5);
        margin-bottom: 0.5em;
        padding: 0.5em;
    }
</style>
<Card>
    <Content>
        <div class="marks"><strong>Marks:</strong> {marks}</div>
        <div class="question" use:typeset>{@html question.statement}</div>
        {#if showOptions}
        <div class="options">
            <FormField>
                <Checkbox checked={answer.indexOf('A') !== -1} style="background:{question.correct.indexOf('A') !== -1 ? 'rgba(0, 155, 0, 0.5)' : ''}"/>
                <span slot="label" use:typeset>{@html question.optionA}</span>
            </FormField>
            <FormField>
                <Checkbox checked={answer.indexOf('B') !== -1} style="background:{question.correct.indexOf('B') !== -1 ? 'rgba(0, 155, 0, 0.5)' : ''}"/>
                <span slot="label" use:typeset>{@html question.optionB}</span>
            </FormField>
            <FormField>
                <Checkbox checked={answer.indexOf('C') !== -1} style="background:{question.correct.indexOf('C') !== -1 ? 'rgba(0, 155, 0, 0.5)' : ''}"/>
                <span slot="label" use:typeset>{@html question.optionC}</span>
            </FormField>
            <FormField>
                <Checkbox checked={answer.indexOf('D') !== -1} style="background:{question.correct.indexOf('D') !== -1 ? 'rgba(0, 155, 0, 0.5)' : ''}"/>
                <span slot="label" use:typeset>{@html question.optionD}</span>
            </FormField>
        </div>
        {/if}
        {#if showSolution}
        <div class="solution" use:typeset>{@html question.solution}</div>
        {/if}
    </Content>
    {#if showActions}
    <Actions>
        <Button on:click={() => showOptions = !showOptions}>
            <Label>
                {showOptions ?'Hide' : 'Show'} Options
            </Label>
        </Button>
        <Button on:click={() => showSolution = !showSolution}>
            <Label>{showSolution ?'Hide' : 'Show'} Solution</Label>
        </Button>
        <Button on:click={() => goto(`/${$page.data.user.publicID}/questions/${question._id}`)}><Label>Edit</Label></Button>
        <Button on:click={remove}><Label>Remove</Label></Button>
    </Actions>
    {/if}
</Card>