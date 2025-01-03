import { a as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../../../../../../chunks/ssr2.js";
import { g as githubDark, a as github } from "../../../../../../../../chunks/github-dark.js";
/* empty css                                                                */
import { p as page } from "../../../../../../../../chunks/stores3.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import "../../../../../../../../chunks/Subheader.js";
import "../../../../../../../../chunks/client.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../../chunks/stores.js";
/* empty css                                                                   */
import { c as contentNav, a as contents } from "../../../../../../../../chunks/content.js";
import { W as WebPractice } from "../../../../../../../../chunks/WebPractice.js";
import { D as DataTable, R as Row, C as Cell, B as Body } from "../../../../../../../../chunks/Cell.js";
import { H as Head } from "../../../../../../../../chunks/Head.js";
import { P as Pathlist } from "../../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../../chunks/CourseNavigation.js";
const css = {
  code: "article.svelte-beztui{display:flex;flex-direction:column;gap:0.5em}p.svelte-beztui,li.svelte-beztui{opacity:0.8}h4.svelte-beztui{margin:0.5em 0}h6.svelte-beztui{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}a.svelte-beztui{cursor:pointer;text-decoration:none}.question.svelte-beztui{cursor:pointer;padding:0.3em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n\\timport WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n\\timport DataTable, {Head, Body, Row, Cell} from \\"@smui/data-table\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Images\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    let htmlContent = \`<!DOCTYPE html> \\r\\n<!-- File name and document purpose --> \\r\\n<html lang = \\"en\\">   \\r\\n    <head>     \\r\\n        <title> A title for the document </title>\\r\\n        <meta charset = \\"utf-8\\" />     \\r\\n        <!--include external resources here like adsense, javascript, styles-->\\r\\n    </head>   \\r\\n    <body>   \\r\\n        <figure>\\r\\n            <img \\r\\n                src=\\"/courses/internet/wwwhtml/fundamentals/intro/dns.png\\" \\r\\n                alt=\\"DNS lookup\\" \\r\\n                width=\\"300px\\" \\r\\n                height=\\"auto\\" \\r\\n            />\\r\\n            <figcaption>DNS Lookup</figcaption>\\r\\n        </figure>\\r\\n        <figure>\\r\\n            <img \\r\\n                src=\\"/courses/internet/wwwhtml/fundamentals/intro/dns.webp\\" \\r\\n                alt=\\"DNS lookup\\" \\r\\n                width=\\"300px\\" \\r\\n                height=\\"auto\\" \\r\\n            />\\r\\n            <figcaption>The <code>.webp</code> version of the above <code>.png</code> file.</figcaption>\\r\\n        </figure>\\r\\n        <p></p>\\r\\n    </body> \\r\\n</html>\`\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(240, 85, 0);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/wwwhtml/html/images\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Images\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#formats\\">Image Formats</a></li>\\r\\n                <li><a href=\\"#element\\">The Image Element</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <p>\\r\\n                Apart from displaying text, browser can display image files of various types.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"formats\\">Image Formats</h6>\\r\\n            <p>\\r\\n                The various image formats are \\r\\n            </p>\\r\\n            <DataTable style=\\"width:100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Extension</Cell>\\r\\n                        <Cell>Name</Cell>\\r\\n                        <Cell>Remarks</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell><code>.gif</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">Graphic Interchange Format</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">Uses 8-bit color representations fo pixels, supports transparency</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>.jpg</code>, <code>.jpeg</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">Joint Photographic Experts Group</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">Uses 24-bit color representations fo pixels, does not support transparent</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>.png</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">Portable Network Graphics</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">Uses 24-bit color representations fo pixels, supports transparent, larger in size</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>.webp</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">WebP</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">Uses 24-bit color representations fo pixels, supports lossy and lossless compression, transparency, animation, small in size</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>.svg</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">Scalable Vector Graphics</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">Uses code (XML syntax), high quality, supports transparency, animation, small in size</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"element\\">The Image Element</h6>\\r\\n            <p>\\r\\n                The <code>img</code> element is an inline element that specifies an image that is to appear in a document. This element has no closing tag.\\r\\n            </p>\\r\\n            <p>\\r\\n                The image element includes following essential attributes: \\r\\n            </p>\\r\\n            <ol>\\r\\n                <li><code>src</code>: specifies the file containing the image</li>\\r\\n                <li><code>alt</code>: specifies text to be displayed when it is not possible to display the image</li>\\r\\n                <li><code>width</code>: width of the image</li>\\r\\n                <li><code>height</code>: height of the image</li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Length units</h6>\\r\\n            <DataTable style=\\"width:100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Unit</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell><code>px</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">One pixel. <code>1px = 1 inch / 96</code></Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>cm</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">One centimeter. <code>1cm = 96px / 2.54</code></Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>in</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">One inch. <code>1in = 96px = 2.54cm</code></Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>%</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">One percent. <code>1%</code> is calculated relative to the parent container.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>vh</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">One percent of the height of viewport. <code>1%</code> is calculated relative to the parent container.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>vw</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">One percent of the width of viewport. <code>1%</code> is calculated relative to the parent container.</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContent} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n    <h4>Exercise</h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Experiment with various types of length units to resize an image.\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h4>Assignment</h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Update your resume by including your photo.\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AA+DI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CACzB,CAKA,eAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,uBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}`
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
  set_store_value(currentPath, $currentPath = "Images", $currentPath);
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
        <figure>
            <img 
                src="/courses/internet/wwwhtml/fundamentals/intro/dns.png" 
                alt="DNS lookup" 
                width="300px" 
                height="auto" 
            />
            <figcaption>DNS Lookup</figcaption>
        </figure>
        <figure>
            <img 
                src="/courses/internet/wwwhtml/fundamentals/intro/dns.webp" 
                alt="DNS lookup" 
                width="300px" 
                height="auto" 
            />
            <figcaption>The <code>.webp</code> version of the above <code>.png</code> file.</figcaption>
        </figure>
        <p></p>
    </body> 
</html>`;
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1yjaqxq_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/images"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1yjaqxq_END -->`, ""} <article class="svelte-beztui">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-beztui" data-svelte-h="svelte-cg9auw">Images</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-beztui" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1fxbspd"><li class="svelte-beztui"><a href="#formats" class="svelte-beztui">Image Formats</a></li> <li class="svelte-beztui"><a href="#element" class="svelte-beztui">The Image Element</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-beztui" data-svelte-h="svelte-yw75ui">Apart from displaying text, browser can display image files of various types.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="formats" class="svelte-beztui" data-svelte-h="svelte-19wpuo3">Image Formats</h6> <p class="svelte-beztui" data-svelte-h="svelte-5toffn">The various image formats are</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width:100%" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Extension`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Name`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Remarks`;
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
                          return `<code data-svelte-h="svelte-869ryw">.gif</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `Graphic Interchange Format`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `Uses 8-bit color representations fo pixels, supports transparency`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-ngw0cx">.jpg</code>, <code data-svelte-h="svelte-1uppt1q">.jpeg</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `Joint Photographic Experts Group`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `Uses 24-bit color representations fo pixels, does not support transparent`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-2bxhn5">.png</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `Portable Network Graphics`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `Uses 24-bit color representations fo pixels, supports transparent, larger in size`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-45gdye">.webp</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `WebP`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `Uses 24-bit color representations fo pixels, supports lossy and lossless compression, transparency, animation, small in size`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-d36mss">.svg</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `Scalable Vector Graphics`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `Uses code (XML syntax), high quality, supports transparency, animation, small in size`;
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
          return `<h6 id="element" class="svelte-beztui" data-svelte-h="svelte-1mjvv9g">The Image Element</h6> <p class="svelte-beztui" data-svelte-h="svelte-1qhgslr">The <code>img</code> element is an inline element that specifies an image that is to appear in a document. This element has no closing tag.</p> <p class="svelte-beztui" data-svelte-h="svelte-dvw7m1">The image element includes following essential attributes:</p> <ol data-svelte-h="svelte-6ja778"><li class="svelte-beztui"><code>src</code>: specifies the file containing the image</li> <li class="svelte-beztui"><code>alt</code>: specifies text to be displayed when it is not possible to display the image</li> <li class="svelte-beztui"><code>width</code>: width of the image</li> <li class="svelte-beztui"><code>height</code>: height of the image</li></ol>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-beztui" data-svelte-h="svelte-1uggemt">Length units</h6> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width:100%" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Unit`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Description`;
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
                          return `<code data-svelte-h="svelte-wl9nl8">px</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `One pixel. <code data-svelte-h="svelte-1xd212f">1px = 1 inch / 96</code>`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-uex3dc">cm</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `One centimeter. <code data-svelte-h="svelte-126y64b">1cm = 96px / 2.54</code>`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-zp5n6r">in</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `One inch. <code data-svelte-h="svelte-193xpc0">1in = 96px = 2.54cm</code>`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-hqlssn">%</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `One percent. <code data-svelte-h="svelte-1gq5n46">1%</code> is calculated relative to the parent container.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1dl27ni">vh</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `One percent of the height of viewport. <code data-svelte-h="svelte-1gq5n46">1%</code> is calculated relative to the parent container.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-i14kzn">vw</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `One percent of the width of viewport. <code data-svelte-h="svelte-1gq5n46">1%</code> is calculated relative to the parent container.`;
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
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} <h4 class="svelte-beztui" data-svelte-h="svelte-1yto96c">Exercise</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-beztui" data-svelte-h="svelte-1e1jhq7">Experiment with various types of length units to resize an image.</div>`;
        }
      })}`;
    }
  })} <h4 class="svelte-beztui" data-svelte-h="svelte-hc8mgz">Assignment</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-beztui" data-svelte-h="svelte-o8fyed">Update your resume by including your photo.</div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
