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
    import TestQuestion from '$lib/components/TestQuestion.svelte';
    import { onMount } from 'svelte';
    export let data;
    $currentPath = "Assignment";
    let studentID;
    let answers = {};
    onMount(() => {
        // for(let i = 0; i < data.assignment.numberOfQuestions; i++) {
        //     answers.push({
        //         questionID: data.assignment.questions[i]._id,
        //         answer: []
        //     });
        // }
        // console.log($page.data)
        if(data.studentAssignment) {
            studentID = data.studentAssignment.id;
            answers = data.studentAssignment.answers;
        }
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
    
    const submit = async (status) => {
        //send studentID as well
        // console.log(answers)
        if(!studentID) {
            alert('Enter your USN');
            return;
        }
        let marks = {};
        let totalCorrectOptions = 0;
        let totalMarks = 0;
        for(let i = 0; i < data.assignment.questions.length; i++) {
            totalCorrectOptions += data.assignment.questions[i].correct.length;
        }
        let unitMarks = 100 / totalCorrectOptions;
        for(let i = 0; i < data.assignment.questions.length; i++) {
            marks[data.assignment.questions[i]._id] = 0;
            for(let j = 0; j < answers[data.assignment.questions[i]._id].length; j++) {
                if(data.assignment.questions[i].correct.indexOf(answers[data.assignment.questions[i]._id][j]) !== -1) {
                    marks[data.assignment.questions[i]._id]++;
                } else {
                    marks[data.assignment.questions[i]._id] += -0.5;
                }
            }
            marks[data.assignment.questions[i]._id] *= unitMarks;
            totalMarks += marks[data.assignment.questions[i]._id]
        }
        let studentAssignment = {
            title: data.assignment.title,
            courseID: data.assignment.courseID,
            name: $page.data.user.name,
            publicID: $page.data.user.publicID,
            id: studentID,//usn
            submission: Date.now(),
            assignmentID: data.assignment._id,
            answers,//{questionID, answer}
            marks,//question-wise
            total: totalMarks,
            status
        }
        if(data.studentAssignment) {
            studentAssignment = {
                title: data.studentAssignment.title,
                courseID: data.studentAssignment.courseID,
                name: data.studentAssignment.name,
                publicID: data.studentAssignment.publicID,
                id: data.studentAssignment.id,//usn
                submission: Date.now(),
                assignmentID: data.assignment._id,
                answers,//{questionID, answer}
                marks,//question-wise
                total: totalMarks,
                status
            }
        }
        
        let res = await fetch(`/api/assignments/${data.studentAssignment._id}`, {
            method: 'PUT',
            'Content-Type': 'application/json',
            body: JSON.stringify(studentAssignment)
        })
        if(res.ok) {
            alert('Submission Successfull !!');
            return;
        } else {
            let {message} = await res.json();
            alert(message + ' Note down your answers for reference.')
        }
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
    <Assignment 
        assignment={data.assignment} 
        viewable={false} 
        showStudent 
        showQuestionList={false} 
        studentName={$page.data.user.name} 
        bind:studentID
    />
    <h6 style="margin:0.5em 0">Questions</h6>
    {#each data.assignment.questions as question, index}
        <TestQuestion 
            assignmentID={data.assignment._id} 
            {question} 
            questionNumber={index}
            showSolution={false} 
            bind:answer={answers[question._id]}
        />
    {/each}
    {#if data.studentAssignment && data.studentAssignment.status !== 'Submitted'}
        <div>
            <Button on:click={() => submit('Draft')}><Label>Save Draft</Label></Button>
            <Button on:click={() => submit('Submitted')}><Label>Submit Final</Label></Button>
        </div>
    {/if}
</article>