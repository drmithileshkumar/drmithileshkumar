<script lang="ts">
    //@ts-nocheck
    import User from "$lib/components/User.svelte";
    import { page } from "$app/stores";
    import Card, {Content, Actions} from '@smui/card';
    import Button from '@smui/button';
    import List, { Separator } from "@smui/list";
    import Tab, { Label } from "@smui/tab";
    import TabBar from "@smui/tab-bar";
    import { goto, invalidate } from "$app/navigation";

    // import Posts from "$lib/components/Posts.svelte";
    // import Comments from '$lib/components/Comments.svelte';
    // import Likes from '$lib/components/Likes.svelte';
    // import Followers from "$lib/components/Followers.svelte";
    // import Followings from '$lib/components/Followings.svelte';
    import { onMount } from "svelte";
    import { showLeft, currentPath, profileImage, navList, TopBarHeight } from "$lib/stores";
    import { browser } from '$app/environment';
    
    $: $currentPath = `${$page.params.publicID}`;
    export let data;
    let profile = "", banner;
    let active;
    
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
        >Mathril</title
    >
    <meta
        name="description"
        content="Mathematics workout for all."
    />
    <meta
        name="keywords"
        content="mathril.com, mathematics"
    />

    <link
        rel="canonical"
        href="https://mathril.com/${data.currentUser.publicID}"
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
    
    {#if data.active === 'Posts'}
        {#await getPosts() then posts}
            <Posts posts={posts} {profile}/>
        {/await}
    {:else if data.active === 'Comments'}
        {#await getComments() then comments}
            <Comments comments={comments} {profile}/>
        {/await}
    {:else if data.active === 'Likes'}
        <Likes {profile}/>
    {:else if data.active?.includes('Following')}
        <Followings {profile}/>
    {:else if data.active?.includes('Followers')}
        <Followers {profile}/>
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
</style>
