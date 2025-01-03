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
    import { profileImage, navList, showLeft } from "$lib/mathril/stores";

</script>

<nav class="noScrollbar">
    <List>
        {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as cl}
            <Item on:SMUI:action={() => goto(`/mathril/class${cl}`)}>
                <Graphic class="material-icons">view_headline</Graphic>
                <Text>Class {cl}</Text>
            </Item>
        {/each}
        <Item on:SMUI:action={() => goto(`/mathril/games`)}> 
            <Graphic class="material-symbols-outlined">sports_esports</Graphic>
            <Text>Games</Text>
        </Item>
    </List>
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
</style>
