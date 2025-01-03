<script lang="ts">
	//@ts-nocheck
	import List, {
		Item,
		Graphic,
		Meta,
		Text,
		PrimaryText,
		SecondaryText,
	} from "@smui/list";
	import Button, { Label } from "@smui/button";
	import Element from "./Element.svelte";
	import LayerDrawing from "$lib/vectorial/pages/layer/LayerDrawing.svelte";
	import LayerText from "$lib/vectorial/pages/layer/LayerText.svelte";
	import { elements, selectedId, canvasBackground } from "./stores";
	export let expanded = false;
	export let id;

	function toggle() {
		$selectedId = id;
		expanded = !expanded;
	}
	const toggleLock = () => {
		$elements[id].isLocked = !$elements[id].isLocked;
	};
</script>

<div class="element">
	{#if $elements[id].tag === 'text'}
		<span class="rect" on:click={toggle} style="background: {$canvasBackground};">
			<LayerDrawing>
				
					<LayerText text={$elements[id]} />
				
			</LayerDrawing>
		</span>
	{:else}
		<span on:click={toggle}>{id.split("-")[0] + id.split("-")[2]}</span>
	{/if}
	<span contenteditable="true" bind:textContent={$elements[id].name} />
	<span on:click={toggleLock} class="material-icons" style="font-size: 1.5em"
		>{$elements[id].isLocked ? "lock" : "lock_open"}</span
	>
</div>

{#if expanded}
	<ul>
		{#each $elements[id]?.children as element}
			<li>
				{#if $elements[element].children}
					<svelte:self id={element} />
				{:else}
					<Element id={element} />
				{/if}
			</li>
		{/each}
	</ul>
{/if}

<style>
	.element {
		display: grid;
		grid-template-columns: 1fr 1fr 40px;
		/* display: flex;
		flex-direction: row; */
		align-items: center;
		/* justify-content: space-between; */
		background: rgba(255, 0, 0, 0.1);
		padding: 0.5em 0;
		margin: 0.5em 0;
		
	}
	.element span {
		padding: 0 0 0 1em;
		/* background: url(/tutorial/icons/folder.svg) 0 0.1em no-repeat; */
		/* background-size: 1em 1em; */
		/* font-weight: bold; */
		cursor: pointer;
	}

	/* .expanded {
		background-image: url(/tutorial/icons/folder-open.svg);
	} */

	ul {
		padding: 0 0 0 0.1em;
		margin: 0 0 0 0.5em;
		list-style: none;
		border-left: 5px solid #b0b0b0;
		display: flex;
		flex-direction: column;
		gap: 0.1em;
	}

	li {
		background: rgba(0, 0, 0, 0.1);
		padding: 0.2em 0;
	}
	.rect {
		display: inline-flex;
		width: 50px;
		align-items: center;
	}
</style>
