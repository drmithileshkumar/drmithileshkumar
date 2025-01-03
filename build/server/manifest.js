const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["announcement/html.svg","announcement/perspective.svg","app.css","avatar.svg","background copy.svg","background.svg","banner.png","banner.svg","circle_demo/circle.png","circle_demo/circle_anime.mp4","circle_demo/Cone-equation.png","circle_demo/Cone.png","circle_demo/conics.png","circle_demo/Conic_anime.mp4","circle_demo/Conic_deg.mp4","circle_demo/ellipse_anime.mp4","circle_demo/hyperbola_anime.mp4","circle_demo/IIT21Q1.png","circle_demo/orthocenter.png","circle_demo/parabola_anime.mp4","circle_demo/Plane.png","circle_demo/Tangents.png","circle_demo/threepointcircle.png","CMIMedal.jpg","cmithesis.pdf","common.css","courses/internet/css/boxmodel.svg","courses/internet/wwwhtml/fundamentals/intro/dns.png","courses/internet/wwwhtml/fundamentals/intro/dns.webp","courses/internet/wwwhtml/html/audio/tada.wav","courses/internet/wwwhtml/html/video/germinate.mp4","courses/mathematics2/cyclic.jpg","courses/mathematics2/normal.jpg","courses/mathematics2/normalCritical.png","courses/mathematics2/originalTime.jpg","courses/mathematics2/randomcomponent.jpg","courses/mathematics2/seasonality.jpg","courses/mathematics2/trend.jpg","courses/mathematics2/ztable1.webp","courses/mathematics2/ztable2.webp","custom.css","dark.css","facebook.svg","favicon.png","IITMSc.jpg","instagram.svg","LCPath.svg","light.css","manifest.json","mithileshkumar.png","notes/maths/sets/equal/thumbnail.svg","notes/maths/sets/finite/thumbnail.svg","notes/maths/sets/introduction/example.svg","notes/maths/sets/introduction/oddeven.svg","notes/maths/sets/real/interval.svg","notes/maths/sets/real/subsetreal.svg","notes/maths/sets/representation/heroparadox.svg","notes/maths/sets/subsets/thumbnail.svg","notes/maths/sets/subsets/tree.svg","notes/quantum/CNOT.svg","notes/quantum/qubit2d.svg","notes/quantum/teleportation.svg","photo_cv.jpg","profilephoto.jpeg","robots.txt","santa.svg","smui-dark.css","smui.css","svelte-welcome.png","svelte-welcome.webp","telegram.svg","thesis.pdf","twitter copy.png","twitter.png","vectorial/background.svg","vectorial/latex/calculus.svg","vectorial/latex/qubit.svg","vectorial/latex/subsets.svg","vectorial/latex/teleportation.svg","vectorial/test/markers.svg","vectorial/vectorialhome.svg","webdutIcon.png","youtube.svg","service-worker.js"]),
	mimeTypes: {".svg":"image/svg+xml",".css":"text/css",".png":"image/png",".mp4":"video/mp4",".jpg":"image/jpeg",".pdf":"application/pdf",".webp":"image/webp",".wav":"audio/wav",".json":"application/json",".jpeg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DKkVlnT0.js","app":"_app/immutable/entry/app.DbQhGemr.js","imports":["_app/immutable/entry/start.DKkVlnT0.js","_app/immutable/chunks/entry.B4hIrfLx.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.D70FGJSe.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.DbQhGemr.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DaGh6Pl7.js')),
			__memo(() => import('./chunks/1-Drp3M1Al.js')),
			__memo(() => import('./chunks/2-Yhm7Wla6.js')),
			__memo(() => import('./chunks/3-B04eRd6E.js')),
			__memo(() => import('./chunks/4-DXmPK9HI.js')),
			__memo(() => import('./chunks/5-B0LKKTCV.js')),
			__memo(() => import('./chunks/6-LI1nnn6b.js')),
			__memo(() => import('./chunks/7-C64c08M1.js')),
			__memo(() => import('./chunks/8-CD7dqULw.js')),
			__memo(() => import('./chunks/9-CVrHzuWU.js')),
			__memo(() => import('./chunks/10-CMPyH1EP.js')),
			__memo(() => import('./chunks/11-bBODKU-d.js')),
			__memo(() => import('./chunks/12-3Tb-Ktb8.js')),
			__memo(() => import('./chunks/13-04Aq7H1E.js')),
			__memo(() => import('./chunks/14-Bka2FO3N.js')),
			__memo(() => import('./chunks/15-D5nPTLCK.js')),
			__memo(() => import('./chunks/16-KYPwADj-.js')),
			__memo(() => import('./chunks/17-DUjftcRt.js')),
			__memo(() => import('./chunks/18-DRGNjeGg.js')),
			__memo(() => import('./chunks/19-APJ7_ogN.js')),
			__memo(() => import('./chunks/20-X-DYNR0U.js')),
			__memo(() => import('./chunks/21-3xHLdtTd.js')),
			__memo(() => import('./chunks/22-Kuqt5h87.js')),
			__memo(() => import('./chunks/23-CRrzXXgi.js')),
			__memo(() => import('./chunks/24-BJcwaD6_.js')),
			__memo(() => import('./chunks/25-Cdfz09l-.js')),
			__memo(() => import('./chunks/26-CxSshWpy.js')),
			__memo(() => import('./chunks/27-DlQErQ-B.js')),
			__memo(() => import('./chunks/28-DRWu85zk.js')),
			__memo(() => import('./chunks/29-DjU_N16Y.js')),
			__memo(() => import('./chunks/30-DIxFPQ_n.js')),
			__memo(() => import('./chunks/31-DOL3E9Z0.js')),
			__memo(() => import('./chunks/32-0esCt4mR.js')),
			__memo(() => import('./chunks/33-DxBCiKrG.js')),
			__memo(() => import('./chunks/34-D-uKK8rX.js')),
			__memo(() => import('./chunks/35-almng7iH.js')),
			__memo(() => import('./chunks/36-BDWD8GiG.js')),
			__memo(() => import('./chunks/37-vmUG77z5.js')),
			__memo(() => import('./chunks/38-CoAIWpoT.js')),
			__memo(() => import('./chunks/39-CntPYPVx.js')),
			__memo(() => import('./chunks/40-SFhenggb.js')),
			__memo(() => import('./chunks/41-DVRCKQ6z.js')),
			__memo(() => import('./chunks/42-DkJuYgnN.js')),
			__memo(() => import('./chunks/43-DsLRsJjm.js')),
			__memo(() => import('./chunks/44-CYQUi-8p.js')),
			__memo(() => import('./chunks/45-DLM3w7qg.js')),
			__memo(() => import('./chunks/46-CwiuI0VO.js')),
			__memo(() => import('./chunks/47-GdGsdvY4.js')),
			__memo(() => import('./chunks/48-Br5U7CZn.js')),
			__memo(() => import('./chunks/49-C_zSD1T6.js')),
			__memo(() => import('./chunks/50-ByFKFM4n.js')),
			__memo(() => import('./chunks/51-CjlMVzM9.js')),
			__memo(() => import('./chunks/52-BNd9d6dv.js')),
			__memo(() => import('./chunks/53-DIVn8cul.js')),
			__memo(() => import('./chunks/54-EP4A-MJ5.js')),
			__memo(() => import('./chunks/55-D4ofdZbo.js')),
			__memo(() => import('./chunks/56-Cp5ck3r9.js')),
			__memo(() => import('./chunks/57-CTqGZp0J.js')),
			__memo(() => import('./chunks/58-B_-Abd--.js')),
			__memo(() => import('./chunks/59-C390O8En.js')),
			__memo(() => import('./chunks/60-DM3g6Itc.js')),
			__memo(() => import('./chunks/61-DE3ko_Rb.js')),
			__memo(() => import('./chunks/62-C_1fIVll.js')),
			__memo(() => import('./chunks/63-kasQuqrh.js')),
			__memo(() => import('./chunks/64-ndH96g42.js')),
			__memo(() => import('./chunks/65-CamHjodI.js')),
			__memo(() => import('./chunks/66-upkE8r6V.js')),
			__memo(() => import('./chunks/67-BO8yhfT3.js')),
			__memo(() => import('./chunks/68-QSSN0kvD.js')),
			__memo(() => import('./chunks/69-BDwG9Baa.js')),
			__memo(() => import('./chunks/70-Bz7KpodX.js')),
			__memo(() => import('./chunks/71-B2QXofS7.js')),
			__memo(() => import('./chunks/72-SkJICGSQ.js')),
			__memo(() => import('./chunks/73-xG1K4IUe.js')),
			__memo(() => import('./chunks/74-w17-d2sb.js')),
			__memo(() => import('./chunks/75-DE2ao_Gs.js')),
			__memo(() => import('./chunks/76-CwljpWxb.js')),
			__memo(() => import('./chunks/77-D0s8-H_s.js')),
			__memo(() => import('./chunks/78-CREux7hI.js')),
			__memo(() => import('./chunks/79-CZ4mhqwa.js')),
			__memo(() => import('./chunks/80-D69Ha595.js')),
			__memo(() => import('./chunks/81-D08BOVhj.js')),
			__memo(() => import('./chunks/82-Wv-VVM3n.js')),
			__memo(() => import('./chunks/83-DRQy_jHU.js')),
			__memo(() => import('./chunks/84-IHBABR86.js')),
			__memo(() => import('./chunks/85-BKoik4kN.js')),
			__memo(() => import('./chunks/86-1Vs0VyA4.js')),
			__memo(() => import('./chunks/87-CsMn2WMG.js')),
			__memo(() => import('./chunks/88-CE7iVyF9.js')),
			__memo(() => import('./chunks/89-4_5fMKLx.js')),
			__memo(() => import('./chunks/90-kM0xKMw0.js')),
			__memo(() => import('./chunks/91-Dmr9OIDc.js')),
			__memo(() => import('./chunks/92-Cg6_nm1Y.js')),
			__memo(() => import('./chunks/93-Ct3d-jE2.js')),
			__memo(() => import('./chunks/94-CHFafAx6.js')),
			__memo(() => import('./chunks/95-CyRU2X5O.js')),
			__memo(() => import('./chunks/96-BTW_J9mX.js')),
			__memo(() => import('./chunks/97-BqnCtvW8.js')),
			__memo(() => import('./chunks/98-C2qeWtn0.js')),
			__memo(() => import('./chunks/99-DCLgYbjw.js')),
			__memo(() => import('./chunks/100-DNMJS4dO.js')),
			__memo(() => import('./chunks/101-C2xeLnpd.js')),
			__memo(() => import('./chunks/102-BXCm7cQi.js')),
			__memo(() => import('./chunks/103-B92VLr4x.js')),
			__memo(() => import('./chunks/104-C2_3xKmC.js')),
			__memo(() => import('./chunks/105-BSDS4plF.js')),
			__memo(() => import('./chunks/106-C-aECJwB.js')),
			__memo(() => import('./chunks/107-DgWymza6.js')),
			__memo(() => import('./chunks/108-SfQcUdm8.js')),
			__memo(() => import('./chunks/109-CwQttDI2.js')),
			__memo(() => import('./chunks/110-rp7AUMnq.js')),
			__memo(() => import('./chunks/111-knQbuWI-.js')),
			__memo(() => import('./chunks/112-BVyQkwwi.js')),
			__memo(() => import('./chunks/113-Dh6H9cO_.js')),
			__memo(() => import('./chunks/114-G32rZd5g.js')),
			__memo(() => import('./chunks/115-CayVMCoL.js')),
			__memo(() => import('./chunks/116-q0EKxp7Z.js')),
			__memo(() => import('./chunks/117-CDq6blYw.js')),
			__memo(() => import('./chunks/118-rwhwwrEP.js')),
			__memo(() => import('./chunks/119-BKy0HwsP.js')),
			__memo(() => import('./chunks/120-BYo-vMPW.js')),
			__memo(() => import('./chunks/121-BNlirpnb.js')),
			__memo(() => import('./chunks/122-BbpW2Uj5.js')),
			__memo(() => import('./chunks/123-BCtwBLYM.js')),
			__memo(() => import('./chunks/124-B0DopGvp.js')),
			__memo(() => import('./chunks/125-B8XJLtrb.js')),
			__memo(() => import('./chunks/126-CBKhKJuG.js')),
			__memo(() => import('./chunks/127-20febpXF.js')),
			__memo(() => import('./chunks/128-CrHKa6XI.js')),
			__memo(() => import('./chunks/129-B9dOHpkU.js')),
			__memo(() => import('./chunks/130-C5EUvjIP.js')),
			__memo(() => import('./chunks/131-BUXx3xFG.js')),
			__memo(() => import('./chunks/132-BirmrKH3.js')),
			__memo(() => import('./chunks/133-BWQomYMo.js')),
			__memo(() => import('./chunks/134-BJ8FzMqz.js')),
			__memo(() => import('./chunks/135-DZWgkEe9.js')),
			__memo(() => import('./chunks/136-Ci5FlMN6.js')),
			__memo(() => import('./chunks/137-VJcblBLv.js')),
			__memo(() => import('./chunks/138-C1eTwU0Y.js')),
			__memo(() => import('./chunks/139-BSp-kIai.js')),
			__memo(() => import('./chunks/140-BoH1nbgh.js')),
			__memo(() => import('./chunks/141-DL9VwjYb.js')),
			__memo(() => import('./chunks/142-DLknp1ep.js')),
			__memo(() => import('./chunks/143-5P6__Rdi.js')),
			__memo(() => import('./chunks/144-37CjrMjN.js')),
			__memo(() => import('./chunks/145-CbTHNQa3.js')),
			__memo(() => import('./chunks/146-CzKo4cQs.js')),
			__memo(() => import('./chunks/147-Dmzoi_8B.js')),
			__memo(() => import('./chunks/148-JvP2EvTs.js')),
			__memo(() => import('./chunks/149-D7F9HzuG.js')),
			__memo(() => import('./chunks/150-D8bWbgpy.js')),
			__memo(() => import('./chunks/151-C5Bb8-9w.js')),
			__memo(() => import('./chunks/152-D7dTNUxE.js')),
			__memo(() => import('./chunks/153-DH35UXCi.js')),
			__memo(() => import('./chunks/154-bwbuS-jZ.js')),
			__memo(() => import('./chunks/155-BnQ8tcST.js')),
			__memo(() => import('./chunks/156-Dr-TXtGN.js')),
			__memo(() => import('./chunks/157-Brl6STJV.js')),
			__memo(() => import('./chunks/158-D_dxzsPk.js')),
			__memo(() => import('./chunks/159-epC4yWIA.js')),
			__memo(() => import('./chunks/160-DcDq-lQ3.js')),
			__memo(() => import('./chunks/161-B_K2Nrq4.js')),
			__memo(() => import('./chunks/162-DgRBUtYA.js')),
			__memo(() => import('./chunks/163-DTiCHA0A.js')),
			__memo(() => import('./chunks/164-BcSPzXJv.js')),
			__memo(() => import('./chunks/165-B7WbDzX2.js')),
			__memo(() => import('./chunks/166-xGWxG2_0.js')),
			__memo(() => import('./chunks/167-B3RaWjrY.js')),
			__memo(() => import('./chunks/168-CAQeguJQ.js')),
			__memo(() => import('./chunks/169-DpsNCmaK.js')),
			__memo(() => import('./chunks/170-CLRfjVkz.js')),
			__memo(() => import('./chunks/171-DqPJJqLO.js')),
			__memo(() => import('./chunks/172-D6t16ge3.js')),
			__memo(() => import('./chunks/173-MpHL-j7C.js')),
			__memo(() => import('./chunks/174-BBKA_DuD.js')),
			__memo(() => import('./chunks/175-DZkKvR69.js')),
			__memo(() => import('./chunks/176-DMsQzJSQ.js')),
			__memo(() => import('./chunks/177-BioSMvQ_.js')),
			__memo(() => import('./chunks/178-oH7g12Qw.js')),
			__memo(() => import('./chunks/179-Cg86xsf4.js')),
			__memo(() => import('./chunks/180-DcEQao8R.js')),
			__memo(() => import('./chunks/181-BwEI5Q0r.js')),
			__memo(() => import('./chunks/182-mTEks4ng.js')),
			__memo(() => import('./chunks/183-D8OdWf5s.js')),
			__memo(() => import('./chunks/184-CVnmaJNY.js')),
			__memo(() => import('./chunks/185-CC6J22tA.js')),
			__memo(() => import('./chunks/186-D4p-nAaJ.js')),
			__memo(() => import('./chunks/187-LC_w89Yx.js')),
			__memo(() => import('./chunks/188-GCtr9KBN.js')),
			__memo(() => import('./chunks/189-BNViy4yh.js')),
			__memo(() => import('./chunks/190-BPJoInHh.js')),
			__memo(() => import('./chunks/191-SzkTKEl5.js')),
			__memo(() => import('./chunks/192-BbWkvTwU.js')),
			__memo(() => import('./chunks/193-rAbWrCTk.js')),
			__memo(() => import('./chunks/194-DVUcfhNe.js')),
			__memo(() => import('./chunks/195-CHJaJAlN.js')),
			__memo(() => import('./chunks/196-CGvavY0i.js')),
			__memo(() => import('./chunks/197-BR_jm3SG.js')),
			__memo(() => import('./chunks/198-CgLJl585.js')),
			__memo(() => import('./chunks/199-DpboT-9i.js')),
			__memo(() => import('./chunks/200-CB_8sh6V.js')),
			__memo(() => import('./chunks/201-DhiOBQIq.js')),
			__memo(() => import('./chunks/202-CN3G0VE7.js')),
			__memo(() => import('./chunks/203-Cp0GkXQ2.js')),
			__memo(() => import('./chunks/204-H7DiOCJG.js')),
			__memo(() => import('./chunks/205-DtgOPKWe.js')),
			__memo(() => import('./chunks/206-Cr_S1T3-.js')),
			__memo(() => import('./chunks/207-CpNDsuIs.js')),
			__memo(() => import('./chunks/208-8YFtc10I.js')),
			__memo(() => import('./chunks/209-DpiMz_nh.js')),
			__memo(() => import('./chunks/210-3dkW5q_t.js')),
			__memo(() => import('./chunks/211-Nc9bknpg.js')),
			__memo(() => import('./chunks/212-HaFJRR00.js')),
			__memo(() => import('./chunks/213-I5gUNvfC.js')),
			__memo(() => import('./chunks/214-DdMsRrIS.js')),
			__memo(() => import('./chunks/215-auEG_7Y6.js')),
			__memo(() => import('./chunks/216-BDkPbSUY.js')),
			__memo(() => import('./chunks/217-Bnmiby1P.js')),
			__memo(() => import('./chunks/218-C6u7uWic.js')),
			__memo(() => import('./chunks/219-dl3luzm-.js')),
			__memo(() => import('./chunks/220-D-kaNMMN.js')),
			__memo(() => import('./chunks/221-RgUCja9M.js')),
			__memo(() => import('./chunks/222-Cp4Hooev.js')),
			__memo(() => import('./chunks/223-Cl8SEQAc.js')),
			__memo(() => import('./chunks/224-vbRx3V4q.js')),
			__memo(() => import('./chunks/225-DsOx9z3P.js')),
			__memo(() => import('./chunks/226-DGYFcHfh.js')),
			__memo(() => import('./chunks/227-tb9Hbh19.js')),
			__memo(() => import('./chunks/228-B4CW0LV8.js')),
			__memo(() => import('./chunks/229-BYxpe0oF.js')),
			__memo(() => import('./chunks/230-CcJu1RuO.js')),
			__memo(() => import('./chunks/231-CFp_qKXh.js')),
			__memo(() => import('./chunks/232-BLhn9mMt.js')),
			__memo(() => import('./chunks/233-YdbF_FPn.js')),
			__memo(() => import('./chunks/234-Cab5Ikx8.js')),
			__memo(() => import('./chunks/235-B7Yjz84G.js')),
			__memo(() => import('./chunks/236-DzukdcBk.js')),
			__memo(() => import('./chunks/237-B21nfbAg.js')),
			__memo(() => import('./chunks/238-Y4QPntVG.js')),
			__memo(() => import('./chunks/239-BaT4tsVC.js')),
			__memo(() => import('./chunks/240-Da8eAZy4.js')),
			__memo(() => import('./chunks/241-CoWnK34b.js')),
			__memo(() => import('./chunks/242-C6PXH16S.js')),
			__memo(() => import('./chunks/243-BbfnZSE6.js')),
			__memo(() => import('./chunks/244-fRA5u-dh.js')),
			__memo(() => import('./chunks/245-WlwA04xS.js')),
			__memo(() => import('./chunks/246-n5ZMVEPQ.js')),
			__memo(() => import('./chunks/247-D_aqcvo6.js')),
			__memo(() => import('./chunks/248-M1vRco2T.js')),
			__memo(() => import('./chunks/249-B_Gy7Pju.js')),
			__memo(() => import('./chunks/250-C627ZpCC.js')),
			__memo(() => import('./chunks/251-CUfm32Px.js')),
			__memo(() => import('./chunks/252-DfoAcl06.js')),
			__memo(() => import('./chunks/253-SsaY3b9o.js')),
			__memo(() => import('./chunks/254-Dx-RCKfM.js')),
			__memo(() => import('./chunks/255-CJW2H_Om.js')),
			__memo(() => import('./chunks/256-BDmRZAt_.js')),
			__memo(() => import('./chunks/257-BaOAUA91.js')),
			__memo(() => import('./chunks/258-D76Wnls0.js')),
			__memo(() => import('./chunks/259-DBR-o34s.js')),
			__memo(() => import('./chunks/260-DrYxuiXp.js')),
			__memo(() => import('./chunks/261-BAhqxLZC.js')),
			__memo(() => import('./chunks/262-ze5g5USW.js')),
			__memo(() => import('./chunks/263-OL0l4QYi.js')),
			__memo(() => import('./chunks/264-2sEvkZoR.js')),
			__memo(() => import('./chunks/265-CpcO9-c9.js')),
			__memo(() => import('./chunks/266-DVjtZpAL.js')),
			__memo(() => import('./chunks/267-C95KX1bg.js')),
			__memo(() => import('./chunks/268-CGdxk50i.js')),
			__memo(() => import('./chunks/269-ChIPCfRC.js')),
			__memo(() => import('./chunks/270-BI9Xh8ea.js')),
			__memo(() => import('./chunks/271-coxYFcv6.js')),
			__memo(() => import('./chunks/272-DstlRYZw.js')),
			__memo(() => import('./chunks/273-3tMzs2UN.js')),
			__memo(() => import('./chunks/274-H5H0ZVv7.js')),
			__memo(() => import('./chunks/275-DGT6ldRP.js')),
			__memo(() => import('./chunks/276-C1BKwsSO.js')),
			__memo(() => import('./chunks/277-B1IfHrU8.js')),
			__memo(() => import('./chunks/278-Db_LALQ_.js')),
			__memo(() => import('./chunks/279-zJuV3qHG.js')),
			__memo(() => import('./chunks/280-CBB5fgUo.js')),
			__memo(() => import('./chunks/281-oTFQHix4.js')),
			__memo(() => import('./chunks/282-BwzXpiJD.js')),
			__memo(() => import('./chunks/283-D5gnJBZu.js')),
			__memo(() => import('./chunks/284-B85wAQBK.js')),
			__memo(() => import('./chunks/285-PwvPpMjz.js')),
			__memo(() => import('./chunks/286-Ba4i1lJP.js')),
			__memo(() => import('./chunks/287-C8a3T2k8.js')),
			__memo(() => import('./chunks/288-BGkwRUJ3.js')),
			__memo(() => import('./chunks/289-DJ89bjwo.js')),
			__memo(() => import('./chunks/290-B7RWsqrx.js')),
			__memo(() => import('./chunks/291-C1BIalI8.js')),
			__memo(() => import('./chunks/292-BmKN6JVa.js')),
			__memo(() => import('./chunks/293-CCbB0TgM.js')),
			__memo(() => import('./chunks/294-Cn5OF7vv.js')),
			__memo(() => import('./chunks/295-DoegbR-W.js')),
			__memo(() => import('./chunks/296-CYCpyCv6.js')),
			__memo(() => import('./chunks/297-C7N3_SgV.js')),
			__memo(() => import('./chunks/298-BEcY8vqs.js')),
			__memo(() => import('./chunks/299-Dxk-wmnc.js')),
			__memo(() => import('./chunks/300-DXmsL764.js')),
			__memo(() => import('./chunks/301-Zi5WjCLA.js')),
			__memo(() => import('./chunks/302-ePPuBV11.js')),
			__memo(() => import('./chunks/303-CB9AhweF.js')),
			__memo(() => import('./chunks/304-BUx_pVcl.js')),
			__memo(() => import('./chunks/305-CR7EdeIS.js')),
			__memo(() => import('./chunks/306-CV50QM1z.js')),
			__memo(() => import('./chunks/307-CAMG9y2s.js')),
			__memo(() => import('./chunks/308-BLRLVW-R.js')),
			__memo(() => import('./chunks/309-BGMM2FYz.js')),
			__memo(() => import('./chunks/310-Dy0UEV5k.js')),
			__memo(() => import('./chunks/311-Cm6h6nk4.js')),
			__memo(() => import('./chunks/312-BauqO9Uj.js')),
			__memo(() => import('./chunks/313-Cd5ZRKz9.js')),
			__memo(() => import('./chunks/314-ClqTap4M.js')),
			__memo(() => import('./chunks/315-BXVxyeSK.js')),
			__memo(() => import('./chunks/316-D9ab1vJw.js')),
			__memo(() => import('./chunks/317-vTApO6EF.js')),
			__memo(() => import('./chunks/318-BvQB3ljZ.js')),
			__memo(() => import('./chunks/319-C0Py42z3.js')),
			__memo(() => import('./chunks/320-Bk62BO8w.js')),
			__memo(() => import('./chunks/321-CtzxZB0X.js')),
			__memo(() => import('./chunks/322-DShv4zC8.js')),
			__memo(() => import('./chunks/323-Bd1ekKul.js')),
			__memo(() => import('./chunks/324-BNbS3xEI.js')),
			__memo(() => import('./chunks/325-DDdOCIgz.js')),
			__memo(() => import('./chunks/326-CLLItn4P.js')),
			__memo(() => import('./chunks/327-DS4cN7oX.js')),
			__memo(() => import('./chunks/328-bEF9x6d1.js')),
			__memo(() => import('./chunks/329-Cdx9TgB6.js')),
			__memo(() => import('./chunks/330-CMUlzmJb.js')),
			__memo(() => import('./chunks/331-BFrc-Jf1.js')),
			__memo(() => import('./chunks/332-WESvXiZl.js')),
			__memo(() => import('./chunks/333-BcmezmVZ.js')),
			__memo(() => import('./chunks/334-CeNvm-NC.js')),
			__memo(() => import('./chunks/335-CWdoYVr5.js')),
			__memo(() => import('./chunks/336-CcH6V1ed.js')),
			__memo(() => import('./chunks/337-00XioJE8.js')),
			__memo(() => import('./chunks/338-BbdXN4z6.js')),
			__memo(() => import('./chunks/339-CdMaWJsR.js')),
			__memo(() => import('./chunks/340-DkesK23e.js')),
			__memo(() => import('./chunks/341-CCbLVd2Q.js')),
			__memo(() => import('./chunks/342-ZGvwrsle.js')),
			__memo(() => import('./chunks/343-Du3LZFCa.js')),
			__memo(() => import('./chunks/344-CvqTNh8L.js')),
			__memo(() => import('./chunks/345-Puvtm8mo.js')),
			__memo(() => import('./chunks/346-0fftNoVq.js')),
			__memo(() => import('./chunks/347-CXNgXcD_.js')),
			__memo(() => import('./chunks/348-_kn5wK7p.js')),
			__memo(() => import('./chunks/349-D-qM7MUf.js')),
			__memo(() => import('./chunks/350-BQMVD2Hu.js')),
			__memo(() => import('./chunks/351-DGlXKUzr.js')),
			__memo(() => import('./chunks/352-DCmCO_VP.js')),
			__memo(() => import('./chunks/353-BK47G2_n.js')),
			__memo(() => import('./chunks/354-BLw24vLE.js')),
			__memo(() => import('./chunks/355-9z3uDa86.js')),
			__memo(() => import('./chunks/356-Ctd2kmCb.js')),
			__memo(() => import('./chunks/357-A_G0lS-i.js')),
			__memo(() => import('./chunks/358-CoTI10QN.js')),
			__memo(() => import('./chunks/359-b-5Suh-t.js')),
			__memo(() => import('./chunks/360-DpU_GR4o.js')),
			__memo(() => import('./chunks/361-DQMbcwls.js')),
			__memo(() => import('./chunks/362-CW7y3HXh.js')),
			__memo(() => import('./chunks/363-D4mcgAhh.js')),
			__memo(() => import('./chunks/364-Bl716XqB.js')),
			__memo(() => import('./chunks/365-0IwPs1NG.js')),
			__memo(() => import('./chunks/366-D39r9en0.js')),
			__memo(() => import('./chunks/367-KcPwHew5.js')),
			__memo(() => import('./chunks/368-CEepkASm.js')),
			__memo(() => import('./chunks/369-D3q-m-4U.js')),
			__memo(() => import('./chunks/370-B6VTBEmI.js')),
			__memo(() => import('./chunks/371-g6B1f3Nu.js')),
			__memo(() => import('./chunks/372-C8G2Femf.js')),
			__memo(() => import('./chunks/373-BaP2NbGO.js')),
			__memo(() => import('./chunks/374-CC2HbsO-.js')),
			__memo(() => import('./chunks/375-WyGF1QsV.js')),
			__memo(() => import('./chunks/376-CKuvs4OO.js')),
			__memo(() => import('./chunks/377-C-9rBlfT.js'))
		],
		routes: [
			{
				id: "/(general)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/(about)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/(general)/api/assignments",
				pattern: /^\/api\/assignments\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-Bolc7J1R.js'))
			},
			{
				id: "/(general)/api/assignments/[assignmentID]",
				pattern: /^\/api\/assignments\/([^/]+?)\/?$/,
				params: [{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CMz7kBOJ.js'))
			},
			{
				id: "/(general)/api/assignment",
				pattern: /^\/api\/assignment\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-9hCyKOSH.js'))
			},
			{
				id: "/(general)/api/login",
				pattern: /^\/api\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CCRG3VJ9.js'))
			},
			{
				id: "/(general)/api/profilepic",
				pattern: /^\/api\/profilepic\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-q0Ni02Q_.js'))
			},
			{
				id: "/(general)/api/signup",
				pattern: /^\/api\/signup\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-pQiTfSyf.js'))
			},
			{
				id: "/(general)/api/submissions",
				pattern: /^\/api\/submissions\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CADGufbS.js'))
			},
			{
				id: "/(general)/api/userDetail",
				pattern: /^\/api\/userDetail\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-Bs2UQgO6.js'))
			},
			{
				id: "/(general)/api/[publicID]",
				pattern: /^\/api\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-BuWmqWHG.js'))
			},
			{
				id: "/(general)/api/[publicID]/assignments",
				pattern: /^\/api\/([^/]+?)\/assignments\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-NvI1X3mG.js'))
			},
			{
				id: "/(general)/api/[publicID]/assignments/new",
				pattern: /^\/api\/([^/]+?)\/assignments\/new\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-DRHbfrfJ.js'))
			},
			{
				id: "/(general)/api/[publicID]/assignments/[assignmentID]",
				pattern: /^\/api\/([^/]+?)\/assignments\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-De2oj2wY.js'))
			},
			{
				id: "/(general)/api/[publicID]/assignments/[assignmentID]/question",
				pattern: /^\/api\/([^/]+?)\/assignments\/([^/]+?)\/question\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-BroU6wyX.js'))
			},
			{
				id: "/(general)/api/[publicID]/bannerpic",
				pattern: /^\/api\/([^/]+?)\/bannerpic\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-D-v1TTTX.js'))
			},
			{
				id: "/(general)/api/[publicID]/media",
				pattern: /^\/api\/([^/]+?)\/media\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-D62Gx_PM.js'))
			},
			{
				id: "/(general)/api/[publicID]/profilepic",
				pattern: /^\/api\/([^/]+?)\/profilepic\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CQiDMfOz.js'))
			},
			{
				id: "/(general)/api/[publicID]/questions",
				pattern: /^\/api\/([^/]+?)\/questions\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-dnJgBcfU.js'))
			},
			{
				id: "/(general)/api/[publicID]/questions/new",
				pattern: /^\/api\/([^/]+?)\/questions\/new\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-Jn157PZv.js'))
			},
			{
				id: "/(general)/api/[publicID]/questions/[questionID]",
				pattern: /^\/api\/([^/]+?)\/questions\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"questionID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-mthnw6kr.js'))
			},
			{
				id: "/(general)/api/[publicID]/register",
				pattern: /^\/api\/([^/]+?)\/register\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-Tzi2iEEW.js'))
			},
			{
				id: "/(general)/assignments",
				pattern: /^\/assignments\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/(general)/assignments/[assignmentID]",
				pattern: /^\/assignments\/([^/]+?)\/?$/,
				params: [{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/(general)/assignments/[assignmentID]/solution",
				pattern: /^\/assignments\/([^/]+?)\/solution\/?$/,
				params: [{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/(general)/auth",
				pattern: /^\/auth\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/(general)/courses",
				pattern: /^\/courses\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/(general)/courses/circuits",
				pattern: /^\/courses\/circuits\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/(general)/courses/discrete",
				pattern: /^\/courses\/discrete\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab",
				pattern: /^\/courses\/internetlab\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 97 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/authentication",
				pattern: /^\/courses\/internetlab\/authentication\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 98 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/calculator",
				pattern: /^\/courses\/internetlab\/calculator\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 99 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/college",
				pattern: /^\/courses\/internetlab\/college\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 100 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/dtd",
				pattern: /^\/courses\/internetlab\/dtd\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 101 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/javascript",
				pattern: /^\/courses\/internetlab\/javascript\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 102 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/nodejs",
				pattern: /^\/courses\/internetlab\/nodejs\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 103 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/practice",
				pattern: /^\/courses\/internetlab\/practice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 104 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/resume",
				pattern: /^\/courses\/internetlab\/resume\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 105 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/town",
				pattern: /^\/courses\/internetlab\/town\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 106 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/xml",
				pattern: /^\/courses\/internetlab\/xml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 107 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet",
				pattern: /^\/courses\/internet\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css",
				pattern: /^\/courses\/internet\/css\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/border",
				pattern: /^\/courses\/internet\/css\/border\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/box",
				pattern: /^\/courses\/internet\/css\/box\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/colors",
				pattern: /^\/courses\/internet\/css\/colors\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/layout",
				pattern: /^\/courses\/internet\/css\/layout\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/position",
				pattern: /^\/courses\/internet\/css\/position\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/practice",
				pattern: /^\/courses\/internet\/css\/practice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/responsive",
				pattern: /^\/courses\/internet\/css\/responsive\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/selectors",
				pattern: /^\/courses\/internet\/css\/selectors\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/typography",
				pattern: /^\/courses\/internet\/css\/typography\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript",
				pattern: /^\/courses\/internet\/javascript\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/asynchronous",
				pattern: /^\/courses\/internet\/javascript\/asynchronous\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 52 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics",
				pattern: /^\/courses\/internet\/javascript\/basics\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 53 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/calculator",
				pattern: /^\/courses\/internet\/javascript\/basics\/calculator\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 54 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/conditions",
				pattern: /^\/courses\/internet\/javascript\/basics\/conditions\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 55 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/error",
				pattern: /^\/courses\/internet\/javascript\/basics\/error\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 56 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/expressions",
				pattern: /^\/courses\/internet\/javascript\/basics\/expressions\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 57 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/functions",
				pattern: /^\/courses\/internet\/javascript\/basics\/functions\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 58 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/loops",
				pattern: /^\/courses\/internet\/javascript\/basics\/loops\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 59 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/objectorientation",
				pattern: /^\/courses\/internet\/javascript\/basics\/objectorientation\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 60 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/overview",
				pattern: /^\/courses\/internet\/javascript\/basics\/overview\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 61 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/variables",
				pattern: /^\/courses\/internet\/javascript\/basics\/variables\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 62 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/dynamic",
				pattern: /^\/courses\/internet\/javascript\/dynamic\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 63 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/fetchapi",
				pattern: /^\/courses\/internet\/javascript\/fetchapi\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 64 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/html",
				pattern: /^\/courses\/internet\/javascript\/html\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 65 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/http",
				pattern: /^\/courses\/internet\/javascript\/http\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 66 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/practice",
				pattern: /^\/courses\/internet\/javascript\/practice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 67 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/nodejs",
				pattern: /^\/courses\/internet\/nodejs\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 68 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml",
				pattern: /^\/courses\/internet\/wwwhtml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 69 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 70 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/browsers",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/browsers\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 71 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/http",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/http\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 72 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/intro",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/intro\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 73 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/mime",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/mime\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 74 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/security",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/security\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 75 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/servers",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/servers\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 76 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/url",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/url\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 77 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/www",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/www\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 78 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 79 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/audio",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/audio\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 80 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/forms",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/forms\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 81 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/head",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/head\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 82 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/images",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/images\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 83 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/links",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/links\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 84 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/lists",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/lists\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 85 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/organization",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/organization\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 86 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/origins",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/origins\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 87 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/structure",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/structure\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 88 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/syntax",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/syntax\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 89 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/tables",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/tables\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 90 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/text",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/text\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 91 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/time",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/time\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 92 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/video",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/video\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 93 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/xhtml",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/xhtml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 94 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/practice1",
				pattern: /^\/courses\/internet\/wwwhtml\/practice1\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 95 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/xml",
				pattern: /^\/courses\/internet\/xml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 96 },
				endpoint: null
			},
			{
				id: "/(general)/courses/linearalgebra",
				pattern: /^\/courses\/linearalgebra\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 108 },
				endpoint: null
			},
			{
				id: "/(general)/courses/linearalgebra/bases",
				pattern: /^\/courses\/linearalgebra\/bases\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 109 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics1",
				pattern: /^\/courses\/mathematics1\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 110 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2",
				pattern: /^\/courses\/mathematics2\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 111 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/assignment1",
				pattern: /^\/courses\/mathematics2\/assignment1\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 112 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference",
				pattern: /^\/courses\/mathematics2\/inference\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 113 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/practice",
				pattern: /^\/courses\/mathematics2\/inference\/practice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 114 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/significance",
				pattern: /^\/courses\/mathematics2\/inference\/significance\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 115 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/significance/hypotheses",
				pattern: /^\/courses\/mathematics2\/inference\/significance\/hypotheses\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 116 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/significance/level",
				pattern: /^\/courses\/mathematics2\/inference\/significance\/level\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 117 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/significance/sampling",
				pattern: /^\/courses\/mathematics2\/inference\/significance\/sampling\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 118 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/significance/tests",
				pattern: /^\/courses\/mathematics2\/inference\/significance\/tests\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 119 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/significance/types",
				pattern: /^\/courses\/mathematics2\/inference\/significance\/types\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 120 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 121 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/assignment",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/assignment\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 122 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/distributions",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/distributions\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 123 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/distributions/binomial",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/distributions\/binomial\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 124 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/distributions/continuous",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/distributions\/continuous\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 125 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/distributions/joint",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/distributions\/joint\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 126 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/distributions/normal",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/distributions\/normal\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 127 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/distributions/poisson",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/distributions\/poisson\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 128 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/probability",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/probability\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 129 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/probability/conditional",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/probability\/conditional\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 130 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/probability/events",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/probability\/events\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 131 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/probability/independence",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/probability\/independence\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 132 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/probability/practice",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/probability\/practice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 133 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics",
				pattern: /^\/courses\/mathematics2\/statistics\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 134 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 135 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/bivariatedata",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/bivariatedata\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 136 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/bivariatefrequency",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/bivariatefrequency\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 137 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/correlation2",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/correlation2\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 138 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/correlationtypes",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/correlationtypes\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 139 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/pearson",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/pearson\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 140 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/spearman",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/spearman\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 141 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 142 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures/deviation",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/deviation\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 143 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures/mean",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/mean\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 144 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures/median",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/median\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 145 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures/mode",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/mode\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 146 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/regression",
				pattern: /^\/courses\/mathematics2\/statistics\/regression\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 147 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/regression/leastsquares",
				pattern: /^\/courses\/mathematics2\/statistics\/regression\/leastsquares\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 148 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/regression/regressioncoefficient",
				pattern: /^\/courses\/mathematics2\/statistics\/regression\/regressioncoefficient\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 149 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/regression/regressionlines",
				pattern: /^\/courses\/mathematics2\/statistics\/regression\/regressionlines\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 150 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/[assignmentID]",
				pattern: /^\/courses\/mathematics2\/([^/]+?)\/?$/,
				params: [{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 151 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/[assignmentID]/solution",
				pattern: /^\/courses\/mathematics2\/([^/]+?)\/solution\/?$/,
				params: [{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 152 },
				endpoint: null
			},
			{
				id: "/(general)/courses/qec",
				pattern: /^\/courses\/qec\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 153 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantumalgorithms",
				pattern: /^\/courses\/quantumalgorithms\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 168 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantumcommunication",
				pattern: /^\/courses\/quantumcommunication\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 169 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantumcomputers",
				pattern: /^\/courses\/quantumcomputers\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 170 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantumcryptography",
				pattern: /^\/courses\/quantumcryptography\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 171 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantuminformation1",
				pattern: /^\/courses\/quantuminformation1\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 172 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantuminformation2",
				pattern: /^\/courses\/quantuminformation2\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 173 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantummechanics",
				pattern: /^\/courses\/quantummechanics\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 174 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantumml",
				pattern: /^\/courses\/quantumml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 175 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum",
				pattern: /^\/courses\/quantum\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 154 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/circuits",
				pattern: /^\/courses\/quantum\/circuits\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 155 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/classical",
				pattern: /^\/courses\/quantum\/classical\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 156 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/computers",
				pattern: /^\/courses\/quantum\/computers\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 157 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/correction",
				pattern: /^\/courses\/quantum\/correction\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 158 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/distance",
				pattern: /^\/courses\/quantum\/distance\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 159 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/entropy",
				pattern: /^\/courses\/quantum\/entropy\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 160 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/information",
				pattern: /^\/courses\/quantum\/information\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 161 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/introduction",
				pattern: /^\/courses\/quantum\/introduction\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 162 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/introduction/qubits",
				pattern: /^\/courses\/quantum\/introduction\/qubits\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 163 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/mechanics",
				pattern: /^\/courses\/quantum\/mechanics\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 164 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/noise",
				pattern: /^\/courses\/quantum\/noise\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 165 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/qft",
				pattern: /^\/courses\/quantum\/qft\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 166 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/search",
				pattern: /^\/courses\/quantum\/search\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 167 },
				endpoint: null
			},
			{
				id: "/(cv)/cv",
				pattern: /^\/cv\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/(general)/iit",
				pattern: /^\/iit\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 176 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths",
				pattern: /^\/iit\/maths\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 177 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021",
				pattern: /^\/iit\/maths\/2021\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 178 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question1",
				pattern: /^\/iit\/maths\/2021\/question1\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 179 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question2",
				pattern: /^\/iit\/maths\/2021\/question2\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 180 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question3",
				pattern: /^\/iit\/maths\/2021\/question3\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 181 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question4",
				pattern: /^\/iit\/maths\/2021\/question4\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 182 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question5",
				pattern: /^\/iit\/maths\/2021\/question5\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 183 },
				endpoint: null
			},
			{
				id: "/(general)/iit/maths/2021/question6",
				pattern: /^\/iit\/maths\/2021\/question6\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 184 },
				endpoint: null
			},
			{
				id: "/(general)/notes",
				pattern: /^\/notes\/?$/,
				params: [],
				page: { layouts: [0,4,,], errors: [1,,6,], leaf: 185 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths",
				pattern: /^\/notes\/maths\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 186 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of derivatives/Approximations",
				pattern: /^\/notes\/maths\/Application of derivatives\/Approximations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 187 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of derivatives/Increasing and decreasing functions",
				pattern: /^\/notes\/maths\/Application of derivatives\/Increasing and decreasing functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 188 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of derivatives/Maxima and minima",
				pattern: /^\/notes\/maths\/Application of derivatives\/Maxima and minima\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 189 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of derivatives/Rate of change of quantities",
				pattern: /^\/notes\/maths\/Application of derivatives\/Rate of change of quantities\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 190 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of derivatives/Tangents and normals",
				pattern: /^\/notes\/maths\/Application of derivatives\/Tangents and normals\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 191 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of integrals/Area between two curves",
				pattern: /^\/notes\/maths\/Application of integrals\/Area between two curves\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 192 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Application of integrals/Area under simple curves",
				pattern: /^\/notes\/maths\/Application of integrals\/Area under simple curves\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 193 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Binomial theorem/Binomial theorem for positive integral indices",
				pattern: /^\/notes\/maths\/Binomial theorem\/Binomial theorem for positive integral indices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 194 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Binomial theorem/General and middle terms",
				pattern: /^\/notes\/maths\/Binomial theorem\/General and middle terms\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 195 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Complex numbers and quadratic equations/Algebra of complex numbers",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Algebra of complex numbers\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 196 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Complex numbers and quadratic equations/Argand plane and polar representation",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Argand plane and polar representation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 197 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Complex numbers and quadratic equations/Complex numbers",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Complex numbers\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 198 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Complex numbers and quadratic equations/Quadratic equations",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/Quadratic equations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 199 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Complex numbers and quadratic equations/The modulus and the conjugate of complex number",
				pattern: /^\/notes\/maths\/Complex numbers and quadratic equations\/The modulus and the conjugate of complex number\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 200 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Conic sections/Circle",
				pattern: /^\/notes\/maths\/Conic sections\/Circle\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 202 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Conic sections/Ellipse",
				pattern: /^\/notes\/maths\/Conic sections\/Ellipse\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 203 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Conic sections/Hyperbola",
				pattern: /^\/notes\/maths\/Conic sections\/Hyperbola\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 204 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Conic sections/Parabola",
				pattern: /^\/notes\/maths\/Conic sections\/Parabola\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 205 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Conic sections/Sections of a cone",
				pattern: /^\/notes\/maths\/Conic sections\/Sections of a cone\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 206 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Continuity",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Continuity\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 207 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Derivatives of functions in parametric forms",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Derivatives of functions in parametric forms\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 208 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Differentiability",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Differentiability\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 209 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Exponential and logarithmic functions",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Exponential and logarithmic functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 210 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Logarithmic differentiation",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Logarithmic differentiation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 211 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Mean value theorem",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Mean value theorem\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 212 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Continuity and differentiability/Second order derivative",
				pattern: /^\/notes\/maths\/Continuity and differentiability\/Second order derivative\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 213 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Adjoint and inverse of a matrix",
				pattern: /^\/notes\/maths\/Determinants\/Adjoint and inverse of a matrix\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 214 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Applications of determinants and matrices",
				pattern: /^\/notes\/maths\/Determinants\/Applications of determinants and matrices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 215 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Area of a triangle",
				pattern: /^\/notes\/maths\/Determinants\/Area of a triangle\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 216 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Determinant",
				pattern: /^\/notes\/maths\/Determinants\/Determinant\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 217 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Minors and cofactors",
				pattern: /^\/notes\/maths\/Determinants\/Minors and cofactors\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 218 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Determinants/Properties of determinants",
				pattern: /^\/notes\/maths\/Determinants\/Properties of determinants\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 219 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Differential equations/Basic concepts",
				pattern: /^\/notes\/maths\/Differential equations\/Basic concepts\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 220 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Differential equations/Formation of a differential equation whose general solution is given",
				pattern: /^\/notes\/maths\/Differential equations\/Formation of a differential equation whose general solution is given\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 221 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Differential equations/General and particular solutions of a differential equation",
				pattern: /^\/notes\/maths\/Differential equations\/General and particular solutions of a differential equation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 222 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Differential equations/Methods of solving first order first degree differential equations",
				pattern: /^\/notes\/maths\/Differential equations\/Methods of solving first order first degree differential equations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 223 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Indroduction to 3D geometry/Coordinate axes and coordinate planes in 3D space",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Coordinate axes and coordinate planes in 3D space\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 224 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Indroduction to 3D geometry/Coordinate of a point in space",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Coordinate of a point in space\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 225 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Indroduction to 3D geometry/Distance between two points",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Distance between two points\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 226 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Indroduction to 3D geometry/Section formula",
				pattern: /^\/notes\/maths\/Indroduction to 3D geometry\/Section formula\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 227 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Definite integral",
				pattern: /^\/notes\/maths\/Integrals\/Definite integral\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 228 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Evaluation of definite integrals by substitution",
				pattern: /^\/notes\/maths\/Integrals\/Evaluation of definite integrals by substitution\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 229 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Fundamental theorem of calculus",
				pattern: /^\/notes\/maths\/Integrals\/Fundamental theorem of calculus\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 230 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Integrals of some particular functions",
				pattern: /^\/notes\/maths\/Integrals\/Integrals of some particular functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 231 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Integration as an inverse process of differentiation",
				pattern: /^\/notes\/maths\/Integrals\/Integration as an inverse process of differentiation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 232 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Integration by partial fractions",
				pattern: /^\/notes\/maths\/Integrals\/Integration by partial fractions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 233 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Integration by parts",
				pattern: /^\/notes\/maths\/Integrals\/Integration by parts\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 234 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Methods of integration",
				pattern: /^\/notes\/maths\/Integrals\/Methods of integration\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 235 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Integrals/Some properties of definite integrals",
				pattern: /^\/notes\/maths\/Integrals\/Some properties of definite integrals\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 236 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Inverse trigonometric functions/Basic concepts",
				pattern: /^\/notes\/maths\/Inverse trigonometric functions\/Basic concepts\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 237 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Inverse trigonometric functions/Properties of inverse trigonometric functions",
				pattern: /^\/notes\/maths\/Inverse trigonometric functions\/Properties of inverse trigonometric functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 238 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Limits and derivatives/Derivatives",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Derivatives\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 239 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Limits and derivatives/Intuitive idea of derivatives",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Intuitive idea of derivatives\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 240 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Limits and derivatives/Limits of Trigonometric functions",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Limits of Trigonometric functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 242 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Limits and derivatives/Limits",
				pattern: /^\/notes\/maths\/Limits and derivatives\/Limits\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 241 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear inequalities/Graphical solution in two variables",
				pattern: /^\/notes\/maths\/Linear inequalities\/Graphical solution in two variables\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 243 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear inequalities/Inequalities",
				pattern: /^\/notes\/maths\/Linear inequalities\/Inequalities\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 244 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear inequalities/One variable",
				pattern: /^\/notes\/maths\/Linear inequalities\/One variable\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 245 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear inequalities/Solution of system in two variables",
				pattern: /^\/notes\/maths\/Linear inequalities\/Solution of system in two variables\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 246 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear programming/Different types of linear programming problems",
				pattern: /^\/notes\/maths\/Linear programming\/Different types of linear programming problems\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 247 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Linear programming/Linear programming problem and its mathematical formulation",
				pattern: /^\/notes\/maths\/Linear programming\/Linear programming problem and its mathematical formulation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 248 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Invertible matrices",
				pattern: /^\/notes\/maths\/Matrices\/Invertible matrices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 249 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Matrix",
				pattern: /^\/notes\/maths\/Matrices\/Matrix\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 250 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Operations on matrices",
				pattern: /^\/notes\/maths\/Matrices\/Operations on matrices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 251 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Symmetric and skew symmetric matrices",
				pattern: /^\/notes\/maths\/Matrices\/Symmetric and skew symmetric matrices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 252 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Transformation of a matrix",
				pattern: /^\/notes\/maths\/Matrices\/Transformation of a matrix\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 253 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Transpose of a matrix",
				pattern: /^\/notes\/maths\/Matrices\/Transpose of a matrix\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 254 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Matrices/Typse of matrices",
				pattern: /^\/notes\/maths\/Matrices\/Typse of matrices\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 255 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Permutations and combinations/Combinations",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Combinations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 256 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Permutations and combinations/Fundamental principle of counting",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Fundamental principle of counting\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 257 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Permutations and combinations/Permutations",
				pattern: /^\/notes\/maths\/Permutations and combinations\/Permutations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 258 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Principle of mathematical induction/Motivation",
				pattern: /^\/notes\/maths\/Principle of mathematical induction\/Motivation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 259 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Principle of mathematical induction/The principle of mathematical induction",
				pattern: /^\/notes\/maths\/Principle of mathematical induction\/The principle of mathematical induction\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 260 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Probability/Axiomatic approach to probability",
				pattern: /^\/notes\/maths\/Probability\/Axiomatic approach to probability\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 261 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Probability/Event",
				pattern: /^\/notes\/maths\/Probability\/Event\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 262 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Probability/Random experiments",
				pattern: /^\/notes\/maths\/Probability\/Random experiments\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 263 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 11/Cartesian product of sets",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Cartesian product of sets\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 264 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 11/Functions",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 265 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 11/Relations",
				pattern: /^\/notes\/maths\/Relations and functions 11\/Relations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 266 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 12/Binary operations",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Binary operations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 267 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 12/Composition of functions and invertible function",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Composition of functions and invertible function\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 268 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 12/Types of functions",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Types of functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 269 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Relations and functions 12/Types of relations",
				pattern: /^\/notes\/maths\/Relations and functions 12\/Types of relations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 270 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Arithmetic progression",
				pattern: /^\/notes\/maths\/Sequences and series\/Arithmetic progression\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 271 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Geometric progression",
				pattern: /^\/notes\/maths\/Sequences and series\/Geometric progression\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 272 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Relationship between AM and GM",
				pattern: /^\/notes\/maths\/Sequences and series\/Relationship between AM and GM\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 273 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Sequences",
				pattern: /^\/notes\/maths\/Sequences and series\/Sequences\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 274 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Series",
				pattern: /^\/notes\/maths\/Sequences and series\/Series\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 275 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sequences and series/Sum to n terms of Special series",
				pattern: /^\/notes\/maths\/Sequences and series\/Sum to n terms of Special series\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 276 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Complement of a set",
				pattern: /^\/notes\/maths\/Sets\/Complement of a set\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 277 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Equal sets",
				pattern: /^\/notes\/maths\/Sets\/Equal sets\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 278 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Finite and infinite sets",
				pattern: /^\/notes\/maths\/Sets\/Finite and infinite sets\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 279 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Introduction",
				pattern: /^\/notes\/maths\/Sets\/Introduction\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 280 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Operations on sets",
				pattern: /^\/notes\/maths\/Sets\/Operations on sets\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 281 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Power set",
				pattern: /^\/notes\/maths\/Sets\/Power set\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 282 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Practical problems",
				pattern: /^\/notes\/maths\/Sets\/Practical problems\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 283 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Real numbers",
				pattern: /^\/notes\/maths\/Sets\/Real numbers\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 284 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Sets and their representations",
				pattern: /^\/notes\/maths\/Sets\/Sets and their representations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 285 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Subsets",
				pattern: /^\/notes\/maths\/Sets\/Subsets\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 286 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/The empty set",
				pattern: /^\/notes\/maths\/Sets\/The empty set\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 287 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Universal set",
				pattern: /^\/notes\/maths\/Sets\/Universal set\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 288 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Sets/Venn diagrams",
				pattern: /^\/notes\/maths\/Sets\/Venn diagrams\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 289 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Statistics/Analysis of frequency distributions",
				pattern: /^\/notes\/maths\/Statistics\/Analysis of frequency distributions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 290 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Statistics/Mean deviation",
				pattern: /^\/notes\/maths\/Statistics\/Mean deviation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 291 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Statistics/Range",
				pattern: /^\/notes\/maths\/Statistics\/Range\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 292 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Statistics/Variance and standard deviation",
				pattern: /^\/notes\/maths\/Statistics\/Variance and standard deviation\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 293 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Straight lines/Distance of a point from a line",
				pattern: /^\/notes\/maths\/Straight lines\/Distance of a point from a line\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 294 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Straight lines/General equation of a line",
				pattern: /^\/notes\/maths\/Straight lines\/General equation of a line\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 295 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Straight lines/Slope of a line",
				pattern: /^\/notes\/maths\/Straight lines\/Slope of a line\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 296 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Straight lines/Various forms of the equation of a line",
				pattern: /^\/notes\/maths\/Straight lines\/Various forms of the equation of a line\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 297 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Angle between a line and a plane",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Angle between a line and a plane\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 298 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Angle between two lines",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Angle between two lines\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 299 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Angle between two planes",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Angle between two planes\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 300 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Coplanarity of two lines",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Coplanarity of two lines\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 301 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Direction cosines and direction ratios of a line",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Direction cosines and direction ratios of a line\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 302 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Distance of a point from a plane",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Distance of a point from a plane\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 303 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Equation of a line in space",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Equation of a line in space\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 304 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Plane",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Plane\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 305 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Three dimensional geometry/Shortest distance between two lines",
				pattern: /^\/notes\/maths\/Three dimensional geometry\/Shortest distance between two lines\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 306 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Trigonometric functions/Angles",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Angles\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 307 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Trigonometric functions/Trigonometric equations",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric equations\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 308 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Trigonometric functions/Trigonometric functions of sum and difference of two angles",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric functions of sum and difference of two angles\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 310 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Trigonometric functions/Trigonometric functions",
				pattern: /^\/notes\/maths\/Trigonometric functions\/Trigonometric functions\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 309 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Vector algebra/Addition of vectors",
				pattern: /^\/notes\/maths\/Vector algebra\/Addition of vectors\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 311 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Vector algebra/Multiplication of a vector by a scalar",
				pattern: /^\/notes\/maths\/Vector algebra\/Multiplication of a vector by a scalar\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 312 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Vector algebra/Product of two vectors",
				pattern: /^\/notes\/maths\/Vector algebra\/Product of two vectors\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 313 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Vector algebra/Some basic concepts",
				pattern: /^\/notes\/maths\/Vector algebra\/Some basic concepts\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 314 },
				endpoint: null
			},
			{
				id: "/(general)/notes/maths/Vector algebra/Types of vectors",
				pattern: /^\/notes\/maths\/Vector algebra\/Types of vectors\/?$/,
				params: [],
				page: { layouts: [0,4,,7,], errors: [1,,6,8,], leaf: 315 },
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
				id: "/(general)/practice",
				pattern: /^\/practice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 316 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class10",
				pattern: /^\/practice\/class10\/?$/,
				params: [],
				page: { layouts: [0,4,10,], errors: [1,,,], leaf: 318 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class11",
				pattern: /^\/practice\/class11\/?$/,
				params: [],
				page: { layouts: [0,4,11,], errors: [1,,,], leaf: 319 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class12",
				pattern: /^\/practice\/class12\/?$/,
				params: [],
				page: { layouts: [0,4,12,], errors: [1,,,], leaf: 320 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class1",
				pattern: /^\/practice\/class1\/?$/,
				params: [],
				page: { layouts: [0,4,9,], errors: [1,,,], leaf: 317 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class2",
				pattern: /^\/practice\/class2\/?$/,
				params: [],
				page: { layouts: [0,4,13,], errors: [1,,,], leaf: 321 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class3",
				pattern: /^\/practice\/class3\/?$/,
				params: [],
				page: { layouts: [0,4,14,], errors: [1,,,], leaf: 322 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class4",
				pattern: /^\/practice\/class4\/?$/,
				params: [],
				page: { layouts: [0,4,15,], errors: [1,,,], leaf: 323 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class5",
				pattern: /^\/practice\/class5\/?$/,
				params: [],
				page: { layouts: [0,4,16,], errors: [1,,,], leaf: 324 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class6",
				pattern: /^\/practice\/class6\/?$/,
				params: [],
				page: { layouts: [0,4,17,], errors: [1,,,], leaf: 325 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class7",
				pattern: /^\/practice\/class7\/?$/,
				params: [],
				page: { layouts: [0,4,18,], errors: [1,,,], leaf: 326 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class8",
				pattern: /^\/practice\/class8\/?$/,
				params: [],
				page: { layouts: [0,4,19,], errors: [1,,,], leaf: 327 },
				endpoint: null
			},
			{
				id: "/(general)/practice/class9",
				pattern: /^\/practice\/class9\/?$/,
				params: [],
				page: { layouts: [0,4,20,], errors: [1,,,], leaf: 328 },
				endpoint: null
			},
			{
				id: "/(about)/publications",
				pattern: /^\/publications\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/(about)/research",
				pattern: /^\/research\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/(general)/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 329 },
				endpoint: null
			},
			{
				id: "/(general)/settings/profile",
				pattern: /^\/settings\/profile\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 330 },
				endpoint: null
			},
			{
				id: "/(general)/students",
				pattern: /^\/students\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 331 },
				endpoint: null
			},
			{
				id: "/(general)/talks",
				pattern: /^\/talks\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 332 },
				endpoint: null
			},
			{
				id: "/(general)/talks/quantumstatus",
				pattern: /^\/talks\/quantumstatus\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 333 },
				endpoint: null
			},
			{
				id: "/(general)/talks/quantumteleportation",
				pattern: /^\/talks\/quantumteleportation\/?$/,
				params: [],
				page: { layouts: [0,4,21,], errors: [1,,,], leaf: 334 },
				endpoint: null
			},
			{
				id: "/(about)/teaching",
				pattern: /^\/teaching\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)",
				pattern: /^\/vectorial\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 344 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/about",
				pattern: /^\/vectorial\/about\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 345 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/api/bannerpic",
				pattern: /^\/vectorial\/api\/bannerpic\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-BamAmJ5c.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/comment/[commentID]",
				pattern: /^\/vectorial\/api\/comment\/([^/]+?)\/?$/,
				params: [{"name":"commentID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CsWm8HP0.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/login",
				pattern: /^\/vectorial\/api\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-C1Q5vT1H.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/payments",
				pattern: /^\/vectorial\/api\/payments\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-BuMy0twc.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/posts",
				pattern: /^\/vectorial\/api\/posts\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-BLeulLf3.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/post/[postID]",
				pattern: /^\/vectorial\/api\/post\/([^/]+?)\/?$/,
				params: [{"name":"postID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-D5NvhwHl.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/post/[postID]/comments",
				pattern: /^\/vectorial\/api\/post\/([^/]+?)\/comments\/?$/,
				params: [{"name":"postID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-BhbYHXuo.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/profilepic",
				pattern: /^\/vectorial\/api\/profilepic\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-BpU6KlHx.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/profile",
				pattern: /^\/vectorial\/api\/profile\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CvL2RmEc.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/search",
				pattern: /^\/vectorial\/api\/search\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-DTf7MW90.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/sendImage",
				pattern: /^\/vectorial\/api\/sendImage\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-BVhQhxTC.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/sendProfile",
				pattern: /^\/vectorial\/api\/sendProfile\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-BNs9_8xp.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/signup",
				pattern: /^\/vectorial\/api\/signup\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-By4fEbCc.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/subscription",
				pattern: /^\/vectorial\/api\/subscription\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-l0dHKwYh.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/upload",
				pattern: /^\/vectorial\/api\/upload\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CJPmeLLJ.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/userDetail",
				pattern: /^\/vectorial\/api\/userDetail\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-C7ENSTwO.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/vectorial",
				pattern: /^\/vectorial\/api\/vectorial\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-RQhPnPJs.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/vectorial/symbol",
				pattern: /^\/vectorial\/api\/vectorial\/symbol\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CXyAp299.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/vectorial/symbol/[symbolID]",
				pattern: /^\/vectorial\/api\/vectorial\/symbol\/([^/]+?)\/?$/,
				params: [{"name":"symbolID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-Czf-1xu0.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/[publicID]",
				pattern: /^\/vectorial\/api\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CRJEgwhJ.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/[publicID]/bannerpic",
				pattern: /^\/vectorial\/api\/([^/]+?)\/bannerpic\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-Ci61sIlg.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/[publicID]/comments",
				pattern: /^\/vectorial\/api\/([^/]+?)\/comments\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-Ba-_Ahu8.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/[publicID]/compose",
				pattern: /^\/vectorial\/api\/([^/]+?)\/compose\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-DC3H853e.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/[publicID]/compose/comment",
				pattern: /^\/vectorial\/api\/([^/]+?)\/compose\/comment\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-DYNESppo.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/[publicID]/drawings",
				pattern: /^\/vectorial\/api\/([^/]+?)\/drawings\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CftVlQVY.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/[publicID]/drawings/permission",
				pattern: /^\/vectorial\/api\/([^/]+?)\/drawings\/permission\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CXHe34sO.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/[publicID]/followers",
				pattern: /^\/vectorial\/api\/([^/]+?)\/followers\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-in6Dk9EC.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/[publicID]/followings",
				pattern: /^\/vectorial\/api\/([^/]+?)\/followings\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CWfAPrUr.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/[publicID]/following",
				pattern: /^\/vectorial\/api\/([^/]+?)\/following\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-DKGfS9W8.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/[publicID]/invoices",
				pattern: /^\/vectorial\/api\/([^/]+?)\/invoices\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-BChLr3bh.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/[publicID]/invoices/[invoiceID]",
				pattern: /^\/vectorial\/api\/([^/]+?)\/invoices\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"invoiceID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-D0cjVbhd.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/[publicID]/likes",
				pattern: /^\/vectorial\/api\/([^/]+?)\/likes\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CrtRo8b7.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/[publicID]/likes/[postID]",
				pattern: /^\/vectorial\/api\/([^/]+?)\/likes\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"postID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-BSqka0Er.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/[publicID]/media",
				pattern: /^\/vectorial\/api\/([^/]+?)\/media\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-Dd2WN1WJ.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/[publicID]/posts",
				pattern: /^\/vectorial\/api\/([^/]+?)\/posts\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CoPleJiY.js'))
			},
			{
				id: "/(vectorial)/vectorial/api/[publicID]/profilepic",
				pattern: /^\/vectorial\/api\/([^/]+?)\/profilepic\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-kUHVjXco.js'))
			},
			{
				id: "/(vectorial)/vectorial/app",
				pattern: /^\/vectorial\/app\/?$/,
				params: [],
				page: { layouts: [0,22,23,25,], errors: [1,,,,], leaf: 375 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/auth",
				pattern: /^\/vectorial\/auth\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 346 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/comment/[commentID]",
				pattern: /^\/vectorial\/comment\/([^/]+?)\/?$/,
				params: [{"name":"commentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 347 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/compose",
				pattern: /^\/vectorial\/compose\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 348 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/download",
				pattern: /^\/vectorial\/download\/?$/,
				params: [],
				page: { layouts: [0,22,23,26,], errors: [1,,,,], leaf: 376 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn",
				pattern: /^\/vectorial\/learn\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 349 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn/advanced",
				pattern: /^\/vectorial\/learn\/advanced\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 350 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn/filters",
				pattern: /^\/vectorial\/learn\/filters\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 351 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn/latex",
				pattern: /^\/vectorial\/learn\/latex\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 352 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn/markers",
				pattern: /^\/vectorial\/learn\/markers\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 353 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn/masks",
				pattern: /^\/vectorial\/learn\/masks\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 354 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn/paths",
				pattern: /^\/vectorial\/learn\/paths\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 355 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn/shapes",
				pattern: /^\/vectorial\/learn\/shapes\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 356 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn/styles",
				pattern: /^\/vectorial\/learn\/styles\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 357 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn/text",
				pattern: /^\/vectorial\/learn\/text\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 358 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn/transform",
				pattern: /^\/vectorial\/learn\/transform\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 359 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/legal/privacy",
				pattern: /^\/vectorial\/legal\/privacy\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 360 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/legal/refund",
				pattern: /^\/vectorial\/legal\/refund\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 361 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/legal/terms",
				pattern: /^\/vectorial\/legal\/terms\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 362 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/login",
				pattern: /^\/vectorial\/login\/?$/,
				params: [],
				page: { layouts: [0,22,23,], errors: [1,,,], leaf: 377 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/post/[postID]",
				pattern: /^\/vectorial\/post\/([^/]+?)\/?$/,
				params: [{"name":"postID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 363 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/search",
				pattern: /^\/vectorial\/search\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 364 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/settings",
				pattern: /^\/vectorial\/settings\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 365 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/settings/profile",
				pattern: /^\/vectorial\/settings\/profile\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 366 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/shipping",
				pattern: /^\/vectorial\/shipping\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 367 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/subscription",
				pattern: /^\/vectorial\/subscription\/?$/,
				params: [],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 368 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/[publicID]",
				pattern: /^\/vectorial\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 370 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/[publicID]/drawings",
				pattern: /^\/vectorial\/([^/]+?)\/drawings\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 371 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/[publicID]/edit",
				pattern: /^\/vectorial\/([^/]+?)\/edit\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 372 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/[publicID]/edit/comment",
				pattern: /^\/vectorial\/([^/]+?)\/edit\/comment\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 373 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/[publicID]/invoices",
				pattern: /^\/vectorial\/([^/]+?)\/invoices\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 374 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/[...catchAll]",
				pattern: /^\/vectorial(?:\/(.*))?\/?$/,
				params: [{"name":"catchAll","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,22,23,24,], errors: [1,,,,], leaf: 369 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 336 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/assignments",
				pattern: /^\/([^/]+?)\/assignments\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 337 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/assignments/new",
				pattern: /^\/([^/]+?)\/assignments\/new\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 338 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/assignments/[assignmentID]",
				pattern: /^\/([^/]+?)\/assignments\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 339 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/questions",
				pattern: /^\/([^/]+?)\/questions\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 340 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/questions/new",
				pattern: /^\/([^/]+?)\/questions\/new\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 341 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/questions/[questionID]",
				pattern: /^\/([^/]+?)\/questions\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"questionID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 342 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/submissions",
				pattern: /^\/([^/]+?)\/submissions\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 343 },
				endpoint: null
			},
			{
				id: "/(general)/[...catchAll]",
				pattern: /^(?:\/(.*))?\/?$/,
				params: [{"name":"catchAll","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 335 },
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
