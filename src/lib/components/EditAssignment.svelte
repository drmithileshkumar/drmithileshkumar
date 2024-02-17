<script lang="ts">
    //@ts-nocheck
    import Card, { Content, Actions } from '@smui/card';
    import Button, { Label } from "@smui/button";
    import Textfield from '@smui/textfield';
    import FormField from '@smui/form-field';
    import Checkbox from '@smui/checkbox';
    import { createEventDispatcher } from 'svelte';
    export let assignment;
    let dispatch = new createEventDispatcher();
    const submit = () => {
        dispatch('submit')
    }
    const cancel = () => {
        dispatch('cancel')
    }
</script>
<style>

</style>
<Card>
    <Content style="display: flex; flex-direction:column;gap:1em;">
        <FormField>
            <Checkbox bind:checked={assignment.isPublic} bind:value={assignment.isPublic} />
            <span slot="label">Is Public</span>
        </FormField>
        <Textfield 
            variant="outlined"
            label="Title"
            bind:value={assignment.title}
            style="width:100%"
        />
        <Textfield 
            variant="outlined"
            label="University"
            bind:value={assignment.university}
            style="width:100%"
        />
        <Textfield 
            variant="outlined"
            label="Department"
            bind:value={assignment.department}
            style="width:100%"
        />
        <Textfield 
            variant="outlined"
            label="Session"
            bind:value={assignment.session}
            style="width:100%"
        />
        <Textfield 
            variant="outlined"
            label="Semester"
            bind:value={assignment.semester}
            style="width:100%"
        />
        <Textfield 
            variant="outlined"
            label="Course Name"
            bind:value={assignment.courseName}
            style="width:100%"
        />
        <Textfield 
            variant="outlined"
            label="Course ID"
            bind:value={assignment.courseID}
            style="width:100%"
        />
        <Textfield 
            variant="outlined"
            type="number"
            label="Total Marks"
            bind:value={assignment.totalMarks}
            style="width:100%"
        />
        <Textfield 
            variant="outlined"
            type="number"
            label="Number of Questions"
            bind:value={assignment.numberOfQuestions}
            style="width:100%"
        />
        <Textfield 
            variant="outlined"
            type="text"
            label="Start"
            placeholder="dd-mm-yy"
            bind:value={assignment.dates.start}
        />
        <Textfield 
            variant="outlined"
            type="text"
            label="End"
            placeholder="dd-mm-yy"
            bind:value={assignment.dates.end}
        />
    </Content>
    <Actions>
        <Button on:click={submit}><Label>Submit</Label></Button>
        <Button on:click={cancel}><Label>Cancel</Label></Button>
    </Actions>
</Card>