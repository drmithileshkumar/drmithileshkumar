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
    export let question;
    export let assignments = [];
    let assignmentID;
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
</script>
<style>
    .assignments {
        padding-bottom: 1em;
    }
    .options {
        display: flex;
        flex-direction: column;
    }
</style>
<Card>
    <Content>
        <div class="assignments">
            <Select variant="outlined" bind:value={assignmentID} label="Assignments" style="width:70%">
                <Option value="" />
                {#each assignments as assignment}
                    <Option value={assignment._id}>
                    {assignment.courseCode} {assignment.title} {assignment.session}
                    </Option>
                {/each}
            </Select>
            <Button on:click={addQuestion}>Add</Button>
        </div>
        <div class="question" use:typeset>{@html question.statement}</div>
        <div class="options">
            <FormField>
                <Checkbox checked={question.correct.indexOf('A') !== -1} />
                <span slot="label">{@html question.optionA}</span>
            </FormField>
            <FormField>
                <Checkbox checked={question.correct.indexOf('B') !== -1} />
                <span slot="label">{@html question.optionB}</span>
            </FormField>
            <FormField>
                <Checkbox checked={question.correct.indexOf('C') !== -1} />
                <span slot="label">{@html question.optionC}</span>
            </FormField>
            <FormField>
                <Checkbox checked={question.correct.indexOf('D') !== -1} />
                <span slot="label">{@html question.optionD}</span>
            </FormField>
        </div>
        <div class="solution" use:typeset>{@html question.solution}</div>
    </Content>
    <Actions>
        <Button on:click={() => goto(`/${$page.data.user.publicID}/questions/${question._id}`)}>Edit</Button>
    </Actions>
</Card>