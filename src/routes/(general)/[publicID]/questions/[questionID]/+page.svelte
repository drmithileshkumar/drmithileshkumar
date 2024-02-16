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
    import { onMount } from 'svelte';
    export let data;
    
    let type= 'Objective', courseName = '', statement = '', optionA = '', optionB = '', optionC = '', optionD = '', solution = '', correct = [], isPublic = true, publicID;
    let options = ['A', 'B', 'C', 'D'];
    let types = ['Objective', 'Subjective'];
    onMount(() => {
        type = data.question.type;
        courseName = data.question.courseName;
        statement = data.question.statement;
        optionA = data.question.optionA;
        optionB = data.question.optionB;
        optionC = data.question.optionC;
        optionD = data.question.optionD;
        correct = data.question.correct;
        solution = data.question.solution;
        isPublic = data.question.isPublic;
        publicID = data.question.publicID;
        isPublic = data.question.isPublic;
        setTimeout(() => typeset(), 0);
    })
    let preview;
    const updateQuestion = async () => {
        let question = {
            _id: data.question._id,
            type,
            courseName,
            statement,
            optionA,
            optionB,
            optionC,
            optionD,
            correct,
            solution,
            publicID,
            isPublic
        }
        let res = await fetch("/api/${$page.data.user.publicID}/questions/${data.quention._id}", {
            method: 'PUT',
            'content-Type': 'application/json',
            body: JSON.stringify(question)
        })
        if(res.ok) {
            alert('Question uploaded successfully');
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
    .options {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    h5 {
        margin: 1em 0;
    }
</style>
<article>
    <h5>New Question</h5>
    <Card>
        <Content style="display: flex; flex-direction:column;gap:0.5em;">
            <div style="display:flex;gap: 1.5em;">
                {#each types as option}
                    <FormField>
                        <Radio 
                            bind:group={type}
                            value={option}
                        />
                        <span slot="label">{option}</span>
                    </FormField>
                {/each}
            </div>
            <FormField>
                <Checkbox bind:checked={isPublic} value={isPublic} />
                <span slot="label">Is Public</span>
            </FormField>
            <Textfield 
                variant="outlined"
                label="Course Name"
                bind:value={courseName}
                style="width:100%"
            />
            <Textfield 
                textarea
                label="Question"
                bind:value={statement}
                style="width:100%"
                on:input={typeset}
                on:change={typeset} 
            />
            {#if type === 'Objective'}
            <Textfield 
                textarea
                label="Option A"
                bind:value={optionA}
                style="width:100%"
                on:input={typeset} 
                on:change={typeset}
            />
            <Textfield 
                textarea
                label="Option B"
                bind:value={optionB}
                style="width:100%"
                on:input={typeset} 
                on:change={typeset}
            />
            <Textfield 
                textarea
                label="Option C"
                bind:value={optionC}
                style="width:100%"
                on:input={typeset} 
                on:change={typeset}
            />
            <Textfield 
                textarea
                label="Option D"
                bind:value={optionD}
                style="width:100%"
                on:input={typeset} 
                on:change={typeset}
            />
            <h6 style="margin:1em 0 0.5em 0">Correct options</h6>
            <div style="display:flex;gap: 1.5em;">
                {#each options as option}
                    <FormField>
                        <Checkbox 
                            bind:group={correct}
                            value={option}
                        />
                        <span slot="label">{option}</span>
                    </FormField>
                {/each}
            </div>
            {/if}
            <Textfield 
                textarea
                label="Solution"
                bind:value={solution}
                style="width:100%"
                on:input={typeset} 
                on:change={typeset}
            />
            
            
        </Content>
        <Actions>
            <Button on:click={updateQuestion}><Label>Submit</Label></Button>
            <Button on:click={cancel}><Label>Cancel</Label></Button>
            <Button on:click={() => goto(`/${$page.data.user.publicID}/questions`)} > 
                <Label>Get Back to Questions </Label>
            </Button>
        </Actions>
    </Card>
    <h5>Preview</h5>
    <Card>
        <Content>
            <div bind:this={preview}>
                {#key statement}
                <div class="question">
                    {@html statement}
                </div>
                {/key}
                <div class="options">
                    {#key optionA}
                    <FormField>
                        <Checkbox />
                        <span slot="label">{@html optionA}</span>
                    </FormField>
                    {/key}
                    {#key optionB}
                    <FormField>
                        <Checkbox />
                        <span slot="label">{@html optionB}</span>
                    </FormField>
                    {/key}
                    {#key optionC}
                    <FormField>
                        <Checkbox />
                        <span slot="label">{@html optionC}</span>
                    </FormField>
                    {/key}
                    {#key optionD}
                    <FormField>
                        <Checkbox />
                        <span slot="label">{@html optionD}</span>
                    </FormField>
                    {/key}
                </div>
                {#key solution}
                <div class="solution">
                    {@html solution}
                </div>
                {/key}
            </div>
        </Content>
    </Card>
</article>