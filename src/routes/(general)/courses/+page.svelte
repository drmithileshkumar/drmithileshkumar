<script>
	// @ts-nocheck
	import Card, { Content } from '@smui/card';
	import List, { Item, Graphic, Separator, Text } from '@smui/list';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { currentPath } from '$lib/stores';
	import { darkMode } from '$lib/stores';
	import Pathlist from '$lib/components/Pathlist.svelte';
	let clicked;
	$currentPath = 'Courses';
	$darkMode = false;
	// onMount(() => {
	//     MathJax.typeset();
	// });
</script>

<svelte:head>
	<title>Courses</title>
	<link rel="canonical" href="https://drmithileshkumar.com/courses" />
	<meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
	<Pathlist origin={$page.url.origin} pathname={$page.url.pathname} />
	<h3>Courses</h3>
  <Card>
    <Content>
      <h5>General</h5>

      <List class="courses" dense>
        <Item on:SMUI:action={() => goto('/courses/algorithms')}>
					<Graphic class="material-icons">menu_book</Graphic>
					<Text>Algorithms</Text>
				</Item>
      </List>
    </Content>
  </Card>
	<Card>
		<Content>
			<h5>DSU</h5>

			<List class="courses" dense>
				<Item on:SMUI:action={() => goto('/courses/mathematics1')}>
					<Graphic class="material-icons">menu_book</Graphic>
					<Text>Mathematics I</Text>
				</Item>
				<Item on:SMUI:action={() => goto('/courses/mathematics2')}>
					<Graphic class="material-icons">menu_book</Graphic>
					<Text>Mathematics II</Text>
				</Item>
				<Item on:SMUI:action={() => goto('/courses/internet')}>
					<Graphic class="material-icons">menu_book</Graphic>
					<Text>Internet Technologies</Text>
				</Item>
				<Item on:SMUI:action={() => goto('/courses/internetlab')}>
					<Graphic class="material-icons">menu_book</Graphic>
					<Text>Internet Technologies Lab</Text>
				</Item>
				<Item on:SMUI:action={() => goto('/courses/discrete')}>
					<Graphic class="material-icons">menu_book</Graphic>
					<Text>Discrete Mathematical Structures</Text>
				</Item>
				<Item on:SMUI:action={() => goto('/courses/quantum')}>
					<Graphic class="material-icons">menu_book</Graphic>
					<Text>Quantum Computation and Quantum Information</Text>
				</Item>
			</List>
		</Content>
	</Card>
	<Card>
		<Content>
			<h5>Quantum Computation</h5>

			<List class="courses" dense>
				<Item on:SMUI:action={() => goto('/courses/linearalgebra')}>
					<Graphic class="material-icons">menu_book</Graphic>
					<Text>Linear Algebra</Text>
				</Item>
				<Item on:SMUI:action={() => goto('/courses/quantummechanics')}>
					<Graphic class="material-icons">menu_book</Graphic>
					<Text>Quantum Mechanics</Text>
				</Item>
				<Item on:SMUI:action={() => goto('/courses/circuits')}>
					<Graphic class="material-icons">menu_book</Graphic>
					<Text>Quantum Circuits</Text>
				</Item>
				<Item on:SMUI:action={() => goto('/courses/quantumalgorithms')}>
					<Graphic class="material-icons">menu_book</Graphic>
					<Text>Quantum Algorithms</Text>
				</Item>
				<Item on:SMUI:action={() => goto('/courses/quantumcomputers')}>
					<Graphic class="material-icons">menu_book</Graphic>
					<Text>Quantum Computers</Text>
				</Item>
				<Item on:SMUI:action={() => goto('/courses/quantuminformation1')}>
					<Graphic class="material-icons">menu_book</Graphic>
					<Text>Quantum Information 1</Text>
				</Item>
				<Item on:SMUI:action={() => goto('/courses/qec')}>
					<Graphic class="material-icons">menu_book</Graphic>
					<Text>Quantum Error Correction</Text>
				</Item>
				<Item on:SMUI:action={() => goto('/courses/quantuminformation2')}>
					<Graphic class="material-icons">menu_book</Graphic>
					<Text>Quantum Information 2</Text>
				</Item>
				<Item on:SMUI:action={() => goto('/courses/quantumcryptography')}>
					<Graphic class="material-icons">menu_book</Graphic>
					<Text>Quantum Cryptography</Text>
				</Item>
				<Item on:SMUI:action={() => goto('/courses/quantumcommunication')}>
					<Graphic class="material-icons">menu_book</Graphic>
					<Text>Quantum Communication</Text>
				</Item>
				<Item on:SMUI:action={() => goto('/courses/quantumml')}>
					<Graphic class="material-icons">menu_book</Graphic>
					<Text>Quantum Machine Learning</Text>
				</Item>
			</List>
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
