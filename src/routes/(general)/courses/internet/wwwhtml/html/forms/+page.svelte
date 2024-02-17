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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/forms" />
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
        Forms
    </h4>
    <Card style="background-color: rgba(0, 100, 100, 0.1">
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
                The <code>input</code> element is the most versatile input mechanism. It has an attribute called <code>type</code> that can take many values like text, number, date etc shown in the table below. Except <code>reset</code> and <code>submit</code> input types, all types require another attribute <code>name</code> that acts as a <em>variable</em>. These names are used on the server-side code. In the client-side, the elements are identified by their ids. Hence, each input element has <code>id, name</code> and <code>value</code> attributes.
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
                        <Cell style="white-space:normal;">a string, like name, username</Cell>
                        <Cell style="white-space:normal;">useful for single line text</Cell>
                    </Row>
                    <Row>
                        <Cell>password</Cell>
                        <Cell>a string</Cell>
                        <Cell style="white-space:normal;">the typed letters are displayed as &bullet; or *.</Cell>
                    </Row>
                    <Row>
                        <Cell>email</Cell>
                        <Cell>a valid email</Cell>
                        <Cell style="white-space:normal;">browser may validate email address</Cell>
                    </Row>
                    <Row>
                        <Cell>tel</Cell>
                        <Cell>phone number</Cell>
                        <Cell style="white-space:normal;">use it with <code>placeholder</code> to show an example, <code>pattern</code> for validation.</Cell>
                    </Row>
                    <Row>
                        <Cell>url</Cell>
                        <Cell>a url</Cell>
                        <Cell style="white-space:normal;">browser may validate a url automatically.</Cell>
                    </Row>
                    <Row>
                        <Cell>number</Cell>
                        <Cell>a number</Cell>
                        <Cell style="white-space:normal;">a number</Cell>
                    </Row>
                    <Row>
                        <Cell>range</Cell>
                        <Cell>range of numbers</Cell>
                        <Cell style="white-space:normal;">shows a slider, use it with attributes <code>min</code> and <code>max</code> to set the limits.</Cell>
                    </Row>
                    <Row>
                        <Cell>time</Cell>
                        <Cell>time</Cell>
                        <Cell style="white-space:normal;">select a time without time zone.</Cell>
                    </Row>
                    <Row>
                        <Cell>date</Cell>
                        <Cell>date</Cell>
                        <Cell style="white-space:normal;">a date input. A date picker may be shown by the browser.</Cell>
                    </Row>
                    <Row>
                        <Cell>datetime-local</Cell>
                        <Cell>local date time</Cell>
                        <Cell style="white-space:normal;">input date and time without time zone.</Cell>
                    </Row>
                    <Row>
                        <Cell>month</Cell>
                        <Cell>month</Cell>
                        <Cell style="white-space:normal;">select a month and year</Cell>
                    </Row>
                    <Row>
                        <Cell>week</Cell>
                        <Cell>week</Cell>
                        <Cell style="white-space:normal;">select a week and year</Cell>
                    </Row>
                    <Row>
                        <Cell>color</Cell>
                        <Cell>color</Cell>
                        <Cell style="white-space:normal;">input color. A color picker may be shown by the browser.</Cell>
                    </Row>
                    <Row>
                        <Cell>image</Cell>
                        <Cell>image</Cell>
                        <Cell style="white-space:normal;">use image in the submit button, use with attributes <code>src</code> to locate the image, <code>width</code> and <code>height</code> for dimensions.</Cell>
                    </Row>
                    <Row>
                        <Cell>file</Cell>
                        <Cell>file</Cell>
                        <Cell style="white-space:normal;">shows a button to browse and select a file input.</Cell>
                    </Row>
                    <Row>
                        <Cell>checkbox</Cell>
                        <Cell>checkbox</Cell>
                        <Cell style="white-space:normal;">select zero or more options of a limited number of choices. When <code>name</code> attribute is same, then query string has multiple entries with same variable.</Cell>
                    </Row>
                    <Row>
                        <Cell>radio</Cell>
                        <Cell>radio</Cell>
                        <Cell style="white-space:normal;">select only one of a limited number of choices, <code>name</code> attributes are same for related options.</Cell>
                    </Row>
                    <Row>
                        <Cell>search</Cell>
                        <Cell>search</Cell>
                        <Cell style="white-space:normal;">behaves like a regular text field</Cell>
                    </Row>
                    <Row>
                        <Cell>button</Cell>
                        <Cell>button</Cell>
                        <Cell style="white-space:normal;">used with attributes <code>onclick</code> that takes a method/function and <code>value</code> as a text to label the button.</Cell>
                    </Row>
                    <Row>
                        <Cell>reset</Cell>
                        <Cell>reset</Cell>
                        <Cell style="white-space:normal;">reset all form values to their default values.</Cell>
                    </Row>
                    <Row>
                        <Cell>submit</Cell>
                        <Cell>submit</Cell>
                        <Cell style="white-space:normal;">button for submitting form</Cell>
                    </Row>
                </Body>
            </DataTable>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContent1} cssContent={""} jsContent={""} />
    <Card>
        <Content>
            <h6 id="selectForm">The <code>select</code> Element</h6>
            <p>
                A menu is created using a <code>select</code> element.
            </p>
            <DataTable style="width:100%">
                <Head>
                    <Row>
                        <Cell>Attribute</Cell>
                        <Cell>Value</Cell>
                        <Cell>Description</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell><code>name</code></Cell>
                        <Cell style="white-space:normal;">a string (usually one word)</Cell>
                        <Cell style="white-space:normal;">variable for the value of selected item</Cell>
                    </Row>
                    <Row>
                        <Cell><code>multiple</code></Cell>
                        <Cell style="white-space:normal;"><code>multiple</code></Cell>
                        <Cell style="white-space:normal;">allows more than one item to be selected</Cell>
                    </Row>
                    <Row>
                        <Cell><code>size</code></Cell>
                        <Cell style="white-space:normal;">a number</Cell>
                        <Cell style="white-space:normal;">specify the number of menu items that initially are 
                            to be displayed for the user, default value is 1</Cell>
                    </Row>
                </Body>
            </DataTable>
            <p>
                Items in the menu are specified with <code>option</code> element, similar to <code>li</code> in case of lists. The content (the text) in the <code>option</code> tag is the value of that <em>option</em>. To assign a value different than the textcontent, <code>option</code> has an attribute called <code>value</code>.
            </p>
            <p>
                An attribute <code>selected</code> to an <code>option</code> implies that the option is pre-selected.
            </p>
            <p class="remark">Use <code>ctrl</code> to select more than one item in case of <code>multiple</code></p>
            <p>
                We can use <code>optgroup</code> to create separate groupings with label inside the menu as shown below.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentSelect} cssContent={""} jsContent={""} />
    <Card>
        <Content>
            <h6 id="textareaForm">The <code>textarea</code> Element</h6>
            <p>
                <code>textarea</code> is used to enter multiline text.
            </p>
            <p>
                Usually <code>textarea</code> box is resizable. Attributes like <code>cols</code> and <code>rows</code> can be provided to start with a given number of columns and rows.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentTextarea} cssContent={""} jsContent={""} />
    <h4>Exercise</h4>
    <Card>
        <Content>
            <div class="question">
                Create a user login page with input fields for username (email), password and a button for login. Create a link for forgot password and another button for sign up.
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Create a form for flight booking with fields for destination, date of journey, checkbox for round trip, date for return journey and button to find available flights.
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Create a form for LPG connection with input fields for name, aadhar card, address, email, phone and input field to upload passport size photo.
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Create a select menu that shows five states in India with at least three major cities in each state. Use <code>optgroup</code> for the states.
            </div>
        </Content>
    </Card>
</article>
