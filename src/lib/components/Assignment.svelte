<script lang="ts">
    //@ts-nocheck
    import Card, { Content, Actions } from '@smui/card';
    import Button, { Label } from '@smui/button';
    import Chip, { Set, Text} from '@smui/chips';
    import Checkbox from '@smui/checkbox';
    import FormField from "@smui/form-field"
    import Textfield from '@smui/textfield';
    import { typeset } from '$lib/shared/typeset';
	import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    export let studentName = '';
    export let studentID = '';
    export let assignment;
    export let viewable = true;
    export let showQuestionList = true;
    export let showStudent = false;
    
</script>
<style>
    .place {
        display: flex;
        justify-content: space-between;
    }
    .university {
        font-variant: small-caps;
    }
    .department {
        font-variant: small-caps;
    }
    .assignmentDetails {
        display: flex;
        justify-content: center;
        gap: 1em;
        font-size: 1.5em;
        margin: 1em;
    }
    .courseDetails, .student {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        padding-bottom: 0.7em;
    }
    .student {
        align-items: center;
        margin-top: 1em;
    }
    .courseDetails {
        border-bottom: 2px solid;
    }
    .course, .marks {
        display: flex;
        flex-direction: column;
    }
    .marks {
        text-align: end;
    }
</style>
<Card>
    <Content>
        <div class="place">
            <span class="university">{assignment.university}</span>
            <span class="department">{assignment.department}</span>
        </div>
        <div class="assignmentDetails">
            <span class="semester">Semester {assignment.semester}</span>
            <span class="title">{assignment.title}</span>
            <span class="session">{assignment.session}</span>
        </div>
        <div class="courseDetails">
            <div class="course">
                <span class="name"><strong>Course Name:</strong> {assignment.courseName}</span>
                <span class="code"><strong>Course Code:</strong> {assignment.courseCode}</span>
                <span class="start"><strong>Start date:</strong> {assignment.dates.start}</span>
            </div>
            <div class="marks">
                <span class="number"><strong>No. of Questions:</strong> {assignment.numberOfQuestions}</span>
                <span class="totalMarks"><strong>Max Marks:</strong> {assignment.totalMarks}</span>
                <span class="end"><strong>End date:</strong> {assignment.dates.end}</span>
            </div>
        </div>
        {#if showStudent}
            <div class="student">
                <span class="name"><strong>Student Name:</strong> {studentName}</span>
                <Textfield variant="outlined" bind:value={studentID} label="USN" />
                <!-- <span class="id"><strong>USN:</strong> {student.id}</span> -->
            </div>
        {/if}
        {#if showQuestionList}
        <div class="questions">
            <Set chips={assignment.questions.map((q, i) => 'Q' + (i + 1))} let:chip>
                <Chip {chip}>
                    <Text>{chip}</Text>
                </Chip>
            </Set>
        </div>
        {/if}
    </Content>
    {#if viewable}
    <Actions>
        <Button on:click={() => goto(`/${$page.data.user.publicID}/assignments/${assignment._id}`)}>View</Button>
    </Actions>
    {/if}
</Card>