
import root from './root.svelte';
import { set_building, set_paths, set_version } from '../../node_modules/@sveltejs/kit/src/runtime/shared.js';

set_paths({"base":"","assets":""});
set_version("1674232438973");

export const options = {
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	hooks: null, // added lazily, via `get_hooks`
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce }) => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<link rel=\"icon\" type=\"image/png\" href=\"" + assets + "/favicon.png\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t\t<meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\r\n\t\t<meta name=\"mobile-web-app-capable\" content=\"yes\" />\r\n\t\t<meta name=\"description\" content=\"Home page of Dr Mithilesh Kumar\" />\r\n\t\t<meta name=\"keywords\" content=\"Home Page\" />\r\n\t\t<meta name=\"author\" content=\"Dr Mithilesh Kumar\" />\r\n\t\t<!-- <link rel=\"stylesheet\" href=\"/common.css\" /> -->\r\n\t\t<!-- <script defer src=\"https://checkout.razorpay.com/v1/checkout.js\"></script> -->\r\n\t\t<!-----------------------------------MATHJAX----------------------------->\r\n\t\t<script defer src=\"https://polyfill.io/v3/polyfill.min.js?features=es6\"></script>\r\n\t\t<script type=\"text/javascript\" id=\"MathJax-script\" async src=\"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js\"></script>\r\n\t\t<!-- Material Icons -->\r\n\t\t<link href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined\" rel=\"stylesheet\" />\r\n\t\t<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"/>\r\n\t\t<!-- Roboto -->\r\n\t\t<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700&display=swap\"\r\n\t\t/>\r\n\t\t<!-- Roboto Mono -->\r\n\t\t<!-- <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n\t\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n\t\t<link href=\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\" rel=\"stylesheet\">\r\n\t\t<link\r\n\t\t\t\trel=\"stylesheet\"\r\n\t\t\t\thref=\"https://fonts.googleapis.com/css?family=Roboto+Mono\"\r\n\t\t/> -->\r\n\t\t<!-- <link rel=\"stylesheet\" href=\"/light.css\" media=\"(prefers-color-scheme: light)\" />\r\n\t\t<link rel=\"stylesheet\" href=\"/dark.css\" media=\"screen and (prefers-color-scheme: dark)\"/> -->\r\n\t\t<!-- <link rel=\"stylesheet\" href=\"/light.css\" id=\"theme\" /> -->\r\n\t\t<link rel=\"stylesheet\" href=\"/app.css\" id=\"theme\" />\r\n\t\t<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\r\n\t\t" + head + "\r\n\t</head>\r\n\t<body data-sveltekit-preload-data=\"hover\">\r\n\t\t<div style=\"display: contents\">" + body + "</div>\r\n\t</body>\r\n</html>\r\n",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid #ccc;\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	}
};

export function get_hooks() {
	return {};
}

export { set_building, set_paths };
