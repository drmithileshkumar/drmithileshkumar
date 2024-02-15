<script lang='ts'>
    //@ts-nocheck
    import Select, { Option } from '@smui/select';
    import Button, { Label } from '@smui/button';
    import Card from '@smui/card';
    import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';
    import { goto } from "$app/navigation";
    import { currentPath } from '$lib/stores';
    $currentPath = "Submissions";
    let submissions = [];
    const courses = {
        'Mathematics II': {
            name: 'Mathematics II',
            url: 'mathematics2',
            courseID: '22CA1201',
            sessions: ["2023-2024"]
        },
        'Internet Technologies': {
            name: 'Internet Technologies',
            url: 'internet',
            courseID: '22CA2402',
            sessions: ["2023-2024"]
        },
        'Internet Technologies Lab': {
            name: 'Internet Technologies Lab',
            url: 'internetlab',
            courseID: '22CA2405',
            sessions: ["2023-2024"]
        }
    }
    let selectedCourse = 'Mathematics II', selectedSession = courses[selectedCourse].sessions[0];
    const getSubmissions = async () => {
        let res = await fetch(`/api/submissions?courseID=${courses[selectedCourse].courseID}&session=${selectedSession}`);
        if(!res.ok) {
            alert('Failed to load submissions...')
            return;
        }
        submissions = await res.json();
    }
</script>
<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    .courses {
        display:flex;
        flex-direction:row;
        gap: 1em;
        align-items:center;
    }
    h6 {
        margin: 1em 0;
    }
</style>
<article>
    <h6>Select Course and Session</h6>
    <div class="courses">
        <div class="course">
            <Select variant="outlined" label="Course" bind:value={selectedCourse}>
                <Option value="" />
                {#each Object.keys(courses) as courseName}
                    <Option value={selectedCourse}>{courseName}</Option>
                {/each}
            </Select>
        </div>
        <div class="session">
            <Select variant="outlined" label="Session" bind:value={selectedSession}>
                <Option value="" />
                {#each courses[selectedCourse].sessions as session}
                    <Option value={session}>{session}</Option>
                {/each}
            </Select>
        </div>
        <Button on:click={getSubmissions}>Go</Button>
    </div>
    <Card>
        <DataTable style="width: 100%">
            <Head>
                <Row>
                    <Cell>S. No.</Cell>
                    <Cell>Name</Cell>
                    <Cell>Title</Cell>
                    <Cell>Date</Cell>
                    <Cell>Total Marks</Cell>
                    <Cell>Details</Cell>
                </Row>
            </Head>
            <Body>
                {#each submissions as assignment, index}
                    <Row>
                        <Cell>{index + 1}</Cell>
                        <Cell style="white-space:normal;">{assignment.name}</Cell>
                        <Cell style="white-space:normal;">{assignment.title}</Cell>
                        <Cell style="white-space:normal;">{(new Date(assignment.submission).toDateString())}</Cell>
                        <Cell>{assignment.total}</Cell>
                        <Cell><Button on:click={() => goto(`/assignments/${assignment.assignmentID}/solution`)}>View</Button></Cell>
                    </Row>
                {/each}
            </Body>
        </DataTable>
    </Card>
</article>