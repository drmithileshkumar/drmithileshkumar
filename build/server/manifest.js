const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["app.css","circle_demo/circle.png","circle_demo/circle_anime.mp4","circle_demo/Cone-equation.png","circle_demo/Cone.png","circle_demo/conics.png","circle_demo/Conic_anime.mp4","circle_demo/Conic_deg.mp4","circle_demo/ellipse_anime.mp4","circle_demo/hyperbola_anime.mp4","circle_demo/IIT21Q1.png","circle_demo/orthocenter.png","circle_demo/parabola_anime.mp4","circle_demo/Plane.png","circle_demo/Tangents.png","circle_demo/threepointcircle.png","CMIMedal.jpg","cmithesis.pdf","common.css","dark.css","favicon.png","IITMSc.jpg","LCPath.svg","light.css","mithileshkumar.png","photo_cv.jpg","profilephoto.jpeg","robots copy.txt","robots.txt","santa.svg","svelte-welcome.png","svelte-welcome.webp","thesis.pdf","webdutIcon.png"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".mp4":"video/mp4",".jpg":"image/jpeg",".pdf":"application/pdf",".svg":"image/svg+xml",".jpeg":"image/jpeg",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-5d8b26e5.js","imports":["_app/immutable/start-5d8b26e5.js","_app/immutable/chunks/index-d6181b86.js","_app/immutable/chunks/singletons-7f452f10.js","_app/immutable/chunks/index-2f18dd9f.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/control-f5b05b5f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-9d75117a.js'),
			() => import('./chunks/1-9718e0d6.js'),
			() => import('./chunks/2-d27fa56d.js'),
			() => import('./chunks/3-b6ed5db8.js'),
			() => import('./chunks/4-2affff0e.js'),
			() => import('./chunks/5-1d72b091.js'),
			() => import('./chunks/6-f178bb35.js'),
			() => import('./chunks/7-aa1ff4de.js'),
			() => import('./chunks/8-d633ef75.js'),
			() => import('./chunks/9-03cf002b.js'),
			() => import('./chunks/10-f942f30c.js'),
			() => import('./chunks/11-0e3495da.js'),
			() => import('./chunks/12-6e09e457.js'),
			() => import('./chunks/13-87280300.js'),
			() => import('./chunks/14-f6f31c99.js'),
			() => import('./chunks/15-2be624a4.js'),
			() => import('./chunks/16-b766a941.js'),
			() => import('./chunks/17-92e3ec42.js'),
			() => import('./chunks/18-5b64dc70.js'),
			() => import('./chunks/19-6b6363ef.js'),
			() => import('./chunks/20-c89ba826.js'),
			() => import('./chunks/21-8c1733e4.js'),
			() => import('./chunks/22-8c6ba1e6.js'),
			() => import('./chunks/23-c6b052cf.js'),
			() => import('./chunks/24-83a431e4.js'),
			() => import('./chunks/25-67f924c0.js'),
			() => import('./chunks/26-704eafe3.js'),
			() => import('./chunks/27-a2c2f2a4.js'),
			() => import('./chunks/28-98fae9cd.js'),
			() => import('./chunks/29-2f2d9dac.js'),
			() => import('./chunks/30-ab6ba228.js'),
			() => import('./chunks/31-3800c20a.js'),
			() => import('./chunks/32-7759587e.js'),
			() => import('./chunks/33-0899bdd1.js'),
			() => import('./chunks/34-f9f9e400.js'),
			() => import('./chunks/35-cede4f32.js'),
			() => import('./chunks/36-09fc80b5.js'),
			() => import('./chunks/37-de45460b.js'),
			() => import('./chunks/38-8e7b6c5b.js'),
			() => import('./chunks/39-92698fd2.js'),
			() => import('./chunks/40-7acce2f6.js'),
			() => import('./chunks/41-696f97cb.js'),
			() => import('./chunks/42-255f9270.js'),
			() => import('./chunks/43-66217ddf.js'),
			() => import('./chunks/44-e8f4f67d.js'),
			() => import('./chunks/45-4e147043.js'),
			() => import('./chunks/46-a68057ef.js'),
			() => import('./chunks/47-88657934.js'),
			() => import('./chunks/48-2c285beb.js'),
			() => import('./chunks/49-4e11cdbe.js'),
			() => import('./chunks/50-2c45542a.js'),
			() => import('./chunks/51-553e8093.js'),
			() => import('./chunks/52-49f5dc31.js'),
			() => import('./chunks/53-b4fea8fd.js'),
			() => import('./chunks/54-6c96784f.js'),
			() => import('./chunks/55-cc722061.js'),
			() => import('./chunks/56-3a5089cf.js'),
			() => import('./chunks/57-f490633c.js'),
			() => import('./chunks/58-c94b13b5.js'),
			() => import('./chunks/59-efe9d9f8.js'),
			() => import('./chunks/60-85f81e60.js'),
			() => import('./chunks/61-0d8e6a73.js'),
			() => import('./chunks/62-0a4e3760.js'),
			() => import('./chunks/63-32553845.js'),
			() => import('./chunks/64-f2a29871.js'),
			() => import('./chunks/65-438294a4.js'),
			() => import('./chunks/66-66a80641.js'),
			() => import('./chunks/67-5747c151.js'),
			() => import('./chunks/68-3818af69.js'),
			() => import('./chunks/69-e81e44d3.js'),
			() => import('./chunks/70-ad6b4ebb.js'),
			() => import('./chunks/71-6e15af5a.js'),
			() => import('./chunks/72-ff31e578.js'),
			() => import('./chunks/73-a90e3594.js'),
			() => import('./chunks/74-dc156da6.js'),
			() => import('./chunks/75-43af34dd.js'),
			() => import('./chunks/76-48322c5e.js'),
			() => import('./chunks/77-120956ea.js'),
			() => import('./chunks/78-b23d7269.js'),
			() => import('./chunks/79-a570350b.js'),
			() => import('./chunks/80-bca31a2e.js'),
			() => import('./chunks/81-bb9ce791.js'),
			() => import('./chunks/82-c3cc0039.js'),
			() => import('./chunks/83-8bd22561.js'),
			() => import('./chunks/84-2c8b1982.js'),
			() => import('./chunks/85-0b5f8992.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/cv",
				pattern: /^\/cv\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/iit",
				pattern: /^\/iit\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/iit/maths",
				pattern: /^\/iit\/maths\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021",
				pattern: /^\/iit\/maths\/2021\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021/question1",
				pattern: /^\/iit\/maths\/2021\/question1\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021/question2",
				pattern: /^\/iit\/maths\/2021\/question2\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021/question3",
				pattern: /^\/iit\/maths\/2021\/question3\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021/question4",
				pattern: /^\/iit\/maths\/2021\/question4\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021/question5",
				pattern: /^\/iit\/maths\/2021\/question5\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021/question6",
				pattern: /^\/iit\/maths\/2021\/question6\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/notes",
				pattern: /^\/notes\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 17 },
				endpoint: null
			},
			{
				id: "/notes/maths",
				pattern: /^\/notes\/maths\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/notes/maths/Binomial theorem/Binomial theorem for positive integral indices",
				pattern: /^\/notes\/maths\/Binomial theorem\/Binomial theorem for positive integral indices\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/notes/maths/Binomial theorem/General and middle terms",
				pattern: /^\/notes\/maths\/Binomial theorem\/General and middle terms\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/notes/maths/Complex numbers and quadratic equations/Algebra of complex numbers",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Algebra of complex numbers\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/notes/maths/Complex numbers and quadratic equations/Argand plane and polar representation",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Argand plane and polar representation\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/notes/maths/Complex numbers and quadratic equations/Complex numbers",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Complex numbers\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/notes/maths/Complex numbers and quadratic equations/Quadratic equations",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Quadratic equations\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/notes/maths/Complex numbers and quadratic equations/The modulus and the conjugate of complex number",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/The modulus and the conjugate of complex number\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/notes/maths/Conic sections/Circle",
				pattern: /^\/notes\/maths\/Conic sections\/Circle\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/notes/maths/Conic sections/Ellipse",
				pattern: /^\/notes\/maths\/Conic sections\/Ellipse\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/notes/maths/Conic sections/Hyperbola",
				pattern: /^\/notes\/maths\/Conic sections\/Hyperbola\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/notes/maths/Conic sections/Parabola",
				pattern: /^\/notes\/maths\/Conic sections\/Parabola\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/notes/maths/Conic sections/Sections of a cone",
				pattern: /^\/notes\/maths\/Conic sections\/Sections of a cone\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/notes/maths/Indroduction to 3D geometry/Coordinate axes and coordinate planes in 3D space",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Coordinate axes and coordinate planes in 3D space\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/notes/maths/Indroduction to 3D geometry/Coordinate of a point in space",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Coordinate of a point in space\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/notes/maths/Indroduction to 3D geometry/Distance between two points",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Distance between two points\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/notes/maths/Indroduction to 3D geometry/Section formula",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Section formula\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/notes/maths/Limits and derivatives/Derivatives",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Derivatives\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/notes/maths/Limits and derivatives/Intuitive idea of derivatives",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Intuitive idea of derivatives\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/notes/maths/Limits and derivatives/Limits of Trigonometric functions",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Limits of Trigonometric functions\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/notes/maths/Limits and derivatives/Limits",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Limits\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/notes/maths/Linear inequalities/Graphical solution in two variables",
				pattern: /^\/notes\/maths\/Linear inequalities\/Graphical solution in two variables\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/notes/maths/Linear inequalities/Inequalities",
				pattern: /^\/notes\/maths\/Linear inequalities\/Inequalities\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/notes/maths/Linear inequalities/One variable",
				pattern: /^\/notes\/maths\/Linear inequalities\/One variable\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/notes/maths/Linear inequalities/Solution of system in two variables",
				pattern: /^\/notes\/maths\/Linear inequalities\/Solution of system in two variables\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/notes/maths/Permutations and combinations/Combinations",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Combinations\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/notes/maths/Permutations and combinations/Fundamental principle of counting",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Fundamental principle of counting\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/notes/maths/Permutations and combinations/Permutations",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Permutations\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/notes/maths/Principle of mathematical induction/Motivation",
				pattern: /^\/notes\/maths\/Principle of mathematical induction\/Motivation\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/notes/maths/Principle of mathematical induction/The principle of mathematical induction",
				pattern: /^\/notes\/maths\/Principle of mathematical induction\/The principle of mathematical induction\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/notes/maths/Probability/Axiomatic approach to probability",
				pattern: /^\/notes\/maths\/Probability\/Axiomatic approach to probability\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/notes/maths/Probability/Event",
				pattern: /^\/notes\/maths\/Probability\/Event\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/notes/maths/Probability/Random experiments",
				pattern: /^\/notes\/maths\/Probability\/Random experiments\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/notes/maths/Relations and functions 11/Cartesian product of sets",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Cartesian product of sets\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 52 },
				endpoint: null
			},
			{
				id: "/notes/maths/Relations and functions 11/Functions",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Functions\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 53 },
				endpoint: null
			},
			{
				id: "/notes/maths/Relations and functions 11/Relations",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Relations\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 54 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sequences and series/Arithmetic progression",
				pattern: /^\/notes\/maths\/Sequences and series\/Arithmetic progression\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 55 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sequences and series/Geometric progression",
				pattern: /^\/notes\/maths\/Sequences and series\/Geometric progression\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 56 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sequences and series/Relationship between AM and GM",
				pattern: /^\/notes\/maths\/Sequences and series\/Relationship between AM and GM\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 57 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sequences and series/Sequences",
				pattern: /^\/notes\/maths\/Sequences and series\/Sequences\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 58 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sequences and series/Series",
				pattern: /^\/notes\/maths\/Sequences and series\/Series\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 59 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sequences and series/Sum to n terms of Special series",
				pattern: /^\/notes\/maths\/Sequences and series\/Sum to n terms of Special series\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 60 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Complement of a set",
				pattern: /^\/notes\/maths\/Sets\/Complement of a set\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 61 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Equal sets",
				pattern: /^\/notes\/maths\/Sets\/Equal sets\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 62 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Finite and infinite sets",
				pattern: /^\/notes\/maths\/Sets\/Finite and infinite sets\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 63 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Introduction",
				pattern: /^\/notes\/maths\/Sets\/Introduction\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 64 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Operations on sets",
				pattern: /^\/notes\/maths\/Sets\/Operations on sets\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 65 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Power set",
				pattern: /^\/notes\/maths\/Sets\/Power set\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 66 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Practical problems",
				pattern: /^\/notes\/maths\/Sets\/Practical problems\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 67 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Sets and their representations",
				pattern: /^\/notes\/maths\/Sets\/Sets and their representations\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 68 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Subsets",
				pattern: /^\/notes\/maths\/Sets\/Subsets\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 69 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/The empty set",
				pattern: /^\/notes\/maths\/Sets\/The empty set\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 70 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Universal set",
				pattern: /^\/notes\/maths\/Sets\/Universal set\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 71 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Venn diagrams",
				pattern: /^\/notes\/maths\/Sets\/Venn diagrams\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 72 },
				endpoint: null
			},
			{
				id: "/notes/maths/Statistics/Analysis of frequency distributions",
				pattern: /^\/notes\/maths\/Statistics\/Analysis of frequency distributions\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 73 },
				endpoint: null
			},
			{
				id: "/notes/maths/Statistics/Mean deviation",
				pattern: /^\/notes\/maths\/Statistics\/Mean deviation\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 74 },
				endpoint: null
			},
			{
				id: "/notes/maths/Statistics/Range",
				pattern: /^\/notes\/maths\/Statistics\/Range\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 75 },
				endpoint: null
			},
			{
				id: "/notes/maths/Statistics/Variance and standard deviation",
				pattern: /^\/notes\/maths\/Statistics\/Variance and standard deviation\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 76 },
				endpoint: null
			},
			{
				id: "/notes/maths/Straight lines/Distance of a point from a line",
				pattern: /^\/notes\/maths\/Straight lines\/Distance of a point from a line\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 77 },
				endpoint: null
			},
			{
				id: "/notes/maths/Straight lines/General equation of a line",
				pattern: /^\/notes\/maths\/Straight lines\/General equation of a line\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 78 },
				endpoint: null
			},
			{
				id: "/notes/maths/Straight lines/Slope of a line",
				pattern: /^\/notes\/maths\/Straight lines\/Slope of a line\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 79 },
				endpoint: null
			},
			{
				id: "/notes/maths/Straight lines/Various forms of the equation of a line",
				pattern: /^\/notes\/maths\/Straight lines\/Various forms of the equation of a line\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 80 },
				endpoint: null
			},
			{
				id: "/notes/maths/Trigonometric functions/Angles",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Angles\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 81 },
				endpoint: null
			},
			{
				id: "/notes/maths/Trigonometric functions/Trigonometric equations",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric equations\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 82 },
				endpoint: null
			},
			{
				id: "/notes/maths/Trigonometric functions/Trigonometric functions of sum and difference of two angles",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric functions of sum and difference of two angles\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 84 },
				endpoint: null
			},
			{
				id: "/notes/maths/Trigonometric functions/Trigonometric functions",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric functions\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 83 },
				endpoint: null
			},
			{
				id: "/notes/maths/conic",
				pattern: /^\/notes\/maths\/conic\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/practice",
				pattern: /^\/practice\/?$/,
				params: [],
				page: { layouts: [0,5], errors: [1,,], leaf: 85 },
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
