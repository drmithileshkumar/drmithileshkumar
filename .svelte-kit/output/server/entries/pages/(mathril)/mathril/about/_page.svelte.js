import { a as subscribe, b as set_store_value } from "../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, h as add_attribute, v as validate_component } from "../../../../../chunks/ssr2.js";
import { C as Card } from "../../../../../chunks/Card.js";
import { C as Content } from "../../../../../chunks/ActionIcons.js";
import { c as currentPath } from "../../../../../chunks/stores5.js";
const css = {
  code: "main.svelte-jpl9bt.svelte-jpl9bt{display:flex;gap:0.5em;flex-direction:column}.centered.svelte-jpl9bt.svelte-jpl9bt{display:flex;flex-direction:column;margin:auto;align-items:center;justify-content:center}.centered.svelte-jpl9bt img.svelte-jpl9bt{border-radius:50%}.title.svelte-jpl9bt.svelte-jpl9bt{font-size:2em;margin:0.5em 0;line-height:1.4}.slide.svelte-jpl9bt.svelte-jpl9bt{display:flex;align-items:center;justify-content:center;width:100%;gap:0.5em;flex-wrap:wrap}.rounded.svelte-jpl9bt.svelte-jpl9bt{max-width:40%;border-radius:50%}.frame.svelte-jpl9bt.svelte-jpl9bt{display:flex;flex-direction:column;align-items:center;justify-content:center}.video.svelte-jpl9bt.svelte-jpl9bt{display:flex;align-items:center;justify-content:center;border-radius:12px;background:#252228;overflow:hidden;box-shadow:0 0 3px currentColor}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n  //@ts-nocheck\\r\\n  import Card, {\\r\\n    Content,\\r\\n    PrimaryAction,\\r\\n    Media,\\r\\n    MediaContent,\\r\\n    Actions,\\r\\n    ActionButtons,\\r\\n    ActionIcons,\\r\\n  } from \\"@smui/card\\";\\r\\n  import { currentPath } from \\"$lib/mathril/stores\\";\\r\\n  $currentPath = \\"About\\";\\r\\n  let title = \\"About Mathril | Online Math Practice Platform for All Ages\\";\\r\\n  let description =\\r\\n    \\"Mathril is an online mathematics practice platform designed for learners of all ages following the Indian education system. Enhance your understanding, accuracy, and speed with our extensive collection of template-based math problems.\\";\\r\\n  let keywords =\\r\\n    \\"Mathril, online math practice, Indian education system, mathematics, all ages, math problems, practice problems, understanding, accuracy, speed\\";\\r\\n  let canonical = \\"https://drmithileshkumar.com/mathril/about\\";\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n  <title>{title}</title>\\r\\n  <meta name=\\"description\\" content={description} />\\r\\n  <meta name=\\"keywords\\" content={keywords} />\\r\\n  <link rel=\\"canonical\\" href={canonical} />\\r\\n</svelte:head>\\r\\n\\r\\n<main class=\\"mdc-typography--body1\\">\\r\\n  <!-- <Card>\\r\\n    <Content>\\r\\n      <div class=\\"slide1\\">\\r\\n        <img width=\\"70px\\" src=\\"favicon.png\\" alt=\\"mathril.com\\">\\r\\n        <div class=\\"frame\\">\\r\\n          <div class=\\"title\\">MATHRIL.COM</div>\\r\\n          <div class=\\"subtitle\\">Unlimited Math Practice</div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </Content>\\r\\n  </Card> -->\\r\\n  <Card>\\r\\n    <Content>\\r\\n      <div class=\\"slide\\">\\r\\n        <img class=\\"rounded\\" src=\\"/mathril/about/questionStudent.png\\" alt=\\"Question\\">\\r\\n        <div class=\\"frame\\">\\r\\n          <div class=\\"title\\">Why Do Students Struggle in Mathematics?</div>\\r\\n          <p>In exams, students often either get the wrong answers or don't attempt many problems.</p>\\r\\n        </div>\\r\\n        \\r\\n      </div>\\r\\n    </Content>\\r\\n  </Card>\\r\\n  <Card>\\r\\n    <Content>\\r\\n      <div class=\\"slide\\">\\r\\n        <img class=\\"rounded\\" src=\\"/mathril/about/shakyFoundation.png\\" alt=\\"Question\\">\\r\\n        <div class=\\"frame\\">\\r\\n          <div class=\\"title\\">Unsolidified Basic Concepts</div>\\r\\n          <p>Many students miss essential concepts in earlier classes, leading to a shaky foundation. Without solid basics, progressing in math becomes a challenge.</p>\\r\\n        </div>\\r\\n        \\r\\n      </div>\\r\\n    </Content>\\r\\n  </Card>\\r\\n  <Card>\\r\\n    <Content>\\r\\n      <div class=\\"slide\\">\\r\\n        <img class=\\"rounded\\" src=\\"/mathril/about/book.png\\" alt=\\"book\\">\\r\\n        <div class=\\"frame\\">\\r\\n          <div class=\\"title\\">Limitations Of Textbooks and Traditional Teaching</div>\\r\\n          <p>Textbooks and traditional teaching methods have their limits - a finite set of problems doesn't always ensure comfort and clarity in every concept.</p>\\r\\n        </div>\\r\\n      </div>\\r\\n    </Content>\\r\\n  </Card>\\r\\n  <Card>\\r\\n    <Content>\\r\\n      <div class=\\"slide\\">\\r\\n        <img class=\\"rounded\\" src=\\"/mathril/about/idea.png\\" alt=\\"Idea\\">\\r\\n        <div class=\\"frame\\">\\r\\n          <div class=\\"title\\">How Can We Address This Issue?</div>\\r\\n          <p>To overcome these challenges in learning mathematics, what could be a viable solution?</p>\\r\\n        </div>\\r\\n      </div>\\r\\n    </Content>\\r\\n  </Card>\\r\\n  <Card>\\r\\n    <Content>\\r\\n      <div class=\\"slide\\">\\r\\n        <img class=\\"rounded\\" src=\\"/mathril/about/fountain.png\\" alt=\\"Question\\">\\r\\n        <div class=\\"frame\\">\\r\\n          <div class=\\"title\\">Unlimited Practice for Mastery</div>\\r\\n          <p>The key is an unlimited supply of problems at the same level of difficulty. Students should only move to the next topic after gaining complete comfort and understanding of a concept.</p>\\r\\n        </div>\\r\\n      </div>\\r\\n    </Content>\\r\\n  </Card>\\r\\n  <Card>\\r\\n    <Content>\\r\\n      <div class=\\"slide\\">\\r\\n        <video class=\\"video\\" width=\\"100%\\" height=\\"100%\\" autoplay preload loop muted playsinline>\\r\\n          <source src=\\"/mathril/landing/practice.mov\\" type=\\"video/mp4\\">\\r\\n              Your browser does not support the video type.\\r\\n      </video>\\r\\n        <div class=\\"frame\\">\\r\\n          <div class=\\"title\\">Problem Apps</div>\\r\\n          <p>Each 'Problem App' presents a question with 4 options, only one correct. After an attempt, a similar but new problem loads. For example, in addition problems, the numbers change each time. A timer tracks the time taken for each problem.</p>\\r\\n        </div>\\r\\n      </div>\\r\\n    </Content>\\r\\n  </Card>\\r\\n  <Card>\\r\\n    <Content>\\r\\n      <h1 class=\\"mdc-typography--headline4\\">Welcome to Mathril</h1>\\r\\n\\r\\n      <p>\\r\\n        The best way to solve most problems is to think mathematically. But\\r\\n        thinking mathematically is exhausting. It's like lifting heavy weight.\\r\\n        Mathril provides problem templates in mathematics. You practice on them\\r\\n        daily. Slowly, the neurons in your brain become trained to think\\r\\n        mathematically with ease. The problem templates are designed to be not\\r\\n        too difficult. If you can solve easy problems fast enough, difficult\\r\\n        problems can be taken care of with ease.\\r\\n      </p>\\r\\n      <p>\\r\\n        The website is organized into classes that mirrors what is taught in\\r\\n        schools starting at age 5. So class 1 corresponds to students of age\\r\\n        around 5. As class number increases, problems become a little harder and\\r\\n        cover more topics. The best way to use the templates is to start at\\r\\n        class you feel ease with, then practice daily even on problems you can\\r\\n        solve easily. The goal is not to test whether you can solve a problem,\\r\\n        but to solve them fast.\\r\\n      </p>\\r\\n    </Content>\\r\\n  </Card>\\r\\n  <Card>\\r\\n    <Content>\\r\\n      <h1 class=\\"mdc-typography--headline4\\">About the founder</h1>\\r\\n      <p>\\r\\n        Dr Mithilesh Kumar is a researcher and educationist with many publications in reputed conferences and journels. He has done research in post-quantum cryptography and advanced algorithms. He has keen interest in education, in particular mathematics.\\r\\n      </p>\\r\\n      <div class=\\"centered\\">\\r\\n        <img width=\\"200\\" height=\\"200\\" src=\\"mithileshkumar.png\\" alt=\\"\\" />\\r\\n        <p style=\\"font-weight: 600;\\">\\r\\n          <a href=\\"https://drmithileshkumar.com\\">Dr Mithilesh Kumar</a>, Founder\\r\\n        </p>\\r\\n      </div>\\r\\n      <p>\\r\\n        He has done <strong>PhD</strong> in computer science from University of Bergen, Norway and has double masters in Computer Science [<strong>Gold Medalist</strong>] from CMI, Chennai and masters (integrated) in Physics from <strong>IIT Kanpur</strong>. He secured <strong>AIR 971</strong> in IIT-JEE. To learn more, visit <a href=\\"https://drmithileshkumar.com\\">drmithileshkumar.com</a>\\r\\n      </p>\\r\\n    </Content>\\r\\n  </Card>\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n  main {\\r\\n    display: flex;\\r\\n    gap: 0.5em;\\r\\n    flex-direction: column;\\r\\n  }\\r\\n  .centered {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    margin: auto;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n  }\\r\\n  .centered img {\\r\\n    border-radius: 50%;\\r\\n  }\\r\\n  /* .slide1 {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n  } */\\r\\n  .title {\\r\\n    font-size: 2em;\\r\\n    margin: 0.5em 0;\\r\\n    line-height: 1.4;\\r\\n  }\\r\\n  /* .subtitle {\\r\\n    font-size: 1.2em;\\r\\n    margin: 0.5em 0;\\r\\n  } */\\r\\n  .slide {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    width: 100%;\\r\\n    gap: 0.5em;\\r\\n    flex-wrap: wrap;\\r\\n  }\\r\\n  .rounded {\\r\\n    max-width: 40%;\\r\\n    border-radius: 50%;\\r\\n  }\\r\\n  .frame {\\r\\n    display:flex;\\r\\n    flex-direction: column;\\r\\n    align-items:center;\\r\\n    justify-content: center;\\r\\n  }\\r\\n  .video {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        /* border: 1px solid teal; */\\r\\n        border-radius: 12px;\\r\\n        background: #252228;\\r\\n        overflow: hidden;\\r\\n        box-shadow: 0 0 3px currentColor;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA2JE,gCAAK,CACH,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,KAAK,CACV,cAAc,CAAE,MAClB,CACA,qCAAU,CACR,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACnB,CACA,uBAAS,CAAC,iBAAI,CACZ,aAAa,CAAE,GACjB,CAMA,kCAAO,CACL,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,WAAW,CAAE,GACf,CAKA,kCAAO,CACL,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,IAAI,CACX,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,IACb,CACA,oCAAS,CACP,SAAS,CAAE,GAAG,CACd,aAAa,CAAE,GACjB,CACA,kCAAO,CACL,QAAQ,IAAI,CACZ,cAAc,CAAE,MAAM,CACtB,YAAY,MAAM,CAClB,eAAe,CAAE,MACnB,CACA,kCAAO,CACD,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CAEvB,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,OAAO,CACnB,QAAQ,CAAE,MAAM,CAChB,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,YACxB"}`
};
let title = "About Mathril | Online Math Practice Platform for All Ages";
let description = "Mathril is an online mathematics practice platform designed for learners of all ages following the Indian education system. Enhance your understanding, accuracy, and speed with our extensive collection of template-based math problems.";
let keywords = "Mathril, online math practice, Indian education system, mathematics, all ages, math problems, practice problems, understanding, accuracy, speed";
let canonical = "https://drmithileshkumar.com/mathril/about";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "About", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-18fsd6s_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><meta name="keywords"${add_attribute("content", keywords, 0)}><link rel="canonical"${add_attribute("href", canonical, 0)}><!-- HEAD_svelte-18fsd6s_END -->`, ""} <main class="mdc-typography--body1 svelte-jpl9bt"> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="slide svelte-jpl9bt" data-svelte-h="svelte-2lxhs7"><img class="rounded svelte-jpl9bt" src="/mathril/about/questionStudent.png" alt="Question"> <div class="frame svelte-jpl9bt"><div class="title svelte-jpl9bt">Why Do Students Struggle in Mathematics?</div> <p>In exams, students often either get the wrong answers or don&#39;t attempt many problems.</p></div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="slide svelte-jpl9bt" data-svelte-h="svelte-qvdrv1"><img class="rounded svelte-jpl9bt" src="/mathril/about/shakyFoundation.png" alt="Question"> <div class="frame svelte-jpl9bt"><div class="title svelte-jpl9bt">Unsolidified Basic Concepts</div> <p>Many students miss essential concepts in earlier classes, leading to a shaky foundation. Without solid basics, progressing in math becomes a challenge.</p></div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="slide svelte-jpl9bt" data-svelte-h="svelte-1x3fg00"><img class="rounded svelte-jpl9bt" src="/mathril/about/book.png" alt="book"> <div class="frame svelte-jpl9bt"><div class="title svelte-jpl9bt">Limitations Of Textbooks and Traditional Teaching</div> <p>Textbooks and traditional teaching methods have their limits - a finite set of problems doesn&#39;t always ensure comfort and clarity in every concept.</p></div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="slide svelte-jpl9bt" data-svelte-h="svelte-v0hts3"><img class="rounded svelte-jpl9bt" src="/mathril/about/idea.png" alt="Idea"> <div class="frame svelte-jpl9bt"><div class="title svelte-jpl9bt">How Can We Address This Issue?</div> <p>To overcome these challenges in learning mathematics, what could be a viable solution?</p></div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="slide svelte-jpl9bt" data-svelte-h="svelte-r4ziod"><img class="rounded svelte-jpl9bt" src="/mathril/about/fountain.png" alt="Question"> <div class="frame svelte-jpl9bt"><div class="title svelte-jpl9bt">Unlimited Practice for Mastery</div> <p>The key is an unlimited supply of problems at the same level of difficulty. Students should only move to the next topic after gaining complete comfort and understanding of a concept.</p></div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="slide svelte-jpl9bt" data-svelte-h="svelte-z7mf0g"><video class="video svelte-jpl9bt" width="100%" height="100%" autoplay preload loop muted playsinline><source src="/mathril/landing/practice.mov" type="video/mp4">
              Your browser does not support the video type.</video> <div class="frame svelte-jpl9bt"><div class="title svelte-jpl9bt">Problem Apps</div> <p>Each &#39;Problem App&#39; presents a question with 4 options, only one correct. After an attempt, a similar but new problem loads. For example, in addition problems, the numbers change each time. A timer tracks the time taken for each problem.</p></div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="mdc-typography--headline4" data-svelte-h="svelte-1qykd95">Welcome to Mathril</h1> <p data-svelte-h="svelte-1556kjq">The best way to solve most problems is to think mathematically. But
        thinking mathematically is exhausting. It&#39;s like lifting heavy weight.
        Mathril provides problem templates in mathematics. You practice on them
        daily. Slowly, the neurons in your brain become trained to think
        mathematically with ease. The problem templates are designed to be not
        too difficult. If you can solve easy problems fast enough, difficult
        problems can be taken care of with ease.</p> <p data-svelte-h="svelte-164golj">The website is organized into classes that mirrors what is taught in
        schools starting at age 5. So class 1 corresponds to students of age
        around 5. As class number increases, problems become a little harder and
        cover more topics. The best way to use the templates is to start at
        class you feel ease with, then practice daily even on problems you can
        solve easily. The goal is not to test whether you can solve a problem,
        but to solve them fast.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="mdc-typography--headline4" data-svelte-h="svelte-1fpppf4">About the founder</h1> <p data-svelte-h="svelte-zmbi5c">Dr Mithilesh Kumar is a researcher and educationist with many publications in reputed conferences and journels. He has done research in post-quantum cryptography and advanced algorithms. He has keen interest in education, in particular mathematics.</p> <div class="centered svelte-jpl9bt" data-svelte-h="svelte-666usf"><img width="200" height="200" src="mithileshkumar.png" alt="" class="svelte-jpl9bt"> <p style="font-weight: 600;"><a href="https://drmithileshkumar.com">Dr Mithilesh Kumar</a>, Founder</p></div> <p data-svelte-h="svelte-sy8qb1">He has done <strong>PhD</strong> in computer science from University of Bergen, Norway and has double masters in Computer Science [<strong>Gold Medalist</strong>] from CMI, Chennai and masters (integrated) in Physics from <strong>IIT Kanpur</strong>. He secured <strong>AIR 971</strong> in IIT-JEE. To learn more, visit <a href="https://drmithileshkumar.com">drmithileshkumar.com</a></p>`;
        }
      })}`;
    }
  })} </main>`;
});
export {
  Page as default
};
