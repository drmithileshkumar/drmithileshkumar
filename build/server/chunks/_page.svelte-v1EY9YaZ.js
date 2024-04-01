import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { j as javascript$1 } from './javascript-rg8zYIj7.js';
import { g as githubDark$1, a as github$1, c as contentNav, b as contents } from './content4-eGCvawDk.js';
import './Suffix-ybHP5eir.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { p as page } from './stores-J1hWMOsb.js';
import './Subheader-nJdHlnFA.js';
import './client-_MkdHwD5.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import { H as Highlight$1, L as LineNumbers$1 } from './LineNumbers-OqX36GRB.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './exports-mq_1S73-.js';
import './index2-z1g76_ny.js';
import './_commonjsHelpers-YxXKG0rd.js';

const css$1 = {
  code: "article.svelte-1sv2bd8{display:flex;flex-direction:column;gap:0.5em}p.svelte-1sv2bd8,li.svelte-1sv2bd8{opacity:0.8}h4.svelte-1sv2bd8{margin:0.5em 0}h6.svelte-1sv2bd8{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-1sv2bd8{cursor:pointer;text-decoration:none}",
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
  set_store_value(currentPath, $currentPath = "Conditions", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1bpznm0_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/javascript/basics/conditions"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1bpznm0_END -->`, ""} <article class="svelte-1sv2bd8">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1sv2bd8" data-svelte-h="svelte-1ogm98s">Conditions</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1sv2bd8" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1rcc51o"><li class="svelte-1sv2bd8"><a href="#if" class="svelte-1sv2bd8"><code>if</code></a></li> <li class="svelte-1sv2bd8"><a href="#switch" class="svelte-1sv2bd8"><code>switch</code></a></li></ol> <p class="svelte-1sv2bd8" data-svelte-h="svelte-188azs8">Conditional statements like <code>if...else</code> and <code>switch</code> introduce branching in the normal flow of the program.</p>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="if" class="svelte-1sv2bd8" data-svelte-h="svelte-m1wtmx"><code>if</code></h6> <p class="svelte-1sv2bd8">The general syntax of <code data-svelte-h="svelte-1dijpjs">if...else</code> statement is as follows:
                ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: javascript$1,
              code: `if(condition1) {
	//statements to execute when condition1 is true
} else if(condition2) {
	//statements to execute when condition1 is false and condition2 is true
} else {
	//statements to execute when both condition1 and condition2 are false
}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p>`;
        }
      })}`;
    }
  })}  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="switch" class="svelte-1sv2bd8" data-svelte-h="svelte-mtljh"><code>switch</code></h6> <p class="svelte-1sv2bd8">The general syntax of <code data-svelte-h="svelte-1twcug8">switch...case</code> statement is as follows:
                ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: javascript$1,
              code: `switch(variable) {
	case value1: {
		//when variable = value1;
		break;//exit when done
	}
	case value2: {
		//when variable = value2;
		break;//exit when done
	}
	default: {
		//when value of the variable is not value1 and value2
		break;//exit when done
	}
}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p>`;
        }
      })}`;
    }
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-v1EY9YaZ.js.map
