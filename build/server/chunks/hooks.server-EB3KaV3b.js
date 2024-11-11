import { v as verifyAndDecodeJwt } from './jwt-oqviIlgo.js';
import { c as cookie } from './index-BlGni2bV.js';
import 'jsonwebtoken';
import './ssr-Cv_bEuJL.js';
import './utils-DH7689cv.js';
import './index-DzcLzHBX.js';
import './exports-DuWZopOC.js';
import './index2-B3zlhmO5.js';
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
//# sourceMappingURL=hooks.server-EB3KaV3b.js.map
