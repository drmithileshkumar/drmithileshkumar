import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-Cv_bEuJL.js';

const css$1 = {
  code: ".paper.svelte-1rnqfn2{display:grid;grid-template-rows:auto auto auto;margin-bottom:2em;color:currentColor}.authors.svelte-1rnqfn2{color:currentColor;text-decoration:none;font-weight:300;font-size:0.9em;opacity:0.8}.title.svelte-1rnqfn2{font-weight:700;font-size:1.1em}.venue.svelte-1rnqfn2{color:currentColor;font-size:0.8em;opacity:0.9}",
  map: '{"version":3,"file":"Paper.svelte","sources":["Paper.svelte"],"sourcesContent":["<script>\\r\\n\\r\\n<\/script>\\r\\n<style>\\r\\n    .paper {\\r\\n        display: grid;\\r\\n        grid-template-rows: auto auto auto;\\r\\n        margin-bottom: 2em;\\r\\n        color: currentColor;\\r\\n    }\\r\\n    .authors {\\r\\n        color: currentColor;\\r\\n        text-decoration: none;\\r\\n        font-weight: 300;\\r\\n        font-size: 0.9em;\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    .title {\\r\\n        font-weight: 700;\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    .venue {\\r\\n        color: currentColor;\\r\\n        font-size: 0.8em;\\r\\n        opacity: 0.9;\\r\\n    }\\r\\n</style>\\r\\n<div class=\\"paper\\">\\r\\n    <div class=\\"authors\\">\\r\\n        <slot name=\\"authors\\" />\\r\\n    </div>\\r\\n    <div class=\\"title\\">\\r\\n        <slot name=\\"title\\" />\\r\\n    </div>\\r\\n    <div class=\\"venue\\">\\r\\n        <slot name=\\"venue\\" />\\r\\n    </div>\\r\\n</div>"],"names":[],"mappings":"AAII,qBAAO,CACH,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAClC,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,YACX,CACA,uBAAS,CACL,KAAK,CAAE,YAAY,CACnB,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,GACb,CACA,qBAAO,CACH,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,KACf,CACA,qBAAO,CACH,KAAK,CAAE,YAAY,CACnB,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,GACb"}'
};
const Paper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="paper svelte-1rnqfn2"><div class="authors svelte-1rnqfn2">${slots.authors ? slots.authors({}) : ``}</div> <div class="title svelte-1rnqfn2">${slots.title ? slots.title({}) : ``}</div> <div class="venue svelte-1rnqfn2">${slots.venue ? slots.venue({}) : ``}</div></div>`;
});
const css = {
  code: ".grid.svelte-1k1sybo{display:grid;grid-template-columns:1fr 1fr}.flex.svelte-1k1sybo{display:flex;flex-direction:row}p.svelte-1k1sybo{margin:0.2em}",
  map: `{"version":3,"file":"Papers.svelte","sources":["Papers.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Paper from './Paper.svelte';\\r\\n    let W = 500;\\r\\n    export let pdfReady = false;\\r\\n    // $: classType = W <= 700 ? 'flex': 'flex'\\r\\n    let classType = 'flex'\\r\\n    let papers = [\\r\\n        {\\r\\n            authors: \\"Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum\\",\\r\\n            title: \\"Graphs and Self-dual additive codes over GF(4)\\",\\r\\n            venue: \\"WCC, 2019\\"\\r\\n        }\\r\\n    ]\\r\\n<\/script>\\r\\n<style>\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr 1fr;\\r\\n    }\\r\\n    .flex {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n    }\\r\\n    p {\\r\\n        margin: 0.2em;\\r\\n    }\\r\\n</style>\\r\\n<div class=\\"papers {classType} {pdfReady ? 'flex' : classType}\\" bind:clientWidth=\\"{W}\\">\\r\\n    <section>\\r\\n        <h2>Quantum Information</h2>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                On properties of Schmidt Decomposition\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://arxiv.org/abs/2411.05703\\">CoRR abs/2411.05703 (2024)</a>\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                On properties of Schmidt Decomposition\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://www.researchgate.net/publication/385630874_On_properties_of_Schmidt_Decomposition\\">10.13140/RG.2.2.19022.47687</a>, 2024\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Schmidt Decomposition of Multipartite states\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://arxiv.org/abs/2411.02473\\">CoRR abs/2411.02473 (2024)</a>\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Schmidt Decomposition of Multipartite states\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://www.researchgate.net/publication/385491083_Schmidt_Decomposition_of_Multipartite_States\\">10.13140/RG.2.2.19713.88162</a>, 2024\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Schmidt Decomposition of Quadripartite states\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://www.researchgate.net/publication/385490959_Schmidt_Decomposition_of_Quadripartite_States\\">10.13140/RG.2.2.26424.76807</a>, 2024\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Schmidt Decomposition of Tripartite states\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://www.researchgate.net/publication/385491145_Schmidt_Decomposition_of_Tripartite_States\\">10.13140/RG.2.2.24747.04648</a>, 2024\\r\\n            </p>\\r\\n        </Paper>\\r\\n    </section>\\r\\n    \\r\\n    <section>\\r\\n        <h2>Journal</h2>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Graphs and Self-dual additive codes over GF(4)\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                WCC, 2019\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Reducing Lattice Enumeration Search Trees\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                Infocommunications Journal, 2019\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Lossy Kernels for Connected Dominating Set on Sparse Graphs\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                SIAM J. Discret. Math. 33(3): 1743-1771 (2019)\\r\\n            </p>\\r\\n        </Paper>\\r\\n    </section>\\r\\n    \\r\\n    <section>\\r\\n        <h2>Conferences</h2>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Lossy Kernels for Connected Dominating Set on Sparse Graphs\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                STACS 2018: 29:1-29:15\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar, Daniel Lokshtanov\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Bipartite Tournaments\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                FSTTCS 2016: 24:1-24:15\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar, Daniel Lokshtanov\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                A 2lk Kernel for l-Component Order Connectivity\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                IPEC 2016: 20:1-20:14\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar, Daniel Lokshtanov\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                STACS 2016: 49:1-49:13\\r\\n            </p>\\r\\n        </Paper>\\r\\n    </section>\\r\\n    \\r\\n    <section>\\r\\n        <h2>Arxiv</h2>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar, Daniel Lokshtanov\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Bipartite Tournaments\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://arxiv.org/abs/2411.02821\\">CoRR abs/2411.02821 (2024)</a>\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Akash Kumar, Mithilesh Kumar\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Deletion to Induced Matching\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                CoRR abs/2008.09660 (2020)\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Kanav Gupta, Mithilesh Kumar, Håvard Raddum\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Obtuse Lattice Bases\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                CoRR abs/2009.00384 (2020)\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                2-CLUB is NP-hard for distance to 2-club cluster graphs\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                CoRR abs/1903.05425 (2019)\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Faster Lattice Enumeration\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                CoRR abs/1912.01781 (2019)\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Lossy Kernels for Connected Dominating Set on Sparse Graphs\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                CoRR abs/1706.09339 (2017)\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar, Daniel Lokshtanov\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                A 2ℓk Kernel for ℓ-Component Order Connectivity\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                CoRR abs/1610.04711 (2016)\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar, Daniel Lokshtanov\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                CoRR abs/1510.07676 (2015)\\r\\n            </p>\\r\\n        </Paper>\\r\\n    </section>\\r\\n    \\r\\n</div>"],"names":[],"mappings":"AAgBI,oBAAM,CACF,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAC/B,CACA,oBAAM,CACF,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GACpB,CACA,gBAAE,CACE,MAAM,CAAE,KACZ"}`
};
let classType = "flex";
const Papers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pdfReady = false } = $$props;
  if ($$props.pdfReady === void 0 && $$bindings.pdfReady && pdfReady !== void 0)
    $$bindings.pdfReady(pdfReady);
  $$result.css.add(css);
  return `<div class="${"papers " + escape(classType, true) + " " + escape(pdfReady ? "flex" : classType, true) + " svelte-1k1sybo"}"><section><h2 data-svelte-h="svelte-1tzb1h3">Quantum Information</h2> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-dndxs0"><a href="https://arxiv.org/abs/2411.05703">CoRR abs/2411.05703 (2024)</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-160qqux">On properties of Schmidt Decomposition</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-118e6xi">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-r8j70v"><a href="https://www.researchgate.net/publication/385630874_On_properties_of_Schmidt_Decomposition">10.13140/RG.2.2.19022.47687</a>, 2024</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-160qqux">On properties of Schmidt Decomposition</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-118e6xi">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-1fdqo6"><a href="https://arxiv.org/abs/2411.02473">CoRR abs/2411.02473 (2024)</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-1yq0far">Schmidt Decomposition of Multipartite states</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-118e6xi">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-13pisj0"><a href="https://www.researchgate.net/publication/385491083_Schmidt_Decomposition_of_Multipartite_States">10.13140/RG.2.2.19713.88162</a>, 2024</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-1yq0far">Schmidt Decomposition of Multipartite states</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-118e6xi">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-hdu3q8"><a href="https://www.researchgate.net/publication/385490959_Schmidt_Decomposition_of_Quadripartite_States">10.13140/RG.2.2.26424.76807</a>, 2024</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-xc593c">Schmidt Decomposition of Quadripartite states</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-118e6xi">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-ymq879"><a href="https://www.researchgate.net/publication/385491145_Schmidt_Decomposition_of_Tripartite_States">10.13140/RG.2.2.24747.04648</a>, 2024</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-1g325en">Schmidt Decomposition of Tripartite states</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-118e6xi">Mithilesh Kumar</p>`;
    }
  })}</section> <section><h2 data-svelte-h="svelte-2yos6n">Journal</h2> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-15olggz">WCC, 2019</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-dojvt0">Graphs and Self-dual additive codes over GF(4)</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-7z6611">Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-va7pzu">Infocommunications Journal, 2019</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-1q716t0">Reducing Lattice Enumeration Search Trees</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-7z6611">Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-8qyxxd">SIAM J. Discret. Math. 33(3): 1743-1771 (2019)</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-116dqwz">Lossy Kernels for Connected Dominating Set on Sparse Graphs</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-1gkejo3">Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz</p>`;
    }
  })}</section> <section><h2 data-svelte-h="svelte-f2xotb">Conferences</h2> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-1tu45xd">STACS 2018: 29:1-29:15</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-116dqwz">Lossy Kernels for Connected Dominating Set on Sparse Graphs</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-1gkejo3">Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-1l3pzkg">FSTTCS 2016: 24:1-24:15</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-117emb3">Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Bipartite Tournaments</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-x0yzc2">Mithilesh Kumar, Daniel Lokshtanov</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-11zynhj">IPEC 2016: 20:1-20:14</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-pky4va">A 2lk Kernel for l-Component Order Connectivity</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-x0yzc2">Mithilesh Kumar, Daniel Lokshtanov</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-15nw945">STACS 2016: 49:1-49:13</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-1n2mrn7">Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-x0yzc2">Mithilesh Kumar, Daniel Lokshtanov</p>`;
    }
  })}</section> <section><h2 data-svelte-h="svelte-1mlzyr8">Arxiv</h2> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-19phq1o"><a href="https://arxiv.org/abs/2411.02821">CoRR abs/2411.02821 (2024)</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-117emb3">Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Bipartite Tournaments</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-x0yzc2">Mithilesh Kumar, Daniel Lokshtanov</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-o2qvj3">CoRR abs/2008.09660 (2020)</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-ip51xn">Deletion to Induced Matching</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-b7b5vc">Akash Kumar, Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-cqaihs">CoRR abs/2009.00384 (2020)</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-avemhb">Obtuse Lattice Bases</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-1cbvgx">Kanav Gupta, Mithilesh Kumar, Håvard Raddum</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-1v6cgwj">CoRR abs/1903.05425 (2019)</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-1ryeks5">2-CLUB is NP-hard for distance to 2-club cluster graphs</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-118e6xi">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-hlwqr2">CoRR abs/1912.01781 (2019)</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-oe97dd">Faster Lattice Enumeration</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-118e6xi">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-1ehmipw">CoRR abs/1706.09339 (2017)</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-116dqwz">Lossy Kernels for Connected Dominating Set on Sparse Graphs</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-1gkejo3">Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-qogyy8">CoRR abs/1610.04711 (2016)</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-18rynjq">A 2ℓk Kernel for ℓ-Component Order Connectivity</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-x0yzc2">Mithilesh Kumar, Daniel Lokshtanov</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1k1sybo" data-svelte-h="svelte-13fat6r">CoRR abs/1510.07676 (2015)</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1k1sybo" data-svelte-h="svelte-1n2mrn7">Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1k1sybo" data-svelte-h="svelte-x0yzc2">Mithilesh Kumar, Daniel Lokshtanov</p>`;
    }
  })}</section></div>`;
});

export { Papers as P };
//# sourceMappingURL=Papers-CgVM11Np.js.map
