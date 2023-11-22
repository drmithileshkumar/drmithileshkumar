import { c as create_ssr_component, v as validate_component, e as escape, d as null_to_empty, l as add_attribute } from './index3-8ac84804.js';
import { P as Papers } from './Papers-91a906eb.js';

const css$3 = {
  code: ".introduction.svelte-1791xnj{line-height:1.45;word-spacing:0.1em;color:black}",
  map: null
};
const Introduction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="introduction svelte-1791xnj"></div>`;
});
const css$2 = {
  code: ".education.svelte-124q32d{line-height:1.45;word-spacing:0.1em;max-width:1200px;color:black}.fillerImage.svelte-124q32d{width:100%;display:flex;align-items:center;justify-content:center}.grid.svelte-124q32d{display:flex;flex-direction:row;align-items:center;width:100%;gap:1em}.flex.svelte-124q32d{display:flex;flex-direction:column;flex-wrap:wrap;align-items:center;justify-content:center}",
  map: null
};
const Education = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sectionClass;
  $$result.css.add(css$2);
  sectionClass = "grid";
  return `<article class="education svelte-124q32d">

    <h2 style="margin-bottom: 0;">Work and Education</h2>
    <p>In my case, work and education have gone hand-in-hand. One can not be seen independent of the other. I describe them briefly below.</p>
    <section class="${escape(null_to_empty(sectionClass), true) + " svelte-124q32d"}"><div class="detail"><h3>Web development</h3>
            <p>Pandemic gave me enough time to gain a new skill, web development. I taught myself nodejs, mongodb, svelte and sveltekit. I have developed my own qr-code based authentication scheme that helps users to set long and secure passwords without having to memorize them.
            </p></div>
        
        <div class="fillerImage svelte-124q32d"><svg width="50%" viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="linearGradient" gradientTransform=""><stop offset="0%"${add_attribute("stop-color", "green", 0)}></stop><stop offset="100%"${add_attribute("stop-color", "gray", 0)}></stop></linearGradient><radialGradient id="radialGradient" gradientTransform=""><stop offset="0%"${add_attribute("stop-color", "magenta", 0)}></stop><stop offset="100%"${add_attribute("stop-color", "skyblue", 0)}></stop></radialGradient></defs><path id="path" fill="url('#radialGradient')" d="M 21.00 -17.62 C 18.33 -21.62 16.67 -22.95 10.67 -24.95 C 4.68 -26.95 5.33 -27.29 -0.67 -27.29 C -6.75 -27.29 -6.33 -25.95 -11.33 -23.29 C -16.28 -20.65 -19.22 -19.87 -22.00 -14.62 C -25.00 -8.95 -24.34 -10.15 -24.00 -3.29 C -23.67 3.38 -23.75 4.98 -20.67 10.71 C -18.33 15.05 -16.39 16.07 -12.00 19.05 C -7.61 22.02 -3.90 21.36 1.67 21.05 C 7.67 20.71 10.60 22.73 15.33 19.05 C 21.33 14.38 21.33 14.05 23.33 8.71 C 25.35 3.33 27.20 1.89 26.67 -3.95 C 26.00 -11.29 24.39 -12.53 21.00 -17.62 Z"></path><animate xlink:href="#path" attributeName="d" dur="4s" repeatCount="indefinite" fill="freeze" values="M 21.00 -16.29 C 18.33 -20.29 23.33 -31.77 18.33 -35.62 C 13.34 -39.47 5.67 -26.95 -0.33 -26.95 C -6.41 -26.95 -18.33 -37.95 -22.67 -34.29 C -26.94 -30.67 -20.22 -20.54 -23.00 -15.29 C -26.00 -9.62 -36.34 -9.48 -36.00 -2.62 C -35.67 4.05 -24.09 4.65 -21.00 10.38 C -18.67 14.71 -25.39 27.07 -21.00 30.05 C -16.61 33.02 -4.23 23.37 1.33 23.71 C 6.90 24.06 16.60 37.07 21.33 33.38 C 27.33 28.71 20.52 14.63 24.00 10.05 C 27.48 5.47 39.53 1.55 39.00 -4.29 C 38.33 -11.62 24.39 -11.20 21.00 -16.29 Z; M 21.00 -16.29 C 18.33 -20.29 16.67 -22.95 10.67 -24.95 C 4.68 -26.95 5.67 -26.95 -0.33 -26.95 C -6.41 -26.95 -7.33 -26.95 -12.33 -24.29 C -17.28 -21.65 -20.22 -20.54 -23.00 -15.29 C -26.00 -9.62 -26.68 -7.48 -26.33 -0.62 C -26.00 6.05 -25.42 4.65 -22.33 10.38 C -20.00 14.71 -16.39 16.07 -12.00 19.05 C -7.61 22.02 -4.23 23.37 1.33 23.71 C 6.90 24.06 10.60 22.73 15.33 19.05 C 21.33 14.38 20.52 14.63 24.00 10.05 C 27.48 5.47 27.20 1.89 26.67 -3.95 C 26.00 -11.29 24.39 -11.20 21.00 -16.29 Z; M 30.67 -21.62 C 28.00 -25.62 16.67 -22.95 10.67 -24.95 C 4.68 -26.95 5.33 -35.95 -0.67 -35.95 C -6.75 -35.95 -6.33 -25.95 -11.33 -23.29 C -16.28 -20.65 -25.88 -22.87 -28.67 -17.62 C -31.67 -11.95 -24.34 -10.15 -24.00 -3.29 C -23.67 3.38 -32.42 10.65 -29.33 16.38 C -27.00 20.71 -16.39 16.07 -12.00 19.05 C -7.61 22.02 -4.24 32.69 1.33 32.38 C 7.33 32.05 10.60 22.73 15.33 19.05 C 21.33 14.38 29.52 17.96 33.00 13.38 C 36.48 8.80 27.20 1.89 26.67 -3.95 C 26.00 -11.29 34.06 -16.53 30.67 -21.62 Z; M 21.00 -17.62 C 18.33 -21.62 16.67 -22.95 10.67 -24.95 C 4.68 -26.95 5.33 -27.29 -0.67 -27.29 C -6.75 -27.29 -6.33 -25.95 -11.33 -23.29 C -16.28 -20.65 -19.22 -19.87 -22.00 -14.62 C -25.00 -8.95 -24.34 -10.15 -24.00 -3.29 C -23.67 3.38 -23.75 4.98 -20.67 10.71 C -18.33 15.05 -16.39 16.07 -12.00 19.05 C -7.61 22.02 -3.90 21.36 1.67 21.05 C 7.67 20.71 10.60 22.73 15.33 19.05 C 21.33 14.38 21.33 14.05 23.33 8.71 C 25.35 3.33 27.20 1.89 26.67 -3.95 C 26.00 -11.29 24.39 -12.53 21.00 -17.62 Z; M 21.00 -16.29 C 18.33 -20.29 23.33 -31.77 18.33 -35.62 C 13.34 -39.47 5.67 -26.95 -0.33 -26.95 C -6.41 -26.95 -18.33 -37.95 -22.67 -34.29 C -26.94 -30.67 -20.22 -20.54 -23.00 -15.29 C -26.00 -9.62 -36.34 -9.48 -36.00 -2.62 C -35.67 4.05 -24.09 4.65 -21.00 10.38 C -18.67 14.71 -25.39 27.07 -21.00 30.05 C -16.61 33.02 -4.23 23.37 1.33 23.71 C 6.90 24.06 16.60 37.07 21.33 33.38 C 27.33 28.71 20.52 14.63 24.00 10.05 C 27.48 5.47 39.53 1.55 39.00 -4.29 C 38.33 -11.62 24.39 -11.20 21.00 -16.29 Z"></animate></svg></div></section>

    <section class="${escape(null_to_empty(sectionClass), true) + " svelte-124q32d"}"><div class="detail"><h3>Post Doctoral Research</h3>
            <p>Between June 2017 and June 2020, I did Post-doctoral research in quantum-safe cryptography in a research-based company <a href="https://simula-uib.com/">Simula-UiB</a>, Bergen, Norway. 
        </p></div>
        <div class="fillerImage svelte-124q32d"><img width="50%" src="/LCPath.svg" alt="LCPath"></div></section>

    <section class="${escape(null_to_empty(sectionClass), true) + " svelte-124q32d"}"><div class="detail"><h3>PhD</h3>
            <p>During my masters in CMI, I grew interest in graph algorithms. Between March, 2014 and May, 2017, I did PhD in <a download="DrMithileshKumarPhDthesis" href="/thesis.pdf">parameterized algorithms</a> from <a href="https://www.uib.no/en/rg/algo/55502/group-members">University of Bergen, Norway</a> under <a href="https://sites.cs.ucsb.edu/~daniello/">Prof. Daniel Lokshtanov</a>. My research papers are listed below.
            </p></div>
        <div class="fillerImage svelte-124q32d"><img width="50%" src="/santa.svg" alt="santa"></div></section>
    
    <section class="${escape(null_to_empty(sectionClass), true) + " svelte-124q32d"}"><div class="detail"><h3>Masters in Theoretical Computer Science</h3>
            <p>To improve my understanding of quantum computing, I taught myself basics of computer science. Between July 2011 and July 2013, I did masters in theoretical computer science from <a href="https://www.cmi.ac.in/people/alumni-profile.php?id=mithilesh">Chennai Mathematical Institute, Chennai</a>. I&#39;m the <strong>gold medalist</strong> of my batch. My master&#39;s thesis can be accessed <a download="DrMithileshKumarCMImsc.pdf" href="/mscthesis.pdf">here</a>.
            </p></div>
        <div class="fillerImage svelte-124q32d"><img width="50%" src="/CMIMedal.jpg" alt="Medal" style="z-index: -1; transform: rotate(-90deg); border-radius: 50%;"></div></section>

    <section class="${escape(null_to_empty(sectionClass), true) + " svelte-124q32d"}"><div class="detail"><h3>Masters in Theotical Physics</h3>
            <p>In 2004, I cleared IIT-JEE entrance exam with <strong>AIR 971</strong>. Between July 2004 and Dec 2010, I did msc integrated in physics from <a href="https://www.iitk.ac.in/phy/">IIT Kanpur</a>. In my theory project, I developed an algorithm that would generalize Deutsch-Jozsa quantum algorithm for operations modulo 2N. The experimental project involved Z-Scan measurement in Quantum Computing.
            </p></div>
        <div class="fillerImage svelte-124q32d"><img width="50%" src="/IITMSc.jpg" alt="Medal" style="transform: rotate(-90deg); border-radius: 50%;"></div></section>

    <section><h3>School</h3>
        <p>I have been academically inclined from the start. I was class topper (sometimes school topper) in my school. I passed Class X from BISSC 8B, Bokaro with 94% marks. I was 2nd rank in all Bokaro Steel City schools in the city. I completed Class XII from DPS, Bokaro with 80.2% marks.</p>
        <p></p></section></article>`;
});
const css$1 = {
  code: ".skills.svelte-18i5h7m{line-height:1.45;word-spacing:0.1em;display:flex;justify-content:center}",
  map: null
};
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="skills svelte-18i5h7m"></div>`;
});
const css = {
  code: ".container.svelte-19pj1xe{padding:0 1em}.profile.svelte-19pj1xe{position:relative}.dp.svelte-19pj1xe{aspect-ratio:1 / 1;width:15%;height:auto;border-radius:50%;position:absolute;top:60%;left:2%;overflow:hidden;border:2px solid transparent;box-shadow:1px 1px 3px gray;background:white}.bar.svelte-19pj1xe{height:1em}.intro.svelte-19pj1xe{margin-top:1em}.name.svelte-19pj1xe{font-size:1.3em}.welcome.svelte-19pj1xe{display:flex;justify-content:flex-start;flex-direction:column;line-height:1.45;word-spacing:0.1em;color:black}",
  map: null
};
const Page_about = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-d6qc0s_START -->${$$result.title = `<title>Dr Mithilesh Kumar</title>`, ""}<!-- HEAD_svelte-d6qc0s_END -->`, ""}
<div class="container svelte-19pj1xe"><div class="profile svelte-19pj1xe"><div class="cover"><img src="/notes/quantum/teleportation.svg"></div>
        <div class="dp svelte-19pj1xe"><img width="100%" height="100%" src="/favicon.png"></div></div>
    <div class="bar svelte-19pj1xe"></div>
    <div class="intro svelte-19pj1xe"><div class="name svelte-19pj1xe"><a href="/">Dr Mithilesh Kumar</a></div>
        <div class="interests"></div></div>
    <div class="welcome svelte-19pj1xe">
        <p>Hello, I&#39;m Mithilesh Kumar. I&#39;m passionate about anything related to Quantum Mechanics. Currently, I&#39;m working actively in quantum error correction. I have done research in quantum-safe cryptography (Post-Doc). My PhD involved studying parameterized algorithms. Prior to that I have masters in two fields, computer science (CMI) and physics (IIT Kanpur). In addition, I have founded two websites <a href="https://mathril.com">Mathril</a> (Mathematics) and <a href="https://vectorial.app">Vectorial</a> (Graphics). ( <a href="/cv">My CV</a> )
        </p></div>
    <br>
    ${validate_component(Introduction, "Introduction").$$render($$result, {}, {}, {})}
    
    ${validate_component(Education, "Education").$$render($$result, {}, {}, {})}
    
    
    ${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}
    
    <h2>Research Papers</h2>
    ${validate_component(Papers, "Papers").$$render($$result, {}, {}, {})}
    </div>`;
});

export { Page_about as default };
//# sourceMappingURL=_page@about.svelte-eb945411.js.map
