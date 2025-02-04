<script lang="ts">
	// @ts-nocheck
	import { typeset } from '$lib/shared/typeset';
	import Link from '$lib/ui/Link.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Card, { Content, Actions } from '@smui/card';
	import Button from '@smui/button';
	import Ripple from '@smui/ripple';
	import NavList from '$lib/components/NavList.svelte';
	import { currentPath } from '$lib/stores';
	import { darkMode, navList } from '$lib/stores';
	import { contents, contentNav } from '$lib/pages/research/content';
    import Pathlist from "$lib/components/Pathlist.svelte";
    import CourseNavigation from "$lib/components/CourseNavigation.svelte";
	
	$navList = contents;
	$currentPath = 'Research';
	// $darkMode = false;
	// onMount(() => {
	//     MathJax.typeset();
	// });
</script>

<svelte:head>
	<title>Research</title>
	<link rel="canonical" href="https://drmithileshkumar.com/courses/algorithms" />
	<meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4 style="margin: 0.5em 0;">
        Research
    </h4>
	<Card style="background-color: rgba(0, 100, 100, 0.1">
		<NavList name={$navList[0].name} url={$navList[0].url} topics={$navList[0].topics} expanded />
	</Card>
	<Card>
		<Content>
			<h6 class="introduction">Introduction</h6>
			<p>
				My research has mostly been about inventing algorithms for hard computational problems spanning many fields. The tools mostly come from probability, graph theory and linear algebra.
			</p>
			<p>
				Most of these algorithms tend to be very technical and as I journey through them, I intend to present the basic intuitions, hoping that the reader finds them useful.
			</p>
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
	p,
	li {
		opacity: 0.8;
	}
	h2,
	h3,
	h4,
	h5 {
		margin: 0.5em 0;
	}
	h5 {
		font-size: 1.1em;
	}
	h6 {
		font-size: 1em;
		margin: 0.5em 0;
		color: rgba(0, 150, 200, 1);
	}
	strong {
		color: goldenrod;
		opacity: 1;
	}
	a {
		cursor: pointer;
	}
	.question {
		cursor: pointer;
		padding: 0.3em;
	}
</style>
