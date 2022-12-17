import { c as create_ssr_component, v as validate_component } from './index-13a715ed.js';
import { P as Papers } from './Papers-4e141d75.js';

const css = {
  code: 'article.svelte-bsxzlj.svelte-bsxzlj{display:grid;grid-template-columns:0.25fr 0.75fr;grid-template-areas:"header header"\r\n            "aside main"\r\n            "papers papers";padding:1em;width:1200px;margin:auto}header.svelte-bsxzlj.svelte-bsxzlj{grid-area:header;display:grid;grid-template-columns:200px 0.7fr;grid-template-areas:"profile details";align-items:center;background:linear-gradient(45deg, white, rgba(41, 170, 230, 0.2), rgb(41, 170, 230));height:200px}aside.svelte-bsxzlj.svelte-bsxzlj{grid-area:aside;display:flex;gap:1em;flex-direction:column;margin-top:1em}.main.svelte-bsxzlj.svelte-bsxzlj{grid-area:main;padding:1em;padding-top:0;display:grid;grid-template-columns:1fr 1fr}.papers.svelte-bsxzlj.svelte-bsxzlj{grid-area:papers}.profile.svelte-bsxzlj.svelte-bsxzlj{grid-area:profile;width:200px;height:200px;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center}.details.svelte-bsxzlj.svelte-bsxzlj{grid-area:details;display:flex;flex-direction:column;padding-left:0.5em}.name.svelte-bsxzlj.svelte-bsxzlj{font-size:3em;color:rgb(0, 147, 220);text-shadow:1px 1px 2px #888;font-weight:300}.intro.svelte-bsxzlj.svelte-bsxzlj{font-weight:300;color:black}h2.svelte-bsxzlj.svelte-bsxzlj,.symbol.svelte-bsxzlj.svelte-bsxzlj{color:rgb(0, 147, 220)}.about.svelte-bsxzlj.svelte-bsxzlj,.contact.svelte-bsxzlj.svelte-bsxzlj{background-color:rgba(136, 136, 136, 0.212);padding:1em}.dates.svelte-bsxzlj.svelte-bsxzlj{font-weight:500}.degree.svelte-bsxzlj.svelte-bsxzlj,.awardname.svelte-bsxzlj.svelte-bsxzlj{font-weight:500}.institute.svelte-bsxzlj.svelte-bsxzlj{font-weight:400;font-size:0.9em}.description.svelte-bsxzlj.svelte-bsxzlj,.awarddescription.svelte-bsxzlj.svelte-bsxzlj{font-weight:300;font-size:0.8em}td.svelte-bsxzlj.svelte-bsxzlj{padding-right:2em;padding-bottom:1em}.symbol.svelte-bsxzlj.svelte-bsxzlj{padding-right:0.5em}.contactable.svelte-bsxzlj td.svelte-bsxzlj{padding-bottom:0;padding-right:0;font-size:0.9em;letter-spacing:0.02em}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<article class="${"svelte-bsxzlj"}"><header class="${"svelte-bsxzlj"}"><div class="${"profile svelte-bsxzlj"}"><img width="${"100%"}" src="${"/profilephoto.jpeg"}" alt="${"mithileshkumar"}"></div>
            <div class="${"details svelte-bsxzlj"}"><div class="${"name svelte-bsxzlj"}">Dr Mithilesh Kumar</div>
                <div class="${"intro svelte-bsxzlj"}">Ex-IITian, Gold Medalist, Scientist, Teacher, Web developer</div></div></header>
        <aside class="${"svelte-bsxzlj"}"><section class="${"about svelte-bsxzlj"}"><h2 class="${"svelte-bsxzlj"}">Profile</h2>
                <p style="${"font-weight: 400;line-height: 1.45;font-size: 0.9em;"}">I&#39;m passionate about teaching, but I&#39;m full-time learner. I want to contribute to the society by teaching young ones what I have learnt so far and learn from them in return. I taught quantum computing to my research group at Simula-UiB, Bergen, Norway.</p></section>
            <div class="${"contact svelte-bsxzlj"}"><h2 class="${"svelte-bsxzlj"}">Contact</h2>
                <table class="${"contactable svelte-bsxzlj"}" style="${"font-size: 0.9em"}"><tr><td class="${"svelte-bsxzlj"}"><span class="${"material-icons"}">home</span></td>
                        <td class="${"svelte-bsxzlj"}">Chandigarh</td></tr>
                    <tr><td style="${"padding-right:0"}" class="${"svelte-bsxzlj"}"><span class="${"material-icons"}">phone</span></td>
                        <td class="${"svelte-bsxzlj"}">8797081308</td></tr>
                    <tr><td style="${"padding-right:0"}" class="${"svelte-bsxzlj"}"><span class="${"material-icons"}">email</span></td>
                        <td class="${"svelte-bsxzlj"}">drmithileshkumar@outlook.com</td></tr>
                    <tr><td style="${"padding-right:0"}" class="${"svelte-bsxzlj"}"><span class="${"material-icons"}">link</span></td>
                        <td class="${"svelte-bsxzlj"}">www.drmithileshkumar.com</td></tr></table></div></aside>
        <div class="${"main svelte-bsxzlj"}"><section class="${"education"}"><h2 class="${"svelte-bsxzlj"}">Education</h2>
                <table><tr><td class="${"dates svelte-bsxzlj"}">2020 - Present
                        </td>
                        <td class="${"svelte-bsxzlj"}"><div class="${"edu"}"><div class="${"degree svelte-bsxzlj"}">Web development</div>
                                <div class="${"institute svelte-bsxzlj"}">Self-taught</div>
                                <div class="${"description svelte-bsxzlj"}">nodejs, mongodb, svelte, sveltekit, html, css, javascript</div></div></td></tr>
                    <tr><td class="${"dates svelte-bsxzlj"}">2017 - 2020
                        </td>
                        <td class="${"svelte-bsxzlj"}"><div class="${"edu"}"><div class="${"degree svelte-bsxzlj"}">Post Doc Research</div>
                                <div class="${"institute svelte-bsxzlj"}">Simula-UiB, Bergen, Norway</div>
                                <div class="${"description svelte-bsxzlj"}">Quantum-safe cryptography</div></div></td></tr>
                    <tr><td class="${"dates svelte-bsxzlj"}">2014 - 2017
                        </td>
                        <td class="${"svelte-bsxzlj"}"><div class="${"edu"}"><div class="${"degree svelte-bsxzlj"}">PhD</div>
                                <div class="${"institute svelte-bsxzlj"}">University of Bergen, Norway</div>
                                <div class="${"description svelte-bsxzlj"}">Parameterized algorithms</div></div></td></tr>
                    <tr><td class="${"dates svelte-bsxzlj"}">2011 - 2013
                        </td>
                        <td class="${"svelte-bsxzlj"}"><div class="${"edu"}"><div class="${"degree svelte-bsxzlj"}">Masters in Computer Science</div>
                                <div class="${"institute svelte-bsxzlj"}">Chennai Mathematical Institute, Chennai</div>
                                <div class="${"description svelte-bsxzlj"}">Theoretical Computer Science</div></div></td></tr>
                    <tr><td class="${"dates svelte-bsxzlj"}">2004 - 2010
                        </td>
                        <td class="${"svelte-bsxzlj"}"><div class="${"edu"}"><div class="${"degree svelte-bsxzlj"}">Masters in Physics</div>
                                <div class="${"institute svelte-bsxzlj"}">IIT Kanpur, Kanpur</div>
                                <div class="${"description svelte-bsxzlj"}">MSc(I) Physics</div></div></td></tr></table></section>
            <section class="${"achievements"}"><h2 class="${"svelte-bsxzlj"}">Achievements</h2>
                <table><tr><td class="${"symbol svelte-bsxzlj"}" style="${"color: goldenrod"}"><span class="${"material-icons"}">military_tech</span></td>
                        <td class="${"svelte-bsxzlj"}"><div class="${"award"}"><div class="${"awardname svelte-bsxzlj"}">Gold Medalist</div>
                                <div class="${"awarddescription svelte-bsxzlj"}">Academic excellence in masters degree in computer science, Chennai Mathematical Institute, Chennai</div></div></td></tr>
                    <tr><td class="${"symbol svelte-bsxzlj"}"><span class="${"material-icons"}">military_tech</span></td>
                        <td class="${"svelte-bsxzlj"}"><div class="${"award"}"><div class="${"awardname svelte-bsxzlj"}">Merit-cum-means Scholarship</div>
                                <div class="${"awarddescription svelte-bsxzlj"}">Academic performance in IIT Kanpur</div></div></td></tr>
                    <tr><td class="${"symbol svelte-bsxzlj"}" style="${"color: silver"}"><span class="${"material-icons"}">military_tech</span></td>
                        <td class="${"svelte-bsxzlj"}"><div class="${"award"}"><div class="${"awardname svelte-bsxzlj"}">Finalist in Carrom Competition</div>
                                <div class="${"awarddescription svelte-bsxzlj"}">Every year between 2004-2009 in Sports Event, IIT Kanpur</div></div></td></tr>
                    <tr><td class="${"symbol svelte-bsxzlj"}"><span class="${"material-icons"}">military_tech</span></td>
                        <td class="${"svelte-bsxzlj"}"><div class="${"award"}"><div class="${"awardname svelte-bsxzlj"}">AIR 971</div>
                                <div class="${"awarddescription svelte-bsxzlj"}">IIT JEE Entrance Exam</div></div></td></tr>
                    <tr><td class="${"symbol svelte-bsxzlj"}" style="${"color: silver"}"><span class="${"material-icons"}">military_tech</span></td>
                        <td class="${"svelte-bsxzlj"}"><div class="${"award"}"><div class="${"awardname svelte-bsxzlj"}">2nd Position Board X</div>
                                <div class="${"awarddescription svelte-bsxzlj"}">Class X result 94% (ranked 2nd in all Steel Plant Schools, Bokaro</div></div></td></tr>
                    <tr><td class="${"symbol svelte-bsxzlj"}" style="${"color: goldenrod"}"><span class="${"material-icons"}">military_tech</span></td>
                        <td class="${"svelte-bsxzlj"}"><div class="${"award"}"><div class="${"awardname svelte-bsxzlj"}">Gold Medalist</div>
                                <div class="${"awarddescription svelte-bsxzlj"}">1st position in Class IX-X, BISSC 8B, Bokaro</div></div></td></tr>
                    <tr><td class="${"symbol svelte-bsxzlj"}" style="${"color: goldenrod"}"><span class="${"material-icons"}">military_tech</span></td>
                        <td class="${"svelte-bsxzlj"}"><div class="${"award"}"><div class="${"awardname svelte-bsxzlj"}">Silver Medalist</div>
                                <div class="${"awarddescription svelte-bsxzlj"}">1st position in Class VII-VIII, BISSC 8B, Bokaro</div></div></td></tr>
                    <tr><td class="${"symbol svelte-bsxzlj"}" style="${"color: goldenrod"}"><span class="${"material-icons"}">military_tech</span></td>
                        <td class="${"svelte-bsxzlj"}"><div class="${"award"}"><div class="${"awardname svelte-bsxzlj"}">1st Rank</div>
                                <div class="${"awarddescription svelte-bsxzlj"}">Intercity English Essay Competition, Bokaro</div></div></td></tr></table></section></div>
        <section class="${"papers svelte-bsxzlj"}"><h2 class="${"svelte-bsxzlj"}">Publications</h2>
            ${validate_component(Papers, "Papers").$$render($$result, {}, {}, {})}</section></article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9b26d94f.js.map
