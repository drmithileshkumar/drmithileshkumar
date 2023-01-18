const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["app.css","circle_demo/circle.png","circle_demo/circle_anime.mp4","circle_demo/Cone-equation.png","circle_demo/Cone.png","circle_demo/conics.png","circle_demo/Conic_anime.mp4","circle_demo/Conic_deg.mp4","circle_demo/ellipse_anime.mp4","circle_demo/hyperbola_anime.mp4","circle_demo/IIT21Q1.png","circle_demo/orthocenter.png","circle_demo/parabola_anime.mp4","circle_demo/Plane.png","circle_demo/Tangents.png","circle_demo/threepointcircle.png","CMIMedal.jpg","cmithesis.pdf","common.css","dark.css","favicon.png","IITMSc.jpg","LCPath.svg","light.css","mithileshkumar.png","notes/maths/sets/equal/thumbnail.svg","notes/maths/sets/finite/thumbnail.svg","notes/maths/sets/introduction/example.svg","notes/maths/sets/introduction/oddeven.svg","notes/maths/sets/representation/heroparadox.svg","notes/quantum/CNOT.svg","notes/quantum/qubit2d.svg","notes/quantum/teleportation.svg","photo_cv.jpg","profilephoto.jpeg","robots copy.txt","robots.txt","santa.svg","svelte-welcome.png","svelte-welcome.webp","thesis.pdf","webdutIcon.png"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".mp4":"video/mp4",".jpg":"image/jpeg",".pdf":"application/pdf",".svg":"image/svg+xml",".jpeg":"image/jpeg",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-ac79bfbc.js","imports":["_app/immutable/start-ac79bfbc.js","_app/immutable/chunks/index-a6a7ad2f.js","_app/immutable/chunks/singletons-2210570e.js","_app/immutable/chunks/index-b1bbdf52.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/control-e7f5239e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-5f73a84b.js'),
			() => import('./chunks/1-b3263478.js'),
			() => import('./chunks/2-40447e78.js'),
			() => import('./chunks/3-3ea9ed90.js'),
			() => import('./chunks/4-2bac5e8a.js'),
			() => import('./chunks/5-083e57f0.js'),
			() => import('./chunks/6-27032566.js'),
			() => import('./chunks/7-972efd0d.js'),
			() => import('./chunks/8-c4faa615.js'),
			() => import('./chunks/9-f5bf5e82.js'),
			() => import('./chunks/10-09b3ec7f.js'),
			() => import('./chunks/11-4d350b37.js'),
			() => import('./chunks/12-f95cc321.js'),
			() => import('./chunks/13-5918e167.js'),
			() => import('./chunks/14-c433ac5e.js'),
			() => import('./chunks/15-2182e5f7.js'),
			() => import('./chunks/16-b5c755a2.js'),
			() => import('./chunks/17-3a1f0fa2.js'),
			() => import('./chunks/18-4d3b92e0.js'),
			() => import('./chunks/19-3e4a796c.js'),
			() => import('./chunks/20-f4998356.js'),
			() => import('./chunks/21-2b381e8e.js'),
			() => import('./chunks/22-7ebed7b4.js'),
			() => import('./chunks/23-512e576c.js'),
			() => import('./chunks/24-528c96a0.js'),
			() => import('./chunks/25-69018da9.js'),
			() => import('./chunks/26-397e53cc.js'),
			() => import('./chunks/27-6ec05569.js'),
			() => import('./chunks/28-5cc09fe3.js'),
			() => import('./chunks/29-c862bb32.js'),
			() => import('./chunks/30-fe96c1d7.js'),
			() => import('./chunks/31-2646d4e3.js'),
			() => import('./chunks/32-7dbe0968.js'),
			() => import('./chunks/33-df8be32a.js'),
			() => import('./chunks/34-0c92b16f.js'),
			() => import('./chunks/35-02b7636d.js'),
			() => import('./chunks/36-396bff7c.js'),
			() => import('./chunks/37-eb7f0a0f.js'),
			() => import('./chunks/38-5f93528d.js'),
			() => import('./chunks/39-1a2e8ae8.js'),
			() => import('./chunks/40-56f207d5.js'),
			() => import('./chunks/41-dcf3ac1b.js'),
			() => import('./chunks/42-3ab37ed1.js'),
			() => import('./chunks/43-0ea0e968.js'),
			() => import('./chunks/44-2ab9c9dd.js'),
			() => import('./chunks/45-fdf0b8ec.js'),
			() => import('./chunks/46-98dc604e.js'),
			() => import('./chunks/47-18b945cd.js'),
			() => import('./chunks/48-180a13c4.js'),
			() => import('./chunks/49-aa210395.js'),
			() => import('./chunks/50-ad3409dd.js'),
			() => import('./chunks/51-66be9e65.js'),
			() => import('./chunks/52-2ab5e9ef.js'),
			() => import('./chunks/53-8625516c.js'),
			() => import('./chunks/54-88a34097.js'),
			() => import('./chunks/55-69a6aceb.js'),
			() => import('./chunks/56-1f7ae126.js'),
			() => import('./chunks/57-c3260783.js'),
			() => import('./chunks/58-8e464723.js'),
			() => import('./chunks/59-97b6211c.js'),
			() => import('./chunks/60-c79b1b97.js'),
			() => import('./chunks/61-80a6c26f.js'),
			() => import('./chunks/62-ede61b0b.js'),
			() => import('./chunks/63-32a91bd8.js'),
			() => import('./chunks/64-b1107598.js'),
			() => import('./chunks/65-4f026ef0.js'),
			() => import('./chunks/66-f7924e09.js'),
			() => import('./chunks/67-0e31c1df.js'),
			() => import('./chunks/68-9162d10a.js'),
			() => import('./chunks/69-4f1abaec.js'),
			() => import('./chunks/70-a5e285c1.js'),
			() => import('./chunks/71-88820f5f.js'),
			() => import('./chunks/72-11e21a54.js'),
			() => import('./chunks/73-693323e1.js'),
			() => import('./chunks/74-6f54b481.js'),
			() => import('./chunks/75-38a92ad5.js'),
			() => import('./chunks/76-a5ed09c9.js'),
			() => import('./chunks/77-425447fc.js'),
			() => import('./chunks/78-337aa75b.js'),
			() => import('./chunks/79-3931fefb.js'),
			() => import('./chunks/80-d738fa71.js'),
			() => import('./chunks/81-130a01ec.js'),
			() => import('./chunks/82-0274d4b1.js'),
			() => import('./chunks/83-d1fe2be5.js'),
			() => import('./chunks/84-058fa630.js'),
			() => import('./chunks/85-a0a199e8.js'),
			() => import('./chunks/86-d2390ea1.js'),
			() => import('./chunks/87-8b5c8a29.js'),
			() => import('./chunks/88-aa5bc927.js'),
			() => import('./chunks/89-8ea104c0.js'),
			() => import('./chunks/90-4554db18.js'),
			() => import('./chunks/91-c9a5f54e.js'),
			() => import('./chunks/92-ac11bf52.js'),
			() => import('./chunks/93-67a5f6b0.js'),
			() => import('./chunks/94-92e05840.js'),
			() => import('./chunks/95-2df3df77.js'),
			() => import('./chunks/96-e4df0069.js'),
			() => import('./chunks/97-c00fa355.js'),
			() => import('./chunks/98-600f959c.js'),
			() => import('./chunks/99-56851c7c.js'),
			() => import('./chunks/100-ad0f90f3.js'),
			() => import('./chunks/101-a49d7ea9.js'),
			() => import('./chunks/102-17578e3a.js'),
			() => import('./chunks/103-d18222c4.js'),
			() => import('./chunks/104-3bfa0c79.js'),
			() => import('./chunks/105-e342c7c8.js'),
			() => import('./chunks/106-f6c4b4af.js'),
			() => import('./chunks/107-9ee77abf.js'),
			() => import('./chunks/108-f3d4015f.js'),
			() => import('./chunks/109-4daa0433.js'),
			() => import('./chunks/110-02f12721.js'),
			() => import('./chunks/111-e0e2aba0.js'),
			() => import('./chunks/112-295cd342.js'),
			() => import('./chunks/113-8a1c8bcf.js'),
			() => import('./chunks/114-412c8b2c.js'),
			() => import('./chunks/115-0e715145.js'),
			() => import('./chunks/116-e11b643e.js'),
			() => import('./chunks/117-7f63271c.js'),
			() => import('./chunks/118-6a52a662.js'),
			() => import('./chunks/119-48473d8f.js'),
			() => import('./chunks/120-cfa6214e.js'),
			() => import('./chunks/121-2e7d54b2.js'),
			() => import('./chunks/122-0a9bd504.js'),
			() => import('./chunks/123-63c9ad54.js'),
			() => import('./chunks/124-9601e4b8.js'),
			() => import('./chunks/125-9478853a.js'),
			() => import('./chunks/126-7617b603.js'),
			() => import('./chunks/127-46f1fde8.js'),
			() => import('./chunks/128-cf1c8e11.js'),
			() => import('./chunks/129-895f4676.js'),
			() => import('./chunks/130-91714dab.js'),
			() => import('./chunks/131-10c35470.js'),
			() => import('./chunks/132-4e97b997.js'),
			() => import('./chunks/133-3eec7a13.js'),
			() => import('./chunks/134-08f83134.js'),
			() => import('./chunks/135-eef3a7c0.js'),
			() => import('./chunks/136-9e6eb2c8.js'),
			() => import('./chunks/137-297e5fb5.js'),
			() => import('./chunks/138-c6b877a6.js'),
			() => import('./chunks/139-6923d0e8.js'),
			() => import('./chunks/140-6a91f990.js'),
			() => import('./chunks/141-0e0b45f3.js'),
			() => import('./chunks/142-c5862786.js'),
			() => import('./chunks/143-179f53bd.js'),
			() => import('./chunks/144-83ccac26.js'),
			() => import('./chunks/145-97585dcd.js'),
			() => import('./chunks/146-2181631e.js'),
			() => import('./chunks/147-cc3e7dbd.js'),
			() => import('./chunks/148-b68d622a.js'),
			() => import('./chunks/149-21459632.js'),
			() => import('./chunks/150-90d5af66.js'),
			() => import('./chunks/151-8193b8d1.js'),
			() => import('./chunks/152-f41bc949.js')
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
