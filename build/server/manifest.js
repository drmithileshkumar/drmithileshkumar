const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["announcement/html.svg","announcement/perspective.svg","app.css","avatar.svg","background copy.svg","background.svg","banner.png","banner.svg","circle_demo/circle.png","circle_demo/circle_anime.mp4","circle_demo/Cone-equation.png","circle_demo/Cone.png","circle_demo/conics.png","circle_demo/Conic_anime.mp4","circle_demo/Conic_deg.mp4","circle_demo/ellipse_anime.mp4","circle_demo/hyperbola_anime.mp4","circle_demo/IIT21Q1.png","circle_demo/orthocenter.png","circle_demo/parabola_anime.mp4","circle_demo/Plane.png","circle_demo/Tangents.png","circle_demo/threepointcircle.png","CMIMedal.jpg","cmithesis.pdf","common.css","courses/internet/css/boxmodel.svg","courses/internet/wwwhtml/fundamentals/intro/dns.png","courses/internet/wwwhtml/fundamentals/intro/dns.webp","courses/internet/wwwhtml/html/audio/tada.wav","courses/internet/wwwhtml/html/video/germinate.mp4","courses/mathematics2/cyclic.jpg","courses/mathematics2/normal.jpg","courses/mathematics2/normalCritical.png","courses/mathematics2/originalTime.jpg","courses/mathematics2/randomcomponent.jpg","courses/mathematics2/seasonality.jpg","courses/mathematics2/trend.jpg","courses/mathematics2/ztable1.webp","courses/mathematics2/ztable2.webp","custom.css","dark.css","facebook.svg","favicon.png","IITMSc.jpg","instagram.svg","LCPath.svg","light.css","manifest.json","mathril/about/book.png","mathril/about/fountain.png","mathril/about/idea.png","mathril/about/questionStudent.png","mathril/about/shakyFoundation.png","mathril/android/add.jpg","mathril/android/add2.jpg","mathril/android/app.jpg","mathril/android/appview.jpg","mathril/android/menu.jpg","mathril/announcement/boardX.svg","mathril/announcement/courses/appDerivatives.svg","mathril/announcement/courses/appIntegrals.svg","mathril/announcement/courses/binomial.svg","mathril/announcement/courses/circle.svg","mathril/announcement/courses/combinatorics.svg","mathril/announcement/courses/complex.svg","mathril/announcement/courses/continuity.svg","mathril/announcement/courses/definite.svg","mathril/announcement/courses/derivatives.svg","mathril/announcement/courses/determinants.svg","mathril/announcement/courses/differentiability.svg","mathril/announcement/courses/differential.svg","mathril/announcement/courses/ellipse.svg","mathril/announcement/courses/hyperbola.svg","mathril/announcement/courses/indefinite.svg","mathril/announcement/courses/induction.svg","mathril/announcement/courses/inequalities.svg","mathril/announcement/courses/inverse.svg","mathril/announcement/courses/limits.svg","mathril/announcement/courses/linear.svg","mathril/announcement/courses/lines.svg","mathril/announcement/courses/matrices.svg","mathril/announcement/courses/parabola.svg","mathril/announcement/courses/probability.svg","mathril/announcement/courses/quadratic.svg","mathril/announcement/courses/reasoning.svg","mathril/announcement/courses/relations11.svg","mathril/announcement/courses/relations12.svg","mathril/announcement/courses/sequences.svg","mathril/announcement/courses/sets.svg","mathril/announcement/courses/statistics.svg","mathril/announcement/courses/threeD.svg","mathril/announcement/courses/trigonometry.svg","mathril/announcement/courses/vectors.svg","mathril/announcement/html.svg","mathril/announcement/liveinstructor.svg","mathril/announcement/perspective.svg","mathril/announcement/selfpaced.svg","mathril/announcement/sets.svg","mathril/app.css","mathril/assets/Head.png","mathril/assets/Tail.png","mathril/avatar.svg","mathril/background.svg","mathril/banner.png","mathril/banner.svg","mathril/books/Vector/cover.jpg","mathril/books/Vector/sample1.jpg","mathril/books/Vector/sample2.jpg","mathril/books/Vector/sample3.jpg","mathril/books/Vector/sample4.jpg","mathril/common.css","mathril/facebook.svg","mathril/favicon.png","mathril/favicon.svg","mathril/help.svg","mathril/icons/Apple_logo.svg","mathril/icons/chapter.svg","mathril/icons/shapes1.svg","mathril/instagram.svg","mathril/iOS/add.jpg","mathril/iOS/add2.jpg","mathril/iOS/app.jpg","mathril/iOS/share.jpg","mathril/landing/banner.svg","mathril/landing/Flag_of_India.svg","mathril/landing/practice.mov","mathril/landing/student.png","mathril/mathrilManifest.json","mathril/mithileshkumar.png","mathril/promoter/promoter.png","mathril/robots.txt","mathril/scorecard.svg","mathril/smui-dark.css","mathril/smui.css","mathril/teacher/teacher.png","mathril/telegram.svg","mathril/twitter.png","mathril/user.svg","mathril/whatsapp.svg","mathril/youtube.svg","mathril/youtubeButton.svg","mithileshkumar.png","notes/maths/sets/equal/thumbnail.svg","notes/maths/sets/finite/thumbnail.svg","notes/maths/sets/introduction/example.svg","notes/maths/sets/introduction/oddeven.svg","notes/maths/sets/real/interval.svg","notes/maths/sets/real/subsetreal.svg","notes/maths/sets/representation/heroparadox.svg","notes/maths/sets/subsets/thumbnail.svg","notes/maths/sets/subsets/tree.svg","notes/quantum/CNOT.svg","notes/quantum/qubit2d.svg","notes/quantum/teleportation.svg","photo_cv.jpg","profilephoto.jpeg","Research/BTFVS/BipartiteTournament.png","Research/TFVS/BalancedPartition.png","Research/TFVS/InducedOrder.png","Research/TFVS/Subtournaments.png","Research/TFVS/Topological.png","Research/TFVS/TopologicalStructure.png","robots.txt","santa.svg","smui-dark.css","smui.css","svelte-welcome.png","svelte-welcome.webp","telegram.svg","thesis.pdf","twitter copy.png","twitter.png","vectorial/background.svg","vectorial/latex/calculus.svg","vectorial/latex/qubit.svg","vectorial/latex/subsets.svg","vectorial/latex/teleportation.svg","vectorial/test/markers.svg","vectorial/vectorialhome.svg","webdutIcon.png","youtube.svg","service-worker.js"]),
	mimeTypes: {".svg":"image/svg+xml",".css":"text/css",".png":"image/png",".mp4":"video/mp4",".jpg":"image/jpeg",".pdf":"application/pdf",".webp":"image/webp",".wav":"audio/wav",".json":"application/json",".mov":"video/quicktime",".txt":"text/plain",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.B8e8YSkR.js","app":"_app/immutable/entry/app.5kmMLd__.js","imports":["_app/immutable/entry/start.B8e8YSkR.js","_app/immutable/chunks/entry.tKeSwN7G.js","_app/immutable/chunks/scheduler.HFrwntH8.js","_app/immutable/chunks/index.ChKAqM74.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.5kmMLd__.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.HFrwntH8.js","_app/immutable/chunks/index.Bj97moK3.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BQyzxfp5.js')),
			__memo(() => import('./chunks/1-B_BtHr4J.js')),
			__memo(() => import('./chunks/2-5veigKUU.js')),
			__memo(() => import('./chunks/3-BVsbnOeX.js')),
			__memo(() => import('./chunks/4-Dq-qNUJp.js')),
			__memo(() => import('./chunks/5-DnYe9eQk.js')),
			__memo(() => import('./chunks/6-eIxstnXW.js')),
			__memo(() => import('./chunks/7-3JT62GbC.js')),
			__memo(() => import('./chunks/8-DmF1lKVz.js')),
			__memo(() => import('./chunks/9-B4ejC-0y.js')),
			__memo(() => import('./chunks/10-CcAQhCBB.js')),
			__memo(() => import('./chunks/11-BlnDAymg.js')),
			__memo(() => import('./chunks/12-BNREsDWs.js')),
			__memo(() => import('./chunks/13-BIo4Z0-Q.js')),
			__memo(() => import('./chunks/14-DHkQb9tn.js')),
			__memo(() => import('./chunks/15-Dd7q9peY.js')),
			__memo(() => import('./chunks/16-DFoCAH8s.js')),
			__memo(() => import('./chunks/17-CT9yyqz3.js')),
			__memo(() => import('./chunks/18-DpCpgtYS.js')),
			__memo(() => import('./chunks/19-BcAmmq5m.js')),
			__memo(() => import('./chunks/20-BokfaRkn.js')),
			__memo(() => import('./chunks/21-C5Ykaegv.js')),
			__memo(() => import('./chunks/22-o0PdiTL-.js')),
			__memo(() => import('./chunks/23-_qlWmWSJ.js')),
			__memo(() => import('./chunks/24-Cu3obBkz.js')),
			__memo(() => import('./chunks/25-ZQGC1IZQ.js')),
			__memo(() => import('./chunks/26-CGuPLD80.js')),
			__memo(() => import('./chunks/27-7Oux13_L.js')),
			__memo(() => import('./chunks/28-CwjPcnd8.js')),
			__memo(() => import('./chunks/29-Bk3UwBPS.js')),
			__memo(() => import('./chunks/30-BKXGtb-_.js')),
			__memo(() => import('./chunks/31-C5lHzDv_.js')),
			__memo(() => import('./chunks/32-DKmU7tE7.js')),
			__memo(() => import('./chunks/33-DjYSliHf.js')),
			__memo(() => import('./chunks/34-Cw8gYMRV.js')),
			__memo(() => import('./chunks/35-CJqMqEuQ.js')),
			__memo(() => import('./chunks/36-BJcFY_0s.js')),
			__memo(() => import('./chunks/37-BpqMizVV.js')),
			__memo(() => import('./chunks/38-_Sq5Oo3Q.js')),
			__memo(() => import('./chunks/39-BpSpFDJV.js')),
			__memo(() => import('./chunks/40-Di4xLOHQ.js')),
			__memo(() => import('./chunks/41-zyMh8FQQ.js')),
			__memo(() => import('./chunks/42-CogtRy8e.js')),
			__memo(() => import('./chunks/43-EoToq4wu.js')),
			__memo(() => import('./chunks/44-InWxiOLa.js')),
			__memo(() => import('./chunks/45-CNDKV_0c.js')),
			__memo(() => import('./chunks/46-CzyfzAW8.js')),
			__memo(() => import('./chunks/47-DL69MqTa.js')),
			__memo(() => import('./chunks/48-Bg3IJpSF.js')),
			__memo(() => import('./chunks/49-EtwZAKdm.js')),
			__memo(() => import('./chunks/50-CI0LRYPz.js')),
			__memo(() => import('./chunks/51-BvLg9LqP.js')),
			__memo(() => import('./chunks/52-DPg98ke6.js')),
			__memo(() => import('./chunks/53-Cjbdr-j8.js')),
			__memo(() => import('./chunks/54-DgO4Igor.js')),
			__memo(() => import('./chunks/55--aTGebKR.js')),
			__memo(() => import('./chunks/56-ChhFXDJJ.js')),
			__memo(() => import('./chunks/57-BL_F1BMv.js')),
			__memo(() => import('./chunks/58-BGUm0Vsv.js')),
			__memo(() => import('./chunks/59-bgLcMdkR.js')),
			__memo(() => import('./chunks/60-ClcSO0NT.js')),
			__memo(() => import('./chunks/61-C98Yk8B1.js')),
			__memo(() => import('./chunks/62-ByBCkC9g.js')),
			__memo(() => import('./chunks/63-CdQtz6N7.js')),
			__memo(() => import('./chunks/64-BsV6SHYe.js')),
			__memo(() => import('./chunks/65-DC6gzX7e.js')),
			__memo(() => import('./chunks/66-Djz8IL9f.js')),
			__memo(() => import('./chunks/67-CxNTDSAE.js')),
			__memo(() => import('./chunks/68-DfEDYKch.js')),
			__memo(() => import('./chunks/69-D77y1pri.js')),
			__memo(() => import('./chunks/70-C2A9-n7B.js')),
			__memo(() => import('./chunks/71-CR7AxEjc.js')),
			__memo(() => import('./chunks/72-D4exZvPo.js')),
			__memo(() => import('./chunks/73-Dt8qH5Gs.js')),
			__memo(() => import('./chunks/74-qVYzQ0Tr.js')),
			__memo(() => import('./chunks/75-ByheG8LX.js')),
			__memo(() => import('./chunks/76-DwFC6ERe.js')),
			__memo(() => import('./chunks/77-DszmDH_f.js')),
			__memo(() => import('./chunks/78-BV-SImfe.js')),
			__memo(() => import('./chunks/79-D4WSC7pb.js')),
			__memo(() => import('./chunks/80-C6Tn3Ydd.js')),
			__memo(() => import('./chunks/81-DKSggjJn.js')),
			__memo(() => import('./chunks/82-EQcdxhgh.js')),
			__memo(() => import('./chunks/83-HCb_b-XB.js')),
			__memo(() => import('./chunks/84-BqNr22LB.js')),
			__memo(() => import('./chunks/85-DUh6dIKj.js')),
			__memo(() => import('./chunks/86-BynYH8kp.js')),
			__memo(() => import('./chunks/87-Cq8PqOeD.js')),
			__memo(() => import('./chunks/88-C_rXJpLF.js')),
			__memo(() => import('./chunks/89-zt28ljta.js')),
			__memo(() => import('./chunks/90-BRbzfNvo.js')),
			__memo(() => import('./chunks/91-C1qAgNEF.js')),
			__memo(() => import('./chunks/92-Cdyv6H_S.js')),
			__memo(() => import('./chunks/93-DuqDnA_O.js')),
			__memo(() => import('./chunks/94-CCSdkf7i.js')),
			__memo(() => import('./chunks/95-BdsQJ_JF.js')),
			__memo(() => import('./chunks/96-BuABndLE.js')),
			__memo(() => import('./chunks/97-BRvCR23n.js')),
			__memo(() => import('./chunks/98-BsSkYwO6.js')),
			__memo(() => import('./chunks/99-B-LzanVF.js')),
			__memo(() => import('./chunks/100-BEWPZBb8.js')),
			__memo(() => import('./chunks/101-nFm_gJ2b.js')),
			__memo(() => import('./chunks/102-CLBqhsB6.js')),
			__memo(() => import('./chunks/103-DwnFcoUz.js')),
			__memo(() => import('./chunks/104-CUCAGK4S.js')),
			__memo(() => import('./chunks/105-XgADOm2u.js')),
			__memo(() => import('./chunks/106-CmFg6GyM.js')),
			__memo(() => import('./chunks/107-BNGRXSrr.js')),
			__memo(() => import('./chunks/108-HV4IoMLG.js')),
			__memo(() => import('./chunks/109-C5bsK-2i.js')),
			__memo(() => import('./chunks/110-GzzL5Z-Q.js')),
			__memo(() => import('./chunks/111-yLN3_mWu.js')),
			__memo(() => import('./chunks/112-BsWvXJfm.js')),
			__memo(() => import('./chunks/113-Bpr4ScEz.js')),
			__memo(() => import('./chunks/114-Bg7xNuWX.js')),
			__memo(() => import('./chunks/115-Ct1gNdr7.js')),
			__memo(() => import('./chunks/116-C6D-NDKg.js')),
			__memo(() => import('./chunks/117-nxUg8HrA.js')),
			__memo(() => import('./chunks/118-DXuqb77Y.js')),
			__memo(() => import('./chunks/119-DUoGqvcS.js')),
			__memo(() => import('./chunks/120-CmTOis-b.js')),
			__memo(() => import('./chunks/121-BddxqTVY.js')),
			__memo(() => import('./chunks/122-DIo3RQ4f.js')),
			__memo(() => import('./chunks/123-DD1cLdFv.js')),
			__memo(() => import('./chunks/124-BUVpKAQ2.js')),
			__memo(() => import('./chunks/125-CqwxbFv4.js')),
			__memo(() => import('./chunks/126-Craog8Nl.js')),
			__memo(() => import('./chunks/127-CPD8nhdC.js')),
			__memo(() => import('./chunks/128-CZ-diCll.js')),
			__memo(() => import('./chunks/129-BKZD_leH.js')),
			__memo(() => import('./chunks/130-6DE7NZJO.js')),
			__memo(() => import('./chunks/131-DdCFooma.js')),
			__memo(() => import('./chunks/132-Cs-X2OE4.js')),
			__memo(() => import('./chunks/133-Co_DSTMz.js')),
			__memo(() => import('./chunks/134-BauHnnLO.js')),
			__memo(() => import('./chunks/135-DE9TtONO.js')),
			__memo(() => import('./chunks/136-D-m4um2_.js')),
			__memo(() => import('./chunks/137-Du2zyICM.js')),
			__memo(() => import('./chunks/138-D4233egL.js')),
			__memo(() => import('./chunks/139-vUyOoTF-.js')),
			__memo(() => import('./chunks/140-q63zZ1Pq.js')),
			__memo(() => import('./chunks/141-CatnU8sq.js')),
			__memo(() => import('./chunks/142-CJo6EhnC.js')),
			__memo(() => import('./chunks/143-D5TwZnyf.js')),
			__memo(() => import('./chunks/144-CGT-iqIb.js')),
			__memo(() => import('./chunks/145-B8XwUswq.js')),
			__memo(() => import('./chunks/146-C_eOg-0c.js')),
			__memo(() => import('./chunks/147-BPY2f-Pu.js')),
			__memo(() => import('./chunks/148-iEWni0uz.js')),
			__memo(() => import('./chunks/149-CS7QLyyx.js')),
			__memo(() => import('./chunks/150-DzP9NDpI.js')),
			__memo(() => import('./chunks/151-CRVFI4WE.js')),
			__memo(() => import('./chunks/152-DDOlXxSS.js')),
			__memo(() => import('./chunks/153-Di_qdKxZ.js')),
			__memo(() => import('./chunks/154-Dy7iNOxC.js')),
			__memo(() => import('./chunks/155-DGwgS_8S.js')),
			__memo(() => import('./chunks/156-BjTUfXUg.js')),
			__memo(() => import('./chunks/157-CEyu3_nU.js')),
			__memo(() => import('./chunks/158-2cBB0Bfh.js')),
			__memo(() => import('./chunks/159-CCjGO4gB.js')),
			__memo(() => import('./chunks/160-B081reW6.js')),
			__memo(() => import('./chunks/161-3CLdeGXM.js')),
			__memo(() => import('./chunks/162-BC80zht-.js')),
			__memo(() => import('./chunks/163-DQ1Yz5E7.js')),
			__memo(() => import('./chunks/164-D8Hs89uk.js')),
			__memo(() => import('./chunks/165-ClJeb-9H.js')),
			__memo(() => import('./chunks/166-JlJXdYyi.js')),
			__memo(() => import('./chunks/167-B4JTuACS.js')),
			__memo(() => import('./chunks/168-CjoHL-4J.js')),
			__memo(() => import('./chunks/169-CzAgvLaN.js')),
			__memo(() => import('./chunks/170-DKwAoQM0.js')),
			__memo(() => import('./chunks/171-Cv4byqPN.js')),
			__memo(() => import('./chunks/172-WB8rlHuQ.js')),
			__memo(() => import('./chunks/173-6onvYbaY.js')),
			__memo(() => import('./chunks/174-C8vjx5jh.js')),
			__memo(() => import('./chunks/175-CHO_p2kj.js')),
			__memo(() => import('./chunks/176-g5kdpMj6.js')),
			__memo(() => import('./chunks/177-BNtWWQLV.js')),
			__memo(() => import('./chunks/178-DLAQtZU-.js')),
			__memo(() => import('./chunks/179-CZA0eLSJ.js')),
			__memo(() => import('./chunks/180-IIcuTslr.js')),
			__memo(() => import('./chunks/181-rmv6h3H9.js')),
			__memo(() => import('./chunks/182-4vasjt-l.js')),
			__memo(() => import('./chunks/183-GMuVyY_7.js')),
			__memo(() => import('./chunks/184-zFQCuj6v.js')),
			__memo(() => import('./chunks/185-uLqTZSiC.js')),
			__memo(() => import('./chunks/186-3BUdxcOv.js')),
			__memo(() => import('./chunks/187-DNeyH7ut.js')),
			__memo(() => import('./chunks/188-B-9ZSVK0.js')),
			__memo(() => import('./chunks/189-CvGq8I7j.js')),
			__memo(() => import('./chunks/190-9qqJcrue.js')),
			__memo(() => import('./chunks/191-B4Sfse3v.js')),
			__memo(() => import('./chunks/192-BntGAxAV.js')),
			__memo(() => import('./chunks/193-C7zrz1f5.js')),
			__memo(() => import('./chunks/194-Bw_KZDsZ.js')),
			__memo(() => import('./chunks/195-BJ_Q3Qr2.js')),
			__memo(() => import('./chunks/196-BNEd0MJS.js')),
			__memo(() => import('./chunks/197-DwfOC-gy.js')),
			__memo(() => import('./chunks/198-DQS4qfhb.js')),
			__memo(() => import('./chunks/199-DefxQ7w8.js')),
			__memo(() => import('./chunks/200-DWN1bE5W.js')),
			__memo(() => import('./chunks/201-DGFJNcnS.js')),
			__memo(() => import('./chunks/202-CG9rJ-bw.js')),
			__memo(() => import('./chunks/203-6Z7KbTg3.js')),
			__memo(() => import('./chunks/204-DaQCAhaZ.js')),
			__memo(() => import('./chunks/205-Cb3r1MyQ.js')),
			__memo(() => import('./chunks/206-C2xJhUqv.js')),
			__memo(() => import('./chunks/207-CvcmvjqW.js')),
			__memo(() => import('./chunks/208-8fkYFscx.js')),
			__memo(() => import('./chunks/209-CO4nwtRx.js')),
			__memo(() => import('./chunks/210-tW9NArU5.js')),
			__memo(() => import('./chunks/211-Bkqid3R4.js')),
			__memo(() => import('./chunks/212-CUuVYokS.js')),
			__memo(() => import('./chunks/213-Cguxv-Xu.js')),
			__memo(() => import('./chunks/214-DcJbT3Ey.js')),
			__memo(() => import('./chunks/215-PfLtaIrY.js')),
			__memo(() => import('./chunks/216-uT71Ee4E.js')),
			__memo(() => import('./chunks/217-C4VfP_53.js')),
			__memo(() => import('./chunks/218-DlXzBajF.js')),
			__memo(() => import('./chunks/219-C1EDhMl6.js')),
			__memo(() => import('./chunks/220-DBSKhOaT.js')),
			__memo(() => import('./chunks/221-BP931DaU.js')),
			__memo(() => import('./chunks/222-SJXbnyCI.js')),
			__memo(() => import('./chunks/223-I0msH2Ok.js')),
			__memo(() => import('./chunks/224-DJhDCv2n.js')),
			__memo(() => import('./chunks/225-BtpWu2rF.js')),
			__memo(() => import('./chunks/226-C3bjT9Wl.js')),
			__memo(() => import('./chunks/227-CAbSkwYL.js')),
			__memo(() => import('./chunks/228-AFgajs2s.js')),
			__memo(() => import('./chunks/229-B1cSkt_i.js')),
			__memo(() => import('./chunks/230-DiqRBcZf.js')),
			__memo(() => import('./chunks/231-CIchW-8D.js')),
			__memo(() => import('./chunks/232-ByAwEtm2.js')),
			__memo(() => import('./chunks/233-Cn50yYie.js')),
			__memo(() => import('./chunks/234-Cc_BusTP.js')),
			__memo(() => import('./chunks/235-Cbnr7Z1S.js')),
			__memo(() => import('./chunks/236-rnNVM93O.js')),
			__memo(() => import('./chunks/237-BKEhXkcM.js')),
			__memo(() => import('./chunks/238-CAzgcb6Q.js')),
			__memo(() => import('./chunks/239-Ml5WnhGA.js')),
			__memo(() => import('./chunks/240-C_TGyJG9.js')),
			__memo(() => import('./chunks/241-BGJce5p0.js')),
			__memo(() => import('./chunks/242-DBvJIp0C.js')),
			__memo(() => import('./chunks/243-Z4Y2F6HA.js')),
			__memo(() => import('./chunks/244-7htOF2Yz.js')),
			__memo(() => import('./chunks/245-BKxkoDKc.js')),
			__memo(() => import('./chunks/246-C_EHdFKX.js')),
			__memo(() => import('./chunks/247-BX264TQx.js')),
			__memo(() => import('./chunks/248-DvgZcIjs.js')),
			__memo(() => import('./chunks/249-Xows-al2.js')),
			__memo(() => import('./chunks/250-TTNGORQf.js')),
			__memo(() => import('./chunks/251-DVvtiCqL.js')),
			__memo(() => import('./chunks/252-C3Ym1ADe.js')),
			__memo(() => import('./chunks/253-DkT4cpOm.js')),
			__memo(() => import('./chunks/254-Ch4gR9Nn.js')),
			__memo(() => import('./chunks/255-uz0dQeY6.js')),
			__memo(() => import('./chunks/256--OqgJyWa.js')),
			__memo(() => import('./chunks/257-DPqN9YMX.js')),
			__memo(() => import('./chunks/258-ByaIjBJq.js')),
			__memo(() => import('./chunks/259-DE_MNbwZ.js')),
			__memo(() => import('./chunks/260-C8_KELsY.js')),
			__memo(() => import('./chunks/261-CUHuxIIX.js'))
		],
		routes: [
			{
				id: "/(general)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(about)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
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
				endpoint: __memo(() => import('./chunks/_server-DIzreKTI.js'))
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
				page: { layouts: [0,4,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(general)/assignments/[assignmentID]",
				pattern: /^\/assignments\/([^/]+?)\/?$/,
				params: [{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(general)/assignments/[assignmentID]/solution",
				pattern: /^\/assignments\/([^/]+?)\/solution\/?$/,
				params: [{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(general)/auth",
				pattern: /^\/auth\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(general)/courses",
				pattern: /^\/courses\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(general)/courses/algorithms",
				pattern: /^\/courses\/algorithms\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(general)/courses/algorithms/sorting",
				pattern: /^\/courses\/algorithms\/sorting\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(general)/courses/algorithms/sorting/bubble",
				pattern: /^\/courses\/algorithms\/sorting\/bubble\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(general)/courses/algorithms/sorting/bucket",
				pattern: /^\/courses\/algorithms\/sorting\/bucket\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/(general)/courses/algorithms/sorting/complexity",
				pattern: /^\/courses\/algorithms\/sorting\/complexity\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/(general)/courses/algorithms/sorting/count",
				pattern: /^\/courses\/algorithms\/sorting\/count\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/(general)/courses/algorithms/sorting/insertion",
				pattern: /^\/courses\/algorithms\/sorting\/insertion\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/(general)/courses/algorithms/sorting/merge",
				pattern: /^\/courses\/algorithms\/sorting\/merge\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/(general)/courses/algorithms/sorting/quick",
				pattern: /^\/courses\/algorithms\/sorting\/quick\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/(general)/courses/algorithms/sorting/redix",
				pattern: /^\/courses\/algorithms\/sorting\/redix\/?$/,
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
				id: "/(general)/courses/discrete",
				pattern: /^\/courses\/discrete\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab",
				pattern: /^\/courses\/internetlab\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 92 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/authentication",
				pattern: /^\/courses\/internetlab\/authentication\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 93 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/calculator",
				pattern: /^\/courses\/internetlab\/calculator\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 94 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/college",
				pattern: /^\/courses\/internetlab\/college\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 95 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/dtd",
				pattern: /^\/courses\/internetlab\/dtd\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 96 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/javascript",
				pattern: /^\/courses\/internetlab\/javascript\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 97 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/nodejs",
				pattern: /^\/courses\/internetlab\/nodejs\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 98 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/practice",
				pattern: /^\/courses\/internetlab\/practice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 99 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/resume",
				pattern: /^\/courses\/internetlab\/resume\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 100 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/town",
				pattern: /^\/courses\/internetlab\/town\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 101 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internetlab/xml",
				pattern: /^\/courses\/internetlab\/xml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 102 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet",
				pattern: /^\/courses\/internet\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css",
				pattern: /^\/courses\/internet\/css\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/border",
				pattern: /^\/courses\/internet\/css\/border\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/box",
				pattern: /^\/courses\/internet\/css\/box\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/colors",
				pattern: /^\/courses\/internet\/css\/colors\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/layout",
				pattern: /^\/courses\/internet\/css\/layout\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/position",
				pattern: /^\/courses\/internet\/css\/position\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/practice",
				pattern: /^\/courses\/internet\/css\/practice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/responsive",
				pattern: /^\/courses\/internet\/css\/responsive\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/selectors",
				pattern: /^\/courses\/internet\/css\/selectors\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/css/typography",
				pattern: /^\/courses\/internet\/css\/typography\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript",
				pattern: /^\/courses\/internet\/javascript\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/asynchronous",
				pattern: /^\/courses\/internet\/javascript\/asynchronous\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics",
				pattern: /^\/courses\/internet\/javascript\/basics\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/calculator",
				pattern: /^\/courses\/internet\/javascript\/basics\/calculator\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/conditions",
				pattern: /^\/courses\/internet\/javascript\/basics\/conditions\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/error",
				pattern: /^\/courses\/internet\/javascript\/basics\/error\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/expressions",
				pattern: /^\/courses\/internet\/javascript\/basics\/expressions\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 52 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/functions",
				pattern: /^\/courses\/internet\/javascript\/basics\/functions\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 53 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/loops",
				pattern: /^\/courses\/internet\/javascript\/basics\/loops\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 54 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/objectorientation",
				pattern: /^\/courses\/internet\/javascript\/basics\/objectorientation\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 55 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/overview",
				pattern: /^\/courses\/internet\/javascript\/basics\/overview\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 56 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/basics/variables",
				pattern: /^\/courses\/internet\/javascript\/basics\/variables\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 57 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/dynamic",
				pattern: /^\/courses\/internet\/javascript\/dynamic\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 58 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/fetchapi",
				pattern: /^\/courses\/internet\/javascript\/fetchapi\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 59 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/html",
				pattern: /^\/courses\/internet\/javascript\/html\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 60 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/http",
				pattern: /^\/courses\/internet\/javascript\/http\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 61 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/javascript/practice",
				pattern: /^\/courses\/internet\/javascript\/practice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 62 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/nodejs",
				pattern: /^\/courses\/internet\/nodejs\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 63 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml",
				pattern: /^\/courses\/internet\/wwwhtml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 64 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 65 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/browsers",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/browsers\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 66 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/http",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/http\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 67 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/intro",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/intro\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 68 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/mime",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/mime\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 69 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/security",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/security\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 70 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/servers",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/servers\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 71 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/url",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/url\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 72 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/fundamentals/www",
				pattern: /^\/courses\/internet\/wwwhtml\/fundamentals\/www\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 73 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 74 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/audio",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/audio\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 75 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/forms",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/forms\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 76 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/head",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/head\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 77 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/images",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/images\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 78 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/links",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/links\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 79 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/lists",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/lists\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 80 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/organization",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/organization\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 81 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/origins",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/origins\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 82 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/structure",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/structure\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 83 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/syntax",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/syntax\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 84 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/tables",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/tables\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 85 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/text",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/text\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 86 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/time",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/time\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 87 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/video",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/video\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 88 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/html/xhtml",
				pattern: /^\/courses\/internet\/wwwhtml\/html\/xhtml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 89 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/wwwhtml/practice1",
				pattern: /^\/courses\/internet\/wwwhtml\/practice1\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 90 },
				endpoint: null
			},
			{
				id: "/(general)/courses/internet/xml",
				pattern: /^\/courses\/internet\/xml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 91 },
				endpoint: null
			},
			{
				id: "/(general)/courses/linearalgebra",
				pattern: /^\/courses\/linearalgebra\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 103 },
				endpoint: null
			},
			{
				id: "/(general)/courses/linearalgebra/bases",
				pattern: /^\/courses\/linearalgebra\/bases\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 104 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics1",
				pattern: /^\/courses\/mathematics1\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 105 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2",
				pattern: /^\/courses\/mathematics2\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 106 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/assignment1",
				pattern: /^\/courses\/mathematics2\/assignment1\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 107 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference",
				pattern: /^\/courses\/mathematics2\/inference\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 108 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/practice",
				pattern: /^\/courses\/mathematics2\/inference\/practice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 109 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/significance",
				pattern: /^\/courses\/mathematics2\/inference\/significance\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 110 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/significance/hypotheses",
				pattern: /^\/courses\/mathematics2\/inference\/significance\/hypotheses\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 111 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/significance/level",
				pattern: /^\/courses\/mathematics2\/inference\/significance\/level\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 112 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/significance/sampling",
				pattern: /^\/courses\/mathematics2\/inference\/significance\/sampling\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 113 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/significance/tests",
				pattern: /^\/courses\/mathematics2\/inference\/significance\/tests\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 114 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/inference/significance/types",
				pattern: /^\/courses\/mathematics2\/inference\/significance\/types\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 115 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 116 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/assignment",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/assignment\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 117 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/distributions",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/distributions\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 118 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/distributions/binomial",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/distributions\/binomial\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 119 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/distributions/continuous",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/distributions\/continuous\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 120 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/distributions/joint",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/distributions\/joint\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 121 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/distributions/normal",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/distributions\/normal\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 122 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/distributions/poisson",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/distributions\/poisson\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 123 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/probability",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/probability\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 124 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/probability/conditional",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/probability\/conditional\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 125 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/probability/events",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/probability\/events\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 126 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/probability/independence",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/probability\/independence\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 127 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/probabilitytheory/probability/practice",
				pattern: /^\/courses\/mathematics2\/probabilitytheory\/probability\/practice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 128 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics",
				pattern: /^\/courses\/mathematics2\/statistics\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 129 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 130 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/bivariatedata",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/bivariatedata\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 131 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/bivariatefrequency",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/bivariatefrequency\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 132 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/correlation2",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/correlation2\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 133 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/correlationtypes",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/correlationtypes\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 134 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/pearson",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/pearson\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 135 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/correlation/spearman",
				pattern: /^\/courses\/mathematics2\/statistics\/correlation\/spearman\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 136 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 137 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures/deviation",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/deviation\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 138 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures/mean",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/mean\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 139 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures/median",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/median\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 140 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/measures/mode",
				pattern: /^\/courses\/mathematics2\/statistics\/measures\/mode\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 141 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/regression",
				pattern: /^\/courses\/mathematics2\/statistics\/regression\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 142 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/regression/leastsquares",
				pattern: /^\/courses\/mathematics2\/statistics\/regression\/leastsquares\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 143 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/regression/regressioncoefficient",
				pattern: /^\/courses\/mathematics2\/statistics\/regression\/regressioncoefficient\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 144 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/statistics/regression/regressionlines",
				pattern: /^\/courses\/mathematics2\/statistics\/regression\/regressionlines\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 145 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/[assignmentID]",
				pattern: /^\/courses\/mathematics2\/([^/]+?)\/?$/,
				params: [{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 146 },
				endpoint: null
			},
			{
				id: "/(general)/courses/mathematics2/[assignmentID]/solution",
				pattern: /^\/courses\/mathematics2\/([^/]+?)\/solution\/?$/,
				params: [{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 147 },
				endpoint: null
			},
			{
				id: "/(general)/courses/qec",
				pattern: /^\/courses\/qec\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 148 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantumalgorithms",
				pattern: /^\/courses\/quantumalgorithms\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 163 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantumcommunication",
				pattern: /^\/courses\/quantumcommunication\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 164 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantumcomputers",
				pattern: /^\/courses\/quantumcomputers\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 165 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantumcryptography",
				pattern: /^\/courses\/quantumcryptography\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 166 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantuminformation1",
				pattern: /^\/courses\/quantuminformation1\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 167 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantuminformation2",
				pattern: /^\/courses\/quantuminformation2\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 168 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantummechanics",
				pattern: /^\/courses\/quantummechanics\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 169 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantumml",
				pattern: /^\/courses\/quantumml\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 170 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum",
				pattern: /^\/courses\/quantum\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 149 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/circuits",
				pattern: /^\/courses\/quantum\/circuits\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 150 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/classical",
				pattern: /^\/courses\/quantum\/classical\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 151 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/computers",
				pattern: /^\/courses\/quantum\/computers\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 152 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/correction",
				pattern: /^\/courses\/quantum\/correction\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 153 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/distance",
				pattern: /^\/courses\/quantum\/distance\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 154 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/entropy",
				pattern: /^\/courses\/quantum\/entropy\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 155 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/information",
				pattern: /^\/courses\/quantum\/information\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 156 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/introduction",
				pattern: /^\/courses\/quantum\/introduction\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 157 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/introduction/qubits",
				pattern: /^\/courses\/quantum\/introduction\/qubits\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 158 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/mechanics",
				pattern: /^\/courses\/quantum\/mechanics\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 159 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/noise",
				pattern: /^\/courses\/quantum\/noise\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 160 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/qft",
				pattern: /^\/courses\/quantum\/qft\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 161 },
				endpoint: null
			},
			{
				id: "/(general)/courses/quantum/search",
				pattern: /^\/courses\/quantum\/search\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 162 },
				endpoint: null
			},
			{
				id: "/(cv)/cv",
				pattern: /^\/cv\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril",
				pattern: /^\/mathril\/?$/,
				params: [],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 204 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/about",
				pattern: /^\/mathril\/about\/?$/,
				params: [],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 205 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/class[classn]",
				pattern: /^\/mathril\/class([^/]+?)\/?$/,
				params: [{"name":"classn","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 206 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/class[classn]/chapter[chaptern]",
				pattern: /^\/mathril\/class([^/]+?)\/chapter([^/]+?)\/?$/,
				params: [{"name":"classn","optional":false,"rest":false,"chained":false},{"name":"chaptern","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 207 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/games",
				pattern: /^\/mathril\/games\/?$/,
				params: [],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 208 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/games/addition2",
				pattern: /^\/mathril\/games\/addition2\/?$/,
				params: [],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 210 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/games/addition",
				pattern: /^\/mathril\/games\/addition\/?$/,
				params: [],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 209 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/games/appDerivative",
				pattern: /^\/mathril\/games\/appDerivative\/?$/,
				params: [],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 211 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/games/beattarget",
				pattern: /^\/mathril\/games\/beattarget\/?$/,
				params: [],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 212 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/games/clock",
				pattern: /^\/mathril\/games\/clock\/?$/,
				params: [],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 213 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/games/counting",
				pattern: /^\/mathril\/games\/counting\/?$/,
				params: [],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 214 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/games/division",
				pattern: /^\/mathril\/games\/division\/?$/,
				params: [],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 215 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/games/eucliddivisionalgorithm",
				pattern: /^\/mathril\/games\/eucliddivisionalgorithm\/?$/,
				params: [],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 216 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/games/eucliddivisionlemma",
				pattern: /^\/mathril\/games\/eucliddivisionlemma\/?$/,
				params: [],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 217 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/games/inout",
				pattern: /^\/mathril\/games\/inout\/?$/,
				params: [],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 218 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/games/integral",
				pattern: /^\/mathril\/games\/integral\/?$/,
				params: [],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 219 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/games/lineareqn",
				pattern: /^\/mathril\/games\/lineareqn\/?$/,
				params: [],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 220 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/games/lp",
				pattern: /^\/mathril\/games\/lp\/?$/,
				params: [],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 221 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/games/matchnumber",
				pattern: /^\/mathril\/games\/matchnumber\/?$/,
				params: [],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 222 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/games/multiplication",
				pattern: /^\/mathril\/games\/multiplication\/?$/,
				params: [],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 223 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/games/subtraction2",
				pattern: /^\/mathril\/games\/subtraction2\/?$/,
				params: [],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 225 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/games/subtraction",
				pattern: /^\/mathril\/games\/subtraction\/?$/,
				params: [],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 224 },
				endpoint: null
			},
			{
				id: "/(mathril)/mathril/[...catchAll]",
				pattern: /^\/mathril(?:\/(.*))?\/?$/,
				params: [{"name":"catchAll","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,7,8,], errors: [1,,,], leaf: 226 },
				endpoint: null
			},
			{
				id: "/(general)/publications",
				pattern: /^\/publications\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 171 },
				endpoint: null
			},
			{
				id: "/(general)/research",
				pattern: /^\/research\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 172 },
				endpoint: null
			},
			{
				id: "/(general)/research/crypto",
				pattern: /^\/research\/crypto\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 173 },
				endpoint: null
			},
			{
				id: "/(general)/research/crypto/fasterLattice",
				pattern: /^\/research\/crypto\/fasterLattice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 174 },
				endpoint: null
			},
			{
				id: "/(general)/research/crypto/obtuse",
				pattern: /^\/research\/crypto\/obtuse\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 175 },
				endpoint: null
			},
			{
				id: "/(general)/research/crypto/reduceLattice",
				pattern: /^\/research\/crypto\/reduceLattice\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 176 },
				endpoint: null
			},
			{
				id: "/(general)/research/crypto/selfdual",
				pattern: /^\/research\/crypto\/selfdual\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 177 },
				endpoint: null
			},
			{
				id: "/(general)/research/kernelization",
				pattern: /^\/research\/kernelization\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 178 },
				endpoint: null
			},
			{
				id: "/(general)/research/kernelization/cds",
				pattern: /^\/research\/kernelization\/cds\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 179 },
				endpoint: null
			},
			{
				id: "/(general)/research/kernelization/coc",
				pattern: /^\/research\/kernelization\/coc\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 180 },
				endpoint: null
			},
			{
				id: "/(general)/research/parameterized",
				pattern: /^\/research\/parameterized\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 181 },
				endpoint: null
			},
			{
				id: "/(general)/research/parameterized/bitournament",
				pattern: /^\/research\/parameterized\/bitournament\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 182 },
				endpoint: null
			},
			{
				id: "/(general)/research/parameterized/club",
				pattern: /^\/research\/parameterized\/club\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 183 },
				endpoint: null
			},
			{
				id: "/(general)/research/parameterized/induced",
				pattern: /^\/research\/parameterized\/induced\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 184 },
				endpoint: null
			},
			{
				id: "/(general)/research/parameterized/tournament",
				pattern: /^\/research\/parameterized\/tournament\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 185 },
				endpoint: null
			},
			{
				id: "/(general)/research/qit",
				pattern: /^\/research\/qit\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 186 },
				endpoint: null
			},
			{
				id: "/(general)/research/qit/local",
				pattern: /^\/research\/qit\/local\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 187 },
				endpoint: null
			},
			{
				id: "/(general)/research/qit/schmidtProperties",
				pattern: /^\/research\/qit\/schmidtProperties\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 189 },
				endpoint: null
			},
			{
				id: "/(general)/research/qit/schmidt",
				pattern: /^\/research\/qit\/schmidt\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 188 },
				endpoint: null
			},
			{
				id: "/(general)/students",
				pattern: /^\/students\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 190 },
				endpoint: null
			},
			{
				id: "/(general)/talks",
				pattern: /^\/talks\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 191 },
				endpoint: null
			},
			{
				id: "/(general)/talks/quantumstatus",
				pattern: /^\/talks\/quantumstatus\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 192 },
				endpoint: null
			},
			{
				id: "/(general)/talks/quantumteleportation",
				pattern: /^\/talks\/quantumteleportation\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 193 },
				endpoint: null
			},
			{
				id: "/(general)/talks/sorting",
				pattern: /^\/talks\/sorting\/?$/,
				params: [],
				page: { layouts: [0,4,6,], errors: [1,,,], leaf: 194 },
				endpoint: null
			},
			{
				id: "/(about)/teaching",
				pattern: /^\/teaching\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)",
				pattern: /^\/vectorial\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 227 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/about",
				pattern: /^\/vectorial\/about\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 228 },
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
				endpoint: __memo(() => import('./chunks/_server-DWgfpuKF.js'))
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
				page: { layouts: [0,9,10,12,], errors: [1,,,,], leaf: 259 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/auth",
				pattern: /^\/vectorial\/auth\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 229 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/comment/[commentID]",
				pattern: /^\/vectorial\/comment\/([^/]+?)\/?$/,
				params: [{"name":"commentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 230 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/compose",
				pattern: /^\/vectorial\/compose\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 231 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/download",
				pattern: /^\/vectorial\/download\/?$/,
				params: [],
				page: { layouts: [0,9,10,13,], errors: [1,,,,], leaf: 260 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/drawings",
				pattern: /^\/vectorial\/drawings\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 232 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn",
				pattern: /^\/vectorial\/learn\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 233 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn/advanced",
				pattern: /^\/vectorial\/learn\/advanced\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 234 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn/filters",
				pattern: /^\/vectorial\/learn\/filters\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 235 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn/latex",
				pattern: /^\/vectorial\/learn\/latex\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 236 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn/markers",
				pattern: /^\/vectorial\/learn\/markers\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 237 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn/masks",
				pattern: /^\/vectorial\/learn\/masks\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 238 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn/paths",
				pattern: /^\/vectorial\/learn\/paths\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 239 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn/shapes",
				pattern: /^\/vectorial\/learn\/shapes\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 240 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn/styles",
				pattern: /^\/vectorial\/learn\/styles\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 241 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn/text",
				pattern: /^\/vectorial\/learn\/text\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 242 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/learn/transform",
				pattern: /^\/vectorial\/learn\/transform\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 243 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/legal/privacy",
				pattern: /^\/vectorial\/legal\/privacy\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 244 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/legal/refund",
				pattern: /^\/vectorial\/legal\/refund\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 245 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/legal/terms",
				pattern: /^\/vectorial\/legal\/terms\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 246 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/login",
				pattern: /^\/vectorial\/login\/?$/,
				params: [],
				page: { layouts: [0,9,10,], errors: [1,,,], leaf: 261 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/post/[postID]",
				pattern: /^\/vectorial\/post\/([^/]+?)\/?$/,
				params: [{"name":"postID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 247 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/search",
				pattern: /^\/vectorial\/search\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 248 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/settings",
				pattern: /^\/vectorial\/settings\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 249 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/settings/profile",
				pattern: /^\/vectorial\/settings\/profile\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 250 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/shipping",
				pattern: /^\/vectorial\/shipping\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 251 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/subscription",
				pattern: /^\/vectorial\/subscription\/?$/,
				params: [],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 252 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/[publicID]",
				pattern: /^\/vectorial\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 254 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/[publicID]/drawings",
				pattern: /^\/vectorial\/([^/]+?)\/drawings\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 255 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/[publicID]/edit",
				pattern: /^\/vectorial\/([^/]+?)\/edit\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 256 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/[publicID]/edit/comment",
				pattern: /^\/vectorial\/([^/]+?)\/edit\/comment\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 257 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/[publicID]/invoices",
				pattern: /^\/vectorial\/([^/]+?)\/invoices\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 258 },
				endpoint: null
			},
			{
				id: "/(vectorial)/vectorial/(nonapp)/[...catchAll]",
				pattern: /^\/vectorial(?:\/(.*))?\/?$/,
				params: [{"name":"catchAll","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,9,10,11,], errors: [1,,,,], leaf: 253 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 196 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/assignments",
				pattern: /^\/([^/]+?)\/assignments\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 197 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/assignments/new",
				pattern: /^\/([^/]+?)\/assignments\/new\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 198 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/assignments/[assignmentID]",
				pattern: /^\/([^/]+?)\/assignments\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"assignmentID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 199 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/questions",
				pattern: /^\/([^/]+?)\/questions\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 200 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/questions/new",
				pattern: /^\/([^/]+?)\/questions\/new\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 201 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/questions/[questionID]",
				pattern: /^\/([^/]+?)\/questions\/([^/]+?)\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false},{"name":"questionID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 202 },
				endpoint: null
			},
			{
				id: "/(general)/[publicID]/submissions",
				pattern: /^\/([^/]+?)\/submissions\/?$/,
				params: [{"name":"publicID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 203 },
				endpoint: null
			},
			{
				id: "/(general)/[...catchAll]",
				pattern: /^(?:\/(.*))?\/?$/,
				params: [{"name":"catchAll","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 195 },
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
