const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["app.css","CMIMedal.jpg","cmithesis.pdf","common.css","dark.css","favicon.png","IITMSc.jpg","LCPath.svg","light.css","mithileshkumar.png","photo_cv.jpg","profilephoto.jpeg","robots copy.txt","robots.txt","santa.svg","svelte-welcome.png","svelte-welcome.webp","thesis.pdf","webdutIcon.png"]),
	mimeTypes: {".css":"text/css",".jpg":"image/jpeg",".pdf":"application/pdf",".png":"image/png",".svg":"image/svg+xml",".jpeg":"image/jpeg",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-200c1757.js","imports":["_app/immutable/start-200c1757.js","_app/immutable/chunks/index-6e1b3778.js","_app/immutable/chunks/singletons-d07c0307.js","_app/immutable/chunks/index-8b10ec67.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-3c434a32.js'),
			() => import('./chunks/1-0c0bd0e5.js'),
			() => import('./chunks/2-fcdf0535.js'),
			() => import('./chunks/3-d30ee444.js'),
			() => import('./chunks/4-9ab59a19.js'),
			() => import('./chunks/5-03a2c98b.js'),
			() => import('./chunks/6-863de959.js'),
			() => import('./chunks/7-65a9494f.js'),
			() => import('./chunks/8-a0802cb0.js'),
			() => import('./chunks/9-059b0633.js'),
			() => import('./chunks/10-5a990eab.js'),
			() => import('./chunks/11-16fb93fc.js'),
			() => import('./chunks/12-5667a811.js'),
			() => import('./chunks/13-a7ece374.js'),
			() => import('./chunks/14-7c42ab45.js'),
			() => import('./chunks/15-683b1f4c.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/cv",
				pattern: /^\/cv\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/iit",
				pattern: /^\/iit\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/iit/maths",
				pattern: /^\/iit\/maths\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/iit/maths/question1",
				pattern: /^\/iit\/maths\/question1\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/iit/maths/question2",
				pattern: /^\/iit\/maths\/question2\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/iit/maths/question3",
				pattern: /^\/iit\/maths\/question3\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/iit/maths/question4",
				pattern: /^\/iit\/maths\/question4\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/iit/maths/question5",
				pattern: /^\/iit\/maths\/question5\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/iit/maths/question6",
				pattern: /^\/iit\/maths\/question6\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/practice",
				pattern: /^\/practice\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 15 },
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
