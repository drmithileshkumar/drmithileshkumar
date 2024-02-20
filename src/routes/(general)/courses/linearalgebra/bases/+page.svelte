<script lang="ts">
    // @ts-nocheck
    import { typeset } from "$lib/shared/typeset";
    import Link from '$lib/ui/Link.svelte';
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    import Card, { Content, Actions } from "@smui/card";
    import Button from "@smui/button";
    import Ripple from "@smui/ripple";
    import NavList from '$lib/components/NavList.svelte'
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores";
    import { contents, contentNav } from "$lib/pages/courses/linearalgebra/content";
    import Pathlist from "$lib/components/Pathlist.svelte";
	import CourseNavigation from "$lib/components/CourseNavigation.svelte";
    $navList = contents;
    $currentPath = "Bases and linear independence";
    $darkMode = false;
    // onMount(() => {
    //     MathJax.typeset();
    // });
    
</script>
<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    p, li {
        opacity: 0.8;
    }
    h2, h3, h4, h5 {
        margin: 0.5em 0;
    }
    h5 {
        font-size: 1.7em;
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
<svelte:head>
    <title>Linear Algebra</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/linearalgebra/bases" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Bases and linear independence
    </h4>
    <Card>
        <Content>
            <h6>Vector space</h6>
            <p>
                A vector space over a field \(F\) is a non-empty set \(V\) together with a binary operation and a binary function
            </p>
            <ul>
                <li>
                    <strong>binary operation</strong> called vector addition such that forall \( \vert \psi\rangle\) and \(\vert \phi\rangle\) in \(V\), their sum \(\vert \psi\rangle + \vert \phi\rangle\) belongs to \(V\).
                </li>
                <li>
                    <strong>binary function</strong> called scalar multiplication such that for any scalar \(a\in F\) and any vector \(\vert \psi\rangle \in V\), we have \(a\vert \psi\rangle \in V\).
                </li>
            </ul>
            <p>
                These operations then must satisfy for \(V\) to be a vector space:
            </p>
            <ol>
                <li>
                    <strong>Associativity</strong> of vector addition
                </li>
                <li>
                    <strong>Commutativity</strong> of vector addition
                </li>
                <li>
                    <strong>Identity element</strong> of vector addition
                </li>
                <li>
                    <strong>Inverse elements</strong> of vector addition
                </li>
                <li>
                    <strong>Identity element</strong> of scalar multiplication
                </li>
                <li>
                    <strong>Distributivity</strong> of scalar multiplication with respect to vector addition
                </li>
                <li>
                    <strong>Distributivity</strong> of scalar multiplication with respect to field addition
                </li>
            </ol>
        </Content>
    </Card>
</article>
