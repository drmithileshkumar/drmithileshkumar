import { a as classAdderBuilder } from "./classAdderBuilder.js";
const Text = classAdderBuilder({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
const PrimaryText = classAdderBuilder({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
const SecondaryText = classAdderBuilder({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
const Meta = classAdderBuilder({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
classAdderBuilder({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
export {
  Meta as M,
  PrimaryText as P,
  SecondaryText as S,
  Text as T
};
