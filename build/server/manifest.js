const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["CMIMedal.jpg","IITMSc.jpg","LCPath.svg","app.css","background.svg","circle_demo/Cone-equation.png","circle_demo/Cone.png","circle_demo/Conic_anime.mp4","circle_demo/Conic_deg.mp4","circle_demo/IIT21Q1.png","circle_demo/Plane.png","circle_demo/Tangents.png","circle_demo/circle.png","circle_demo/circle_anime.mp4","circle_demo/conics.png","circle_demo/ellipse_anime.mp4","circle_demo/hyperbola_anime.mp4","circle_demo/orthocenter.png","circle_demo/parabola_anime.mp4","circle_demo/threepointcircle.png","cmithesis.pdf","common.css","dark.css","favicon.png","light.css","mithileshkumar.png","notes/maths/sets/equal/thumbnail.svg","notes/maths/sets/finite/thumbnail.svg","notes/maths/sets/introduction/example.svg","notes/maths/sets/introduction/oddeven.svg","notes/maths/sets/real/interval.svg","notes/maths/sets/real/subsetreal.svg","notes/maths/sets/representation/heroparadox.svg","notes/maths/sets/subsets/thumbnail.svg","notes/maths/sets/subsets/tree.svg","notes/quantum/CNOT.svg","notes/quantum/qubit2d.svg","notes/quantum/teleportation.svg","photo_cv.jpg","profilephoto.jpeg","robots copy.txt","robots.txt","santa.svg","svelte-welcome.png","svelte-welcome.webp","thesis.pdf","webdutIcon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".css":"text/css",".png":"image/png",".mp4":"video/mp4",".pdf":"application/pdf",".jpeg":"image/jpeg",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-b822e8b7.js","imports":["_app/immutable/start-b822e8b7.js","_app/immutable/chunks/index-a6a7ad2f.js","_app/immutable/chunks/singletons-2210570e.js","_app/immutable/chunks/index-b1bbdf52.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/control-e7f5239e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-5f73a84b.js'),
			() => import('./chunks/1-b3263478.js'),
			() => import('./chunks/2-40447e78.js'),
			() => import('./chunks/3-fc74e9cd.js'),
			() => import('./chunks/4-2bac5e8a.js'),
			() => import('./chunks/5-4eab965b.js'),
			() => import('./chunks/6-27032566.js'),
			() => import('./chunks/7-9b584246.js'),
			() => import('./chunks/8-821097ab.js'),
			() => import('./chunks/9-57c0b09e.js'),
			() => import('./chunks/10-1f747515.js'),
			() => import('./chunks/11-157452e4.js'),
			() => import('./chunks/12-eec37e62.js'),
			() => import('./chunks/13-fbec718b.js'),
			() => import('./chunks/14-804ce3b9.js'),
			() => import('./chunks/15-af07f354.js'),
			() => import('./chunks/16-44cf5ee9.js'),
			() => import('./chunks/17-45d3cb7a.js'),
			() => import('./chunks/18-49ebbea4.js'),
			() => import('./chunks/19-7997174f.js'),
			() => import('./chunks/20-cc072b9b.js'),
			() => import('./chunks/21-7749265b.js'),
			() => import('./chunks/22-7d0eccd2.js'),
			() => import('./chunks/23-05b51060.js'),
			() => import('./chunks/24-fb92b97b.js'),
			() => import('./chunks/25-a6f5aa39.js'),
			() => import('./chunks/26-53ff9dad.js'),
			() => import('./chunks/27-c5e75cce.js'),
			() => import('./chunks/28-ebe8a373.js'),
			() => import('./chunks/29-3967d8e3.js'),
			() => import('./chunks/30-72f9c71c.js'),
			() => import('./chunks/31-44ea057b.js'),
			() => import('./chunks/32-de542032.js'),
			() => import('./chunks/33-0c163a79.js'),
			() => import('./chunks/34-b37aaa48.js'),
			() => import('./chunks/35-61350bbf.js'),
			() => import('./chunks/36-f3a76079.js'),
			() => import('./chunks/37-1f313f18.js'),
			() => import('./chunks/38-c18b581c.js'),
			() => import('./chunks/39-92d543a2.js'),
			() => import('./chunks/40-fee85cbe.js'),
			() => import('./chunks/41-3241f2a0.js'),
			() => import('./chunks/42-fae6c883.js'),
			() => import('./chunks/43-e4d9afdc.js'),
			() => import('./chunks/44-ad96f109.js'),
			() => import('./chunks/45-54dc9d95.js'),
			() => import('./chunks/46-32720a68.js'),
			() => import('./chunks/47-115203a1.js'),
			() => import('./chunks/48-50a44e71.js'),
			() => import('./chunks/49-f619ec63.js'),
			() => import('./chunks/50-240c9498.js'),
			() => import('./chunks/51-9b536944.js'),
			() => import('./chunks/52-6a8ee72d.js'),
			() => import('./chunks/53-ceaf25a3.js'),
			() => import('./chunks/54-231e3014.js'),
			() => import('./chunks/55-26887047.js'),
			() => import('./chunks/56-69c7ca83.js'),
			() => import('./chunks/57-4ea1b2e2.js'),
			() => import('./chunks/58-351e48eb.js'),
			() => import('./chunks/59-5b219d49.js'),
			() => import('./chunks/60-132a2017.js'),
			() => import('./chunks/61-4308ba40.js'),
			() => import('./chunks/62-4c5ad8fa.js'),
			() => import('./chunks/63-31102277.js'),
			() => import('./chunks/64-5c7f4914.js'),
			() => import('./chunks/65-a860b601.js'),
			() => import('./chunks/66-0b956763.js'),
			() => import('./chunks/67-91f7423b.js'),
			() => import('./chunks/68-99f8304d.js'),
			() => import('./chunks/69-be1016d2.js'),
			() => import('./chunks/70-8d3022ef.js'),
			() => import('./chunks/71-e1a1a05e.js'),
			() => import('./chunks/72-441cda70.js'),
			() => import('./chunks/73-6372eb53.js'),
			() => import('./chunks/74-2e5c433c.js'),
			() => import('./chunks/75-1ba89264.js'),
			() => import('./chunks/76-111d1c33.js'),
			() => import('./chunks/77-1280186c.js'),
			() => import('./chunks/78-85916458.js'),
			() => import('./chunks/79-cac16685.js'),
			() => import('./chunks/80-33ddc33f.js'),
			() => import('./chunks/81-a2fcea24.js'),
			() => import('./chunks/82-04adbe48.js'),
			() => import('./chunks/83-bad0e40a.js'),
			() => import('./chunks/84-8f74e907.js'),
			() => import('./chunks/85-c3756941.js'),
			() => import('./chunks/86-340b2237.js'),
			() => import('./chunks/87-57e2f0f2.js'),
			() => import('./chunks/88-2f3414c0.js'),
			() => import('./chunks/89-62e0080c.js'),
			() => import('./chunks/90-03aaca84.js'),
			() => import('./chunks/91-d81649f6.js'),
			() => import('./chunks/92-a2058ae0.js'),
			() => import('./chunks/93-825f1554.js'),
			() => import('./chunks/94-d7d186a2.js'),
			() => import('./chunks/95-7636d4e4.js'),
			() => import('./chunks/96-6f1370fa.js'),
			() => import('./chunks/97-508c46be.js'),
			() => import('./chunks/98-2cc0a55b.js'),
			() => import('./chunks/99-eb9c1988.js'),
			() => import('./chunks/100-a5dd883c.js'),
			() => import('./chunks/101-2a7c42d5.js'),
			() => import('./chunks/102-31bb74b1.js'),
			() => import('./chunks/103-48380a02.js'),
			() => import('./chunks/104-c042325e.js'),
			() => import('./chunks/105-47e904df.js'),
			() => import('./chunks/106-1f587042.js'),
			() => import('./chunks/107-0016e6fa.js'),
			() => import('./chunks/108-367ef0d9.js'),
			() => import('./chunks/109-21681f5c.js'),
			() => import('./chunks/110-d30e2ace.js'),
			() => import('./chunks/111-2bf96585.js'),
			() => import('./chunks/112-1136551f.js'),
			() => import('./chunks/113-dd2a5f72.js'),
			() => import('./chunks/114-f3b083fa.js'),
			() => import('./chunks/115-58c66d9d.js'),
			() => import('./chunks/116-db26b755.js'),
			() => import('./chunks/117-c172ca31.js'),
			() => import('./chunks/118-6e81df63.js'),
			() => import('./chunks/119-7002a11d.js'),
			() => import('./chunks/120-088609f0.js'),
			() => import('./chunks/121-5054b186.js'),
			() => import('./chunks/122-596b9f81.js'),
			() => import('./chunks/123-583acb34.js'),
			() => import('./chunks/124-ee0b25d4.js'),
			() => import('./chunks/125-f55ae325.js'),
			() => import('./chunks/126-9187c927.js'),
			() => import('./chunks/127-e55fda6b.js'),
			() => import('./chunks/128-8eab43e6.js'),
			() => import('./chunks/129-60e1f90e.js'),
			() => import('./chunks/130-049f8311.js'),
			() => import('./chunks/131-c5c180c1.js'),
			() => import('./chunks/132-a105aefb.js'),
			() => import('./chunks/133-6904c5dd.js'),
			() => import('./chunks/134-12013aa9.js'),
			() => import('./chunks/135-757b9906.js'),
			() => import('./chunks/136-f4212e28.js'),
			() => import('./chunks/137-fbd89c64.js'),
			() => import('./chunks/138-a82ff235.js'),
			() => import('./chunks/139-66cddddb.js'),
			() => import('./chunks/140-09b96f82.js'),
			() => import('./chunks/141-7e717d31.js'),
			() => import('./chunks/142-b98bb202.js'),
			() => import('./chunks/143-32818ae6.js'),
			() => import('./chunks/144-117cad6b.js'),
			() => import('./chunks/145-8a5a3e15.js'),
			() => import('./chunks/146-ebb6bd9d.js'),
			() => import('./chunks/147-01071c0e.js'),
			() => import('./chunks/148-64297166.js'),
			() => import('./chunks/149-7a0a72b9.js'),
			() => import('./chunks/150-f65d6fa1.js'),
			() => import('./chunks/151-b7847d02.js'),
			() => import('./chunks/152-66beb503.js'),
			() => import('./chunks/153-f8e15062.js'),
			() => import('./chunks/154-6175d500.js'),
			() => import('./chunks/155-bcc8fef5.js'),
			() => import('./chunks/156-2b28f079.js'),
			() => import('./chunks/157-dcf233f5.js'),
			() => import('./chunks/158-1c53cb30.js'),
			() => import('./chunks/159-4ae96281.js'),
			() => import('./chunks/160-033243e5.js'),
			() => import('./chunks/161-1b39cee3.js'),
			() => import('./chunks/162-8555e103.js'),
			() => import('./chunks/163-eee08505.js'),
			() => import('./chunks/164-4174a1fa.js'),
			() => import('./chunks/165-3396b6d1.js'),
			() => import('./chunks/166-79655811.js'),
			() => import('./chunks/167-e38144d5.js'),
			() => import('./chunks/168-a093da3e.js'),
			() => import('./chunks/169-fb81cbad.js'),
			() => import('./chunks/170-8434bbfe.js'),
			() => import('./chunks/171-36a20da6.js'),
			() => import('./chunks/172-8d043077.js'),
			() => import('./chunks/173-a489ca72.js'),
			() => import('./chunks/174-6ba09c30.js'),
			() => import('./chunks/175-2d8e9590.js'),
			() => import('./chunks/176-156f660e.js'),
			() => import('./chunks/177-1834dfaf.js'),
			() => import('./chunks/178-ce3af152.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 21 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 22 },
				endpoint: null
			},
			{
				id: "/cv",
				pattern: /^\/cv\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/iit",
				pattern: /^\/iit\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 24 },
				endpoint: null
			},
			{
				id: "/iit/maths",
				pattern: /^\/iit\/maths\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 25 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021",
				pattern: /^\/iit\/maths\/2021\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021/question1",
				pattern: /^\/iit\/maths\/2021\/question1\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021/question2",
				pattern: /^\/iit\/maths\/2021\/question2\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021/question3",
				pattern: /^\/iit\/maths\/2021\/question3\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021/question4",
				pattern: /^\/iit\/maths\/2021\/question4\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021/question5",
				pattern: /^\/iit\/maths\/2021\/question5\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/iit/maths/2021/question6",
				pattern: /^\/iit\/maths\/2021\/question6\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/notes",
				pattern: /^\/notes\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,4], leaf: 33 },
				endpoint: null
			},
			{
				id: "/notes/maths",
				pattern: /^\/notes\/maths\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 34 },
				endpoint: null
			},
			{
				id: "/notes/maths/Application of derivatives/Approximations",
				pattern: /^\/notes\/maths\/Application of derivatives\/Approximations\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 35 },
				endpoint: null
			},
			{
				id: "/notes/maths/Application of derivatives/Increasing and decreasing functions",
				pattern: /^\/notes\/maths\/Application of derivatives\/Increasing and decreasing functions\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 36 },
				endpoint: null
			},
			{
				id: "/notes/maths/Application of derivatives/Maxima and minima",
				pattern: /^\/notes\/maths\/Application of derivatives\/Maxima and minima\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 37 },
				endpoint: null
			},
			{
				id: "/notes/maths/Application of derivatives/Rate of change of quantities",
				pattern: /^\/notes\/maths\/Application of derivatives\/Rate of change of quantities\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 38 },
				endpoint: null
			},
			{
				id: "/notes/maths/Application of derivatives/Tangents and normals",
				pattern: /^\/notes\/maths\/Application of derivatives\/Tangents and normals\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 39 },
				endpoint: null
			},
			{
				id: "/notes/maths/Application of integrals/Area between two curves",
				pattern: /^\/notes\/maths\/Application of integrals\/Area between two curves\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 40 },
				endpoint: null
			},
			{
				id: "/notes/maths/Application of integrals/Area under simple curves",
				pattern: /^\/notes\/maths\/Application of integrals\/Area under simple curves\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 41 },
				endpoint: null
			},
			{
				id: "/notes/maths/Binomial theorem/Binomial theorem for positive integral indices",
				pattern: /^\/notes\/maths\/Binomial theorem\/Binomial theorem for positive integral indices\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 42 },
				endpoint: null
			},
			{
				id: "/notes/maths/Binomial theorem/General and middle terms",
				pattern: /^\/notes\/maths\/Binomial theorem\/General and middle terms\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 43 },
				endpoint: null
			},
			{
				id: "/notes/maths/Complex numbers and quadratic equations/Algebra of complex numbers",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Algebra of complex numbers\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 44 },
				endpoint: null
			},
			{
				id: "/notes/maths/Complex numbers and quadratic equations/Argand plane and polar representation",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Argand plane and polar representation\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 45 },
				endpoint: null
			},
			{
				id: "/notes/maths/Complex numbers and quadratic equations/Complex numbers",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Complex numbers\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 46 },
				endpoint: null
			},
			{
				id: "/notes/maths/Complex numbers and quadratic equations/Quadratic equations",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Quadratic equations\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 47 },
				endpoint: null
			},
			{
				id: "/notes/maths/Complex numbers and quadratic equations/The modulus and the conjugate of complex number",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/The modulus and the conjugate of complex number\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 48 },
				endpoint: null
			},
			{
				id: "/notes/maths/Conic sections/Circle",
				pattern: /^\/notes\/maths\/Conic sections\/Circle\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 49 },
				endpoint: null
			},
			{
				id: "/notes/maths/Conic sections/Ellipse",
				pattern: /^\/notes\/maths\/Conic sections\/Ellipse\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 50 },
				endpoint: null
			},
			{
				id: "/notes/maths/Conic sections/Hyperbola",
				pattern: /^\/notes\/maths\/Conic sections\/Hyperbola\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 51 },
				endpoint: null
			},
			{
				id: "/notes/maths/Conic sections/Parabola",
				pattern: /^\/notes\/maths\/Conic sections\/Parabola\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 52 },
				endpoint: null
			},
			{
				id: "/notes/maths/Conic sections/Sections of a cone",
				pattern: /^\/notes\/maths\/Conic sections\/Sections of a cone\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 53 },
				endpoint: null
			},
			{
				id: "/notes/maths/Continuity and differentiability/Continuity",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Continuity\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 54 },
				endpoint: null
			},
			{
				id: "/notes/maths/Continuity and differentiability/Derivatives of functions in parametric forms",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Derivatives of functions in parametric forms\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 55 },
				endpoint: null
			},
			{
				id: "/notes/maths/Continuity and differentiability/Differentiability",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Differentiability\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 56 },
				endpoint: null
			},
			{
				id: "/notes/maths/Continuity and differentiability/Exponential and logarithmic functions",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Exponential and logarithmic functions\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 57 },
				endpoint: null
			},
			{
				id: "/notes/maths/Continuity and differentiability/Logarithmic differentiation",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Logarithmic differentiation\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 58 },
				endpoint: null
			},
			{
				id: "/notes/maths/Continuity and differentiability/Mean value theorem",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Mean value theorem\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 59 },
				endpoint: null
			},
			{
				id: "/notes/maths/Continuity and differentiability/Second order derivative",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Second order derivative\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 60 },
				endpoint: null
			},
			{
				id: "/notes/maths/Determinants/Adjoint and inverse of a matrix",
				pattern: /^\/notes\/maths\/Determinants\/Adjoint and inverse of a matrix\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 61 },
				endpoint: null
			},
			{
				id: "/notes/maths/Determinants/Applications of determinants and matrices",
				pattern: /^\/notes\/maths\/Determinants\/Applications of determinants and matrices\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 62 },
				endpoint: null
			},
			{
				id: "/notes/maths/Determinants/Area of a triangle",
				pattern: /^\/notes\/maths\/Determinants\/Area of a triangle\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 63 },
				endpoint: null
			},
			{
				id: "/notes/maths/Determinants/Determinant",
				pattern: /^\/notes\/maths\/Determinants\/Determinant\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 64 },
				endpoint: null
			},
			{
				id: "/notes/maths/Determinants/Minors and cofactors",
				pattern: /^\/notes\/maths\/Determinants\/Minors and cofactors\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 65 },
				endpoint: null
			},
			{
				id: "/notes/maths/Determinants/Properties of determinants",
				pattern: /^\/notes\/maths\/Determinants\/Properties of determinants\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 66 },
				endpoint: null
			},
			{
				id: "/notes/maths/Differential equations/Basic concepts",
				pattern: /^\/notes\/maths\/Differential equations\/Basic concepts\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 67 },
				endpoint: null
			},
			{
				id: "/notes/maths/Differential equations/Formation of a differential equation whose general solution is given",
				pattern: /^\/notes\/maths\/Differential equations\/Formation of a differential equation whose general solution is given\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 68 },
				endpoint: null
			},
			{
				id: "/notes/maths/Differential equations/General and particular solutions of a differential equation",
				pattern: /^\/notes\/maths\/Differential equations\/General and particular solutions of a differential equation\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 69 },
				endpoint: null
			},
			{
				id: "/notes/maths/Differential equations/Methods of solving first order first degree differential equations",
				pattern: /^\/notes\/maths\/Differential equations\/Methods of solving first order first degree differential equations\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 70 },
				endpoint: null
			},
			{
				id: "/notes/maths/Indroduction to 3D geometry/Coordinate axes and coordinate planes in 3D space",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Coordinate axes and coordinate planes in 3D space\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 71 },
				endpoint: null
			},
			{
				id: "/notes/maths/Indroduction to 3D geometry/Coordinate of a point in space",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Coordinate of a point in space\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 72 },
				endpoint: null
			},
			{
				id: "/notes/maths/Indroduction to 3D geometry/Distance between two points",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Distance between two points\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 73 },
				endpoint: null
			},
			{
				id: "/notes/maths/Indroduction to 3D geometry/Section formula",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Section formula\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 74 },
				endpoint: null
			},
			{
				id: "/notes/maths/Integrals/Definite integral",
				pattern: /^\/notes\/maths\/Integrals\/Definite integral\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 75 },
				endpoint: null
			},
			{
				id: "/notes/maths/Integrals/Evaluation of definite integrals by substitution",
				pattern: /^\/notes\/maths\/Integrals\/Evaluation of definite integrals by substitution\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 76 },
				endpoint: null
			},
			{
				id: "/notes/maths/Integrals/Fundamental theorem of calculus",
				pattern: /^\/notes\/maths\/Integrals\/Fundamental theorem of calculus\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 77 },
				endpoint: null
			},
			{
				id: "/notes/maths/Integrals/Integrals of some particular functions",
				pattern: /^\/notes\/maths\/Integrals\/Integrals of some particular functions\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 78 },
				endpoint: null
			},
			{
				id: "/notes/maths/Integrals/Integration as an inverse process of differentiation",
				pattern: /^\/notes\/maths\/Integrals\/Integration as an inverse process of differentiation\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 79 },
				endpoint: null
			},
			{
				id: "/notes/maths/Integrals/Integration by partial fractions",
				pattern: /^\/notes\/maths\/Integrals\/Integration by partial fractions\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 80 },
				endpoint: null
			},
			{
				id: "/notes/maths/Integrals/Integration by parts",
				pattern: /^\/notes\/maths\/Integrals\/Integration by parts\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 81 },
				endpoint: null
			},
			{
				id: "/notes/maths/Integrals/Methods of integration",
				pattern: /^\/notes\/maths\/Integrals\/Methods of integration\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 82 },
				endpoint: null
			},
			{
				id: "/notes/maths/Integrals/Some properties of definite integrals",
				pattern: /^\/notes\/maths\/Integrals\/Some properties of definite integrals\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 83 },
				endpoint: null
			},
			{
				id: "/notes/maths/Inverse trigonometric functions/Basic concepts",
				pattern: /^\/notes\/maths\/Inverse trigonometric functions\/Basic concepts\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 84 },
				endpoint: null
			},
			{
				id: "/notes/maths/Inverse trigonometric functions/Properties of inverse trigonometric functions",
				pattern: /^\/notes\/maths\/Inverse trigonometric functions\/Properties of inverse trigonometric functions\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 85 },
				endpoint: null
			},
			{
				id: "/notes/maths/Limits and derivatives/Derivatives",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Derivatives\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 86 },
				endpoint: null
			},
			{
				id: "/notes/maths/Limits and derivatives/Intuitive idea of derivatives",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Intuitive idea of derivatives\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 87 },
				endpoint: null
			},
			{
				id: "/notes/maths/Limits and derivatives/Limits of Trigonometric functions",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Limits of Trigonometric functions\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 89 },
				endpoint: null
			},
			{
				id: "/notes/maths/Limits and derivatives/Limits",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Limits\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 88 },
				endpoint: null
			},
			{
				id: "/notes/maths/Linear inequalities/Graphical solution in two variables",
				pattern: /^\/notes\/maths\/Linear inequalities\/Graphical solution in two variables\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 90 },
				endpoint: null
			},
			{
				id: "/notes/maths/Linear inequalities/Inequalities",
				pattern: /^\/notes\/maths\/Linear inequalities\/Inequalities\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 91 },
				endpoint: null
			},
			{
				id: "/notes/maths/Linear inequalities/One variable",
				pattern: /^\/notes\/maths\/Linear inequalities\/One variable\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 92 },
				endpoint: null
			},
			{
				id: "/notes/maths/Linear inequalities/Solution of system in two variables",
				pattern: /^\/notes\/maths\/Linear inequalities\/Solution of system in two variables\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 93 },
				endpoint: null
			},
			{
				id: "/notes/maths/Linear programming/Different types of linear programming problems",
				pattern: /^\/notes\/maths\/Linear programming\/Different types of linear programming problems\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 94 },
				endpoint: null
			},
			{
				id: "/notes/maths/Linear programming/Linear programming problem and its mathematical formulation",
				pattern: /^\/notes\/maths\/Linear programming\/Linear programming problem and its mathematical formulation\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 95 },
				endpoint: null
			},
			{
				id: "/notes/maths/Matrices/Invertible matrices",
				pattern: /^\/notes\/maths\/Matrices\/Invertible matrices\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 96 },
				endpoint: null
			},
			{
				id: "/notes/maths/Matrices/Matrix",
				pattern: /^\/notes\/maths\/Matrices\/Matrix\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 97 },
				endpoint: null
			},
			{
				id: "/notes/maths/Matrices/Operations on matrices",
				pattern: /^\/notes\/maths\/Matrices\/Operations on matrices\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 98 },
				endpoint: null
			},
			{
				id: "/notes/maths/Matrices/Symmetric and skew symmetric matrices",
				pattern: /^\/notes\/maths\/Matrices\/Symmetric and skew symmetric matrices\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 99 },
				endpoint: null
			},
			{
				id: "/notes/maths/Matrices/Transformation of a matrix",
				pattern: /^\/notes\/maths\/Matrices\/Transformation of a matrix\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 100 },
				endpoint: null
			},
			{
				id: "/notes/maths/Matrices/Transpose of a matrix",
				pattern: /^\/notes\/maths\/Matrices\/Transpose of a matrix\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 101 },
				endpoint: null
			},
			{
				id: "/notes/maths/Matrices/Typse of matrices",
				pattern: /^\/notes\/maths\/Matrices\/Typse of matrices\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 102 },
				endpoint: null
			},
			{
				id: "/notes/maths/Permutations and combinations/Combinations",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Combinations\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 103 },
				endpoint: null
			},
			{
				id: "/notes/maths/Permutations and combinations/Fundamental principle of counting",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Fundamental principle of counting\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 104 },
				endpoint: null
			},
			{
				id: "/notes/maths/Permutations and combinations/Permutations",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Permutations\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 105 },
				endpoint: null
			},
			{
				id: "/notes/maths/Principle of mathematical induction/Motivation",
				pattern: /^\/notes\/maths\/Principle of mathematical induction\/Motivation\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 106 },
				endpoint: null
			},
			{
				id: "/notes/maths/Principle of mathematical induction/The principle of mathematical induction",
				pattern: /^\/notes\/maths\/Principle of mathematical induction\/The principle of mathematical induction\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 107 },
				endpoint: null
			},
			{
				id: "/notes/maths/Probability/Axiomatic approach to probability",
				pattern: /^\/notes\/maths\/Probability\/Axiomatic approach to probability\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 108 },
				endpoint: null
			},
			{
				id: "/notes/maths/Probability/Event",
				pattern: /^\/notes\/maths\/Probability\/Event\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 109 },
				endpoint: null
			},
			{
				id: "/notes/maths/Probability/Random experiments",
				pattern: /^\/notes\/maths\/Probability\/Random experiments\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 110 },
				endpoint: null
			},
			{
				id: "/notes/maths/Relations and functions 11/Cartesian product of sets",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Cartesian product of sets\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 111 },
				endpoint: null
			},
			{
				id: "/notes/maths/Relations and functions 11/Functions",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Functions\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 112 },
				endpoint: null
			},
			{
				id: "/notes/maths/Relations and functions 11/Relations",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Relations\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 113 },
				endpoint: null
			},
			{
				id: "/notes/maths/Relations and functions 12/Binary operations",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Binary operations\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 114 },
				endpoint: null
			},
			{
				id: "/notes/maths/Relations and functions 12/Composition of functions and invertible function",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Composition of functions and invertible function\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 115 },
				endpoint: null
			},
			{
				id: "/notes/maths/Relations and functions 12/Types of functions",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Types of functions\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 116 },
				endpoint: null
			},
			{
				id: "/notes/maths/Relations and functions 12/Types of relations",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Types of relations\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 117 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sequences and series/Arithmetic progression",
				pattern: /^\/notes\/maths\/Sequences and series\/Arithmetic progression\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 118 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sequences and series/Geometric progression",
				pattern: /^\/notes\/maths\/Sequences and series\/Geometric progression\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 119 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sequences and series/Relationship between AM and GM",
				pattern: /^\/notes\/maths\/Sequences and series\/Relationship between AM and GM\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 120 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sequences and series/Sequences",
				pattern: /^\/notes\/maths\/Sequences and series\/Sequences\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 121 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sequences and series/Series",
				pattern: /^\/notes\/maths\/Sequences and series\/Series\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 122 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sequences and series/Sum to n terms of Special series",
				pattern: /^\/notes\/maths\/Sequences and series\/Sum to n terms of Special series\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 123 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Complement of a set",
				pattern: /^\/notes\/maths\/Sets\/Complement of a set\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 124 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Equal sets",
				pattern: /^\/notes\/maths\/Sets\/Equal sets\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 125 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Finite and infinite sets",
				pattern: /^\/notes\/maths\/Sets\/Finite and infinite sets\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 126 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Introduction",
				pattern: /^\/notes\/maths\/Sets\/Introduction\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 127 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Operations on sets",
				pattern: /^\/notes\/maths\/Sets\/Operations on sets\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 128 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Power set",
				pattern: /^\/notes\/maths\/Sets\/Power set\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 129 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Practical problems",
				pattern: /^\/notes\/maths\/Sets\/Practical problems\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 130 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Real numbers",
				pattern: /^\/notes\/maths\/Sets\/Real numbers\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 131 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Sets and their representations",
				pattern: /^\/notes\/maths\/Sets\/Sets and their representations\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 132 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Subsets",
				pattern: /^\/notes\/maths\/Sets\/Subsets\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 133 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/The empty set",
				pattern: /^\/notes\/maths\/Sets\/The empty set\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 134 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Universal set",
				pattern: /^\/notes\/maths\/Sets\/Universal set\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 135 },
				endpoint: null
			},
			{
				id: "/notes/maths/Sets/Venn diagrams",
				pattern: /^\/notes\/maths\/Sets\/Venn diagrams\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 136 },
				endpoint: null
			},
			{
				id: "/notes/maths/Statistics/Analysis of frequency distributions",
				pattern: /^\/notes\/maths\/Statistics\/Analysis of frequency distributions\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 137 },
				endpoint: null
			},
			{
				id: "/notes/maths/Statistics/Mean deviation",
				pattern: /^\/notes\/maths\/Statistics\/Mean deviation\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 138 },
				endpoint: null
			},
			{
				id: "/notes/maths/Statistics/Range",
				pattern: /^\/notes\/maths\/Statistics\/Range\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 139 },
				endpoint: null
			},
			{
				id: "/notes/maths/Statistics/Variance and standard deviation",
				pattern: /^\/notes\/maths\/Statistics\/Variance and standard deviation\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 140 },
				endpoint: null
			},
			{
				id: "/notes/maths/Straight lines/Distance of a point from a line",
				pattern: /^\/notes\/maths\/Straight lines\/Distance of a point from a line\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 141 },
				endpoint: null
			},
			{
				id: "/notes/maths/Straight lines/General equation of a line",
				pattern: /^\/notes\/maths\/Straight lines\/General equation of a line\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 142 },
				endpoint: null
			},
			{
				id: "/notes/maths/Straight lines/Slope of a line",
				pattern: /^\/notes\/maths\/Straight lines\/Slope of a line\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 143 },
				endpoint: null
			},
			{
				id: "/notes/maths/Straight lines/Various forms of the equation of a line",
				pattern: /^\/notes\/maths\/Straight lines\/Various forms of the equation of a line\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 144 },
				endpoint: null
			},
			{
				id: "/notes/maths/Three dimensional geometry/Angle between a line and a plane",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Angle between a line and a plane\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 145 },
				endpoint: null
			},
			{
				id: "/notes/maths/Three dimensional geometry/Angle between two lines",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Angle between two lines\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 146 },
				endpoint: null
			},
			{
				id: "/notes/maths/Three dimensional geometry/Angle between two planes",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Angle between two planes\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 147 },
				endpoint: null
			},
			{
				id: "/notes/maths/Three dimensional geometry/Coplanarity of two lines",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Coplanarity of two lines\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 148 },
				endpoint: null
			},
			{
				id: "/notes/maths/Three dimensional geometry/Direction cosines and direction ratios of a line",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Direction cosines and direction ratios of a line\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 149 },
				endpoint: null
			},
			{
				id: "/notes/maths/Three dimensional geometry/Distance of a point from a plane",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Distance of a point from a plane\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 150 },
				endpoint: null
			},
			{
				id: "/notes/maths/Three dimensional geometry/Equation of a line in space",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Equation of a line in space\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 151 },
				endpoint: null
			},
			{
				id: "/notes/maths/Three dimensional geometry/Plane",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Plane\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 152 },
				endpoint: null
			},
			{
				id: "/notes/maths/Three dimensional geometry/Shortest distance between two lines",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Shortest distance between two lines\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 153 },
				endpoint: null
			},
			{
				id: "/notes/maths/Trigonometric functions/Angles",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Angles\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 154 },
				endpoint: null
			},
			{
				id: "/notes/maths/Trigonometric functions/Trigonometric equations",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric equations\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 155 },
				endpoint: null
			},
			{
				id: "/notes/maths/Trigonometric functions/Trigonometric functions of sum and difference of two angles",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric functions of sum and difference of two angles\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 157 },
				endpoint: null
			},
			{
				id: "/notes/maths/Trigonometric functions/Trigonometric functions",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric functions\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 156 },
				endpoint: null
			},
			{
				id: "/notes/maths/Vector algebra/Addition of vectors",
				pattern: /^\/notes\/maths\/Vector algebra\/Addition of vectors\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 158 },
				endpoint: null
			},
			{
				id: "/notes/maths/Vector algebra/Multiplication of a vector by a scalar",
				pattern: /^\/notes\/maths\/Vector algebra\/Multiplication of a vector by a scalar\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 159 },
				endpoint: null
			},
			{
				id: "/notes/maths/Vector algebra/Product of two vectors",
				pattern: /^\/notes\/maths\/Vector algebra\/Product of two vectors\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 160 },
				endpoint: null
			},
			{
				id: "/notes/maths/Vector algebra/Some basic concepts",
				pattern: /^\/notes\/maths\/Vector algebra\/Some basic concepts\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 161 },
				endpoint: null
			},
			{
				id: "/notes/maths/Vector algebra/Types of vectors",
				pattern: /^\/notes\/maths\/Vector algebra\/Types of vectors\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 162 },
				endpoint: null
			},
			{
				id: "/notes/maths/conic",
				pattern: /^\/notes\/maths\/conic\/?$/,
				params: [],
				page: { layouts: [0,,5], errors: [1,4,6], leaf: 163 },
				endpoint: null
			},
			{
				id: "/notes/quantum",
				pattern: /^\/notes\/quantum\/?$/,
				params: [],
				page: { layouts: [0,,7], errors: [1,4,,], leaf: 164 },
				endpoint: null
			},
			{
				id: "/practice",
				pattern: /^\/practice\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 165 },
				endpoint: null
			},
			{
				id: "/practice/class10",
				pattern: /^\/practice\/class10\/?$/,
				params: [],
				page: { layouts: [0,9], errors: [1,,], leaf: 167 },
				endpoint: null
			},
			{
				id: "/practice/class11",
				pattern: /^\/practice\/class11\/?$/,
				params: [],
				page: { layouts: [0,10], errors: [1,,], leaf: 168 },
				endpoint: null
			},
			{
				id: "/practice/class12",
				pattern: /^\/practice\/class12\/?$/,
				params: [],
				page: { layouts: [0,11], errors: [1,,], leaf: 169 },
				endpoint: null
			},
			{
				id: "/practice/class1",
				pattern: /^\/practice\/class1\/?$/,
				params: [],
				page: { layouts: [0,8], errors: [1,,], leaf: 166 },
				endpoint: null
			},
			{
				id: "/practice/class2",
				pattern: /^\/practice\/class2\/?$/,
				params: [],
				page: { layouts: [0,12], errors: [1,,], leaf: 170 },
				endpoint: null
			},
			{
				id: "/practice/class3",
				pattern: /^\/practice\/class3\/?$/,
				params: [],
				page: { layouts: [0,13], errors: [1,,], leaf: 171 },
				endpoint: null
			},
			{
				id: "/practice/class4",
				pattern: /^\/practice\/class4\/?$/,
				params: [],
				page: { layouts: [0,14], errors: [1,,], leaf: 172 },
				endpoint: null
			},
			{
				id: "/practice/class5",
				pattern: /^\/practice\/class5\/?$/,
				params: [],
				page: { layouts: [0,15], errors: [1,,], leaf: 173 },
				endpoint: null
			},
			{
				id: "/practice/class6",
				pattern: /^\/practice\/class6\/?$/,
				params: [],
				page: { layouts: [0,16], errors: [1,,], leaf: 174 },
				endpoint: null
			},
			{
				id: "/practice/class7",
				pattern: /^\/practice\/class7\/?$/,
				params: [],
				page: { layouts: [0,17], errors: [1,,], leaf: 175 },
				endpoint: null
			},
			{
				id: "/practice/class8",
				pattern: /^\/practice\/class8\/?$/,
				params: [],
				page: { layouts: [0,18], errors: [1,,], leaf: 176 },
				endpoint: null
			},
			{
				id: "/practice/class9",
				pattern: /^\/practice\/class9\/?$/,
				params: [],
				page: { layouts: [0,19], errors: [1,,], leaf: 177 },
				endpoint: null
			},
			{
				id: "/shorts",
				pattern: /^\/shorts\/?$/,
				params: [],
				page: { layouts: [0,20], errors: [1,,], leaf: 178 },
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
