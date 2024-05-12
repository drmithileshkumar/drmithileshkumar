const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["announcement/html.svg","announcement/perspective.svg","app.css","avatar.svg","background copy.svg","background.svg","banner.png","banner.svg","circle_demo/circle.png","circle_demo/circle_anime.mp4","circle_demo/Cone-equation.png","circle_demo/Cone.png","circle_demo/conics.png","circle_demo/Conic_anime.mp4","circle_demo/Conic_deg.mp4","circle_demo/ellipse_anime.mp4","circle_demo/hyperbola_anime.mp4","circle_demo/IIT21Q1.png","circle_demo/orthocenter.png","circle_demo/parabola_anime.mp4","circle_demo/Plane.png","circle_demo/Tangents.png","circle_demo/threepointcircle.png","CMIMedal.jpg","cmithesis.pdf","common.css","courses/internet/css/boxmodel.svg","courses/internet/wwwhtml/fundamentals/intro/dns.png","courses/internet/wwwhtml/fundamentals/intro/dns.webp","courses/internet/wwwhtml/html/audio/tada.wav","courses/internet/wwwhtml/html/video/germinate.mp4","courses/mathematics2/normal.jpg","courses/mathematics2/normalCritical.png","courses/mathematics2/ztable1.webp","courses/mathematics2/ztable2.webp","custom.css","dark.css","facebook.svg","favicon.png","IITMSc.jpg","instagram.svg","LCPath.svg","light.css","manifest.json","mithileshkumar.png","notes/maths/sets/equal/thumbnail.svg","notes/maths/sets/finite/thumbnail.svg","notes/maths/sets/introduction/example.svg","notes/maths/sets/introduction/oddeven.svg","notes/maths/sets/real/interval.svg","notes/maths/sets/real/subsetreal.svg","notes/maths/sets/representation/heroparadox.svg","notes/maths/sets/subsets/thumbnail.svg","notes/maths/sets/subsets/tree.svg","notes/quantum/CNOT.svg","notes/quantum/qubit2d.svg","notes/quantum/teleportation.svg","photo_cv.jpg","profilephoto.jpeg","robots.txt","santa.svg","smui-dark.css","smui.css","svelte-welcome.png","svelte-welcome.webp","telegram.svg","thesis.pdf","twitter copy.png","twitter.png","vectorial/vectorialhome.svg","webdutIcon.png","youtube.svg","service-worker.js"]),
	mimeTypes: {".svg":"image/svg+xml",".css":"text/css",".png":"image/png",".mp4":"video/mp4",".jpg":"image/jpeg",".pdf":"application/pdf",".webp":"image/webp",".wav":"audio/wav",".json":"application/json",".jpeg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.zIF2DmAs.js","app":"_app/immutable/entry/app.DGKAVI_u.js","imports":["_app/immutable/entry/start.zIF2DmAs.js","_app/immutable/chunks/entry.DJpP3rcz.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DEfXOQ1n.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.DGKAVI_u.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DpF29SJU.js')),
			__memo(() => import('./chunks/1-DolhZj44.js')),
			__memo(() => import('./chunks/2-BrivNqKb.js')),
			__memo(() => import('./chunks/3-DmmoQpy-.js')),
			__memo(() => import('./chunks/4-Dd7ZfDjp.js')),
			__memo(() => import('./chunks/5-Ce2kTAOA.js')),
			__memo(() => import('./chunks/6-BloPOP6A.js')),
			__memo(() => import('./chunks/7-BOi_HOwo.js')),
			__memo(() => import('./chunks/8-BBwG9AYU.js')),
			__memo(() => import('./chunks/9-bjMg5L-I.js')),
			__memo(() => import('./chunks/10-ByG_qZPq.js')),
			__memo(() => import('./chunks/11-B78-CraT.js')),
			__memo(() => import('./chunks/12-Bp_MUjHz.js')),
			__memo(() => import('./chunks/13-CkAFrf4g.js')),
			__memo(() => import('./chunks/14-CMw7UiMz.js')),
			__memo(() => import('./chunks/15-BE7qg1uG.js')),
			__memo(() => import('./chunks/16-C3AZxob-.js')),
			__memo(() => import('./chunks/17-CFOg6Nfj.js')),
			__memo(() => import('./chunks/18-DJTWQDR8.js')),
			__memo(() => import('./chunks/19-XongxzNK.js')),
			__memo(() => import('./chunks/20-Cx5Jgzr1.js')),
			__memo(() => import('./chunks/21-Cp-dQTM8.js')),
			__memo(() => import('./chunks/22-D_N4LhDt.js')),
			__memo(() => import('./chunks/23-CGhM4Hz3.js')),
			__memo(() => import('./chunks/24-9obQR152.js')),
			__memo(() => import('./chunks/25-CPpZjA5l.js')),
			__memo(() => import('./chunks/26-EP1RvMeb.js')),
			__memo(() => import('./chunks/27-CCN9Q7Dr.js')),
			__memo(() => import('./chunks/28-CWuzpta3.js')),
			__memo(() => import('./chunks/29-ZPFiGItO.js')),
			__memo(() => import('./chunks/30-BvIW32Po.js')),
			__memo(() => import('./chunks/31-BJpi3lJl.js')),
			__memo(() => import('./chunks/32-mR9npoRA.js')),
			__memo(() => import('./chunks/33-DyrTHZiZ.js')),
			__memo(() => import('./chunks/34-Bm04iZq0.js')),
			__memo(() => import('./chunks/35-CLbIqKGy.js')),
			__memo(() => import('./chunks/36-B8Y292ym.js')),
			__memo(() => import('./chunks/37-DnC0bC8G.js')),
			__memo(() => import('./chunks/38-BmbMgSpu.js')),
			__memo(() => import('./chunks/39-Dnoxncol.js')),
			__memo(() => import('./chunks/40-BKcdy0dG.js')),
			__memo(() => import('./chunks/41-DXpfh7T5.js')),
			__memo(() => import('./chunks/42-CaxSlRJ-.js')),
			__memo(() => import('./chunks/43-Cnx-o0jy.js')),
			__memo(() => import('./chunks/44-CzkTp4ob.js')),
			__memo(() => import('./chunks/45-BTbbycJ2.js')),
			__memo(() => import('./chunks/46-BC6X1YnH.js')),
			__memo(() => import('./chunks/47-BR2b4CvF.js')),
			__memo(() => import('./chunks/48-CXTnHlDG.js')),
			__memo(() => import('./chunks/49-CtFzi1Bt.js')),
			__memo(() => import('./chunks/50-BGoHz7gm.js')),
			__memo(() => import('./chunks/51-MvsrC6m9.js')),
			__memo(() => import('./chunks/52-B3i47Za_.js')),
			__memo(() => import('./chunks/53-Cu0IaqUf.js')),
			__memo(() => import('./chunks/54-CxwB_Bff.js')),
			__memo(() => import('./chunks/55-CAetK3ZS.js')),
			__memo(() => import('./chunks/56-Cj1PEGB_.js')),
			__memo(() => import('./chunks/57-CRqbnY0c.js')),
			__memo(() => import('./chunks/58-C8-XthuQ.js')),
			__memo(() => import('./chunks/59-DGLCMgbV.js')),
			__memo(() => import('./chunks/60-5TbvwONk.js')),
			__memo(() => import('./chunks/61-Cotue9xj.js')),
			__memo(() => import('./chunks/62-BfaLOTfl.js')),
			__memo(() => import('./chunks/63-CpVDlbYB.js')),
			__memo(() => import('./chunks/64-3G9PYiga.js')),
			__memo(() => import('./chunks/65-DKYCOIV4.js')),
			__memo(() => import('./chunks/66-CONDdkLA.js')),
			__memo(() => import('./chunks/67-DZ5E5f-7.js')),
			__memo(() => import('./chunks/68-CVJBpDlG.js')),
			__memo(() => import('./chunks/69-rRPYY5Qc.js')),
			__memo(() => import('./chunks/70-CHLBHXc5.js')),
			__memo(() => import('./chunks/71-BiI6nE9N.js')),
			__memo(() => import('./chunks/72-BUlnNDGJ.js')),
			__memo(() => import('./chunks/73-Dccd7CLy.js')),
			__memo(() => import('./chunks/74-BTLjO9Cj.js')),
			__memo(() => import('./chunks/75-hbW4wq57.js')),
			__memo(() => import('./chunks/76-BIRbMQl6.js')),
			__memo(() => import('./chunks/77-XtCvasPN.js')),
			__memo(() => import('./chunks/78-CwU2gtGz.js')),
			__memo(() => import('./chunks/79-BeotJvMv.js')),
			__memo(() => import('./chunks/80-5w6AejSx.js')),
			__memo(() => import('./chunks/81-CDTOAMST.js')),
			__memo(() => import('./chunks/82-DHkqKIvv.js')),
			__memo(() => import('./chunks/83-BL6SqnFs.js')),
			__memo(() => import('./chunks/84-RRwraA66.js')),
			__memo(() => import('./chunks/85-Dn86Md1N.js')),
			__memo(() => import('./chunks/86-BaIgdYrF.js')),
			__memo(() => import('./chunks/87-D1_pEqX0.js')),
			__memo(() => import('./chunks/88-C0g8iK_d.js')),
			__memo(() => import('./chunks/89-DmUSZ6E8.js')),
			__memo(() => import('./chunks/90-DRddBTMm.js')),
			__memo(() => import('./chunks/91-B_w9ew-s.js')),
			__memo(() => import('./chunks/92-B7ZCkvvi.js')),
			__memo(() => import('./chunks/93-C1iGyZU7.js')),
			__memo(() => import('./chunks/94-C9DGq8zJ.js')),
			__memo(() => import('./chunks/95-CNdIxecf.js')),
			__memo(() => import('./chunks/96--FxVucES.js')),
			__memo(() => import('./chunks/97-GaZR9dsI.js')),
			__memo(() => import('./chunks/98-CgBszagd.js')),
			__memo(() => import('./chunks/99-wcoiUoj7.js')),
			__memo(() => import('./chunks/100-BofZs_68.js')),
			__memo(() => import('./chunks/101-DP0m7eOO.js')),
			__memo(() => import('./chunks/102-Dh-yQvMV.js')),
			__memo(() => import('./chunks/103-C46tEkAn.js')),
			__memo(() => import('./chunks/104-CVJsgOFq.js')),
			__memo(() => import('./chunks/105-ats5cotu.js')),
			__memo(() => import('./chunks/106-Drv38sH1.js')),
			__memo(() => import('./chunks/107-V0iz0CZ0.js')),
			__memo(() => import('./chunks/108-DRTv3BUO.js')),
			__memo(() => import('./chunks/109-DG12Fwwy.js')),
			__memo(() => import('./chunks/110-CDQMwu6E.js')),
			__memo(() => import('./chunks/111-DyvK5wVt.js')),
			__memo(() => import('./chunks/112-BHwOGl5B.js')),
			__memo(() => import('./chunks/113-DwK6bS29.js')),
			__memo(() => import('./chunks/114-Dn3JteVM.js')),
			__memo(() => import('./chunks/115-DenbxP1M.js')),
			__memo(() => import('./chunks/116-BWnWYewG.js')),
			__memo(() => import('./chunks/117-CVP2SCy-.js')),
			__memo(() => import('./chunks/118-D2hUwFQ1.js')),
			__memo(() => import('./chunks/119-Xyekdr-O.js')),
			__memo(() => import('./chunks/120-KM8zIiLe.js')),
			__memo(() => import('./chunks/121-FArKNNrM.js')),
			__memo(() => import('./chunks/122-CRuMnr3P.js')),
			__memo(() => import('./chunks/123-e8JOy97b.js')),
			__memo(() => import('./chunks/124-DY6fuljf.js')),
			__memo(() => import('./chunks/125-CqydLid2.js')),
			__memo(() => import('./chunks/126-C9sKJpRa.js')),
			__memo(() => import('./chunks/127-CovAmWNd.js')),
			__memo(() => import('./chunks/128-CZnb1FfD.js')),
			__memo(() => import('./chunks/129-XAQ1WNgC.js')),
			__memo(() => import('./chunks/130-C4cpKSMo.js')),
			__memo(() => import('./chunks/131-GM-bMFOZ.js')),
			__memo(() => import('./chunks/132-BBZj3Dki.js')),
			__memo(() => import('./chunks/133-CrZnIW-O.js')),
			__memo(() => import('./chunks/134-B0OZ0APJ.js')),
			__memo(() => import('./chunks/135-DB4OH6jx.js')),
			__memo(() => import('./chunks/136-CK_wCElf.js')),
			__memo(() => import('./chunks/137-B5un6gzG.js')),
			__memo(() => import('./chunks/138-BSlpGTsB.js')),
			__memo(() => import('./chunks/139-LByCvAkZ.js')),
			__memo(() => import('./chunks/140-DzDnpRan.js')),
			__memo(() => import('./chunks/141-Dfs9pzrW.js')),
			__memo(() => import('./chunks/142-43Ku5KuM.js')),
			__memo(() => import('./chunks/143-jtzw90ld.js')),
			__memo(() => import('./chunks/144-B8ZYAQ45.js')),
			__memo(() => import('./chunks/145-BeDlxYot.js')),
			__memo(() => import('./chunks/146-08yG-22D.js')),
			__memo(() => import('./chunks/147-CxsWkjk3.js')),
			__memo(() => import('./chunks/148-33HgQs6m.js')),
			__memo(() => import('./chunks/149-CEnoxdK3.js')),
			__memo(() => import('./chunks/150-Dzh4QMfO.js')),
			__memo(() => import('./chunks/151-D9ZArvV7.js')),
			__memo(() => import('./chunks/152-C7GbSjJQ.js')),
			__memo(() => import('./chunks/153-CL2xt2By.js')),
			__memo(() => import('./chunks/154-CYKvh6S-.js')),
			__memo(() => import('./chunks/155-CiijX1AV.js')),
			__memo(() => import('./chunks/156-DX2cuExM.js')),
			__memo(() => import('./chunks/157-Dcsl8Y6J.js')),
			__memo(() => import('./chunks/158-B9RCGc_u.js')),
			__memo(() => import('./chunks/159-TkcMAEcP.js')),
			__memo(() => import('./chunks/160-Cwm8lVm0.js')),
			__memo(() => import('./chunks/161-C_tMYvxB.js')),
			__memo(() => import('./chunks/162-C3X7ZXvM.js')),
			__memo(() => import('./chunks/163-B8gflxxW.js')),
			__memo(() => import('./chunks/164-B490cwc6.js')),
			__memo(() => import('./chunks/165-DvnDWPZ6.js')),
			__memo(() => import('./chunks/166-DmdktJBi.js')),
			__memo(() => import('./chunks/167-KO9PFvs7.js')),
			__memo(() => import('./chunks/168-By_Jn7m6.js')),
			__memo(() => import('./chunks/169-Dmmn1xNf.js')),
			__memo(() => import('./chunks/170-gZ5I8NxQ.js')),
			__memo(() => import('./chunks/171-CPte3Fdq.js')),
			__memo(() => import('./chunks/172-CAE7E4sH.js')),
			__memo(() => import('./chunks/173-BWZ9g1Lr.js')),
			__memo(() => import('./chunks/174-BMAOEKAm.js')),
			__memo(() => import('./chunks/175-CDFKYlmo.js')),
			__memo(() => import('./chunks/176-6JzVIO25.js')),
			__memo(() => import('./chunks/177-ZcPtP312.js')),
			__memo(() => import('./chunks/178-BBQPWE8i.js')),
			__memo(() => import('./chunks/179-CRjEH_dk.js')),
			__memo(() => import('./chunks/180-t7rMOaqu.js')),
			__memo(() => import('./chunks/181-BOXbffrh.js')),
			__memo(() => import('./chunks/182-CkWfhbo5.js')),
			__memo(() => import('./chunks/183-BaJh9m8n.js')),
			__memo(() => import('./chunks/184-BJ6L67dm.js')),
			__memo(() => import('./chunks/185-DnOxVuk2.js')),
			__memo(() => import('./chunks/186-C36X8tbu.js')),
			__memo(() => import('./chunks/187-B86ACnXF.js')),
			__memo(() => import('./chunks/188-Dytx1L3t.js')),
			__memo(() => import('./chunks/189-Ahos9k5U.js')),
			__memo(() => import('./chunks/190-FbznAGhi.js')),
			__memo(() => import('./chunks/191-CuyfnvJq.js')),
			__memo(() => import('./chunks/192-Dm5OEi_s.js')),
			__memo(() => import('./chunks/193-K7bUutb2.js')),
			__memo(() => import('./chunks/194-CS5-pIOs.js')),
			__memo(() => import('./chunks/195-CC62M5Ff.js')),
			__memo(() => import('./chunks/196-C_UXVrGt.js')),
			__memo(() => import('./chunks/197-FY7cT-fg.js')),
			__memo(() => import('./chunks/198-B-PXHdGx.js')),
			__memo(() => import('./chunks/199-DTyOrO_Y.js')),
			__memo(() => import('./chunks/200-BmlAWyXx.js')),
			__memo(() => import('./chunks/201-CXfk5x7v.js')),
			__memo(() => import('./chunks/202-DMM7Iill.js')),
			__memo(() => import('./chunks/203-BbjVwkzu.js')),
			__memo(() => import('./chunks/204-kBwthOUd.js')),
			__memo(() => import('./chunks/205-Y8AXN_xq.js')),
			__memo(() => import('./chunks/206-Dlsh3bUQ.js')),
			__memo(() => import('./chunks/207-DwZIiHJ4.js')),
			__memo(() => import('./chunks/208-2Zbdp-Rm.js')),
			__memo(() => import('./chunks/209-BOFRuuZq.js')),
			__memo(() => import('./chunks/210-DGLD4Jsh.js')),
			__memo(() => import('./chunks/211-BZ-N-4K7.js')),
			__memo(() => import('./chunks/212-C3nt8oj4.js')),
			__memo(() => import('./chunks/213-URQf039i.js')),
			__memo(() => import('./chunks/214-CrhwMrjp.js')),
			__memo(() => import('./chunks/215-DP6me8KO.js')),
			__memo(() => import('./chunks/216-DWof1UW9.js')),
			__memo(() => import('./chunks/217-DqBESsN1.js')),
			__memo(() => import('./chunks/218-Delq3rLJ.js')),
			__memo(() => import('./chunks/219-CwqWXAJV.js')),
			__memo(() => import('./chunks/220-CY8Xe5cH.js')),
			__memo(() => import('./chunks/221-Cjabioy4.js')),
			__memo(() => import('./chunks/222-CzyBz4se.js')),
			__memo(() => import('./chunks/223-CoobmJyh.js')),
			__memo(() => import('./chunks/224-BC55EmOB.js')),
			__memo(() => import('./chunks/225-MU1KF6P7.js')),
			__memo(() => import('./chunks/226-TakFCmpf.js')),
			__memo(() => import('./chunks/227-CDq_QHNJ.js')),
			__memo(() => import('./chunks/228-BXmC0tDa.js')),
			__memo(() => import('./chunks/229-CI_iRsSu.js')),
			__memo(() => import('./chunks/230-DsBWQTbH.js')),
			__memo(() => import('./chunks/231-X-2VvLuS.js')),
			__memo(() => import('./chunks/232-ByitURdq.js')),
			__memo(() => import('./chunks/233-DZdvVWVW.js')),
			__memo(() => import('./chunks/234-DIdP7ph2.js')),
			__memo(() => import('./chunks/235-Bg3Ecwgw.js')),
			__memo(() => import('./chunks/236-nZP3iEMv.js')),
			__memo(() => import('./chunks/237-Du4ziS9f.js')),
			__memo(() => import('./chunks/238-CgUtGVWa.js')),
			__memo(() => import('./chunks/239-BFX6RyUv.js')),
			__memo(() => import('./chunks/240-U749fZ2O.js')),
			__memo(() => import('./chunks/241-uA8g1-g_.js')),
			__memo(() => import('./chunks/242-D0rbn-uk.js')),
			__memo(() => import('./chunks/243-ByXvNsEv.js')),
			__memo(() => import('./chunks/244-wOj2q1Ju.js')),
			__memo(() => import('./chunks/245-DLyktxRC.js')),
			__memo(() => import('./chunks/246-DAcWnXAy.js')),
			__memo(() => import('./chunks/247-CLPtK4HD.js')),
			__memo(() => import('./chunks/248-CpVkIUyA.js')),
			__memo(() => import('./chunks/249-C7bQQvID.js')),
			__memo(() => import('./chunks/250-B5OEqGr8.js')),
			__memo(() => import('./chunks/251-BOMY4Wmi.js')),
			__memo(() => import('./chunks/252-2a-K-mO3.js')),
			__memo(() => import('./chunks/253-b96oEUFr.js')),
			__memo(() => import('./chunks/254-kysWUqEa.js')),
			__memo(() => import('./chunks/255-BClMU1Jp.js')),
			__memo(() => import('./chunks/256-B3vbZGUY.js')),
			__memo(() => import('./chunks/257-jWnyzL0y.js')),
			__memo(() => import('./chunks/258-CRCruuRo.js')),
			__memo(() => import('./chunks/259-BldntZ0T.js')),
			__memo(() => import('./chunks/260-B9DktWZo.js')),
			__memo(() => import('./chunks/261-DQLVTYpy.js')),
			__memo(() => import('./chunks/262-D1sOxtUe.js')),
			__memo(() => import('./chunks/263-vB7xAOcR.js')),
			__memo(() => import('./chunks/264-8wYJQEj1.js')),
			__memo(() => import('./chunks/265-CiWH8sBw.js')),
			__memo(() => import('./chunks/266-DF8WA8Zn.js')),
			__memo(() => import('./chunks/267-BiSsrwwD.js')),
			__memo(() => import('./chunks/268-J4e8UtuX.js')),
			__memo(() => import('./chunks/269-D3NEimUg.js')),
			__memo(() => import('./chunks/270-Dza41hY8.js')),
			__memo(() => import('./chunks/271-Jl78vYDa.js')),
			__memo(() => import('./chunks/272-BSOl87Yd.js')),
			__memo(() => import('./chunks/273-DSEgQf_7.js')),
			__memo(() => import('./chunks/274-BTiyXJn8.js')),
			__memo(() => import('./chunks/275-i7OsvxsS.js')),
			__memo(() => import('./chunks/276-BX9LEqDx.js')),
			__memo(() => import('./chunks/277-DHWWaQ1e.js')),
			__memo(() => import('./chunks/278-DizpO4Se.js')),
			__memo(() => import('./chunks/279-D9WiSCE_.js')),
			__memo(() => import('./chunks/280-DZxqcHkv.js')),
			__memo(() => import('./chunks/281-DDVo9zEm.js')),
			__memo(() => import('./chunks/282-BOmNKowT.js')),
			__memo(() => import('./chunks/283--1Sqis6b.js')),
			__memo(() => import('./chunks/284-CE_fSWVS.js')),
			__memo(() => import('./chunks/285-BTEcinfO.js')),
			__memo(() => import('./chunks/286-Casg7FaH.js')),
			__memo(() => import('./chunks/287-C2juIq4p.js')),
			__memo(() => import('./chunks/288-ySgGgagv.js')),
			__memo(() => import('./chunks/289-D_D7xcxp.js')),
			__memo(() => import('./chunks/290-YDS4f6ef.js')),
			__memo(() => import('./chunks/291-D1Hu8T-f.js')),
			__memo(() => import('./chunks/292-Lsx9Fcrs.js')),
			__memo(() => import('./chunks/293-BF9pFb3h.js')),
			__memo(() => import('./chunks/294-CkMsPiqB.js')),
			__memo(() => import('./chunks/295-sgLyD0PC.js')),
			__memo(() => import('./chunks/296-B5U3xyJk.js')),
			__memo(() => import('./chunks/297-ISbfSBCb.js')),
			__memo(() => import('./chunks/298-D5f5U7fi.js')),
			__memo(() => import('./chunks/299-DAqOLlR6.js')),
			__memo(() => import('./chunks/300-CpY-2LdM.js')),
			__memo(() => import('./chunks/301-CJG1YUtN.js')),
			__memo(() => import('./chunks/302-CLZrCsaH.js')),
			__memo(() => import('./chunks/303-CsfmCeEb.js')),
			__memo(() => import('./chunks/304-jQhvCBPu.js')),
			__memo(() => import('./chunks/305-B6psn1mS.js')),
			__memo(() => import('./chunks/306-BDWvoNe5.js')),
			__memo(() => import('./chunks/307-BTBjc691.js')),
			__memo(() => import('./chunks/308-C9H8M5nB.js')),
			__memo(() => import('./chunks/309-Ci63l8dO.js')),
			__memo(() => import('./chunks/310-CtrTY-2V.js')),
			__memo(() => import('./chunks/311-CADZZRlb.js')),
			__memo(() => import('./chunks/312-fZZoLyUw.js')),
			__memo(() => import('./chunks/313-Chgetp_h.js')),
			__memo(() => import('./chunks/314-Bp_tfHvv.js')),
			__memo(() => import('./chunks/315-B-74P9TE.js')),
			__memo(() => import('./chunks/316-CNbqfVIp.js')),
			__memo(() => import('./chunks/317-BYDiIDvT.js')),
			__memo(() => import('./chunks/318-D1Aqrf_O.js')),
			__memo(() => import('./chunks/319-Cp5a4sgL.js')),
			__memo(() => import('./chunks/320-BnoYix8V.js')),
			__memo(() => import('./chunks/321-EZlmEzz8.js')),
			__memo(() => import('./chunks/322-D8P_8ZDo.js'))
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
				endpoint: __memo(() => import('./chunks/_server-btMV0_CO.js'))
			},
			{
				id: "/(general)/api/assignments/[assignmentID]",
				pattern: /^\/api\/assignments\/([^/]+?)\/?$/,
				params: [{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CnkhC017.js'))
			},
			{
				id: "/(general)/api/assignment",
				pattern: /^\/api\/assignment\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-DYY5zBwb.js'))
			},
			{
				id: "/(general)/api/login",
				pattern: /^\/api\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-Hxxwc1TQ.js'))
			},
			{
				id: "/(general)/api/profilepic",
				pattern: /^\/api\/profilepic\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CmTxzOOA.js'))
			},
			{
				id: "/(general)/api/signup",
				pattern: /^\/api\/signup\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-D4UPK-g3.js'))
			},
			{
				id: "/(general)/api/submissions",
				pattern: /^\/api\/submissions\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CfLYj0xX.js'))
			},
			{
				id: "/(general)/api/userDetail",
				pattern: /^\/api\/userDetail\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-DDcSvPrZ.js'))
			},
			{
				id: "/(general)/api/[publicID]",
				pattern: /^\/api\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-BizYZFqg.js'))
			},
			{
				id: "/(general)/api/[publicID]/assignments",
				pattern: /^\/api\/([^/]+?)\/assignments\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-fMJuL3co.js'))
			},
			{
				id: "/(general)/api/[publicID]/assignments/new",
				pattern: /^\/api\/([^/]+?)\/assignments\/new\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-BaSyzpzA.js'))
			},
			{
				id: "/(general)/api/[publicID]/assignments/[assignmentID]",
				pattern: /^\/api\/([^/]+?)\/assignments\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-DOcK1iEh.js'))
			},
			{
				id: "/(general)/api/[publicID]/assignments/[assignmentID]/question",
				pattern: /^\/api\/([^/]+?)\/assignments\/([^/]+?)\/question\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-BsjXWR7t.js'))
			},
			{
				id: "/(general)/api/[publicID]/bannerpic",
				pattern: /^\/api\/([^/]+?)\/bannerpic\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-BLc5Gpfv.js'))
			},
			{
				id: "/(general)/api/[publicID]/media",
				pattern: /^\/api\/([^/]+?)\/media\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-C50xedIK.js'))
			},
			{
				id: "/(general)/api/[publicID]/profilepic",
				pattern: /^\/api\/([^/]+?)\/profilepic\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-C8tilcjQ.js'))
			},
			{
				id: "/(general)/api/[publicID]/questions",
				pattern: /^\/api\/([^/]+?)\/questions\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-BcvPxWbc.js'))
			},
			{
				id: "/(general)/api/[publicID]/questions/new",
				pattern: /^\/api\/([^/]+?)\/questions\/new\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-GSdD_kQP.js'))
			},
			{
				id: "/(general)/api/[publicID]/questions/[questionID]",
				pattern: /^\/api\/([^/]+?)\/questions\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"questionID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-j8BaXtsZ.js'))
			},
			{
				id: "/(general)/api/[publicID]/register",
				pattern: /^\/api\/([^/]+?)\/register\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-BaqYy8kK.js'))
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
				page: { layouts: [0,4,], errors: [1,,], leaf: 91 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/authentication",
				pattern: /^\/courses\/internetlab\/authentication\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 92 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/calculator",
				pattern: /^\/courses\/internetlab\/calculator\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 93 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/college",
				pattern: /^\/courses\/internetlab\/college\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 94 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/dtd",
				pattern: /^\/courses\/internetlab\/dtd\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 95 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/javascript",
				pattern: /^\/courses\/internetlab\/javascript\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 96 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/nodejs",
				pattern: /^\/courses\/internetlab\/nodejs\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 97 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/practice",
				pattern: /^\/courses\/internetlab\/practice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 98 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/resume",
				pattern: /^\/courses\/internetlab\/resume\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 99 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/town",
				pattern: /^\/courses\/internetlab\/town\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 100 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/xml",
				pattern: /^\/courses\/internetlab\/xml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 101 },
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
				id: "/(general)/courses/internet/javascript/basics/calculator",
				pattern: /^\/courses\/internet\/javascript\/basics\/calculator\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/conditions",
				pattern: /^\/courses\/internet\/javascript\/basics\/conditions\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/error",
				pattern: /^\/courses\/internet\/javascript\/basics\/error\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/expressions",
				pattern: /^\/courses\/internet\/javascript\/basics\/expressions\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/functions",
				pattern: /^\/courses\/internet\/javascript\/basics\/functions\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 52 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/loops",
				pattern: /^\/courses\/internet\/javascript\/basics\/loops\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 53 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/objectorientation",
				pattern: /^\/courses\/internet\/javascript\/basics\/objectorientation\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 54 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/overview",
				pattern: /^\/courses\/internet\/javascript\/basics\/overview\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 55 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/variables",
				pattern: /^\/courses\/internet\/javascript\/basics\/variables\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 56 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/dynamic",
				pattern: /^\/courses\/internet\/javascript\/dynamic\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 57 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/fetchapi",
				pattern: /^\/courses\/internet\/javascript\/fetchapi\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 58 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/html",
				pattern: /^\/courses\/internet\/javascript\/html\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 59 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/http",
				pattern: /^\/courses\/internet\/javascript\/http\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 60 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/practice",
				pattern: /^\/courses\/internet\/javascript\/practice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 61 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/nodejs",
				pattern: /^\/courses\/internet\/nodejs\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 62 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml",
				pattern: /^\/courses\/internet\/wwwhtml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 63 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 64 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/browsers",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/browsers\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 65 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/http",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/http\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 66 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/intro",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/intro\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 67 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/mime",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/mime\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 68 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/security",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/security\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 69 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/servers",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/servers\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 70 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/url",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/url\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 71 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/www",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/www\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 72 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 73 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/audio",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/audio\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 74 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/forms",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/forms\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 75 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/head",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/head\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 76 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/images",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/images\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 77 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/links",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/links\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 78 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/lists",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/lists\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 79 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/organization",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/organization\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 80 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/origins",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/origins\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 81 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/structure",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/structure\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 82 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/syntax",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/syntax\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 83 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/tables",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/tables\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 84 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/text",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/text\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 85 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/time",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/time\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 86 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/video",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/video\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 87 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/xhtml",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/xhtml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 88 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/practice1",
				pattern: /^\/courses\/internet\/wwwhtml\/practice1\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 89 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/xml",
				pattern: /^\/courses\/internet\/xml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 90 },
				endpoint: null
			},
			{
				id: "/(general)/courses/linearalgebra",
				pattern: /^\/courses\/linearalgebra\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 102 },
				endpoint: null
			},
			{
				id: "/(general)/courses/linearalgebra/bases",
				pattern: /^\/courses\/linearalgebra\/bases\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 103 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2",
				pattern: /^\/courses\/mathematics2\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 104 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/assignment1",
				pattern: /^\/courses\/mathematics2\/assignment1\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 105 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference",
				pattern: /^\/courses\/mathematics2\/inference\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 106 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/practice",
				pattern: /^\/courses\/mathematics2\/inference\/practice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 107 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/significance",
				pattern: /^\/courses\/mathematics2\/inference\/significance\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 108 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/significance/hypotheses",
				pattern: /^\/courses\/mathematics2\/inference\/significance\/hypotheses\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 109 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/significance/level",
				pattern: /^\/courses\/mathematics2\/inference\/significance\/level\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 110 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/significance/sampling",
				pattern: /^\/courses\/mathematics2\/inference\/significance\/sampling\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 111 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/significance/tests",
				pattern: /^\/courses\/mathematics2\/inference\/significance\/tests\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 112 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/significance/types",
				pattern: /^\/courses\/mathematics2\/inference\/significance\/types\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 113 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 114 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/assignment",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/assignment\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 115 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/distributions",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/distributions\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 116 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/distributions/binomial",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/distributions\/binomial\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 117 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/distributions/continuous",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/distributions\/continuous\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 118 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/distributions/joint",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/distributions\/joint\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 119 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/distributions/normal",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/distributions\/normal\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 120 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/distributions/poisson",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/distributions\/poisson\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 121 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/probability",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/probability\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 122 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/probability/conditional",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/probability\/conditional\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 123 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/probability/events",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/probability\/events\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 124 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/probability/independence",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/probability\/independence\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 125 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/probability/practice",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/probability\/practice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 126 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics",
				pattern: /^\/courses\/mathematics2\/statistics\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 127 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 128 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/bivariatedata",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/bivariatedata\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 129 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/bivariatefrequency",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/bivariatefrequency\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 130 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/correlation2",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/correlation2\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 131 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/correlationtypes",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/correlationtypes\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 132 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/pearson",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/pearson\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 133 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/spearman",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/spearman\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 134 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 135 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures/deviation",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/deviation\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 136 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures/mean",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/mean\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 137 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures/median",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/median\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 138 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures/mode",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/mode\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 139 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/regression",
				pattern: /^\/courses\/mathematics2\/statistics\/regression\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 140 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/regression/leastsquares",
				pattern: /^\/courses\/mathematics2\/statistics\/regression\/leastsquares\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 141 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/regression/regressioncoefficient",
				pattern: /^\/courses\/mathematics2\/statistics\/regression\/regressioncoefficient\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 142 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/regression/regressionlines",
				pattern: /^\/courses\/mathematics2\/statistics\/regression\/regressionlines\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 143 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/[assignmentID]",
				pattern: /^\/courses\/mathematics2\/([^/]+?)\/?$/,
				params: [{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 144 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/[assignmentID]/solution",
				pattern: /^\/courses\/mathematics2\/([^/]+?)\/solution\/?$/,
				params: [{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 145 },
				endpoint: null
			},
			{
				id: "/(general)/courses/qec",
				pattern: /^\/courses\/qec\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 146 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantumalgorithms",
				pattern: /^\/courses\/quantumalgorithms\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 147 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantumcommunication",
				pattern: /^\/courses\/quantumcommunication\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 148 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantumcomputers",
				pattern: /^\/courses\/quantumcomputers\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 149 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantumcryptography",
				pattern: /^\/courses\/quantumcryptography\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 150 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantuminformation1",
				pattern: /^\/courses\/quantuminformation1\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 151 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantuminformation2",
				pattern: /^\/courses\/quantuminformation2\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 152 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantummechanics",
				pattern: /^\/courses\/quantummechanics\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 153 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantumml",
				pattern: /^\/courses\/quantumml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 154 },
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
				page: { layouts: [0,4,], errors: [1,,], leaf: 155 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths",
				pattern: /^\/iit\/maths\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 156 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021",
				pattern: /^\/iit\/maths\/2021\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 157 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question1",
				pattern: /^\/iit\/maths\/2021\/question1\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 158 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question2",
				pattern: /^\/iit\/maths\/2021\/question2\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 159 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question3",
				pattern: /^\/iit\/maths\/2021\/question3\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 160 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question4",
				pattern: /^\/iit\/maths\/2021\/question4\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 161 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question5",
				pattern: /^\/iit\/maths\/2021\/question5\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 162 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question6",
				pattern: /^\/iit\/maths\/2021\/question6\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 163 },
				endpoint: null
			},
			{
				id: "/(general)/notes",
				pattern: /^\/notes\/?$/,
				params: [],
				page: { layouts: [0,4,,], errors: [1,,6,], leaf: 164 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths",
				pattern: /^\/notes\/maths\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 165 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of derivatives/Approximations",
				pattern: /^\/notes\/maths\/Application of derivatives\/Approximations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 166 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of derivatives/Increasing and decreasing functions",
				pattern: /^\/notes\/maths\/Application of derivatives\/Increasing and decreasing functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 167 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of derivatives/Maxima and minima",
				pattern: /^\/notes\/maths\/Application of derivatives\/Maxima and minima\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 168 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of derivatives/Rate of change of quantities",
				pattern: /^\/notes\/maths\/Application of derivatives\/Rate of change of quantities\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 169 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of derivatives/Tangents and normals",
				pattern: /^\/notes\/maths\/Application of derivatives\/Tangents and normals\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 170 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of integrals/Area between two curves",
				pattern: /^\/notes\/maths\/Application of integrals\/Area between two curves\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 171 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of integrals/Area under simple curves",
				pattern: /^\/notes\/maths\/Application of integrals\/Area under simple curves\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 172 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Binomial theorem/Binomial theorem for positive integral indices",
				pattern: /^\/notes\/maths\/Binomial theorem\/Binomial theorem for positive integral indices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 173 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Binomial theorem/General and middle terms",
				pattern: /^\/notes\/maths\/Binomial theorem\/General and middle terms\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 174 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Complex numbers and quadratic equations/Algebra of complex numbers",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Algebra of complex numbers\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 175 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Complex numbers and quadratic equations/Argand plane and polar representation",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Argand plane and polar representation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 176 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Complex numbers and quadratic equations/Complex numbers",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Complex numbers\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 177 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Complex numbers and quadratic equations/Quadratic equations",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Quadratic equations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 178 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Complex numbers and quadratic equations/The modulus and the conjugate of complex number",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/The modulus and the conjugate of complex number\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 179 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Conic sections/Circle",
				pattern: /^\/notes\/maths\/Conic sections\/Circle\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 181 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Conic sections/Ellipse",
				pattern: /^\/notes\/maths\/Conic sections\/Ellipse\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 182 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Conic sections/Hyperbola",
				pattern: /^\/notes\/maths\/Conic sections\/Hyperbola\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 183 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Conic sections/Parabola",
				pattern: /^\/notes\/maths\/Conic sections\/Parabola\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 184 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Conic sections/Sections of a cone",
				pattern: /^\/notes\/maths\/Conic sections\/Sections of a cone\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 185 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Continuity",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Continuity\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 186 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Derivatives of functions in parametric forms",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Derivatives of functions in parametric forms\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 187 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Differentiability",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Differentiability\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 188 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Exponential and logarithmic functions",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Exponential and logarithmic functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 189 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Logarithmic differentiation",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Logarithmic differentiation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 190 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Mean value theorem",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Mean value theorem\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 191 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Second order derivative",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Second order derivative\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 192 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Adjoint and inverse of a matrix",
				pattern: /^\/notes\/maths\/Determinants\/Adjoint and inverse of a matrix\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 193 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Applications of determinants and matrices",
				pattern: /^\/notes\/maths\/Determinants\/Applications of determinants and matrices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 194 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Area of a triangle",
				pattern: /^\/notes\/maths\/Determinants\/Area of a triangle\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 195 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Determinant",
				pattern: /^\/notes\/maths\/Determinants\/Determinant\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 196 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Minors and cofactors",
				pattern: /^\/notes\/maths\/Determinants\/Minors and cofactors\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 197 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Properties of determinants",
				pattern: /^\/notes\/maths\/Determinants\/Properties of determinants\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 198 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Differential equations/Basic concepts",
				pattern: /^\/notes\/maths\/Differential equations\/Basic concepts\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 199 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Differential equations/Formation of a differential equation whose general solution is given",
				pattern: /^\/notes\/maths\/Differential equations\/Formation of a differential equation whose general solution is given\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 200 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Differential equations/General and particular solutions of a differential equation",
				pattern: /^\/notes\/maths\/Differential equations\/General and particular solutions of a differential equation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 201 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Differential equations/Methods of solving first order first degree differential equations",
				pattern: /^\/notes\/maths\/Differential equations\/Methods of solving first order first degree differential equations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 202 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Indroduction to 3D geometry/Coordinate axes and coordinate planes in 3D space",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Coordinate axes and coordinate planes in 3D space\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 203 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Indroduction to 3D geometry/Coordinate of a point in space",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Coordinate of a point in space\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 204 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Indroduction to 3D geometry/Distance between two points",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Distance between two points\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 205 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Indroduction to 3D geometry/Section formula",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Section formula\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 206 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Definite integral",
				pattern: /^\/notes\/maths\/Integrals\/Definite integral\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 207 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Evaluation of definite integrals by substitution",
				pattern: /^\/notes\/maths\/Integrals\/Evaluation of definite integrals by substitution\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 208 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Fundamental theorem of calculus",
				pattern: /^\/notes\/maths\/Integrals\/Fundamental theorem of calculus\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 209 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Integrals of some particular functions",
				pattern: /^\/notes\/maths\/Integrals\/Integrals of some particular functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 210 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Integration as an inverse process of differentiation",
				pattern: /^\/notes\/maths\/Integrals\/Integration as an inverse process of differentiation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 211 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Integration by partial fractions",
				pattern: /^\/notes\/maths\/Integrals\/Integration by partial fractions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 212 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Integration by parts",
				pattern: /^\/notes\/maths\/Integrals\/Integration by parts\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 213 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Methods of integration",
				pattern: /^\/notes\/maths\/Integrals\/Methods of integration\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 214 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Some properties of definite integrals",
				pattern: /^\/notes\/maths\/Integrals\/Some properties of definite integrals\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 215 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Inverse trigonometric functions/Basic concepts",
				pattern: /^\/notes\/maths\/Inverse trigonometric functions\/Basic concepts\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 216 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Inverse trigonometric functions/Properties of inverse trigonometric functions",
				pattern: /^\/notes\/maths\/Inverse trigonometric functions\/Properties of inverse trigonometric functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 217 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Limits and derivatives/Derivatives",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Derivatives\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 218 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Limits and derivatives/Intuitive idea of derivatives",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Intuitive idea of derivatives\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 219 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Limits and derivatives/Limits of Trigonometric functions",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Limits of Trigonometric functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 221 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Limits and derivatives/Limits",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Limits\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 220 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear inequalities/Graphical solution in two variables",
				pattern: /^\/notes\/maths\/Linear inequalities\/Graphical solution in two variables\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 222 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear inequalities/Inequalities",
				pattern: /^\/notes\/maths\/Linear inequalities\/Inequalities\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 223 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear inequalities/One variable",
				pattern: /^\/notes\/maths\/Linear inequalities\/One variable\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 224 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear inequalities/Solution of system in two variables",
				pattern: /^\/notes\/maths\/Linear inequalities\/Solution of system in two variables\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 225 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear programming/Different types of linear programming problems",
				pattern: /^\/notes\/maths\/Linear programming\/Different types of linear programming problems\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 226 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear programming/Linear programming problem and its mathematical formulation",
				pattern: /^\/notes\/maths\/Linear programming\/Linear programming problem and its mathematical formulation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 227 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Invertible matrices",
				pattern: /^\/notes\/maths\/Matrices\/Invertible matrices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 228 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Matrix",
				pattern: /^\/notes\/maths\/Matrices\/Matrix\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 229 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Operations on matrices",
				pattern: /^\/notes\/maths\/Matrices\/Operations on matrices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 230 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Symmetric and skew symmetric matrices",
				pattern: /^\/notes\/maths\/Matrices\/Symmetric and skew symmetric matrices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 231 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Transformation of a matrix",
				pattern: /^\/notes\/maths\/Matrices\/Transformation of a matrix\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 232 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Transpose of a matrix",
				pattern: /^\/notes\/maths\/Matrices\/Transpose of a matrix\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 233 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Typse of matrices",
				pattern: /^\/notes\/maths\/Matrices\/Typse of matrices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 234 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Permutations and combinations/Combinations",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Combinations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 235 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Permutations and combinations/Fundamental principle of counting",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Fundamental principle of counting\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 236 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Permutations and combinations/Permutations",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Permutations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 237 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Principle of mathematical induction/Motivation",
				pattern: /^\/notes\/maths\/Principle of mathematical induction\/Motivation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 238 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Principle of mathematical induction/The principle of mathematical induction",
				pattern: /^\/notes\/maths\/Principle of mathematical induction\/The principle of mathematical induction\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 239 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Probability/Axiomatic approach to probability",
				pattern: /^\/notes\/maths\/Probability\/Axiomatic approach to probability\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 240 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Probability/Event",
				pattern: /^\/notes\/maths\/Probability\/Event\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 241 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Probability/Random experiments",
				pattern: /^\/notes\/maths\/Probability\/Random experiments\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 242 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 11/Cartesian product of sets",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Cartesian product of sets\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 243 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 11/Functions",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 244 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 11/Relations",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Relations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 245 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 12/Binary operations",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Binary operations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 246 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 12/Composition of functions and invertible function",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Composition of functions and invertible function\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 247 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 12/Types of functions",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Types of functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 248 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 12/Types of relations",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Types of relations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 249 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Arithmetic progression",
				pattern: /^\/notes\/maths\/Sequences and series\/Arithmetic progression\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 250 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Geometric progression",
				pattern: /^\/notes\/maths\/Sequences and series\/Geometric progression\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 251 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Relationship between AM and GM",
				pattern: /^\/notes\/maths\/Sequences and series\/Relationship between AM and GM\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 252 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Sequences",
				pattern: /^\/notes\/maths\/Sequences and series\/Sequences\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 253 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Series",
				pattern: /^\/notes\/maths\/Sequences and series\/Series\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 254 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Sum to n terms of Special series",
				pattern: /^\/notes\/maths\/Sequences and series\/Sum to n terms of Special series\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 255 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Complement of a set",
				pattern: /^\/notes\/maths\/Sets\/Complement of a set\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 256 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Equal sets",
				pattern: /^\/notes\/maths\/Sets\/Equal sets\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 257 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Finite and infinite sets",
				pattern: /^\/notes\/maths\/Sets\/Finite and infinite sets\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 258 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Introduction",
				pattern: /^\/notes\/maths\/Sets\/Introduction\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 259 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Operations on sets",
				pattern: /^\/notes\/maths\/Sets\/Operations on sets\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 260 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Power set",
				pattern: /^\/notes\/maths\/Sets\/Power set\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 261 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Practical problems",
				pattern: /^\/notes\/maths\/Sets\/Practical problems\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 262 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Real numbers",
				pattern: /^\/notes\/maths\/Sets\/Real numbers\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 263 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Sets and their representations",
				pattern: /^\/notes\/maths\/Sets\/Sets and their representations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 264 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Subsets",
				pattern: /^\/notes\/maths\/Sets\/Subsets\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 265 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/The empty set",
				pattern: /^\/notes\/maths\/Sets\/The empty set\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 266 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Universal set",
				pattern: /^\/notes\/maths\/Sets\/Universal set\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 267 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Venn diagrams",
				pattern: /^\/notes\/maths\/Sets\/Venn diagrams\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 268 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Statistics/Analysis of frequency distributions",
				pattern: /^\/notes\/maths\/Statistics\/Analysis of frequency distributions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 269 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Statistics/Mean deviation",
				pattern: /^\/notes\/maths\/Statistics\/Mean deviation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 270 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Statistics/Range",
				pattern: /^\/notes\/maths\/Statistics\/Range\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 271 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Statistics/Variance and standard deviation",
				pattern: /^\/notes\/maths\/Statistics\/Variance and standard deviation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 272 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Straight lines/Distance of a point from a line",
				pattern: /^\/notes\/maths\/Straight lines\/Distance of a point from a line\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 273 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Straight lines/General equation of a line",
				pattern: /^\/notes\/maths\/Straight lines\/General equation of a line\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 274 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Straight lines/Slope of a line",
				pattern: /^\/notes\/maths\/Straight lines\/Slope of a line\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 275 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Straight lines/Various forms of the equation of a line",
				pattern: /^\/notes\/maths\/Straight lines\/Various forms of the equation of a line\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 276 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Angle between a line and a plane",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Angle between a line and a plane\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 277 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Angle between two lines",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Angle between two lines\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 278 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Angle between two planes",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Angle between two planes\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 279 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Coplanarity of two lines",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Coplanarity of two lines\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 280 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Direction cosines and direction ratios of a line",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Direction cosines and direction ratios of a line\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 281 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Distance of a point from a plane",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Distance of a point from a plane\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 282 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Equation of a line in space",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Equation of a line in space\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 283 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Plane",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Plane\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 284 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Shortest distance between two lines",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Shortest distance between two lines\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 285 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Trigonometric functions/Angles",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Angles\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 286 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Trigonometric functions/Trigonometric equations",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric equations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 287 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Trigonometric functions/Trigonometric functions of sum and difference of two angles",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric functions of sum and difference of two angles\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 289 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Trigonometric functions/Trigonometric functions",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 288 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Vector algebra/Addition of vectors",
				pattern: /^\/notes\/maths\/Vector algebra\/Addition of vectors\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 290 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Vector algebra/Multiplication of a vector by a scalar",
				pattern: /^\/notes\/maths\/Vector algebra\/Multiplication of a vector by a scalar\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 291 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Vector algebra/Product of two vectors",
				pattern: /^\/notes\/maths\/Vector algebra\/Product of two vectors\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 292 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Vector algebra/Some basic concepts",
				pattern: /^\/notes\/maths\/Vector algebra\/Some basic concepts\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 293 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Vector algebra/Types of vectors",
				pattern: /^\/notes\/maths\/Vector algebra\/Types of vectors\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 294 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/conic",
				pattern: /^\/notes\/maths\/conic\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 180 },
				endpoint: null
			},
			{
				id: "/(general)/practice",
				pattern: /^\/practice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 295 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class10",
				pattern: /^\/practice\/class10\/?$/,
				params: [],
				page: { layouts: [0,4,10,], errors: [1,,,], leaf: 297 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class11",
				pattern: /^\/practice\/class11\/?$/,
				params: [],
				page: { layouts: [0,4,11,], errors: [1,,,], leaf: 298 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class12",
				pattern: /^\/practice\/class12\/?$/,
				params: [],
				page: { layouts: [0,4,12,], errors: [1,,,], leaf: 299 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class1",
				pattern: /^\/practice\/class1\/?$/,
				params: [],
				page: { layouts: [0,4,9,], errors: [1,,,], leaf: 296 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class2",
				pattern: /^\/practice\/class2\/?$/,
				params: [],
				page: { layouts: [0,4,13,], errors: [1,,,], leaf: 300 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class3",
				pattern: /^\/practice\/class3\/?$/,
				params: [],
				page: { layouts: [0,4,14,], errors: [1,,,], leaf: 301 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class4",
				pattern: /^\/practice\/class4\/?$/,
				params: [],
				page: { layouts: [0,4,15,], errors: [1,,,], leaf: 302 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class5",
				pattern: /^\/practice\/class5\/?$/,
				params: [],
				page: { layouts: [0,4,16,], errors: [1,,,], leaf: 303 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class6",
				pattern: /^\/practice\/class6\/?$/,
				params: [],
				page: { layouts: [0,4,17,], errors: [1,,,], leaf: 304 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class7",
				pattern: /^\/practice\/class7\/?$/,
				params: [],
				page: { layouts: [0,4,18,], errors: [1,,,], leaf: 305 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class8",
				pattern: /^\/practice\/class8\/?$/,
				params: [],
				page: { layouts: [0,4,19,], errors: [1,,,], leaf: 306 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class9",
				pattern: /^\/practice\/class9\/?$/,
				params: [],
				page: { layouts: [0,4,20,], errors: [1,,,], leaf: 307 },
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
				page: { layouts: [0,4,], errors: [1,,], leaf: 308 },
				endpoint: null
			},
			{
				id: "/(general)/settings/profile",
				pattern: /^\/settings\/profile\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 309 },
				endpoint: null
			},
			{
				id: "/(general)/students",
				pattern: /^\/students\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 310 },
				endpoint: null
			},
			{
				id: "/(general)/talks",
				pattern: /^\/talks\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 311 },
				endpoint: null
			},
			{
				id: "/(general)/talks/quantumstatus",
				pattern: /^\/talks\/quantumstatus\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 312 },
				endpoint: null
			},
			{
				id: "/(general)/talks/quantumteleportation",
				pattern: /^\/talks\/quantumteleportation\/?$/,
				params: [],
				page: { layouts: [0,4,21,], errors: [1,,,], leaf: 313 },
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
				page: { layouts: [0,4,], errors: [1,,], leaf: 315 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/assignments",
				pattern: /^\/([^/]+?)\/assignments\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 316 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/assignments/new",
				pattern: /^\/([^/]+?)\/assignments\/new\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 317 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/assignments/[assignmentID]",
				pattern: /^\/([^/]+?)\/assignments\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 318 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/questions",
				pattern: /^\/([^/]+?)\/questions\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 319 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/questions/new",
				pattern: /^\/([^/]+?)\/questions\/new\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 320 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/questions/[questionID]",
				pattern: /^\/([^/]+?)\/questions\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"questionID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 321 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/submissions",
				pattern: /^\/([^/]+?)\/submissions\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 322 },
				endpoint: null
			},
			{
				id: "/(general)/[...catchAll]",
				pattern: /^(?:\/(.*))?\/?$/,
				params: [{"name":"catchAll","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 314 },
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
