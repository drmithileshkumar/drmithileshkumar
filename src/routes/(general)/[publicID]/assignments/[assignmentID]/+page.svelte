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
	import EditAssignment from '$lib/components/EditAssignment.svelte';
    export let data;
    

    
    let showQ = true, editAssignment = false;
    onMount(() => {
        
    })
    let preview;
    const putAssignment = async () => {
        let res = await fetch("/api/${$page.data.user.publicID}/assignments/${data.quention._id}", {
            method: 'PUT',
            'content-Type': 'application/json',
            body: JSON.stringify(data.assignment)
        })
        if(res.ok) {
            alert('assignment updated successfully');
        } else {
            alert('Failed');
        }
    }
    const cancel = () => {
        editAssignment = false;
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
    {#if !editAssignment}
    <Assignment assignment={data.assignment} viewable={false} />
    {:else}
        <EditAssignment bind:assignment={data.assignment} on:submit={putAssignment} on:cancel={cancel} />
    {/if}
    <div class="actions">
        <Button on:click={() => editAssignment = !editAssignment}><Label>{editAssignment ? "Done" : 'Edit Assignment'}</Label></Button>
        <Button on:click={() => showQ = !showQ}><Label>{showQ ? 'Hide' : 'Show'} Questions</Label></Button>
        <Button on:click={() => goto(`/${$page.data.user.publicID}/questions`)}><Label>Add Questions</Label></Button>
    </div>
    
    {#if showQ}
    <h6 style="margin:0.5em 0">Questions</h6>
    {#each data.assignment.questions as question}
        <ShowQuestion assignmentID={data.assignment._id} {question} on:deleted={updateQuestions}/>
    {/each}
    {/if}
</article>