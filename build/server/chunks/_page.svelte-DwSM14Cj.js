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
  code: "article.svelte-beztui{display:flex;flex-direction:column;gap:0.5em}p.svelte-beztui,li.svelte-beztui{opacity:0.8}h4.svelte-beztui{margin:0.5em 0}h6.svelte-beztui{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}strong.svelte-beztui{color:goldenrod;opacity:1}a.svelte-beztui{cursor:pointer;text-decoration:none}.question.svelte-beztui{cursor:pointer;padding:0.3em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n\\timport WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n\\timport DataTable, {Head, Body, Row, Cell} from \\"@smui/data-table\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\"\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Text Markup\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    let htmlContent = \`<!DOCTYPE html> \\r\\n<!-- File name and document purpose --> \\r\\n<html lang = \\"en\\">   \\r\\n    <head>     \\r\\n        <title> A title for the document </title>\\r\\n        <meta charset = \\"utf-8\\" />     \\r\\n        <!--include external resources here like adsense, javascript, styles-->\\r\\n    </head>   \\r\\n    <body>   \\r\\n        <!--Displayable content goes here-->\\r\\n        <p>Internet Technologies course covers HTML, CSS,\\r\\n            and \\r\\n            javascript.\\r\\n        </p>\\r\\n        <p>This paragraph contains an unnecessary <br/> break in the line.</p>\\r\\n        <pre>\\r\\n            There is \\r\\n                more \\r\\n                    control\\r\\n                        in pre\\r\\n                            tag.\\r\\n        </pre>\\r\\n        <h1>h1 heading</h1>\\r\\n        <h2>h2 heading</h2>\\r\\n        <h3>h3 heading</h3>\\r\\n        <h4>h4 heading</h4>\\r\\n        <h5>h5 heading</h5>\\r\\n        <h6>h6 heading</h6>\\r\\n        <p>A quote from Einstein</p>\\r\\n        <blockquote>\\r\\n          <p>\\"God does not play dice.\\"</p>\\r\\n        </blockquote>\\r\\n        <p>Fonts styles <i>italics</i> <b>bold</b> <em>emphasis</em> <strong>strong</strong>\\r\\n            <code>code</code>\\r\\n        </p>\\r\\n        <p>The most famous equation E = mc<sup>2</sup></p>\\r\\n        <p>Horizontal line</p>\\r\\n        <hr/>\\r\\n    </body> \\r\\n</html>\`\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(240, 85, 0);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/wwwhtml/html/text\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Text Markup\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#p1\\">Paragraphs <code>p</code></a></li>\\r\\n                <li><a href=\\"#p2\\">Line Breaks <code>br</code></a></li>\\r\\n                <li><a href=\\"#p3\\">White Spaces <code>pre</code></a></li>\\r\\n                <li><a href=\\"#p4\\">Headings <code>h1 h2 h3 h4 h5 h6</code></a></li>\\r\\n                <li><a href=\\"#p5\\">Block Quotations <code>blockquote</code></a></li>\\r\\n                <li><a href=\\"#p6\\">Font Styles and Sizes <code>i b em strong code sub sup</code></a></li>\\r\\n                <li><a href=\\"#p7\\">Character Entities</a></li>\\r\\n                <li><a href=\\"#p8\\">Horizontal Rules <code>hr</code></a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <p>\\r\\n                The fundamental syntactic units of HTML are called tags. In general, tags are used to specify categories of content. For each kind of tag, a browser has default presentation specifications for the specified content. The syntax of a tag is the tag\`s name surrounded by angle brackets (&lt; and &gt;). Tag names must be written in all lowercase letters. Most tags appear in pairs: an opening tag and a closing tag.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContent} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"p1\\">Paragraphs <code>p</code></h6>\\r\\n            <p>\\r\\n                The <code>p</code> tag is used to create a paragraph. It is a <em>block</em>-level tag, i.e. it starts to display its content from a new line and the next content will start from a new line. The content in the <code>p</code> tag ignores any formatting applied by white spaces.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"p2\\">Line Breaks <code>br</code></h6>\\r\\n            <p>\\r\\n                To create a new line at any place in the document, <code>br</code> tag is used. It does not have a closing tag.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"p3\\">White Spaces <code>pre</code></h6>\\r\\n            <p>\\r\\n                To display whitespace formatted text, <code>pre</code> tag is used. \\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"p4\\">Headings <code>h1 h2 h3 h4 h5 h6</code></h6>\\r\\n            <p>\\r\\n                The headings in an article are marked with one of <code>h1 h2 h3 h4 h5 h6</code> tags where <code>h1</code> is the largest and <code>h6</code> is the smallest. These tags are <em>block</em>-level as well.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"p5\\">Block Quotations <code>blockquote</code></h6>\\r\\n            <p>\\r\\n                Any quotation is a block of text that is slightly differently formatted than the usual paragraphs. The quotation is placed unside <code>blockquote</code> tag. Inside the block, many paragraphs can be included.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"p6\\">Font Styles and Sizes <code>i b em strong code sub sup</code></h6>\\r\\n            <p>\\r\\n                Fonts can be styled using <code>i</code> tag for <i>italics</i>, <code>b</code> tag for <b>bold</b>, <code>em</code> tag for emphasized content. <code>strong</code> tag is used to make a text <strong style=\\"color:currentColor\\">bold</strong> as well. <code>sub</code> tag is used to mark a text<sub>subscript</sub> to the preceeding text. <code>sup</code> tag is used to mark a text<sup>superscript</sup> to the preceeding text. \\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"p7\\">Character Entities</h6>\\r\\n            <DataTable style=\\"width:100%;\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Character</Cell>\\r\\n                        <Cell>Entity</Cell>\\r\\n                        <Cell>Meaning</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell>&</Cell>\\r\\n                        <Cell><code>amp;</code></Cell>\\r\\n                        <Cell>Ampersand</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>&lt;</Cell>\\r\\n                        <Cell><code>{'&lt;'}</code></Cell>\\r\\n                        <Cell>Is less than</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>&gt;</Cell>\\r\\n                        <Cell><code>{'&gt;'}</code></Cell>\\r\\n                        <Cell>Is greater than</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>&#8377;</Cell>\\r\\n                        <Cell><code>{'&#8377;'}</code></Cell>\\r\\n                        <Cell>Indian Rupee</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>&copy;</Cell>\\r\\n                        <Cell><code>{'&copy;'}</code></Cell>\\r\\n                        <Cell>Copyright</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"p8\\">Horizontal Rules <code>hr</code></h6>\\r\\n            <p><code>hr</code> draws a line in a new line. Just like <code>br</code> tag, it does not have a closing tag.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h4>Exercises</h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                <p>Write HTML code that shows the following text:</p>\\r\\n                <p>\\r\\n                    <strong style='color:currentColor'>Theorem</strong>: Every prime number (greater than 2) <em>modulo</em> 4 can be written in the form <em>4n + 1</em> or <em>4n + 3</em>.\\r\\n                </p>\\r\\n                <p>\\r\\n                    <strong style='color:currentColor'>Proof</strong>: Any number p when divided by 4 leaves remainder 0, 1, 2 or 3. Therefore, the number has the form <em>4n</em>, <em>4n + 1</em>, <em>4n + 2</em> or <em>4n + 3</em>. Since <em>4n</em> and <em>4n + 2</em> are <strong style=\\"color: currentColor;\\">even</strong>, so these can not be a form of a prime number which is an <strong style=\\"color: currentColor;\\">odd</strong> number (except 2). This <em>proves</em> the theorem. &#9723;\\r\\n                </p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                <p>Write HTML code that shows the following text:</p>\\r\\n                <p>e<sup>&iota;&theta;</sup> = cos&theta; + &iota;sin&theta;</p>\\r\\n                <p><sup>n</sup>C<sub>r</sub> = <sup>n!</sup>&frasl;<sub>(n-r)!r!</sub> is equal to the number of ways of selecting r items from n <em>distinct</em> items.</p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                <p>Write HTML code that shows the following pattern:</p>\\r\\n                <pre>\\r\\n                      *\\r\\n                     ***\\r\\n                    *****</pre>\\r\\n                <hr/>\\r\\n                <pre>\\r\\n                    *****\\r\\n                     ***\\r\\n                      *</pre>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                <p>Write HTML code that shows the following code:</p>\\r\\n                <code><pre>\\r\\nlet sum = (a, b) => {\\"{\\"}\\r\\n    return a + b;\\r\\n}\\r\\nconsole.log(sum(3 + 4));//prints 7</pre></code>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Using above text-related html tags, write an article in HTML that teaches a student how to solve equations in 2 variables. Show a program in your programming language that solves the problem.\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h4>Assignment</h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Create a repository on Github called resume. Clone it to your laptop. Create an HTML page called <code>resume.html</code> for your resume using only tags used in this page. (No CSS yet.)\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAyEI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CACzB,CACA,oBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,eAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,uBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}`
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
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Text Markup", $currentPath);
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
        <!--Displayable content goes here-->
        <p>Internet Technologies course covers HTML, CSS,
            and 
            javascript.
        </p>
        <p>This paragraph contains an unnecessary <br/> break in the line.</p>
        <pre>
            There is 
                more 
                    control
                        in pre
                            tag.
        </pre>
        <h1>h1 heading</h1>
        <h2>h2 heading</h2>
        <h3>h3 heading</h3>
        <h4>h4 heading</h4>
        <h5>h5 heading</h5>
        <h6>h6 heading</h6>
        <p>A quote from Einstein</p>
        <blockquote>
          <p>"God does not play dice."</p>
        </blockquote>
        <p>Fonts styles <i>italics</i> <b>bold</b> <em>emphasis</em> <strong>strong</strong>
            <code>code</code>
        </p>
        <p>The most famous equation E = mc<sup>2</sup></p>
        <p>Horizontal line</p>
        <hr/>
    </body> 
</html>`;
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1yisn4r_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/text"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1yisn4r_END -->`, ""} <article class="svelte-beztui">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-beztui" data-svelte-h="svelte-ueupoj">Text Markup</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-beztui" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-iqx9o6"><li class="svelte-beztui"><a href="#p1" class="svelte-beztui">Paragraphs <code>p</code></a></li> <li class="svelte-beztui"><a href="#p2" class="svelte-beztui">Line Breaks <code>br</code></a></li> <li class="svelte-beztui"><a href="#p3" class="svelte-beztui">White Spaces <code>pre</code></a></li> <li class="svelte-beztui"><a href="#p4" class="svelte-beztui">Headings <code>h1 h2 h3 h4 h5 h6</code></a></li> <li class="svelte-beztui"><a href="#p5" class="svelte-beztui">Block Quotations <code>blockquote</code></a></li> <li class="svelte-beztui"><a href="#p6" class="svelte-beztui">Font Styles and Sizes <code>i b em strong code sub sup</code></a></li> <li class="svelte-beztui"><a href="#p7" class="svelte-beztui">Character Entities</a></li> <li class="svelte-beztui"><a href="#p8" class="svelte-beztui">Horizontal Rules <code>hr</code></a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-beztui" data-svelte-h="svelte-1dmxl18">The fundamental syntactic units of HTML are called tags. In general, tags are used to specify categories of content. For each kind of tag, a browser has default presentation specifications for the specified content. The syntax of a tag is the tag\`s name surrounded by angle brackets (&lt; and &gt;). Tag names must be written in all lowercase letters. Most tags appear in pairs: an opening tag and a closing tag.</p>`;
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
          return `<h6 id="p1" class="svelte-beztui" data-svelte-h="svelte-prb5ij">Paragraphs <code>p</code></h6> <p class="svelte-beztui" data-svelte-h="svelte-1fvjkor">The <code>p</code> tag is used to create a paragraph. It is a <em>block</em>-level tag, i.e. it starts to display its content from a new line and the next content will start from a new line. The content in the <code>p</code> tag ignores any formatting applied by white spaces.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="p2" class="svelte-beztui" data-svelte-h="svelte-ae4usl">Line Breaks <code>br</code></h6> <p class="svelte-beztui" data-svelte-h="svelte-1s9jm9w">To create a new line at any place in the document, <code>br</code> tag is used. It does not have a closing tag.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="p3" class="svelte-beztui" data-svelte-h="svelte-rkrmlf">White Spaces <code>pre</code></h6> <p class="svelte-beztui" data-svelte-h="svelte-d28wnk">To display whitespace formatted text, <code>pre</code> tag is used.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="p4" class="svelte-beztui" data-svelte-h="svelte-v692g3">Headings <code>h1 h2 h3 h4 h5 h6</code></h6> <p class="svelte-beztui" data-svelte-h="svelte-7uhabx">The headings in an article are marked with one of <code>h1 h2 h3 h4 h5 h6</code> tags where <code>h1</code> is the largest and <code>h6</code> is the smallest. These tags are <em>block</em>-level as well.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="p5" class="svelte-beztui" data-svelte-h="svelte-1pucnsh">Block Quotations <code>blockquote</code></h6> <p class="svelte-beztui" data-svelte-h="svelte-2hfbmr">Any quotation is a block of text that is slightly differently formatted than the usual paragraphs. The quotation is placed unside <code>blockquote</code> tag. Inside the block, many paragraphs can be included.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="p6" class="svelte-beztui" data-svelte-h="svelte-1jt74om">Font Styles and Sizes <code>i b em strong code sub sup</code></h6> <p class="svelte-beztui" data-svelte-h="svelte-sksweg">Fonts can be styled using <code>i</code> tag for <i>italics</i>, <code>b</code> tag for <b>bold</b>, <code>em</code> tag for emphasized content. <code>strong</code> tag is used to make a text <strong style="color:currentColor" class="svelte-beztui">bold</strong> as well. <code>sub</code> tag is used to mark a text<sub>subscript</sub> to the preceeding text. <code>sup</code> tag is used to mark a text<sup>superscript</sup> to the preceeding text.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="p7" class="svelte-beztui" data-svelte-h="svelte-1u7xlj9">Character Entities</h6> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width:100%;" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Character`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Entity`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Meaning`;
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
                          return `&amp;`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-dghgar">amp;</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Ampersand`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `&lt;`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code>${escape("&lt;")}</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Is less than`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `&gt;`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code>${escape("&gt;")}</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Is greater than`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `₹`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code>${escape("&#8377;")}</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Indian Rupee`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `©`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code>${escape("&copy;")}</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Copyright`;
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
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="p8" class="svelte-beztui" data-svelte-h="svelte-17bejna">Horizontal Rules <code>hr</code></h6> <p class="svelte-beztui" data-svelte-h="svelte-ja6u5u"><code>hr</code> draws a line in a new line. Just like <code>br</code> tag, it does not have a closing tag.</p>`;
        }
      })}`;
    }
  })} <h4 class="svelte-beztui" data-svelte-h="svelte-cy8vvz">Exercises</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-beztui" data-svelte-h="svelte-14t2rl8"><p class="svelte-beztui">Write HTML code that shows the following text:</p> <p class="svelte-beztui"><strong style="color:currentColor" class="svelte-beztui">Theorem</strong>: Every prime number (greater than 2) <em>modulo</em> 4 can be written in the form <em>4n + 1</em> or <em>4n + 3</em>.</p> <p class="svelte-beztui"><strong style="color:currentColor" class="svelte-beztui">Proof</strong>: Any number p when divided by 4 leaves remainder 0, 1, 2 or 3. Therefore, the number has the form <em>4n</em>, <em>4n + 1</em>, <em>4n + 2</em> or <em>4n + 3</em>. Since <em>4n</em> and <em>4n + 2</em> are <strong style="color: currentColor;" class="svelte-beztui">even</strong>, so these can not be a form of a prime number which is an <strong style="color: currentColor;" class="svelte-beztui">odd</strong> number (except 2). This <em>proves</em> the theorem. ◻</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-beztui" data-svelte-h="svelte-4swzn"><p class="svelte-beztui">Write HTML code that shows the following text:</p> <p class="svelte-beztui">e<sup>ιθ</sup> = cosθ + ιsinθ</p> <p class="svelte-beztui"><sup>n</sup>C<sub>r</sub> = <sup>n!</sup>⁄<sub>(n-r)!r!</sub> is equal to the number of ways of selecting r items from n <em>distinct</em> items.</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-beztui" data-svelte-h="svelte-qtneh7"><p class="svelte-beztui">Write HTML code that shows the following pattern:</p> <pre>                      *
                     ***
                    *****</pre> <hr> <pre>                    *****
                     ***
                      *</pre></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-beztui"><p class="svelte-beztui" data-svelte-h="svelte-1j3kllr">Write HTML code that shows the following code:</p> <code><pre>let sum = (a, b) =&gt; ${escape("{")}
    return a + b;
}
console.log(sum(3 + 4));//prints 7</pre></code></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-beztui" data-svelte-h="svelte-mchjcq">Using above text-related html tags, write an article in HTML that teaches a student how to solve equations in 2 variables. Show a program in your programming language that solves the problem.</div>`;
        }
      })}`;
    }
  })} <h4 class="svelte-beztui" data-svelte-h="svelte-hc8mgz">Assignment</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-beztui" data-svelte-h="svelte-1mqcxb7">Create a repository on Github called resume. Clone it to your laptop. Create an HTML page called <code>resume.html</code> for your resume using only tags used in this page. (No CSS yet.)</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DwSM14Cj.js.map
