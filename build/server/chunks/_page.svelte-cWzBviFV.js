import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { c as css$1$1 } from './css--weNKAeu.js';
import { g as githubDark$1, a as github$1, c as contentNav, b as contents } from './content4-vJ0cuVXk.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import './Subheader-nJdHlnFA.js';
import './client-_MkdHwD5.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { W as WebPractice } from './WebPractice-ATPi3Fcc.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import { H as Highlight$1, L as LineNumbers$1 } from './LineNumbers-OqX36GRB.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './exports-mq_1S73-.js';
import './index2-z1g76_ny.js';
import './ContextFragment-h_zhkUzP.js';
import './CommonLabel-QaCL5f48.js';
import './Suffix-ybHP5eir.js';
import './Button-FylIdC7C.js';
import './Ripple-IoYaH5-z.js';
import '@codemirror/lang-javascript';
import '@codemirror/lang-xml';
import '@codemirror/lang-css';
import './_commonjsHelpers-YxXKG0rd.js';

const css$1 = {
  code: "article.svelte-acl3tm{display:flex;flex-direction:column;gap:0.5em}p.svelte-acl3tm,li.svelte-acl3tm{opacity:0.8}h4.svelte-acl3tm,h5.svelte-acl3tm{margin:0.5em 0}h5.svelte-acl3tm{font-size:1.1em}h6.svelte-acl3tm{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-acl3tm{cursor:pointer;text-decoration:none}.question.svelte-acl3tm{cursor:pointer;padding:0.3em}",
  map: null
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
  return `${$$result.head += `<!-- HEAD_svelte-11nx1nb_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-11nx1nb_END -->`, ""} <article class="svelte-acl3tm">${validate_component(Pathlist, "Pathlist").$$render(
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
                    ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: css$1$1, code: `margin-top: 10px;` }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}</li> <li class="svelte-acl3tm"><code data-svelte-h="svelte-e9tzn4">margin-bottom</code> : sets bottom margin
                    ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: css$1$1,
              code: `margin-bottom: 10px;`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</li> <li class="svelte-acl3tm"><code data-svelte-h="svelte-13wdhni">margin-left</code> : sets left margin
                    ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: css$1$1,
              code: `margin-left: 10px;`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</li> <li class="svelte-acl3tm"><code data-svelte-h="svelte-jr1nj1">margin-right</code> : sets right margin
                    ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: css$1$1,
              code: `margin-right: 10px;`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</li> <li class="svelte-acl3tm"><code data-svelte-h="svelte-1sp9mf2">margin</code> : sets margin
                    ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: css$1$1, code: marginCode }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
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
                    ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: css$1$1,
              code: `padding-top: 10px;`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</li> <li class="svelte-acl3tm"><code data-svelte-h="svelte-v8cxnz">padding-bottom</code> : sets bottom padding
                    ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: css$1$1,
              code: `padding-bottom: 10px;`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</li> <li class="svelte-acl3tm"><code data-svelte-h="svelte-i81fqt">padding-left</code> : sets left padding
                    ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: css$1$1,
              code: `padding-left: 10px;`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</li> <li class="svelte-acl3tm"><code data-svelte-h="svelte-1139t9c">padding-right</code> : sets right padding
                    ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: css$1$1,
              code: `padding-right: 10px;`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</li> <li class="svelte-acl3tm"><code data-svelte-h="svelte-17ukzv9">padding</code> : sets padding
                    ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: css$1$1, code: paddingCode }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
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
          return `<h5 id="boxsizing" class="svelte-acl3tm" data-svelte-h="svelte-1elacoi"><code>box-sizing</code></h5> <p class="svelte-acl3tm" data-svelte-h="svelte-13olvpa">When we specify <code>width</code> and <code>height</code> of an element, it&#39;s actual width will be <code>width + paddingRight + paddingLeft + marginRight + marginLeft</code>. Similarly, the actual height will be <code>width + paddingTop + paddingBottom + marginTop + marginBottom</code>. This creates a lot of confusion.</p> <p class="svelte-acl3tm" data-svelte-h="svelte-apr6pi">To include margins and paddings into <code>width</code> and <code>height</code> of the element, we set the property <code>box-sizing</code> to <code>border-box</code>.</p> ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: css$1$1,
              code: `box-sizing: border-box;`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
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

export { Page as default };
//# sourceMappingURL=_page.svelte-cWzBviFV.js.map
