const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["app.css","circle_demo/circle.png","circle_demo/circle_anime.mp4","circle_demo/Cone-equation.png","circle_demo/Cone.png","circle_demo/conics.png","circle_demo/Conic_anime.mp4","circle_demo/Conic_deg.mp4","circle_demo/ellipse_anime.mp4","circle_demo/hyperbola_anime.mp4","circle_demo/IIT21Q1.png","circle_demo/orthocenter.png","circle_demo/parabola_anime.mp4","circle_demo/Plane.png","circle_demo/Tangents.png","circle_demo/threepointcircle.png","CMIMedal.jpg","cmithesis.pdf","common.css","dark.css","favicon.png","IITMSc.jpg","LCPath.svg","light.css","mithileshkumar.png","notes/maths/sets/introduction/example.svg","notes/maths/sets/introduction/oddeven.svg","notes/maths/sets/representation/heroparadox.svg","notes/quantum/CNOT.svg","notes/quantum/qubit2d.svg","notes/quantum/teleportation.svg","photo_cv.jpg","profilephoto.jpeg","robots copy.txt","robots.txt","santa.svg","svelte-welcome.png","svelte-welcome.webp","thesis.pdf","webdutIcon.png"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".mp4":"video/mp4",".jpg":"image/jpeg",".pdf":"application/pdf",".svg":"image/svg+xml",".jpeg":"image/jpeg",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-a434113a.js","imports":["_app/immutable/start-a434113a.js","_app/immutable/chunks/index-9b74571d.js","_app/immutable/chunks/singletons-956b34b2.js","_app/immutable/chunks/index-bf2387e6.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/control-e7f5239e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-ecba5b3d.js'),
			() => import('./chunks/1-d54c2dcb.js'),
			() => import('./chunks/2-4c110539.js'),
			() => import('./chunks/3-bdcbdb59.js'),
			() => import('./chunks/4-793de156.js'),
			() => import('./chunks/5-967fdebe.js'),
			() => import('./chunks/6-abaeafc1.js'),
			() => import('./chunks/7-f4ffae63.js'),
			() => import('./chunks/8-90b498c2.js'),
			() => import('./chunks/9-ff1ec078.js'),
			() => import('./chunks/10-0b61d642.js'),
			() => import('./chunks/11-2ac63e03.js'),
			() => import('./chunks/12-74435e89.js'),
			() => import('./chunks/13-5c3549ab.js'),
			() => import('./chunks/14-fef55260.js'),
			() => import('./chunks/15-33bc2a92.js'),
			() => import('./chunks/16-4ac8bf0e.js'),
			() => import('./chunks/17-ad559bb4.js'),
			() => import('./chunks/18-59b9696c.js'),
			() => import('./chunks/19-b6200ac6.js'),
			() => import('./chunks/20-0018bd70.js'),
			() => import('./chunks/21-3ba70295.js'),
			() => import('./chunks/22-7609fd6b.js'),
			() => import('./chunks/23-f2beb2db.js'),
			() => import('./chunks/24-31ae6d9e.js'),
			() => import('./chunks/25-f0bf5b4b.js'),
			() => import('./chunks/26-3b010380.js'),
			() => import('./chunks/27-7e797660.js'),
			() => import('./chunks/28-7cafd8cb.js'),
			() => import('./chunks/29-1e0d41cc.js'),
			() => import('./chunks/30-21a8c941.js'),
			() => import('./chunks/31-575b3b4a.js'),
			() => import('./chunks/32-58577efa.js'),
			() => import('./chunks/33-eed5ab1d.js'),
			() => import('./chunks/34-fffefd08.js'),
			() => import('./chunks/35-b5b7b5a7.js'),
			() => import('./chunks/36-99bcb79f.js'),
			() => import('./chunks/37-fd50ed17.js'),
			() => import('./chunks/38-f328618d.js'),
			() => import('./chunks/39-bee942ee.js'),
			() => import('./chunks/40-5e09015f.js'),
			() => import('./chunks/41-ab495e33.js'),
			() => import('./chunks/42-21d03418.js'),
			() => import('./chunks/43-49b1beb7.js'),
			() => import('./chunks/44-c0407023.js'),
			() => import('./chunks/45-d8d29a67.js'),
			() => import('./chunks/46-7ba37d93.js'),
			() => import('./chunks/47-bbea075d.js'),
			() => import('./chunks/48-381a1be2.js'),
			() => import('./chunks/49-cbb06cc9.js'),
			() => import('./chunks/50-b6769ebb.js'),
			() => import('./chunks/51-d2c7680e.js'),
			() => import('./chunks/52-60712254.js'),
			() => import('./chunks/53-e77cec31.js'),
			() => import('./chunks/54-85d0819b.js'),
			() => import('./chunks/55-76d52982.js'),
			() => import('./chunks/56-e8d89917.js'),
			() => import('./chunks/57-7cca4044.js'),
			() => import('./chunks/58-db98d618.js'),
			() => import('./chunks/59-8d0cf015.js'),
			() => import('./chunks/60-f3abdf7a.js'),
			() => import('./chunks/61-ff689e73.js'),
			() => import('./chunks/62-5e0903bf.js'),
			() => import('./chunks/63-7c90c42e.js'),
			() => import('./chunks/64-0d30429d.js'),
			() => import('./chunks/65-d94334e0.js'),
			() => import('./chunks/66-7ac180dc.js'),
			() => import('./chunks/67-45f20c6f.js'),
			() => import('./chunks/68-4464c05e.js'),
			() => import('./chunks/69-19a47355.js'),
			() => import('./chunks/70-211efebf.js'),
			() => import('./chunks/71-0fdf01e6.js'),
			() => import('./chunks/72-0f072e95.js'),
			() => import('./chunks/73-a015279d.js'),
			() => import('./chunks/74-ef6c9d19.js'),
			() => import('./chunks/75-57dcd91b.js'),
			() => import('./chunks/76-1e613ff1.js'),
			() => import('./chunks/77-f6d23bd1.js'),
			() => import('./chunks/78-b57dbfaf.js'),
			() => import('./chunks/79-e9034c2d.js'),
			() => import('./chunks/80-67d81f8a.js'),
			() => import('./chunks/81-5bfcc1e3.js'),
			() => import('./chunks/82-e823ea4e.js'),
			() => import('./chunks/83-77d59270.js'),
			() => import('./chunks/84-a121770f.js'),
			() => import('./chunks/85-c20a5020.js'),
			() => import('./chunks/86-377c9b44.js'),
			() => import('./chunks/87-7d0241cb.js'),
			() => import('./chunks/88-92229fda.js'),
			() => import('./chunks/89-71209649.js'),
			() => import('./chunks/90-0105f7bc.js'),
			() => import('./chunks/91-30ccbfe9.js'),
			() => import('./chunks/92-09aa3a76.js'),
			() => import('./chunks/93-837c0e40.js'),
			() => import('./chunks/94-e9a6d3f8.js'),
			() => import('./chunks/95-da1b8804.js'),
			() => import('./chunks/96-b98e685a.js'),
			() => import('./chunks/97-ea49eb2c.js'),
			() => import('./chunks/98-3954a7e2.js'),
			() => import('./chunks/99-ba62e652.js'),
			() => import('./chunks/100-a5ecbbab.js'),
			() => import('./chunks/101-4061c362.js'),
			() => import('./chunks/102-8e94efe8.js'),
			() => import('./chunks/103-b6c64474.js'),
			() => import('./chunks/104-95a53561.js'),
			() => import('./chunks/105-f4061ed2.js'),
			() => import('./chunks/106-807553bc.js'),
			() => import('./chunks/107-45a9c6f6.js'),
			() => import('./chunks/108-5ee56d75.js'),
			() => import('./chunks/109-28a25d79.js'),
			() => import('./chunks/110-54cec60b.js'),
			() => import('./chunks/111-1d7fd8d7.js'),
			() => import('./chunks/112-16865984.js'),
			() => import('./chunks/113-3f952369.js'),
			() => import('./chunks/114-a3ec565b.js'),
			() => import('./chunks/115-8dc1cbd4.js'),
			() => import('./chunks/116-c536b7b9.js'),
			() => import('./chunks/117-a90aa6ba.js'),
			() => import('./chunks/118-885939a8.js'),
			() => import('./chunks/119-8e670f63.js'),
			() => import('./chunks/120-674fdd9a.js'),
			() => import('./chunks/121-834850c9.js'),
			() => import('./chunks/122-ea732d8c.js'),
			() => import('./chunks/123-ee1040f2.js'),
			() => import('./chunks/124-fff1b2d4.js'),
			() => import('./chunks/125-17d3b841.js'),
			() => import('./chunks/126-5da955e7.js'),
			() => import('./chunks/127-bd63a703.js'),
			() => import('./chunks/128-d117c079.js'),
			() => import('./chunks/129-8dc99e4c.js'),
			() => import('./chunks/130-8376b02d.js'),
			() => import('./chunks/131-e04b565f.js'),
			() => import('./chunks/132-e533aa5d.js'),
			() => import('./chunks/133-1528b777.js'),
			() => import('./chunks/134-8fef1b35.js'),
			() => import('./chunks/135-80816a0f.js'),
			() => import('./chunks/136-e353889c.js'),
			() => import('./chunks/137-e8f11f22.js'),
			() => import('./chunks/138-53605f64.js'),
			() => import('./chunks/139-f79cc2b6.js'),
			() => import('./chunks/140-b437324e.js'),
			() => import('./chunks/141-bc18c0a0.js'),
			() => import('./chunks/142-00f75093.js'),
			() => import('./chunks/143-0dc7960f.js'),
			() => import('./chunks/144-5b5f8c08.js'),
			() => import('./chunks/145-f033bd45.js'),
			() => import('./chunks/146-18acafd1.js'),
			() => import('./chunks/147-68ac5330.js'),
			() => import('./chunks/148-346e9fd0.js'),
			() => import('./chunks/149-3c85d78a.js'),
			() => import('./chunks/150-bae66d25.js'),
			() => import('./chunks/151-2f3428cf.js'),
			() => import('./chunks/152-46f054ca.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/cv",
				pattern: /^\/cv\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/iit",
				pattern: /^\/iit\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/iit/maths",
				pattern: /^\/iit\/maths\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021",
				pattern: /^\/iit\/maths\/2021\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021/question1",
				pattern: /^\/iit\/maths\/2021\/question1\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021/question2",
				pattern: /^\/iit\/maths\/2021\/question2\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021/question3",
				pattern: /^\/iit\/maths\/2021\/question3\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021/question4",
				pattern: /^\/iit\/maths\/2021\/question4\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021/question5",
				pattern: /^\/iit\/maths\/2021\/question5\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021/question6",
				pattern: /^\/iit\/maths\/2021\/question6\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/notes",
				pattern: /^\/notes\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,4], leaf: 21 },
				endpoint: null
			},
			{
				id: "/notes/maths",
				pattern: /^\/notes\/maths\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 22 },
				endpoint: null
			},
			{
				id: "/notes/maths/Application of derivatives/Approximations",
				pattern: /^\/notes\/maths\/Application of derivatives\/Approximations\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 23 },
				endpoint: null
			},
			{
				id: "/notes/maths/Application of derivatives/Increasing and decreasing functions",
				pattern: /^\/notes\/maths\/Application of derivatives\/Increasing and decreasing functions\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 24 },
				endpoint: null
			},
			{
				id: "/notes/maths/Application of derivatives/Maxima and minima",
				pattern: /^\/notes\/maths\/Application of derivatives\/Maxima and minima\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 25 },
				endpoint: null
			},
			{
				id: "/notes/maths/Application of derivatives/Rate of change of quantities",
				pattern: /^\/notes\/maths\/Application of derivatives\/Rate of change of quantities\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 26 },
				endpoint: null
			},
			{
				id: "/notes/maths/Application of derivatives/Tangents and normals",
				pattern: /^\/notes\/maths\/Application of derivatives\/Tangents and normals\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 27 },
				endpoint: null
			},
			{
				id: "/notes/maths/Application of integrals/Area between two curves",
				pattern: /^\/notes\/maths\/Application of integrals\/Area between two curves\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 28 },
				endpoint: null
			},
			{
				id: "/notes/maths/Application of integrals/Area under simple curves",
				pattern: /^\/notes\/maths\/Application of integrals\/Area under simple curves\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 29 },
				endpoint: null
			},
			{
				id: "/notes/maths/Binomial theorem/Binomial theorem for positive integral indices",
				pattern: /^\/notes\/maths\/Binomial theorem\/Binomial theorem for positive integral indices\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 30 },
				endpoint: null
			},
			{
				id: "/notes/maths/Binomial theorem/General and middle terms",
				pattern: /^\/notes\/maths\/Binomial theorem\/General and middle terms\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 31 },
				endpoint: null
			},
			{
				id: "/notes/maths/Complex numbers and quadratic equations/Algebra of complex numbers",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Algebra of complex numbers\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 32 },
				endpoint: null
			},
			{
				id: "/notes/maths/Complex numbers and quadratic equations/Argand plane and polar representation",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Argand plane and polar representation\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 33 },
				endpoint: null
			},
			{
				id: "/notes/maths/Complex numbers and quadratic equations/Complex numbers",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Complex numbers\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 34 },
				endpoint: null
			},
			{
				id: "/notes/maths/Complex numbers and quadratic equations/Quadratic equations",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Quadratic equations\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 35 },
				endpoint: null
			},
			{
				id: "/notes/maths/Complex numbers and quadratic equations/The modulus and the conjugate of complex number",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/The modulus and the conjugate of complex number\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 36 },
				endpoint: null
			},
			{
				id: "/notes/maths/Conic sections/Circle",
				pattern: /^\/notes\/maths\/Conic sections\/Circle\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 38 },
				endpoint: null
			},
			{
				id: "/notes/maths/Conic sections/Ellipse",
				pattern: /^\/notes\/maths\/Conic sections\/Ellipse\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 39 },
				endpoint: null
			},
			{
				id: "/notes/maths/Conic sections/Hyperbola",
				pattern: /^\/notes\/maths\/Conic sections\/Hyperbola\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 40 },
				endpoint: null
			},
			{
				id: "/notes/maths/Conic sections/Parabola",
				pattern: /^\/notes\/maths\/Conic sections\/Parabola\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 41 },
				endpoint: null
			},
			{
				id: "/notes/maths/Conic sections/Sections of a cone",
				pattern: /^\/notes\/maths\/Conic sections\/Sections of a cone\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 42 },
				endpoint: null
			},
			{
				id: "/notes/maths/Continuity and differentiability/Continuity",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Continuity\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 43 },
				endpoint: null
			},
			{
				id: "/notes/maths/Continuity and differentiability/Derivatives of functions in parametric forms",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Derivatives of functions in parametric forms\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 44 },
				endpoint: null
			},
			{
				id: "/notes/maths/Continuity and differentiability/Differentiability",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Differentiability\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 45 },
				endpoint: null
			},
			{
				id: "/notes/maths/Continuity and differentiability/Exponential and logarithmic functions",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Exponential and logarithmic functions\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 46 },
				endpoint: null
			},
			{
				id: "/notes/maths/Continuity and differentiability/Logarithmic differentiation",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Logarithmic differentiation\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 47 },
				endpoint: null
			},
			{
				id: "/notes/maths/Continuity and differentiability/Mean value theorem",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Mean value theorem\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 48 },
				endpoint: null
			},
			{
				id: "/notes/maths/Continuity and differentiability/Second order derivative",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Second order derivative\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 49 },
				endpoint: null
			},
			{
				id: "/notes/maths/Determinants/Adjoint and inverse of a matrix",
				pattern: /^\/notes\/maths\/Determinants\/Adjoint and inverse of a matrix\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 50 },
				endpoint: null
			},
			{
				id: "/notes/maths/Determinants/Applications of determinants and matrices",
				pattern: /^\/notes\/maths\/Determinants\/Applications of determinants and matrices\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 51 },
				endpoint: null
			},
			{
				id: "/notes/maths/Determinants/Area of a triangle",
				pattern: /^\/notes\/maths\/Determinants\/Area of a triangle\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 52 },
				endpoint: null
			},
			{
				id: "/notes/maths/Determinants/Determinant",
				pattern: /^\/notes\/maths\/Determinants\/Determinant\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 53 },
				endpoint: null
			},
			{
				id: "/notes/maths/Determinants/Minors and cofactors",
				pattern: /^\/notes\/maths\/Determinants\/Minors and cofactors\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 54 },
				endpoint: null
			},
			{
				id: "/notes/maths/Determinants/Properties of determinants",
				pattern: /^\/notes\/maths\/Determinants\/Properties of determinants\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 55 },
				endpoint: null
			},
			{
				id: "/notes/maths/Differential equations/Basic concepts",
				pattern: /^\/notes\/maths\/Differential equations\/Basic concepts\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 56 },
				endpoint: null
			},
			{
				id: "/notes/maths/Differential equations/Formation of a differential equation whose general solution is given",
				pattern: /^\/notes\/maths\/Differential equations\/Formation of a differential equation whose general solution is given\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 57 },
				endpoint: null
			},
			{
				id: "/notes/maths/Differential equations/General and particular solutions of a differential equation",
				pattern: /^\/notes\/maths\/Differential equations\/General and particular solutions of a differential equation\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 58 },
				endpoint: null
			},
			{
				id: "/notes/maths/Differential equations/Methods of solving first order first degree differential equations",
				pattern: /^\/notes\/maths\/Differential equations\/Methods of solving first order first degree differential equations\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 59 },
				endpoint: null
			},
			{
				id: "/notes/maths/Indroduction to 3D geometry/Coordinate axes and coordinate planes in 3D space",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Coordinate axes and coordinate planes in 3D space\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 60 },
				endpoint: null
			},
			{
				id: "/notes/maths/Indroduction to 3D geometry/Coordinate of a point in space",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Coordinate of a point in space\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 61 },
				endpoint: null
			},
			{
				id: "/notes/maths/Indroduction to 3D geometry/Distance between two points",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Distance between two points\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 62 },
				endpoint: null
			},
			{
				id: "/notes/maths/Indroduction to 3D geometry/Section formula",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Section formula\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 63 },
				endpoint: null
			},
			{
				id: "/notes/maths/Integrals/Definite integral",
				pattern: /^\/notes\/maths\/Integrals\/Definite integral\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 64 },
				endpoint: null
			},
			{
				id: "/notes/maths/Integrals/Evaluation of definite integrals by substitution",
				pattern: /^\/notes\/maths\/Integrals\/Evaluation of definite integrals by substitution\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 65 },
				endpoint: null
			},
			{
				id: "/notes/maths/Integrals/Fundamental theorem of calculus",
				pattern: /^\/notes\/maths\/Integrals\/Fundamental theorem of calculus\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 66 },
				endpoint: null
			},
			{
				id: "/notes/maths/Integrals/Integrals of some particular functions",
				pattern: /^\/notes\/maths\/Integrals\/Integrals of some particular functions\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 67 },
				endpoint: null
			},
			{
				id: "/notes/maths/Integrals/Integration as an inverse process of differentiation",
				pattern: /^\/notes\/maths\/Integrals\/Integration as an inverse process of differentiation\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 68 },
				endpoint: null
			},
			{
				id: "/notes/maths/Integrals/Integration by partial fractions",
				pattern: /^\/notes\/maths\/Integrals\/Integration by partial fractions\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 69 },
				endpoint: null
			},
			{
				id: "/notes/maths/Integrals/Integration by parts",
				pattern: /^\/notes\/maths\/Integrals\/Integration by parts\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 70 },
				endpoint: null
			},
			{
				id: "/notes/maths/Integrals/Methods of integration",
				pattern: /^\/notes\/maths\/Integrals\/Methods of integration\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 71 },
				endpoint: null
			},
			{
				id: "/notes/maths/Integrals/Some properties of definite integrals",
				pattern: /^\/notes\/maths\/Integrals\/Some properties of definite integrals\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 72 },
				endpoint: null
			},
			{
				id: "/notes/maths/Inverse trigonometric functions/Basic concepts",
				pattern: /^\/notes\/maths\/Inverse trigonometric functions\/Basic concepts\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 73 },
				endpoint: null
			},
			{
				id: "/notes/maths/Inverse trigonometric functions/Properties of inverse trigonometric functions",
				pattern: /^\/notes\/maths\/Inverse trigonometric functions\/Properties of inverse trigonometric functions\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 74 },
				endpoint: null
			},
			{
				id: "/notes/maths/Limits and derivatives/Derivatives",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Derivatives\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 75 },
				endpoint: null
			},
			{
				id: "/notes/maths/Limits and derivatives/Intuitive idea of derivatives",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Intuitive idea of derivatives\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 76 },
				endpoint: null
			},
			{
				id: "/notes/maths/Limits and derivatives/Limits of Trigonometric functions",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Limits of Trigonometric functions\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 78 },
				endpoint: null
			},
			{
				id: "/notes/maths/Limits and derivatives/Limits",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Limits\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 77 },
				endpoint: null
			},
			{
				id: "/notes/maths/Linear inequalities/Graphical solution in two variables",
				pattern: /^\/notes\/maths\/Linear inequalities\/Graphical solution in two variables\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 79 },
				endpoint: null
			},
			{
				id: "/notes/maths/Linear inequalities/Inequalities",
				pattern: /^\/notes\/maths\/Linear inequalities\/Inequalities\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 80 },
				endpoint: null
			},
			{
				id: "/notes/maths/Linear inequalities/One variable",
				pattern: /^\/notes\/maths\/Linear inequalities\/One variable\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 81 },
				endpoint: null
			},
			{
				id: "/notes/maths/Linear inequalities/Solution of system in two variables",
				pattern: /^\/notes\/maths\/Linear inequalities\/Solution of system in two variables\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 82 },
				endpoint: null
			},
			{
				id: "/notes/maths/Linear programming/Different types of linear programming problems",
				pattern: /^\/notes\/maths\/Linear programming\/Different types of linear programming problems\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 83 },
				endpoint: null
			},
			{
				id: "/notes/maths/Linear programming/Linear programming problem and its mathematical formulation",
				pattern: /^\/notes\/maths\/Linear programming\/Linear programming problem and its mathematical formulation\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 84 },
				endpoint: null
			},
			{
				id: "/notes/maths/Matrices/Invertible matrices",
				pattern: /^\/notes\/maths\/Matrices\/Invertible matrices\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 85 },
				endpoint: null
			},
			{
				id: "/notes/maths/Matrices/Matrix",
				pattern: /^\/notes\/maths\/Matrices\/Matrix\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 86 },
				endpoint: null
			},
			{
				id: "/notes/maths/Matrices/Operations on matrices",
				pattern: /^\/notes\/maths\/Matrices\/Operations on matrices\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 87 },
				endpoint: null
			},
			{
				id: "/notes/maths/Matrices/Symmetric and skew symmetric matrices",
				pattern: /^\/notes\/maths\/Matrices\/Symmetric and skew symmetric matrices\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 88 },
				endpoint: null
			},
			{
				id: "/notes/maths/Matrices/Transformation of a matrix",
				pattern: /^\/notes\/maths\/Matrices\/Transformation of a matrix\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 89 },
				endpoint: null
			},
			{
				id: "/notes/maths/Matrices/Transpose of a matrix",
				pattern: /^\/notes\/maths\/Matrices\/Transpose of a matrix\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 90 },
				endpoint: null
			},
			{
				id: "/notes/maths/Matrices/Typse of matrices",
				pattern: /^\/notes\/maths\/Matrices\/Typse of matrices\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 91 },
				endpoint: null
			},
			{
				id: "/notes/maths/Permutations and combinations/Combinations",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Combinations\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 92 },
				endpoint: null
			},
			{
				id: "/notes/maths/Permutations and combinations/Fundamental principle of counting",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Fundamental principle of counting\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 93 },
				endpoint: null
			},
			{
				id: "/notes/maths/Permutations and combinations/Permutations",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Permutations\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 94 },
				endpoint: null
			},
			{
				id: "/notes/maths/Principle of mathematical induction/Motivation",
				pattern: /^\/notes\/maths\/Principle of mathematical induction\/Motivation\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 95 },
				endpoint: null
			},
			{
				id: "/notes/maths/Principle of mathematical induction/The principle of mathematical induction",
				pattern: /^\/notes\/maths\/Principle of mathematical induction\/The principle of mathematical induction\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 96 },
				endpoint: null
			},
			{
				id: "/notes/maths/Probability/Axiomatic approach to probability",
				pattern: /^\/notes\/maths\/Probability\/Axiomatic approach to probability\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 97 },
				endpoint: null
			},
			{
				id: "/notes/maths/Probability/Event",
				pattern: /^\/notes\/maths\/Probability\/Event\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 98 },
				endpoint: null
			},
			{
				id: "/notes/maths/Probability/Random experiments",
				pattern: /^\/notes\/maths\/Probability\/Random experiments\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 99 },
				endpoint: null
			},
			{
				id: "/notes/maths/Relations and functions 11/Cartesian product of sets",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Cartesian product of sets\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 100 },
				endpoint: null
			},
			{
				id: "/notes/maths/Relations and functions 11/Functions",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Functions\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 101 },
				endpoint: null
			},
			{
				id: "/notes/maths/Relations and functions 11/Relations",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Relations\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 102 },
				endpoint: null
			},
			{
				id: "/notes/maths/Relations and functions 12/Binary operations",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Binary operations\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 103 },
				endpoint: null
			},
			{
				id: "/notes/maths/Relations and functions 12/Composition of functions and invertible function",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Composition of functions and invertible function\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 104 },
				endpoint: null
			},
			{
				id: "/notes/maths/Relations and functions 12/Types of functions",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Types of functions\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 105 },
				endpoint: null
			},
			{
				id: "/notes/maths/Relations and functions 12/Types of relations",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Types of relations\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 106 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sequences and series/Arithmetic progression",
				pattern: /^\/notes\/maths\/Sequences and series\/Arithmetic progression\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 107 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sequences and series/Geometric progression",
				pattern: /^\/notes\/maths\/Sequences and series\/Geometric progression\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 108 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sequences and series/Relationship between AM and GM",
				pattern: /^\/notes\/maths\/Sequences and series\/Relationship between AM and GM\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 109 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sequences and series/Sequences",
				pattern: /^\/notes\/maths\/Sequences and series\/Sequences\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 110 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sequences and series/Series",
				pattern: /^\/notes\/maths\/Sequences and series\/Series\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 111 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sequences and series/Sum to n terms of Special series",
				pattern: /^\/notes\/maths\/Sequences and series\/Sum to n terms of Special series\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 112 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Complement of a set",
				pattern: /^\/notes\/maths\/Sets\/Complement of a set\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 113 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Equal sets",
				pattern: /^\/notes\/maths\/Sets\/Equal sets\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 114 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Finite and infinite sets",
				pattern: /^\/notes\/maths\/Sets\/Finite and infinite sets\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 115 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Introduction",
				pattern: /^\/notes\/maths\/Sets\/Introduction\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 116 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Operations on sets",
				pattern: /^\/notes\/maths\/Sets\/Operations on sets\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 117 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Power set",
				pattern: /^\/notes\/maths\/Sets\/Power set\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 118 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Practical problems",
				pattern: /^\/notes\/maths\/Sets\/Practical problems\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 119 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Sets and their representations",
				pattern: /^\/notes\/maths\/Sets\/Sets and their representations\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 120 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Subsets",
				pattern: /^\/notes\/maths\/Sets\/Subsets\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 121 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/The empty set",
				pattern: /^\/notes\/maths\/Sets\/The empty set\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 122 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Universal set",
				pattern: /^\/notes\/maths\/Sets\/Universal set\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 123 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Venn diagrams",
				pattern: /^\/notes\/maths\/Sets\/Venn diagrams\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 124 },
				endpoint: null
			},
			{
				id: "/notes/maths/Statistics/Analysis of frequency distributions",
				pattern: /^\/notes\/maths\/Statistics\/Analysis of frequency distributions\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 125 },
				endpoint: null
			},
			{
				id: "/notes/maths/Statistics/Mean deviation",
				pattern: /^\/notes\/maths\/Statistics\/Mean deviation\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 126 },
				endpoint: null
			},
			{
				id: "/notes/maths/Statistics/Range",
				pattern: /^\/notes\/maths\/Statistics\/Range\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 127 },
				endpoint: null
			},
			{
				id: "/notes/maths/Statistics/Variance and standard deviation",
				pattern: /^\/notes\/maths\/Statistics\/Variance and standard deviation\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 128 },
				endpoint: null
			},
			{
				id: "/notes/maths/Straight lines/Distance of a point from a line",
				pattern: /^\/notes\/maths\/Straight lines\/Distance of a point from a line\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 129 },
				endpoint: null
			},
			{
				id: "/notes/maths/Straight lines/General equation of a line",
				pattern: /^\/notes\/maths\/Straight lines\/General equation of a line\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 130 },
				endpoint: null
			},
			{
				id: "/notes/maths/Straight lines/Slope of a line",
				pattern: /^\/notes\/maths\/Straight lines\/Slope of a line\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 131 },
				endpoint: null
			},
			{
				id: "/notes/maths/Straight lines/Various forms of the equation of a line",
				pattern: /^\/notes\/maths\/Straight lines\/Various forms of the equation of a line\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 132 },
				endpoint: null
			},
			{
				id: "/notes/maths/Three dimensional geometry/Angle between a line and a plane",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Angle between a line and a plane\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 133 },
				endpoint: null
			},
			{
				id: "/notes/maths/Three dimensional geometry/Angle between two lines",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Angle between two lines\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 134 },
				endpoint: null
			},
			{
				id: "/notes/maths/Three dimensional geometry/Angle between two planes",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Angle between two planes\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 135 },
				endpoint: null
			},
			{
				id: "/notes/maths/Three dimensional geometry/Coplanarity of two lines",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Coplanarity of two lines\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 136 },
				endpoint: null
			},
			{
				id: "/notes/maths/Three dimensional geometry/Direction cosines and direction ratios of a line",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Direction cosines and direction ratios of a line\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 137 },
				endpoint: null
			},
			{
				id: "/notes/maths/Three dimensional geometry/Distance of a point from a plane",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Distance of a point from a plane\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 138 },
				endpoint: null
			},
			{
				id: "/notes/maths/Three dimensional geometry/Equation of a line in space",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Equation of a line in space\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 139 },
				endpoint: null
			},
			{
				id: "/notes/maths/Three dimensional geometry/Plane",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Plane\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 140 },
				endpoint: null
			},
			{
				id: "/notes/maths/Three dimensional geometry/Shortest distance between two lines",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Shortest distance between two lines\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 141 },
				endpoint: null
			},
			{
				id: "/notes/maths/Trigonometric functions/Angles",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Angles\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 142 },
				endpoint: null
			},
			{
				id: "/notes/maths/Trigonometric functions/Trigonometric equations",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric equations\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 143 },
				endpoint: null
			},
			{
				id: "/notes/maths/Trigonometric functions/Trigonometric functions of sum and difference of two angles",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric functions of sum and difference of two angles\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 145 },
				endpoint: null
			},
			{
				id: "/notes/maths/Trigonometric functions/Trigonometric functions",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric functions\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 144 },
				endpoint: null
			},
			{
				id: "/notes/maths/Vector algebra/Addition of vectors",
				pattern: /^\/notes\/maths\/Vector algebra\/Addition of vectors\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 146 },
				endpoint: null
			},
			{
				id: "/notes/maths/Vector algebra/Multiplication of a vector by a scalar",
				pattern: /^\/notes\/maths\/Vector algebra\/Multiplication of a vector by a scalar\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 147 },
				endpoint: null
			},
			{
				id: "/notes/maths/Vector algebra/Product of two vectors",
				pattern: /^\/notes\/maths\/Vector algebra\/Product of two vectors\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 148 },
				endpoint: null
			},
			{
				id: "/notes/maths/Vector algebra/Some basic concepts",
				pattern: /^\/notes\/maths\/Vector algebra\/Some basic concepts\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 149 },
				endpoint: null
			},
			{
				id: "/notes/maths/Vector algebra/Types of vectors",
				pattern: /^\/notes\/maths\/Vector algebra\/Types of vectors\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 150 },
				endpoint: null
			},
			{
				id: "/notes/maths/conic",
				pattern: /^\/notes\/maths\/conic\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 37 },
				endpoint: null
			},
			{
				id: "/notes/quantum",
				pattern: /^\/notes\/quantum\/?$/,
				params: [],
				page: { layouts: [0,,7], errors: [1,4,,], leaf: 151 },
				endpoint: null
			},
			{
				id: "/practice",
				pattern: /^\/practice\/?$/,
				params: [],
				page: { layouts: [0,8], errors: [1,,], leaf: 152 },
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
