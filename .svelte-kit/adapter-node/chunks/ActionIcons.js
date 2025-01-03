import { c as classAdderBuilder } from "./classAdderBuilder.js";
const Content = classAdderBuilder({
  class: "smui-card__content",
  tag: "div"
});
const MediaContent = classAdderBuilder({
  class: "mdc-card__media-content",
  tag: "div"
});
const ActionButtons = classAdderBuilder({
  class: "mdc-card__action-buttons",
  tag: "div"
});
const ActionIcons = classAdderBuilder({
  class: "mdc-card__action-icons",
  tag: "div"
});
export {
  ActionButtons as A,
  Content as C,
  MediaContent as M,
  ActionIcons as a
};
