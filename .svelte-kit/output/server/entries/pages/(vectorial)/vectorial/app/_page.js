import "../../../../../chunks/index.js";
import { p as pageLoadState } from "../../../../../chunks/stores2.js";
async function load({ parent, fetch, params, url }) {
  pageLoadState.update((state) => false);
  return {};
}
export {
  load
};
