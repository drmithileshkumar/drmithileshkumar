<script lang="ts">
    //@ts-nocheck
    import List, {
        Item,
        Graphic,
        Separator,
        Meta,
        Text,
        PrimaryText,
        SecondaryText,
    } from "@smui/list";
    import Button, { Label } from "@smui/button";
    
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { profileImage, navList } from "$lib/stores";

    export let isAuth = null;
</script>

<nav>
    <div class="top">
        <!-- <List twoLine avatarList>
            {#if isAuth}
                <Item on:click={() => goto("/auth")}>
                    <Graphic>
                        <img
                            class="round"
                            width="40px"
                            height="40px"
                            src={$profileImage}
                            alt="Profile"
                        />
                    </Graphic>
                    <Text>
                        <PrimaryText>{isAuth.name}</PrimaryText>
                        <SecondaryText>{isAuth.publicID}</SecondaryText>
                    </Text>
                </Item>
            {:else}
                <Item>
                    <Button on:click={() => goto("/auth")}
                        >Log in / Sign up</Button
                    >
                </Item>
            {/if}
        </List> -->
        <List>
            {#if isAuth}
                <Item
                    on:SMUI:action={() => goto(`/${$page.data.user.publicID}`)}
                >
                    <Graphic class="material-icons">person</Graphic>
                    <Text>Profile</Text>
                </Item>
                <!-- <Item
                    on:SMUI:action={() => goto(`/${$page.data.user.publicID}/questions`)}
                >
                    <Graphic class="material-icons">card_membership</Graphic>
                    <Text>Questions</Text>
                </Item> -->
                <Item
                    on:SMUI:action={() => goto(`/${$page.data.user.publicID}/quiz`)}
                >
                    <Graphic class="material-icons">card_membership</Graphic>
                    <Text>Quizzes</Text>
                </Item>
                <Separator />
            {/if}
                <Item
                    on:SMUI:action={() => goto(`/about`)}
                >
                    <Graphic class="material-icons">person</Graphic>
                    <Text>About</Text>
                </Item>
                <Item
                    on:SMUI:action={() => goto(`/cv`)}
                >
                    <Graphic class="material-icons">badge</Graphic>
                    <Text>CV</Text>
                </Item>
        </List>
        <List>
            <!-- {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as cl}
                <Item on:SMUI:action={() => goto(`/class_${cl}`)}>
                    <Graphic class="material-icons">view_headline</Graphic>
                    <Text>Class {cl}</Text>
                </Item>
            {/each} -->
            <!-- <Item on:SMUI:action={() => goto("/home")}>
                <Graphic class="material-icons">home</Graphic>
                <Text>Home</Text>
            </Item> -->
            <!-- {#if $navList.length > 0}
                <Separator />
                {#each $navList as link}
                    <Item on:SMUI:action={() => goto(`/${$page.data.user.publicID}${link.url}`)}>
                        <Graphic class="material-icons">menu_book</Graphic>
                        <Text>{link.name}</Text>
                    </Item>
                {/each}
            {/if} -->
            <!-- <Item on:SMUI:action={() => goto('/settings')}>
                <Graphic class="material-icons">settings</Graphic>
                <Text>Settings</Text>
            </Item> -->
        </List>
        <!-- <Separator />
        {#if isAuth}
            <div class="post">
                <Button on:click={() => goto("/compose")}>
                    <Label>Create Post</Label>
                </Button>
            </div>
        {/if} -->
    </div>
    <div class="bottom" />
</nav>

<style>
    nav {
        /* height: calc(100vh - 5em); */
        /* height: 500px; */
        overflow-y: auto;
        display: flex;
        justify-content: start;
        flex-direction: column;
        /* position: sticky;
        top: 0.5em; */
        padding-bottom: 5em;
    }
    .round {
        border-radius: 50%;
        /* overflow: hidden; */
    }
    
    /* .post {
        display: flex;
        justify-content: center;
    } */
</style>
