<script lang="ts">
    //@ts-nocheck
    import { page } from '$app/stores';
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    // import { typeset } from "$lib/shared/typeset";
    import Card, { Content, Actions} from '@smui/card';
    import Button, { Label} from '@smui/button';
    import Textfield from '@smui/textfield';
    import FormField from '@smui/form-field';
    import Checkbox from '@smui/checkbox';
    import Radio from '@smui/radio';
    import Assignment from '$lib/components/Assignment.svelte';
    import ShowQuestion from '$lib/components/ShowQuestion.svelte';
    import { onMount } from 'svelte';
    export let data;
    
    let type= 'Objective', course = '', statement = '', optionA = '', optionB = '', optionC = '', optionD = '', solution = '', correct = [];
    let options = ['A', 'B', 'C', 'D'];
    let types = ['Objective', 'Subjective'];
    onMount(() => {
        
    })
    let preview;
    const updateassignment = async () => {
        let assignment = {
            _id: data.assignment._id,
            type,
            course,
            statement,
            optionA,
            optionB,
            optionC,
            optionD,
            correct,
            solution
        }
        let res = await fetch("/api/${$page.data.user.publicID}/assignments/${data.quention._id}", {
            method: 'PUT',
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
    const updateQuestions = (evt) => {
        data.assignment.questions = data.assignment.questions.filter((q) => q._id !== evt.detail.questionID);
        data.assignment = data.assignment;
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
    <h5>Assignment</h5>
    <Assignment assignment={data.assignment} viewable={false} />
    <h6 style="margin:0.5em 0">Questions</h6>
    {#each data.assignment.questions as question}
        <ShowQuestion assignmentID={data.assignment._id} {question} on:deleted={updateQuestions}/>
    {/each}
</article>