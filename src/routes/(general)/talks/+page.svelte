<script>
	// @ts-nocheck
	import Card, { Content } from '@smui/card';
	import List, { Item, Graphic, Separator, Text } from '@smui/list';
	import { goto } from '$app/navigation';
	import Message from '$lib/ui/Message.svelte';
	import Link from '$lib/ui/Link.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { currentPath } from '$lib/stores';
	import { darkMode } from '$lib/stores';
	let clicked;
	$currentPath = 'Courses';
	$darkMode = false;
	onMount(() => {
		MathJax.typeset();
	});
</script>

<svelte:head>
	<title>Talks</title>
	<link rel="canonical" href="https://drmithileshkumar.com/talks" />
	<meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
	<h3>Talks</h3>
	<Card>
		<Content>
			<h5>Past</h5>
			<div>
				<List class="courses" dense>
                    <Item on:SMUI:action={() => goto('/talks/sorting')}>
						<Graphic class="material-icons">menu_book</Graphic>
						<Text>Sorting</Text>
					</Item>
					<Item on:SMUI:action={() => goto('/talks/quantumteleportation')}>
						<Graphic class="material-icons">menu_book</Graphic>
						<Text>Quantum Teleportation</Text>
					</Item>
				</List>
			</div>
		</Content>
	</Card>
	<h3>Workshops</h3>
	<Card>
		<Content>
			<h5>Upcoming</h5>
			<div>
				<List class="courses" dense>
					<Item on:SMUI:action={() => goto('/talks/quantumstatus')}>
						<Graphic class="material-icons">menu_book</Graphic>
						<Text>Current Status of Quantum Computing</Text>
					</Item>
				</List>
			</div>
		</Content>
	</Card>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		max-width: 750px;
        width: 90%;
        margin: auto;
	}
	h3,
	h5 {
		margin: 0.5em 0;
	}
</style>
