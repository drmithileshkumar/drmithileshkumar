import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { g as githubDark$1, a as github$1, c as contentNav, b as contents } from './content4-gu6Mjmfl.js';
import { W as WebPractice } from './WebPractice-ATPi3Fcc.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import './Subheader-nJdHlnFA.js';
import './client-_MkdHwD5.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import './index2-z1g76_ny.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './ContextFragment-h_zhkUzP.js';
import './CommonLabel-QaCL5f48.js';
import './Suffix-ybHP5eir.js';
import './Button-FylIdC7C.js';
import './Ripple-IoYaH5-z.js';
import '@codemirror/lang-javascript';
import '@codemirror/lang-xml';
import '@codemirror/lang-css';
import './exports-mq_1S73-.js';

const css$1 = {
  code: "article.svelte-1ptklpl{display:flex;flex-direction:column;gap:0.5em}p.svelte-1ptklpl,li.svelte-1ptklpl{opacity:0.8}h4.svelte-1ptklpl,h5.svelte-1ptklpl{margin:0.5em 0}h5.svelte-1ptklpl{font-size:1.1em}h6.svelte-1ptklpl{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-1ptklpl{cursor:pointer;text-decoration:none}.question.svelte-1ptklpl{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Colors", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let htmlContentForeground = `<section class="container">
    <div class="cell red centerFlex">Red</div>
    <div class="cell rgb centerFlex">RGB</div>
    <div class="cell rgba centerFlex">RGBA</div>
</section>`;
  let cssContentForeground = `.container {
    box-sizing: border-box;
    height: 100px;
    width: 100%;
    border: 1px solid gray;
    padding: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 1em;
    flex-wrap: wrap;
}
.centerFlex {
    display: flex;
    align-items: center;
    justify-content: center;
}
.cell {
    border: 2px solid;
    padding: 0.5em;
}
.red {
    color: red;
}
.rgb {
    color: rgb(150, 50, 0);
}
.rgba {
    color: rgba(150, 50, 0, 0.1);
}`;
  let htmlContentBackground = `<section class="container">
    <div class="cell red centerFlex">Red</div>
    <div class="cell rgb centerFlex">RGB</div>
    <div class="cell rgba centerFlex">RGBA</div>
</section>`;
  let cssContentBackground = `.container {
    box-sizing: border-box;
    height: 100px;
    width: 100%;
    border: 1px solid gray;
    padding: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 1em;
    flex-wrap: wrap;
}
.centerFlex {
    display: flex;
    align-items: center;
    justify-content: center;
}
.cell {
    border: 2px solid;
    padding: 0.5em;
}
.red {
    color: red;
    background-color: yellow;
}
.rgb {
    color: rgb(150, 50, 0);
    background-color: rgb(0, 150, 50);
}
.rgba {
    color: rgba(150, 50, 0, 0.2);
    background-color: rgba(150, 50, 0, 0.1);
}`;
  let htmlContentLinear = `<section class="containerG">
    <div class="cell two centerFlex"></div>
    <div class="cell more  centerFlex"></div>
    <div class="cell angle centerFlex"></div>
    <div class="cell multiple centerFlex"></div>
</section>`;
  let cssContentLinear = `.containerG {
    box-sizing: border-box;
    height: auto;
    width: 100%;
    border: 1px solid gray;
    padding: 1em;
    display: flex;
    gap: 1em;
}
.centerFlex {
    display: flex;
    align-items: center;
    justify-content: center;
}
.cell {
    border: 1px solid teal;
    padding: 0.5em;
    width: 10%;
    height: 50px;
}
.two {
    background: linear-gradient(red, green);
}
.more {
    background: linear-gradient(red, green, blue);
}
.angle {
    background: linear-gradient(45deg, red, green, blue);
}
.multiple {
    background: linear-gradient(45deg, rgba(255, 0, 0, 0.5), rgba(0, 255, 0, 0.5)), linear-gradient(135deg, rgba(150, 120, 0, 0.5), blue);
}`;
  let htmlContentRadial = `<section class="containerG">
    <div class="cell two centerFlex"></div>
    <div class="cell more  centerFlex"></div>
    <div class="cell origin centerFlex"></div>
    <div class="cell multiple centerFlex"></div>
</section>`;
  let cssContentRadial = `.containerG {
    box-sizing: border-box;
    height: auto;
    width: 100%;
    border: 1px solid gray;
    padding: 1em;
    display: flex;
    gap: 1em;
}
.centerFlex {
    display: flex;
    align-items: center;
    justify-content: center;
}
.cell {
    border: 1px solid teal;
    padding: 0.5em;
    width: 10%;
    height: 50px;
}
.two {
    background: radial-gradient(red, green);
}
.more {
    background: radial-gradient(red, green, blue);
}
.origin {
    background: radial-gradient(circle at 100%, red, green, blue);
}
.multiple {
    background: radial-gradient(circle at 0%, rgba(255, 0, 0, 0.5), rgba(0, 255, 0, 0.5)), radial-gradient(circle at 100%, rgba(150, 120, 0, 0.5), blue);
}`;
  let htmlContentBox = `<section class="containerG">
    <div class="cell offset centerFlex">Offset</div>
    <div class="cell blur  centerFlex">Blur</div>
    <div class="cell blurSpread centerFlex">Blur Spread</div>
    <div class="cell multiple centerFlex">Multiple</div>
</section>`;
  let cssContentBox = `.containerG {
    box-sizing: border-box;
    height: auto;
    width: 100%;
    border: 1px solid gray;
    padding: 1em;
    display: flex;
    gap: 1.5em;
}
.centerFlex {
    display: flex;
    align-items: center;
    justify-content: center;
}
.cell {
    border: 1px solid teal;
    padding: 0.5em;
    width: 10%;
    height: 50px;
}
.offset {
    box-shadow: 3px 2px gray;
    text-shadow: 3px 2px gray;
}
.blur {
    box-shadow: 3px 2px 2px gray;
    text-shadow: 3px 2px 2px gray;
}
.blurSpread {
    box-shadow: 3px 2px 2px 1px gray;
    text-shadow: 3px 2px 2px gray;
}
.multiple {
    box-shadow: 5px 5px 3px gray, -5px -5px 3px red;
    text-shadow: 5px 5px 3px gray, -5px -5px 3px red;
}`;
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-ae7jfp_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/colors"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-ae7jfp_END -->`, ""} <article class="svelte-1ptklpl">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1ptklpl" data-svelte-h="svelte-7974r2">Colors</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1ptklpl" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-w2z3z4"><li class="svelte-1ptklpl"><a href="#foreground" class="svelte-1ptklpl">Foreground Color</a></li> <li class="svelte-1ptklpl"><a href="#background" class="svelte-1ptklpl">Background Color</a></li> <li class="svelte-1ptklpl"><a href="#linear" class="svelte-1ptklpl">Linear gradient</a></li> <li class="svelte-1ptklpl"><a href="#radial" class="svelte-1ptklpl">Radial gradient</a></li> <li class="svelte-1ptklpl"><a href="#shadow" class="svelte-1ptklpl">Shadows</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="foreground" class="svelte-1ptklpl" data-svelte-h="svelte-1uo2d5">Foreground Color</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-14se3au">Foreground is the color which is used to render the element. It is specified using <code>color</code> property. There are various named colors like red, green, blue, teal etc. Colors can be specified using other schemes like RGB, RGBA, HS, CMYK. In this chapter we&#39;ll focus mostly on RGBA.</p> <p class="svelte-1ptklpl" data-svelte-h="svelte-vyjyxn">RGBA stands for Red, Green, Blue, Alpha where Alpha controls the opacity. When we set color to an element, then its border and other children inherit this property.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentForeground,
      cssContent: cssContentForeground,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="background" class="svelte-1ptklpl" data-svelte-h="svelte-gbua01">Background Color</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-juzogd">The <code>background-color</code> or <code>background</code> property is used to set the background color of an element.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentBackground,
      cssContent: cssContentBackground,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="linear" class="svelte-1ptklpl" data-svelte-h="svelte-18g9iii">Linear gradient</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-c05whh">The <code>background</code> property can be set a <code>linear-gradient()</code> which creates an image that shows a transition between a list of colors along straight line.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentLinear,
      cssContent: cssContentLinear,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="radial" class="svelte-1ptklpl" data-svelte-h="svelte-1bhk6dy">Radial gradient</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-1vz7zah">The <code>background</code> property can be set a <code>radial-gradient()</code> which creates an image that shows a transition between a list of colors radiating from an origin with a shape circle or ellipse.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentRadial,
      cssContent: cssContentRadial,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="shadow" class="svelte-1ptklpl" data-svelte-h="svelte-o79zu9">Shadows</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-lujot2">The <code>box-shadow</code> property is used to set shadows around the element&#39;s frame. Multiple shadows can be set separated by commas. A box shadow is described by X and Y offsets, blur and spread radius, and color.</p> <p class="svelte-1ptklpl" data-svelte-h="svelte-30esxm">To apply shadow to text, use <code>text-shadow</code> instead of <code>box-shadow</code>, but the same syntax. The only difference is that <code>text-shadow</code> does not have the <code>spread</code> part.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentBox,
      cssContent: cssContentBox,
      jsContent: ""
    },
    {},
    {}
  )}  <h5 class="svelte-1ptklpl" data-svelte-h="svelte-1984kyx">Questions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1ptklpl" data-svelte-h="svelte-s3nbh2">Apply these color properties to resume.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4QgQ_Q3w.js.map
