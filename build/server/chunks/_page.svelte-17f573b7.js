import { c as create_ssr_component, v as validate_component } from './index3-a65daa79.js';
import { P as Papers } from './Papers-d5842b05.js';

const css = {
  code: 'article.svelte-lpuv3.svelte-lpuv3{display:grid;grid-template-columns:0.25fr 0.75fr;grid-template-areas:"header header"\n            "aside main"\n            "papers papers";padding:1em;width:1200px;margin:auto;background:white}header.svelte-lpuv3.svelte-lpuv3{grid-area:header;display:grid;grid-template-columns:200px 0.7fr;grid-template-areas:"profile details";align-items:center;background:linear-gradient(45deg, white, rgba(41, 170, 230, 0.2), rgb(41, 170, 230));height:200px}aside.svelte-lpuv3.svelte-lpuv3{grid-area:aside;display:flex;gap:1em;flex-direction:column;margin-top:1em}.main.svelte-lpuv3.svelte-lpuv3{grid-area:main;padding:1em;padding-top:0;display:grid;grid-template-columns:1fr 1fr}.papers.svelte-lpuv3.svelte-lpuv3{grid-area:papers}.profile.svelte-lpuv3.svelte-lpuv3{grid-area:profile;width:200px;height:200px;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center}.details.svelte-lpuv3.svelte-lpuv3{grid-area:details;display:flex;flex-direction:column;padding-left:0.5em}.name.svelte-lpuv3.svelte-lpuv3{font-size:3em;color:rgb(0, 147, 220);text-shadow:1px 1px 2px #888;font-weight:300}.intro.svelte-lpuv3.svelte-lpuv3{font-weight:300;color:black}h2.svelte-lpuv3.svelte-lpuv3,.symbol.svelte-lpuv3.svelte-lpuv3{color:rgb(0, 147, 220)}.about.svelte-lpuv3.svelte-lpuv3,.contact.svelte-lpuv3.svelte-lpuv3{background-color:rgba(136, 136, 136, 0.212);padding:1em}.dates.svelte-lpuv3.svelte-lpuv3{font-weight:500}.degree.svelte-lpuv3.svelte-lpuv3,.awardname.svelte-lpuv3.svelte-lpuv3{font-weight:500}.institute.svelte-lpuv3.svelte-lpuv3{font-weight:400;font-size:0.9em}.description.svelte-lpuv3.svelte-lpuv3,.awarddescription.svelte-lpuv3.svelte-lpuv3{font-weight:300;font-size:0.8em}td.svelte-lpuv3.svelte-lpuv3{padding-right:2em;padding-bottom:1em}.symbol.svelte-lpuv3.svelte-lpuv3{padding-right:0.5em}.contactable.svelte-lpuv3 td.svelte-lpuv3{padding-bottom:0;padding-right:0;font-size:0.9em;letter-spacing:0.02em}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<article class="${"svelte-lpuv3"}"><header class="${"svelte-lpuv3"}"><div class="${"profile svelte-lpuv3"}"><img width="${"100%"}" src="${"/profilephoto.jpeg"}" alt="${"mithileshkumar"}"></div>
            <div class="${"details svelte-lpuv3"}"><div class="${"name svelte-lpuv3"}">Dr Mithilesh Kumar</div>
                <div class="${"intro svelte-lpuv3"}">Ex-IITian, Gold Medalist, Scientist, Teacher, Web developer</div></div></header>
        <aside class="${"svelte-lpuv3"}"><section class="${"about svelte-lpuv3"}"><h2 class="${"svelte-lpuv3"}">Profile</h2>
                <p style="${"font-weight: 400;line-height: 1.45;font-size: 0.9em;"}">I&#39;m passionate about teaching, but I&#39;m full-time learner. I want to contribute to the society by teaching young ones what I have learnt so far and learn from them in return. I taught quantum computing to my research group at Simula-UiB, Bergen, Norway.</p></section>
            <div class="${"contact svelte-lpuv3"}"><h2 class="${"svelte-lpuv3"}">Contact</h2>
                <table class="${"contactable svelte-lpuv3"}" style="${"font-size: 0.9em"}"><tr><td class="${"svelte-lpuv3"}"><span class="${"material-icons"}">home</span></td>
                        <td class="${"svelte-lpuv3"}">Bokaro</td></tr>
                    <tr><td style="${"padding-right:0"}" class="${"svelte-lpuv3"}"><span class="${"material-icons"}">phone</span></td>
                        <td class="${"svelte-lpuv3"}">8797081308</td></tr>
                    <tr><td style="${"padding-right:0"}" class="${"svelte-lpuv3"}"><span class="${"material-icons"}">email</span></td>
                        <td class="${"svelte-lpuv3"}">info@drmithileshkumar.com</td></tr>
                    <tr><td style="${"padding-right:0"}" class="${"svelte-lpuv3"}"><span class="${"material-icons"}">link</span></td>
                        <td class="${"svelte-lpuv3"}">www.drmithileshkumar.com</td></tr></table></div></aside>
        <div class="${"main svelte-lpuv3"}"><section class="${"education"}"><h2 class="${"svelte-lpuv3"}">Education</h2>
                <table><tr><td class="${"dates svelte-lpuv3"}">2020 - Present
                        </td>
                        <td class="${"svelte-lpuv3"}"><div class="${"edu"}"><div class="${"degree svelte-lpuv3"}">Web development</div>
                                <div class="${"institute svelte-lpuv3"}">Self-taught</div>
                                <div class="${"description svelte-lpuv3"}">nodejs, mongodb, svelte, sveltekit, html, css, javascript</div></div></td></tr>
                    <tr><td class="${"dates svelte-lpuv3"}">2017 - 2020
                        </td>
                        <td class="${"svelte-lpuv3"}"><div class="${"edu"}"><div class="${"degree svelte-lpuv3"}">Post Doc Research</div>
                                <div class="${"institute svelte-lpuv3"}">Simula-UiB, Bergen, Norway</div>
                                <div class="${"description svelte-lpuv3"}">Quantum-safe cryptography</div></div></td></tr>
                    <tr><td class="${"dates svelte-lpuv3"}">2014 - 2017
                        </td>
                        <td class="${"svelte-lpuv3"}"><div class="${"edu"}"><div class="${"degree svelte-lpuv3"}">PhD</div>
                                <div class="${"institute svelte-lpuv3"}">University of Bergen, Norway</div>
                                <div class="${"description svelte-lpuv3"}">Parameterized algorithms</div></div></td></tr>
                    <tr><td class="${"dates svelte-lpuv3"}">2011 - 2013
                        </td>
                        <td class="${"svelte-lpuv3"}"><div class="${"edu"}"><div class="${"degree svelte-lpuv3"}">Masters in Computer Science</div>
                                <div class="${"institute svelte-lpuv3"}">Chennai Mathematical Institute, Chennai</div>
                                <div class="${"description svelte-lpuv3"}">Theoretical Computer Science</div></div></td></tr>
                    <tr><td class="${"dates svelte-lpuv3"}">2004 - 2010
                        </td>
                        <td class="${"svelte-lpuv3"}"><div class="${"edu"}"><div class="${"degree svelte-lpuv3"}">Masters in Physics</div>
                                <div class="${"institute svelte-lpuv3"}">IIT Kanpur, Kanpur</div>
                                <div class="${"description svelte-lpuv3"}">MSc(I) Physics</div></div></td></tr></table></section>
            <section class="${"achievements"}"><h2 class="${"svelte-lpuv3"}">Achievements</h2>
                <table><tr><td class="${"symbol svelte-lpuv3"}" style="${"color: goldenrod"}"><span class="${"material-icons"}">military_tech</span></td>
                        <td class="${"svelte-lpuv3"}"><div class="${"award"}"><div class="${"awardname svelte-lpuv3"}">Gold Medalist</div>
                                <div class="${"awarddescription svelte-lpuv3"}">Academic excellence in masters degree in computer science, Chennai Mathematical Institute, Chennai</div></div></td></tr>
                    <tr><td class="${"symbol svelte-lpuv3"}"><span class="${"material-icons"}">military_tech</span></td>
                        <td class="${"svelte-lpuv3"}"><div class="${"award"}"><div class="${"awardname svelte-lpuv3"}">Merit-cum-means Scholarship</div>
                                <div class="${"awarddescription svelte-lpuv3"}">Academic performance in IIT Kanpur</div></div></td></tr>
                    <tr><td class="${"symbol svelte-lpuv3"}" style="${"color: silver"}"><span class="${"material-icons"}">military_tech</span></td>
                        <td class="${"svelte-lpuv3"}"><div class="${"award"}"><div class="${"awardname svelte-lpuv3"}">Finalist in Carrom Competition</div>
                                <div class="${"awarddescription svelte-lpuv3"}">Every year between 2004-2009 in Sports Event, IIT Kanpur</div></div></td></tr>
                    <tr><td class="${"symbol svelte-lpuv3"}"><span class="${"material-icons"}">military_tech</span></td>
                        <td class="${"svelte-lpuv3"}"><div class="${"award"}"><div class="${"awardname svelte-lpuv3"}">AIR 971</div>
                                <div class="${"awarddescription svelte-lpuv3"}">IIT JEE Entrance Exam</div></div></td></tr>
                    <tr><td class="${"symbol svelte-lpuv3"}" style="${"color: silver"}"><span class="${"material-icons"}">military_tech</span></td>
                        <td class="${"svelte-lpuv3"}"><div class="${"award"}"><div class="${"awardname svelte-lpuv3"}">2nd Position Board X</div>
                                <div class="${"awarddescription svelte-lpuv3"}">Class X result 94% (ranked 2nd in all Steel Plant Schools, Bokaro</div></div></td></tr>
                    <tr><td class="${"symbol svelte-lpuv3"}" style="${"color: goldenrod"}"><span class="${"material-icons"}">military_tech</span></td>
                        <td class="${"svelte-lpuv3"}"><div class="${"award"}"><div class="${"awardname svelte-lpuv3"}">Gold Medalist</div>
                                <div class="${"awarddescription svelte-lpuv3"}">1st position in Class IX-X, BISSC 8B, Bokaro</div></div></td></tr>
                    <tr><td class="${"symbol svelte-lpuv3"}" style="${"color: goldenrod"}"><span class="${"material-icons"}">military_tech</span></td>
                        <td class="${"svelte-lpuv3"}"><div class="${"award"}"><div class="${"awardname svelte-lpuv3"}">Silver Medalist</div>
                                <div class="${"awarddescription svelte-lpuv3"}">1st position in Class VII-VIII, BISSC 8B, Bokaro</div></div></td></tr>
                    <tr><td class="${"symbol svelte-lpuv3"}" style="${"color: goldenrod"}"><span class="${"material-icons"}">military_tech</span></td>
                        <td class="${"svelte-lpuv3"}"><div class="${"award"}"><div class="${"awardname svelte-lpuv3"}">1st Rank</div>
                                <div class="${"awarddescription svelte-lpuv3"}">Intercity English Essay Competition, Bokaro</div></div></td></tr></table></section></div>
        <section class="${"papers svelte-lpuv3"}"><h2 class="${"svelte-lpuv3"}">Publications</h2>
            ${validate_component(Papers, "Papers").$$render($$result, {}, {}, {})}</section></article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-17f573b7.js.map
