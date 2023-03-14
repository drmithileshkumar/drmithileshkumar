import { c as create_ssr_component, v as validate_component, b as subscribe, f as add_attribute, h as each, e as escape } from './index3-27cd0b89.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-84db76e6.js';
import './index2-6ed83499.js';

const css$4 = {
  code: ".notes.svelte-ci5yil{font-size:1.2em;background-color:green;color:black;padding:0.5em 1em;border-radius:10px}article.svelte-ci5yil{position:relative;padding:0.5em;max-height:400px;overflow:hidden;padding:1em 1em;background-color:rgba(110, 120, 150, 0.3);border-radius:10px;cursor:pointer}.absolute.svelte-ci5yil{margin:auto;width:100%;height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-ci5yil::-webkit-scrollbar{width:0;height:0}.thumbnail.svelte-ci5yil{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-ci5yil{background:radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));color:black;text-shadow:1px 1px 3px rgb(4, 4, 4);box-shadow:1px 1px 3px rgb(129, 128, 128);padding:1em;background-image:url('/notes/maths/sets/subsets/thumbnail.svg');background-position:center;background-size:cover;background-repeat:no-repeat}",
  map: null
};
const Notes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $$unsubscribe_selectedSection;
  let $$unsubscribe_selectedChapter;
  let $presentationMode, $$unsubscribe_presentationMode;
  let $presentation, $$unsubscribe_presentation;
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_selectedSection = subscribe(selectedSection, (value) => value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => value);
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => $presentation = value);
  $$result.css.add(css$4);
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  $$unsubscribe_presentationMode();
  $$unsubscribe_presentation();
  return `<a href="${"/notes/maths"}" class="${"notes svelte-ci5yil"}">Lecture of the day</a>
    <article class="${["svelte-ci5yil", $presentationMode ? "absolute" : ""].join(" ").trim()}"${add_attribute("this", $presentation, 0)}><div class="${"thumbnail svelte-ci5yil"}"><div class="${"statement svelte-ci5yil"}"><p>Why is empty set subset of every set?
                </p></div></div>
    </article>`;
});
const Practice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const css$3 = {
  code: ".twitter.svelte-1uu1tax{display:flex;margin:1em 0;padding:1em 0;align-items:center;justify-content:center}",
  map: null
};
const Twitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="${"twitter svelte-1uu1tax"}"><blockquote class="${"twitter-tweet"}"><p lang="${"zxx"}" dir="${"ltr"}"><a href="${"https://t.co/OuJAxIYnuV"}">pic.twitter.com/OuJAxIYnuV</a></p>— Dr Mithilesh Kumar (@DrMithileshKr) <a href="${"https://twitter.com/DrMithileshKr/status/1612815196262928386?ref_src=twsrc%5Etfw"}">January 10, 2023</a></blockquote></div>`;
});
const css$2 = {
  code: ".videos.svelte-6np4nz{display:flex;flex-direction:row;gap:1em;flex-wrap:nowrap;margin-bottom:2em;background-color:rgba(110, 120, 150, 0.3);padding:1em;border-radius:10px;overflow-x:auto}.videos.svelte-6np4nz::-webkit-scrollbar{width:0;height:0}.video.svelte-6np4nz{display:flex;flex-direction:column;flex-wrap:wrap;box-shadow:1px 1px 3px gray;padding:0.5em;background-color:white}.title.svelte-6np4nz{font-weight:bold;padding-top:0.5em;display:inline-block;width:210px;color:black}",
  map: null
};
const Youtube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let videos = [
    {
      title: "Set : Subsets",
      src: "https://www.youtube.com/embed/w4SBKulJJh4",
      width: "210",
      height: "150"
    },
    {
      title: "Set : Equal sets",
      src: "https://www.youtube.com/embed/jbBsClpZmPQ",
      width: "210",
      height: "150"
    },
    {
      title: "Set : Finite and Infinite sets",
      src: "https://www.youtube.com/embed/xitRVmUKQz8",
      width: "210",
      height: "150"
    },
    {
      title: "Set : The empty set",
      src: "https://www.youtube.com/embed/-VP7utgjA8I",
      width: "210",
      height: "150"
    },
    {
      title: "Set : Sets and their representation",
      src: "https://www.youtube.com/embed/kj1VeKqMlJc",
      width: "210",
      height: "150"
    },
    {
      title: "Set : Introduction",
      src: "https://www.youtube.com/embed/Ii1HysDxd5U",
      width: "210",
      height: "150"
    }
  ];
  $$result.css.add(css$2);
  return `<h1><a href="${"https://www.youtube.com/@drmithilesh"}">Youtube Channel</a></h1>
<div class="${"videos svelte-6np4nz"}">${each(videos, (video) => {
    return `<div class="${"video svelte-6np4nz"}"><iframe${add_attribute("width", video.width, 0)}${add_attribute("height", video.height, 0)}${add_attribute("src", video.src, 0)}${add_attribute("title", video.title, 0)} frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}" allowfullscreen></iframe>
            <span class="${"title svelte-6np4nz"}">${escape(video.title)}</span>
        </div>`;
  })}
</div>`;
});
const css$1 = {
  code: ".vectorial.svelte-y2l7v4.svelte-y2l7v4{margin-top:1em;padding:0.5em;width:100%;border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center}.vectorial.svelte-y2l7v4.svelte-y2l7v4:hover{box-shadow:0 0 0px #888}.vectorial.svelte-y2l7v4 section.svelte-y2l7v4{display:flex;flex-direction:column;align-items:center;justify-content:center}section.svelte-y2l7v4 a.svelte-y2l7v4{text-decoration:none;font-size:1em;margin-top:0;color:white;text-shadow:1px 2px 1px rgb(77, 77, 77);text-transform:uppercase;letter-spacing:1px;font-weight:400;background:rgb(0, 150, 200);padding:1em 2em;border-radius:10px;box-shadow:1px 2px 2px 0px #891010}.title.svelte-y2l7v4.svelte-y2l7v4{font-size:4em;margin-bottom:0;margin-top:1em;font-weight:600;display:flex;align-items:center;justify-content:center;text-shadow:9px 3px 5px rgba(81, 81, 81, 0.445);color:rgb(7 68 75)}.subtitle.svelte-y2l7v4.svelte-y2l7v4{font-size:2em;color:rgb(212, 163, 13);margin-top:0;margin-bottom:0em}figure.svelte-y2l7v4.svelte-y2l7v4{width:100%;margin:auto;display:flex;align-items:center;flex-direction:row;position:relative;z-index:0;justify-content:center}",
  map: null
};
const Vectorial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<article class="${"vectorial svelte-y2l7v4"}"><section style="${"z-index: 1"}" class="${"svelte-y2l7v4"}"><h1 class="${"title svelte-y2l7v4"}">Vectorial</h1>
            <p class="${"subtitle svelte-y2l7v4"}">Create Vector Graphics.
            </p>
            <p class="${"subsubtitle"}">in Browser!
            </p>
            <a href="${"https://vectorial.app"}" class="${"svelte-y2l7v4"}">Get Started</a>
            </section>
        <figure class="${"svelte-y2l7v4"}">
            
            
            <img src="${"/vectorial/vectorialhome.svg"}" width="${"95%"}" alt="${"vectorialhome"}"></figure></article>`;
});
const css = {
  code: ".homepage.svelte-1gjct{background:white}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-d6qc0s_START -->${$$result.title = `<title>Dr Mithilesh Kumar</title>`, ""}<!-- HEAD_svelte-d6qc0s_END -->`, ""}

<div class="${"homepage svelte-1gjct"}">${validate_component(Vectorial, "Vectorial").$$render($$result, {}, {}, {})}
    ${validate_component(Youtube, "Youtube").$$render($$result, {}, {}, {})}
    ${validate_component(Notes, "Notes").$$render($$result, {}, {}, {})}
    ${validate_component(Practice, "Practice").$$render($$result, {}, {}, {})}
    ${validate_component(Twitter, "Twitter").$$render($$result, {}, {}, {})}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-096d0119.js.map
