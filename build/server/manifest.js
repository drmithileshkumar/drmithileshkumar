const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["app.css","CMIMedal.jpg","cmithesis.pdf","common.css","dark.css","favicon.png","IITMSc.jpg","LCPath.svg","light.css","mithileshkumar.png","photo_cv.jpg","profilephoto.jpeg","robots copy.txt","robots.txt","santa.svg","svelte-welcome.png","svelte-welcome.webp","thesis.pdf","webdutIcon.png"]),
	mimeTypes: {".css":"text/css",".jpg":"image/jpeg",".pdf":"application/pdf",".png":"image/png",".svg":"image/svg+xml",".jpeg":"image/jpeg",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-4ddbddd5.js","imports":["_app/immutable/start-4ddbddd5.js","_app/immutable/chunks/index-d9b8f795.js","_app/immutable/chunks/singletons-e5063168.js","_app/immutable/chunks/index-2fd052dc.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-d167341f.js'),
			() => import('./chunks/1-52215204.js'),
			() => import('./chunks/2-4a0ce3f5.js'),
			() => import('./chunks/3-59aaec31.js'),
			() => import('./chunks/4-408665d1.js'),
			() => import('./chunks/5-c766fe1e.js'),
			() => import('./chunks/6-24f8c46a.js'),
			() => import('./chunks/7-cce43656.js'),
			() => import('./chunks/8-430ed6e4.js'),
			() => import('./chunks/9-69d01df6.js'),
			() => import('./chunks/10-226facbb.js'),
			() => import('./chunks/11-2d8497c9.js'),
			() => import('./chunks/12-1e710f4c.js'),
			() => import('./chunks/13-6a6e2fdf.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/cv",
				pattern: /^\/cv\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/questions",
				pattern: /^\/questions\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/questions/maths",
				pattern: /^\/questions\/maths\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/questions/maths/question1",
				pattern: /^\/questions\/maths\/question1\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/questions/maths/question2",
				pattern: /^\/questions\/maths\/question2\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/questions/maths/question3",
				pattern: /^\/questions\/maths\/question3\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/questions/maths/question4",
				pattern: /^\/questions\/maths\/question4\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/questions/maths/question5",
				pattern: /^\/questions\/maths\/question5\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/questions/maths/question6",
				pattern: /^\/questions\/maths\/question6\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
