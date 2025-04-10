import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-CDgUAJs6.js';
import { p as page } from './stores3-kDd52ji6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { N as NavList } from './NavList-Qhuqe1ji.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Cecnyqn_.js';
import { c as contentNav, a as contents } from './content3-DsBWFJ21.js';
import { P as Pathlist } from './Pathlist-B9wgcfC1.js';
import { C as CourseNavigation } from './CourseNavigation-DznSxbmO.js';
import { D as DataTable, R as Row, C as Cell, B as Body } from './Cell-Y_QU_UIA.js';
import { H as Head } from './Head-B4BwnM3n.js';
import './client-CAo-6NMJ.js';
import './exports-DKuYoYKl.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './Item-T2YrjSpA.js';
import './dispatch-BOSWPsEc.js';
import './Ripple-N--aPaMn.js';
import './Subheader-DEm_inUP.js';
import './Graphic-CnHJKmsY.js';
import './Svg-Dkxrus40.js';
import './IconButton-Bt4YIh4x.js';
import './index2-D2s-XE5r.js';
import './prefixFilter-B6cFZsw3.js';

const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}h4.svelte-n59hwk,h5.svelte-n59hwk{margin:0.5em 0}h5.svelte-n59hwk{font-size:1.1em}h6.svelte-n59hwk{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internetlab/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';\\r\\n    // console.log($page.url)\\r\\n    let pathComponents = $page.url.pathname.split('/');\\r\\n    let pathUrls = pathComponents.map((u, index) => {\\r\\n        let path = $page.url.origin;\\r\\n        for(let i = 0; i <= index; i++) {\\r\\n            path += pathComponents[i] + '/';\\r\\n        }\\r\\n        return path;\\r\\n    })\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Internet Technologies Lab\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies Lab</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internetlab\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Internet Technologies Lab\\r\\n    </h4>\\r\\n    <h5>Contents</h5>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <NavList name=\\"{$navList[0].name}\\" url=\\"{$navList[0].url}\\" topics={$navList[0].topics} expanded />\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Tasks</h6>\\r\\n            <DataTable style=\\"width:100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Week</Cell>\\r\\n                        <Cell>Task</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell>1</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">\\r\\n                            Experiment with basic HTML tags\\r\\n                        </Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>2</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">\\r\\n                            Create HTML page for resume\\r\\n                        </Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>3</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">\\r\\n                            Create HTML page of College website\\r\\n                        </Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>4</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">\\r\\n                            Link CSS to HTML, Use Grid Layout for resume and college page\\r\\n                        </Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>5</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">\\r\\n                            Use Grid Layout, Background Color, Border, Center elements using flex, use advanced CSS selectors, Home town page\\r\\n                        </Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>6</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">\\r\\n                            Use CSS to create custom components, experiment with transforms and transitions\\r\\n                        </Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>7</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">\\r\\n                            Basic javascript code, event handlers\\r\\n                        </Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>8</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">\\r\\n                            Javascript calculator\\r\\n                        </Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgCI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CAIQ,gBAAE,CAAE,gBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gBAAG,CACC,SAAS,CAAE,KACf,CACA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAC9B"}`
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
  set_store_value(currentPath, $currentPath = "Internet Technologies Lab", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-6f17b2_START -->${$$result.title = `<title>Internet Technologies Lab</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internetlab"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-6f17b2_END -->`, ""} <article class="svelte-n59hwk">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-n59hwk" data-svelte-h="svelte-maqkf4">Internet Technologies Lab</h4> <h5 class="svelte-n59hwk" data-svelte-h="svelte-vrhswa">Contents</h5> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
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
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-n59hwk" data-svelte-h="svelte-xgf3w0">Tasks</h6> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width:100%" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Week`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Task`;
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
                          return `1`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `Experiment with basic HTML tags`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `2`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `Create HTML page for resume`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `3`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `Create HTML page of College website`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `4`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `Link CSS to HTML, Use Grid Layout for resume and college page`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `5`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `Use Grid Layout, Background Color, Border, Center elements using flex, use advanced CSS selectors, Home town page`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `6`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `Use CSS to create custom components, experiment with transforms and transitions`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `7`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `Basic javascript code, event handlers`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `8`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `Javascript calculator`;
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
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-TKWgf5Jo.js.map
