import { s as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../../../chunks/ssr.js";
import { g as githubDark, a as github, c as contentNav, b as contents } from "../../../../../../../../chunks/content3.js";
/* empty css                                                                */
import { p as page } from "../../../../../../../../chunks/stores.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import "../../../../../../../../chunks/Subheader.js";
import "../../../../../../../../chunks/client.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../../chunks/stores2.js";
/* empty css                                                                   */
import { W as WebPractice } from "../../../../../../../../chunks/WebPractice.js";
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from "../../../../../../../../chunks/Cell.js";
import { P as Pathlist } from "../../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../../chunks/CourseNavigation.js";
const css = {
  code: "article.svelte-9tb2l5{display:flex;flex-direction:column;gap:0.5em}p.svelte-9tb2l5,li.svelte-9tb2l5{opacity:0.8}h4.svelte-9tb2l5{margin:0.5em 0}h6.svelte-9tb2l5{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}strong.svelte-9tb2l5{color:goldenrod;opacity:1}a.svelte-9tb2l5{cursor:pointer}.question.svelte-9tb2l5{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Text Markup", $currentPath);
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
        <!--Displayable content goes here-->
        <p>Internet Technologies course covers HTML, CSS,
            and 
            javascript.
        </p>
        <p>This paragraph contains an unnecessary <br/> break in the line.</p>
        <pre>
            There is 
                more 
                    control
                        in pre
                            tag.
        </pre>
        <h1>h1 heading</h1>
        <h2>h2 heading</h2>
        <h3>h3 heading</h3>
        <h4>h4 heading</h4>
        <h5>h5 heading</h5>
        <h6>h6 heading</h6>
        <p>A quote from Einstein</p>
        <blockquote>
          <p>"God does not play dice."</p>
        </blockquote>
        <p>Fonts styles <i>italics</i> <b>bold</b> <em>emphasis</em> <strong>strong</strong>
            <code>code</code>
        </p>
        <p>The most famous equation E = mc<sup>2</sup></p>
        <p>Horizontal line</p>
        <hr/>
    </body> 
</html>`;
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1yisn4r_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/text"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1yisn4r_END -->`, ""} <article class="svelte-9tb2l5">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-9tb2l5" data-svelte-h="svelte-ueupoj">Text Markup</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-iqx9o6"><li class="svelte-9tb2l5"><a href="#p1" class="svelte-9tb2l5">Paragraphs <code>p</code></a></li> <li class="svelte-9tb2l5"><a href="#p2" class="svelte-9tb2l5">Line Breaks <code>br</code></a></li> <li class="svelte-9tb2l5"><a href="#p3" class="svelte-9tb2l5">White Spaces <code>pre</code></a></li> <li class="svelte-9tb2l5"><a href="#p4" class="svelte-9tb2l5">Headings <code>h1 h2 h3 h4 h5 h6</code></a></li> <li class="svelte-9tb2l5"><a href="#p5" class="svelte-9tb2l5">Block Quotations <code>blockquote</code></a></li> <li class="svelte-9tb2l5"><a href="#p6" class="svelte-9tb2l5">Font Styles and Sizes <code>i b em strong code sub sup</code></a></li> <li class="svelte-9tb2l5"><a href="#p7" class="svelte-9tb2l5">Character Entities</a></li> <li class="svelte-9tb2l5"><a href="#p8" class="svelte-9tb2l5">Horizontal Rules <code>hr</code></a></li></ol>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-9tb2l5" data-svelte-h="svelte-1dmxl18">The fundamental syntactic units of HTML are called tags. In general, tags are used to specify categories of content. For each kind of tag, a browser has default presentation specifications for the specified content. The syntax of a tag is the tag\`s name surrounded by angle brackets (&lt; and &gt;). Tag names must be written in all lowercase letters. Most tags appear in pairs: an opening tag and a closing tag.</p>`;
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
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="p1" class="svelte-9tb2l5" data-svelte-h="svelte-prb5ij">Paragraphs <code>p</code></h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-1fvjkor">The <code>p</code> tag is used to create a paragraph. It is a <em>block</em>-level tag, i.e. it starts to display its content from a new line and the next content will start from a new line. The content in the <code>p</code> tag ignores any formatting applied by white spaces.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="p2" class="svelte-9tb2l5" data-svelte-h="svelte-ae4usl">Line Breaks <code>br</code></h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-1s9jm9w">To create a new line at any place in the document, <code>br</code> tag is used. It does not have a closing tag.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="p3" class="svelte-9tb2l5" data-svelte-h="svelte-rkrmlf">White Spaces <code>pre</code></h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-d28wnk">To display whitespace formatted text, <code>pre</code> tag is used.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="p4" class="svelte-9tb2l5" data-svelte-h="svelte-v692g3">Headings <code>h1 h2 h3 h4 h5 h6</code></h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-7uhabx">The headings in an article are marked with one of <code>h1 h2 h3 h4 h5 h6</code> tags where <code>h1</code> is the largest and <code>h6</code> is the smallest. These tags are <em>block</em>-level as well.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="p5" class="svelte-9tb2l5" data-svelte-h="svelte-1pucnsh">Block Quotations <code>blockquote</code></h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-2hfbmr">Any quotation is a block of text that is slightly differently formatted than the usual paragraphs. The quotation is placed unside <code>blockquote</code> tag. Inside the block, many paragraphs can be included.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="p6" class="svelte-9tb2l5" data-svelte-h="svelte-1jt74om">Font Styles and Sizes <code>i b em strong code sub sup</code></h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-sksweg">Fonts can be styled using <code>i</code> tag for <i>italics</i>, <code>b</code> tag for <b>bold</b>, <code>em</code> tag for emphasized content. <code>strong</code> tag is used to make a text <strong style="color:currentColor" class="svelte-9tb2l5">bold</strong> as well. <code>sub</code> tag is used to mark a text<sub>subscript</sub> to the preceeding text. <code>sup</code> tag is used to mark a text<sup>superscript</sup> to the preceeding text.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="p7" class="svelte-9tb2l5" data-svelte-h="svelte-1u7xlj9">Character Entities</h6> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width:100%;" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Character`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Entity`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Meaning`;
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
                          return `&amp;`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-dghgar">amp;</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Ampersand`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `&lt;`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code>${escape("&lt;")}</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Is less than`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `&gt;`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code>${escape("&gt;")}</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Is greater than`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `₹`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code>${escape("&#8377;")}</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Indian Rupee`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `©`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code>${escape("&copy;")}</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Copyright`;
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
          return `<h6 id="p8" class="svelte-9tb2l5" data-svelte-h="svelte-17bejna">Horizontal Rules <code>hr</code></h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-ja6u5u"><code>hr</code> draws a line in a new line. Just like <code>br</code> tag, it does not have a closing tag.</p>`;
        }
      })}`;
    }
  })} <h4 class="svelte-9tb2l5" data-svelte-h="svelte-cy8vvz">Exercises</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-9tb2l5" data-svelte-h="svelte-14t2rl8"><p class="svelte-9tb2l5">Write HTML code that shows the following text:</p> <p class="svelte-9tb2l5"><strong style="color:currentColor" class="svelte-9tb2l5">Theorem</strong>: Every prime number (greater than 2) <em>modulo</em> 4 can be written in the form <em>4n + 1</em> or <em>4n + 3</em>.</p> <p class="svelte-9tb2l5"><strong style="color:currentColor" class="svelte-9tb2l5">Proof</strong>: Any number p when divided by 4 leaves remainder 0, 1, 2 or 3. Therefore, the number has the form <em>4n</em>, <em>4n + 1</em>, <em>4n + 2</em> or <em>4n + 3</em>. Since <em>4n</em> and <em>4n + 2</em> are <strong style="color: currentColor;" class="svelte-9tb2l5">even</strong>, so these can not be a form of a prime number which is an <strong style="color: currentColor;" class="svelte-9tb2l5">odd</strong> number (except 2). This <em>proves</em> the theorem. ◻</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-9tb2l5" data-svelte-h="svelte-4swzn"><p class="svelte-9tb2l5">Write HTML code that shows the following text:</p> <p class="svelte-9tb2l5">e<sup>ιθ</sup> = cosθ + ιsinθ</p> <p class="svelte-9tb2l5"><sup>n</sup>C<sub>r</sub> = <sup>n!</sup>⁄<sub>(n-r)!r!</sub> is equal to the number of ways of selecting r items from n <em>distinct</em> items.</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-9tb2l5" data-svelte-h="svelte-qtneh7"><p class="svelte-9tb2l5">Write HTML code that shows the following pattern:</p> <pre>                      *
                     ***
                    *****</pre> <hr> <pre>                    *****
                     ***
                      *</pre></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-9tb2l5"><p class="svelte-9tb2l5" data-svelte-h="svelte-1j3kllr">Write HTML code that shows the following code:</p> <code><pre>let sum = (a, b) =&gt; ${escape("{")}
    return a + b;
}
console.log(sum(3 + 4));//prints 7</pre></code></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-9tb2l5" data-svelte-h="svelte-mchjcq">Using above text-related html tags, write an article in HTML that teaches a student how to solve equations in 2 variables. Show a program in your programming language that solves the problem.</div>`;
        }
      })}`;
    }
  })} <h4 class="svelte-9tb2l5" data-svelte-h="svelte-hc8mgz">Assignment</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-9tb2l5" data-svelte-h="svelte-1mqcxb7">Create a repository on Github called resume. Clone it to your laptop. Create an HTML page called <code>resume.html</code> for your resume using only tags used in this page. (No CSS yet.)</div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
