import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-84a939f5.js";
import { P as Papers } from "../../../chunks/Papers-d4b15491.js";
var index_cv_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => 'article.svelte-yrnl8c.svelte-yrnl8c{display:grid;grid-template-columns:0.25fr 0.75fr;grid-template-areas:"header header"\r\n        "aside main"\r\n        "papers papers";padding:1em;max-width:1200px;margin:auto}header.svelte-yrnl8c.svelte-yrnl8c{grid-area:header;display:grid;grid-template-columns:200px 0.7fr;grid-template-areas:"profile details";align-items:center;background:linear-gradient(45deg, white, rgba(41, 170, 230, 0.2), rgb(41, 170, 230));height:200px}aside.svelte-yrnl8c.svelte-yrnl8c{grid-area:aside;display:flex;gap:1em;flex-direction:column;margin-top:1em}.main.svelte-yrnl8c.svelte-yrnl8c{grid-area:main;padding:1em;padding-top:0;display:grid;grid-template-columns:1fr 1fr}.papers.svelte-yrnl8c.svelte-yrnl8c{grid-area:papers}.profile.svelte-yrnl8c.svelte-yrnl8c{grid-area:profile;width:200px;height:200px;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center}.details.svelte-yrnl8c.svelte-yrnl8c{grid-area:details;display:flex;flex-direction:column;padding-left:0.5em}.name.svelte-yrnl8c.svelte-yrnl8c{font-size:3em;color:rgb(0, 147, 220);text-shadow:1px 1px 2px #888;font-weight:300}.intro.svelte-yrnl8c.svelte-yrnl8c{font-weight:300;color:black}h2.svelte-yrnl8c.svelte-yrnl8c,.symbol.svelte-yrnl8c.svelte-yrnl8c{color:rgb(0, 147, 220)}.about.svelte-yrnl8c.svelte-yrnl8c,.contact.svelte-yrnl8c.svelte-yrnl8c{background-color:rgba(136, 136, 136, 0.212);padding:1em}.dates.svelte-yrnl8c.svelte-yrnl8c{font-weight:500}.degree.svelte-yrnl8c.svelte-yrnl8c,.awardname.svelte-yrnl8c.svelte-yrnl8c{font-weight:500}.institute.svelte-yrnl8c.svelte-yrnl8c{font-weight:400;font-size:0.9em}.description.svelte-yrnl8c.svelte-yrnl8c,.awarddescription.svelte-yrnl8c.svelte-yrnl8c{font-weight:300;font-size:0.8em}td.svelte-yrnl8c.svelte-yrnl8c{padding-right:2em;padding-bottom:1em}.symbol.svelte-yrnl8c.svelte-yrnl8c{padding-right:0.5em}.contactable.svelte-yrnl8c td.svelte-yrnl8c{padding-bottom:0;padding-right:0;font-size:0.9em;letter-spacing:0.02em}')();
const css = {
  code: 'article.svelte-yrnl8c.svelte-yrnl8c{display:grid;grid-template-columns:0.25fr 0.75fr;grid-template-areas:"header header"\r\n        "aside main"\r\n        "papers papers";padding:1em;max-width:1200px;margin:auto}header.svelte-yrnl8c.svelte-yrnl8c{grid-area:header;display:grid;grid-template-columns:200px 0.7fr;grid-template-areas:"profile details";align-items:center;background:linear-gradient(45deg, white, rgba(41, 170, 230, 0.2), rgb(41, 170, 230));height:200px}aside.svelte-yrnl8c.svelte-yrnl8c{grid-area:aside;display:flex;gap:1em;flex-direction:column;margin-top:1em}.main.svelte-yrnl8c.svelte-yrnl8c{grid-area:main;padding:1em;padding-top:0;display:grid;grid-template-columns:1fr 1fr}.papers.svelte-yrnl8c.svelte-yrnl8c{grid-area:papers}.profile.svelte-yrnl8c.svelte-yrnl8c{grid-area:profile;width:200px;height:200px;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center}.details.svelte-yrnl8c.svelte-yrnl8c{grid-area:details;display:flex;flex-direction:column;padding-left:0.5em}.name.svelte-yrnl8c.svelte-yrnl8c{font-size:3em;color:rgb(0, 147, 220);text-shadow:1px 1px 2px #888;font-weight:300}.intro.svelte-yrnl8c.svelte-yrnl8c{font-weight:300;color:black}h2.svelte-yrnl8c.svelte-yrnl8c,.symbol.svelte-yrnl8c.svelte-yrnl8c{color:rgb(0, 147, 220)}.about.svelte-yrnl8c.svelte-yrnl8c,.contact.svelte-yrnl8c.svelte-yrnl8c{background-color:rgba(136, 136, 136, 0.212);padding:1em}.dates.svelte-yrnl8c.svelte-yrnl8c{font-weight:500}.degree.svelte-yrnl8c.svelte-yrnl8c,.awardname.svelte-yrnl8c.svelte-yrnl8c{font-weight:500}.institute.svelte-yrnl8c.svelte-yrnl8c{font-weight:400;font-size:0.9em}.description.svelte-yrnl8c.svelte-yrnl8c,.awarddescription.svelte-yrnl8c.svelte-yrnl8c{font-weight:300;font-size:0.8em}td.svelte-yrnl8c.svelte-yrnl8c{padding-right:2em;padding-bottom:1em}.symbol.svelte-yrnl8c.svelte-yrnl8c{padding-right:0.5em}.contactable.svelte-yrnl8c td.svelte-yrnl8c{padding-bottom:0;padding-right:0;font-size:0.9em;letter-spacing:0.02em}',
  map: null
};
const Index_cv = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<article class="${"svelte-yrnl8c"}"><header class="${"svelte-yrnl8c"}"><div class="${"profile svelte-yrnl8c"}"><img width="${"100%"}" src="${"/photo_cv.jpg"}" alt="${"mithileshkumar"}"></div>
        <div class="${"details svelte-yrnl8c"}"><div class="${"name svelte-yrnl8c"}">Dr Mithilesh Kumar</div>
            <div class="${"intro svelte-yrnl8c"}">Ex-IITian, Gold Medalist, Scientist, Teacher, Web developer</div></div></header>
    <aside class="${"svelte-yrnl8c"}"><section class="${"about svelte-yrnl8c"}"><h2 class="${"svelte-yrnl8c"}">Profile</h2>
            <p style="${"font-weight: 400;line-height: 1.45;font-size: 0.9em;"}">I&#39;m passionate about teaching, but I&#39;m full-time learner. I want to contribute to the society by teaching young ones what I have learnt so far and learn from them in return. I taught quantum computing to my research group at Simula-UiB, Bergen, Norway.</p></section>
        <div class="${"contact svelte-yrnl8c"}"><h2 class="${"svelte-yrnl8c"}">Contact</h2>
            <table class="${"contactable svelte-yrnl8c"}" style="${"font-size: 0.9em"}"><tr><td class="${"svelte-yrnl8c"}"><span class="${"material-icons"}">home</span></td>
                    <td class="${"svelte-yrnl8c"}">Bokaro</td></tr>
                <tr><td style="${"padding-right:0"}" class="${"svelte-yrnl8c"}"><span class="${"material-icons"}">phone</span></td>
                    <td class="${"svelte-yrnl8c"}">8797081308</td></tr>
                <tr><td style="${"padding-right:0"}" class="${"svelte-yrnl8c"}"><span class="${"material-icons"}">email</span></td>
                    <td class="${"svelte-yrnl8c"}">drmithileshkumar@outlook.com</td></tr>
                <tr><td style="${"padding-right:0"}" class="${"svelte-yrnl8c"}"><span class="${"material-icons"}">link</span></td>
                    <td class="${"svelte-yrnl8c"}">drmithileshkumar.com</td></tr></table></div></aside>
    <div class="${"main svelte-yrnl8c"}"><section class="${"education"}"><h2 class="${"svelte-yrnl8c"}">Education</h2>
            <table><tr><td class="${"dates svelte-yrnl8c"}">2020 - Present
                    </td>
                    <td class="${"svelte-yrnl8c"}"><div class="${"edu"}"><div class="${"degree svelte-yrnl8c"}">Web development</div>
                            <div class="${"institute svelte-yrnl8c"}">Self-taught</div>
                            <div class="${"description svelte-yrnl8c"}">nodejs, mongodb, svelte, sveltekit, html, css, javascript</div></div></td></tr>
                <tr><td class="${"dates svelte-yrnl8c"}">2017 - 2020
                    </td>
                    <td class="${"svelte-yrnl8c"}"><div class="${"edu"}"><div class="${"degree svelte-yrnl8c"}">Post Doc Research</div>
                            <div class="${"institute svelte-yrnl8c"}">Simula-UiB, Bergen, Norway</div>
                            <div class="${"description svelte-yrnl8c"}">Quantum-safe cryptography</div></div></td></tr>
                <tr><td class="${"dates svelte-yrnl8c"}">2014 - 2017
                    </td>
                    <td class="${"svelte-yrnl8c"}"><div class="${"edu"}"><div class="${"degree svelte-yrnl8c"}">PhD</div>
                            <div class="${"institute svelte-yrnl8c"}">University of Bergen, Norway</div>
                            <div class="${"description svelte-yrnl8c"}">Parameterized algorithms</div></div></td></tr>
                <tr><td class="${"dates svelte-yrnl8c"}">2011 - 2013
                    </td>
                    <td class="${"svelte-yrnl8c"}"><div class="${"edu"}"><div class="${"degree svelte-yrnl8c"}">Masters in Computer Science</div>
                            <div class="${"institute svelte-yrnl8c"}">Chennai Mathematical Institute, Chennai</div>
                            <div class="${"description svelte-yrnl8c"}">Theoretical Computer Science</div></div></td></tr>
                <tr><td class="${"dates svelte-yrnl8c"}">2004 - 2010
                    </td>
                    <td class="${"svelte-yrnl8c"}"><div class="${"edu"}"><div class="${"degree svelte-yrnl8c"}">Masters in Physics</div>
                            <div class="${"institute svelte-yrnl8c"}">IIT Kanpur, Kanpur</div>
                            <div class="${"description svelte-yrnl8c"}">MSc(I) Physics</div></div></td></tr></table></section>
        <section class="${"achievements"}"><h2 class="${"svelte-yrnl8c"}">Achievements</h2>
            <table><tr><td class="${"symbol svelte-yrnl8c"}" style="${"color: goldenrod"}"><span class="${"material-icons"}">military_tech</span></td>
                    <td class="${"svelte-yrnl8c"}"><div class="${"award"}"><div class="${"awardname svelte-yrnl8c"}">Gold Medalist</div>
                            <div class="${"awarddescription svelte-yrnl8c"}">Academic excellence in masters degree in computer science, Chennai Mathematical Institute, Chennai</div></div></td></tr>
                <tr><td class="${"symbol svelte-yrnl8c"}"><span class="${"material-icons"}">military_tech</span></td>
                    <td class="${"svelte-yrnl8c"}"><div class="${"award"}"><div class="${"awardname svelte-yrnl8c"}">Merit-cum-means Scholarship</div>
                            <div class="${"awarddescription svelte-yrnl8c"}">Academic performance in IIT Kanpur</div></div></td></tr>
                <tr><td class="${"symbol svelte-yrnl8c"}" style="${"color: silver"}"><span class="${"material-icons"}">military_tech</span></td>
                    <td class="${"svelte-yrnl8c"}"><div class="${"award"}"><div class="${"awardname svelte-yrnl8c"}">Finalist in Carrom Competition</div>
                            <div class="${"awarddescription svelte-yrnl8c"}">Every year between 2004-2009 in Sports Event, IIT Kanpur</div></div></td></tr>
                <tr><td class="${"symbol svelte-yrnl8c"}"><span class="${"material-icons"}">military_tech</span></td>
                    <td class="${"svelte-yrnl8c"}"><div class="${"award"}"><div class="${"awardname svelte-yrnl8c"}">AIR 971</div>
                            <div class="${"awarddescription svelte-yrnl8c"}">IIT JEE Entrance Exam</div></div></td></tr>
                <tr><td class="${"symbol svelte-yrnl8c"}" style="${"color: silver"}"><span class="${"material-icons"}">military_tech</span></td>
                    <td class="${"svelte-yrnl8c"}"><div class="${"award"}"><div class="${"awardname svelte-yrnl8c"}">2nd Position Board X</div>
                            <div class="${"awarddescription svelte-yrnl8c"}">Class X result 94% (ranked 2nd in all Steel Plant Schools, Bokaro</div></div></td></tr>
                <tr><td class="${"symbol svelte-yrnl8c"}" style="${"color: goldenrod"}"><span class="${"material-icons"}">military_tech</span></td>
                    <td class="${"svelte-yrnl8c"}"><div class="${"award"}"><div class="${"awardname svelte-yrnl8c"}">Gold Medalist</div>
                            <div class="${"awarddescription svelte-yrnl8c"}">1st position in Class IX-X, BISSC 8B, Bokaro</div></div></td></tr>
                <tr><td class="${"symbol svelte-yrnl8c"}" style="${"color: goldenrod"}"><span class="${"material-icons"}">military_tech</span></td>
                    <td class="${"svelte-yrnl8c"}"><div class="${"award"}"><div class="${"awardname svelte-yrnl8c"}">Silver Medalist</div>
                            <div class="${"awarddescription svelte-yrnl8c"}">1st position in Class VII-VIII, BISSC 8B, Bokaro</div></div></td></tr>
                <tr><td class="${"symbol svelte-yrnl8c"}" style="${"color: goldenrod"}"><span class="${"material-icons"}">military_tech</span></td>
                    <td class="${"svelte-yrnl8c"}"><div class="${"award"}"><div class="${"awardname svelte-yrnl8c"}">1st Rank</div>
                            <div class="${"awarddescription svelte-yrnl8c"}">Intercity English Essay Competition, Bokaro</div></div></td></tr></table></section></div>
    <section class="${"papers svelte-yrnl8c"}"><h2 class="${"svelte-yrnl8c"}">Publications</h2>
        ${validate_component(Papers, "Papers").$$render($$result, {}, {}, {})}</section></article>`;
});
export { Index_cv as default };
