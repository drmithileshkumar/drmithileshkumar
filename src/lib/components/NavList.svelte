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
    import { Svg } from '@smui/common';
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { profileImage, navList } from "$lib/stores";
	import Ripple from "@smui/ripple";

    export let expanded = true;
    export let name;
    export let url;
    export let topics;
    function toggle() {
		expanded = !expanded;
	}
</script>
<style>
	button {
		/* padding: 0 0 0 1em; */
		background: url(/tutorial/icons/folder.svg) 0 0.1em no-repeat;
		background-size: 1em 1em;
		color: currentColor;
		font-weight: bold;
		cursor: pointer;
		border: none;
		margin: 0 0 0 -0.4em;
	}

	/* .expanded {
		background-image: "url(/tutorial/icons/folder-open.svg)";
	} */

	ul {
		padding: 0.2em 0 0 0.5em;
		margin: 0 0 0 0.5em;
		list-style: none;
		border-left: 1px solid rgba(128, 128, 128, 0.4);
	}

	li {
		padding: 0em 0;
	}
	
    a {
        text-decoration: none;
    }
</style>

<span style="display:flex;flex-direction:row;gap:0.2em;padding: 0.2em 0;">
    <button class="material-symbols-outlined" on:click={toggle}>{expanded ? "expand_less" : "expand_more"}</button>
    <a use:Ripple={{surface: true}} href="{url}" style='font-weight: bold'>{name}</a>
</span>

{#if expanded}
	<List style="background: rgba(0, 100, 200, 0.05);margin:0 0 0 0.5em;box-shadow: -1px 1px 1px gray" dense>
		{#each topics as topic}
			{#if topic.topics}
				<svelte:self {...topic} />
			{:else}
				<Item on:SMUI:action={() => goto(topic.url)}>
					<Graphic class="material-icons">topic</Graphic>
					<Text>{topic.name}</Text>
				</Item>
			{/if}
			
		{/each}
	</List>
	<!-- <ul>
		{#each topics as topic}
			<li>
				{#if topic.topics}
					<svelte:self {...topic} />
				{:else}
					<a style="font-size:0.8em;" href="{topic.url}">{topic.name}</a>
				{/if}
			</li>
		{/each}
	</ul> -->
{/if}