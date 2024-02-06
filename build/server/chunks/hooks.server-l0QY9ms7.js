import jwt from 'jsonwebtoken';
import { c as cookie } from './index-Adhl5bwY.js';
import './ssr-QYhyCQFk.js';
import './index-8pACjapJ.js';
import './exports-mq_1S73-.js';
import './index2-2iq6SjbL.js';
import './_commonjsHelpers-YxXKG0rd.js';

const verifyAndDecodeJwt = (jwtString) => {
  try {
    return { ...jwt.verify(jwtString, getPublicKey()) };
  } catch (e) {
    console.error(e);
    return null;
  }
};
const getPublicKey = () => {
  return "-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAuv+QvecRlgyaKnFLJApe\n5a68ZBXVpijQAN0rSkcGKjmSa6Oc0ZpYLUyvsMACHH2dV0TaVPo6Hnk1sYsqAFHu\nkCX1gHnt/XQ99napTzcuhE15gzQuPDMbCSS9lM49gUvoJfa5teXlR5mhb3lHAv2y\ny6oZBUxpgOVizp4MoeGQqVvaXQk1z2SAWRMKJMsViXi0CfMUQIFlczqSQHAEAf9z\n/Gi+n7K+gQ3YfSxayaPdI5bEqZpECBHuqw8mQ6u87Fgbz3IvcrGCheS/IdHOWcY3\nduT8h0+b2il/25kXOl4toUuW4DAcxotmSet3UxuYFlYew5al1vOmlYpDhB5ZXNY9\nEMKzJOr1aCQIsM9cpgL35/eiMNsaq+zRGe2AmjKRPIWX7cRN5R+OgBUROTqSRNIt\nSbAhS9TtqnUBUla9nzKUKW62zl7KmC/AI1oX6olZ3QBrIN8hrm33WQrpzcAx0EZJ\nQDS6Xp1o8C2yx93w6vR6sCVmoW1UwlNQ+9kp2zwDc8f0J3GdZhmNv/uuSWYdnweV\n+5dAVhgEEg+JtPsthUB1VS4d5jS06gYddhi2kCc2FyDt/32aa3+qEiiWVd98N8Qb\nZ9pA0TuH2N3kD7pe6BXlmWeyN8HKEyP+sJfMEJ5mlrPp42vV7W5Wg5ru/13vVanu\n80c+hhd1cTgaqFGkkTekfZ8CAwEAAQ==\n-----END PUBLIC KEY-----";
};
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
//# sourceMappingURL=hooks.server-l0QY9ms7.js.map
