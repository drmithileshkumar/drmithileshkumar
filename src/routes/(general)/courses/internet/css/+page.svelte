<script lang="ts">
    // @ts-nocheck
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import xml from "svelte-highlight/languages/xml";
    import css from "svelte-highlight/languages/css";
    import github from "svelte-highlight/styles/github";
    import githubDark from "svelte-highlight/styles/github-dark";
    import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

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
    import { contents, contentNav } from "$lib/pages/courses/internet/content";
    import Pathlist from "$lib/components/Pathlist.svelte";
    import CourseNavigation from "$lib/components/CourseNavigation.svelte";
    $navList = contents;
    $currentPath = "CSS";
    $darkMode = false;
    // onMount(() => {
    //     MathJax.typeset();
    // });
    let code1=`<!--Inline CSS-->
<p style="color: tomato;">I'm tomato</p>`
    let code2=`<head>
    <!---CSS from external file-->
    <link rel="stylesheet" href="/app.css"> 
    <!--Document level CSS-->
    <style>
    /* set text color of p elements to tomato */
        p {
            color: tomato;
        }
    </style>
</head>`
    let code3 = `selector1 {
    property1: value1;
    property2: value2;
}
selector2 {
    property3: value3;
    property4: value4;
}`
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
        font-size: 1.1em;
    }
    h6 {
        font-size: 1em;
        margin: 0.5em 0;
        color: rgb(74, 155, 139);
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
    <title>Internet Technologies</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
    {#if $darkMode}
        {@html githubDark}
    {:else}
        {@html github}
    {/if}
</svelte:head>
<article>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Cascading Style Sheets
    </h4>
    <Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <h5>Contents</h5>
            <NavList name="{$navList[0].topics[1].name}" url="{$navList[0].topics[1].url}" topics={$navList[0].topics[1].topics} expanded={false} />
        </Content>
    </Card>
    <Card>
        <Content>
            <p>
                Cascading Style Sheets or CSS are used to change the presentation of HTML. There are three ways in which styles can be applied to HTML elements: inline, document level and from external file.  Every HTML element has an attribute called <code>style</code>. The following code uses it to change the color of text inside the <code>p</code> element. This method is called <em>inline CSS</em>.
            </p>
            <Highlight language={xml} code={code1} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
            <p>
               
                The below code shows two ways to add CSS to HTML. Line 3 adds CSS from the external file <code>app.css</code>, while the codes between the lines 5-11 add document level CSS.
            </p>
            <Highlight language={xml} code={code2} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
            <p>
                The three levels of style sheets, in order from lowest level to highest level, are inline, document level, and external. Inline style sheets apply to the content of a single HTML element, document-level style sheets apply to the whole body of a document, and external style sheets can apply to the bodies of any number of documents. Inline style sheets have precedence over document style sheets, which have precedence over external style sheets. For example, if an external style sheet specifies a value for a particular property of a particular element, that value is used until a different value is specified in either a document style sheet or an inline style sheet. Likewise, document style sheet property values can be overridden by different property values in an inline style sheet. In effect, the properties of a specific element are those that result from a merge of all applicable style sheets, with lower-level style sheets having precedence in cases of conflicting specifications.
            </p>
            
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Basic Selectors</h6>
            <p>The general structure of CSS assignment is as follows:</p>
            <Highlight language={xml} code={code3} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
            <p>
                Here <code>selector</code> can be tag name, id, or class name. There are other advanced selectors which we'll cover later. In case of <code>id</code>, the selector is written as <code>#id</code> and in case of classname it is written as <code>.classname</code>. 
            </p>
            <p class="remarks">
                Notice that <code>id</code> must be unique for any element. <code>class</code> name can be assigned to as many elements as possible.
            </p>
        </Content>
    </Card>
</article>
