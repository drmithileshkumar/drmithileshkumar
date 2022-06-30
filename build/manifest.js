export const manifest = {
	appDir: "_app",
	assets: new Set(["CMIMedal.jpg","IITMSc.jpg","LCPath.svg","app.css","cmithesis.pdf","dark.css","light.css","mithileshkumar.png","mithileshkumarlogo.png","robots.txt","santa.svg","svelte-welcome.png","svelte-welcome.webp","thesis.pdf","webdutIcon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".css":"text/css",".pdf":"application/pdf",".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"start-c6e8f0fc.js","js":["start-c6e8f0fc.js","chunks/index-07c72c70.js","chunks/index-8caecc38.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
