<script lang="ts">
    //@ts-nocheck
    import { page } from '$app/stores';
    import { browser } from "$app/environment";
    // import { typeset } from "$lib/shared/typeset";
    import EditAssignment from '$lib/components/EditAssignment.svelte';
    import Card, { Content, Actions} from '@smui/card';
    import Button, { Label} from '@smui/button';
    import Textfield from '@smui/textfield';
    import FormField from '@smui/form-field';
    import Checkbox from '@smui/checkbox';
    import Radio from '@smui/radio';
    let title= 'Assignment 1',
        university= 'Dayananda Sagar University',
        department= 'Computer Applications',
        session="2023-2024",
        semester= 'II',
        courseName= 'Mathematics II',
        courseCode= 'CA',
        totalMarks= 100,
        numberOfQuestions= 10,
        dates = {
            start: 'dd-mm-yy',
            end: 'dd-mm-yy'
        },
        isPublic = true,
        questions= [];
    let assignment = {
        title,
        university,
        department,
        session,
        semester,
        courseName,
        courseCode,
        totalMarks,
        numberOfQuestions,
        questions,
        dates,
        isPublic
    }
    let preview;
    const postAssignment = async () => {
        let res = await fetch("/api/${$page.data.user.publicID}/assignments/new", {
            method: 'POST',
            'content-Type': 'application/json',
            body: JSON.stringify(assignment)
        })
        if(res.ok) {
            alert('assignment uploaded successfully');
        } else {
            alert('Failed');
        }
    }
    const cancel = () => {

    }
    const typeset = () => {
        // console.log('typesetting...')
        renderMathInElement(preview, {
				delimiters: [
					{ left: '$$', right: '$$', display: true },
					{ left: '$', right: '$', display: false },
					{ left: '\\(', right: '\\)', display: false },
					{ left: '\\[', right: '\\]', display: true }
				],
				// • rendering keys, e.g.:
				throwOnError: false
			});
        // setTimeout(() => {
		// 	renderMathInElement(preview, {
		// 		delimiters: [
		// 			{ left: '$$', right: '$$', display: true },
		// 			{ left: '$', right: '$', display: false },
		// 			{ left: '\\(', right: '\\)', display: false },
		// 			{ left: '\\[', right: '\\]', display: true }
		// 		],
		// 		// 
		// 		throwOnError: false
		// 	});
		// }, 0);
    }
</script>
<style>
</style>
<article>
    <h5>New assignment</h5>
    <EditAssignment bind:assignment on:submit={postAssignment} on:cancel={cancel} />
    <!-- <Actions>
        <Button on:click={postAssignment}><Label>Submit</Label></Button>
        <Button on:click={cancel}><Label>Cancel</Label></Button>
    </Actions> -->
</article> 