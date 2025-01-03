<script lang="ts">
    //@ts-nocheck
    import Card, {Content, Actions} from '@smui/card'
    import Button, {Label} from '@smui/button';
    
    import Footer from "$lib/mathril/footer/Footer.svelte";
    import List, {
        Item,
        Graphic,
        Separator,
        Meta,
        Text,
        PrimaryText,
        SecondaryText,
    } from "@smui/list";
    
    import Fab, { Icon } from "@smui/fab";
    import { Svg } from "@smui/common";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { profileImage, navList, showRight, Guest, guestID } from "$lib/mathril/stores";

    $: isAuth = $page.data.user;
    $: user = isAuth ? $page.data.user.publicID : $guestID;
</script>

<aside>
    <!-- <div class="fixed"> -->
    <Card>
        <Actions>
            <Button style="width:100%;" on:click={() => $showRight = !$showRight}>Close Menu</Button>
        </Actions>
    </Card>
    
        {#if $navList && $navList.length > 0}
            <Card>
                <!-- <Content> -->

                <List>
                    
                        {#each $navList as link}
                            <Item on:SMUI:action={() => goto(link.isAdmin ? `/mathril/${link.url}`: `/mathril/${user}${link.url}`)}>
                                <Graphic class="material-icons">menu_book</Graphic>
                                <Text>{link.name}</Text>
                            </Item>
                        {/each}
                    <!-- {:else}
                        {#each $navList as link}
                            <Item on:SMUI:action={() => goto(`${link.url}`)}>
                                <Graphic class="material-icons">menu_book</Graphic>
                                <Text>{link.name}</Text>
                            </Item>
                        {/each}
                    {/if} -->
                </List>

                <!-- </Content> -->
            </Card>
        {/if}
    
    <!-- </div> -->
    <!-- <Card >
        <Content style="background: tomato;">
            <h1 class="mdc-typography-headline" style="font-weight:600; font-size:1.5em; line-height:1.1;margin:0.2em 0;color:rgba(0, 0, 255, 1)"> &#8377; 100</h1>
            <h3 class="mdc-typography-headline" style="font-weight:400; font-size:1.1em; line-height:1.1;margin:0.2em 0;color:rgba(220, 230, 20, 1);">7 Day Course</h3>
            <h2 class="mdc-typography-headline" style="font-size:1.4em; line-height:1.5;margin:0.2em 0;"><strong>Relations & Functions</strong></h2>
            <h2 class="mdc-typography-headline" style="font-size:1em; line-height:1.1;margin:0.2em 0;">Class <strong>12</strong></h2>
            <h2 class="mdc-typography-headline" style="font-size:0.9em; line-height:1.1;margin:0.2em 0 0;">Starting <strong>14 Nov, 2023</strong></h2>
        </Content>
        <Actions style="align-items:center;justify-content:center">
            <Button on:click={() => goto('/courses/relations12')}>
                Details
            </Button>
        </Actions>
    </Card> -->
    <Card>
        <Content>
            <Footer />
        </Content>
    </Card>
</aside>

<style>
    aside {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        overflow-y: auto;
    }
    /* @media only screen and (min-width: 600px) {
        .fixed {
            position: fixed;
            right: 0;
            width: 256px;
            overflow-y: scroll;
            height: 100vh;
        }
    } */
</style>
