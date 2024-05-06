import { a as subscribe, e as set_store_value } from './utils-DH7689cv.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-Cv_bEuJL.js';
import { g as githubDark, a as github, c as contentNav, b as contents } from './content4-DqFQdaeR.js';
import { p as page } from './stores-CD1QeJjc.js';
import { C as Card } from './Card-w0EtY1mU.js';
import { C as Content } from './ActionIcons-CEcRhLH3.js';
import './Subheader-BwOM49vC.js';
import './client-CjdeEz1m.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-DCuXQBIu.js';
import { W as WebPractice } from './WebPractice-sTeZPA3c.js';
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from './Cell-C8wtb_ZZ.js';
import { P as Pathlist } from './Pathlist-VvNEpviv.js';
import { C as CourseNavigation } from './CourseNavigation-GbSn10Xu.js';
import './classAdderBuilder-B5RJlVtK.js';
import './exports-DuWZopOC.js';
import './index2-B3zlhmO5.js';
import './ContextFragment-Dwx7Ej1j.js';
import './CommonLabel-Bjz32QAu.js';
import './Suffix-DUyW9-NK.js';
import './Button-nlTGW0Wq.js';
import './Ripple-Yt1ZX6hy.js';
import '@codemirror/lang-javascript';
import '@codemirror/lang-xml';
import '@codemirror/lang-css';
import './prefixFilter-B6cFZsw3.js';

const css = {
  code: "article.svelte-1la69s{display:flex;flex-direction:column;gap:0.5em}p.svelte-1la69s,li.svelte-1la69s{opacity:0.8}h4.svelte-1la69s{margin:0.5em 0}h6.svelte-1la69s{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-1la69s{color:goldenrod;opacity:1}a.svelte-1la69s{text-decoration:none;cursor:pointer}.question.svelte-1la69s{cursor:pointer;padding:0.3em}code{background-color:rgba(0, 100, 100, 0.1)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n\\timport WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n\\timport DataTable, {Head, Body, Row, Cell} from \\"@smui/data-table\\";\\r\\n\\timport Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    // console.log($page.url)\\r\\n    let pathComponents = $page.url.pathname.split('/');\\r\\n    let pathUrls = pathComponents.map((u, index) => {\\r\\n        let path = $page.url.origin;\\r\\n        for(let i = 0; i <= index; i++) {\\r\\n            path += pathComponents[i] + '/';\\r\\n        }\\r\\n        return path;\\r\\n    })\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Forms\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    let htmlContent = \`<!DOCTYPE html> \\r\\n<!-- File name and document purpose --> \\r\\n<html lang = \\"en\\">   \\r\\n    <head>     \\r\\n        <title> A title for the document </title>\\r\\n        <meta charset = \\"utf-8\\" />     \\r\\n        <!--include external resources here like adsense, javascript, styles-->\\r\\n    </head>   \\r\\n    <body>   \\r\\n        <form action=\\"\\" method=\\"get\\">\\r\\n            <!---form controls like input, select, button go here -->\\r\\n        </form>\\r\\n    </body> \\r\\n</html>\`\\r\\nlet htmlContent1 = \`<!DOCTYPE html> \\r\\n<!-- File name and document purpose --> \\r\\n<html lang = \\"en\\">   \\r\\n    <head>     \\r\\n        <title> A title for the document </title>\\r\\n        <meta charset = \\"utf-8\\" />     \\r\\n        <!--include external resources here like adsense, javascript, styles-->\\r\\n    </head>   \\r\\n    <body>   \\r\\n        <form id=\\"myForm\\" action=\\"\\">\\r\\n            <label for=\\"username\\">\\r\\n                Username: <input type=\\"text\\" id=\\"username\\" name=\\"username\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"password\\">\\r\\n                Password: <input type=\\"password\\" id=\\"password\\" name=\\"password\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"email\\">\\r\\n                Email: <input type=\\"email\\" id=\\"email\\" name=\\"email\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"telephone\\">\\r\\n                Telephone: <input type=\\"tel\\" id=\\"telephone\\" name=\\"telephone\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"page\\">\\r\\n                Website: <input type=\\"url\\" id=\\"page\\" name=\\"homepage\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"house\\">\\r\\n                House: <input type=\\"number\\" id=\\"house\\" name=\\"house\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"date\\">\\r\\n                Current date: <input type=\\"date\\" id=\\"date\\" name=\\"date\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"month\\">\\r\\n                Last month: <input type=\\"month\\" id=\\"month\\" name=\\"month\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"week\\">\\r\\n                Current Week: <input type=\\"week\\" id=\\"week\\" name=\\"week\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"color\\">\\r\\n                Favourite Color: <input type=\\"color\\" id=\\"color\\" name=\\"color\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"file\\">\\r\\n                Photo: <input type=\\"file\\" accept=\\"image/*\\" id=\\"file\\" name=\\"photo\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"laptop\\">\\r\\n                Laptop <input type=\\"checkbox\\" id=\\"laptop\\" name=\\"laptop\\" value=\\"Laptop\\" />    \\r\\n            </label>\\r\\n            <label for=\\"mobile\\">\\r\\n                Mobile <input type=\\"checkbox\\" id=\\"mobile\\" name=\\"mobile\\" value='Mobile' />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"male\\">\\r\\n                Male <input type=\\"radio\\" id=\\"male\\" name=\\"gender\\" value=\\"Male\\" />    \\r\\n            </label>\\r\\n            <label for=\\"female\\">\\r\\n                Female <input type=\\"radio\\" id=\\"female\\" name=\\"gender\\" value=\\"Female\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <input type=\\"reset\\" id=\\"reset\\" value=\\"Reset\\" />\\r\\n            <input type=\\"button\\" id=\\"button\\" onclick=\\"console.log(document.getElementById('myForm').elements[0])\\" value=\\"Alert\\" />\\r\\n            <input type=\\"submit\\" id=\\"submit\\" value=\\"submit\\" />    \\r\\n        </form>\\r\\n    </body> \\r\\n</html>\`\\r\\nlet htmlContentSelect = \`<!DOCTYPE html> \\r\\n<!-- File name and document purpose --> \\r\\n<html lang = \\"en\\">   \\r\\n    <head>     \\r\\n        <title> A title for the document </title>\\r\\n        <meta charset = \\"utf-8\\" />     \\r\\n        <!--include external resources here like adsense, javascript, styles-->\\r\\n    </head>   \\r\\n    <body>   \\r\\n        <form action=\\"\\" method=\\"get\\">\\r\\n            <!--Simple select menu -->\\r\\n            <select name=\\"simpleMenu\\">\\r\\n                <option>Apple</option>\\r\\n                <option>Samsung</option>\\r\\n                <option>Mi</option>\\r\\n                <option>OnePlus</option>\\r\\n            </select>\\r\\n            <!--Preselected item -->\\r\\n            <select name=\\"preSelected\\">\\r\\n                <option>Apple</option>\\r\\n                <option selected>Samsung</option>\\r\\n                <option>Mi</option>\\r\\n                <option>OnePlus</option>\\r\\n            </select>\\r\\n            <!--with size -->\\r\\n            <select name=\\"menuSize\\" size=\\"3\\">\\r\\n                <option>Apple</option>\\r\\n                <option>Samsung</option>\\r\\n                <option>Mi</option>\\r\\n                <option>OnePlus</option>\\r\\n            </select>\\r\\n            <!--Multiple select-->\\r\\n            <select multiple name=\\"multipleValue\\">\\r\\n                <option>Apple</option>\\r\\n                <option>Samsung</option>\\r\\n                <option selected>Mi</option>\\r\\n                <option>OnePlus</option>\\r\\n                <option>Nokia</option>\\r\\n                <option>Motorola</option>\\r\\n                <option>Vivo</option>\\r\\n            </select>\\r\\n            <!--Opt goup-->\\r\\n            <select name=\\"Nested\\">\\r\\n                <optgroup label=\\"Apple\\">\\r\\n                    <option>iPhone</option>\\r\\n                    <option>iPad</option>\\r\\n                    <option>Mac</option>\\r\\n                    <option>Air Pod</option>\\r\\n                </optgroup>\\r\\n                <optgroup label=\\"Android\\">\\r\\n                    <option>Samsung</opton>\\r\\n                    <option>Mi</option>\\r\\n                    <option>Vivo</option>\\r\\n                    <option>Oppo</option>\\r\\n                </optgroup>\\r\\n            </select>\\r\\n        </form>\\r\\n    </body> \\r\\n</html>\\r\\n\`\\r\\nlet htmlContentTextarea = \`<!DOCTYPE html>\\r\\n<html lang = \\"en\\" >\\r\\n    <head> \\r\\n        <title> Textarea </title>\\r\\n        <meta charset = \\"utf-8\\" />\\r\\n    </head>\\r\\n    <body>\\r\\n        <p>\\r\\n            Please write about yourself\\r\\n        </p>\\r\\n        <form action = \\"handler\\">\\r\\n            <p>\\r\\n                <textarea name = \\"description\\"  rows = \\"3\\"  cols = \\"40\\">\\r\\n            (Word limit 300) \\r\\n                </textarea>\\r\\n            </p>\\r\\n        </form>\\r\\n    </body>\\r\\n</html>\\r\\n\\r\\n\`\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        text-decoration: none;\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    :global(code) {\\r\\n        background-color: rgba(0, 100, 100, 0.1);\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/wwwhtml/html/forms\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Forms\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#basicForm\\">The <code>form</code> Element</a></li>\\r\\n                <li><a href=\\"#inputForm\\">The <code>input</code> Element</a></li>\\r\\n                <li><a href=\\"#selectForm\\">The <code>select</code> Element</a></li>\\r\\n                <li><a href=\\"#textareaForm\\">The <code>textarea</code> Element</a></li>\\r\\n            </ol>\\r\\n            <p>For a better understanding of form submission, read <a href=\\"/courses/internet/wwwhtml/fundamentals/http\\">HTTP protocol</a>.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <p>\\r\\n                A <code>form</code> is a container for taking input from users. There are various components that take inputs like number, text, files, options, buttons etc. These components are called input boxes (single line or multiple lines), checkboxes, radio buttons, menus etc. All of these components are inline elements. Each component has an associate value. The collection of these values is called <strong>form data</strong>. Every form whose data is to be processed on the server requires a <strong>submit</strong> button. When the user clicks the <em>submit</em> button, the form data is encoded and sent to the Web server.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"basicForm\\">The <code>form</code> Element</h6>\\r\\n            <p>\\r\\n                <code>form</code> element is a block level element. A required attribute of the <code>form</code> element is <code>action</code> which specifies the URL of the application on the Web server that is to be called when the user clicks the <em>Submit</em> button.\\r\\n            </p>\\r\\n            <p>\\r\\n                The <code>method</code> attribute specifies which technique <code>get</code> or <code>post</code>, will be used to pass the form data to the server. The default is <code>get</code>. If no <code>method</code> attribute is given in the <code>{\\"<form>\\"}</code> tag, <code>get</code> will be used. The alternative technique is <code>post</code>. In both techniques, the form data is coded into a text string when the user clicks the <em>Submit</em> button. This text string is often called the <strong>query string</strong>.\\r\\n            </p>\\r\\n            <p>\\r\\n                The query string has an assignment statement for each control that has a data value, with the name of the control as its left side and its value as its right side. These assignment statements are separated by ampersands (&).\\r\\n            </p>\\r\\n            <p>\\r\\n                When the <code>get</code> method is used, the browser attaches the query string to the URL of the HTTP request, so the form data is transmitted to the server together with the URL. The browser inserts a question mark at the end of the actual URL just before the first character of the query string so that the server can easily find the beginning of the query string. The <code>get</code> method can also be used to pass parameters to the server when forms are not involved. (This cannot be done with <code>post</code>.) One last advantage of <code>get</code> is that a site bookmark can include specific form values, which makes it more specific than one with only the URL. One disadvantage of the <code>get</code> method is that some servers place a limit on the length of the URL string and truncate any characters past the limit. So, if the form has more than a few controls, <code>get</code> is not a good choice. Because the form values are displayed by the browser, <code>get</code> should not be used if sensitive information such as passwords or credit card numbers is included in the form data.\\r\\n            </p>\\r\\n            <p>\\r\\n                When the <code>post</code> method is used, the query string is passed by some other method to the form-processing program. There is no length limitation for the query string with the <code>post</code> method, so, obviously, it is the better choice when there are more than a few controls in the form. There are also some security concerns with <code>get</code> that are not a problem with <code>post</code>.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContent} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"inputForm\\">The <code>input</code> Element</h6>\\r\\n            <p>\\r\\n                The <code>input</code> element is the most versatile input mechanism. It has an attribute called <code>type</code> that can take many values like text, number, date etc shown in the table below. Except <code>reset</code> and <code>submit</code> input types, all types require another attribute <code>name</code> that acts as a <em>variable</em>. These names are used on the server-side code. In the client-side, the elements are identified by their ids. Hence, each input element has <code>id, name</code> and <code>value</code> attributes.\\r\\n            </p>\\r\\n            <DataTable style=\\"width:100%;\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>type</Cell>\\r\\n                        <Cell>values</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell>text</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">a string, like name, username</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">useful for single line text</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>password</Cell>\\r\\n                        <Cell>a string</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">the typed letters are displayed as &bullet; or *.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>email</Cell>\\r\\n                        <Cell>a valid email</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">browser may validate email address</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>tel</Cell>\\r\\n                        <Cell>phone number</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">use it with <code>placeholder</code> to show an example, <code>pattern</code> for validation.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>url</Cell>\\r\\n                        <Cell>a url</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">browser may validate a url automatically.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>number</Cell>\\r\\n                        <Cell>a number</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">a number</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>range</Cell>\\r\\n                        <Cell>range of numbers</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">shows a slider, use it with attributes <code>min</code> and <code>max</code> to set the limits.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>time</Cell>\\r\\n                        <Cell>time</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">select a time without time zone.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>date</Cell>\\r\\n                        <Cell>date</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">a date input. A date picker may be shown by the browser.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>datetime-local</Cell>\\r\\n                        <Cell>local date time</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">input date and time without time zone.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>month</Cell>\\r\\n                        <Cell>month</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">select a month and year</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>week</Cell>\\r\\n                        <Cell>week</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">select a week and year</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>color</Cell>\\r\\n                        <Cell>color</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">input color. A color picker may be shown by the browser.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>image</Cell>\\r\\n                        <Cell>image</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">use image in the submit button, use with attributes <code>src</code> to locate the image, <code>width</code> and <code>height</code> for dimensions.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>file</Cell>\\r\\n                        <Cell>file</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">shows a button to browse and select a file input.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>checkbox</Cell>\\r\\n                        <Cell>checkbox</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">select zero or more options of a limited number of choices. When <code>name</code> attribute is same, then query string has multiple entries with same variable.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>radio</Cell>\\r\\n                        <Cell>radio</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">select only one of a limited number of choices, <code>name</code> attributes are same for related options.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>search</Cell>\\r\\n                        <Cell>search</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">behaves like a regular text field</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>button</Cell>\\r\\n                        <Cell>button</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">used with attributes <code>onclick</code> that takes a method/function and <code>value</code> as a text to label the button.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>reset</Cell>\\r\\n                        <Cell>reset</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">reset all form values to their default values.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>submit</Cell>\\r\\n                        <Cell>submit</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">button for submitting form</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContent1} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"selectForm\\">The <code>select</code> Element</h6>\\r\\n            <p>\\r\\n                A menu is created using a <code>select</code> element.\\r\\n            </p>\\r\\n            <DataTable style=\\"width:100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Attribute</Cell>\\r\\n                        <Cell>Value</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell><code>name</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">a string (usually one word)</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">variable for the value of selected item</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>multiple</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\"><code>multiple</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">allows more than one item to be selected</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>size</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">a number</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">specify the number of menu items that initially are \\r\\n                            to be displayed for the user, default value is 1</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n            <p>\\r\\n                Items in the menu are specified with <code>option</code> element, similar to <code>li</code> in case of lists. The content (the text) in the <code>option</code> tag is the value of that <em>option</em>. To assign a value different than the textcontent, <code>option</code> has an attribute called <code>value</code>.\\r\\n            </p>\\r\\n            <p>\\r\\n                An attribute <code>selected</code> to an <code>option</code> implies that the option is pre-selected.\\r\\n            </p>\\r\\n            <p class=\\"remark\\">Use <code>ctrl</code> to select more than one item in case of <code>multiple</code></p>\\r\\n            <p>\\r\\n                We can use <code>optgroup</code> to create separate groupings with label inside the menu as shown below.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentSelect} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"textareaForm\\">The <code>textarea</code> Element</h6>\\r\\n            <p>\\r\\n                <code>textarea</code> is used to enter multiline text.\\r\\n            </p>\\r\\n            <p>\\r\\n                Usually <code>textarea</code> box is resizable. Attributes like <code>cols</code> and <code>rows</code> can be provided to start with a given number of columns and rows.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentTextarea} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n    <h4>Exercise</h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Create a user login page with input fields for username (email), password and a button for login. Create a link for forgot password and another button for sign up.\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Create a form for flight booking with fields for destination, date of journey, checkbox for round trip, date for return journey and button to find available flights.\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Create a form for LPG connection with input fields for name, aadhar card, address, email, phone and input field to upload passport size photo.\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Create a select menu that shows five states in India with at least three major cities in each state. Use <code>optgroup</code> for the states.\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgOI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,oBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,eAAE,CACE,eAAe,CAAE,IAAI,CACrB,MAAM,CAAE,OACZ,CACA,uBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb,CACQ,IAAM,CACV,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3C"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  let $page, $$unsubscribe_page;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let pathComponents = $page.url.pathname.split("/");
  pathComponents.map((u, index) => {
    let path = $page.url.origin;
    for (let i = 0; i <= index; i++) {
      path += pathComponents[i] + "/";
    }
    return path;
  });
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Forms", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
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
</html>`;
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
</html>`;
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
`;
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

`;
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-wez8y7_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/forms"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-wez8y7_END -->`, ""} <article class="svelte-1la69s">${validate_component(Pathlist, "Pathlist").$$render(
    $$result,
    {
      origin: $page.url.origin,
      pathname: $page.url.pathname
    },
    {},
    {}
  )} ${validate_component(CourseNavigation, "CourseNavigation").$$render(
    $$result,
    {
      contentNav,
      currentUrl: $page.url.pathname
    },
    {},
    {}
  )} <h4 class="svelte-1la69s" data-svelte-h="svelte-193uojl">Forms</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1la69s" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-yjx0q4"><li class="svelte-1la69s"><a href="#basicForm" class="svelte-1la69s">The <code>form</code> Element</a></li> <li class="svelte-1la69s"><a href="#inputForm" class="svelte-1la69s">The <code>input</code> Element</a></li> <li class="svelte-1la69s"><a href="#selectForm" class="svelte-1la69s">The <code>select</code> Element</a></li> <li class="svelte-1la69s"><a href="#textareaForm" class="svelte-1la69s">The <code>textarea</code> Element</a></li></ol> <p class="svelte-1la69s" data-svelte-h="svelte-cobgds">For a better understanding of form submission, read <a href="/courses/internet/wwwhtml/fundamentals/http" class="svelte-1la69s">HTTP protocol</a>.</p>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-1la69s" data-svelte-h="svelte-rtnb51">A <code>form</code> is a container for taking input from users. There are various components that take inputs like number, text, files, options, buttons etc. These components are called input boxes (single line or multiple lines), checkboxes, radio buttons, menus etc. All of these components are inline elements. Each component has an associate value. The collection of these values is called <strong class="svelte-1la69s">form data</strong>. Every form whose data is to be processed on the server requires a <strong class="svelte-1la69s">submit</strong> button. When the user clicks the <em>submit</em> button, the form data is encoded and sent to the Web server.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="basicForm" class="svelte-1la69s" data-svelte-h="svelte-hgo5ca">The <code>form</code> Element</h6> <p class="svelte-1la69s" data-svelte-h="svelte-13kw9dr"><code>form</code> element is a block level element. A required attribute of the <code>form</code> element is <code>action</code> which specifies the URL of the application on the Web server that is to be called when the user clicks the <em>Submit</em> button.</p> <p class="svelte-1la69s">The <code data-svelte-h="svelte-dhn5xp">method</code> attribute specifies which technique <code data-svelte-h="svelte-1mc2yku">get</code> or <code data-svelte-h="svelte-1xjt0ei">post</code>, will be used to pass the form data to the server. The default is <code data-svelte-h="svelte-1mc2yku">get</code>. If no <code data-svelte-h="svelte-dhn5xp">method</code> attribute is given in the <code>${escape("<form>")}</code> tag, <code data-svelte-h="svelte-1mc2yku">get</code> will be used. The alternative technique is <code data-svelte-h="svelte-1xjt0ei">post</code>. In both techniques, the form data is coded into a text string when the user clicks the <em data-svelte-h="svelte-1ildrzu">Submit</em> button. This text string is often called the <strong class="svelte-1la69s" data-svelte-h="svelte-11hq5ah">query string</strong>.</p> <p class="svelte-1la69s" data-svelte-h="svelte-1wzzxs8">The query string has an assignment statement for each control that has a data value, with the name of the control as its left side and its value as its right side. These assignment statements are separated by ampersands (&amp;).</p> <p class="svelte-1la69s" data-svelte-h="svelte-7qccme">When the <code>get</code> method is used, the browser attaches the query string to the URL of the HTTP request, so the form data is transmitted to the server together with the URL. The browser inserts a question mark at the end of the actual URL just before the first character of the query string so that the server can easily find the beginning of the query string. The <code>get</code> method can also be used to pass parameters to the server when forms are not involved. (This cannot be done with <code>post</code>.) One last advantage of <code>get</code> is that a site bookmark can include specific form values, which makes it more specific than one with only the URL. One disadvantage of the <code>get</code> method is that some servers place a limit on the length of the URL string and truncate any characters past the limit. So, if the form has more than a few controls, <code>get</code> is not a good choice. Because the form values are displayed by the browser, <code>get</code> should not be used if sensitive information such as passwords or credit card numbers is included in the form data.</p> <p class="svelte-1la69s" data-svelte-h="svelte-v3ld5b">When the <code>post</code> method is used, the query string is passed by some other method to the form-processing program. There is no length limitation for the query string with the <code>post</code> method, so, obviously, it is the better choice when there are more than a few controls in the form. There are also some security concerns with <code>get</code> that are not a problem with <code>post</code>.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="inputForm" class="svelte-1la69s" data-svelte-h="svelte-mjgx7u">The <code>input</code> Element</h6> <p class="svelte-1la69s" data-svelte-h="svelte-brxuqw">The <code>input</code> element is the most versatile input mechanism. It has an attribute called <code>type</code> that can take many values like text, number, date etc shown in the table below. Except <code>reset</code> and <code>submit</code> input types, all types require another attribute <code>name</code> that acts as a <em>variable</em>. These names are used on the server-side code. In the client-side, the elements are identified by their ids. Hence, each input element has <code>id, name</code> and <code>value</code> attributes.</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width:100%;" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `type`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `values`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Description`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `text`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `a string, like name, username`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `useful for single line text`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `password`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `a string`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `the typed letters are displayed as • or *.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `email`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `a valid email`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `browser may validate email address`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `tel`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `phone number`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `use it with <code data-svelte-h="svelte-12qjrs1">placeholder</code> to show an example, <code data-svelte-h="svelte-13zptt4">pattern</code> for validation.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `url`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `a url`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `browser may validate a url automatically.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `number`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `a number`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `a number`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `range`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `range of numbers`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `shows a slider, use it with attributes <code data-svelte-h="svelte-vngjza">min</code> and <code data-svelte-h="svelte-wq6pps">max</code> to set the limits.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `time`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `time`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `select a time without time zone.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `date`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `date`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `a date input. A date picker may be shown by the browser.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `datetime-local`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `local date time`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `input date and time without time zone.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `month`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `month`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `select a month and year`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `week`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `week`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `select a week and year`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `color`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `color`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `input color. A color picker may be shown by the browser.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `image`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `image`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `use image in the submit button, use with attributes <code data-svelte-h="svelte-1fkgjes">src</code> to locate the image, <code data-svelte-h="svelte-1stdfwe">width</code> and <code data-svelte-h="svelte-xu0kcf">height</code> for dimensions.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `file`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `file`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `shows a button to browse and select a file input.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `checkbox`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `checkbox`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `select zero or more options of a limited number of choices. When <code data-svelte-h="svelte-1x67wg7">name</code> attribute is same, then query string has multiple entries with same variable.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `radio`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `radio`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `select only one of a limited number of choices, <code data-svelte-h="svelte-1x67wg7">name</code> attributes are same for related options.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `search`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `search`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `behaves like a regular text field`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `button`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `button`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `used with attributes <code data-svelte-h="svelte-1kgo0yb">onclick</code> that takes a method/function and <code data-svelte-h="svelte-18vs4ol">value</code> as a text to label the button.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `reset`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `reset`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `reset all form values to their default values.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `submit`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `submit`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `button for submitting form`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContent1,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="selectForm" class="svelte-1la69s" data-svelte-h="svelte-2vve02">The <code>select</code> Element</h6> <p class="svelte-1la69s" data-svelte-h="svelte-1ojbhra">A menu is created using a <code>select</code> element.</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width:100%" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Attribute`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Value`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Description`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1x67wg7">name</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `a string (usually one word)`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `variable for the value of selected item`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1p1mfe0">multiple</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1p1mfe0">multiple</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `allows more than one item to be selected`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1416n7d">size</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `a number`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `specify the number of menu items that initially are 
                            to be displayed for the user, default value is 1`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })} <p class="svelte-1la69s" data-svelte-h="svelte-12qemma">Items in the menu are specified with <code>option</code> element, similar to <code>li</code> in case of lists. The content (the text) in the <code>option</code> tag is the value of that <em>option</em>. To assign a value different than the textcontent, <code>option</code> has an attribute called <code>value</code>.</p> <p class="svelte-1la69s" data-svelte-h="svelte-pvmzwq">An attribute <code>selected</code> to an <code>option</code> implies that the option is pre-selected.</p> <p class="remark svelte-1la69s" data-svelte-h="svelte-j6f37t">Use <code>ctrl</code> to select more than one item in case of <code>multiple</code></p> <p class="svelte-1la69s" data-svelte-h="svelte-1jyb5ew">We can use <code>optgroup</code> to create separate groupings with label inside the menu as shown below.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentSelect,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="textareaForm" class="svelte-1la69s" data-svelte-h="svelte-1y85v1a">The <code>textarea</code> Element</h6> <p class="svelte-1la69s" data-svelte-h="svelte-10a5chl"><code>textarea</code> is used to enter multiline text.</p> <p class="svelte-1la69s" data-svelte-h="svelte-uki0r1">Usually <code>textarea</code> box is resizable. Attributes like <code>cols</code> and <code>rows</code> can be provided to start with a given number of columns and rows.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentTextarea,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} <h4 class="svelte-1la69s" data-svelte-h="svelte-1yto96c">Exercise</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1la69s" data-svelte-h="svelte-140swak">Create a user login page with input fields for username (email), password and a button for login. Create a link for forgot password and another button for sign up.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1la69s" data-svelte-h="svelte-o34h5a">Create a form for flight booking with fields for destination, date of journey, checkbox for round trip, date for return journey and button to find available flights.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1la69s" data-svelte-h="svelte-1qgtck6">Create a form for LPG connection with input fields for name, aadhar card, address, email, phone and input field to upload passport size photo.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1la69s" data-svelte-h="svelte-vpub4n">Create a select menu that shows five states in India with at least three major cities in each state. Use <code>optgroup</code> for the states.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Cd7uDUI3.js.map
