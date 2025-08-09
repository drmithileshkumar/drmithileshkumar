import { v as verifyAndDecodeJwt } from './jwt-oqviIlgo.js';
import { c as cookie } from './index-QjwOmpUa.js';
import 'jsonwebtoken';
import './ssr2-CDgUAJs6.js';
import './utils-DhkojCd_.js';
import './exports-DKuYoYKl.js';
import './index-DzcLzHBX.js';
import './index2-D2s-XE5r.js';
import './_commonjsHelpers-B85MJLTf.js';

const getUser = (event) => {
  if (!event.request.headers.get("cookie")) {
    return null;
  }
  const cookies = cookie.parse(event.request.headers.get("cookie"));
  if (cookies.jwt) {
    return verifyAndDecodeJwt(cookies.jwt);
  }
};
async function handle({ event, resolve }) {
  event.locals.user = getUser(event);
  const response = await resolve(event);
  return response;
}

export { handle };
//# sourceMappingURL=hooks.server-BSipZOvX.js.map
