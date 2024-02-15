<script lang="ts">
    //@ts-nocheck
    import User from "$lib/components/User.svelte";
    import { page } from "$app/stores";
    import Card, {Content, Actions} from '@smui/card';
    import Datatable, {Head, Body, Row, Cell} from "@smui/data-table";
    import Button from '@smui/button';
    import List, { Separator } from "@smui/list";
    import Tab, { Label } from "@smui/tab";
    import TabBar from "@smui/tab-bar";
    import { goto, invalidate } from "$app/navigation";
    import GenerateQR from "$lib/qr/GenerateQR.svelte";
    // import Posts from "$lib/components/Posts.svelte";
    // import Comments from '$lib/components/Comments.svelte';
    // import Likes from '$lib/components/Likes.svelte';
    // import Followers from "$lib/components/Followers.svelte";
    // import Followings from '$lib/components/Followings.svelte';
    import { onMount } from "svelte";
    import { showLeft, currentPath, profileImage, navList, TopBarHeight, isAuth } from "$lib/stores";
    import { browser } from '$app/environment';
    import { enhance } from "$app/forms";
    $: $currentPath = `${$page.params.publicID}`;
    export let data;
    let profile = "", banner;
    let active;
    let generateQR = false,
        downloadQR = false;
    let ids, privateID, otpID, publicID;
    // $: tabs = $page.data.user && $page.data.user.publicID === data.currentUser.publicID && $page.data.user.rank.label === 'Teacher' ? ['Teacher Profile'] : ['Questions', 'Certificates', 'Transcripts', 'Invoices'];
    // let targetURL = {
    //     'Questions': `/${$page.data.user.publicID}/questions`,
    //     'Certificates': `/${$page.data.user.publicID}/certificates`,
    //     'Transcripts': `/${$page.data.user.publicID}/transcripts`,
    //     'Invoices': `/${$page.data.user.publicID}/invoices`,
    //     'Teacher Profile': `/${$page.data.user.publicID}/teacher`
    // }
    // let workouts = [], questions = [], likes = [];
    let profilePicReader, bannerReader;
    onMount(async () => {
        // console.log('onmount...', data.currentUser.publicID)
        
        profilePicReader = new FileReader();
        profilePicReader.readAsDataURL(data.profilepicData);
        profilePicReader.onload = (e) => {
            profile = e.target.result;
        };

        if(data.profilepicData.size == 0) profile = '/avatar.svg';

        bannerReader = new FileReader();
        bannerReader.readAsDataURL(data.bannerpicData);
        bannerReader.onload = (e) => {
            banner = e.target.result;
        };
        // if($page.data.user && $page.data.user.publicID === data.currentUser.publicID) {
        //     let resQuestions = await fetch(`/api/${$page.data.user.publicID}/questions`);
        //     let resWorkouts = await fetch(`/api/workout`);
        //     if(!resWorkouts.ok) {
        //         workouts = []
        //     } else {
        //         workouts = await resWorkouts.json();
        //     }
        //     if(!resQuestions.ok) {
        //         questions = []
        //     } else {
        //         questions = await resQuestions.json();
        //     }
        // }
    });
    $: if(browser) {
        
        profilePicReader = new FileReader();
        profilePicReader.readAsDataURL(data.profilepicData);
        profilePicReader.onload = (e) => {
            profile = e.target.result;
            // console.log(profile)
        };
        
        
        
        bannerReader = new FileReader();
        bannerReader.readAsDataURL(data.bannerpicData);
        bannerReader.onload = (e) => {
            banner = e.target.result;
        };
    }
    $: $isAuth = $page.data.user;
    const getAssignments = async () => {
        const res = await fetch(`/api/assignments`);
        if(!res.ok) {
            return []
        } else {
            return await res.json();
        }
    }
    const getLikes = async () => {
        const resLikes = await fetch(`/api/${$page.params.publicID}/likes`)
        if(!resLikes.ok) return [];
        else {
            return await resLikes.json();
        }
    }
    const getPosts = async () => {
        const resPosts = await fetch(`/api/${$page.params.publicID}/posts`)
        if(!resPosts.ok) return [];
        else {
            return await resPosts.json();
        }
    }
    const getComments = async () => {
        const resComments = await fetch(`/api/${$page.params.publicID}/comments`)
        if(!resComments.ok) return [];
        else {
            return await resComments.json();
        }
    }
    const follow = async () => {
        let res = await fetch(`/api/${$page.params.publicID}/following`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({})
        });
        if(!res.ok) {
            alert('Failed to Follow')
            return
        }
        
        await invalidate(`/api/${data.currentUser.publicID}`)
        data = data;
        // console.log('following...', data.currentUserDetail.isFollowing)
        // alert('Added to following!!')
    }
    const unfollow = async () => {
        let res = await fetch(`/api/${$page.params.publicID}/following`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({})
        });
        if(!res.ok) {
            alert('Failed unfollow')
            return
        }
        
        await invalidate(`/api/${data.currentUser.publicID}`)
        data = data;
        // console.log('unfollowing...', data.currentUserDetail.isFollowing)
        // alert('Removed from following!!')
    }
    // $: console.log($page.data.user, data.currentUser.publicID)
</script>

<svelte:head>
    <title
        >Dr Mithilesh Kumar</title
    >
    <meta
        name="description"
        content="Dr Mithilesh Kuamr"
    />
    <meta
        name="keywords"
        content="drmithileshkumar.com, mathematics"
    />

    <link
        rel="canonical"
        href="https://drmithileshkumar.com/${data.currentUser.publicID}"
    />
</svelte:head>
<article>
    <!-- <div class="sticky" style="top: {$TopBarHeight}px;">
        {#if $page.data.user && $page.data.user.publicID === data.currentUser.publicID}
            <Card>
                <TabBar {tabs} let:tab bind:active>
                    <Tab {tab} on:click={() => goto(targetURL[tab])}>
                        <Label>{tab}</Label>
                    </Tab>
                </TabBar>
            </Card>
        {/if}
    </div> -->
    <User {banner} {profile} currentUser={data.currentUser} currentUserDetail={data.currentUserDetail} bind:active={data.active} />
    
    {#if data.active === 'Assignments'}
        {#await getAssignments() then assignments}
            <Datatable style="width:100%">
                <Head>
                    <Row>
                        <Cell>CourseID</Cell>
                        <Cell>Title</Cell>
                        <Cell>Status</Cell>
                        <Cell>Action</Cell>
                    </Row>
                </Head>
                <Body>
                    {#each assignments as assignment}
                        <Row>
                            <Cell>{assignment.courseID}</Cell>
                            <Cell>{assignment.title}</Cell>
                            <Cell>{assignment.status}</Cell>
                            <Cell>
                                {#if assignment.status === 'Draft'}
                                    <Button on:click={() => goto(`/assignments/${assignment.assignmentID}`)}><Label>Go</Label></Button>
                                {:else}
                                    <Button on:click={() => goto(`/assignments/${assignment.assignmentID}/solution`)}><Label>Solution</Label></Button>
                                {/if}
                            </Cell>
                        </Row>
                    {/each}
                </Body>
            </Datatable>
        {/await}
    {:else if data.active === 'Log Out'}
        <Card>
            <Content style="display:flex;align-items:center;justify-content:center;">
                <div class="authQR">
                    <GenerateQR
                        data={privateID + " " + otpID}
                        filename={publicID}
                        autoDownload={false}
                    />
                </div>
            </Content>
            <Actions>
                <form use:enhance method="POST" action="?/logout">
                    <!-- <button class="btn btn-outline-danger">Or click here to logout.</button> on:click={(e) => (e.preventDefault(), logout())}-->
                    <Button style="width:100%;" class="logout">Log out</Button>
                </form>
            </Actions>
        </Card>
    {/if}

</article>

<style>
    article {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    /* .sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 4em;
        z-index: 5;
    } */
    .authQR {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
