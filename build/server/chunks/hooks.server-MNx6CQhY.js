import { v as verifyAndDecodeJwt } from './jwt-UUbIYnQ9.js';
import { c as cookie } from './index-yezC0rNh.js';
import 'jsonwebtoken';
import './ssr-APL1hDOv.js';
import './utils-yAS0eczJ.js';
import './index-oXbhYwP7.js';
import './exports-mq_1S73-.js';
import './index2-NBMbjtFx.js';
import './_commonjsHelpers-YxXKG0rd.js';

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
//# sourceMappingURL=hooks.server-MNx6CQhY.js.map
