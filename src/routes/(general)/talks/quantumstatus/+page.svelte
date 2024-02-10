<script>
    // @ts-nocheck
        import Card, {Content} from '@smui/card';
        import List, { Item, Graphic, Separator, Text } from '@smui/list';
        import Datatable, {Head, Body, Row, Cell} from '@smui/data-table';
        import {goto} from "$app/navigation";
        import Message from '$lib/ui/Message.svelte';
        import Link from '$lib/ui/Link.svelte';
        import {page} from '$app/stores';
        import {onMount} from 'svelte';
        import { currentPath } from "$lib/stores";
        import { darkMode } from "$lib/stores"
        let clicked;
        $currentPath = "Current Status of Quantum Computing";
        $darkMode = false;
        onMount(() => {
            MathJax.typeset();
        });
    </script>
    <style>
        article {
            display:flex;
            flex-direction: column;
            gap: 0.5em;
        }
        h3,h5 {
            margin: 0.5em 0;
        }
    </style>
    <svelte:head>
        <title>Current Status of Quantum Computing</title>
        <link rel="canonical" href="https://drmithileshkumar.com/talks/quantumstatus" />
        <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
    </svelte:head>
    <article>
        <h4>
            Current status of Quantum Computing
        </h4>
        <h5>Part 1: Introduction of Quantum Computing</h5>
        <Card>
            <Content>
                <Datatable style="width:100%;">
                    <Head>
                        <Row>
                            <Cell>Time</Cell>
                            <Cell>Topic</Cell>
                        </Row>
                    </Head>
                    <Body></Body>
                </Datatable>
            </Content>
        </Card>
        <h5>Part 2: Challenges and Research directions</h5>
        <Card>
            <Content>
                <Datatable style="width:100%;">
                    <Head>
                        <Row>
                            <Cell>Time</Cell>
                            <Cell>Topic</Cell>
                        </Row>
                    </Head>
                    <Body></Body>
                </Datatable>
            </Content>
        </Card>
    </article>