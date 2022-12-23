const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["app.css","CMIMedal.jpg","cmithesis.pdf","common.css","dark.css","favicon.png","IITMSc.jpg","LCPath.svg","light.css","mithileshkumar.png","photo_cv.jpg","profilephoto.jpeg","robots copy.txt","robots.txt","santa.svg","svelte-welcome.png","svelte-welcome.webp","thesis.pdf","webdutIcon.png"]),
	mimeTypes: {".css":"text/css",".jpg":"image/jpeg",".pdf":"application/pdf",".png":"image/png",".svg":"image/svg+xml",".jpeg":"image/jpeg",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-76edc84d.js","imports":["_app/immutable/start-76edc84d.js","_app/immutable/chunks/index-7de01425.js","_app/immutable/chunks/singletons-475264f0.js","_app/immutable/chunks/index-c32cc651.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-0f9d4494.js'),
			() => import('./chunks/1-ca215fe1.js'),
			() => import('./chunks/2-50c74151.js'),
			() => import('./chunks/3-e19095b2.js'),
			() => import('./chunks/4-20eebc6a.js'),
			() => import('./chunks/5-7eb2f769.js'),
			() => import('./chunks/6-c3e22439.js'),
			() => import('./chunks/7-d4969fcd.js'),
			() => import('./chunks/8-4249573f.js'),
			() => import('./chunks/9-3b45136b.js'),
			() => import('./chunks/10-f5e16235.js'),
			() => import('./chunks/11-31754863.js'),
			() => import('./chunks/12-cd3307a1.js'),
			() => import('./chunks/13-998de024.js'),
			() => import('./chunks/14-e404cd80.js'),
			() => import('./chunks/15-ea41694f.js')
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
