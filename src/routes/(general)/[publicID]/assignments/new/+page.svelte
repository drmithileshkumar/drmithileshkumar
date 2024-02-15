<script lang="ts">
    //@ts-nocheck
    import { page } from '$app/stores';
    import { browser } from "$app/environment";
    // import { typeset } from "$lib/shared/typeset";
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
            start: Date.now(),
            end: Date.now()
        }
        questions= [];
    let options = ['A', 'B', 'C', 'D'];
    let types = ['Objective', 'Subjective'];
    let preview;
    const postAssignment = async () => {
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
            dates
        }
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
    <Card>
        <Content style="display: flex; flex-direction:column;gap:1em;">
            <Textfield 
                variant="outlined"
                label="Title"
                bind:value={title}
                style="width:100%"
            />
            <Textfield 
                variant="outlined"
                label="University"
                bind:value={university}
                style="width:100%"
            />
            <Textfield 
                variant="outlined"
                label="Department"
                bind:value={department}
                style="width:100%"
            />
            <Textfield 
                variant="outlined"
                label="Session"
                bind:value={session}
                style="width:100%"
            />
            <Textfield 
                variant="outlined"
                label="Semester"
                bind:value={semester}
                style="width:100%"
            />
            <Textfield 
                variant="outlined"
                label="Course Name"
                bind:value={courseName}
                style="width:100%"
            />
            <Textfield 
                variant="outlined"
                type="number"
                label="Total Marks"
                bind:value={totalMarks}
                style="width:100%"
            />
            <Textfield 
                variant="outlined"
                type="number"
                label="Number of Questions"
                bind:value={numberOfQuestions}
                style="width:100%"
            />
            <Textfield 
                variant="outlined"
                type="date"
                label="Start"
                bind:value={dates.start}
            />
            <Textfield 
                variant="outlined"
                type="date"
                label="End"
                bind:value={dates.end}
            />
        </Content>
        <Actions>
            <Button on:click={postAssignment}><Label>Submit</Label></Button>
            <Button on:click={cancel}><Label>Cancel</Label></Button>
        </Actions>
    </Card>
</article>