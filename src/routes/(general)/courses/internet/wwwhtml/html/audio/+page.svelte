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
    import { contents, contentNav } from "$lib/pages/courses/internet/content";
	import WebPractice from "$lib/pages/courses/internet/WebPractice.svelte";
	import DataTable, {Head, Body, Row, Cell} from "@smui/data-table";
	import Pathlist from "$lib/components/Pathlist.svelte";
    import CourseNavigation from "$lib/components/CourseNavigation.svelte";
    // console.log($page.url)
    let pathComponents = $page.url.pathname.split('/');
    let pathUrls = pathComponents.map((u, index) => {
        let path = $page.url.origin;
        for(let i = 0; i <= index; i++) {
            path += pathComponents[i] + '/';
        }
        return path;
    })
    $navList = contents;
    $currentPath = "The audio Element";
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
        <form id="myForm" action="">
            <label for="username">
                Username: <input type="text" id="username" name="username" />    
            </label>
            <br/>
            <br/>
            <label for="password">
                Password: <input type="password" id="password" name="password" />    
            </label>
            <br/>
            <br/>
            <label for="email">
                Email: <input type="email" id="email" name="email" />    
            </label>
            <br/>
            <br/>
            <label for="telephone">
                Telephone: <input type="tel" id="telephone" name="telephone" />    
            </label>
            <br/>
            <br/>
            <label for="page">
                Website: <input type="url" id="page" name="homepage" />    
            </label>
            <br/>
            <br/>
            <label for="house">
                House: <input type="number" id="house" name="house" />    
            </label>
            <br/>
            <br/>
            <label for="date">
                Current date: <input type="date" id="date" name="date" />    
            </label>
            <br/>
            <br/>
            <label for="month">
                Last month: <input type="month" id="month" name="month" />    
            </label>
            <br/>
            <br/>
            <label for="week">
                Current Week: <input type="week" id="week" name="week" />    
            </label>
            <br/>
            <br/>
            <label for="color">
                Favourite Color: <input type="color" id="color" name="color" />    
            </label>
            <br/>
            <br/>
            <label for="file">
                Photo: <input type="file" accept="image/*" id="file" name="photo" />    
            </label>
            <br/>
            <br/>
            <label for="laptop">
                Laptop <input type="checkbox" id="laptop" name="laptop" value="Laptop" />    
            </label>
            <label for="mobile">
                Mobile <input type="checkbox" id="mobile" name="mobile" value='Mobile' />    
            </label>
            <br/>
            <br/>
            <label for="male">
                Male <input type="radio" id="male" name="gender" value="Male" />    
            </label>
            <label for="female">
                Female <input type="radio" id="female" name="gender" value="Female" />    
            </label>
            <br/>
            <br/>
            <input type="reset" id="reset" value="Reset" />
            <input type="button" id="button" onclick="console.log(document.getElementById('myForm').elements[0])" value="Alert" />
            <input type="submit" id="submit" value="submit" />    
        </form>
    </body> 
</html>`
let htmlContentSelect = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <!--include external resources here like adsense, javascript, styles-->
    </head>   
    <body>   
        <form action="" method="get">
            <!--Simple select menu -->
            <select name="simpleMenu">
                <option>Apple</option>
                <option>Samsung</option>
                <option>Mi</option>
                <option>OnePlus</option>
            </select>
            <!--Preselected item -->
            <select name="preSelected">
                <option>Apple</option>
                <option selected>Samsung</option>
                <option>Mi</option>
                <option>OnePlus</option>
            </select>
            <!--with size -->
            <select name="menuSize" size="3">
                <option>Apple</option>
                <option>Samsung</option>
                <option>Mi</option>
                <option>OnePlus</option>
            </select>
            <!--Multiple select-->
            <select multiple name="multipleValue">
                <option>Apple</option>
                <option>Samsung</option>
                <option selected>Mi</option>
                <option>OnePlus</option>
                <option>Nokia</option>
                <option>Motorola</option>
                <option>Vivo</option>
            </select>
            <!--Opt goup-->
            <select name="Nested">
                <optgroup label="Apple">
                    <option>iPhone</option>
                    <option>iPad</option>
                    <option>Mac</option>
                    <option>Air Pod</option>
                </optgroup>
                <optgroup label="Android">
                    <option>Samsung</opton>
                    <option>Mi</option>
                    <option>Vivo</option>
                    <option>Oppo</option>
                </optgroup>
            </select>
        </form>
    </body> 
</html>
`
let htmlContentTextarea = `<!DOCTYPE html>
<html lang = "en" >
    <head> 
        <title> Textarea </title>
        <meta charset = "utf-8" />
    </head>
    <body>
        <p>
            Please write about yourself
        </p>
        <form action = "handler">
            <p>
                <textarea name = "description"  rows = "3"  cols = "40">
            (Word limit 300) 
                </textarea>
            </p>
        </form>
    </body>
</html>

`
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
        text-decoration: none;
        cursor: pointer;
    }
    .question {
        cursor: pointer;
        padding: 0.3em;
    }
    :global(code) {
        background-color: rgba(0, 100, 100, 0.1);
    }
</style>
<svelte:head>
    <title>Internet Technologies</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/audio" />
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
        The <code>audio</code> Element
    </h4>
    <!-- <Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <h6>Topics</h6>
            <ol>
                <li><a href="#basicForm">The <code>form</code> Element</a></li>
                <li><a href="#inputForm">The <code>input</code> Element</a></li>
                <li><a href="#selectForm">The <code>select</code> Element</a></li>
                <li><a href="#textareaForm">The <code>textarea</code> Element</a></li>
            </ol>
            <p>For a better understanding of form submission, read <a href="/courses/internet/wwwhtml/fundamentals/http">HTTP protocol</a>.</p>
        </Content>
    </Card> -->
    
    <!-- <WebPractice htmlContent={htmlContent} cssContent={""} jsContent={""} /> -->
</article>
