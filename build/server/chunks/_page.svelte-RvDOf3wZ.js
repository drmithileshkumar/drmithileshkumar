import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { g as githubDark$1, a as github$1, c as contentNav, b as contents } from './content4-FCI3McWx.js';
import { W as WebPractice } from './WebPractice-ATPi3Fcc.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from './Cell-fuCiKeC1.js';
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
import './prefixFilter-IAYI75FL.js';
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
  set_store_value(currentPath, $currentPath = "Typography", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let htmlContentFont = `<section class="container">
    <div class="cell family centerFlex">Font-family</div>
    <div class="cell size centerFlex">Font-size</div>
    <div class="cell variant centerFlex">Font-variant</div>
    <div class="cell style centerFlex">Font-style</div>
    <div class="cell weight centerFlex">Font-weight</div>
</section>`;
  let cssContentFont = `.container {
    height: 200px;
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
    border: 1px solid teal;
    padding: 0.5em;
}
.family {
    font-family: Arial Helvetica Georgia sans-serif;
}
.size {
    font-size: 2em;
}
.variant {
    font-variant: small-caps;
}
.style {
    font-style: italic;
}
.weight {
    font-weight: 600;
}`;
  let htmlContentDecoration = `<section class="containerG">
    <div class="cell lineThrough centerFlex">line-through</div>
    <div class="cell overline centerFlex">overline</div>
    <div class="cell underline centerFlex">underline</div>
    <div class="cell none centerFlex">none</div>
</section>`;
  let cssContentDecoration = `.containerG {
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
}
.lineThrough {
    text-decoration: line-through;
}
.overline {
    text-decoration: overline;
}
.underline {
    text-decoration: underline;
}
.none {
    text-decoration: none;
}`;
  let htmlContentSpacing = `<section class="containerG">
    <div class="cell letter centerFlex">letter-spacing</div>
    <div class="cell word centerFlex">word-spacing</div>
    <div class="cell line centerFlex">line-height</div>
    <div class="cell white centerFlex">white-space</div>
</section>`;
  let cssContentSpacing = `.containerG {
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
}
.letter {
    letter-spacing: 0.5em;
}
.word {
    word-spacing: 1em;
}
.line {
    line-height: 1em;
}
.white {
    white-space: nowrap;
}`;
  let htmlContentAlign = `<section class="containerG">
    <div class="cell indent"><p>This is the begining of the paragraph. Other statement is appearing as it is.</p></div>
    <div class="cell align">Text align</div>
    <div class="cell">
        <img class="float" src="/favicon.png" width="50px">
        <p>Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right.</p>
    </div>
</section>`;
  let cssContentAlign = `.containerG {
    box-sizing: border-box;
    height: auto;
    width: 100%;
    border: 1px solid gray;
    padding: 1em;
    display: flex;
    flex-direction: column;
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
}
.indent {
    text-indent: 5em;
}
.align {
    text-align: right;
}
.float {
    float: right;
}`;
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1wam636_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/typography"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1wam636_END -->`, ""} <article class="svelte-1ptklpl">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1ptklpl" data-svelte-h="svelte-1jugjh">Typography</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1ptklpl" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1yuh16o"><li class="svelte-1ptklpl"><a href="#font" class="svelte-1ptklpl">Font Properties</a></li> <li class="svelte-1ptklpl"><a href="#decoration" class="svelte-1ptklpl">Text Decoration</a></li> <li class="svelte-1ptklpl"><a href="#spacing" class="svelte-1ptklpl">Text Spacing</a></li> <li class="svelte-1ptklpl"><a href="#alignment" class="svelte-1ptklpl">Text Alignment</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="font" class="svelte-1ptklpl" data-svelte-h="svelte-1mpexb9">Font Properties</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-1tkhvbk">Font style in page can be changed using following CSS properties.</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width:100%" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Property`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Value`;
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
                          return `<code data-svelte-h="svelte-5vj03q">font-family</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `a list of names`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `browser uses the first font in the list it can. There are generic types like <code data-svelte-h="svelte-feu0ag">Serif, Sans-serif, cursive, fantasy, monospace</code>`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-so05nh">font-size</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `number`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `usual units are <code data-svelte-h="svelte-1h6uu3e">em</code> or <code data-svelte-h="svelte-wl9nl8">px</code>`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-hjso7t">font-variant</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1hs3ob7">normal, small-caps, petite-caps</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `sets the font-variant to use`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-xdpfct">font-style</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-16f7yao">normal, italic, oblique</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `changes font-style`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-ye7r6">font-weight</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-10jgiuz">normal, light, lighter, bold, bolder, 100, 200, 300, 400, 500, 600, 700, 800</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `Changes the thickness of the stroke used to draw the font`;
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
      htmlContent: htmlContentFont,
      cssContent: cssContentFont,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="decoration" class="svelte-1ptklpl" data-svelte-h="svelte-1nwybh1">Text Decoration</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-fvj8xi"><code>text-decoration</code> can place decorations like underline, line-through etc.</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width: 100%" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Values`;
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
                          return `<code data-svelte-h="svelte-1kl49aa">line-through</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `draws line through the text`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-fm1f70">overline</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `draws line over the text`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1es0mqu">underline</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `draws line under the text`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-k8g4pa">none</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `removes any decoration applied to the text`;
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
      htmlContent: htmlContentDecoration,
      cssContent: cssContentDecoration,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="spacing" class="svelte-1ptklpl" data-svelte-h="svelte-1gi4ex3">Text Spacing</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-1r9jsxz">It is possible to control space between letters, words and lines using CSS.</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width: 100%" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Property`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Values`;
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
                          return `<code data-svelte-h="svelte-1e2jguc">letter-spacing</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-tzsywf">normal</code> or length`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `controls the amount of space between the letters in words`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-72pnf8">word-spacing</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-tzsywf">normal</code> or length`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `controls the amount of space between words`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-m839ng">line-height</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-tzsywf">normal</code> or length`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `controls the amount of space between the lines`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1ctrzb8">white-space</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1fkzgft">normal, nowrap, break-spaces</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `decides whether line-break is there in the text.`;
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
      htmlContent: htmlContentSpacing,
      cssContent: cssContentSpacing,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="alignment" class="svelte-1ptklpl" data-svelte-h="svelte-14mas6j">Text Alignment</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-17bkbq5">Many alignment properties like indentation and placement of text can be controlled using CSS.</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width: 100%" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Property`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Values`;
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
                          return `<code data-svelte-h="svelte-ujof6e">text-indent</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-q8cfei">initial</code> or length`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `indent the first line of a paragraph`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-qkpqsj">text-align</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-y06syi">left, center, right, justify</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `arrange text horizontally depending on the value`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1yfd1c4">float</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1gs8gd3">left, right, none</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `used to specify that text should flow around some 
                            element, often an image or a table.`;
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
      htmlContent: htmlContentAlign,
      cssContent: cssContentAlign,
      jsContent: ""
    },
    {},
    {}
  )}  <h5 class="svelte-1ptklpl" data-svelte-h="svelte-1984kyx">Questions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1ptklpl" data-svelte-h="svelte-k61vgi">Apply these font properties to resume.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-RvDOf3wZ.js.map
