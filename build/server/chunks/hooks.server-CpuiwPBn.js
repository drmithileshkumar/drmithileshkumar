import { v as verifyAndDecodeJwt } from './jwt-oqviIlgo.js';
import { c as cookie } from './index-CyX13Vjl.js';
import 'jsonwebtoken';
import './ssr2-q3O0l93f.js';
import './utils-iZWwlC2F.js';
import './exports-kR70XCWV.js';
import './index-DzcLzHBX.js';
import './index2-BZnI6xu7.js';
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
//# sourceMappingURL=hooks.server-CpuiwPBn.js.map
