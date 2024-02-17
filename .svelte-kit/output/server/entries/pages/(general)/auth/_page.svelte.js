import { s as subscribe, b as set_store_value } from "../../../../chunks/utils.js";
import { c as create_ssr_component, i as createEventDispatcher, f as add_attribute, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/Button.js";
import { C as CommonLabel } from "../../../../chunks/CommonLabel.js";
import { S as Set_1, C as Chip, T as Text } from "../../../../chunks/Text.js";
import { C as Card } from "../../../../chunks/Card.js";
import { C as Content } from "../../../../chunks/ActionIcons.js";
import { A as Actions } from "../../../../chunks/Actions.js";
import { T as Textfield } from "../../../../chunks/Textfield.js";
import "../../../../chunks/Suffix.js";
import "devalue";
import "../../../../chunks/client.js";
import { p as page } from "../../../../chunks/stores.js";
import { a as scannedQR, G as Guest, c as currentPath } from "../../../../chunks/stores2.js";
import "html5-qrcode";
import "qrcode-generator";
/* empty css                                                          */
const css$1 = {
  code: "#reader.svelte-17pu3xa{background:#888;width:200px;height:200px;display:flex;justify-content:center;align-items:center;margin-top:0.5em;margin-bottom:0.5em}",
  map: null
};
const ScanQR = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_scannedQR;
  $$unsubscribe_scannedQR = subscribe(scannedQR, (value) => value);
  let qrContainer;
  createEventDispatcher();
  $$result.css.add(css$1);
  $$unsubscribe_scannedQR();
  return `<div id="reader" width="200px" height="200px" class="svelte-17pu3xa"${add_attribute("this", qrContainer, 0)}></div> ${validate_component(Button, "Button").$$render($$result, { class: "upload" }, {}, {
    default: () => {
      return `<span class="material-icons" data-svelte-h="svelte-xs0gwh">qr_code_2</span> <span class="label" data-svelte-h="svelte-s7bn6y">Upload Secret QR code</span>`;
    }
  })} <input style="display: none;" type="file" accept="image/*" id="input-file" name="input-file">`;
});
const css = {
  code: "article.svelte-3iqa1b{width:100%}.details.svelte-3iqa1b{display:flex;flex-direction:column;gap:1.5em;justify-content:center;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_Guest;
  let $page, $$unsubscribe_page;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_Guest = subscribe(Guest, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Authentication", $currentPath);
  let choices = ["Log in", "Sign up"];
  let selected = "Log in";
  let phone = null, name = null;
  let scanned = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1eo24a5_START -->${$$result.title = `<title>Authentication</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/auth"><meta name="description" content="Home of Dr Mithilesh Kumar"><!-- HEAD_svelte-1eo24a5_END -->`, ""} <article class="svelte-3iqa1b">${!$page.data.user ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render(
          $$result,
          {
            style: "display:flex;flex-direction:column;align-items:center;justify-content:center;gap: 0.5em;"
          },
          {},
          {
            default: () => {
              return ` <div class="choices">${validate_component(Set_1, "Set").$$render(
                $$result,
                { chips: choices, choice: true, selected },
                {
                  selected: ($$value) => {
                    selected = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: ({ chip }) => {
                    return `${validate_component(Chip, "Chip").$$render($$result, { chip }, {}, {
                      default: () => {
                        return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                          default: () => {
                            return `${escape(chip)}`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                }
              )}</div> ${selected === "Log in" ? `<div class="details svelte-3iqa1b">${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  label: "Phone",
                  placeholder: "0123456789",
                  style: "width:300px;",
                  value: phone
                },
                {
                  value: ($$value) => {
                    phone = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${phone ? `${validate_component(ScanQR, "ScanQR").$$render($$result, {}, {}, {})}` : ``}</div>` : `<div class="details svelte-3iqa1b">${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  label: "Name",
                  placeholder: "Firstname Surname",
                  style: "width: 300px;",
                  value: name
                },
                {
                  value: ($$value) => {
                    name = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${name ? `${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  label: "Phone",
                  style: "width: 300px;",
                  value: phone
                },
                {
                  value: ($$value) => {
                    phone = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}` : ``}</div>`}`;
            }
          }
        )} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `${selected === "Log in" && scanned ? `${validate_component(Button, "Button").$$render($$result, { style: "width:100%" }, {}, {
              default: () => {
                return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `Login`;
                  }
                })}`;
              }
            })}` : `${selected === "Sign up" && phone ? `${validate_component(Button, "Button").$$render($$result, { style: "width:100%" }, {}, {
              default: () => {
                return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `Sign up`;
                  }
                })}`;
              }
            })}` : ``}`}`;
          }
        })}`;
      }
    })} ` : ``} </article>`;
  } while (!$$settled);
  $$unsubscribe_Guest();
  $$unsubscribe_page();
  $$unsubscribe_currentPath();
  return $$rendered;
});
export {
  Page as default
};
