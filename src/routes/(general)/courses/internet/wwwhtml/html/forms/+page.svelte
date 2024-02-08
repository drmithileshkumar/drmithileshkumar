<script lang="ts">
    // @ts-nocheck
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import xml from "svelte-highlight/languages/xml";
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
    import { contents } from "$lib/pages/courses/internet/content";
	import WebPractice from "$lib/pages/courses/internet/WebPractice.svelte";
	import DataTable, {Head, Body, Row, Cell} from "@smui/data-table";

    $navList = contents;
    $currentPath = "Forms";
    $darkMode = false;
    // onMount(() => {
    //     MathJax.typeset();
    // });
    let htmlContent = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <!--include external resources here like adsense, javascript, styles-->
    </head>   
    <body>   
        <form action="" method="get">
            <!---form controls like input, select, button go here -->
        </form>
    </body> 
</html>`
let htmlContent1 = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <!--include external resources here like adsense, javascript, styles-->
    </head>   
    <body>   
        
    </body> 
</html>`
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
        color: rgb(240, 85, 0);
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/forms" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
    {#if $darkMode}
        {@html githubDark}
    {:else}
        {@html github}
    {/if}
</svelte:head>
<article>
    <h4>
        Forms
    </h4>
    <Card>
        <Content>
            <h6>Topics</h6>
            <ol>
                <li><a href="#basicForm">The <code>form</code> Element</a></li>
                <li><a href="#inputForm">The <code>input</code> Element</a></li>
                <li><a href="#selectForm">The <code>select</code> Element</a></li>
                <li><a href="#textareaForm">The <code>textarea</code> Element</a></li>
                <li><a href="#buttonForm">The Action Buttons</a></li>
                <li><a href="#completeForm">A Complete Form</a></li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <p>
                A <code>form</code> is a container for taking input from users. There are various components that take inputs like number, text, files, options, buttons etc. These components are called input boxes (single line or multiple lines), checkboxes, radio buttons, menus etc. All of these components are inline elements. Each component has an associate value. The collection of these values is called <strong>form data</strong>. Every form whose data is to be processed on the server requires a <strong>submit</strong> button. When the user clicks the <em>submit</em> button, the form data is encoded and sent to the Web server.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="basicForm">The <code>form</code> Element</h6>
            <p>
                <code>form</code> element is a block level element. A required attribute of the <code>form</code> element is <code>action</code> which specifies the URL of the application on the Web server that is to be called when the user clicks the <em>Submit</em> button.
            </p>
            <p>
                The <code>method</code> attribute specifies which technique <code>get</code> or <code>post</code>, will be used to pass the form data to the server. The default is <code>get</code>. If no <code>method</code> attribute is given in the <code>{"<form>"}</code> tag, <code>get</code> will be used. The alternative technique is <code>post</code>. In both techniques, the form data is coded into a text string when the user clicks the <em>Submit</em> button. This text string is often called the <strong>query string</strong>.
            </p>
            <p>
                The query string has an assignment statement for each control that has a data value, with the name of the control as its left side and its value as its right side. These assignment statements are separated by ampersands (&).
            </p>
            <p>
                When the <code>get</code> method is used, the browser attaches the query string to the URL of the HTTP request, so the form data is transmitted to the server together with the URL. The browser inserts a question mark at the end of the actual URL just before the first character of the query string so that the server can easily find the beginning of the query string. The <code>get</code> method can also be used to pass parameters to the server when forms are not involved. (This cannot be done with <code>post</code>.) One last advantage of <code>get</code> is that a site bookmark can include specific form values, which makes it more specific than one with only the URL. One disadvantage of the <code>get</code> method is that some servers place a limit on the length of the URL string and truncate any characters past the limit. So, if the form has more than a few controls, <code>get</code> is not a good choice. Because the form values are displayed by the browser, <code>get</code> should not be used if sensitive information such as passwords or credit card numbers is included in the form data.
            </p>
            <p>
                When the <code>post</code> method is used, the query string is passed by some other method to the form-processing program. There is no length limitation for the query string with the <code>post</code> method, so, obviously, it is the better choice when there are more than a few controls in the form. There are also some security concerns with <code>get</code> that are not a problem with <code>post</code>.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContent} cssContent={""} jsContent={""} />
    <Card>
        <Content>
            <h6 id="inputForm">The <code>input</code> Element</h6>
            <p>
                The <code>input</code> element is the most versatile input mechanism. It has an attribute called <code>type</code> that can take many values like text, number, date etc shown in the table below. Except to reset and submit input types, all types require another attribute <code>name</code> that act as <em>variables</em>. These names are used on the server-side code. In the client-side, the elements are identified by their ids. Hence, each input element has <code>id, name</code> and <code>value</code> attributes.
            </p>
            <DataTable style="width:100%;">
                <Head>
                    <Row>
                        <Cell>type</Cell>
                        <Cell>values</Cell>
                        <Cell>Description</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell>text</Cell>
                        <Cell>a string</Cell>
                        <Cell style="white-space:normal;">use it with attribute <code>size</code> to specifies the width of the text box.</Cell>
                    </Row>
                    <Row>
                        <Cell>password</Cell>
                        <Cell>a string</Cell>
                        <Cell style="white-space:normal;">the typed letters are displayed as &bullet; or * use it with attribute <code>size</code> to specifies the width of the text box.</Cell>
                    </Row>
                </Body>
            </DataTable>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContent1} cssContent={""} jsContent={""} />
    <Card>
        <Content>
            <h6 id="selectForm">The <code>select</code> Element</h6>
        </Content>
    </Card>
</article>
