const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["announcement/html.svg","announcement/perspective.svg","app.css","avatar.svg","background copy.svg","background.svg","banner.png","banner.svg","circle_demo/circle.png","circle_demo/circle_anime.mp4","circle_demo/Cone-equation.png","circle_demo/Cone.png","circle_demo/conics.png","circle_demo/Conic_anime.mp4","circle_demo/Conic_deg.mp4","circle_demo/ellipse_anime.mp4","circle_demo/hyperbola_anime.mp4","circle_demo/IIT21Q1.png","circle_demo/orthocenter.png","circle_demo/parabola_anime.mp4","circle_demo/Plane.png","circle_demo/Tangents.png","circle_demo/threepointcircle.png","CMIMedal.jpg","cmithesis.pdf","common.css","courses/internet/css/boxmodel.svg","courses/internet/wwwhtml/fundamentals/intro/dns.png","courses/internet/wwwhtml/fundamentals/intro/dns.webp","courses/internet/wwwhtml/html/audio/tada.wav","courses/internet/wwwhtml/html/video/germinate.mp4","custom.css","dark.css","facebook.svg","favicon.png","IITMSc.jpg","instagram.svg","LCPath.svg","light.css","manifest.json","mithileshkumar.png","notes/maths/sets/equal/thumbnail.svg","notes/maths/sets/finite/thumbnail.svg","notes/maths/sets/introduction/example.svg","notes/maths/sets/introduction/oddeven.svg","notes/maths/sets/real/interval.svg","notes/maths/sets/real/subsetreal.svg","notes/maths/sets/representation/heroparadox.svg","notes/maths/sets/subsets/thumbnail.svg","notes/maths/sets/subsets/tree.svg","notes/quantum/CNOT.svg","notes/quantum/qubit2d.svg","notes/quantum/teleportation.svg","photo_cv.jpg","profilephoto.jpeg","robots.txt","santa.svg","smui-dark.css","smui.css","svelte-welcome.png","svelte-welcome.webp","telegram.svg","thesis.pdf","twitter copy.png","twitter.png","vectorial/vectorialhome.svg","webdutIcon.png","youtube.svg","service-worker.js"]),
	mimeTypes: {".svg":"image/svg+xml",".css":"text/css",".png":"image/png",".mp4":"video/mp4",".jpg":"image/jpeg",".pdf":"application/pdf",".webp":"image/webp",".wav":"audio/wav",".json":"application/json",".jpeg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.iBVBOD9p.js","app":"_app/immutable/entry/app.eB3sbRME.js","imports":["_app/immutable/entry/start.iBVBOD9p.js","_app/immutable/chunks/entry.wfQ90UDB.js","_app/immutable/chunks/scheduler.f-IiUdrl.js","_app/immutable/chunks/index.dbCRPIkP.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/entry/app.eB3sbRME.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.f-IiUdrl.js","_app/immutable/chunks/index.7r8AOLel.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-uKZV_q5T.js')),
			__memo(() => import('./chunks/1-ZGYVWh4u.js')),
			__memo(() => import('./chunks/2-ts2EJwhm.js')),
			__memo(() => import('./chunks/3-oMagL6lF.js')),
			__memo(() => import('./chunks/4-xUCpZRGa.js')),
			__memo(() => import('./chunks/5-jBgFF_zo.js')),
			__memo(() => import('./chunks/6-VxWzsmlv.js')),
			__memo(() => import('./chunks/7-SMUVyBxe.js')),
			__memo(() => import('./chunks/8-zIV-D4o9.js')),
			__memo(() => import('./chunks/9-U-RuJR7j.js')),
			__memo(() => import('./chunks/10-3CjkfJ8C.js')),
			__memo(() => import('./chunks/11-9zcLBc0o.js')),
			__memo(() => import('./chunks/12-70LEIlWG.js')),
			__memo(() => import('./chunks/13-Stn6jSfj.js')),
			__memo(() => import('./chunks/14-AaeJHFQw.js')),
			__memo(() => import('./chunks/15-VInDO6Wh.js')),
			__memo(() => import('./chunks/16-N8YQitZM.js')),
			__memo(() => import('./chunks/17-37mr_Bbe.js')),
			__memo(() => import('./chunks/18-W8avEnyT.js')),
			__memo(() => import('./chunks/19-h4mZm5ol.js')),
			__memo(() => import('./chunks/20-upX86PmE.js')),
			__memo(() => import('./chunks/21-oiAuipqd.js')),
			__memo(() => import('./chunks/22-mYLz5nVE.js')),
			__memo(() => import('./chunks/23--rl_fPC0.js')),
			__memo(() => import('./chunks/24-tirhxbh3.js')),
			__memo(() => import('./chunks/25-6ce8vfSy.js')),
			__memo(() => import('./chunks/26-haSms4Ys.js')),
			__memo(() => import('./chunks/27-alMHR8l6.js')),
			__memo(() => import('./chunks/28-XYajQpU9.js')),
			__memo(() => import('./chunks/29-uNfcPKVA.js')),
			__memo(() => import('./chunks/30-hX75C_EN.js')),
			__memo(() => import('./chunks/31-AQSUynsw.js')),
			__memo(() => import('./chunks/32-x_3aLxSH.js')),
			__memo(() => import('./chunks/33-rL24Rq0r.js')),
			__memo(() => import('./chunks/34-z0NXyR_6.js')),
			__memo(() => import('./chunks/35-nQ0VUt4d.js')),
			__memo(() => import('./chunks/36-RGq69rw7.js')),
			__memo(() => import('./chunks/37-mlkjy7JY.js')),
			__memo(() => import('./chunks/38-QMvLY8oK.js')),
			__memo(() => import('./chunks/39-Q6J415XN.js')),
			__memo(() => import('./chunks/40-sxUiYoGQ.js')),
			__memo(() => import('./chunks/41-GguqX5lT.js')),
			__memo(() => import('./chunks/42-LPteIBGT.js')),
			__memo(() => import('./chunks/43-exzyAI2s.js')),
			__memo(() => import('./chunks/44-nOcouCVn.js')),
			__memo(() => import('./chunks/45-6PzSLLnP.js')),
			__memo(() => import('./chunks/46-ydGfEMKP.js')),
			__memo(() => import('./chunks/47-g3apqvJH.js')),
			__memo(() => import('./chunks/48-P2d5anDe.js')),
			__memo(() => import('./chunks/49-m4-Dxsvp.js')),
			__memo(() => import('./chunks/50-G0WVo-j8.js')),
			__memo(() => import('./chunks/51-PW-FF66b.js')),
			__memo(() => import('./chunks/52-k_aiaVFf.js')),
			__memo(() => import('./chunks/53-jQCvzfFv.js')),
			__memo(() => import('./chunks/54-Jlm01PjW.js')),
			__memo(() => import('./chunks/55-Ub2xv_Fv.js')),
			__memo(() => import('./chunks/56-bsmCIZpe.js')),
			__memo(() => import('./chunks/57-V9e0z2XW.js')),
			__memo(() => import('./chunks/58-HbIUX8mZ.js')),
			__memo(() => import('./chunks/59-D8c1bX8w.js')),
			__memo(() => import('./chunks/60--Q8JE0pN.js')),
			__memo(() => import('./chunks/61-SYXQ2JoY.js')),
			__memo(() => import('./chunks/62-OH-FTpff.js')),
			__memo(() => import('./chunks/63-k96UO8g7.js')),
			__memo(() => import('./chunks/64-2bHFOLpU.js')),
			__memo(() => import('./chunks/65-DXXr8-iF.js')),
			__memo(() => import('./chunks/66-v3-Pdxew.js')),
			__memo(() => import('./chunks/67-tvZ7kHY2.js')),
			__memo(() => import('./chunks/68-DiyUNmAp.js')),
			__memo(() => import('./chunks/69-4icdSEt1.js')),
			__memo(() => import('./chunks/70-bJYk6VXh.js')),
			__memo(() => import('./chunks/71-tlD1m7nJ.js')),
			__memo(() => import('./chunks/72-pqAirdkW.js')),
			__memo(() => import('./chunks/73-u86gb6mj.js')),
			__memo(() => import('./chunks/74-3Ljvcb_z.js')),
			__memo(() => import('./chunks/75-x6q8WbkY.js')),
			__memo(() => import('./chunks/76-Eb_bPPnT.js')),
			__memo(() => import('./chunks/77-bXjjvqdL.js')),
			__memo(() => import('./chunks/78-VvUKf0m2.js')),
			__memo(() => import('./chunks/79-s81OcrA_.js')),
			__memo(() => import('./chunks/80-NVs2xXon.js')),
			__memo(() => import('./chunks/81-wSXVH5gt.js')),
			__memo(() => import('./chunks/82-guPTEK30.js')),
			__memo(() => import('./chunks/83-ZcjnxZSN.js')),
			__memo(() => import('./chunks/84-8DwonosR.js')),
			__memo(() => import('./chunks/85-xthl0Bzk.js')),
			__memo(() => import('./chunks/86-lu1yc7en.js')),
			__memo(() => import('./chunks/87-lNBZ9Dlg.js')),
			__memo(() => import('./chunks/88-RFw3Dfgx.js')),
			__memo(() => import('./chunks/89-w9za5tnx.js')),
			__memo(() => import('./chunks/90-tLwTPXSC.js')),
			__memo(() => import('./chunks/91-kYjz0Rod.js')),
			__memo(() => import('./chunks/92-8Fx3C9OU.js')),
			__memo(() => import('./chunks/93-GUMfQUDY.js')),
			__memo(() => import('./chunks/94-zHxplfrx.js')),
			__memo(() => import('./chunks/95-fIFJRjoY.js')),
			__memo(() => import('./chunks/96-olCa1t3L.js')),
			__memo(() => import('./chunks/97-HNgVfg3N.js')),
			__memo(() => import('./chunks/98-YiuP4mjR.js')),
			__memo(() => import('./chunks/99-N_gck55A.js')),
			__memo(() => import('./chunks/100-zzOGJ_0o.js')),
			__memo(() => import('./chunks/101-ipf5dfwy.js')),
			__memo(() => import('./chunks/102-xSPaOPwk.js')),
			__memo(() => import('./chunks/103-qDzlAfj_.js')),
			__memo(() => import('./chunks/104-tgkyDn0d.js')),
			__memo(() => import('./chunks/105-Jg323m4D.js')),
			__memo(() => import('./chunks/106-DdKAg8S3.js')),
			__memo(() => import('./chunks/107-PRvXwnNG.js')),
			__memo(() => import('./chunks/108-kNBx-xfo.js')),
			__memo(() => import('./chunks/109-buuGm-C4.js')),
			__memo(() => import('./chunks/110-cJCJv2jn.js')),
			__memo(() => import('./chunks/111-OtlZSXEn.js')),
			__memo(() => import('./chunks/112-O5UxSXf6.js')),
			__memo(() => import('./chunks/113-dGSk0mC4.js')),
			__memo(() => import('./chunks/114-RAdjuC-D.js')),
			__memo(() => import('./chunks/115-PZqoo1xV.js')),
			__memo(() => import('./chunks/116-DoFt71Uw.js')),
			__memo(() => import('./chunks/117-YAFpLKIe.js')),
			__memo(() => import('./chunks/118-fNd_u_zP.js')),
			__memo(() => import('./chunks/119-YkggueLZ.js')),
			__memo(() => import('./chunks/120-wxEHdYh4.js')),
			__memo(() => import('./chunks/121-Kwlx8dXQ.js')),
			__memo(() => import('./chunks/122-7ajr-rzJ.js')),
			__memo(() => import('./chunks/123-Np9z_OFP.js')),
			__memo(() => import('./chunks/124-rhAp17uA.js')),
			__memo(() => import('./chunks/125-DyafxW3j.js')),
			__memo(() => import('./chunks/126-kdE_dEKR.js')),
			__memo(() => import('./chunks/127-fAgMLnAr.js')),
			__memo(() => import('./chunks/128-1nlIhsTx.js')),
			__memo(() => import('./chunks/129-53IunVp5.js')),
			__memo(() => import('./chunks/130-DpAvdaj7.js')),
			__memo(() => import('./chunks/131-NpL-p6Ur.js')),
			__memo(() => import('./chunks/132-KnLgpWpI.js')),
			__memo(() => import('./chunks/133-efNmpYrs.js')),
			__memo(() => import('./chunks/134-bYHGV_Wz.js')),
			__memo(() => import('./chunks/135-kHTrUyyJ.js')),
			__memo(() => import('./chunks/136-P9__AG8-.js')),
			__memo(() => import('./chunks/137-57txva2O.js')),
			__memo(() => import('./chunks/138-PdcAo2uB.js')),
			__memo(() => import('./chunks/139-_THTzAZ6.js')),
			__memo(() => import('./chunks/140-I66QU2o4.js')),
			__memo(() => import('./chunks/141-oylaEJu9.js')),
			__memo(() => import('./chunks/142-F7-C7CXa.js')),
			__memo(() => import('./chunks/143-C_5h5Qme.js')),
			__memo(() => import('./chunks/144-4uWtgTQM.js')),
			__memo(() => import('./chunks/145-lJdztdOw.js')),
			__memo(() => import('./chunks/146-YRk3sM7x.js')),
			__memo(() => import('./chunks/147-8Qs1PnrV.js')),
			__memo(() => import('./chunks/148-Nb7I00T3.js')),
			__memo(() => import('./chunks/149-4sOc5ew5.js')),
			__memo(() => import('./chunks/150-cUZk0ghE.js')),
			__memo(() => import('./chunks/151-bDdK6Xjw.js')),
			__memo(() => import('./chunks/152-4W8Mkb-v.js')),
			__memo(() => import('./chunks/153-r4nOXA_C.js')),
			__memo(() => import('./chunks/154-dFKeW51J.js')),
			__memo(() => import('./chunks/155-skpJc3vA.js')),
			__memo(() => import('./chunks/156-l7NF4T_8.js')),
			__memo(() => import('./chunks/157-241mI-8r.js')),
			__memo(() => import('./chunks/158-sUJRH0kB.js')),
			__memo(() => import('./chunks/159-_52sodFE.js')),
			__memo(() => import('./chunks/160-RbnYGNu2.js')),
			__memo(() => import('./chunks/161-wsbAvP1s.js')),
			__memo(() => import('./chunks/162-gl9QtYl7.js')),
			__memo(() => import('./chunks/163-yju_Swyy.js')),
			__memo(() => import('./chunks/164-gsLANyqk.js')),
			__memo(() => import('./chunks/165-3m_CH-5z.js')),
			__memo(() => import('./chunks/166-GmHhiSUg.js')),
			__memo(() => import('./chunks/167--bs36d_P.js')),
			__memo(() => import('./chunks/168-Lzw4E3JE.js')),
			__memo(() => import('./chunks/169-kRAPjjeP.js')),
			__memo(() => import('./chunks/170-DG6UvjP0.js')),
			__memo(() => import('./chunks/171-XhpFgJhZ.js')),
			__memo(() => import('./chunks/172-JmnzR5t4.js')),
			__memo(() => import('./chunks/173-gLONi1tp.js')),
			__memo(() => import('./chunks/174-5nxh95Ro.js')),
			__memo(() => import('./chunks/175-BfnM1HZQ.js')),
			__memo(() => import('./chunks/176-QW2MvkF3.js')),
			__memo(() => import('./chunks/177-B01L42Jg.js')),
			__memo(() => import('./chunks/178-pRjxW3Jn.js')),
			__memo(() => import('./chunks/179-PoPr4O8Z.js')),
			__memo(() => import('./chunks/180-n-D6rk35.js')),
			__memo(() => import('./chunks/181-5PwO_Itp.js')),
			__memo(() => import('./chunks/182-HvP8OxOs.js')),
			__memo(() => import('./chunks/183-gZnJhtfy.js')),
			__memo(() => import('./chunks/184-_iwzsWtl.js')),
			__memo(() => import('./chunks/185-6kAyyuHK.js')),
			__memo(() => import('./chunks/186-htolNKiA.js')),
			__memo(() => import('./chunks/187--4VVotr_.js')),
			__memo(() => import('./chunks/188-0c6qR_iQ.js')),
			__memo(() => import('./chunks/189-FvYR7sk8.js')),
			__memo(() => import('./chunks/190-cYlBycJq.js')),
			__memo(() => import('./chunks/191-giUB5fZh.js')),
			__memo(() => import('./chunks/192-5vH3AaBx.js')),
			__memo(() => import('./chunks/193-5u52rfE4.js')),
			__memo(() => import('./chunks/194-9AGppnkk.js')),
			__memo(() => import('./chunks/195-hBaD1LU7.js')),
			__memo(() => import('./chunks/196-HAcI5mWt.js')),
			__memo(() => import('./chunks/197-BEdZQWxK.js')),
			__memo(() => import('./chunks/198-fz_eyZU5.js')),
			__memo(() => import('./chunks/199-8ZG5nja8.js')),
			__memo(() => import('./chunks/200-EcveESaY.js')),
			__memo(() => import('./chunks/201-fD5CvAha.js')),
			__memo(() => import('./chunks/202-RCnfCyMY.js')),
			__memo(() => import('./chunks/203-xgVJRvW4.js')),
			__memo(() => import('./chunks/204-t45SNHh9.js')),
			__memo(() => import('./chunks/205-KHJ9VnWU.js')),
			__memo(() => import('./chunks/206-Vt5QzWiA.js')),
			__memo(() => import('./chunks/207-p_jQ8iFa.js')),
			__memo(() => import('./chunks/208-NWxa_R1h.js')),
			__memo(() => import('./chunks/209-bWmseNI_.js')),
			__memo(() => import('./chunks/210-jbyJTaHl.js')),
			__memo(() => import('./chunks/211-v1zAZbv4.js')),
			__memo(() => import('./chunks/212-_GtfOvrZ.js')),
			__memo(() => import('./chunks/213-k5RGNoWs.js')),
			__memo(() => import('./chunks/214-fGuzlhP9.js')),
			__memo(() => import('./chunks/215-Vp6E8E8M.js')),
			__memo(() => import('./chunks/216-ME8oYX0O.js')),
			__memo(() => import('./chunks/217-Brf9Duf5.js')),
			__memo(() => import('./chunks/218-S8h8JiZz.js')),
			__memo(() => import('./chunks/219-C94kCvNS.js')),
			__memo(() => import('./chunks/220-GHjk48ob.js')),
			__memo(() => import('./chunks/221-a1lPm5Py.js')),
			__memo(() => import('./chunks/222-NeJtDX8q.js')),
			__memo(() => import('./chunks/223-Q2gBWbGT.js')),
			__memo(() => import('./chunks/224-o7ZaE_yv.js')),
			__memo(() => import('./chunks/225-3jYmq0gh.js')),
			__memo(() => import('./chunks/226-tvX0HJk2.js')),
			__memo(() => import('./chunks/227-C1CIzISU.js')),
			__memo(() => import('./chunks/228-jYyC0whK.js')),
			__memo(() => import('./chunks/229-5lSbruMO.js')),
			__memo(() => import('./chunks/230-CeHXOsTe.js')),
			__memo(() => import('./chunks/231-hdblPHAk.js')),
			__memo(() => import('./chunks/232-SYI3ZgLQ.js')),
			__memo(() => import('./chunks/233-ecYWPPH5.js')),
			__memo(() => import('./chunks/234-e1vfnwyT.js')),
			__memo(() => import('./chunks/235-9ZAUAtjK.js')),
			__memo(() => import('./chunks/236-N5SUcyLD.js')),
			__memo(() => import('./chunks/237-qYU4VEAm.js')),
			__memo(() => import('./chunks/238-3PvmT5wF.js')),
			__memo(() => import('./chunks/239-3KrBL5C6.js')),
			__memo(() => import('./chunks/240-yvRyuGcj.js')),
			__memo(() => import('./chunks/241-aApW5lbv.js')),
			__memo(() => import('./chunks/242-Oj7ljK3f.js')),
			__memo(() => import('./chunks/243-I1SJhMwj.js')),
			__memo(() => import('./chunks/244-oTfIyLVB.js')),
			__memo(() => import('./chunks/245-5SbbFawh.js')),
			__memo(() => import('./chunks/246-8s0UG73k.js')),
			__memo(() => import('./chunks/247-JVHSBUVT.js')),
			__memo(() => import('./chunks/248-TRCMB_Dq.js')),
			__memo(() => import('./chunks/249-rrEA-X6K.js')),
			__memo(() => import('./chunks/250-fWSP9BOv.js')),
			__memo(() => import('./chunks/251-hGKhsw7C.js')),
			__memo(() => import('./chunks/252-Olwzq6MO.js')),
			__memo(() => import('./chunks/253-EAsTOrc-.js')),
			__memo(() => import('./chunks/254-oOFbnxPh.js')),
			__memo(() => import('./chunks/255-y-77hdyU.js')),
			__memo(() => import('./chunks/256-P6RXgQ4v.js')),
			__memo(() => import('./chunks/257-cbB45d1v.js')),
			__memo(() => import('./chunks/258-67AasY6a.js')),
			__memo(() => import('./chunks/259-aLVCWSJS.js')),
			__memo(() => import('./chunks/260-Z3ASsH_2.js')),
			__memo(() => import('./chunks/261-rb0x4Yqo.js')),
			__memo(() => import('./chunks/262-QeNw-44a.js')),
			__memo(() => import('./chunks/263-ImiGBfJh.js')),
			__memo(() => import('./chunks/264-YSLGgMpM.js')),
			__memo(() => import('./chunks/265-EC5rcYtQ.js')),
			__memo(() => import('./chunks/266-0OknnbuL.js')),
			__memo(() => import('./chunks/267-1vIgn-QH.js')),
			__memo(() => import('./chunks/268-ho8DlW64.js')),
			__memo(() => import('./chunks/269--UOFOEx1.js')),
			__memo(() => import('./chunks/270-YUsHi-MJ.js')),
			__memo(() => import('./chunks/271-1jzrbG_R.js')),
			__memo(() => import('./chunks/272-ilJThOmV.js')),
			__memo(() => import('./chunks/273-sNOUfVnf.js')),
			__memo(() => import('./chunks/274-ESD2qOTJ.js')),
			__memo(() => import('./chunks/275-I2Ak_7lj.js')),
			__memo(() => import('./chunks/276-CAhHsb5U.js')),
			__memo(() => import('./chunks/277-6IyAEJKC.js')),
			__memo(() => import('./chunks/278-4X6gxSWU.js')),
			__memo(() => import('./chunks/279-azQCNZ_u.js')),
			__memo(() => import('./chunks/280-jDm3tNqK.js')),
			__memo(() => import('./chunks/281-1Jn6DEP-.js')),
			__memo(() => import('./chunks/282-K3Y12h5W.js')),
			__memo(() => import('./chunks/283-LWMDG4dg.js')),
			__memo(() => import('./chunks/284-xBKH68NV.js')),
			__memo(() => import('./chunks/285-Rp2wQWku.js')),
			__memo(() => import('./chunks/286-u_JcCcWp.js')),
			__memo(() => import('./chunks/287-uaZVlwDq.js')),
			__memo(() => import('./chunks/288--KeGa8su.js')),
			__memo(() => import('./chunks/289-ABqEU9MI.js')),
			__memo(() => import('./chunks/290-jR2Zf_lB.js')),
			__memo(() => import('./chunks/291-sfrdnuJP.js')),
			__memo(() => import('./chunks/292-nmrKbdfw.js')),
			__memo(() => import('./chunks/293-vwD94ArK.js')),
			__memo(() => import('./chunks/294-irynjOce.js'))
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
				id: "/(general)/api/assignments",
				pattern: /^\/api\/assignments\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-lxRplWFm.js'))
			},
			{
				id: "/(general)/api/assignments/[assignmentID]",
				pattern: /^\/api\/assignments\/([^/]+?)\/?$/,
				params: [{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-_81Uv6Ep.js'))
			},
			{
				id: "/(general)/api/assignment",
				pattern: /^\/api\/assignment\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-M9zLGN9g.js'))
			},
			{
				id: "/(general)/api/login",
				pattern: /^\/api\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-5Vxzv5Nj.js'))
			},
			{
				id: "/(general)/api/profilepic",
				pattern: /^\/api\/profilepic\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-EbPc4J3P.js'))
			},
			{
				id: "/(general)/api/signup",
				pattern: /^\/api\/signup\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-QGBkuiXg.js'))
			},
			{
				id: "/(general)/api/submissions",
				pattern: /^\/api\/submissions\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-n1h0EWfZ.js'))
			},
			{
				id: "/(general)/api/userDetail",
				pattern: /^\/api\/userDetail\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-2gQAiZgx.js'))
			},
			{
				id: "/(general)/api/[publicID]",
				pattern: /^\/api\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-9XWl6SIz.js'))
			},
			{
				id: "/(general)/api/[publicID]/assignments",
				pattern: /^\/api\/([^/]+?)\/assignments\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-oxbZ9XoS.js'))
			},
			{
				id: "/(general)/api/[publicID]/assignments/new",
				pattern: /^\/api\/([^/]+?)\/assignments\/new\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-KS6DDLv-.js'))
			},
			{
				id: "/(general)/api/[publicID]/assignments/[assignmentID]",
				pattern: /^\/api\/([^/]+?)\/assignments\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-s98_le8Q.js'))
			},
			{
				id: "/(general)/api/[publicID]/assignments/[assignmentID]/question",
				pattern: /^\/api\/([^/]+?)\/assignments\/([^/]+?)\/question\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server--t9eafkN.js'))
			},
			{
				id: "/(general)/api/[publicID]/bannerpic",
				pattern: /^\/api\/([^/]+?)\/bannerpic\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-WjpSVIFP.js'))
			},
			{
				id: "/(general)/api/[publicID]/media",
				pattern: /^\/api\/([^/]+?)\/media\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-dBWYbKot.js'))
			},
			{
				id: "/(general)/api/[publicID]/profilepic",
				pattern: /^\/api\/([^/]+?)\/profilepic\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-dOUJJb_5.js'))
			},
			{
				id: "/(general)/api/[publicID]/questions",
				pattern: /^\/api\/([^/]+?)\/questions\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-Y5o8gbd0.js'))
			},
			{
				id: "/(general)/api/[publicID]/questions/new",
				pattern: /^\/api\/([^/]+?)\/questions\/new\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-k6SAwOof.js'))
			},
			{
				id: "/(general)/api/[publicID]/questions/[questionID]",
				pattern: /^\/api\/([^/]+?)\/questions\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"questionID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-GCi-ci5e.js'))
			},
			{
				id: "/(general)/api/[publicID]/register",
				pattern: /^\/api\/([^/]+?)\/register\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-5L3ica4U.js'))
			},
			{
				id: "/(general)/assignments",
				pattern: /^\/assignments\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/(general)/assignments/[assignmentID]",
				pattern: /^\/assignments\/([^/]+?)\/?$/,
				params: [{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/(general)/assignments/[assignmentID]/solution",
				pattern: /^\/assignments\/([^/]+?)\/solution\/?$/,
				params: [{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/(general)/auth",
				pattern: /^\/auth\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/(general)/courses",
				pattern: /^\/courses\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/(general)/courses/circuits",
				pattern: /^\/courses\/circuits\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab",
				pattern: /^\/courses\/internetlab\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 81 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/authentication",
				pattern: /^\/courses\/internetlab\/authentication\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 82 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/calculator",
				pattern: /^\/courses\/internetlab\/calculator\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 83 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/college",
				pattern: /^\/courses\/internetlab\/college\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 84 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/dtd",
				pattern: /^\/courses\/internetlab\/dtd\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 85 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/javascript",
				pattern: /^\/courses\/internetlab\/javascript\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 86 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/nodejs",
				pattern: /^\/courses\/internetlab\/nodejs\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 87 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/resume",
				pattern: /^\/courses\/internetlab\/resume\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 88 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/town",
				pattern: /^\/courses\/internetlab\/town\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 89 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/xml",
				pattern: /^\/courses\/internetlab\/xml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 90 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet",
				pattern: /^\/courses\/internet\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css",
				pattern: /^\/courses\/internet\/css\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/border",
				pattern: /^\/courses\/internet\/css\/border\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/box",
				pattern: /^\/courses\/internet\/css\/box\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/colors",
				pattern: /^\/courses\/internet\/css\/colors\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/layout",
				pattern: /^\/courses\/internet\/css\/layout\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/position",
				pattern: /^\/courses\/internet\/css\/position\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/practice",
				pattern: /^\/courses\/internet\/css\/practice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/responsive",
				pattern: /^\/courses\/internet\/css\/responsive\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/selectors",
				pattern: /^\/courses\/internet\/css\/selectors\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/typography",
				pattern: /^\/courses\/internet\/css\/typography\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript",
				pattern: /^\/courses\/internet\/javascript\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/asynchronous",
				pattern: /^\/courses\/internet\/javascript\/asynchronous\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics",
				pattern: /^\/courses\/internet\/javascript\/basics\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/dynamic",
				pattern: /^\/courses\/internet\/javascript\/dynamic\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/fetchapi",
				pattern: /^\/courses\/internet\/javascript\/fetchapi\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/html",
				pattern: /^\/courses\/internet\/javascript\/html\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/http",
				pattern: /^\/courses\/internet\/javascript\/http\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/nodejs",
				pattern: /^\/courses\/internet\/nodejs\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 52 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml",
				pattern: /^\/courses\/internet\/wwwhtml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 53 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 54 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/browsers",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/browsers\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 55 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/http",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/http\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 56 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/intro",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/intro\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 57 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/mime",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/mime\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 58 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/security",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/security\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 59 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/servers",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/servers\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 60 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/url",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/url\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 61 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/www",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/www\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 62 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 63 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/audio",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/audio\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 64 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/forms",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/forms\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 65 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/head",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/head\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 66 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/images",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/images\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 67 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/links",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/links\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 68 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/lists",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/lists\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 69 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/organization",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/organization\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 70 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/origins",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/origins\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 71 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/structure",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/structure\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 72 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/syntax",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/syntax\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 73 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/tables",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/tables\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 74 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/text",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/text\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 75 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/time",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/time\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 76 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/video",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/video\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 77 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/xhtml",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/xhtml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 78 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/practice1",
				pattern: /^\/courses\/internet\/wwwhtml\/practice1\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 79 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/xml",
				pattern: /^\/courses\/internet\/xml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 80 },
				endpoint: null
			},
			{
				id: "/(general)/courses/linearalgebra",
				pattern: /^\/courses\/linearalgebra\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 91 },
				endpoint: null
			},
			{
				id: "/(general)/courses/linearalgebra/bases",
				pattern: /^\/courses\/linearalgebra\/bases\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 92 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2",
				pattern: /^\/courses\/mathematics2\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 93 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 94 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/probability",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/probability\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 95 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/probability/conditional",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/probability\/conditional\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 96 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/probability/events",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/probability\/events\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 97 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/probability/independence",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/probability\/independence\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 98 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics",
				pattern: /^\/courses\/mathematics2\/statistics\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 99 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 100 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/bivariatedata",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/bivariatedata\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 101 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/bivariatefrequency",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/bivariatefrequency\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 102 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/correlation2",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/correlation2\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 103 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/correlationtypes",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/correlationtypes\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 104 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/pearson",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/pearson\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 105 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/spearman",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/spearman\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 106 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 107 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures/deviation",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/deviation\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 108 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures/mean",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/mean\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 109 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures/median",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/median\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 110 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures/mode",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/mode\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 111 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/regression",
				pattern: /^\/courses\/mathematics2\/statistics\/regression\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 112 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/regression/leastsquares",
				pattern: /^\/courses\/mathematics2\/statistics\/regression\/leastsquares\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 113 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/regression/regressioncoefficient",
				pattern: /^\/courses\/mathematics2\/statistics\/regression\/regressioncoefficient\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 114 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/regression/regressionlines",
				pattern: /^\/courses\/mathematics2\/statistics\/regression\/regressionlines\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 115 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/[assignmentID]",
				pattern: /^\/courses\/mathematics2\/([^/]+?)\/?$/,
				params: [{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 116 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/[assignmentID]/solution",
				pattern: /^\/courses\/mathematics2\/([^/]+?)\/solution\/?$/,
				params: [{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 117 },
				endpoint: null
			},
			{
				id: "/(general)/courses/qec",
				pattern: /^\/courses\/qec\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 118 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantumalgorithms",
				pattern: /^\/courses\/quantumalgorithms\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 119 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantumcommunication",
				pattern: /^\/courses\/quantumcommunication\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 120 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantumcomputers",
				pattern: /^\/courses\/quantumcomputers\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 121 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantumcryptography",
				pattern: /^\/courses\/quantumcryptography\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 122 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantuminformation1",
				pattern: /^\/courses\/quantuminformation1\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 123 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantuminformation2",
				pattern: /^\/courses\/quantuminformation2\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 124 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantummechanics",
				pattern: /^\/courses\/quantummechanics\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 125 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantumml",
				pattern: /^\/courses\/quantumml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 126 },
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
				page: { layouts: [0,4,], errors: [1,,], leaf: 127 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths",
				pattern: /^\/iit\/maths\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 128 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021",
				pattern: /^\/iit\/maths\/2021\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 129 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question1",
				pattern: /^\/iit\/maths\/2021\/question1\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 130 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question2",
				pattern: /^\/iit\/maths\/2021\/question2\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 131 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question3",
				pattern: /^\/iit\/maths\/2021\/question3\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 132 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question4",
				pattern: /^\/iit\/maths\/2021\/question4\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 133 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question5",
				pattern: /^\/iit\/maths\/2021\/question5\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 134 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question6",
				pattern: /^\/iit\/maths\/2021\/question6\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 135 },
				endpoint: null
			},
			{
				id: "/(general)/notes",
				pattern: /^\/notes\/?$/,
				params: [],
				page: { layouts: [0,4,,], errors: [1,,6,], leaf: 136 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths",
				pattern: /^\/notes\/maths\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 137 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of derivatives/Approximations",
				pattern: /^\/notes\/maths\/Application of derivatives\/Approximations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 138 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of derivatives/Increasing and decreasing functions",
				pattern: /^\/notes\/maths\/Application of derivatives\/Increasing and decreasing functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 139 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of derivatives/Maxima and minima",
				pattern: /^\/notes\/maths\/Application of derivatives\/Maxima and minima\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 140 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of derivatives/Rate of change of quantities",
				pattern: /^\/notes\/maths\/Application of derivatives\/Rate of change of quantities\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 141 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of derivatives/Tangents and normals",
				pattern: /^\/notes\/maths\/Application of derivatives\/Tangents and normals\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 142 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of integrals/Area between two curves",
				pattern: /^\/notes\/maths\/Application of integrals\/Area between two curves\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 143 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of integrals/Area under simple curves",
				pattern: /^\/notes\/maths\/Application of integrals\/Area under simple curves\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 144 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Binomial theorem/Binomial theorem for positive integral indices",
				pattern: /^\/notes\/maths\/Binomial theorem\/Binomial theorem for positive integral indices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 145 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Binomial theorem/General and middle terms",
				pattern: /^\/notes\/maths\/Binomial theorem\/General and middle terms\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 146 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Complex numbers and quadratic equations/Algebra of complex numbers",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Algebra of complex numbers\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 147 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Complex numbers and quadratic equations/Argand plane and polar representation",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Argand plane and polar representation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 148 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Complex numbers and quadratic equations/Complex numbers",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Complex numbers\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 149 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Complex numbers and quadratic equations/Quadratic equations",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Quadratic equations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 150 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Complex numbers and quadratic equations/The modulus and the conjugate of complex number",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/The modulus and the conjugate of complex number\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 151 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Conic sections/Circle",
				pattern: /^\/notes\/maths\/Conic sections\/Circle\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 153 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Conic sections/Ellipse",
				pattern: /^\/notes\/maths\/Conic sections\/Ellipse\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 154 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Conic sections/Hyperbola",
				pattern: /^\/notes\/maths\/Conic sections\/Hyperbola\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 155 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Conic sections/Parabola",
				pattern: /^\/notes\/maths\/Conic sections\/Parabola\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 156 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Conic sections/Sections of a cone",
				pattern: /^\/notes\/maths\/Conic sections\/Sections of a cone\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 157 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Continuity",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Continuity\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 158 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Derivatives of functions in parametric forms",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Derivatives of functions in parametric forms\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 159 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Differentiability",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Differentiability\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 160 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Exponential and logarithmic functions",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Exponential and logarithmic functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 161 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Logarithmic differentiation",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Logarithmic differentiation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 162 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Mean value theorem",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Mean value theorem\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 163 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Second order derivative",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Second order derivative\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 164 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Adjoint and inverse of a matrix",
				pattern: /^\/notes\/maths\/Determinants\/Adjoint and inverse of a matrix\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 165 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Applications of determinants and matrices",
				pattern: /^\/notes\/maths\/Determinants\/Applications of determinants and matrices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 166 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Area of a triangle",
				pattern: /^\/notes\/maths\/Determinants\/Area of a triangle\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 167 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Determinant",
				pattern: /^\/notes\/maths\/Determinants\/Determinant\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 168 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Minors and cofactors",
				pattern: /^\/notes\/maths\/Determinants\/Minors and cofactors\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 169 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Properties of determinants",
				pattern: /^\/notes\/maths\/Determinants\/Properties of determinants\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 170 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Differential equations/Basic concepts",
				pattern: /^\/notes\/maths\/Differential equations\/Basic concepts\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 171 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Differential equations/Formation of a differential equation whose general solution is given",
				pattern: /^\/notes\/maths\/Differential equations\/Formation of a differential equation whose general solution is given\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 172 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Differential equations/General and particular solutions of a differential equation",
				pattern: /^\/notes\/maths\/Differential equations\/General and particular solutions of a differential equation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 173 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Differential equations/Methods of solving first order first degree differential equations",
				pattern: /^\/notes\/maths\/Differential equations\/Methods of solving first order first degree differential equations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 174 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Indroduction to 3D geometry/Coordinate axes and coordinate planes in 3D space",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Coordinate axes and coordinate planes in 3D space\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 175 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Indroduction to 3D geometry/Coordinate of a point in space",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Coordinate of a point in space\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 176 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Indroduction to 3D geometry/Distance between two points",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Distance between two points\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 177 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Indroduction to 3D geometry/Section formula",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Section formula\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 178 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Definite integral",
				pattern: /^\/notes\/maths\/Integrals\/Definite integral\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 179 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Evaluation of definite integrals by substitution",
				pattern: /^\/notes\/maths\/Integrals\/Evaluation of definite integrals by substitution\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 180 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Fundamental theorem of calculus",
				pattern: /^\/notes\/maths\/Integrals\/Fundamental theorem of calculus\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 181 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Integrals of some particular functions",
				pattern: /^\/notes\/maths\/Integrals\/Integrals of some particular functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 182 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Integration as an inverse process of differentiation",
				pattern: /^\/notes\/maths\/Integrals\/Integration as an inverse process of differentiation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 183 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Integration by partial fractions",
				pattern: /^\/notes\/maths\/Integrals\/Integration by partial fractions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 184 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Integration by parts",
				pattern: /^\/notes\/maths\/Integrals\/Integration by parts\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 185 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Methods of integration",
				pattern: /^\/notes\/maths\/Integrals\/Methods of integration\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 186 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Some properties of definite integrals",
				pattern: /^\/notes\/maths\/Integrals\/Some properties of definite integrals\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 187 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Inverse trigonometric functions/Basic concepts",
				pattern: /^\/notes\/maths\/Inverse trigonometric functions\/Basic concepts\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 188 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Inverse trigonometric functions/Properties of inverse trigonometric functions",
				pattern: /^\/notes\/maths\/Inverse trigonometric functions\/Properties of inverse trigonometric functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 189 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Limits and derivatives/Derivatives",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Derivatives\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 190 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Limits and derivatives/Intuitive idea of derivatives",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Intuitive idea of derivatives\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 191 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Limits and derivatives/Limits of Trigonometric functions",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Limits of Trigonometric functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 193 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Limits and derivatives/Limits",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Limits\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 192 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear inequalities/Graphical solution in two variables",
				pattern: /^\/notes\/maths\/Linear inequalities\/Graphical solution in two variables\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 194 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear inequalities/Inequalities",
				pattern: /^\/notes\/maths\/Linear inequalities\/Inequalities\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 195 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear inequalities/One variable",
				pattern: /^\/notes\/maths\/Linear inequalities\/One variable\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 196 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear inequalities/Solution of system in two variables",
				pattern: /^\/notes\/maths\/Linear inequalities\/Solution of system in two variables\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 197 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear programming/Different types of linear programming problems",
				pattern: /^\/notes\/maths\/Linear programming\/Different types of linear programming problems\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 198 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear programming/Linear programming problem and its mathematical formulation",
				pattern: /^\/notes\/maths\/Linear programming\/Linear programming problem and its mathematical formulation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 199 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Invertible matrices",
				pattern: /^\/notes\/maths\/Matrices\/Invertible matrices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 200 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Matrix",
				pattern: /^\/notes\/maths\/Matrices\/Matrix\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 201 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Operations on matrices",
				pattern: /^\/notes\/maths\/Matrices\/Operations on matrices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 202 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Symmetric and skew symmetric matrices",
				pattern: /^\/notes\/maths\/Matrices\/Symmetric and skew symmetric matrices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 203 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Transformation of a matrix",
				pattern: /^\/notes\/maths\/Matrices\/Transformation of a matrix\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 204 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Transpose of a matrix",
				pattern: /^\/notes\/maths\/Matrices\/Transpose of a matrix\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 205 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Typse of matrices",
				pattern: /^\/notes\/maths\/Matrices\/Typse of matrices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 206 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Permutations and combinations/Combinations",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Combinations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 207 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Permutations and combinations/Fundamental principle of counting",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Fundamental principle of counting\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 208 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Permutations and combinations/Permutations",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Permutations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 209 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Principle of mathematical induction/Motivation",
				pattern: /^\/notes\/maths\/Principle of mathematical induction\/Motivation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 210 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Principle of mathematical induction/The principle of mathematical induction",
				pattern: /^\/notes\/maths\/Principle of mathematical induction\/The principle of mathematical induction\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 211 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Probability/Axiomatic approach to probability",
				pattern: /^\/notes\/maths\/Probability\/Axiomatic approach to probability\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 212 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Probability/Event",
				pattern: /^\/notes\/maths\/Probability\/Event\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 213 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Probability/Random experiments",
				pattern: /^\/notes\/maths\/Probability\/Random experiments\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 214 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 11/Cartesian product of sets",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Cartesian product of sets\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 215 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 11/Functions",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 216 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 11/Relations",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Relations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 217 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 12/Binary operations",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Binary operations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 218 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 12/Composition of functions and invertible function",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Composition of functions and invertible function\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 219 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 12/Types of functions",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Types of functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 220 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 12/Types of relations",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Types of relations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 221 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Arithmetic progression",
				pattern: /^\/notes\/maths\/Sequences and series\/Arithmetic progression\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 222 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Geometric progression",
				pattern: /^\/notes\/maths\/Sequences and series\/Geometric progression\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 223 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Relationship between AM and GM",
				pattern: /^\/notes\/maths\/Sequences and series\/Relationship between AM and GM\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 224 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Sequences",
				pattern: /^\/notes\/maths\/Sequences and series\/Sequences\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 225 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Series",
				pattern: /^\/notes\/maths\/Sequences and series\/Series\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 226 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Sum to n terms of Special series",
				pattern: /^\/notes\/maths\/Sequences and series\/Sum to n terms of Special series\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 227 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Complement of a set",
				pattern: /^\/notes\/maths\/Sets\/Complement of a set\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 228 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Equal sets",
				pattern: /^\/notes\/maths\/Sets\/Equal sets\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 229 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Finite and infinite sets",
				pattern: /^\/notes\/maths\/Sets\/Finite and infinite sets\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 230 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Introduction",
				pattern: /^\/notes\/maths\/Sets\/Introduction\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 231 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Operations on sets",
				pattern: /^\/notes\/maths\/Sets\/Operations on sets\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 232 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Power set",
				pattern: /^\/notes\/maths\/Sets\/Power set\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 233 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Practical problems",
				pattern: /^\/notes\/maths\/Sets\/Practical problems\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 234 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Real numbers",
				pattern: /^\/notes\/maths\/Sets\/Real numbers\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 235 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Sets and their representations",
				pattern: /^\/notes\/maths\/Sets\/Sets and their representations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 236 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Subsets",
				pattern: /^\/notes\/maths\/Sets\/Subsets\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 237 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/The empty set",
				pattern: /^\/notes\/maths\/Sets\/The empty set\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 238 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Universal set",
				pattern: /^\/notes\/maths\/Sets\/Universal set\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 239 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Venn diagrams",
				pattern: /^\/notes\/maths\/Sets\/Venn diagrams\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 240 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Statistics/Analysis of frequency distributions",
				pattern: /^\/notes\/maths\/Statistics\/Analysis of frequency distributions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 241 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Statistics/Mean deviation",
				pattern: /^\/notes\/maths\/Statistics\/Mean deviation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 242 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Statistics/Range",
				pattern: /^\/notes\/maths\/Statistics\/Range\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 243 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Statistics/Variance and standard deviation",
				pattern: /^\/notes\/maths\/Statistics\/Variance and standard deviation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 244 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Straight lines/Distance of a point from a line",
				pattern: /^\/notes\/maths\/Straight lines\/Distance of a point from a line\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 245 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Straight lines/General equation of a line",
				pattern: /^\/notes\/maths\/Straight lines\/General equation of a line\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 246 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Straight lines/Slope of a line",
				pattern: /^\/notes\/maths\/Straight lines\/Slope of a line\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 247 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Straight lines/Various forms of the equation of a line",
				pattern: /^\/notes\/maths\/Straight lines\/Various forms of the equation of a line\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 248 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Angle between a line and a plane",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Angle between a line and a plane\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 249 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Angle between two lines",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Angle between two lines\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 250 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Angle between two planes",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Angle between two planes\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 251 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Coplanarity of two lines",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Coplanarity of two lines\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 252 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Direction cosines and direction ratios of a line",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Direction cosines and direction ratios of a line\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 253 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Distance of a point from a plane",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Distance of a point from a plane\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 254 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Equation of a line in space",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Equation of a line in space\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 255 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Plane",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Plane\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 256 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Shortest distance between two lines",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Shortest distance between two lines\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 257 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Trigonometric functions/Angles",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Angles\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 258 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Trigonometric functions/Trigonometric equations",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric equations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 259 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Trigonometric functions/Trigonometric functions of sum and difference of two angles",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric functions of sum and difference of two angles\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 261 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Trigonometric functions/Trigonometric functions",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 260 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Vector algebra/Addition of vectors",
				pattern: /^\/notes\/maths\/Vector algebra\/Addition of vectors\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 262 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Vector algebra/Multiplication of a vector by a scalar",
				pattern: /^\/notes\/maths\/Vector algebra\/Multiplication of a vector by a scalar\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 263 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Vector algebra/Product of two vectors",
				pattern: /^\/notes\/maths\/Vector algebra\/Product of two vectors\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 264 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Vector algebra/Some basic concepts",
				pattern: /^\/notes\/maths\/Vector algebra\/Some basic concepts\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 265 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Vector algebra/Types of vectors",
				pattern: /^\/notes\/maths\/Vector algebra\/Types of vectors\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 266 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/conic",
				pattern: /^\/notes\/maths\/conic\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 152 },
				endpoint: null
			},
			{
				id: "/(general)/practice",
				pattern: /^\/practice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 267 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class10",
				pattern: /^\/practice\/class10\/?$/,
				params: [],
				page: { layouts: [0,4,10,], errors: [1,,,], leaf: 269 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class11",
				pattern: /^\/practice\/class11\/?$/,
				params: [],
				page: { layouts: [0,4,11,], errors: [1,,,], leaf: 270 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class12",
				pattern: /^\/practice\/class12\/?$/,
				params: [],
				page: { layouts: [0,4,12,], errors: [1,,,], leaf: 271 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class1",
				pattern: /^\/practice\/class1\/?$/,
				params: [],
				page: { layouts: [0,4,9,], errors: [1,,,], leaf: 268 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class2",
				pattern: /^\/practice\/class2\/?$/,
				params: [],
				page: { layouts: [0,4,13,], errors: [1,,,], leaf: 272 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class3",
				pattern: /^\/practice\/class3\/?$/,
				params: [],
				page: { layouts: [0,4,14,], errors: [1,,,], leaf: 273 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class4",
				pattern: /^\/practice\/class4\/?$/,
				params: [],
				page: { layouts: [0,4,15,], errors: [1,,,], leaf: 274 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class5",
				pattern: /^\/practice\/class5\/?$/,
				params: [],
				page: { layouts: [0,4,16,], errors: [1,,,], leaf: 275 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class6",
				pattern: /^\/practice\/class6\/?$/,
				params: [],
				page: { layouts: [0,4,17,], errors: [1,,,], leaf: 276 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class7",
				pattern: /^\/practice\/class7\/?$/,
				params: [],
				page: { layouts: [0,4,18,], errors: [1,,,], leaf: 277 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class8",
				pattern: /^\/practice\/class8\/?$/,
				params: [],
				page: { layouts: [0,4,19,], errors: [1,,,], leaf: 278 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class9",
				pattern: /^\/practice\/class9\/?$/,
				params: [],
				page: { layouts: [0,4,20,], errors: [1,,,], leaf: 279 },
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
				id: "/(general)/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 280 },
				endpoint: null
			},
			{
				id: "/(general)/settings/profile",
				pattern: /^\/settings\/profile\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 281 },
				endpoint: null
			},
			{
				id: "/(general)/students",
				pattern: /^\/students\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 282 },
				endpoint: null
			},
			{
				id: "/(general)/talks",
				pattern: /^\/talks\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 283 },
				endpoint: null
			},
			{
				id: "/(general)/talks/quantumstatus",
				pattern: /^\/talks\/quantumstatus\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 284 },
				endpoint: null
			},
			{
				id: "/(general)/talks/quantumteleportation",
				pattern: /^\/talks\/quantumteleportation\/?$/,
				params: [],
				page: { layouts: [0,4,21,], errors: [1,,,], leaf: 285 },
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
				id: "/(general)/[publicID]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 287 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/assignments",
				pattern: /^\/([^/]+?)\/assignments\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 288 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/assignments/new",
				pattern: /^\/([^/]+?)\/assignments\/new\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 289 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/assignments/[assignmentID]",
				pattern: /^\/([^/]+?)\/assignments\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 290 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/questions",
				pattern: /^\/([^/]+?)\/questions\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 291 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/questions/new",
				pattern: /^\/([^/]+?)\/questions\/new\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 292 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/questions/[questionID]",
				pattern: /^\/([^/]+?)\/questions\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"questionID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 293 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/submissions",
				pattern: /^\/([^/]+?)\/submissions\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 294 },
				endpoint: null
			},
			{
				id: "/(general)/[...catchAll]",
				pattern: /^(?:\/(.*))?\/?$/,
				params: [{"name":"catchAll","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 286 },
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
