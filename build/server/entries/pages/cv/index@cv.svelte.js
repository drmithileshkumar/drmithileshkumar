import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-84a939f5.js";
import { P as Papers } from "../../../chunks/Papers-d4b15491.js";
var index_cv_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => 'article.svelte-1jtxlyv.svelte-1jtxlyv{display:grid;grid-template-columns:0.25fr 0.75fr;grid-template-areas:"header header"\r\n        "aside main"\r\n        "papers papers";padding:1em;width:1200px;margin:auto}header.svelte-1jtxlyv.svelte-1jtxlyv{grid-area:header;display:grid;grid-template-columns:200px 0.7fr;grid-template-areas:"profile details";align-items:center;background:linear-gradient(45deg, white, rgba(41, 170, 230, 0.2), rgb(41, 170, 230));height:200px}aside.svelte-1jtxlyv.svelte-1jtxlyv{grid-area:aside;display:flex;gap:1em;flex-direction:column;margin-top:1em}.main.svelte-1jtxlyv.svelte-1jtxlyv{grid-area:main;padding:1em;padding-top:0;display:grid;grid-template-columns:1fr 1fr}.papers.svelte-1jtxlyv.svelte-1jtxlyv{grid-area:papers}.profile.svelte-1jtxlyv.svelte-1jtxlyv{grid-area:profile;width:200px;height:200px;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center}.details.svelte-1jtxlyv.svelte-1jtxlyv{grid-area:details;display:flex;flex-direction:column;padding-left:0.5em}.name.svelte-1jtxlyv.svelte-1jtxlyv{font-size:3em;color:rgb(0, 147, 220);text-shadow:1px 1px 2px #888;font-weight:300}.intro.svelte-1jtxlyv.svelte-1jtxlyv{font-weight:300;color:black}h2.svelte-1jtxlyv.svelte-1jtxlyv,.symbol.svelte-1jtxlyv.svelte-1jtxlyv{color:rgb(0, 147, 220)}.about.svelte-1jtxlyv.svelte-1jtxlyv,.contact.svelte-1jtxlyv.svelte-1jtxlyv{background-color:rgba(136, 136, 136, 0.212);padding:1em}.dates.svelte-1jtxlyv.svelte-1jtxlyv{font-weight:500}.degree.svelte-1jtxlyv.svelte-1jtxlyv,.awardname.svelte-1jtxlyv.svelte-1jtxlyv{font-weight:500}.institute.svelte-1jtxlyv.svelte-1jtxlyv{font-weight:400;font-size:0.9em}.description.svelte-1jtxlyv.svelte-1jtxlyv,.awarddescription.svelte-1jtxlyv.svelte-1jtxlyv{font-weight:300;font-size:0.8em}td.svelte-1jtxlyv.svelte-1jtxlyv{padding-right:2em;padding-bottom:1em}.symbol.svelte-1jtxlyv.svelte-1jtxlyv{padding-right:0.5em}.contactable.svelte-1jtxlyv td.svelte-1jtxlyv{padding-bottom:0;padding-right:0;font-size:0.9em;letter-spacing:0.02em}')();
const css = {
  code: 'article.svelte-1jtxlyv.svelte-1jtxlyv{display:grid;grid-template-columns:0.25fr 0.75fr;grid-template-areas:"header header"\r\n        "aside main"\r\n        "papers papers";padding:1em;width:1200px;margin:auto}header.svelte-1jtxlyv.svelte-1jtxlyv{grid-area:header;display:grid;grid-template-columns:200px 0.7fr;grid-template-areas:"profile details";align-items:center;background:linear-gradient(45deg, white, rgba(41, 170, 230, 0.2), rgb(41, 170, 230));height:200px}aside.svelte-1jtxlyv.svelte-1jtxlyv{grid-area:aside;display:flex;gap:1em;flex-direction:column;margin-top:1em}.main.svelte-1jtxlyv.svelte-1jtxlyv{grid-area:main;padding:1em;padding-top:0;display:grid;grid-template-columns:1fr 1fr}.papers.svelte-1jtxlyv.svelte-1jtxlyv{grid-area:papers}.profile.svelte-1jtxlyv.svelte-1jtxlyv{grid-area:profile;width:200px;height:200px;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center}.details.svelte-1jtxlyv.svelte-1jtxlyv{grid-area:details;display:flex;flex-direction:column;padding-left:0.5em}.name.svelte-1jtxlyv.svelte-1jtxlyv{font-size:3em;color:rgb(0, 147, 220);text-shadow:1px 1px 2px #888;font-weight:300}.intro.svelte-1jtxlyv.svelte-1jtxlyv{font-weight:300;color:black}h2.svelte-1jtxlyv.svelte-1jtxlyv,.symbol.svelte-1jtxlyv.svelte-1jtxlyv{color:rgb(0, 147, 220)}.about.svelte-1jtxlyv.svelte-1jtxlyv,.contact.svelte-1jtxlyv.svelte-1jtxlyv{background-color:rgba(136, 136, 136, 0.212);padding:1em}.dates.svelte-1jtxlyv.svelte-1jtxlyv{font-weight:500}.degree.svelte-1jtxlyv.svelte-1jtxlyv,.awardname.svelte-1jtxlyv.svelte-1jtxlyv{font-weight:500}.institute.svelte-1jtxlyv.svelte-1jtxlyv{font-weight:400;font-size:0.9em}.description.svelte-1jtxlyv.svelte-1jtxlyv,.awarddescription.svelte-1jtxlyv.svelte-1jtxlyv{font-weight:300;font-size:0.8em}td.svelte-1jtxlyv.svelte-1jtxlyv{padding-right:2em;padding-bottom:1em}.symbol.svelte-1jtxlyv.svelte-1jtxlyv{padding-right:0.5em}.contactable.svelte-1jtxlyv td.svelte-1jtxlyv{padding-bottom:0;padding-right:0;font-size:0.9em;letter-spacing:0.02em}',
  map: null
};
const Index_cv = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<article class="${"svelte-1jtxlyv"}"><header class="${"svelte-1jtxlyv"}"><div class="${"profile svelte-1jtxlyv"}"><img width="${"100%"}" src="${"/photo_cv.jpg"}" alt="${"mithileshkumar"}"></div>
        <div class="${"details svelte-1jtxlyv"}"><div class="${"name svelte-1jtxlyv"}">Dr Mithilesh Kumar</div>
            <div class="${"intro svelte-1jtxlyv"}">Ex-IITian, Gold Medalist, Scientist, Teacher, Web developer</div></div></header>
    <aside class="${"svelte-1jtxlyv"}"><section class="${"about svelte-1jtxlyv"}"><h2 class="${"svelte-1jtxlyv"}">Profile</h2>
            <p style="${"font-weight: 400;line-height: 1.45;font-size: 0.9em;"}">I&#39;m passionate about teaching, but I&#39;m full-time learner. I want to contribute to the society by teaching young ones what I have learnt so far and learn from them in return. I taught quantum computing to my research group at Simula-UiB, Bergen, Norway.</p></section>
        <div class="${"contact svelte-1jtxlyv"}"><h2 class="${"svelte-1jtxlyv"}">Contact</h2>
            <table class="${"contactable svelte-1jtxlyv"}" style="${"font-size: 0.9em"}"><tr><td class="${"svelte-1jtxlyv"}"><span class="${"material-icons"}">home</span></td>
                    <td class="${"svelte-1jtxlyv"}">Chandigarh</td></tr>
                <tr><td style="${"padding-right:0"}" class="${"svelte-1jtxlyv"}"><span class="${"material-icons"}">phone</span></td>
                    <td class="${"svelte-1jtxlyv"}">8797081308</td></tr>
                <tr><td style="${"padding-right:0"}" class="${"svelte-1jtxlyv"}"><span class="${"material-icons"}">email</span></td>
                    <td class="${"svelte-1jtxlyv"}">drmithileshkumar@outlook.com</td></tr>
                <tr><td style="${"padding-right:0"}" class="${"svelte-1jtxlyv"}"><span class="${"material-icons"}">link</span></td>
                    <td class="${"svelte-1jtxlyv"}">www.drmithileshkumar.com</td></tr></table></div></aside>
    <div class="${"main svelte-1jtxlyv"}"><section class="${"education"}"><h2 class="${"svelte-1jtxlyv"}">Education</h2>
            <table><tr><td class="${"dates svelte-1jtxlyv"}">2020 - Present
                    </td>
                    <td class="${"svelte-1jtxlyv"}"><div class="${"edu"}"><div class="${"degree svelte-1jtxlyv"}">Web development</div>
                            <div class="${"institute svelte-1jtxlyv"}">Self-taught</div>
                            <div class="${"description svelte-1jtxlyv"}">nodejs, mongodb, svelte, sveltekit, html, css, javascript</div></div></td></tr>
                <tr><td class="${"dates svelte-1jtxlyv"}">2017 - 2020
                    </td>
                    <td class="${"svelte-1jtxlyv"}"><div class="${"edu"}"><div class="${"degree svelte-1jtxlyv"}">Post Doc Research</div>
                            <div class="${"institute svelte-1jtxlyv"}">Simula-UiB, Bergen, Norway</div>
                            <div class="${"description svelte-1jtxlyv"}">Quantum-safe cryptography</div></div></td></tr>
                <tr><td class="${"dates svelte-1jtxlyv"}">2014 - 2017
                    </td>
                    <td class="${"svelte-1jtxlyv"}"><div class="${"edu"}"><div class="${"degree svelte-1jtxlyv"}">PhD</div>
                            <div class="${"institute svelte-1jtxlyv"}">University of Bergen, Norway</div>
                            <div class="${"description svelte-1jtxlyv"}">Parameterized algorithms</div></div></td></tr>
                <tr><td class="${"dates svelte-1jtxlyv"}">2011 - 2013
                    </td>
                    <td class="${"svelte-1jtxlyv"}"><div class="${"edu"}"><div class="${"degree svelte-1jtxlyv"}">Masters in Computer Science</div>
                            <div class="${"institute svelte-1jtxlyv"}">Chennai Mathematical Institute, Chennai</div>
                            <div class="${"description svelte-1jtxlyv"}">Theoretical Computer Science</div></div></td></tr>
                <tr><td class="${"dates svelte-1jtxlyv"}">2004 - 2010
                    </td>
                    <td class="${"svelte-1jtxlyv"}"><div class="${"edu"}"><div class="${"degree svelte-1jtxlyv"}">Masters in Physics</div>
                            <div class="${"institute svelte-1jtxlyv"}">IIT Kanpur, Kanpur</div>
                            <div class="${"description svelte-1jtxlyv"}">MSc(I) Physics</div></div></td></tr></table></section>
        <section class="${"achievements"}"><h2 class="${"svelte-1jtxlyv"}">Achievements</h2>
            <table><tr><td class="${"symbol svelte-1jtxlyv"}" style="${"color: goldenrod"}"><span class="${"material-icons"}">military_tech</span></td>
                    <td class="${"svelte-1jtxlyv"}"><div class="${"award"}"><div class="${"awardname svelte-1jtxlyv"}">Gold Medalist</div>
                            <div class="${"awarddescription svelte-1jtxlyv"}">Academic excellence in masters degree in computer science, Chennai Mathematical Institute, Chennai</div></div></td></tr>
                <tr><td class="${"symbol svelte-1jtxlyv"}"><span class="${"material-icons"}">military_tech</span></td>
                    <td class="${"svelte-1jtxlyv"}"><div class="${"award"}"><div class="${"awardname svelte-1jtxlyv"}">Merit-cum-means Scholarship</div>
                            <div class="${"awarddescription svelte-1jtxlyv"}">Academic performance in IIT Kanpur</div></div></td></tr>
                <tr><td class="${"symbol svelte-1jtxlyv"}" style="${"color: silver"}"><span class="${"material-icons"}">military_tech</span></td>
                    <td class="${"svelte-1jtxlyv"}"><div class="${"award"}"><div class="${"awardname svelte-1jtxlyv"}">Finalist in Carrom Competition</div>
                            <div class="${"awarddescription svelte-1jtxlyv"}">Every year between 2004-2009 in Sports Event, IIT Kanpur</div></div></td></tr>
                <tr><td class="${"symbol svelte-1jtxlyv"}"><span class="${"material-icons"}">military_tech</span></td>
                    <td class="${"svelte-1jtxlyv"}"><div class="${"award"}"><div class="${"awardname svelte-1jtxlyv"}">AIR 971</div>
                            <div class="${"awarddescription svelte-1jtxlyv"}">IIT JEE Entrance Exam</div></div></td></tr>
                <tr><td class="${"symbol svelte-1jtxlyv"}" style="${"color: silver"}"><span class="${"material-icons"}">military_tech</span></td>
                    <td class="${"svelte-1jtxlyv"}"><div class="${"award"}"><div class="${"awardname svelte-1jtxlyv"}">2nd Position Board X</div>
                            <div class="${"awarddescription svelte-1jtxlyv"}">Class X result 94% (ranked 2nd in all Steel Plant Schools, Bokaro</div></div></td></tr>
                <tr><td class="${"symbol svelte-1jtxlyv"}" style="${"color: goldenrod"}"><span class="${"material-icons"}">military_tech</span></td>
                    <td class="${"svelte-1jtxlyv"}"><div class="${"award"}"><div class="${"awardname svelte-1jtxlyv"}">Gold Medalist</div>
                            <div class="${"awarddescription svelte-1jtxlyv"}">1st position in Class IX-X, BISSC 8B, Bokaro</div></div></td></tr>
                <tr><td class="${"symbol svelte-1jtxlyv"}" style="${"color: goldenrod"}"><span class="${"material-icons"}">military_tech</span></td>
                    <td class="${"svelte-1jtxlyv"}"><div class="${"award"}"><div class="${"awardname svelte-1jtxlyv"}">Silver Medalist</div>
                            <div class="${"awarddescription svelte-1jtxlyv"}">1st position in Class VII-VIII, BISSC 8B, Bokaro</div></div></td></tr>
                <tr><td class="${"symbol svelte-1jtxlyv"}" style="${"color: goldenrod"}"><span class="${"material-icons"}">military_tech</span></td>
                    <td class="${"svelte-1jtxlyv"}"><div class="${"award"}"><div class="${"awardname svelte-1jtxlyv"}">1st Rank</div>
                            <div class="${"awarddescription svelte-1jtxlyv"}">Intercity English Essay Competition, Bokaro</div></div></td></tr></table></section></div>
    <section class="${"papers svelte-1jtxlyv"}"><h2 class="${"svelte-1jtxlyv"}">Publications</h2>
        ${validate_component(Papers, "Papers").$$render($$result, {}, {}, {})}</section></article>`;
});
export { Index_cv as default };
