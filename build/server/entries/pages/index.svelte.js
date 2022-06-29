import { c as create_ssr_component, e as escape, d as null_to_empty, f as add_attribute, v as validate_component } from "../../chunks/index-84a939f5.js";
var Introduction_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".introduction.svelte-gismy4{line-height:1.45;word-spacing:0.1em}")();
const css$6 = {
  code: ".introduction.svelte-gismy4{line-height:1.45;word-spacing:0.1em}",
  map: null
};
const Introduction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div class="${"introduction svelte-gismy4"}"></div>`;
});
var Education_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".education.svelte-1fp7ifv{line-height:1.45;word-spacing:0.1em}.fillerImage.svelte-1fp7ifv{width:min(90vw,200px)}.grid.svelte-1fp7ifv{display:grid;grid-template-columns:0.8fr auto;align-items:center;justify-content:space-between}.flex.svelte-1fp7ifv{display:flex;flex-direction:column;flex-wrap:wrap;align-items:center;justify-content:center}")();
const css$5 = {
  code: ".education.svelte-1fp7ifv{line-height:1.45;word-spacing:0.1em}.fillerImage.svelte-1fp7ifv{width:min(90vw,200px)}.grid.svelte-1fp7ifv{display:grid;grid-template-columns:0.8fr auto;align-items:center;justify-content:space-between}.flex.svelte-1fp7ifv{display:flex;flex-direction:column;flex-wrap:wrap;align-items:center;justify-content:center}",
  map: null
};
const Education = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sectionClass;
  $$result.css.add(css$5);
  sectionClass = "grid";
  return `<article class="${"education svelte-1fp7ifv"}">

    <h2 style="${"margin-bottom: 0;"}">Work and Education</h2>
    <p>Work and education have gone together in my case. One can not be seen independent of the other. I describe them briefly below.</p>
    <section class="${escape(null_to_empty(sectionClass)) + " svelte-1fp7ifv"}"><div class="${"detail"}"><h3>Web development</h3>
            <p>Pandemic gave enough time to learn a new skill, web development. I taught myself nodejs, mongodb, svelte and sveltekit. I have development my own qr-code based authentication mechanism that helps users to set very long and secure passwords and still free them from the burden of memoring them.
            </p></div>
        
        <div class="${"fillerImage svelte-1fp7ifv"}"><svg width="${"100%"}" viewBox="${"-50 -50 100 100"}" xmlns="${"http://www.w3.org/2000/svg"}"><defs><linearGradient id="${"linearGradient"}" gradientTransform="${""}"><stop offset="${"0%"}"${add_attribute("stop-color", "black", 0)}></stop><stop offset="${"100%"}"${add_attribute("stop-color", "gray", 0)}></stop></linearGradient><radialGradient id="${"radialGradient"}" gradientTransform="${""}"><stop offset="${"0%"}"${add_attribute("stop-color", "black", 0)}></stop><stop offset="${"100%"}"${add_attribute("stop-color", "gray", 0)}></stop></radialGradient></defs><path id="${"path"}" fill="${"url('#radialGradient')"}" d="${"M 21.00 -17.62 C 18.33 -21.62 16.67 -22.95 10.67 -24.95 C 4.68 -26.95 5.33 -27.29 -0.67 -27.29 C -6.75 -27.29 -6.33 -25.95 -11.33 -23.29 C -16.28 -20.65 -19.22 -19.87 -22.00 -14.62 C -25.00 -8.95 -24.34 -10.15 -24.00 -3.29 C -23.67 3.38 -23.75 4.98 -20.67 10.71 C -18.33 15.05 -16.39 16.07 -12.00 19.05 C -7.61 22.02 -3.90 21.36 1.67 21.05 C 7.67 20.71 10.60 22.73 15.33 19.05 C 21.33 14.38 21.33 14.05 23.33 8.71 C 25.35 3.33 27.20 1.89 26.67 -3.95 C 26.00 -11.29 24.39 -12.53 21.00 -17.62 Z"}"></path><animate xlink:href="${"#path"}" attributeName="${"d"}" dur="${"4s"}" repeatCount="${"indefinite"}" fill="${"freeze"}" values="${"M 21.00 -16.29 C 18.33 -20.29 23.33 -31.77 18.33 -35.62 C 13.34 -39.47 5.67 -26.95 -0.33 -26.95 C -6.41 -26.95 -18.33 -37.95 -22.67 -34.29 C -26.94 -30.67 -20.22 -20.54 -23.00 -15.29 C -26.00 -9.62 -36.34 -9.48 -36.00 -2.62 C -35.67 4.05 -24.09 4.65 -21.00 10.38 C -18.67 14.71 -25.39 27.07 -21.00 30.05 C -16.61 33.02 -4.23 23.37 1.33 23.71 C 6.90 24.06 16.60 37.07 21.33 33.38 C 27.33 28.71 20.52 14.63 24.00 10.05 C 27.48 5.47 39.53 1.55 39.00 -4.29 C 38.33 -11.62 24.39 -11.20 21.00 -16.29 Z; M 21.00 -16.29 C 18.33 -20.29 16.67 -22.95 10.67 -24.95 C 4.68 -26.95 5.67 -26.95 -0.33 -26.95 C -6.41 -26.95 -7.33 -26.95 -12.33 -24.29 C -17.28 -21.65 -20.22 -20.54 -23.00 -15.29 C -26.00 -9.62 -26.68 -7.48 -26.33 -0.62 C -26.00 6.05 -25.42 4.65 -22.33 10.38 C -20.00 14.71 -16.39 16.07 -12.00 19.05 C -7.61 22.02 -4.23 23.37 1.33 23.71 C 6.90 24.06 10.60 22.73 15.33 19.05 C 21.33 14.38 20.52 14.63 24.00 10.05 C 27.48 5.47 27.20 1.89 26.67 -3.95 C 26.00 -11.29 24.39 -11.20 21.00 -16.29 Z; M 30.67 -21.62 C 28.00 -25.62 16.67 -22.95 10.67 -24.95 C 4.68 -26.95 5.33 -35.95 -0.67 -35.95 C -6.75 -35.95 -6.33 -25.95 -11.33 -23.29 C -16.28 -20.65 -25.88 -22.87 -28.67 -17.62 C -31.67 -11.95 -24.34 -10.15 -24.00 -3.29 C -23.67 3.38 -32.42 10.65 -29.33 16.38 C -27.00 20.71 -16.39 16.07 -12.00 19.05 C -7.61 22.02 -4.24 32.69 1.33 32.38 C 7.33 32.05 10.60 22.73 15.33 19.05 C 21.33 14.38 29.52 17.96 33.00 13.38 C 36.48 8.80 27.20 1.89 26.67 -3.95 C 26.00 -11.29 34.06 -16.53 30.67 -21.62 Z; M 21.00 -17.62 C 18.33 -21.62 16.67 -22.95 10.67 -24.95 C 4.68 -26.95 5.33 -27.29 -0.67 -27.29 C -6.75 -27.29 -6.33 -25.95 -11.33 -23.29 C -16.28 -20.65 -19.22 -19.87 -22.00 -14.62 C -25.00 -8.95 -24.34 -10.15 -24.00 -3.29 C -23.67 3.38 -23.75 4.98 -20.67 10.71 C -18.33 15.05 -16.39 16.07 -12.00 19.05 C -7.61 22.02 -3.90 21.36 1.67 21.05 C 7.67 20.71 10.60 22.73 15.33 19.05 C 21.33 14.38 21.33 14.05 23.33 8.71 C 25.35 3.33 27.20 1.89 26.67 -3.95 C 26.00 -11.29 24.39 -12.53 21.00 -17.62 Z; M 21.00 -16.29 C 18.33 -20.29 23.33 -31.77 18.33 -35.62 C 13.34 -39.47 5.67 -26.95 -0.33 -26.95 C -6.41 -26.95 -18.33 -37.95 -22.67 -34.29 C -26.94 -30.67 -20.22 -20.54 -23.00 -15.29 C -26.00 -9.62 -36.34 -9.48 -36.00 -2.62 C -35.67 4.05 -24.09 4.65 -21.00 10.38 C -18.67 14.71 -25.39 27.07 -21.00 30.05 C -16.61 33.02 -4.23 23.37 1.33 23.71 C 6.90 24.06 16.60 37.07 21.33 33.38 C 27.33 28.71 20.52 14.63 24.00 10.05 C 27.48 5.47 39.53 1.55 39.00 -4.29 C 38.33 -11.62 24.39 -11.20 21.00 -16.29 Z"}"></animate></svg></div></section>

    <section class="${escape(null_to_empty(sectionClass)) + " svelte-1fp7ifv"}"><div class="${"detail"}"><h3>Post Doctoral Research</h3>
            <p>Between June, 2017 and June 2020, I did Post-doctoral research in quantum-safe cryptography in a research-based company <a href="${"https://simula-uib.com/"}">Simula-UiB</a>, Bergen, Norway. In the meantime, pandemic happened.
            </p></div>
        <div class="${"fillerImage svelte-1fp7ifv"}" style="${"width: min(90vw, 300px;"}"><img width="${"100%"}" src="${"/LCPath.svg"}" alt="${"LCPath"}"></div></section>

    <section class="${escape(null_to_empty(sectionClass)) + " svelte-1fp7ifv"}"><div class="${"detail"}"><h3>PhD</h3>
            <p>During my masters in CMI, I grew interest in graph algorithms. Between March, 2014 and May, 2017, I did PhD in <a download="${"DrMithileshKumarPhDthesis"}" href="${"/thesis.pdf"}">parameterized algorithms</a> from <a href="${"https://www.uib.no/en/rg/algo/55502/group-members"}">University of Bergen, Norway</a> under <a href="${"https://sites.cs.ucsb.edu/~daniello/"}">Prof. Daniel Lokshtanov</a>. My research papers are listed below.
            </p></div>
        <div class="${"fillerImage svelte-1fp7ifv"}" style="${"width: min(90vw, 300px;"}"><img width="${"100%"}" src="${"/santa.svg"}" alt="${"santa"}"></div></section>
    
    <section class="${escape(null_to_empty(sectionClass)) + " svelte-1fp7ifv"}"><div class="${"detail"}"><h3>Masters in Theoretical Computer Science</h3>
            <p>To improve my understanding of quantum computing, I taught myself basics of computer science. Between July 2011, and July 2013, I did masters in theoretical computer science from <a href="${"https://www.cmi.ac.in/people/alumni-profile.php?id=mithilesh"}">Chennai Mathematical Institute, Chennai</a>. I&#39;m the <strong>gold medalist</strong> of my batch. My master&#39;s thesis can be accessed <a download="${"DrMithileshKumarCMImsc.pdf"}" href="${"/mscthesis.pdf"}">here</a>.
            </p></div>
        <div class="${"fillerImage svelte-1fp7ifv"}"><img width="${"100%"}" src="${"/CMIMedal.jpg"}" alt="${"Medal"}" style="${"z-index: -1; transform: rotate(-90deg); border-radius: 50%;"}"></div></section>

    <section class="${escape(null_to_empty(sectionClass)) + " svelte-1fp7ifv"}" style="${"gap: 1em;"}"><div class="${"detail"}"><h3>Masters in Theotical Physics</h3>
            <p>In 2004, I cleared IIT-JEE entrance exam with <strong>AIR 971</strong>. Between July 2004, and Dec 2010, I did msc integrated in physics from <a href="${"https://www.iitk.ac.in/phy/"}">IIT Kanpur</a>. In my theory project, I developed an algorithm that would generalize Deutsch-Jozsa quantum algorithm for operations modulo 2N. The experimental project involved Z-Scan measurement in Quantum Computing.
            </p></div>
        <div class="${"fillerImage svelte-1fp7ifv"}"><img width="${"100%"}" src="${"/IITMSc.jpg"}" alt="${"Medal"}" style="${"transform: rotate(-90deg); border-radius: 50%;"}"></div></section>

    <section><h3>School</h3>
        <p>I passed Class X from BISSC, 8B, Bokaro with 94% marks. I was 2nd rank in all Bokaro Steel City schools in the city.I completed Class XII from DPS, Bokaro with 80.2% marks.</p>
        <p></p></section></article>`;
});
var Skills_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".skills.svelte-18i5h7m{line-height:1.45;word-spacing:0.1em;display:flex;justify-content:center}")();
const css$4 = {
  code: ".skills.svelte-18i5h7m{line-height:1.45;word-spacing:0.1em;display:flex;justify-content:center}",
  map: null
};
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="${"skills svelte-18i5h7m"}"></div>`;
});
var Research_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".research.svelte-1ggrs5p{line-height:1.45;word-spacing:0.1em}")();
const css$3 = {
  code: ".research.svelte-1ggrs5p{line-height:1.45;word-spacing:0.1em}",
  map: null
};
const Research = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="${"research svelte-1ggrs5p"}"></div>`;
});
var Paper_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".paper.svelte-1mhki6f{display:grid;grid-template-rows:auto auto auto;margin-bottom:2em}.authors.svelte-1mhki6f{color:#7d848a;text-decoration:none;font-weight:300;font-size:0.9em}.title.svelte-1mhki6f{font-weight:700;font-size:1.1em}.venue.svelte-1mhki6f{color:#7d848a;font-size:0.8em}")();
const css$2 = {
  code: ".paper.svelte-1mhki6f{display:grid;grid-template-rows:auto auto auto;margin-bottom:2em}.authors.svelte-1mhki6f{color:#7d848a;text-decoration:none;font-weight:300;font-size:0.9em}.title.svelte-1mhki6f{font-weight:700;font-size:1.1em}.venue.svelte-1mhki6f{color:#7d848a;font-size:0.8em}",
  map: null
};
const Paper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"paper svelte-1mhki6f"}"><div class="${"authors svelte-1mhki6f"}">${slots.authors ? slots.authors({}) : ``}</div>
    <div class="${"title svelte-1mhki6f"}">${slots.title ? slots.title({}) : ``}</div>
    <div class="${"venue svelte-1mhki6f"}">${slots.venue ? slots.venue({}) : ``}</div></div>`;
});
var Papers_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "p.svelte-xwoi6g{margin:0.2em}")();
const css$1 = {
  code: "p.svelte-xwoi6g{margin:0.2em}",
  map: null
};
const Papers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"papers"}"><h2>Research Papers</h2>
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-xwoi6g"}">CoRR abs/2008.09660 (2020)
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-xwoi6g"}">Deletion to Induced Matching
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-xwoi6g"}">Akash Kumar, Mithilesh Kumar
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-xwoi6g"}">CoRR abs/2009.00384 (2020)
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-xwoi6g"}">Obtuse Lattice Bases
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-xwoi6g"}">Kanav Gupta, Mithilesh Kumar, H\xE5vard Raddum
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-xwoi6g"}">WCC, 2019
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-xwoi6g"}">Graphs and Self-dual additive codes over GF(4)
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-xwoi6g"}">Mithilesh Kumar, Srimathi Varadarajan, H\xE5vard Raddum
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-xwoi6g"}">Infocommunications Journal, 2019
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-xwoi6g"}">Reducing Lattice Enumeration Search Trees
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-xwoi6g"}">Mithilesh Kumar, Srimathi Varadarajan, H\xE5vard Raddum
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-xwoi6g"}">CoRR abs/1903.05425 (2019)
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-xwoi6g"}">2-CLUB is NP-hard for distance to 2-club cluster graphs
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-xwoi6g"}">Mithilesh Kumar
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-xwoi6g"}">CoRR abs/1912.01781 (2019)
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-xwoi6g"}">Faster Lattice Enumeration
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-xwoi6g"}">Mithilesh Kumar
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-xwoi6g"}">SIAM J. Discret. Math. 33(3): 1743-1771 (2019)
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-xwoi6g"}">Lossy Kernels for Connected Dominating Set on Sparse Graphs
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-xwoi6g"}">Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-xwoi6g"}">STACS 2018: 29:1-29:15
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-xwoi6g"}">Lossy Kernels for Connected Dominating Set on Sparse Graphs
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-xwoi6g"}">Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-xwoi6g"}">CoRR abs/1706.09339 (2017)
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-xwoi6g"}">Lossy Kernels for Connected Dominating Set on Sparse Graphs
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-xwoi6g"}">Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-xwoi6g"}">FSTTCS 2016: 24:1-24:15
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-xwoi6g"}">Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Bipartite Tournaments
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-xwoi6g"}">Mithilesh Kumar, Daniel Lokshtanov
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-xwoi6g"}">IPEC 2016: 20:1-20:14
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-xwoi6g"}">A 2lk Kernel for l-Component Order Connectivity
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-xwoi6g"}">Mithilesh Kumar, Daniel Lokshtanov
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-xwoi6g"}">STACS 2016: 49:1-49:13
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-xwoi6g"}">Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-xwoi6g"}">Mithilesh Kumar, Daniel Lokshtanov
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-xwoi6g"}">CoRR abs/1610.04711 (2016)
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-xwoi6g"}">A 2\u2113k Kernel for \u2113-Component Order Connectivity
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-xwoi6g"}">Mithilesh Kumar, Daniel Lokshtanov
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-xwoi6g"}">CoRR abs/1510.07676 (2015)
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-xwoi6g"}">Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-xwoi6g"}">Mithilesh Kumar, Daniel Lokshtanov
        </p>`;
    }
  })}</div>`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".welcome.svelte-48zjgz{display:flex;justify-content:flex-start;flex-direction:column;line-height:1.45;word-spacing:0.1em}")();
const css = {
  code: ".welcome.svelte-48zjgz{display:flex;justify-content:flex-start;flex-direction:column;line-height:1.45;word-spacing:0.1em}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Dr Mithilesh Kumar</title>`, ""}`, ""}
<div class="${"welcome svelte-48zjgz"}">
    <p>Hello, my passion is teaching, but I&#39;m a full-time learner. I&#39;m a self-taught full-stack web developer. In addition, I&#39;ve master degrees in theoretical physics and theoretical computer science. I&#39;ve done PhD in parameterized algorithms and Post Doctoral research in quantum-safe cryptography. I taught my research group at Simula-UiB quantum algorithms. My goal is to contribute to the society by teaching young ones what I have learnt so far and learn from them in return. 
    </p></div>
<br>
${validate_component(Introduction, "Introduction").$$render($$result, {}, {}, {})}

${validate_component(Education, "Education").$$render($$result, {}, {}, {})}

${validate_component(Research, "Research").$$render($$result, {}, {}, {})}
${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}

${validate_component(Papers, "Papers").$$render($$result, {}, {}, {})}
`;
});
export { Routes as default };
