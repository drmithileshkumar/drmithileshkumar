import { c as create_ssr_component, s as setContext, v as validate_component, m as missing_component } from "./index3.js";
let assets = "";
let base = "";
let version = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
function set_building(value) {
}
function set_version(value) {
  version = value;
}
function afterUpdate() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { components } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  let { data_2 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  if ($$props.data_2 === void 0 && $$bindings.data_2 && data_2 !== void 0)
    $$bindings.data_2(data_2);
  {
    stores.page.set(page);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0 }, {}, {
    default: () => {
      return `${components[2] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1 }, {}, {
        default: () => {
          return `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, { data: data_2, form }, {}, {})}`;
        }
      })}` : `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1, form }, {}, {})}`}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0, form }, {}, {})}`}

${``}`;
});
set_paths({ "base": "", "assets": "" });
set_version("1673940241651");
const options = {
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  hooks: null,
  // added lazily, via `get_hooks`
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce }) => '<!DOCTYPE html>\r\n<html lang="en">\r\n	<head>\r\n		<meta charset="utf-8" />\r\n		<link rel="icon" type="image/png" href="' + assets2 + '/favicon.png" />\r\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\r\n		<meta name="apple-mobile-web-app-capable" content="yes" />\r\n		<meta name="mobile-web-app-capable" content="yes" />\r\n		<meta name="description" content="Home page of Dr Mithilesh Kumar" />\r\n		<meta name="keywords" content="Home Page" />\r\n		<meta name="author" content="Dr Mithilesh Kumar" />\r\n		<link rel="stylesheet" href="/common.css" />\r\n		<!-- <script defer src="https://checkout.razorpay.com/v1/checkout.js"><\/script> -->\r\n		<!-----------------------------------MATHJAX----------------------------->\r\n		<script defer src="https://polyfill.io/v3/polyfill.min.js?features=es6"><\/script>\r\n		<script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js"><\/script>\r\n		<!-- Material Icons -->\r\n		<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />\r\n		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>\r\n		<!-- Roboto -->\r\n		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700&display=swap"\r\n		/>\r\n		<!-- Roboto Mono -->\r\n		<link rel="preconnect" href="https://fonts.googleapis.com">\r\n		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\r\n		<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">\r\n		<link\r\n				rel="stylesheet"\r\n				href="https://fonts.googleapis.com/css?family=Roboto+Mono"\r\n		/>\r\n		<!-- <link rel="stylesheet" href="/light.css" media="(prefers-color-scheme: light)" />\r\n		<link rel="stylesheet" href="/dark.css" media="screen and (prefers-color-scheme: dark)"/> -->\r\n		<link rel="stylesheet" href="/light.css" id="theme" />\r\n		<link rel="stylesheet" href="/app.css" id="theme" />\r\n		<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script>\r\n		' + head + '\r\n	</head>\r\n	<body data-sveltekit-preload-data="hover">\r\n		<div style="display: contents">' + body + "</div>\r\n	</body>\r\n</html>\r\n",
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  }
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  set_paths as c,
  get_hooks as g,
  options as o,
  set_building as s,
  version as v
};
