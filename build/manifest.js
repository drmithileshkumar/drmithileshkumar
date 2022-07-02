export const manifest = {
	appDir: "_app",
	assets: new Set(["CMIMedal.jpg","IITMSc.jpg","LCPath.svg","app.css","cmithesis.pdf","dark.css","light.css","mithileshkumar.png","mithileshkumarlogo.png","photo_cv.jpg","robots.txt","santa.svg","svelte-welcome.png","svelte-welcome.webp","thesis.pdf","webdutIcon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".css":"text/css",".pdf":"application/pdf",".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"start-d244162c.js","js":["start-d244162c.js","chunks/index-07c72c70.js","chunks/index-8caecc38.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/4.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/3.js')
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
			},
			{
				type: 'page',
				id: "cv@cv",
				pattern: /^\/cv\/?$/,
				names: [],
				types: [],
				path: "/cv",
				shadow: null,
				a: [3,4],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
