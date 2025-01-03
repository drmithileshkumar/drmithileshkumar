<script lang="ts">
    //@ts-nocheck
    import LinearEquation from "$lib/mathril/games/LinearEquation.svelte";
    import Card, { Content } from "@smui/card";
    import { goto } from "$app/navigation";
    import List, {
        Item,
        Graphic,
        Meta,
        Text,
        PrimaryText,
        SecondaryText,
    } from "@smui/list";
    import Button, { Label } from "@smui/button";
    import { currentPath } from '$lib/mathril/stores';
    $currentPath = "Games";
    let list;

    let options = [
        {
            name: "Inside Outside",
            description: "Shapes",
            link: "/mathril/games/inout",
            disabled: false,
        },
        {
            name: "Match Number",
            description: "Numbers",
            link: "/mathril/games/matchnumber",
            disabled: false,
        },
        {
            name: "Counting",
            description: "Numbers",
            link: "/mathril/games/counting",
            disabled: false,
        },
        {
            name: "Clock",
            description: "Time",
            link: "/mathril/games/clock",
            disabled: false,
        },
        {
            name: "Addition via counting",
            description: "Arithmetic",
            link: "/mathril/games/addition",
            disabled: false,
        },
        {
            name: "Subtraction via counting",
            description: "Arithmetic",
            link: "/mathril/games/subtraction",
            disabled: false,
        },
        {
            name: "Addition steps",
            description: "Arithmetic",
            link: "/mathril/games/addition2",
            disabled: false,
        },
        {
            name: "Subtraction steps",
            description: "Arithmetic",
            link: "/mathril/games/subtraction2",
            disabled: false,
        },
        {
            name: "Multiplication via counting",
            description: "Arithmetic",
            link: "/mathril/games/multiplication",
            disabled: false,
        },
        {
            name: "Division via counting",
            description: "Arithmetic",
            link: "/mathril/games/division",
            disabled: false,
        },
        {
            name: "Beat Target",
            description: "Arithmetic",
            link: "/mathril/games/beattarget",
            disabled: false,
        },
        {
            name: "Linear Equation",
            description: "Algebra",
            link: "/mathril/games/lineareqn",
            disabled: false,
        },
        {
            name: "Euclid's Division Lemma",
            description: "Arithmetic",
            link: "/mathril/games/eucliddivisionlemma",
            disabled: false,
        },
        {
            name: "Euclid's Division Algorithm",
            description: "Arithmetic",
            link: "/mathril/games/eucliddivisionalgorithm",
            disabled: false,
        },
        {
            name: "Differentiation",
            description: "Calculus",
            link: "/mathril/games/appDerivative",
            disabled: false,
        },
        {
            name: "Integration",
            description: "Calculus",
            link: "/mathril/games/integral",
            disabled: false,
        },
        {
            name: "Linear Programming",
            description: "Optimum value",
            link: "/mathril/games/lp",
            disabled: false,
        },
    ];
    let selectionIndex = -1;
</script>

<article>
    <List
        class="demo-list"
        bind:this={list}
        twoLine
        avatarList
        singleSelection
        selectedIndex={selectionIndex}
    >
        {#each options as item, i}
            <Item
                on:SMUI:action={() => (selectionIndex = i, goto(item.link))}
                disabled={item.disabled}
                selected={selectionIndex === i}
            >
                <Graphic class="material-symbols-outlined">sports_esports</Graphic>
                <Text>
                    <PrimaryText>{item.name}</PrimaryText>
                    <SecondaryText>{item.description}</SecondaryText>
                </Text>
                <Meta class="material-icons">info</Meta>
            </Item>
        {/each}
    </List>
</article>

<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
</style>
