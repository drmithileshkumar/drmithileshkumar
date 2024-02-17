import { s as subscribe, b as set_store_value, i as is_promise, n as noop } from "../../../../chunks/utils.js";
import { c as create_ssr_component, i as createEventDispatcher, f as add_attribute, v as validate_component, e as escape, j as each } from "../../../../chunks/ssr.js";
import { C as Card } from "../../../../chunks/Card.js";
import { C as Content } from "../../../../chunks/ActionIcons.js";
import { B as Button } from "../../../../chunks/Button.js";
import { C as CommonLabel } from "../../../../chunks/CommonLabel.js";
import { T as TabBar, a as Tab } from "../../../../chunks/TabBar.js";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/client.js";
import { A as Actions } from "../../../../chunks/Actions.js";
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from "../../../../chunks/Cell.js";
import "../../../../chunks/Subheader.js";
import { c as currentPath, i as isAuth, T as TopBarHeight } from "../../../../chunks/stores2.js";
import "html5-qrcode";
import "qrcode-generator";
/* empty css                                                          */
import "devalue";
const css$2 = {
  code: "#generatedQRCode.svelte-o78zgt img.svelte-o78zgt{width:200px;height:200px}",
  map: null
};
const GenerateQR = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { filename } = $$props;
  let { autoDownload = true } = $$props;
  createEventDispatcher();
  let qrlink;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.filename === void 0 && $$bindings.filename && filename !== void 0)
    $$bindings.filename(filename);
  if ($$props.autoDownload === void 0 && $$bindings.autoDownload && autoDownload !== void 0)
    $$bindings.autoDownload(autoDownload);
  $$result.css.add(css$2);
  return `<span id="generatedQRCode" class="svelte-o78zgt"><img${add_attribute("src", qrlink, 0)} alt="" class="svelte-o78zgt"></span> ${``}`;
});
const css$1 = {
  code: ".photos.svelte-14hlhok.svelte-14hlhok{position:relative}.banner.svelte-14hlhok.svelte-14hlhok{width:100%;height:170px;background-color:rgba(0, 247, 255, 0.919)}.profile.svelte-14hlhok.svelte-14hlhok{position:absolute;bottom:-50px;left:10px;width:120px;height:120px;border-radius:50%;background-color:white;border-width:2px;overflow:hidden}.banner.svelte-14hlhok img.svelte-14hlhok,.profile.svelte-14hlhok img.svelte-14hlhok{width:100%;height:100%}.action.svelte-14hlhok.svelte-14hlhok{display:flex;align-items:center;justify-content:end}.details.svelte-14hlhok.svelte-14hlhok{margin-left:0em}.name.svelte-14hlhok.svelte-14hlhok{display:flex;gap:0.3em;font-weight:bold;font-size:1.1em;margin-top:1em;align-items:center}.publicID.svelte-14hlhok.svelte-14hlhok{font-size:0.9em}.aboutme.svelte-14hlhok.svelte-14hlhok{margin:1em 0}.aboutme.svelte-14hlhok.svelte-14hlhok,.summary.svelte-14hlhok.svelte-14hlhok{font-size:0.8em}.summary.svelte-14hlhok.svelte-14hlhok{display:flex;flex-direction:row;align-items:center;gap:1em}.prop.svelte-14hlhok.svelte-14hlhok{display:flex;align-items:center;gap:0.3em}.bullet.svelte-14hlhok.svelte-14hlhok{display:flex;width:7px;height:7px;border-radius:50%;background:currentColor}",
  map: null
};
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabs;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { banner } = $$props;
  let { profile } = $$props;
  let { currentUser } = $$props;
  let { currentUserDetail } = $$props;
  let { active } = $$props;
  if ($$props.banner === void 0 && $$bindings.banner && banner !== void 0)
    $$bindings.banner(banner);
  if ($$props.profile === void 0 && $$bindings.profile && profile !== void 0)
    $$bindings.profile(profile);
  if ($$props.currentUser === void 0 && $$bindings.currentUser && currentUser !== void 0)
    $$bindings.currentUser(currentUser);
  if ($$props.currentUserDetail === void 0 && $$bindings.currentUserDetail && currentUserDetail !== void 0)
    $$bindings.currentUserDetail(currentUserDetail);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (profile === "data:")
        profile = "/avatar.svg";
    }
    tabs = ["Assignments", "Log Out"];
    $$rendered = `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="photos svelte-14hlhok"><div class="banner svelte-14hlhok"><img${add_attribute("src", banner, 0)} alt="banner" class="svelte-14hlhok"></div> <div class="profile svelte-14hlhok"><img${add_attribute("src", profile, 0)} alt="" class="svelte-14hlhok"></div></div> <div class="action svelte-14hlhok">${$page.data.user && $page.data.user.publicID === currentUser.publicID ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Edit Profile`;
          }
        })} ` : ``}</div> ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
          default: () => {
            return `<div class="details svelte-14hlhok"><div class="userInfo"><div class="name svelte-14hlhok"><span class="mdc-typography--headline5">${escape(currentUser.name)}</span> <span class="material-icons" data-svelte-h="svelte-1svqpij">verified</span></div> <div class="publicID svelte-14hlhok">${escape(currentUser.publicID)}</div></div> <div class="aboutme svelte-14hlhok">${escape(currentUserDetail.common.bio)}</div> <div class="summary svelte-14hlhok"><span class="prop svelte-14hlhok"><span class="icon material-icons" data-svelte-h="svelte-1q6mwxz">stars</span> <span class="propName">${escape(currentUserDetail.details?.rank?.label)}</span></span> <span class="bullet svelte-14hlhok"></span> <span class="prop svelte-14hlhok"><span class="icon material-icons" data-svelte-h="svelte-ebzaoo">link</span> <span class="propName">${escape(currentUserDetail.common.website)}</span></span></div> </div>`;
          }
        })} ${validate_component(TabBar, "TabBar").$$render(
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
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const css = {
  code: "article.svelte-u7i3fp{width:100%;display:flex;flex-direction:column;gap:0.5em}.authQR.svelte-u7i3fp{display:flex;flex-direction:column;justify-content:center;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabs;
  let $page, $$unsubscribe_page;
  let $isAuth, $$unsubscribe_isAuth;
  let $currentPath, $$unsubscribe_currentPath;
  let $TopBarHeight, $$unsubscribe_TopBarHeight;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_isAuth = subscribe(isAuth, (value) => $isAuth = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_TopBarHeight = subscribe(TopBarHeight, (value) => $TopBarHeight = value);
  let { data } = $$props;
  let profile = "", banner;
  let active;
  let privateID, otpID, publicID;
  ({
    "Questions": `/${$page.data.user.publicID}/questions`,
    "Assignments": `/${$page.data.user.publicID}/assignments`,
    "Submissions": `/${$page.data.user.publicID}/submissions`
  });
  const getAssignments = async () => {
    const res = await fetch(`/api/assignments`);
    if (!res.ok) {
      return [];
    } else {
      return await res.json();
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    set_store_value(currentPath, $currentPath = `${$page.params.publicID}`, $currentPath);
    tabs = $page.data.user.isTeacher ? ["Questions", "Assignments", "Submissions"] : [];
    set_store_value(isAuth, $isAuth = $page.data.user, $isAuth);
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1rvdi7m_START -->${$$result.title = `<title>Dr Mithilesh Kumar</title>`, ""}<meta name="description" content="Dr Mithilesh Kuamr"><meta name="keywords" content="drmithileshkumar.com, mathematics"><link rel="canonical" href="${"https://drmithileshkumar.com/$" + escape(data.currentUser.publicID, true)}"><!-- HEAD_svelte-1rvdi7m_END -->`, ""} <article class="svelte-u7i3fp"><div class="sticky" style="${"top: " + escape($TopBarHeight, true) + "px;"}">${$page.data.user && $page.data.user.publicID === data.currentUser.publicID ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
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
    })}` : ``}</div> ${validate_component(User, "User").$$render(
      $$result,
      {
        banner,
        profile,
        currentUser: data.currentUser,
        currentUserDetail: data.currentUserDetail,
        active: data.active
      },
      {
        active: ($$value) => {
          data.active = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${data.active === "Assignments" ? `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ``;
      }
      return function(assignments) {
        return ` ${validate_component(DataTable, "Datatable").$$render($$result, { style: "width:100%" }, {}, {
          default: () => {
            return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                      default: () => {
                        return `CourseID`;
                      }
                    })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Title`;
                      }
                    })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Status`;
                      }
                    })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Action`;
                      }
                    })}`;
                  }
                })}`;
              }
            })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
              default: () => {
                return `${each(assignments, (assignment) => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(assignment.courseID)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(assignment.title)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(assignment.status)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${assignment.status === "Draft" ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Go`;
                                }
                              })}`;
                            }
                          })}` : `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Solution`;
                                }
                              })}`;
                            }
                          })}`} `;
                        }
                      })} `;
                    }
                  })}`;
                })}`;
              }
            })}`;
          }
        })} `;
      }(__value);
    }(getAssignments())}` : `${data.active === "Log Out" ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render(
          $$result,
          {
            style: "display:flex;align-items:center;justify-content:center;"
          },
          {},
          {
            default: () => {
              return `<div class="authQR svelte-u7i3fp">${validate_component(GenerateQR, "GenerateQR").$$render(
                $$result,
                {
                  data: privateID + " " + otpID,
                  filename: publicID,
                  autoDownload: false
                },
                {},
                {}
              )}</div>`;
            }
          }
        )} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `<form method="POST" action="?/logout"> ${validate_component(Button, "Button").$$render($$result, { style: "width:100%;", class: "logout" }, {}, {
              default: () => {
                return `Log out`;
              }
            })}</form>`;
          }
        })}`;
      }
    })}` : ``}`} </article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_isAuth();
  $$unsubscribe_currentPath();
  $$unsubscribe_TopBarHeight();
  return $$rendered;
});
export {
  Page as default
};
