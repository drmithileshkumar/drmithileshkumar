import { c as create_ssr_component, b as subscribe, q as set_store_value, v as validate_component } from './ssr-QYhyCQFk.js';
import './client-_MkdHwD5.js';
import { d as darkMode, c as currentPath, n as navList, C as Card } from './Card-sDgXjRKd.js';
import { C as Content } from './ActionIcons-xBhwPEnE.js';
import { N as NavList } from './NavList-lQvNP1y_.js';
import './exports-mq_1S73-.js';
import './index2-2iq6SjbL.js';
import './Graphic-lGQRfn2K.js';
import './Ripple-3bzQ9j1i.js';
import './Subheader-vGMjMlem.js';

const contents = [
  {
    name: "INTERNET TECHNOLOGIES LAB",
    url: "/courses/internetlab",
    topics: [
      {
        name: "Resume with HTML tags",
        url: "/courses/internetlab/resume"
      },
      {
        name: "College Website",
        url: "/courses/internetlab/college"
      },
      {
        name: "Home Town Page",
        url: "/courses/internetlab/home"
      },
      {
        name: "College page with CSS",
        url: "/courses/internetlab/collegecss"
      },
      {
        name: "JavaScript Date",
        url: "/courses/internetlab/date"
      },
      {
        name: "Calculator",
        url: "/courses/internetlab/calculator"
      },
      {
        name: "XML file for students",
        url: "/courses/internetlab/xml"
      },
      {
        name: "DTD",
        url: "/courses/internetlab/dtd"
      },
      {
        name: "Node.js Date",
        url: "/courses/internetlab/nodejsdate"
      },
      {
        name: "Login Authentication",
        url: "/courses/internetlab/authentication"
      }
    ]
  }
];
const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}h2.svelte-n59hwk,h3.svelte-n59hwk{margin:0.5em 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Internet Technologies Lab", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-6f17b2_START -->${$$result.title = `<title>Internet Technologies Lab</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internetlab"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-6f17b2_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-rs3css">Internet Technologies Lab</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-1ee0su2">Contents</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(NavList, "NavList").$$render(
            $$result,
            {
              name: $navList[0].name,
              url: $navList[0].url,
              topics: $navList[0].topics,
              expanded: true
            },
            {},
            {}
          )}`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-I-nhDFuY.js.map
