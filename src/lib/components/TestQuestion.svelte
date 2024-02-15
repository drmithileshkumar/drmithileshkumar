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
    export let assignmentID = '';
    export let showOptions = true;
    export let showSolution = true;
    export let questionNumber = 0;
    export let answer = [];
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
    }
    .solution {
        margin: 1em 0;
    }
</style>
<Card>
    <Content>
        <div class="question" use:typeset><strong style="color:tomato;">Q {questionNumber + 1} </strong>{@html question.statement}</div>
        {#if showOptions}
            <div class="options">
                <FormField>
                    <Checkbox bind:group={answer} value={'A'} />
                    <span slot="label">{@html question.optionA}</span>
                </FormField>
                <FormField>
                    <Checkbox bind:group={answer} value={'B'}/>
                    <span slot="label">{@html question.optionB}</span>
                </FormField>
                <FormField>
                    <Checkbox bind:group={answer} value={'C'} />
                    <span slot="label">{@html question.optionC}</span>
                </FormField>
                <FormField>
                    <Checkbox bind:group={answer} value={'D'} />
                    <span slot="label">{@html question.optionD}</span>
                </FormField>
            </div>
        {/if}
        {#if showSolution}
            <div class="solution" use:typeset>{@html question.solution}</div>
        {/if}
    </Content>
</Card>