import { s as subscribe, b as set_store_value } from "../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape, j as each } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/client.js";
/* empty css                                                       */
import { p as page } from "../../../../../chunks/stores.js";
import { T as Textfield } from "../../../../../chunks/Textfield.js";
import "../../../../../chunks/Suffix.js";
import { C as Card } from "../../../../../chunks/Card.js";
import { C as Content } from "../../../../../chunks/ActionIcons.js";
import { A as Actions } from "../../../../../chunks/Actions.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { C as CommonLabel } from "../../../../../chunks/CommonLabel.js";
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from "../../../../../chunks/Cell.js";
import { N as NavList } from "../../../../../chunks/NavList.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../chunks/stores2.js";
import { c as contentNav, a as contents } from "../../../../../chunks/content3.js";
import { P as Pathlist } from "../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../chunks/CourseNavigation.js";
import { T as TabBar, a as Tab } from "../../../../../chunks/TabBar.js";
import "../../../../../chunks/Subheader.js";
const css = {
  code: "article.svelte-1a5or8o{display:flex;flex-direction:column;gap:0.5em}p.svelte-1a5or8o,li.svelte-1a5or8o{opacity:0.8}h4.svelte-1a5or8o,h5.svelte-1a5or8o{margin:0.5em 0}h6.svelte-1a5or8o{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}strong.svelte-1a5or8o{color:goldenrod;opacity:1}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  let studentID;
  let tabs = ["Contents", "Assignments", "Details"];
  let active = "Contents";
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Mathematics II", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let { data } = $$props;
  let assignments = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1am32do_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1am32do_END -->`, ""} <article class="svelte-1a5or8o">${validate_component(Pathlist, "Pathlist").$$render(
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
    )} <h4 class="svelte-1a5or8o" data-svelte-h="svelte-17c5kzm">Mathematics II</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(TabBar, "TabBar").$$render(
          $$result,
          { tabs, active },
          {
            active: ($$value) => {
              active = $$value;
              $$settled = false;
            }
          },
          {
            default: ({ tab }) => {
              return `${validate_component(Tab, "Tab").$$render($$result, { tab }, {}, {
                default: () => {
                  return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(tab)}`;
                    }
                  })}`;
                }
              })}`;
            }
          }
        )}`;
      }
    })} ${active === "Contents" ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-1bkysss">Course Objectives (22CA1201)</h6> <p class="svelte-1a5or8o" data-svelte-h="svelte-kcqwqn">Student should be comportable in using probability concepts in making statistical inferences. They should be able to handle basic problems in linear optimization.</p>`;
          }
        })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                required: true,
                variant: "outlined",
                label: "Student ID",
                style: "width:50%;",
                input$emptyValueUndefined: true,
                value: studentID
              },
              {
                value: ($$value) => {
                  studentID = $$value;
                  $$settled = false;
                }
              },
              {}
            )} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `Register`;
              }
            })}`;
          }
        })}`;
      }
    })} <h5 class="svelte-1a5or8o" data-svelte-h="svelte-vrhswa">Contents</h5> ${validate_component(Card, "Card").$$render(
      $$result,
      {
        style: "background-color: rgba(0, 100, 100, 0.1"
      },
      {},
      {
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
      }
    )}` : `${active === "Assignments" ? `<h5 class="svelte-1a5or8o" data-svelte-h="svelte-1c1pxi4">Assignments</h5> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Load Assignments`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `${each(assignments, (assignment) => {
              return `<div>${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(assignment.title)}`;
                    }
                  })}`;
                }
              })} </div>`;
            })} `;
          }
        })}`;
      }
    })}` : `${active === "Details" ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-fe1r8k">Course Outcomes</h6> <p class="svelte-1a5or8o" data-svelte-h="svelte-1yih345">At the end of the course student will be able to</p> <ol data-svelte-h="svelte-aaghz7"><li class="svelte-1a5or8o">Understand various statistical techniques that can be applied to real life situations</li> <li class="svelte-1a5or8o">study and appreciate discrete probability and it&#39;s uses</li> <li class="svelte-1a5or8o">understand and will be able to use operations research techniques to the given optimization problems</li></ol>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-cra9n3">A brief overview of the course</h6> <p class="svelte-1a5or8o" data-svelte-h="svelte-1td1z3p">This course aims to equip students with the skills and knowledge required to use statistical methods in data centric problems. The course starts with basic measures of central tendencies, introduces correlation and regression. Then probability theory is applied to understand distributions. Once the tools are ready, they are applied for statistical inference. The course ends with using linear programming in solving optimization problems.</p>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-kgi1xz">Textbook and references</h6> <ol data-svelte-h="svelte-13ktqkq"><li class="svelte-1a5or8o">Spiegel, Schiller, Srinivasan: Probability and Statistics-4th edition, McGraw Hill, 2013</li> <li class="svelte-1a5or8o">Study material at https://drmithileshkumar.com/courses/mathematics2</li> <li class="svelte-1a5or8o">Learn node.js at https://nodejs.org/en/learn</li> <li class="svelte-1a5or8o">Taha: Operations Research: An Introduction, Mac Millan.</li></ol>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-1l2n45b">Timetable</h6> <strong class="svelte-1a5or8o" data-svelte-h="svelte-laz63v">Room</strong>: TBD
                <ol data-svelte-h="svelte-14orddr"><li class="svelte-1a5or8o"><strong class="svelte-1a5or8o">Monday</strong>: 9:45-10:45</li> <li class="svelte-1a5or8o"><strong class="svelte-1a5or8o">Tuesday</strong>: 2:45-4:45</li> <li class="svelte-1a5or8o"><strong class="svelte-1a5or8o">Wednesday</strong>: 8:45-9:45</li> <li class="svelte-1a5or8o"><strong class="svelte-1a5or8o">Friday</strong>: 12:00-1:00</li></ol>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-1dr23oh">Assessement</h6> ${validate_component(DataTable, "DataTable").$$render(
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
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-19xedrt">Attendence Requirements</h6> <p class="svelte-1a5or8o" data-svelte-h="svelte-16as233">A student should have 75% or above to appear for the SEE exam failing which the admit card for the SEE will not be generated.</p> <h6 class="svelte-1a5or8o" data-svelte-h="svelte-1lxutzu">Rubrics of attendance in CIA evaluation</h6> ${validate_component(DataTable, "DataTable").$$render(
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
            )} <p class="svelte-1a5or8o" data-svelte-h="svelte-1b8ttp6">Under extreme circumstances like medical emergencies etc. the student may apply permission with proper proofs attached and letter duly signed by the Chairperson of the department for obtaining 10% increment if he/she is having less than 75% attendance.</p>`;
          }
        })}`;
      }
    })}` : ``}`}`}</article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return $$rendered;
});
export {
  Page as default
};
