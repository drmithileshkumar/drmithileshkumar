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
    import { currentPath } from "$lib/stores";
    import Assignment from '$lib/components/Assignment.svelte';
    import ShowQuestion from '$lib/components/ShowQuestion.svelte';
    import { onMount } from 'svelte';
    export let data;
    $currentPath = "Assignment";
    
    onMount(() => {
        // for(let i = 0; i < data.assignment.numberOfQuestions; i++) {
        //     answers.push({
        //         questionID: data.assignment.questions[i]._id,
        //         answer: []
        //     });
        // }
        // console.log($page.data)
    })
    let preview;
    
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
    article {
        display:flex;
        flex-direction: column;
        gap: 0.5em;
    }
    .marks {
        display:flex;
        justify-content: end;
        color: white;
        background: green;
        padding: 0.5em;
        gap: 0.5em;
    }
</style>
<article>
    <Assignment 
        assignment={data.assignment} 
        viewable={false} 
        showStudent 
        showQuestionList={false} 
        studentName={data.studentAssignment.name} 
        studentID={data.studentAssignment.id}
    />
    <h6 style="margin:0.5em 0">Questions</h6>
    <div class="marks">
        <strong>Total Marks:</strong> {data.studentAssignment.total}
    </div>
    {#each data.assignment.questions as question, index}
        <ShowQuestion 
            assignmentID={data.assignment._id} 
            {question} 
            questionNumber={index}
            showSolution={true} 
            answer={data.studentAssignment.answers[question._id]}
            showActions={false}
            marks={data.studentAssignment.marks[question._id]}
        />
    {/each}
    <!-- <Button on:click={submit}>Submit</Button> -->
</article>