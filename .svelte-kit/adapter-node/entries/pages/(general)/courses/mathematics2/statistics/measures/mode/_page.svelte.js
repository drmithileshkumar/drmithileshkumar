import { a as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../../../chunks/ssr2.js";
import { p as page } from "../../../../../../../../chunks/stores3.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../../chunks/stores.js";
import { c as contentNav, a as contents } from "../../../../../../../../chunks/content5.js";
import { P as Pathlist } from "../../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../../chunks/CourseNavigation.js";
import { D as DataTable, R as Row, C as Cell, B as Body } from "../../../../../../../../chunks/Cell.js";
import { H as Head } from "../../../../../../../../chunks/Head.js";
const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}.question.svelte-98uzi2{cursor:pointer;padding:0.3em}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\'ts\'>\\r\\n    //@ts-nocheck\\r\\n    import {page} from \'$app/stores\';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\timport DataTable, {Head, Body, Row, Cell} from \'@smui/data-table\';\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Mode\\";\\r\\n    $darkMode = false;\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.7em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/mode\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Measures of Central Tendency \\r\\n    </h4>\\r\\n    <h5>Mode</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            \\r\\n            <p>The mode of a data set is the value(s) that occur most frequently. The mode is defined mathematically as the value {`\\\\\\\\( x_{i} \\\\\\\\)`} for which the frequency {`\\\\\\\\( f_{i} \\\\\\\\)`} is maximum. In other words, if a data set consists of values {`\\\\\\\\( x_{1}, x_{2}, ..., x_{n} \\\\\\\\)`} with corresponding frequencies {`\\\\\\\\( f_{1}, f_{2}, ..., f_{n} \\\\\\\\)`}, then the mode {`\\\\\\\\( M \\\\\\\\)`} is given by:</p>\\r\\n            <p>{`\\\\\\\\[ M = x_{i} \\\\\\\\quad \\\\\\\\text{where} \\\\\\\\quad f_{i} = \\\\\\\\max(f_{1}, f_{2}, ..., f_{n}) \\\\\\\\]`}</p>\\r\\n            <p>If two or more values tie for the highest frequency, the data set is multimodal, and each of these values is a mode. If no value repeats, the data set is said to have no mode.</p>\\r\\n            <div class=\\"examples\\">\\r\\n                The mode of 1, 2, 2, 5, 5, 5, 4, 4 is 5.\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h5>Questions</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                What is mode of letters in STATISTICS?\\r\\n            </div>\\r\\n            <div class=\\"solution\\">\\r\\n                <p>\\r\\n                    The table of frequencies is \\r\\n                </p>\\r\\n                <DataTable>\\r\\n                    <Head>\\r\\n                        <Row>\\r\\n                            <Cell>Letter</Cell>\\r\\n                            <Cell>Frequency</Cell>\\r\\n                        </Row>\\r\\n                    </Head>\\r\\n                    <Body>\\r\\n                        <Row>\\r\\n                            <Cell>S</Cell>\\r\\n                            <Cell>3</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>T</Cell>\\r\\n                            <Cell>3</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>A</Cell>\\r\\n                            <Cell>1</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>I</Cell>\\r\\n                            <Cell>2</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>C</Cell>\\r\\n                            <Cell>1</Cell>\\r\\n                        </Row>\\r\\n                    </Body>\\r\\n                </DataTable>\\r\\n                <p>There are two letters with highest frequency S and T. Hence, the dataset (set of letters) is multimodal.</p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                If every data point is multiplied by a number \\\\(k\\\\), then what is the mode of the new data (assuming \\\\(m\\\\) to be mode of the origin data)?\\r\\n            </div>\\r\\n            <div class=\\"solution\\">\\r\\n                <p>\\r\\n                    The multiplication does not change the frequencies. If \\\\(m\\\\) is the mode, then the new mode will be \\\\(km\\\\).\\r\\n                </p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                The largest data point in the given data is doubled. How can this effect the mode?\\r\\n            </div>\\r\\n            <div class=\\"solution\\">\\r\\n                <p>\\r\\n                    Mode does not depend on the quantitative value of data points, it only depends on their frequencies. The mode will not be affected as the new number will be larger than any other number in the data set, i.e. it will not change the frequency table. So mode remains unchanged if the largest data point is not the most frequent one.\\r\\n                </p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Can you compare mean and mode of any given data, i.e. conclude whether \\\\(mean \\\\leq mode\\\\)?\\r\\n            </div>\\r\\n            <div class=\\"solution\\">\\r\\n                <p>\\r\\n                    Mean depends on the value and mode depends on the frequency. Consider the following data 2, 2, 2, 2, 100, 100, 100. Here the mean is {`\\\\\\\\(\\\\\\\\frac{308}{7} = 44\\\\\\\\)`} but mode is 2 as it is the most frequent data point. In this case, \\\\(mean\\\\gt mode\\\\)\\r\\n                </p>\\r\\n                <p>\\r\\n                    In another example, consider data 100, 100, 100, 100. In this case, mean and mode are equal, i.e. \\\\(mean = mode\\\\)\\r\\n                </p>\\r\\n                <p>\\r\\n                    Consider 104, 104, 104, 100. Here, the mean is {`\\\\\\\\(\\\\\\\\frac{412}{4} = 103\\\\\\\\)`} but the mode is 104. In this case, \\\\(mean \\\\lt mode\\\\)\\r\\n                </p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>"],"names":[],"mappings":"AAgBI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAM,CACF,OAAO,CAAE,GACb,CACQ,gBAAE,CAAE,gBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gBAAG,CACC,SAAS,CAAE,KACf,CAaA,uBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}'
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
  set_store_value(currentPath, $currentPath = "Mode", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-2bqjw8_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/mode"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-2bqjw8_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-dwe40b">Measures of Central Tendency</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-1oufz9v">Mode</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-98uzi2">The mode of a data set is the value(s) that occur most frequently. The mode is defined mathematically as the value ${escape(`\\( x_{i} \\)`)} for which the frequency ${escape(`\\( f_{i} \\)`)} is maximum. In other words, if a data set consists of values ${escape(`\\( x_{1}, x_{2}, ..., x_{n} \\)`)} with corresponding frequencies ${escape(`\\( f_{1}, f_{2}, ..., f_{n} \\)`)}, then the mode ${escape(`\\( M \\)`)} is given by:</p> <p class="svelte-98uzi2">${escape(`\\[ M = x_{i} \\quad \\text{where} \\quad f_{i} = \\max(f_{1}, f_{2}, ..., f_{n}) \\]`)}</p> <p class="svelte-98uzi2" data-svelte-h="svelte-17v03og">If two or more values tie for the highest frequency, the data set is multimodal, and each of these values is a mode. If no value repeats, the data set is said to have no mode.</p> <div class="examples" data-svelte-h="svelte-b8myau">The mode of 1, 2, 2, 5, 5, 5, 4, 4 is 5.</div>`;
        }
      })}`;
    }
  })} <h5 class="svelte-98uzi2" data-svelte-h="svelte-1984kyx">Questions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-10jm1t">What is mode of letters in STATISTICS?</div> <div class="solution"><p class="svelte-98uzi2" data-svelte-h="svelte-ndboji">The table of frequencies is</p> ${validate_component(DataTable, "DataTable").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Letter`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Frequency`;
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
                          return `S`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `3`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `T`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `3`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `A`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `1`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `I`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `2`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `C`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `1`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })} <p class="svelte-98uzi2" data-svelte-h="svelte-1rrbr9y">There are two letters with highest frequency S and T. Hence, the dataset (set of letters) is multimodal.</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-i13j70">If every data point is multiplied by a number \\(k\\), then what is the mode of the new data (assuming \\(m\\) to be mode of the origin data)?</div> <div class="solution" data-svelte-h="svelte-1xcjdrz"><p class="svelte-98uzi2">The multiplication does not change the frequencies. If \\(m\\) is the mode, then the new mode will be \\(km\\).</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-1rjpfxs">The largest data point in the given data is doubled. How can this effect the mode?</div> <div class="solution" data-svelte-h="svelte-o64vja"><p class="svelte-98uzi2">Mode does not depend on the quantitative value of data points, it only depends on their frequencies. The mode will not be affected as the new number will be larger than any other number in the data set, i.e. it will not change the frequency table. So mode remains unchanged if the largest data point is not the most frequent one.</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-zzk0f4">Can you compare mean and mode of any given data, i.e. conclude whether \\(mean \\leq mode\\)?</div> <div class="solution"><p class="svelte-98uzi2">Mean depends on the value and mode depends on the frequency. Consider the following data 2, 2, 2, 2, 100, 100, 100. Here the mean is ${escape(`\\(\\frac{308}{7} = 44\\)`)} but mode is 2 as it is the most frequent data point. In this case, \\(mean\\gt mode\\)</p> <p class="svelte-98uzi2" data-svelte-h="svelte-1qno4z1">In another example, consider data 100, 100, 100, 100. In this case, mean and mode are equal, i.e. \\(mean = mode\\)</p> <p class="svelte-98uzi2">Consider 104, 104, 104, 100. Here, the mean is ${escape(`\\(\\frac{412}{4} = 103\\)`)} but the mode is 104. In this case, \\(mean \\lt mode\\)</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
