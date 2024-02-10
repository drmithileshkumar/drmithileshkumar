import { c as create_ssr_component, s as subscribe, o as set_store_value, v as validate_component } from "../../../../../chunks/ssr.js";
import { g as githubDark, a as github, c as contents } from "../../../../../chunks/content2.js";
/* empty css                                                       */
import "../../../../../chunks/client.js";
import { d as darkMode, c as currentPath, n as navList, C as Card } from "../../../../../chunks/Card.js";
import { C as Content } from "../../../../../chunks/ActionIcons.js";
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from "../../../../../chunks/Cell.js";
import { N as NavList } from "../../../../../chunks/NavList.js";
const css = {
  code: "article.svelte-14g8dvr{display:flex;flex-direction:column;gap:0.5em}p.svelte-14g8dvr,li.svelte-14g8dvr{opacity:0.8}h6.svelte-14g8dvr,h5.svelte-14g8dvr{margin:0.5em 0}h5.svelte-14g8dvr{font-size:1.1em}h6.svelte-14g8dvr{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}strong.svelte-14g8dvr{color:goldenrod;opacity:1}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Internet Technologies", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-1qjfh84_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1qjfh84_END -->`, ""} <article class="svelte-14g8dvr"><h4 data-svelte-h="svelte-4oe8qn">Internet Technologies</h4>  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-14g8dvr" data-svelte-h="svelte-dl1tmw">Course Objectives (22CA2402)</h6> <p class="svelte-14g8dvr" data-svelte-h="svelte-1jubqrw">This course aims at providing knowledge of web development, both front-end and back-end.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-14g8dvr" data-svelte-h="svelte-fe1r8k">Course Outcomes</h6> <p class="svelte-14g8dvr" data-svelte-h="svelte-1yih345">At the end of the course student will be able to</p> <ol data-svelte-h="svelte-khlxvo"><li class="svelte-14g8dvr">Understand the foundations of web page design using HTML</li> <li class="svelte-14g8dvr">Use CSS in styling web pages</li> <li class="svelte-14g8dvr">Describe scripting language JavaScript</li> <li class="svelte-14g8dvr">Work with XML files</li> <li class="svelte-14g8dvr">Use node.js to serve requests from the client</li></ol>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-14g8dvr" data-svelte-h="svelte-cra9n3">A brief overview of the course</h6> <p class="svelte-14g8dvr" data-svelte-h="svelte-123wd21">This course aims to equip students with the skills and knowledge required to design, implement, and maintain web pages and web applications. It covers a range of technologies fundamental to the web, starting with the basics of HTML and XHTML for web page structure, CSS for styling, JavaScript for client-side interactivity, XML for data representation, and Node.js for server-side programming.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-14g8dvr" data-svelte-h="svelte-kgi1xz">Textbook and references</h6> <ol data-svelte-h="svelte-1gfjjuv"><li class="svelte-14g8dvr">Robert W. Sebesta: Programming the World Wide Web-8th edition, Pearson Education, 2015.</li> <li class="svelte-14g8dvr">Study material at https://drmithileshkumar.com/courses/internet</li> <li class="svelte-14g8dvr">Learn node.js at https://nodejs.org/en/learn</li></ol>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-14g8dvr" data-svelte-h="svelte-1l2n45b">Timetable</h6> <strong class="svelte-14g8dvr" data-svelte-h="svelte-laz63v">Room</strong>: 304
            <ol data-svelte-h="svelte-18r0cjv"><li class="svelte-14g8dvr"><strong class="svelte-14g8dvr">Monday</strong>: 12:00-01:00</li> <li class="svelte-14g8dvr"><strong class="svelte-14g8dvr">Thursday</strong>: 9:45-10:45</li> <li class="svelte-14g8dvr"><strong class="svelte-14g8dvr">Friday</strong>: 8:45-9:45</li></ol>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-14g8dvr" data-svelte-h="svelte-1dr23oh">Assessement</h6> ${validate_component(DataTable, "DataTable").$$render(
            $$result,
            {
              "table$aria-label": "Marks breakup",
              style: "max-width: 100%;"
            },
            {},
            {
              default: () => {
                return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Test`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Marks`;
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
                            return `Internal Assessment 1 - (40M)`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `20M`;
                          }
                        })}`;
                      }
                    })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Internal Assessment 2 - (40M)`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `20M`;
                          }
                        })}`;
                      }
                    })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Assignment`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `5M`;
                          }
                        })}`;
                      }
                    })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Seminar`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `5M`;
                          }
                        })}`;
                      }
                    })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Reflection notes`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `5M`;
                          }
                        })}`;
                      }
                    })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Attendence`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `5M`;
                          }
                        })}`;
                      }
                    })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Total CIA`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `60M`;
                          }
                        })}`;
                      }
                    })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `SEE - (100M)`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `40M`;
                          }
                        })}`;
                      }
                    })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Total - (100M)`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `CIA (60M) + SEE (40M)`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}`;
              }
            }
          )}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-14g8dvr" data-svelte-h="svelte-19xedrt">Attendence Requirements</h6> <p class="svelte-14g8dvr" data-svelte-h="svelte-16as233">A student should have 75% or above to appear for the SEE exam failing which the admit card for the SEE will not be generated.</p> <h6 class="svelte-14g8dvr" data-svelte-h="svelte-1lxutzu">Rubrics of attendance in CIA evaluation</h6> ${validate_component(DataTable, "DataTable").$$render(
            $$result,
            {
              "table$aria-label": "Attendence Marks",
              style: "max-width: 100%;"
            },
            {},
            {
              default: () => {
                return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Attendence (%)`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Marks`;
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
                            return `95 - 100`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `5`;
                          }
                        })}`;
                      }
                    })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `90 - 94`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `4`;
                          }
                        })}`;
                      }
                    })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `85 - 89`;
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
                            return `80 - 84`;
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
                            return `75 - 79`;
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
            }
          )} <p class="svelte-14g8dvr" data-svelte-h="svelte-1b8ttp6">Under extreme circumstances like medical emergencies etc. the student may apply permission with proper proofs attached and letter duly signed by the Chairperson of the department for obtaining 10% increment if he/she is having less than 75% attendance.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-14g8dvr" data-svelte-h="svelte-vrhswa">Contents</h5> ${validate_component(NavList, "NavList").$$render(
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
  })}</article>`;
});
export {
  Page as default
};
