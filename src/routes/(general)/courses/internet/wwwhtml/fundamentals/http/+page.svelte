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
    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
    import Button from "@smui/button";
    import Ripple from "@smui/ripple";
    import NavList from '$lib/components/NavList.svelte'
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores";
    import { contents } from "$lib/pages/courses/internet/content";
    $navList = contents;
    $currentPath = "The HyperText Transfer Protocol (HTTP)";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/http" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
    {#if $darkMode}
        {@html githubDark}
    {:else}
        {@html github}
    {/if}
</svelte:head>
<article>
    <h4>
        The HyperText Transfer Protocol (HTTP)
    </h4>
    <Card>
        <Content>
            <p>
                All Web communications transactions use the same protocol: the Hypertext Transfer Protocol (HTTP). The current version of HTTP is 1.1.
            </p>
            <p>
                HTTP consists of two phases: the request and the response. Each HTTP communication (request or response) between a browser and a Web server consists of two parts: a header and a body. The header contains information about the communication; the body contains the data of the communication if there is any.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>The Request Phase</h6>
            <p>
                The general form of an HTTP request is as follows:
            </p>
            <ol>
                <li>
                    [HTTP method] [Domain part of the URL] [HTTP version]
                </li>
                <li>
                    Header fields
                </li>
                <li>Blank line</li>
                <li>
                    Message body
                </li>
            </ol>
            <p>The following is an example of the first line of an HTTP request:</p>
            <Highlight language={xml} code={`GET https://mathril.com/ HTTP/1.1`} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
            <h6>Various HTTP request methods</h6>
            <DataTable table$aria-label="HTTP request methods" style="max-width: 100%;">
                <Head>
                    <Row>
                        <Cell>Method</Cell>
                        <Cell>Description</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell>GET</Cell>
                        <Cell>Returns the contents of a specified document</Cell>
                    </Row>
                    <Row>
                        <Cell>HEAD</Cell>
                        <Cell>Returns the header information for a specified document</Cell>
                    </Row>
                    <Row>
                        <Cell>POST</Cell>
                        <Cell>Executes a specified document, using the enclosed data </Cell>
                    </Row>
                    <Row>
                        <Cell>PUT</Cell>
                        <Cell>Replaces a specified document with the enclosed data</Cell>
                    </Row>
                    <Row>
                        <Cell>DELETE</Cell>
                        <Cell>Deletes a specified document</Cell>
                    </Row>
                </Body>
            </DataTable>
            <h6>Header field</h6>
            <p>
                Following the first line of an HTTP communication is any number of header fields, most of which are optional. The format of a header field is the field name followed by a colon and the value of the field. There are four categories of header fields:
            </p>

            <ul>
                <li><strong>General Header Fields</strong>
                    <ul>
                    <li><strong>Date:</strong> The date and time at which the message was sent.</li>
                    <li><strong>Cache-Control:</strong> Directives for caching mechanisms in both requests and responses.</li>
                    </ul>
                </li>
                <li><strong>Request Header Fields</strong>
                    <ul>
                    <li><strong>Host:</strong> Specifies the domain name of the server and, optionally, the TCP port number.</li>
                    <li><strong>User-Agent:</strong> Contains a string that allows the network protocol peers to identify the application type, operating system, software vendor, or software version of the requesting software user agent.</li>
                    <li><strong>Accept:</strong> Specifies media types that are acceptable for the response.</li>
                    <li><strong>Accept-Language:</strong> Specifies the preferred language(s) for the response.</li>
                    <li><strong>Authorization:</strong> Contains credentials for authenticating the client to the server.</li>
                    <li><strong>Content-Type:</strong> Indicates the media type of the body sent to the server (used in POST and PUT requests).</li>
                    </ul>
                </li>
                <li><strong>Response Header Fields</strong>
                    <ul>
                    <li><strong>Server:</strong> Contains information about the software used by the origin server to handle the request.</li>
                    <li><strong>WWW-Authenticate:</strong> Indicates the authentication method that should be used to gain access to a resource behind a paywall.</li>
                    <li><strong>Set-Cookie:</strong> Sends cookies from the server to the user agent.</li>
                    <li><strong>Content-Encoding:</strong> The type of encoding used on the data.</li>
                    <li><strong>Content-Length:</strong> The length of the response body in octets (8-bit bytes).</li>
                    <li><strong>Content-Type:</strong> Indicates the media type of the resource.</li>
                    <li><strong>Location:</strong> Used in redirection, or when a new resource has been created. This header indicates the URL to redirect a page to.</li>
                    </ul>
                </li>
                <li><strong>Entity Header Fields</strong>
                    <ul>
                    <li><strong>Content-Language:</strong> Describes the language(s) intended for the audience.</li>
                    <li><strong>Content-Disposition:</strong> Indicates if the content is expected to be displayed inline in the browser or as an attachment, that is to be downloaded and saved locally.</li>
                    <li><strong>ETag:</strong> An identifier for a specific version of a resource, allowing for changes to be tracked more efficiently.</li>
                    </ul>
                </li>
            </ul>
            <p>
                The header of a request must be followed by a blank line, which is used to separate the header from the body of the request. Requests that use the GET, HEAD, and DELETE methods do not have bodies. In these cases, the blank line signals the end of the request.
            </p>  
            <p>
                Here is an example of a POST request to <code>mathril.com/login</code> with username and password:
            </p>
            <Highlight language={xml} code={`POST /login HTTP/1.1
Host: mathril.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 31

username=johndoe&password=12345`} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>The Response Phase</h6>
            <p>
                The general form of an HTTP response is as follows:
            </p>
            <ol>
                <li>
                    Status line
                </li>
                <li>
                    Response header fields
                </li>
                <li>
                    Blank line
                </li>
                <li>
                    Response body
                </li>
            </ol>
            <p>
                The status line includes the HTTP version used, a three-digit status code for the response, and a short textual explanation of the status code. For example, most responses begin with the following:
            </p>
            <Highlight language={xml} code={`HTTP/1.1  200  OK`} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
            <p>
                The status codes begin with 1, 2, 3, 4, or 5. The general meanings of the five categories specified by these first digits are shown in Table below
            </p>
            <DataTable table$aria-label="First digits of HTTP status codes" style="max-width: 100%;">
                <Head>
                    <Row>
                        <Cell>First Digit</Cell>
                        <Cell>Category</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell>1</Cell>
                        <Cell>Informational</Cell>
                    </Row>
                    <Row>
                        <Cell>2</Cell>
                        <Cell>Success</Cell>
                    </Row>
                    <Row>
                        <Cell>3</Cell>
                        <Cell>Redirection</Cell>
                    </Row>
                    <Row>
                        <Cell>4</Cell>
                        <Cell>Client error </Cell>
                    </Row>
                    <Row>
                        <Cell>5</Cell>
                        <Cell>Server error</Cell>
                    </Row>
                </Body>
            </DataTable>
            <p>
                After the status line, the server sends a response header, which can contain several lines of information about the response, each in the form of a field. The only essential field of the header is <code>Content-type</code>. An example of a request header:
            </p>
            <Highlight language={xml} code={`HTTP/1.1 200 OK
Date: Sat, 25 July 2009 22:15:11 GMT
Server: Apache/2.2.3 (CentOS)
Last-modified: Tues, 18 May 2004 16:38:38 GMT
ETag: "1b48098-16c-3dab592dc9f80"
Accept-ranges: bytes
Content-length: 364
Connection: close
Content-type: text/html, charset=UTF-8`} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
            <p>
                The response header must be followed by a blank line, as is the case for request headers. The response data follows the blank line. In the preceding example, the response body would be the HTML file, <code>respond.html</code>.
            </p>
            <p>
                The default operation of HTTP 1.1 is that the connection is kept open for a time so that the client can make several requests over a short span of time without needing to reestablish the communications connection with the server.
            </p>
        </Content>
    </Card>
</article>
