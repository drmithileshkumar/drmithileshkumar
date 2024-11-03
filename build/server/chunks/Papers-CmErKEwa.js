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
  code: ".grid.svelte-7pie2m{display:grid;grid-template-columns:1fr 1fr}.flex.svelte-7pie2m{display:flex;flex-direction:column}p.svelte-7pie2m{margin:0.2em}",
  map: `{"version":3,"file":"Papers.svelte","sources":["Papers.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Paper from './Paper.svelte';\\r\\n    let W = 500;\\r\\n    export let pdfReady = false;\\r\\n    $: classType = W <= 700 ? 'flex': 'flex'\\r\\n    let papers = [\\r\\n        {\\r\\n            authors: \\"Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum\\",\\r\\n            title: \\"Graphs and Self-dual additive codes over GF(4)\\",\\r\\n            venue: \\"WCC, 2019\\"\\r\\n        }\\r\\n    ]\\r\\n<\/script>\\r\\n<style>\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr 1fr;\\r\\n    }\\r\\n    .flex {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n    }\\r\\n    p {\\r\\n        margin: 0.2em;\\r\\n    }\\r\\n</style>\\r\\n<div class=\\"papers {classType} {pdfReady ? 'flex' : classType}\\" bind:clientWidth=\\"{W}\\">\\r\\n    <h2>Quantum Information</h2>\\r\\n    <Paper>\\r\\n        <p slot=\\"authors\\">\\r\\n            Mithilesh Kumar\\r\\n        </p>\\r\\n        <p slot=\\"title\\">\\r\\n            Schmidt Decomposition of Multipartite states\\r\\n        </p>\\r\\n        <p slot=\\"venue\\">\\r\\n            10.13140/RG.2.2.19713.88162, 2024\\r\\n        </p>\\r\\n    </Paper>\\r\\n    <Paper>\\r\\n        <p slot=\\"authors\\">\\r\\n            Mithilesh Kumar\\r\\n        </p>\\r\\n        <p slot=\\"title\\">\\r\\n            Schmidt Decomposition of Quadripartite states\\r\\n        </p>\\r\\n        <p slot=\\"venue\\">\\r\\n            10.13140/RG.2.2.26424.76807, 2024\\r\\n        </p>\\r\\n    </Paper>\\r\\n    <Paper>\\r\\n        <p slot=\\"authors\\">\\r\\n            Mithilesh Kumar\\r\\n        </p>\\r\\n        <p slot=\\"title\\">\\r\\n            Schmidt Decomposition of Tripartite states\\r\\n        </p>\\r\\n        <p slot=\\"venue\\">\\r\\n            10.13140/RG.2.2.24747.04648, 2024\\r\\n        </p>\\r\\n    </Paper>\\r\\n    <h2>Journal</h2>\\r\\n    <Paper>\\r\\n        <p slot=\\"authors\\">\\r\\n            Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum\\r\\n        </p>\\r\\n        <p slot=\\"title\\">\\r\\n            Graphs and Self-dual additive codes over GF(4)\\r\\n        </p>\\r\\n        <p slot=\\"venue\\">\\r\\n            WCC, 2019\\r\\n        </p>\\r\\n    </Paper>\\r\\n    <Paper>\\r\\n        <p slot=\\"authors\\">\\r\\n            Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum\\r\\n        </p>\\r\\n        <p slot=\\"title\\">\\r\\n            Reducing Lattice Enumeration Search Trees\\r\\n        </p>\\r\\n        <p slot=\\"venue\\">\\r\\n            Infocommunications Journal, 2019\\r\\n        </p>\\r\\n    </Paper>\\r\\n    <Paper>\\r\\n        <p slot=\\"authors\\">\\r\\n            Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz\\r\\n        </p>\\r\\n        <p slot=\\"title\\">\\r\\n            Lossy Kernels for Connected Dominating Set on Sparse Graphs\\r\\n        </p>\\r\\n        <p slot=\\"venue\\">\\r\\n            SIAM J. Discret. Math. 33(3): 1743-1771 (2019)\\r\\n        </p>\\r\\n    </Paper>\\r\\n    <h2>Conferences</h2>\\r\\n    <Paper>\\r\\n        <p slot=\\"authors\\">\\r\\n            Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz\\r\\n        </p>\\r\\n        <p slot=\\"title\\">\\r\\n            Lossy Kernels for Connected Dominating Set on Sparse Graphs\\r\\n        </p>\\r\\n        <p slot=\\"venue\\">\\r\\n            STACS 2018: 29:1-29:15\\r\\n        </p>\\r\\n    </Paper>\\r\\n    <Paper>\\r\\n        <p slot=\\"authors\\">\\r\\n            Mithilesh Kumar, Daniel Lokshtanov\\r\\n        </p>\\r\\n        <p slot=\\"title\\">\\r\\n            Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Bipartite Tournaments\\r\\n        </p>\\r\\n        <p slot=\\"venue\\">\\r\\n            FSTTCS 2016: 24:1-24:15\\r\\n        </p>\\r\\n    </Paper>\\r\\n    <Paper>\\r\\n        <p slot=\\"authors\\">\\r\\n            Mithilesh Kumar, Daniel Lokshtanov\\r\\n        </p>\\r\\n        <p slot=\\"title\\">\\r\\n            A 2lk Kernel for l-Component Order Connectivity\\r\\n        </p>\\r\\n        <p slot=\\"venue\\">\\r\\n            IPEC 2016: 20:1-20:14\\r\\n        </p>\\r\\n    </Paper>\\r\\n    <Paper>\\r\\n        <p slot=\\"authors\\">\\r\\n            Mithilesh Kumar, Daniel Lokshtanov\\r\\n        </p>\\r\\n        <p slot=\\"title\\">\\r\\n            Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments\\r\\n        </p>\\r\\n        <p slot=\\"venue\\">\\r\\n            STACS 2016: 49:1-49:13\\r\\n        </p>\\r\\n    </Paper>\\r\\n    <h2>Arxiv</h2>\\r\\n    <Paper>\\r\\n        <p slot=\\"authors\\">\\r\\n            Akash Kumar, Mithilesh Kumar\\r\\n        </p>\\r\\n        <p slot=\\"title\\">\\r\\n            Deletion to Induced Matching\\r\\n        </p>\\r\\n        <p slot=\\"venue\\">\\r\\n            CoRR abs/2008.09660 (2020)\\r\\n        </p>\\r\\n    </Paper>\\r\\n    <Paper>\\r\\n        <p slot=\\"authors\\">\\r\\n            Kanav Gupta, Mithilesh Kumar, Håvard Raddum\\r\\n        </p>\\r\\n        <p slot=\\"title\\">\\r\\n            Obtuse Lattice Bases\\r\\n        </p>\\r\\n        <p slot=\\"venue\\">\\r\\n            CoRR abs/2009.00384 (2020)\\r\\n        </p>\\r\\n    </Paper>\\r\\n    \\r\\n    \\r\\n    <Paper>\\r\\n        <p slot=\\"authors\\">\\r\\n            Mithilesh Kumar\\r\\n        </p>\\r\\n        <p slot=\\"title\\">\\r\\n            2-CLUB is NP-hard for distance to 2-club cluster graphs\\r\\n        </p>\\r\\n        <p slot=\\"venue\\">\\r\\n            CoRR abs/1903.05425 (2019)\\r\\n        </p>\\r\\n    </Paper>\\r\\n    <Paper>\\r\\n        <p slot=\\"authors\\">\\r\\n            Mithilesh Kumar\\r\\n        </p>\\r\\n        <p slot=\\"title\\">\\r\\n            Faster Lattice Enumeration\\r\\n        </p>\\r\\n        <p slot=\\"venue\\">\\r\\n            CoRR abs/1912.01781 (2019)\\r\\n        </p>\\r\\n    </Paper>\\r\\n    \\r\\n    \\r\\n    <Paper>\\r\\n        <p slot=\\"authors\\">\\r\\n            Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz\\r\\n        </p>\\r\\n        <p slot=\\"title\\">\\r\\n            Lossy Kernels for Connected Dominating Set on Sparse Graphs\\r\\n        </p>\\r\\n        <p slot=\\"venue\\">\\r\\n            CoRR abs/1706.09339 (2017)\\r\\n        </p>\\r\\n    </Paper>\\r\\n    \\r\\n    \\r\\n    \\r\\n    <Paper>\\r\\n        <p slot=\\"authors\\">\\r\\n            Mithilesh Kumar, Daniel Lokshtanov\\r\\n        </p>\\r\\n        <p slot=\\"title\\">\\r\\n            A 2ℓk Kernel for ℓ-Component Order Connectivity\\r\\n        </p>\\r\\n        <p slot=\\"venue\\">\\r\\n            CoRR abs/1610.04711 (2016)\\r\\n        </p>\\r\\n    </Paper>\\r\\n    <Paper>\\r\\n        <p slot=\\"authors\\">\\r\\n            Mithilesh Kumar, Daniel Lokshtanov\\r\\n        </p>\\r\\n        <p slot=\\"title\\">\\r\\n            Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments\\r\\n        </p>\\r\\n        <p slot=\\"venue\\">\\r\\n            CoRR abs/1510.07676 (2015)\\r\\n        </p>\\r\\n    </Paper>\\r\\n</div>"],"names":[],"mappings":"AAeI,mBAAM,CACF,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAC/B,CACA,mBAAM,CACF,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MACpB,CACA,eAAE,CACE,MAAM,CAAE,KACZ"}`
};
const Papers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classType;
  let { pdfReady = false } = $$props;
  if ($$props.pdfReady === void 0 && $$bindings.pdfReady && pdfReady !== void 0)
    $$bindings.pdfReady(pdfReady);
  $$result.css.add(css);
  classType = "flex";
  return `<div class="${"papers " + escape(classType, true) + " " + escape(pdfReady ? "flex" : classType, true) + " svelte-7pie2m"}"><h2 data-svelte-h="svelte-1tzb1h3">Quantum Information</h2> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-7pie2m" data-svelte-h="svelte-1r8d816">10.13140/RG.2.2.19713.88162, 2024</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-7pie2m" data-svelte-h="svelte-33jtkj">Schmidt Decomposition of Multipartite states</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-7pie2m" data-svelte-h="svelte-1etchp2">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-7pie2m" data-svelte-h="svelte-uroo0i">10.13140/RG.2.2.26424.76807, 2024</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-7pie2m" data-svelte-h="svelte-sn8760">Schmidt Decomposition of Quadripartite states</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-7pie2m" data-svelte-h="svelte-1etchp2">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-7pie2m" data-svelte-h="svelte-1p0seg6">10.13140/RG.2.2.24747.04648, 2024</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-7pie2m" data-svelte-h="svelte-ru7isf">Schmidt Decomposition of Tripartite states</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-7pie2m" data-svelte-h="svelte-1etchp2">Mithilesh Kumar</p>`;
    }
  })} <h2 data-svelte-h="svelte-2yos6n">Journal</h2> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-7pie2m" data-svelte-h="svelte-1a1pqxv">WCC, 2019</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-7pie2m" data-svelte-h="svelte-yqgjwk">Graphs and Self-dual additive codes over GF(4)</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-7pie2m" data-svelte-h="svelte-tw2l1h">Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-7pie2m" data-svelte-h="svelte-m3xg7u">Infocommunications Journal, 2019</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-7pie2m" data-svelte-h="svelte-11jsb04">Reducing Lattice Enumeration Search Trees</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-7pie2m" data-svelte-h="svelte-tw2l1h">Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-7pie2m" data-svelte-h="svelte-iblflt">SIAM J. Discret. Math. 33(3): 1743-1771 (2019)</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-7pie2m" data-svelte-h="svelte-1dlnwjn">Lossy Kernels for Connected Dominating Set on Sparse Graphs</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-7pie2m" data-svelte-h="svelte-qegx3n">Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz</p>`;
    }
  })} <h2 data-svelte-h="svelte-f2xotb">Conferences</h2> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-7pie2m" data-svelte-h="svelte-2ndzi9">STACS 2018: 29:1-29:15</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-7pie2m" data-svelte-h="svelte-1dlnwjn">Lossy Kernels for Connected Dominating Set on Sparse Graphs</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-7pie2m" data-svelte-h="svelte-qegx3n">Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-7pie2m" data-svelte-h="svelte-1hxs95c">FSTTCS 2016: 24:1-24:15</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-7pie2m" data-svelte-h="svelte-1cndpwv">Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Bipartite Tournaments</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-7pie2m" data-svelte-h="svelte-16mra76">Mithilesh Kumar, Daniel Lokshtanov</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-7pie2m" data-svelte-h="svelte-13bz3hj">IPEC 2016: 20:1-20:14</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-7pie2m" data-svelte-h="svelte-aeetra">A 2lk Kernel for l-Component Order Connectivity</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-7pie2m" data-svelte-h="svelte-16mra76">Mithilesh Kumar, Daniel Lokshtanov</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-7pie2m" data-svelte-h="svelte-1e4lzj9">STACS 2016: 49:1-49:13</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-7pie2m" data-svelte-h="svelte-1wnkcxf">Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-7pie2m" data-svelte-h="svelte-16mra76">Mithilesh Kumar, Daniel Lokshtanov</p>`;
    }
  })} <h2 data-svelte-h="svelte-1mlzyr8">Arxiv</h2> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-7pie2m" data-svelte-h="svelte-14q75lr">CoRR abs/2008.09660 (2020)</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-7pie2m" data-svelte-h="svelte-1h8e96z">Deletion to Induced Matching</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-7pie2m" data-svelte-h="svelte-1a33ywo">Akash Kumar, Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-7pie2m" data-svelte-h="svelte-1cmbhc">CoRR abs/2009.00384 (2020)</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-7pie2m" data-svelte-h="svelte-1c5pphr">Obtuse Lattice Bases</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-7pie2m" data-svelte-h="svelte-127oqoh">Kanav Gupta, Mithilesh Kumar, Håvard Raddum</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-7pie2m" data-svelte-h="svelte-1ewprir">CoRR abs/1903.05425 (2019)</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-7pie2m" data-svelte-h="svelte-c69sc5">2-CLUB is NP-hard for distance to 2-club cluster graphs</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-7pie2m" data-svelte-h="svelte-1etchp2">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-7pie2m" data-svelte-h="svelte-10z2lim">CoRR abs/1912.01781 (2019)</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-7pie2m" data-svelte-h="svelte-59yvtd">Faster Lattice Enumeration</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-7pie2m" data-svelte-h="svelte-1etchp2">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-7pie2m" data-svelte-h="svelte-uas0n8">CoRR abs/1706.09339 (2017)</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-7pie2m" data-svelte-h="svelte-1dlnwjn">Lossy Kernels for Connected Dominating Set on Sparse Graphs</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-7pie2m" data-svelte-h="svelte-qegx3n">Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-7pie2m" data-svelte-h="svelte-11xhuk0">CoRR abs/1610.04711 (2016)</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-7pie2m" data-svelte-h="svelte-di16ly">A 2ℓk Kernel for ℓ-Component Order Connectivity</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-7pie2m" data-svelte-h="svelte-16mra76">Mithilesh Kumar, Daniel Lokshtanov</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-7pie2m" data-svelte-h="svelte-wyc0ub">CoRR abs/1510.07676 (2015)</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-7pie2m" data-svelte-h="svelte-1wnkcxf">Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-7pie2m" data-svelte-h="svelte-16mra76">Mithilesh Kumar, Daniel Lokshtanov</p>`;
    }
  })}</div>`;
});

export { Papers as P };
//# sourceMappingURL=Papers-CmErKEwa.js.map
