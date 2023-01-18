const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["app.css","circle_demo/circle.png","circle_demo/circle_anime.mp4","circle_demo/Cone-equation.png","circle_demo/Cone.png","circle_demo/conics.png","circle_demo/Conic_anime.mp4","circle_demo/Conic_deg.mp4","circle_demo/ellipse_anime.mp4","circle_demo/hyperbola_anime.mp4","circle_demo/IIT21Q1.png","circle_demo/orthocenter.png","circle_demo/parabola_anime.mp4","circle_demo/Plane.png","circle_demo/Tangents.png","circle_demo/threepointcircle.png","CMIMedal.jpg","cmithesis.pdf","common.css","dark.css","favicon.png","IITMSc.jpg","LCPath.svg","light.css","mithileshkumar.png","notes/maths/sets/finite/thumbnail.svg","notes/maths/sets/introduction/example.svg","notes/maths/sets/introduction/oddeven.svg","notes/maths/sets/representation/heroparadox.svg","notes/quantum/CNOT.svg","notes/quantum/qubit2d.svg","notes/quantum/teleportation.svg","photo_cv.jpg","profilephoto.jpeg","robots copy.txt","robots.txt","santa.svg","svelte-welcome.png","svelte-welcome.webp","thesis.pdf","webdutIcon.png"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".mp4":"video/mp4",".jpg":"image/jpeg",".pdf":"application/pdf",".svg":"image/svg+xml",".jpeg":"image/jpeg",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-8ccdd67c.js","imports":["_app/immutable/start-8ccdd67c.js","_app/immutable/chunks/index-a6a7ad2f.js","_app/immutable/chunks/singletons-2210570e.js","_app/immutable/chunks/index-b1bbdf52.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/control-e7f5239e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-ecbaec22.js'),
			() => import('./chunks/1-b3263478.js'),
			() => import('./chunks/2-40447e78.js'),
			() => import('./chunks/3-99f11fd8.js'),
			() => import('./chunks/4-2bac5e8a.js'),
			() => import('./chunks/5-a4a432c1.js'),
			() => import('./chunks/6-27032566.js'),
			() => import('./chunks/7-301409fa.js'),
			() => import('./chunks/8-54ed0dd3.js'),
			() => import('./chunks/9-758c7da7.js'),
			() => import('./chunks/10-9ba71c97.js'),
			() => import('./chunks/11-59785953.js'),
			() => import('./chunks/12-f95cc321.js'),
			() => import('./chunks/13-db05d22c.js'),
			() => import('./chunks/14-c433ac5e.js'),
			() => import('./chunks/15-8c472c5d.js'),
			() => import('./chunks/16-1eb3308a.js'),
			() => import('./chunks/17-44185877.js'),
			() => import('./chunks/18-34c48f2e.js'),
			() => import('./chunks/19-bc7149eb.js'),
			() => import('./chunks/20-c2e47a05.js'),
			() => import('./chunks/21-2b381e8e.js'),
			() => import('./chunks/22-3902d8b4.js'),
			() => import('./chunks/23-e1878422.js'),
			() => import('./chunks/24-233ecc75.js'),
			() => import('./chunks/25-23128848.js'),
			() => import('./chunks/26-50a6b5bc.js'),
			() => import('./chunks/27-10152ae4.js'),
			() => import('./chunks/28-2e2ff89a.js'),
			() => import('./chunks/29-038be41d.js'),
			() => import('./chunks/30-d7561a85.js'),
			() => import('./chunks/31-b4cb2414.js'),
			() => import('./chunks/32-397849a5.js'),
			() => import('./chunks/33-c7299b18.js'),
			() => import('./chunks/34-bf09d512.js'),
			() => import('./chunks/35-82cbf807.js'),
			() => import('./chunks/36-2faee691.js'),
			() => import('./chunks/37-069c6696.js'),
			() => import('./chunks/38-434354a3.js'),
			() => import('./chunks/39-01458c1a.js'),
			() => import('./chunks/40-917cd092.js'),
			() => import('./chunks/41-16139d2f.js'),
			() => import('./chunks/42-d0d269e2.js'),
			() => import('./chunks/43-733d725b.js'),
			() => import('./chunks/44-2a2fee1c.js'),
			() => import('./chunks/45-145d01df.js'),
			() => import('./chunks/46-a9d25271.js'),
			() => import('./chunks/47-57d42602.js'),
			() => import('./chunks/48-f12de816.js'),
			() => import('./chunks/49-01e7fc99.js'),
			() => import('./chunks/50-4bc2f7c1.js'),
			() => import('./chunks/51-65965000.js'),
			() => import('./chunks/52-6eac72cf.js'),
			() => import('./chunks/53-0e3f62d3.js'),
			() => import('./chunks/54-3b935259.js'),
			() => import('./chunks/55-501601c9.js'),
			() => import('./chunks/56-c150dd42.js'),
			() => import('./chunks/57-1ffceba6.js'),
			() => import('./chunks/58-7a3e0d82.js'),
			() => import('./chunks/59-e976d0a4.js'),
			() => import('./chunks/60-29c631c8.js'),
			() => import('./chunks/61-ee9a2c49.js'),
			() => import('./chunks/62-7f47e529.js'),
			() => import('./chunks/63-0e8cb044.js'),
			() => import('./chunks/64-c6b97523.js'),
			() => import('./chunks/65-c8a2652d.js'),
			() => import('./chunks/66-9368f08b.js'),
			() => import('./chunks/67-c426430a.js'),
			() => import('./chunks/68-5aab9554.js'),
			() => import('./chunks/69-3976c310.js'),
			() => import('./chunks/70-ea4871fd.js'),
			() => import('./chunks/71-6eff0cf4.js'),
			() => import('./chunks/72-26225b62.js'),
			() => import('./chunks/73-0b77bc79.js'),
			() => import('./chunks/74-f050c1c3.js'),
			() => import('./chunks/75-b52b4cd3.js'),
			() => import('./chunks/76-df2753b6.js'),
			() => import('./chunks/77-5b74f746.js'),
			() => import('./chunks/78-f44ece10.js'),
			() => import('./chunks/79-b4aeaf02.js'),
			() => import('./chunks/80-558bd444.js'),
			() => import('./chunks/81-f4de0dfd.js'),
			() => import('./chunks/82-1a7773ae.js'),
			() => import('./chunks/83-e2479ca7.js'),
			() => import('./chunks/84-acc7869b.js'),
			() => import('./chunks/85-c696a3c7.js'),
			() => import('./chunks/86-42de22ea.js'),
			() => import('./chunks/87-2439df90.js'),
			() => import('./chunks/88-a70f6514.js'),
			() => import('./chunks/89-ae45d3b6.js'),
			() => import('./chunks/90-6d67a9fb.js'),
			() => import('./chunks/91-5e8fe5c2.js'),
			() => import('./chunks/92-c664e889.js'),
			() => import('./chunks/93-5b384a51.js'),
			() => import('./chunks/94-779328e3.js'),
			() => import('./chunks/95-660f4d41.js'),
			() => import('./chunks/96-2fbb0597.js'),
			() => import('./chunks/97-b94a255f.js'),
			() => import('./chunks/98-c9d5f364.js'),
			() => import('./chunks/99-6bf0e4f6.js'),
			() => import('./chunks/100-62d1e1cf.js'),
			() => import('./chunks/101-1fed46aa.js'),
			() => import('./chunks/102-0d74339a.js'),
			() => import('./chunks/103-1b0dca8d.js'),
			() => import('./chunks/104-efd17c11.js'),
			() => import('./chunks/105-7a706a23.js'),
			() => import('./chunks/106-941a8dba.js'),
			() => import('./chunks/107-89cd633a.js'),
			() => import('./chunks/108-56e67627.js'),
			() => import('./chunks/109-554f8f22.js'),
			() => import('./chunks/110-1793e32f.js'),
			() => import('./chunks/111-2ee0d0af.js'),
			() => import('./chunks/112-94065ad3.js'),
			() => import('./chunks/113-56c71c65.js'),
			() => import('./chunks/114-58d7aec2.js'),
			() => import('./chunks/115-3f5cf625.js'),
			() => import('./chunks/116-599451b3.js'),
			() => import('./chunks/117-f684b886.js'),
			() => import('./chunks/118-86fa43f0.js'),
			() => import('./chunks/119-a9fcc2d9.js'),
			() => import('./chunks/120-40c25e25.js'),
			() => import('./chunks/121-5c152b49.js'),
			() => import('./chunks/122-ecc6425b.js'),
			() => import('./chunks/123-94aea805.js'),
			() => import('./chunks/124-f88aa7c5.js'),
			() => import('./chunks/125-190fb6d9.js'),
			() => import('./chunks/126-007c4c90.js'),
			() => import('./chunks/127-e973b1bf.js'),
			() => import('./chunks/128-851c2869.js'),
			() => import('./chunks/129-75b44fad.js'),
			() => import('./chunks/130-0dce72be.js'),
			() => import('./chunks/131-bfd8c43c.js'),
			() => import('./chunks/132-2a06e8c5.js'),
			() => import('./chunks/133-06632bbf.js'),
			() => import('./chunks/134-21672683.js'),
			() => import('./chunks/135-b5a50116.js'),
			() => import('./chunks/136-9b93e04d.js'),
			() => import('./chunks/137-19fb2e0c.js'),
			() => import('./chunks/138-772420b6.js'),
			() => import('./chunks/139-1961e32e.js'),
			() => import('./chunks/140-f00809ca.js'),
			() => import('./chunks/141-bbaad98e.js'),
			() => import('./chunks/142-c34aa9e7.js'),
			() => import('./chunks/143-0aa76355.js'),
			() => import('./chunks/144-7120dce2.js'),
			() => import('./chunks/145-c3448c83.js'),
			() => import('./chunks/146-8d1578ae.js'),
			() => import('./chunks/147-9f823e9c.js'),
			() => import('./chunks/148-4ceb5aa7.js'),
			() => import('./chunks/149-752386f1.js'),
			() => import('./chunks/150-1c1f8545.js'),
			() => import('./chunks/151-8473701b.js'),
			() => import('./chunks/152-7bde6528.js')
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
