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
	import Fab from '@smui/fab';
	import IconButton, { Icon } from '@smui/icon-button';
    import Button, { Label } from "@smui/button";
    import { Svg } from '@smui/common';
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { profileImage, navList } from "$lib/stores";
	import Ripple from "@smui/ripple";

    export let expanded = false;
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

<span style="display:flex;flex-direction:row;align-items:center;">
	<IconButton  toggle bind:pressed={expanded}>
		<Icon class="material-icons" on>remove</Icon>
		<Icon class="material-icons">add</Icon>
	  </IconButton>
    <a use:Ripple={{surface: true}} href={url} style='color:currentColor;padding: 0.5em 0;margin:0;width:100%;font-weight: bold'>{name}</a>
</span>

{#if expanded}
	<List style="margin:0 0 0 0.5em;box-shadow: -1px 1px 1px rgba(0,0,0,0.1)" dense>
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