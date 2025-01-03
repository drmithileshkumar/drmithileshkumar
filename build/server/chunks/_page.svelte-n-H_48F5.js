import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-q3O0l93f.js';
import { C as Card } from './Card-jWUNhZC7.js';
import { C as Content } from './ActionIcons-Co7bojT-.js';
import { c as currentPath } from './stores2-B6DyWuAW.js';
import './SmuiElement-DA9PKsv2.js';
import './classAdderBuilder-B9W9nXDD.js';
import './index2-BZnI6xu7.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "About", $currentPath);
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-i804x7_START -->${$$result.title = `<title>Vectorial.app: A Revolutionary Tool for SVG Vector Graphic Design with
        LaTeX Support</title>`, ""}<link rel="canonical" href="https://Vectorial.com/about"><meta name="description" content="Vectorial.app, an innovative platform for creating SVG graphics, is revolutionizing the research world with its unique LaTeX support. Discover a seamless graphical interface specifically designed to streamline the work of researchers."><meta name="keywords" content="About Vectorial.app, Online SVG Editor, Vectorial.app Team, SVG Creation Tool, Vectorial.app History, Vector Graphics Software, Web-based SVG Editor, Latex Support in SVG, Research Paper Graphics Tool, Academic Illustration Software"><!-- HEAD_svelte-i804x7_END -->`, ""} <article>${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
        default: () => {
          return `<h1 class="mdc-typography--headline6" style="margin: 0;" data-svelte-h="svelte-1lwrydp">Vectorial.app: A Revolutionary Tool for SVG Vector Graphic Design with
                LaTeX Support</h1> <p data-svelte-h="svelte-1gpomyc">The digital age has revolutionized the way we conduct research,
                and now, with the launch of Vectorial.app, it&#39;s taking another
                giant leap forward. Vectorial.app is an innovative online
                platform designed to empower researchers, providing them with a
                unique tool to create high-quality SVG vector graphics directly
                in their browser.</p> <p data-svelte-h="svelte-1l5ze9h">In today&#39;s research world, SVG (Scalable Vector Graphics) are
                vital. These graphics are versatile, resolution-independent, and
                offer a high degree of control, making them an ideal format for
                the creation of diagrams, illustrations, and other visual
                representations of data that are often required in research
                papers.</p> <p data-svelte-h="svelte-15tm5rx">Vectorial.app takes SVG creation a step further by providing a
                user-friendly, intuitive graphical interface. With its
                convenient drawing tools, users can create complex SVG graphics
                with ease, without needing extensive knowledge of the SVG
                language. But Vectorial.app&#39;s standout feature is its LaTeX
                support, which sets it apart from other SVG editors.</p> <p data-svelte-h="svelte-1b9w62x">LaTeX, a typesetting system widely used in academia, is renowned
                for its ability to create high-quality, professional-looking
                documents, particularly in fields that require complex
                mathematical formulas. By integrating LaTeX support into the SVG
                creation process, Vectorial.app has unlocked a game-changing
                feature for the academic world. Now, researchers can typeset
                mathematical equations seamlessly within their SVG graphics,
                enhancing the clarity and precision of their research papers
                like never before.</p> <p data-svelte-h="svelte-1q8rqil">Signing up and subscribing to Vectorial.app opens a world of
                possibilities. Users can save their projects, share their work
                with others, and access their SVGs from any device, thanks to
                Vectorial.app&#39;s cloud-based storage.</p> <p data-svelte-h="svelte-6bncz5">In creating Vectorial.app, our aim was to provide a tool that
                makes the process of creating SVG graphics for research papers
                as smooth and efficient as possible. The platform is designed to
                cater to the needs of researchers, by offering a unique
                combination of user-friendly SVG creation and LaTeX support.</p> <p data-svelte-h="svelte-10kksfz">Whether you&#39;re a mathematician needing to create detailed
                diagrams featuring complex equations, a physicist designing
                elaborate models of the universe, or a computer scientist
                crafting intricate flowcharts, Vectorial.app is here to elevate
                your research to new heights.</p> <p data-svelte-h="svelte-1xvssly">Join Vectorial.app today and experience a new, simpler way to
                create SVG graphics for your research papers.</p>`;
        }
      })}`;
    }
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-n-H_48F5.js.map
