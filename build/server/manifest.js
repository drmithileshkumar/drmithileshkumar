const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["CMIMedal.jpg","IITMSc.jpg","LCPath.svg","announcement/html.svg","announcement/perspective.svg","app.css","background.svg","circle_demo/Cone-equation.png","circle_demo/Cone.png","circle_demo/Conic_anime.mp4","circle_demo/Conic_deg.mp4","circle_demo/IIT21Q1.png","circle_demo/Plane.png","circle_demo/Tangents.png","circle_demo/circle.png","circle_demo/circle_anime.mp4","circle_demo/conics.png","circle_demo/ellipse_anime.mp4","circle_demo/hyperbola_anime.mp4","circle_demo/orthocenter.png","circle_demo/parabola_anime.mp4","circle_demo/threepointcircle.png","cmithesis.pdf","common.css","custom.css","dark.css","facebook.svg","favicon.png","instagram.svg","light.css","manifest.json","mithileshkumar.png","notes/maths/sets/equal/thumbnail.svg","notes/maths/sets/finite/thumbnail.svg","notes/maths/sets/introduction/example.svg","notes/maths/sets/introduction/oddeven.svg","notes/maths/sets/real/interval.svg","notes/maths/sets/real/subsetreal.svg","notes/maths/sets/representation/heroparadox.svg","notes/maths/sets/subsets/thumbnail.svg","notes/maths/sets/subsets/tree.svg","notes/quantum/CNOT.svg","notes/quantum/qubit2d.svg","notes/quantum/teleportation.svg","photo_cv.jpg","profilephoto.jpeg","robots.txt","santa.svg","smui-dark.css","smui.css","svelte-welcome.png","svelte-welcome.webp","telegram.svg","thesis.pdf","twitter copy.png","twitter.png","vectorial/vectorialhome.svg","webdutIcon.png","youtube.svg","service-worker.js"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".css":"text/css",".png":"image/png",".mp4":"video/mp4",".pdf":"application/pdf",".json":"application/json",".jpeg":"image/jpeg",".txt":"text/plain",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.P-juOZ70.js","app":"_app/immutable/entry/app.wQLwPNG5.js","imports":["_app/immutable/entry/start.P-juOZ70.js","_app/immutable/chunks/entry.JiEGjc9j.js","_app/immutable/chunks/scheduler.Wcy8l203.js","_app/immutable/chunks/index.dpPe8Tdf.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/entry/app.wQLwPNG5.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.Wcy8l203.js","_app/immutable/chunks/index.3Wex8s3Q.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-lsr7pYd9.js')),
			__memo(() => import('./chunks/1-JCiURaLj.js')),
			__memo(() => import('./chunks/2-BQ_sU9Jc.js')),
			__memo(() => import('./chunks/3-hFhlOVt2.js')),
			__memo(() => import('./chunks/4-DsDxQIj9.js')),
			__memo(() => import('./chunks/5-STrbh-6s.js')),
			__memo(() => import('./chunks/6-0gSBsZyp.js')),
			__memo(() => import('./chunks/7-x2q_yL5Q.js')),
			__memo(() => import('./chunks/8-6OYfhUqI.js')),
			__memo(() => import('./chunks/9-w1hfx3QD.js')),
			__memo(() => import('./chunks/10-6i-M-Zuk.js')),
			__memo(() => import('./chunks/11-aZVSoWjp.js')),
			__memo(() => import('./chunks/12-jpSdXkgl.js')),
			__memo(() => import('./chunks/13-EJxAEqUP.js')),
			__memo(() => import('./chunks/14-xeTHTeFT.js')),
			__memo(() => import('./chunks/15-v_Rww8oa.js')),
			__memo(() => import('./chunks/16-B_1fuvYu.js')),
			__memo(() => import('./chunks/17-1Yo8CGT1.js')),
			__memo(() => import('./chunks/18-KpmaDzYq.js')),
			__memo(() => import('./chunks/19-JNIA8FYt.js')),
			__memo(() => import('./chunks/20-VYsTMvkz.js')),
			__memo(() => import('./chunks/21-RP8DCljJ.js')),
			__memo(() => import('./chunks/22-yt4B_5pI.js')),
			__memo(() => import('./chunks/23-ZLjCgwNn.js')),
			__memo(() => import('./chunks/24-cJO8dcEq.js')),
			__memo(() => import('./chunks/25-lxTBsxHC.js')),
			__memo(() => import('./chunks/26-L2t3gXUz.js')),
			__memo(() => import('./chunks/27-HxKVARBO.js')),
			__memo(() => import('./chunks/28-evk5-wbj.js')),
			__memo(() => import('./chunks/29-7J-Bi0i8.js')),
			__memo(() => import('./chunks/30-Nk--W4aI.js')),
			__memo(() => import('./chunks/31-MFSckFYv.js')),
			__memo(() => import('./chunks/32-VVAEm_2V.js')),
			__memo(() => import('./chunks/33-tDirDI31.js')),
			__memo(() => import('./chunks/34-6D0zPznz.js')),
			__memo(() => import('./chunks/35-7v6FqjDR.js')),
			__memo(() => import('./chunks/36-0Ul6HGec.js')),
			__memo(() => import('./chunks/37-PROlTkLP.js')),
			__memo(() => import('./chunks/38-5wztIV_I.js')),
			__memo(() => import('./chunks/39-BbALyaNr.js')),
			__memo(() => import('./chunks/40-Lc6hz7Ks.js')),
			__memo(() => import('./chunks/41-GIYMd5_g.js')),
			__memo(() => import('./chunks/42-TO9825n3.js')),
			__memo(() => import('./chunks/43-hFlewa-8.js')),
			__memo(() => import('./chunks/44-Kob9v299.js')),
			__memo(() => import('./chunks/45-SDEmLJxv.js')),
			__memo(() => import('./chunks/46-0isnEMMv.js')),
			__memo(() => import('./chunks/47-GH1XimgY.js')),
			__memo(() => import('./chunks/48-AptZLrht.js')),
			__memo(() => import('./chunks/49-U4csM6l9.js')),
			__memo(() => import('./chunks/50-NRFSs1Oq.js')),
			__memo(() => import('./chunks/51-SBqpLAlL.js')),
			__memo(() => import('./chunks/52-vPBUvAhq.js')),
			__memo(() => import('./chunks/53-DOD4dtle.js')),
			__memo(() => import('./chunks/54-w7nFVIXO.js')),
			__memo(() => import('./chunks/55-7zP4rHwg.js')),
			__memo(() => import('./chunks/56-m1k6qykQ.js')),
			__memo(() => import('./chunks/57-SqdJQybu.js')),
			__memo(() => import('./chunks/58-_MUFpoOu.js')),
			__memo(() => import('./chunks/59-F6toSurV.js')),
			__memo(() => import('./chunks/60-V3SmJoPO.js')),
			__memo(() => import('./chunks/61-3HverB7P.js')),
			__memo(() => import('./chunks/62-bGwy8-33.js')),
			__memo(() => import('./chunks/63-ISbc6mEv.js')),
			__memo(() => import('./chunks/64-j6Il-e9d.js')),
			__memo(() => import('./chunks/65-q8PX9ZCF.js')),
			__memo(() => import('./chunks/66-LVOOVsjV.js')),
			__memo(() => import('./chunks/67-4i8xWh-j.js')),
			__memo(() => import('./chunks/68-mdoAY9ZI.js')),
			__memo(() => import('./chunks/69-99Nr7gXs.js')),
			__memo(() => import('./chunks/70-N4tXRewd.js')),
			__memo(() => import('./chunks/71-bvICfGCF.js')),
			__memo(() => import('./chunks/72-oO7dbvFv.js')),
			__memo(() => import('./chunks/73-QL7dg20U.js')),
			__memo(() => import('./chunks/74-WUZNxfLZ.js')),
			__memo(() => import('./chunks/75-4iSIDoUi.js')),
			__memo(() => import('./chunks/76-Fwg2b1Zy.js')),
			__memo(() => import('./chunks/77-MEKDzksH.js')),
			__memo(() => import('./chunks/78-eFqFGaee.js')),
			__memo(() => import('./chunks/79-jZLo2zV8.js')),
			__memo(() => import('./chunks/80-oZXglBzg.js')),
			__memo(() => import('./chunks/81-vn2EhEyW.js')),
			__memo(() => import('./chunks/82-TXbFJJG6.js')),
			__memo(() => import('./chunks/83-NJgIzDkl.js')),
			__memo(() => import('./chunks/84-FquKqF2o.js')),
			__memo(() => import('./chunks/85-8twuGFgv.js')),
			__memo(() => import('./chunks/86-1a5Zx-oy.js')),
			__memo(() => import('./chunks/87-ZAXYOqzh.js')),
			__memo(() => import('./chunks/88-wb2OTNgL.js')),
			__memo(() => import('./chunks/89-UWGkU--9.js')),
			__memo(() => import('./chunks/90-l8EAsU3l.js')),
			__memo(() => import('./chunks/91-ecz9BTLq.js')),
			__memo(() => import('./chunks/92-ykuwttn8.js')),
			__memo(() => import('./chunks/93-XSQpGpNW.js')),
			__memo(() => import('./chunks/94-dYw5AK3e.js')),
			__memo(() => import('./chunks/95-mGWQUJGP.js')),
			__memo(() => import('./chunks/96-wjzvSaDe.js')),
			__memo(() => import('./chunks/97-FKAe8PVg.js')),
			__memo(() => import('./chunks/98-MlXMDvYx.js')),
			__memo(() => import('./chunks/99-natUVogZ.js')),
			__memo(() => import('./chunks/100-6oO3ofuK.js')),
			__memo(() => import('./chunks/101-hk8hKK3z.js')),
			__memo(() => import('./chunks/102-BPsiDk_C.js')),
			__memo(() => import('./chunks/103-LNcT_-Nz.js')),
			__memo(() => import('./chunks/104-k4WlMCpg.js')),
			__memo(() => import('./chunks/105-lUzPG9By.js')),
			__memo(() => import('./chunks/106-zF4zvlZN.js')),
			__memo(() => import('./chunks/107-XGoKjIrV.js')),
			__memo(() => import('./chunks/108-J2w5hLg2.js')),
			__memo(() => import('./chunks/109-wYUTN5Dm.js')),
			__memo(() => import('./chunks/110-IN7oRNRz.js')),
			__memo(() => import('./chunks/111-lyrCdVuD.js')),
			__memo(() => import('./chunks/112-O5tDdtyo.js')),
			__memo(() => import('./chunks/113-WbyrAy2K.js')),
			__memo(() => import('./chunks/114-x5G2LAPB.js')),
			__memo(() => import('./chunks/115-nYowDQni.js')),
			__memo(() => import('./chunks/116-kgcQNUn0.js')),
			__memo(() => import('./chunks/117-Fm0tAK7i.js')),
			__memo(() => import('./chunks/118-ddsu6ino.js')),
			__memo(() => import('./chunks/119-XX72HeBz.js')),
			__memo(() => import('./chunks/120-xKg6_cmw.js')),
			__memo(() => import('./chunks/121-1VYtm1y8.js')),
			__memo(() => import('./chunks/122-GHABYWwq.js')),
			__memo(() => import('./chunks/123-xfzGFfYj.js')),
			__memo(() => import('./chunks/124-CF0Dkdoq.js')),
			__memo(() => import('./chunks/125-WUDp9reB.js')),
			__memo(() => import('./chunks/126-hVR2wVFw.js')),
			__memo(() => import('./chunks/127-fxkgHIkW.js')),
			__memo(() => import('./chunks/128-T59VgCNb.js')),
			__memo(() => import('./chunks/129-ZGV7Rb23.js')),
			__memo(() => import('./chunks/130-4VnJTBW1.js')),
			__memo(() => import('./chunks/131-dxJ47QDH.js')),
			__memo(() => import('./chunks/132-NHJSB_fx.js')),
			__memo(() => import('./chunks/133-XWniBxwh.js')),
			__memo(() => import('./chunks/134-7qJiB7eJ.js')),
			__memo(() => import('./chunks/135-4fjRmtt8.js')),
			__memo(() => import('./chunks/136-ldpyt9X4.js')),
			__memo(() => import('./chunks/137-HBBwbmkp.js')),
			__memo(() => import('./chunks/138-cCWWdXjZ.js')),
			__memo(() => import('./chunks/139-D8Y_wy7P.js')),
			__memo(() => import('./chunks/140--HM3j8SK.js')),
			__memo(() => import('./chunks/141-tMuIMgf2.js')),
			__memo(() => import('./chunks/142-G4-ycJqY.js')),
			__memo(() => import('./chunks/143-QvTUdHdN.js')),
			__memo(() => import('./chunks/144-5SFlY9k2.js')),
			__memo(() => import('./chunks/145-qyP0gu-W.js')),
			__memo(() => import('./chunks/146-YfTBs88o.js')),
			__memo(() => import('./chunks/147-jsxboqhn.js')),
			__memo(() => import('./chunks/148-9vNc3KBr.js')),
			__memo(() => import('./chunks/149-xcj39tQ8.js')),
			__memo(() => import('./chunks/150-dP1S5BJ6.js')),
			__memo(() => import('./chunks/151-CCTASr_X.js')),
			__memo(() => import('./chunks/152-Wpc78YZw.js')),
			__memo(() => import('./chunks/153-NofYPCuu.js')),
			__memo(() => import('./chunks/154-LeB8eGZ3.js')),
			__memo(() => import('./chunks/155-RPOOTi8k.js')),
			__memo(() => import('./chunks/156-93oLKKPM.js')),
			__memo(() => import('./chunks/157-Nl4qDx7T.js')),
			__memo(() => import('./chunks/158-IwO8fB1j.js')),
			__memo(() => import('./chunks/159-OKxr6dn-.js')),
			__memo(() => import('./chunks/160-y_0221MD.js')),
			__memo(() => import('./chunks/161-NJB6SeZy.js')),
			__memo(() => import('./chunks/162-OEKSRN4Z.js')),
			__memo(() => import('./chunks/163-8LJkJb83.js')),
			__memo(() => import('./chunks/164-eixpWU4i.js')),
			__memo(() => import('./chunks/165-3FXUNp4f.js')),
			__memo(() => import('./chunks/166-WBxHydiC.js')),
			__memo(() => import('./chunks/167-bYanwLnh.js')),
			__memo(() => import('./chunks/168-ZBI2WSuw.js')),
			__memo(() => import('./chunks/169-vowWRrEr.js')),
			__memo(() => import('./chunks/170-hYgp57us.js')),
			__memo(() => import('./chunks/171-QaI0QLSk.js')),
			__memo(() => import('./chunks/172-oLW7bKx9.js')),
			__memo(() => import('./chunks/173-Ok9oIY2H.js')),
			__memo(() => import('./chunks/174-R8x0QxRd.js')),
			__memo(() => import('./chunks/175-rhOZPYRU.js')),
			__memo(() => import('./chunks/176-S3RANu_r.js')),
			__memo(() => import('./chunks/177-Nhb4XhQS.js')),
			__memo(() => import('./chunks/178-pxnga3oI.js')),
			__memo(() => import('./chunks/179-ZQc6-86s.js')),
			__memo(() => import('./chunks/180-6CGNx8Az.js')),
			__memo(() => import('./chunks/181-tCKcUDjY.js')),
			__memo(() => import('./chunks/182-H4cjrhPp.js')),
			__memo(() => import('./chunks/183-pNAUUULu.js')),
			__memo(() => import('./chunks/184-BwWvgrR1.js')),
			__memo(() => import('./chunks/185-uTXuup1U.js')),
			__memo(() => import('./chunks/186-Lok7Oq1x.js')),
			__memo(() => import('./chunks/187-0Tp3jGiS.js')),
			__memo(() => import('./chunks/188-WscBkcRC.js')),
			__memo(() => import('./chunks/189-Qa6ACokt.js')),
			__memo(() => import('./chunks/190-baHXgPdn.js')),
			__memo(() => import('./chunks/191-cQKCwpzh.js')),
			__memo(() => import('./chunks/192-g8X9GwaY.js')),
			__memo(() => import('./chunks/193-chI5iCyI.js')),
			__memo(() => import('./chunks/194--TFsJeLN.js')),
			__memo(() => import('./chunks/195-SbyZNF2k.js')),
			__memo(() => import('./chunks/196-yJSiuP8E.js')),
			__memo(() => import('./chunks/197-e7QNbAMB.js')),
			__memo(() => import('./chunks/198-id54wTkZ.js')),
			__memo(() => import('./chunks/199-1_Wu_8dq.js')),
			__memo(() => import('./chunks/200-8SiTo0WM.js')),
			__memo(() => import('./chunks/201-O-ZoAtn6.js')),
			__memo(() => import('./chunks/202-Zp0XkxAO.js')),
			__memo(() => import('./chunks/203-6DmIeN3s.js')),
			__memo(() => import('./chunks/204-ZXLVvTGg.js')),
			__memo(() => import('./chunks/205-wxy0hx2N.js')),
			__memo(() => import('./chunks/206-B46VIlJt.js')),
			__memo(() => import('./chunks/207-9YDEvWsQ.js')),
			__memo(() => import('./chunks/208-zjXEVrhv.js')),
			__memo(() => import('./chunks/209-nP_DnORz.js')),
			__memo(() => import('./chunks/210-tOoYAMKA.js')),
			__memo(() => import('./chunks/211-SFlp5irE.js')),
			__memo(() => import('./chunks/212-w2BXjMfp.js')),
			__memo(() => import('./chunks/213-U9VxSrRs.js')),
			__memo(() => import('./chunks/214-9yUb_Peg.js')),
			__memo(() => import('./chunks/215-kZ8ZNTl1.js')),
			__memo(() => import('./chunks/216-10TaXYgU.js'))
		],
		routes: [
			{
				id: "/(general)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/(about)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(general)/courses",
				pattern: /^\/courses\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab",
				pattern: /^\/courses\/internetlab\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet",
				pattern: /^\/courses\/internet\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css",
				pattern: /^\/courses\/internet\/css\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript",
				pattern: /^\/courses\/internet\/javascript\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/asynchronous",
				pattern: /^\/courses\/internet\/javascript\/asynchronous\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics",
				pattern: /^\/courses\/internet\/javascript\/basics\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/dynamic",
				pattern: /^\/courses\/internet\/javascript\/dynamic\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/fetchapi",
				pattern: /^\/courses\/internet\/javascript\/fetchapi\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/html",
				pattern: /^\/courses\/internet\/javascript\/html\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/http",
				pattern: /^\/courses\/internet\/javascript\/http\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/nodejs",
				pattern: /^\/courses\/internet\/nodejs\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml",
				pattern: /^\/courses\/internet\/wwwhtml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/xml",
				pattern: /^\/courses\/internet\/xml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2",
				pattern: /^\/courses\/mathematics2\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics",
				pattern: /^\/courses\/mathematics2\/statistics\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/bivariatedata",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/bivariatedata\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/bivariatefrequency",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/bivariatefrequency\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/correlation2",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/correlation2\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/correlationtypes",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/correlationtypes\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/pearson",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/pearson\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/spearman",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/spearman\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 52 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 53 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures/deviation",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/deviation\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 54 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures/mean",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/mean\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 55 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures/median",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/median\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 56 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures/mode",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/mode\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 57 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/regression",
				pattern: /^\/courses\/mathematics2\/statistics\/regression\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 58 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/regression/leastsquares",
				pattern: /^\/courses\/mathematics2\/statistics\/regression\/leastsquares\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 59 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/regression/regressioncoefficient",
				pattern: /^\/courses\/mathematics2\/statistics\/regression\/regressioncoefficient\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 60 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/regression/regressionlines",
				pattern: /^\/courses\/mathematics2\/statistics\/regression\/regressionlines\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 61 },
				endpoint: null
			},
			{
				id: "/(cv)/cv",
				pattern: /^\/cv\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/(general)/iit",
				pattern: /^\/iit\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 62 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths",
				pattern: /^\/iit\/maths\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 63 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021",
				pattern: /^\/iit\/maths\/2021\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 64 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question1",
				pattern: /^\/iit\/maths\/2021\/question1\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 65 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question2",
				pattern: /^\/iit\/maths\/2021\/question2\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 66 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question3",
				pattern: /^\/iit\/maths\/2021\/question3\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 67 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question4",
				pattern: /^\/iit\/maths\/2021\/question4\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 68 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question5",
				pattern: /^\/iit\/maths\/2021\/question5\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 69 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question6",
				pattern: /^\/iit\/maths\/2021\/question6\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 70 },
				endpoint: null
			},
			{
				id: "/(general)/notes",
				pattern: /^\/notes\/?$/,
				params: [],
				page: { layouts: [0,4,,], errors: [1,,6,], leaf: 71 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths",
				pattern: /^\/notes\/maths\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 72 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of derivatives/Approximations",
				pattern: /^\/notes\/maths\/Application of derivatives\/Approximations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 73 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of derivatives/Increasing and decreasing functions",
				pattern: /^\/notes\/maths\/Application of derivatives\/Increasing and decreasing functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 74 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of derivatives/Maxima and minima",
				pattern: /^\/notes\/maths\/Application of derivatives\/Maxima and minima\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 75 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of derivatives/Rate of change of quantities",
				pattern: /^\/notes\/maths\/Application of derivatives\/Rate of change of quantities\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 76 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of derivatives/Tangents and normals",
				pattern: /^\/notes\/maths\/Application of derivatives\/Tangents and normals\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 77 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of integrals/Area between two curves",
				pattern: /^\/notes\/maths\/Application of integrals\/Area between two curves\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 78 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of integrals/Area under simple curves",
				pattern: /^\/notes\/maths\/Application of integrals\/Area under simple curves\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 79 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Binomial theorem/Binomial theorem for positive integral indices",
				pattern: /^\/notes\/maths\/Binomial theorem\/Binomial theorem for positive integral indices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 80 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Binomial theorem/General and middle terms",
				pattern: /^\/notes\/maths\/Binomial theorem\/General and middle terms\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 81 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Complex numbers and quadratic equations/Algebra of complex numbers",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Algebra of complex numbers\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 82 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Complex numbers and quadratic equations/Argand plane and polar representation",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Argand plane and polar representation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 83 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Complex numbers and quadratic equations/Complex numbers",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Complex numbers\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 84 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Complex numbers and quadratic equations/Quadratic equations",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Quadratic equations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 85 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Complex numbers and quadratic equations/The modulus and the conjugate of complex number",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/The modulus and the conjugate of complex number\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 86 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Conic sections/Circle",
				pattern: /^\/notes\/maths\/Conic sections\/Circle\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 87 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Conic sections/Ellipse",
				pattern: /^\/notes\/maths\/Conic sections\/Ellipse\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 88 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Conic sections/Hyperbola",
				pattern: /^\/notes\/maths\/Conic sections\/Hyperbola\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 89 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Conic sections/Parabola",
				pattern: /^\/notes\/maths\/Conic sections\/Parabola\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 90 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Conic sections/Sections of a cone",
				pattern: /^\/notes\/maths\/Conic sections\/Sections of a cone\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 91 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Continuity",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Continuity\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 92 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Derivatives of functions in parametric forms",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Derivatives of functions in parametric forms\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 93 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Differentiability",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Differentiability\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 94 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Exponential and logarithmic functions",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Exponential and logarithmic functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 95 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Logarithmic differentiation",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Logarithmic differentiation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 96 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Mean value theorem",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Mean value theorem\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 97 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Second order derivative",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Second order derivative\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 98 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Adjoint and inverse of a matrix",
				pattern: /^\/notes\/maths\/Determinants\/Adjoint and inverse of a matrix\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 99 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Applications of determinants and matrices",
				pattern: /^\/notes\/maths\/Determinants\/Applications of determinants and matrices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 100 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Area of a triangle",
				pattern: /^\/notes\/maths\/Determinants\/Area of a triangle\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 101 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Determinant",
				pattern: /^\/notes\/maths\/Determinants\/Determinant\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 102 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Minors and cofactors",
				pattern: /^\/notes\/maths\/Determinants\/Minors and cofactors\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 103 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Properties of determinants",
				pattern: /^\/notes\/maths\/Determinants\/Properties of determinants\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 104 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Differential equations/Basic concepts",
				pattern: /^\/notes\/maths\/Differential equations\/Basic concepts\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 105 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Differential equations/Formation of a differential equation whose general solution is given",
				pattern: /^\/notes\/maths\/Differential equations\/Formation of a differential equation whose general solution is given\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 106 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Differential equations/General and particular solutions of a differential equation",
				pattern: /^\/notes\/maths\/Differential equations\/General and particular solutions of a differential equation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 107 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Differential equations/Methods of solving first order first degree differential equations",
				pattern: /^\/notes\/maths\/Differential equations\/Methods of solving first order first degree differential equations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 108 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Indroduction to 3D geometry/Coordinate axes and coordinate planes in 3D space",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Coordinate axes and coordinate planes in 3D space\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 109 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Indroduction to 3D geometry/Coordinate of a point in space",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Coordinate of a point in space\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 110 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Indroduction to 3D geometry/Distance between two points",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Distance between two points\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 111 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Indroduction to 3D geometry/Section formula",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Section formula\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 112 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Definite integral",
				pattern: /^\/notes\/maths\/Integrals\/Definite integral\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 113 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Evaluation of definite integrals by substitution",
				pattern: /^\/notes\/maths\/Integrals\/Evaluation of definite integrals by substitution\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 114 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Fundamental theorem of calculus",
				pattern: /^\/notes\/maths\/Integrals\/Fundamental theorem of calculus\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 115 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Integrals of some particular functions",
				pattern: /^\/notes\/maths\/Integrals\/Integrals of some particular functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 116 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Integration as an inverse process of differentiation",
				pattern: /^\/notes\/maths\/Integrals\/Integration as an inverse process of differentiation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 117 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Integration by partial fractions",
				pattern: /^\/notes\/maths\/Integrals\/Integration by partial fractions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 118 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Integration by parts",
				pattern: /^\/notes\/maths\/Integrals\/Integration by parts\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 119 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Methods of integration",
				pattern: /^\/notes\/maths\/Integrals\/Methods of integration\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 120 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Some properties of definite integrals",
				pattern: /^\/notes\/maths\/Integrals\/Some properties of definite integrals\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 121 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Inverse trigonometric functions/Basic concepts",
				pattern: /^\/notes\/maths\/Inverse trigonometric functions\/Basic concepts\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 122 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Inverse trigonometric functions/Properties of inverse trigonometric functions",
				pattern: /^\/notes\/maths\/Inverse trigonometric functions\/Properties of inverse trigonometric functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 123 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Limits and derivatives/Derivatives",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Derivatives\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 124 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Limits and derivatives/Intuitive idea of derivatives",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Intuitive idea of derivatives\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 125 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Limits and derivatives/Limits of Trigonometric functions",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Limits of Trigonometric functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 127 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Limits and derivatives/Limits",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Limits\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 126 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear inequalities/Graphical solution in two variables",
				pattern: /^\/notes\/maths\/Linear inequalities\/Graphical solution in two variables\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 128 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear inequalities/Inequalities",
				pattern: /^\/notes\/maths\/Linear inequalities\/Inequalities\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 129 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear inequalities/One variable",
				pattern: /^\/notes\/maths\/Linear inequalities\/One variable\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 130 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear inequalities/Solution of system in two variables",
				pattern: /^\/notes\/maths\/Linear inequalities\/Solution of system in two variables\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 131 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear programming/Different types of linear programming problems",
				pattern: /^\/notes\/maths\/Linear programming\/Different types of linear programming problems\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 132 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear programming/Linear programming problem and its mathematical formulation",
				pattern: /^\/notes\/maths\/Linear programming\/Linear programming problem and its mathematical formulation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 133 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Invertible matrices",
				pattern: /^\/notes\/maths\/Matrices\/Invertible matrices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 134 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Matrix",
				pattern: /^\/notes\/maths\/Matrices\/Matrix\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 135 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Operations on matrices",
				pattern: /^\/notes\/maths\/Matrices\/Operations on matrices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 136 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Symmetric and skew symmetric matrices",
				pattern: /^\/notes\/maths\/Matrices\/Symmetric and skew symmetric matrices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 137 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Transformation of a matrix",
				pattern: /^\/notes\/maths\/Matrices\/Transformation of a matrix\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 138 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Transpose of a matrix",
				pattern: /^\/notes\/maths\/Matrices\/Transpose of a matrix\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 139 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Typse of matrices",
				pattern: /^\/notes\/maths\/Matrices\/Typse of matrices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 140 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Permutations and combinations/Combinations",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Combinations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 141 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Permutations and combinations/Fundamental principle of counting",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Fundamental principle of counting\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 142 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Permutations and combinations/Permutations",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Permutations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 143 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Principle of mathematical induction/Motivation",
				pattern: /^\/notes\/maths\/Principle of mathematical induction\/Motivation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 144 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Principle of mathematical induction/The principle of mathematical induction",
				pattern: /^\/notes\/maths\/Principle of mathematical induction\/The principle of mathematical induction\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 145 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Probability/Axiomatic approach to probability",
				pattern: /^\/notes\/maths\/Probability\/Axiomatic approach to probability\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 146 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Probability/Event",
				pattern: /^\/notes\/maths\/Probability\/Event\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 147 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Probability/Random experiments",
				pattern: /^\/notes\/maths\/Probability\/Random experiments\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 148 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 11/Cartesian product of sets",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Cartesian product of sets\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 149 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 11/Functions",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 150 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 11/Relations",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Relations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 151 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 12/Binary operations",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Binary operations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 152 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 12/Composition of functions and invertible function",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Composition of functions and invertible function\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 153 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 12/Types of functions",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Types of functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 154 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 12/Types of relations",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Types of relations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 155 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Arithmetic progression",
				pattern: /^\/notes\/maths\/Sequences and series\/Arithmetic progression\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 156 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Geometric progression",
				pattern: /^\/notes\/maths\/Sequences and series\/Geometric progression\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 157 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Relationship between AM and GM",
				pattern: /^\/notes\/maths\/Sequences and series\/Relationship between AM and GM\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 158 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Sequences",
				pattern: /^\/notes\/maths\/Sequences and series\/Sequences\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 159 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Series",
				pattern: /^\/notes\/maths\/Sequences and series\/Series\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 160 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Sum to n terms of Special series",
				pattern: /^\/notes\/maths\/Sequences and series\/Sum to n terms of Special series\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 161 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Complement of a set",
				pattern: /^\/notes\/maths\/Sets\/Complement of a set\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 162 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Equal sets",
				pattern: /^\/notes\/maths\/Sets\/Equal sets\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 163 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Finite and infinite sets",
				pattern: /^\/notes\/maths\/Sets\/Finite and infinite sets\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 164 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Introduction",
				pattern: /^\/notes\/maths\/Sets\/Introduction\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 165 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Operations on sets",
				pattern: /^\/notes\/maths\/Sets\/Operations on sets\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 166 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Power set",
				pattern: /^\/notes\/maths\/Sets\/Power set\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 167 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Practical problems",
				pattern: /^\/notes\/maths\/Sets\/Practical problems\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 168 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Real numbers",
				pattern: /^\/notes\/maths\/Sets\/Real numbers\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 169 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Sets and their representations",
				pattern: /^\/notes\/maths\/Sets\/Sets and their representations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 170 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Subsets",
				pattern: /^\/notes\/maths\/Sets\/Subsets\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 171 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/The empty set",
				pattern: /^\/notes\/maths\/Sets\/The empty set\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 172 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Universal set",
				pattern: /^\/notes\/maths\/Sets\/Universal set\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 173 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Venn diagrams",
				pattern: /^\/notes\/maths\/Sets\/Venn diagrams\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 174 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Statistics/Analysis of frequency distributions",
				pattern: /^\/notes\/maths\/Statistics\/Analysis of frequency distributions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 175 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Statistics/Mean deviation",
				pattern: /^\/notes\/maths\/Statistics\/Mean deviation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 176 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Statistics/Range",
				pattern: /^\/notes\/maths\/Statistics\/Range\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 177 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Statistics/Variance and standard deviation",
				pattern: /^\/notes\/maths\/Statistics\/Variance and standard deviation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 178 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Straight lines/Distance of a point from a line",
				pattern: /^\/notes\/maths\/Straight lines\/Distance of a point from a line\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 179 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Straight lines/General equation of a line",
				pattern: /^\/notes\/maths\/Straight lines\/General equation of a line\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 180 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Straight lines/Slope of a line",
				pattern: /^\/notes\/maths\/Straight lines\/Slope of a line\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 181 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Straight lines/Various forms of the equation of a line",
				pattern: /^\/notes\/maths\/Straight lines\/Various forms of the equation of a line\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 182 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Angle between a line and a plane",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Angle between a line and a plane\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 183 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Angle between two lines",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Angle between two lines\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 184 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Angle between two planes",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Angle between two planes\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 185 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Coplanarity of two lines",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Coplanarity of two lines\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 186 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Direction cosines and direction ratios of a line",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Direction cosines and direction ratios of a line\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 187 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Distance of a point from a plane",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Distance of a point from a plane\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 188 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Equation of a line in space",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Equation of a line in space\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 189 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Plane",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Plane\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 190 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Shortest distance between two lines",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Shortest distance between two lines\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 191 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Trigonometric functions/Angles",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Angles\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 192 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Trigonometric functions/Trigonometric equations",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric equations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 193 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Trigonometric functions/Trigonometric functions of sum and difference of two angles",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric functions of sum and difference of two angles\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 195 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Trigonometric functions/Trigonometric functions",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 194 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Vector algebra/Addition of vectors",
				pattern: /^\/notes\/maths\/Vector algebra\/Addition of vectors\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 196 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Vector algebra/Multiplication of a vector by a scalar",
				pattern: /^\/notes\/maths\/Vector algebra\/Multiplication of a vector by a scalar\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 197 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Vector algebra/Product of two vectors",
				pattern: /^\/notes\/maths\/Vector algebra\/Product of two vectors\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 198 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Vector algebra/Some basic concepts",
				pattern: /^\/notes\/maths\/Vector algebra\/Some basic concepts\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 199 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Vector algebra/Types of vectors",
				pattern: /^\/notes\/maths\/Vector algebra\/Types of vectors\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 200 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/conic",
				pattern: /^\/notes\/maths\/conic\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 201 },
				endpoint: null
			},
			{
				id: "/(general)/notes/quantum",
				pattern: /^\/notes\/quantum\/?$/,
				params: [],
				page: { layouts: [0,4,,9,], errors: [1,,6,,], leaf: 202 },
				endpoint: null
			},
			{
				id: "/(general)/practice",
				pattern: /^\/practice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 203 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class10",
				pattern: /^\/practice\/class10\/?$/,
				params: [],
				page: { layouts: [0,4,11,], errors: [1,,,], leaf: 205 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class11",
				pattern: /^\/practice\/class11\/?$/,
				params: [],
				page: { layouts: [0,4,12,], errors: [1,,,], leaf: 206 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class12",
				pattern: /^\/practice\/class12\/?$/,
				params: [],
				page: { layouts: [0,4,13,], errors: [1,,,], leaf: 207 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class1",
				pattern: /^\/practice\/class1\/?$/,
				params: [],
				page: { layouts: [0,4,10,], errors: [1,,,], leaf: 204 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class2",
				pattern: /^\/practice\/class2\/?$/,
				params: [],
				page: { layouts: [0,4,14,], errors: [1,,,], leaf: 208 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class3",
				pattern: /^\/practice\/class3\/?$/,
				params: [],
				page: { layouts: [0,4,15,], errors: [1,,,], leaf: 209 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class4",
				pattern: /^\/practice\/class4\/?$/,
				params: [],
				page: { layouts: [0,4,16,], errors: [1,,,], leaf: 210 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class5",
				pattern: /^\/practice\/class5\/?$/,
				params: [],
				page: { layouts: [0,4,17,], errors: [1,,,], leaf: 211 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class6",
				pattern: /^\/practice\/class6\/?$/,
				params: [],
				page: { layouts: [0,4,18,], errors: [1,,,], leaf: 212 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class7",
				pattern: /^\/practice\/class7\/?$/,
				params: [],
				page: { layouts: [0,4,19,], errors: [1,,,], leaf: 213 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class8",
				pattern: /^\/practice\/class8\/?$/,
				params: [],
				page: { layouts: [0,4,20,], errors: [1,,,], leaf: 214 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class9",
				pattern: /^\/practice\/class9\/?$/,
				params: [],
				page: { layouts: [0,4,21,], errors: [1,,,], leaf: 215 },
				endpoint: null
			},
			{
				id: "/(about)/publications",
				pattern: /^\/publications\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(about)/research",
				pattern: /^\/research\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(about)/teaching",
				pattern: /^\/teaching\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/[...catchAll]",
				pattern: /^(?:\/(.*))?\/?$/,
				params: [{"name":"catchAll","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 216 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
