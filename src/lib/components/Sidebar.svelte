<script lang="ts">
    //@ts-nocheck
    import Card, { Content } from "@smui/card";
    import Footer from "$lib/footer/Footer.svelte";
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
    import Fab, { Icon } from "@smui/fab";
    import { Svg } from "@smui/common";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { profileImage, navList } from "$lib/stores";
    import NavList from "./NavList.svelte";
    export let isAuth = null;
</script>

<aside>
    <!-- <div class="fixed"> -->
    <!-- {#if isAuth} -->
        {#if $navList.length > 0}
            <Card>
                <!-- <Content> -->
                <NavList name="{$navList[0].name}" url="{$navList[0].url}" topics={$navList[0].topics} expanded />
                <!-- <List>
                    {#each $navList as link}
                        <Item
                            on:SMUI:action={() =>
                                goto(`/${$page.data.user.publicID}${link.url}`)}
                        >
                            <Graphic class="material-icons">menu_book</Graphic>
                            <Text>{link.name}</Text>
                        </Item>
                    {/each}
                </List> -->

                <!-- </Content> -->
            </Card>
        {/if}
    <!-- {/if} -->
    <!-- </div> -->
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
