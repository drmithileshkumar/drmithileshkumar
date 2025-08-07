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
    import { profileImage, navList } from "$lib/vectorial/stores";

    // $: isAuth = $page.data.user;
</script>

<nav>
    <div class="top">
        <!-- {#if isAuth}
        <List twoLine avatarList>
            
                <Item on:click={() => goto("/vectorial/auth")}>
                     <Graphic style="background-image: url(https://place-hold.it/40x40?text={"Mithilesh Kumar"
                    .split(' ')
                    .map((val) => val.substring(0, 1))
                    .join('')}&fontsize=16);" /> 
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
                     <Meta class='material-icons'>info</Meta>
                </Item>
            
        </List>
        {:else}
            <br>
            <Button on:click={() => goto("/vectorial/auth")}>Log in / Sign up</Button>
            
        {/if}
        <List>
            {#if isAuth}
                <Item
                    on:SMUI:action={() => goto(`/vectorial/${$page.data.user.publicID}`)}
                >
                    <Graphic class="material-icons">person</Graphic>
                    <Text>Profile</Text>
                </Item>
                
                <Item on:SMUI:action={() => goto(`/vectorial/${$page.data.user.publicID}/drawings`)}>
                    <Graphic class="material-symbols-outlined">gallery_thumbnail</Graphic>
                    <Text>Drawings</Text>
                </Item>
                <Separator />
            {/if}
            <Item
                    on:SMUI:action={() => goto(`/subscription`)}
                >
                    <Graphic class="material-icons">card_membership</Graphic>
                    <Text>Subscription</Text>
                </Item>
        </List> -->
        <List>
            <Item on:SMUI:action={() => goto(`/vectorial/drawings`)}>
                <Graphic class="material-symbols-outlined">gallery_thumbnail</Graphic>
                <Text>Drawings</Text>
            </Item>
            <Item on:SMUI:action={() => goto(`/vectorial/learn`)}>
                <Graphic class="material-icons">school</Graphic>
                <Text>Learn</Text>
            </Item>
            <Item wrapper>
                <List style="padding-left: 10px;">
                    <Item on:SMUI:action={() => goto("/vectorial/learn/shapes")}>
                        <Graphic class="material-icons">view_headline</Graphic>
                        <Text>Shapes</Text>
                    </Item>
                    <Item on:SMUI:action={() => goto("/vectorial/learn/text")}>
                        <Graphic class="material-icons">view_headline</Graphic>
                        <Text>Text</Text>
                    </Item>
                    <Item on:SMUI:action={() => goto("/vectorial/learn/latex")}>
                        <Graphic class="material-icons">view_headline</Graphic>
                        <Text>LaTeX</Text>
                    </Item>
                    <Item on:SMUI:action={() => goto("/vectorial/learn/paths")}>
                        <Graphic class="material-icons">view_headline</Graphic>
                        <Text>Paths</Text>
                    </Item>
                    <Item on:SMUI:action={() => goto("/vectorial/learn/styles")}>
                        <Graphic class="material-icons">view_headline</Graphic>
                        <Text>Styles</Text>
                    </Item>
                    <Item on:SMUI:action={() => goto("/vectorial/learn/transform")}>
                        <Graphic class="material-icons">view_headline</Graphic>
                        <Text>Transform</Text>
                    </Item>
                    <Item on:SMUI:action={() => goto("/vectorial/learn/markers")}>
                        <Graphic class="material-icons">view_headline</Graphic>
                        <Text>Markers</Text>
                    </Item>
                    <Item on:SMUI:action={() => goto("/vectorial/learn/filters")}>
                        <Graphic class="material-icons">view_headline</Graphic>
                        <Text>Filters</Text>
                    </Item>
                    <Item on:SMUI:action={() => goto("/vectorial/learn/masks")}>
                        <Graphic class="material-icons">view_headline</Graphic>
                        <Text>Masks</Text>
                    </Item>
                    <Item on:SMUI:action={() => goto("/vectorial/learn/advanced")}>
                        <Graphic class="material-icons">view_headline</Graphic>
                        <Text>Advanced</Text>
                    </Item>
                </List>
            </Item>
            
            <Item on:SMUI:action={() => goto("/home")}>
                <Graphic class="material-icons">home</Graphic>
                <Text>Home</Text>
            </Item>
            
           {#if $navList.length > 0}
                <Separator />
                {#each $navList as link}
                    <Item on:SMUI:action={() => goto(`/${$page.data.user.publicID}${link.url}`)}>
                        <Graphic class="material-icons">menu_book</Graphic>
                        <Text>{link.name}</Text>
                    </Item>
                {/each}
            {/if}
            <Item on:SMUI:action={() => goto('/settings')}>
                <Graphic class="material-icons">settings</Graphic>
                <Text>Settings</Text>
            </Item>
        </List>
        <Separator />
        <!-- {#if isAuth}
            <div class="post">
                <Button on:click={() => goto("/compose")}>
                    <Label>Create Post</Label>
                </Button>
            </div>
        {/if}  -->
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
    
    
    /* .post {
        display: flex;
        justify-content: center;
    } */
</style>
