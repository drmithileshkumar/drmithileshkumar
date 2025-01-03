import { c as classAdderBuilder } from './classAdderBuilder-B9W9nXDD.js';

classAdderBuilder({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
const Title = classAdderBuilder({
  class: "mdc-dialog__title",
  tag: "h2"
});
const Content = classAdderBuilder({
  class: "mdc-dialog__content",
  tag: "div"
});
const Actions = classAdderBuilder({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});

export { Actions as A, Content as C, Title as T };
//# sourceMappingURL=Actions2-DHH8wTTf.js.map
