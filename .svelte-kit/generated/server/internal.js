
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: true,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<link rel=\"icon\" type=\"image/png\" href=\"" + assets + "/favicon.png\" />\r\n\t\t<link rel=\"manifest\" crossorigin=\"use-credentials\" href=\"" + assets + "/manifest.json\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t\t<meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\r\n\t\t<meta name=\"mobile-web-app-capable\" content=\"yes\" />\r\n\t\t<meta name=\"description\" content=\"Home page of Dr Mithilesh Kumar\" />\r\n\t\t<meta name=\"keywords\" content=\"Home Page\" />\r\n\t\t<meta name=\"author\" content=\"Dr Mithilesh Kumar\" />\r\n\t\t<!-- <link rel=\"stylesheet\" href=\"/common.css\" /> -->\r\n\t\t<!-- <script defer src=\"https://checkout.razorpay.com/v1/checkout.js\"></script> -->\r\n\t\t<!-----------------------------------MATHJAX----------------------------->\r\n\t\t<script defer src=\"https://polyfill.io/v3/polyfill.min.js?features=es6\"></script>\r\n\t\t<script type=\"text/javascript\" id=\"MathJax-script\" async src=\"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg-full.js\"></script>\r\n\t\t<!-------------------------------------KATEX----------------------------->\r\n\t\t<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css\" integrity=\"sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0\" crossorigin=\"anonymous\">\r\n\t\t<script defer src=\"https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.js\" integrity=\"sha384-PwRUT/YqbnEjkZO0zZxNqcxACrXe+j766U2amXcgMg5457rve2Y7I6ZJSm2A0mS4\" crossorigin=\"anonymous\"></script>\r\n\t\t<script defer src=\"https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/contrib/auto-render.min.js\" integrity=\"sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05\" crossorigin=\"anonymous\"\r\n\t\t\tonload=\"renderMathInElement(document.body);\"></script>\r\n\t\t<!-- Material Icons -->\r\n\t\t<link href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined\" rel=\"stylesheet\" />\r\n\t\t<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"/>\r\n\t\t<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n\t<link href=\"https://fonts.googleapis.com/css2?family=Ysabeau:ital,wght@0,1;0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,1;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap\" rel=\"stylesheet\">\r\n\t\t<!-- Roboto -->\r\n\t\t<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700&display=swap\"\r\n\t\t/>\r\n\t\t<!-- Roboto Mono -->\r\n\t\t<!-- <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n\t\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n\t\t<link href=\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\" rel=\"stylesheet\">\r\n\t\t<link\r\n\t\t\t\trel=\"stylesheet\"\r\n\t\t\t\thref=\"https://fonts.googleapis.com/css?family=Roboto+Mono\"\r\n\t\t/> -->\r\n\t\t<!-- <link rel=\"stylesheet\" href=\"/light.css\" media=\"(prefers-color-scheme: light)\" />\r\n\t\t<link rel=\"stylesheet\" href=\"/dark.css\" media=\"screen and (prefers-color-scheme: dark)\"/> -->\r\n\t\t<!-- <link rel=\"stylesheet\" href=\"/light.css\" id=\"theme\" /> -->\r\n\t\t<link rel=\"stylesheet\" href=\"/app.css\" id=\"theme\" />\r\n\t\t<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\r\n\t\t" + head + "\r\n\t</head>\r\n\t<body data-sveltekit-preload-data=\"hover\">\r\n\t\t<div style=\"display: contents\">" + body + "</div>\r\n\t</body>\r\n</html>\r\n",
		error: ({ status, message }) => "<!doctype html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<title>" + message + "</title>\r\n\r\n\t\t<style>\r\n\t\t\tbody {\r\n\t\t\t\t--bg: white;\r\n\t\t\t\t--fg: #222;\r\n\t\t\t\t--divider: #ccc;\r\n\t\t\t\tbackground: var(--bg);\r\n\t\t\t\tcolor: var(--fg);\r\n\t\t\t\tfont-family:\r\n\t\t\t\t\tsystem-ui,\r\n\t\t\t\t\t-apple-system,\r\n\t\t\t\t\tBlinkMacSystemFont,\r\n\t\t\t\t\t'Segoe UI',\r\n\t\t\t\t\tRoboto,\r\n\t\t\t\t\tOxygen,\r\n\t\t\t\t\tUbuntu,\r\n\t\t\t\t\tCantarell,\r\n\t\t\t\t\t'Open Sans',\r\n\t\t\t\t\t'Helvetica Neue',\r\n\t\t\t\t\tsans-serif;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\theight: 100vh;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\r\n\t\t\t.error {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tmax-width: 32rem;\r\n\t\t\t\tmargin: 0 1rem;\r\n\t\t\t}\r\n\r\n\t\t\t.status {\r\n\t\t\t\tfont-weight: 200;\r\n\t\t\t\tfont-size: 3rem;\r\n\t\t\t\tline-height: 1;\r\n\t\t\t\tposition: relative;\r\n\t\t\t\ttop: -0.05rem;\r\n\t\t\t}\r\n\r\n\t\t\t.message {\r\n\t\t\t\tborder-left: 1px solid var(--divider);\r\n\t\t\t\tpadding: 0 0 0 1rem;\r\n\t\t\t\tmargin: 0 0 0 1rem;\r\n\t\t\t\tmin-height: 2.5rem;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\r\n\t\t\t.message h1 {\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\tfont-size: 1em;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\r\n\t\t\t@media (prefers-color-scheme: dark) {\r\n\t\t\t\tbody {\r\n\t\t\t\t\t--bg: #222;\r\n\t\t\t\t\t--fg: #ddd;\r\n\t\t\t\t\t--divider: #666;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"error\">\r\n\t\t\t<span class=\"status\">" + status + "</span>\r\n\t\t\t<div class=\"message\">\r\n\t\t\t\t<h1>" + message + "</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</body>\r\n</html>\r\n"
	},
	version_hash: "127e2go"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let init;
	({ handle, handleFetch, handleError, init } = await import("../../../src/hooks.server.js"));

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
