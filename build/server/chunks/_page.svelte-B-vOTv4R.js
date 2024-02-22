import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { g as githubDark$1, a as github$1, b as contentNav, c as contents } from './content4-C6XjJHjM.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import './Subheader-nJdHlnFA.js';
import './client-_MkdHwD5.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { W as WebPractice } from './WebPractice-ATPi3Fcc.js';
import { P as Pathlist } from './Pathlist-ycGY6RC1.js';
import { C as CourseNavigation } from './CourseNavigation-nZg0bqlC.js';
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

const css = {
  code: "article.svelte-1la69s{display:flex;flex-direction:column;gap:0.5em}p.svelte-1la69s,li.svelte-1la69s{opacity:0.8}h4.svelte-1la69s{margin:0.5em 0}h6.svelte-1la69s{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-1la69s{color:goldenrod;opacity:1}a.svelte-1la69s{text-decoration:none;cursor:pointer}.question.svelte-1la69s{cursor:pointer;padding:0.3em}code{background-color:rgba(0, 100, 100, 0.1)}",
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
  let pathComponents = $page.url.pathname.split("/");
  pathComponents.map((u, index) => {
    let path = $page.url.origin;
    for (let i = 0; i <= index; i++) {
      path += pathComponents[i] + "/";
    }
    return path;
  });
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Organization Elements", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let htmlContentHeader = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <!--include external resources here like adsense, javascript, styles-->
    </head>   
    <body>
        <header>
            <!---contains navigation, headings, table of contents etc.--->
        </header>   
        <main>
        </main>
    </body> 
</html>`;
  let htmlContentNav = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <!--include external resources here like adsense, javascript, styles-->
    </head>   
    <body>   
       <header>
            <nav>
                <a href="">Home</a>
                <a href="">Store</a>
                <a href="">Career</a>
                <a href="">Contact</a>
            </nav>
        </header
    </body> 
</html>`;
  let htmlContentAside = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <!--include external resources here like adsense, javascript, styles-->
    </head>   
    <body>   
        <header>
            <nav>
                <a href="">Home</a>
                <a href="">Store</a>
                <a href="">Career</a>
                <a href="">Contact</a>
            </nav>
        </header>
        <aside>
            <nav>
                <a href="">About</a>
                <a href="">Courses</a>
                <a href="">Publications</a>
                <a href="">Log in</a>
            </nav>
        </aside>
        <p>Notice that the above aside element is not floating to the left or right on its own</p>
    </body> 
</html>
`;
  let htmlContentArticle = `<!DOCTYPE html>
<html lang = "en" >
    <head> 
        <title> Organization Elements </title>
        <meta charset = "utf-8" />
    </head>
    <body>
        <header>
            <nav>
                <a href="">Home</a>
                <a href="">Store</a>
                <a href="">Career</a>
                <a href="">Contact</a>
            </nav>
        </header>
        <aside>
            <nav>
                <a href="">About</a>
                <a href="">Courses</a>
                <a href="">Publications</a>
                <a href="">Log in</a>
            </nav>
        </aside>
        <article>
            <h1>How to layout your page?</h1>
            <p>In this article, we are going to learn how to layout an HTML page.</p>
        </article>
    </body>
</html>`;
  let htmlContentSection = `<!DOCTYPE html>
<html lang = "en" >
    <head> 
        <title> Organization Elements </title>
        <meta charset = "utf-8" />
    </head>
    <body>
        <header>
            <nav>
                <a href="">Home</a>
                <a href="">Store</a>
                <a href="">Career</a>
                <a href="">Contact</a>
            </nav>
        </header>
        <aside>
            <nav>
                <a href="">About</a>
                <a href="">Courses</a>
                <a href="">Publications</a>
                <a href="">Log in</a>
            </nav>
        </aside>
        <article>
            <h1>How to layout your page?</h1>
            <p>In this article, we are going to learn how to layout an HTML page.</p>
            <section>
                <h2>Draw it on paper</h2>
                <p>The first step is to draw out how the page should look.</p>
            </section>
            <section>
                <h2>Semantic names to each part</h2>
                <p>Decide navigation, side bars, footer and main content area.</p>
            </section>
            <section>
                <h2>Container elements</h2>
                <p>Write respective container elements for each part.</p>
            </section>
            <section>
                <h2>Use CSS</h2>
                <p>Use flex or grid to create the layout such that each container is placed where it should be.</p>
            </section>
        </article>
    </body>
</html>`;
  let htmlContentFooter = `<!DOCTYPE html>
<html lang = "en" >
    <head> 
        <title> Organization Elements </title>
        <meta charset = "utf-8" />
    </head>
    <body>
        <header>
            <nav>
                <a href="">Home</a>
                <a href="">Store</a>
                <a href="">Career</a>
                <a href="">Contact</a>
            </nav>
        </header>
        <aside>
            <nav>
                <a href="">About</a>
                <a href="">Courses</a>
                <a href="">Publications</a>
                <a href="">Log in</a>
            </nav>
        </aside>
        <article>
            <h1>How to layout your page?</h1>
            <p>In this article, we are going to learn how to layout an HTML page.</p>
            <section>
                <h2>Draw it on paper</h2>
                <p>The first step is to draw out how the page should look.</p>
            </section>
            <section>
                <h2>Semantic names to each part</h2>
                <p>Decide navigation, side bars, footer and main content area.</p>
            </section>
            <section>
                <h2>Container elements</h2>
                <p>Write respective container elements for each part.</p>
            </section>
            <section>
                <h2>Use CSS</h2>
                <p>Use flex or grid to create the layout such that each container is placed where it should be.</p>
            </section>
        </article>
        <footer>
            <p>The website is hosted on the Earth.</p>
            <p>&copy; All rights reserved.</p>
            <p>See legal rights</p>
        </footer>
    </body>
</html>`;
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1iqwtiz_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/organization"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1iqwtiz_END -->`, ""} <article class="svelte-1la69s">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1la69s" data-svelte-h="svelte-3dkb3u">Organization Elements</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1la69s" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-23f8b2"><li class="svelte-1la69s"><a href="#header" class="svelte-1la69s">The <code>header</code> Element</a></li> <li class="svelte-1la69s"><a href="#nav" class="svelte-1la69s">The <code>nav</code> Element</a></li> <li class="svelte-1la69s"><a href="#aside" class="svelte-1la69s">The <code>aside</code> Element</a></li> <li class="svelte-1la69s"><a href="#article" class="svelte-1la69s">The <code>article</code> Element</a></li> <li class="svelte-1la69s"><a href="#section" class="svelte-1la69s">The <code>section</code> Element</a></li> <li class="svelte-1la69s"><a href="#footer" class="svelte-1la69s">The <code>footer</code> Element</a></li> <li class="svelte-1la69s"><a href="#div" class="svelte-1la69s">The <code>div</code> Element</a></li> <li class="svelte-1la69s"><a href="#span" class="svelte-1la69s">The <code>span</code> Element</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-1la69s" data-svelte-h="svelte-19fqk59">There are many elements in HTML that are used to create a layout and organize various parts of a page depending on their <em>natural</em> place. For example, information that should be at the end of a page is placed inside <code>footer</code> element. Information in the sidebar is placed inside an <code>aside</code> element. It is important to note that HTML will <strong class="svelte-1la69s">not</strong> put a <code>footer</code> at the end of the page or an <code>aside</code> to the side of the page. These organization elements are only there to provide a semantic meaning to the content.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="header" class="svelte-1la69s" data-svelte-h="svelte-zreij8">The <code>header</code> Element</h6> <p class="svelte-1la69s" data-svelte-h="svelte-1ibf0b0"><code>header</code> element acts as a container for content that goes at the top of the page, usually navigation, heading, table of contents etc.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentHeader,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="nav" class="svelte-1la69s" data-svelte-h="svelte-1dj2wqa">The <code>nav</code> Element</h6> <p class="svelte-1la69s" data-svelte-h="svelte-fegjlt">The <code>nav</code> elements acts as a container for links to other pages in the website. Usually it is placed at the top of the page, in sidebar or in the footer.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentNav,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="aside" class="svelte-1la69s" data-svelte-h="svelte-1ygizws">The <code>aside</code> Element</h6> <p class="svelte-1la69s" data-svelte-h="svelte-1nloc05">Usually side bars are placed inside an <code>aside</code> element. The side bars likely contain a <code>nav</code> element. CSS is used to place the <code>aside</code> element to lay on the left or right side of the page.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentAside,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="article" class="svelte-1la69s" data-svelte-h="svelte-1o9xkvs">The <code>article</code> Element</h6> <p class="svelte-1la69s" data-svelte-h="svelte-8j1prm"><code>article</code> element as the name suggests becomes the container for main content of the page. It can start with a heading <code>h1</code> etc. and may contain many paragraphs.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentArticle,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="section" class="svelte-1la69s" data-svelte-h="svelte-1f5z9oe">The <code>section</code> Element</h6> <p class="svelte-1la69s" data-svelte-h="svelte-tsx9iv">Usually <code>section</code> elements divide an <code>article</code> into many parts where each <code>section</code> can have its own heading <code>h2</code> etc.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentSection,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="footer" class="svelte-1la69s" data-svelte-h="svelte-134a0tk">The <code>footer</code> Element</h6> <p class="svelte-1la69s" data-svelte-h="svelte-1fo5lfi">Usually <code>footer</code> element contains copyright information, office address, legal information etc and is placed at the end of the page.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentFooter,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="div" class="svelte-1la69s" data-svelte-h="svelte-etchai">The <code>div</code> Element</h6> <p class="svelte-1la69s" data-svelte-h="svelte-1l6p636">Sometimes we need a container that is there just for design. It does not carry any semantic meaning. For example, displaying two paragraphs side-by-side. We use <code>div</code> element as a container in such cases.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="span" class="svelte-1la69s" data-svelte-h="svelte-q85sks">The <code>span</code> Element</h6> <p class="svelte-1la69s" data-svelte-h="svelte-hi5waq"><code>span</code> element is like inline version of <code>div</code>. It is usually used to modify text or insert icons or spacing characters without changing the flow of the content.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="layout" class="svelte-1la69s" data-svelte-h="svelte-15docy2">Typical Layout</h6> <svg width="100%" viewBox="0 0 500 500"><rect x="5" y="5" width="490px" height="50px" fill="rgba(0, 100, 200, 0.1)" stroke="currentColor" stroke-width="1"></rect><rect x="5" y="55" width="50px" height="350px" fill="rgba(0, 0, 0, 0.1)" stroke="currentColor" stroke-width="1"></rect><rect x="445" y="55" width="50px" height="350px" fill="rgba(0, 0, 0, 0.1)" stroke="currentColor" stroke-width="1"></rect><rect x="5" y="405" width="490px" height="50px" fill="rgba(0, 100, 200, 0.1)" stroke="currentColor" stroke-width="1"></rect><rect x="60" y="60" width="380px" height="340px" fill="rgba(100, 0, 100, 0.1)" stroke="currentColor" stroke-width="1"></rect><rect x="65" y="90" width="370px" height="305px" fill="rgba(0, 200, 0, 0.1)" stroke="currentColor" stroke-width="1"></rect><rect x="70" y="140" width="360px" height="80px" fill="rgba(200, 0, 0, 0.1)" stroke="currentColor" stroke-width="1"></rect><rect x="70" y="225" width="360px" height="80px" fill="rgba(200, 0, 0, 0.1)" stroke="currentColor" stroke-width="1"></rect><rect x="70" y="310" width="360px" height="80px" fill="rgba(200, 0, 0, 0.1)" stroke="currentColor" stroke-width="1"></rect><rect x="75" y="315" width="175px" height="70px" fill="rgba(0, 0, 200, 0.1)" stroke="currentColor" stroke-width="1"></rect><rect x="255" y="315" width="170px" height="70px" fill="rgba(0, 0, 200, 0.1)" stroke="currentColor" stroke-width="1"></rect><text x="220" y="20" fill="currentColor">header</text><text x="10" y="200" fill="currentColor">aside</text><text x="220" y="75" fill="currentColor">main</text><text x="220" y="110" fill="currentColor">article</text><text x="450" y="200" fill="currentColor">aside</text><text x="220" y="450" fill="currentColor">footer</text><text x="220" y="170" fill="currentColor">section</text><text x="220" y="255" fill="currentColor">section</text><text x="150" y="355" fill="currentColor">div</text><text x="330" y="355" fill="currentColor">div</text></svg>`;
        }
      })}`;
    }
  })} <h4 class="svelte-1la69s" data-svelte-h="svelte-1yto96c">Exercise</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1la69s" data-svelte-h="svelte-1clzote">On paper draw layout of the homepage of your university. Mark the corresponding container elements like <code>header, nav, aside, footer</code> etc.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1la69s" data-svelte-h="svelte-1534dyf">Draw a fancy design of your resume page, i.e. how you want it to look like. Use the necessary container elements. Later we&#39;ll use CSS to get your fancy design.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B-vOTv4R.js.map
