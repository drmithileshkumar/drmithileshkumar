export const manifest = {
	appDir: "_app",
	assets: new Set(["CMIMedal.jpg","IITMSc.jpg","LCPath.svg","app.css","cmithesis.pdf","common.css","dark.css","light.css","mithileshkumar.png","mithileshkumarlogo.png","photo_cv.jpg","profilephoto.jpeg","robots copy.txt","robots.txt","santa.svg","svelte-welcome.png","svelte-welcome.webp","thesis.pdf","webdutIcon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".css":"text/css",".pdf":"application/pdf",".png":"image/png",".jpeg":"image/jpeg",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"start-287d08c8.js","js":["start-287d08c8.js","chunks/index-4ca20c8c.js","chunks/index-5801176b.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/5.js'),
			() => import('./server/nodes/7.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/6.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/8.js'),
			() => import('./server/nodes/4.js'),
			() => import('./server/nodes/15.js'),
			() => import('./server/nodes/9.js'),
			() => import('./server/nodes/10.js'),
			() => import('./server/nodes/11.js'),
			() => import('./server/nodes/12.js'),
			() => import('./server/nodes/13.js'),
			() => import('./server/nodes/14.js'),
			() => import('./server/nodes/16.js')
		],
		routes: [
			{
				type: 'page',
				id: "+page",
				pattern: /^\/\+page\/?$/,
				names: [],
				types: [],
				path: "/+page",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "questions",
				pattern: /^\/questions\/?$/,
				names: [],
				types: [],
				path: "/questions",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "cv/+page@cv",
				pattern: /^\/cv\/\+page\/?$/,
				names: [],
				types: [],
				path: "/cv/+page",
				shadow: null,
				a: [4,5],
				b: [1]
			},
			{
				type: 'page',
				id: "questions/maths",
				pattern: /^\/questions\/maths\/?$/,
				names: [],
				types: [],
				path: "/questions/maths",
				shadow: null,
				a: [0,6,7],
				b: [1]
			},
			{
				type: 'page',
				id: "questions/physics",
				pattern: /^\/questions\/physics\/?$/,
				names: [],
				types: [],
				path: "/questions/physics",
				shadow: null,
				a: [0,8,9],
				b: [1]
			},
			{
				type: 'page',
				id: "questions/maths/question1",
				pattern: /^\/questions\/maths\/question1\/?$/,
				names: [],
				types: [],
				path: "/questions/maths/question1",
				shadow: null,
				a: [0,6,10],
				b: [1]
			},
			{
				type: 'page',
				id: "questions/maths/question2",
				pattern: /^\/questions\/maths\/question2\/?$/,
				names: [],
				types: [],
				path: "/questions/maths/question2",
				shadow: null,
				a: [0,6,11],
				b: [1]
			},
			{
				type: 'page',
				id: "questions/maths/question3",
				pattern: /^\/questions\/maths\/question3\/?$/,
				names: [],
				types: [],
				path: "/questions/maths/question3",
				shadow: null,
				a: [0,6,12],
				b: [1]
			},
			{
				type: 'page',
				id: "questions/maths/question4",
				pattern: /^\/questions\/maths\/question4\/?$/,
				names: [],
				types: [],
				path: "/questions/maths/question4",
				shadow: null,
				a: [0,6,13],
				b: [1]
			},
			{
				type: 'page',
				id: "questions/maths/question5",
				pattern: /^\/questions\/maths\/question5\/?$/,
				names: [],
				types: [],
				path: "/questions/maths/question5",
				shadow: null,
				a: [0,6,14],
				b: [1]
			},
			{
				type: 'page',
				id: "questions/maths/question6",
				pattern: /^\/questions\/maths\/question6\/?$/,
				names: [],
				types: [],
				path: "/questions/maths/question6",
				shadow: null,
				a: [0,6,15],
				b: [1]
			},
			{
				type: 'page',
				id: "questions/physics/question1",
				pattern: /^\/questions\/physics\/question1\/?$/,
				names: [],
				types: [],
				path: "/questions/physics/question1",
				shadow: null,
				a: [0,8,16],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
