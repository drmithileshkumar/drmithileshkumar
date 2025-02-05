import { a as subscribe, b as set_store_value } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../../../../../chunks/ssr2.js";
import { c as css } from "../../../../../../../chunks/css.js";
import { a as githubDark, g as github } from "../../../../../../../chunks/github-dark.js";
/* empty css                                                             */
import { p as page } from "../../../../../../../chunks/stores3.js";
import { C as Card } from "../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../chunks/ActionIcons.js";
import "../../../../../../../chunks/Subheader.js";
import "../../../../../../../chunks/client.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../chunks/stores.js";
/* empty css                                                                */
import { W as WebPractice } from "../../../../../../../chunks/WebPractice.js";
import { c as contentNav, a as contents } from "../../../../../../../chunks/content2.js";
import { P as Pathlist } from "../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../chunks/CourseNavigation.js";
import { H as Highlight, L as LineNumbers } from "../../../../../../../chunks/LineNumbers.js";
const css$1 = {
  code: "article.svelte-acl3tm{display:flex;flex-direction:column;gap:0.5em}p.svelte-acl3tm,li.svelte-acl3tm{opacity:0.8}h4.svelte-acl3tm,h5.svelte-acl3tm{margin:0.5em 0}h5.svelte-acl3tm{font-size:1.1em}h6.svelte-acl3tm{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-acl3tm{cursor:pointer;text-decoration:none}.question.svelte-acl3tm{cursor:pointer;padding:0.3em}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from \'svelte/transition\';\\r\\n\\timport { quintOut } from \'svelte/easing\';\\r\\n\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from \'$lib/ui/Link.svelte\';\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\timport { blackMetal } from \\"svelte-highlight/styles\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Box Model\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    let marginCode = `margin: 10px; /* all sides equal margin */\\r\\nmargin: 10px 20px; /* 10px for top,bottom; 20px for left,right */\\r\\nmargin: 10px 20px 30px 40px; /* top right bottom left */`\\r\\nlet paddingCode = `padding: 10px; /* all sides equal padding */\\r\\npadding: 10px 20px; /* 10px for top,bottom; 20px for left,right */\\r\\npadding: 10px 20px 30px 40px; /* top right bottom left */`\\r\\n    let htmlContentBorder=`<h1>Bordered Heading</h1>\\r\\n<p>I\'m a bordered paragraph.</p>`;\\r\\n    let cssContentBorder=`h1 {\\r\\n    border: 2px solid red;\\r\\n}\\r\\np {\\r\\n    border: 2px solid green;\\r\\n}`\\r\\n    let htmlContentMargin=`<section>\\r\\n    <div class=\'borderBlue row1\'>\\r\\n        <p class=\\"border marginRight\\">Check right margin</p>\\r\\n        <p class=\\"border marginLeft\\">Check left margin</p>\\r\\n    </div>\\r\\n    <div class=\'borderBlue row2\'>\\r\\n        <p class=\\"border marginTop\\">Check top margin</p>\\r\\n        <p class=\\"border marginBottom\\">Check bottom margin</p>\\r\\n    </div>\\r\\n    <div class=\\"borderBlue row3\\">\\r\\n        <p class=\\"border margin\\">\\r\\n            Margin shorthand\\r\\n        </p>\\r\\n    </div>\\r\\n</section>\\r\\n    `\\r\\n    let cssContentMargin=`.border {\\r\\n    border: 1px solid red;\\r\\n}\\r\\n.borderBlue {\\r\\n    border: 1px solid blue;\\r\\n}\\r\\n.row1, .row2, .row3 {\\r\\n    margin-bottom: 20px;\\r\\n}\\r\\n.marginRight {\\r\\n    margin-right: 10px;\\r\\n}\\r\\n.marginLeft {\\r\\n    margin-left: 20px;\\r\\n}\\r\\n.marginTop {\\r\\n    margin-top: 30px;\\r\\n}\\r\\n.marginBottom {\\r\\n    margin-Bottom: 40px;\\r\\n}\\r\\n.margin {\\r\\n    margin: 10px 20px;\\r\\n}`\\r\\nlet htmlContentPadding=`<section>\\r\\n    <div class=\'borderBlue row1\'>\\r\\n        <p class=\\"border paddingRight\\">Check right padding</p>\\r\\n        <p class=\\"border paddingLeft\\">Check left padding</p>\\r\\n    </div>\\r\\n    <div class=\'borderBlue row2\'>\\r\\n        <p class=\\"border paddingTop\\">Check top padding</p>\\r\\n        <p class=\\"border paddingBottom\\">Check bottom padding</p>\\r\\n    </div>\\r\\n    <div class=\\"borderBlue row3\\">\\r\\n        <p class=\\"border padding\\">\\r\\n            Margin shorthand\\r\\n        </p>\\r\\n    </div>\\r\\n</section>\\r\\n    `\\r\\n    let cssContentPadding=`.border {\\r\\n    border: 1px solid red;\\r\\n}\\r\\n.borderBlue {\\r\\n    border: 1px solid blue;\\r\\n}\\r\\n.row1, .row2, .row3 {\\r\\n    padding-bottom: 20px;\\r\\n}\\r\\n.paddingRight {\\r\\n    padding-right: 10px;\\r\\n}\\r\\n.paddingLeft {\\r\\n    padding-left: 20px;\\r\\n}\\r\\n.paddingTop {\\r\\n    padding-top: 30px;\\r\\n}\\r\\n.paddingBottom {\\r\\n    padding-Bottom: 40px;\\r\\n}\\r\\n.padding {\\r\\n    padding: 10px 20px;\\r\\n}`\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Box Model\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#margin\\"><code>margin</code></a></li>\\r\\n                <li><a href=\\"#padding\\"><code>padding</code></a></li>\\r\\n                <li><a href=\\"#boxsizing\\"><code>box-sizing</code></a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <p>\\r\\n                Every HTML element is laid out as a rectangle. Using <code>border</code> attribute, we can display the border around this rectangle.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentBorder} cssContent={cssContentBorder} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <p>\\r\\n                The gap between different elements is called <code>margin</code>. We can create gap between the content of the element and its border using <code>padding</code>.\\r\\n            </p>\\r\\n            <img width=\\"300px\\" src=\\"/courses/internet/css/boxmodel.svg\\" alt=\\"box model\\">\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5 id=\\"margin\\"><code>margin</code></h5>\\r\\n            <p>\\r\\n                There are four sides to an element. The margins on each side can be set individually.\\r\\n            </p>\\r\\n            <ul>\\r\\n                <li>\\r\\n                    <code>margin-top</code> : sets top margin\\r\\n                    <Highlight language={css} code={`margin-top: 10px;`} let:highlighted>\\r\\n                        <LineNumbers {highlighted} wrapLines/>\\r\\n                    </Highlight>\\r\\n                </li>\\r\\n                <li>\\r\\n                    <code>margin-bottom</code> : sets bottom margin\\r\\n                    <Highlight language={css} code={`margin-bottom: 10px;`} let:highlighted>\\r\\n                        <LineNumbers {highlighted} wrapLines/>\\r\\n                    </Highlight>\\r\\n                </li>\\r\\n                <li>\\r\\n                    <code>margin-left</code> : sets left margin\\r\\n                    <Highlight language={css} code={`margin-left: 10px;`} let:highlighted>\\r\\n                        <LineNumbers {highlighted} wrapLines/>\\r\\n                    </Highlight>\\r\\n                </li>\\r\\n                <li>\\r\\n                    <code>margin-right</code> : sets right margin\\r\\n                    <Highlight language={css} code={`margin-right: 10px;`} let:highlighted>\\r\\n                        <LineNumbers {highlighted} wrapLines/>\\r\\n                    </Highlight>\\r\\n                </li>\\r\\n                <li>\\r\\n                    <code>margin</code> : sets margin\\r\\n                    <Highlight language={css} code={marginCode} let:highlighted>\\r\\n                        <LineNumbers {highlighted} wrapLines/>\\r\\n                    </Highlight>\\r\\n                </li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentMargin} cssContent={cssContentMargin} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5 id=\\"padding\\"><code>padding</code></h5>\\r\\n            <p>\\r\\n                There are four sides to an element. The paddings on each side can be set individually.\\r\\n            </p>\\r\\n            <ul>\\r\\n                <li>\\r\\n                    <code>padding-top</code> : sets top padding\\r\\n                    <Highlight language={css} code={`padding-top: 10px;`} let:highlighted>\\r\\n                        <LineNumbers {highlighted} wrapLines/>\\r\\n                    </Highlight>\\r\\n                </li>\\r\\n                <li>\\r\\n                    <code>padding-bottom</code> : sets bottom padding\\r\\n                    <Highlight language={css} code={`padding-bottom: 10px;`} let:highlighted>\\r\\n                        <LineNumbers {highlighted} wrapLines/>\\r\\n                    </Highlight>\\r\\n                </li>\\r\\n                <li>\\r\\n                    <code>padding-left</code> : sets left padding\\r\\n                    <Highlight language={css} code={`padding-left: 10px;`} let:highlighted>\\r\\n                        <LineNumbers {highlighted} wrapLines/>\\r\\n                    </Highlight>\\r\\n                </li>\\r\\n                <li>\\r\\n                    <code>padding-right</code> : sets right padding\\r\\n                    <Highlight language={css} code={`padding-right: 10px;`} let:highlighted>\\r\\n                        <LineNumbers {highlighted} wrapLines/>\\r\\n                    </Highlight>\\r\\n                </li>\\r\\n                <li>\\r\\n                    <code>padding</code> : sets padding\\r\\n                    <Highlight language={css} code={paddingCode} let:highlighted>\\r\\n                        <LineNumbers {highlighted} wrapLines/>\\r\\n                    </Highlight>\\r\\n                </li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentPadding} cssContent={cssContentPadding} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5 id=\\"boxsizing\\"><code>box-sizing</code></h5>\\r\\n            <p>\\r\\n                When we specify <code>width</code> and <code>height</code> of an element, it\'s actual width will be <code>width + paddingRight + paddingLeft + marginRight + marginLeft</code>. Similarly, the actual height will be <code>width + paddingTop + paddingBottom + marginTop + marginBottom</code>. This creates a lot of confusion.\\r\\n            </p>\\r\\n            <p>\\r\\n                To include margins and paddings into <code>width</code> and <code>height</code> of the element, we set the property <code>box-sizing</code> to <code>border-box</code>.\\r\\n            </p>\\r\\n            <Highlight language={css} code={`box-sizing: border-box;`} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <Highlight language={xml} code={code2} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    <h4>Questions</h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                <p>\\r\\n                    Use inline CSS to apply <code>margin</code> property on <code>p</code> elements to get the following output:\\r\\n                </p>\\r\\n                <p style=\\"margin-left: 1.5em;\\">\\r\\n                    *\\r\\n                </p>\\r\\n                <p style=\\"margin-left: 1em;\\">\\r\\n                    **\\r\\n                </p>\\r\\n                <p style=\\"margin-left: 0.5em;\\">\\r\\n                    ***\\r\\n                </p>\\r\\n                <p style=\\"margin-left: 0em;\\">\\r\\n                    ****\\r\\n                </p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                <p>\\r\\n                    Use <code>border</code> and <code>padding</code> properties on a <code>span</code> element to get the following output:\\r\\n                </p>\\r\\n                <p>\\r\\n                    <span style=\\"margin-left:30%; border: 2px solid red; padding: 0px 0px 30px 40px;\\">Hello</span>\\r\\n                </p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgII,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAE,CAAE,gBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gBAAG,CACC,SAAS,CAAE,KACf,CACA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CAKA,eAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,uBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}'
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
  set_store_value(currentPath, $currentPath = "Box Model", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let marginCode = `margin: 10px; /* all sides equal margin */
margin: 10px 20px; /* 10px for top,bottom; 20px for left,right */
margin: 10px 20px 30px 40px; /* top right bottom left */`;
  let paddingCode = `padding: 10px; /* all sides equal padding */
padding: 10px 20px; /* 10px for top,bottom; 20px for left,right */
padding: 10px 20px 30px 40px; /* top right bottom left */`;
  let htmlContentBorder = `<h1>Bordered Heading</h1>
<p>I'm a bordered paragraph.</p>`;
  let cssContentBorder = `h1 {
    border: 2px solid red;
}
p {
    border: 2px solid green;
}`;
  let htmlContentMargin = `<section>
    <div class='borderBlue row1'>
        <p class="border marginRight">Check right margin</p>
        <p class="border marginLeft">Check left margin</p>
    </div>
    <div class='borderBlue row2'>
        <p class="border marginTop">Check top margin</p>
        <p class="border marginBottom">Check bottom margin</p>
    </div>
    <div class="borderBlue row3">
        <p class="border margin">
            Margin shorthand
        </p>
    </div>
</section>
    `;
  let cssContentMargin = `.border {
    border: 1px solid red;
}
.borderBlue {
    border: 1px solid blue;
}
.row1, .row2, .row3 {
    margin-bottom: 20px;
}
.marginRight {
    margin-right: 10px;
}
.marginLeft {
    margin-left: 20px;
}
.marginTop {
    margin-top: 30px;
}
.marginBottom {
    margin-Bottom: 40px;
}
.margin {
    margin: 10px 20px;
}`;
  let htmlContentPadding = `<section>
    <div class='borderBlue row1'>
        <p class="border paddingRight">Check right padding</p>
        <p class="border paddingLeft">Check left padding</p>
    </div>
    <div class='borderBlue row2'>
        <p class="border paddingTop">Check top padding</p>
        <p class="border paddingBottom">Check bottom padding</p>
    </div>
    <div class="borderBlue row3">
        <p class="border padding">
            Margin shorthand
        </p>
    </div>
</section>
    `;
  let cssContentPadding = `.border {
    border: 1px solid red;
}
.borderBlue {
    border: 1px solid blue;
}
.row1, .row2, .row3 {
    padding-bottom: 20px;
}
.paddingRight {
    padding-right: 10px;
}
.paddingLeft {
    padding-left: 20px;
}
.paddingTop {
    padding-top: 30px;
}
.paddingBottom {
    padding-Bottom: 40px;
}
.padding {
    padding: 10px 20px;
}`;
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-11nx1nb_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-11nx1nb_END -->`, ""} <article class="svelte-acl3tm">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-acl3tm" data-svelte-h="svelte-mx6cdy">Box Model</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-acl3tm" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1jplr9z"><li class="svelte-acl3tm"><a href="#margin" class="svelte-acl3tm"><code>margin</code></a></li> <li class="svelte-acl3tm"><a href="#padding" class="svelte-acl3tm"><code>padding</code></a></li> <li class="svelte-acl3tm"><a href="#boxsizing" class="svelte-acl3tm"><code>box-sizing</code></a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-acl3tm" data-svelte-h="svelte-om5uao">Every HTML element is laid out as a rectangle. Using <code>border</code> attribute, we can display the border around this rectangle.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentBorder,
      cssContent: cssContentBorder,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-acl3tm" data-svelte-h="svelte-e46hw2">The gap between different elements is called <code>margin</code>. We can create gap between the content of the element and its border using <code>padding</code>.</p> <img width="300px" src="/courses/internet/css/boxmodel.svg" alt="box model">`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 id="margin" class="svelte-acl3tm" data-svelte-h="svelte-11d4sw9"><code>margin</code></h5> <p class="svelte-acl3tm" data-svelte-h="svelte-qvjxd4">There are four sides to an element. The margins on each side can be set individually.</p> <ul><li class="svelte-acl3tm"><code data-svelte-h="svelte-1sfcd7o">margin-top</code> : sets top margin
                    ${validate_component(Highlight, "Highlight").$$render($$result, { language: css, code: `margin-top: 10px;` }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}</li> <li class="svelte-acl3tm"><code data-svelte-h="svelte-e9tzn4">margin-bottom</code> : sets bottom margin
                    ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `margin-bottom: 10px;`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</li> <li class="svelte-acl3tm"><code data-svelte-h="svelte-13wdhni">margin-left</code> : sets left margin
                    ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `margin-left: 10px;`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</li> <li class="svelte-acl3tm"><code data-svelte-h="svelte-jr1nj1">margin-right</code> : sets right margin
                    ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `margin-right: 10px;`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</li> <li class="svelte-acl3tm"><code data-svelte-h="svelte-1sp9mf2">margin</code> : sets margin
                    ${validate_component(Highlight, "Highlight").$$render($$result, { language: css, code: marginCode }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentMargin,
      cssContent: cssContentMargin,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 id="padding" class="svelte-acl3tm" data-svelte-h="svelte-vzcdfp"><code>padding</code></h5> <p class="svelte-acl3tm" data-svelte-h="svelte-1a9em83">There are four sides to an element. The paddings on each side can be set individually.</p> <ul><li class="svelte-acl3tm"><code data-svelte-h="svelte-17ftvz7">padding-top</code> : sets top padding
                    ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `padding-top: 10px;`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</li> <li class="svelte-acl3tm"><code data-svelte-h="svelte-v8cxnz">padding-bottom</code> : sets bottom padding
                    ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `padding-bottom: 10px;`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</li> <li class="svelte-acl3tm"><code data-svelte-h="svelte-i81fqt">padding-left</code> : sets left padding
                    ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `padding-left: 10px;`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</li> <li class="svelte-acl3tm"><code data-svelte-h="svelte-1139t9c">padding-right</code> : sets right padding
                    ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `padding-right: 10px;`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</li> <li class="svelte-acl3tm"><code data-svelte-h="svelte-17ukzv9">padding</code> : sets padding
                    ${validate_component(Highlight, "Highlight").$$render($$result, { language: css, code: paddingCode }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentPadding,
      cssContent: cssContentPadding,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 id="boxsizing" class="svelte-acl3tm" data-svelte-h="svelte-1elacoi"><code>box-sizing</code></h5> <p class="svelte-acl3tm" data-svelte-h="svelte-13olvpa">When we specify <code>width</code> and <code>height</code> of an element, it&#39;s actual width will be <code>width + paddingRight + paddingLeft + marginRight + marginLeft</code>. Similarly, the actual height will be <code>width + paddingTop + paddingBottom + marginTop + marginBottom</code>. This creates a lot of confusion.</p> <p class="svelte-acl3tm" data-svelte-h="svelte-apr6pi">To include margins and paddings into <code>width</code> and <code>height</code> of the element, we set the property <code>box-sizing</code> to <code>border-box</code>.</p> ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `box-sizing: border-box;`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}`;
        }
      })}`;
    }
  })}  <h4 class="svelte-acl3tm" data-svelte-h="svelte-9or4p">Questions</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-acl3tm" data-svelte-h="svelte-193z6kt"><p class="svelte-acl3tm">Use inline CSS to apply <code>margin</code> property on <code>p</code> elements to get the following output:</p> <p style="margin-left: 1.5em;" class="svelte-acl3tm">*</p> <p style="margin-left: 1em;" class="svelte-acl3tm">**</p> <p style="margin-left: 0.5em;" class="svelte-acl3tm">***</p> <p style="margin-left: 0em;" class="svelte-acl3tm">****</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-acl3tm" data-svelte-h="svelte-192x2ya"><p class="svelte-acl3tm">Use <code>border</code> and <code>padding</code> properties on a <code>span</code> element to get the following output:</p> <p class="svelte-acl3tm"><span style="margin-left:30%; border: 2px solid red; padding: 0px 0px 30px 40px;">Hello</span></p></div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
