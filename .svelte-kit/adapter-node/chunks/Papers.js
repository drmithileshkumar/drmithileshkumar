import { c as create_ssr_component, e as escape, v as validate_component } from "./ssr.js";
const css$1 = {
  code: ".paper.svelte-fex077{display:grid;grid-template-rows:auto auto auto;margin-bottom:1em;color:currentColor}.authors.svelte-fex077{color:currentColor;text-decoration:none;font-weight:300;font-size:0.9em;opacity:0.8}.title.svelte-fex077{font-weight:500;font-size:1.1em}.venue.svelte-fex077{color:currentColor;font-size:0.8em;opacity:0.9}",
  map: '{"version":3,"file":"Paper.svelte","sources":["Paper.svelte"],"sourcesContent":["<script>\\r\\n\\r\\n<\/script>\\r\\n<style>\\r\\n    .paper {\\r\\n        display: grid;\\r\\n        grid-template-rows: auto auto auto;\\r\\n        margin-bottom: 1em;\\r\\n        color: currentColor;\\r\\n    }\\r\\n    .authors {\\r\\n        color: currentColor;\\r\\n        text-decoration: none;\\r\\n        font-weight: 300;\\r\\n        font-size: 0.9em;\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    .title {\\r\\n        font-weight: 500;\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    .venue {\\r\\n        color: currentColor;\\r\\n        font-size: 0.8em;\\r\\n        opacity: 0.9;\\r\\n    }\\r\\n</style>\\r\\n<div class=\\"paper\\">\\r\\n    <div class=\\"authors\\">\\r\\n        <slot name=\\"authors\\" />\\r\\n    </div>\\r\\n    <div class=\\"title\\">\\r\\n        <slot name=\\"title\\" />\\r\\n    </div>\\r\\n    <div class=\\"venue\\">\\r\\n        <slot name=\\"venue\\" />\\r\\n    </div>\\r\\n</div>"],"names":[],"mappings":"AAII,oBAAO,CACH,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAClC,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,YACX,CACA,sBAAS,CACL,KAAK,CAAE,YAAY,CACnB,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,GACb,CACA,oBAAO,CACH,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,KACf,CACA,oBAAO,CACH,KAAK,CAAE,YAAY,CACnB,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,GACb"}'
};
const Paper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="paper svelte-fex077"><div class="authors svelte-fex077">${slots.authors ? slots.authors({}) : ``}</div> <div class="title svelte-fex077">${slots.title ? slots.title({}) : ``}</div> <div class="venue svelte-fex077">${slots.venue ? slots.venue({}) : ``}</div></div>`;
});
const css = {
  code: ".grid.svelte-1yilitb{display:grid;grid-template-columns:1fr}.flex.svelte-1yilitb{display:flex;flex-direction:row}p.svelte-1yilitb{margin:0.2em}",
  map: `{"version":3,"file":"Papers.svelte","sources":["Papers.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Paper from './Paper.svelte';\\r\\n    let W = 500;\\r\\n    export let pdfReady = false;\\r\\n    // $: classType = W <= 700 ? 'flex': 'flex'\\r\\n    let classType = 'grid'\\r\\n    let papers = [\\r\\n        {\\r\\n            authors: \\"Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum\\",\\r\\n            title: \\"Graphs and Self-dual additive codes over GF(4)\\",\\r\\n            venue: \\"WCC, 2019\\"\\r\\n        }\\r\\n    ]\\r\\n<\/script>\\r\\n<style>\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr;\\r\\n    }\\r\\n    .flex {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n    }\\r\\n    p {\\r\\n        margin: 0.2em;\\r\\n    }\\r\\n</style>\\r\\n<div class=\\"papers {classType} {pdfReady ? 'grid' : classType}\\" bind:clientWidth=\\"{W}\\">\\r\\n    <section>\\r\\n        <h2>Quantum Information</h2>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                A guide to Quantum Channels\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <!-- <a href=\\"https://arxiv.org/abs/2411.10710\\">CoRR abs/2411.10710 (2024)</a>,--> \\r\\n                 <a href=\\"https://www.researchgate.net/publication/386416763_A_guide_to_Quantum_Channels\\">10.13140/RG.2.2.30460.45446</a>, Dec 2024\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Local Operations in Multiparty Quantum Systems\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://arxiv.org/abs/2411.10710\\">CoRR abs/2411.10710 (2024)</a>, <a href=\\"https://www.researchgate.net/publication/385864724_Local_Operations_in_Multiparty_Quantum_Systems\\">10.13140/RG.2.2.10422.51524</a>, 2024\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                On properties of Schmidt Decomposition\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://arxiv.org/abs/2411.05703\\">CoRR abs/2411.05703 (2024)</a>, <a href=\\"https://www.researchgate.net/publication/385630874_On_properties_of_Schmidt_Decomposition\\">10.13140/RG.2.2.19022.47687</a>, 2024\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Schmidt Decomposition of Multipartite states\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://arxiv.org/abs/2411.02473\\">CoRR abs/2411.02473 (2024)</a>, <a href=\\"https://www.researchgate.net/publication/385491083_Schmidt_Decomposition_of_Multipartite_States\\">10.13140/RG.2.2.19713.88162</a>, 2024\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Schmidt Decomposition of Quadripartite states\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://www.researchgate.net/publication/385490959_Schmidt_Decomposition_of_Quadripartite_States\\">10.13140/RG.2.2.26424.76807</a>, 2024\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Schmidt Decomposition of Tripartite states\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://www.researchgate.net/publication/385491145_Schmidt_Decomposition_of_Tripartite_States\\">10.13140/RG.2.2.24747.04648</a>, 2024\\r\\n            </p>\\r\\n        </Paper>\\r\\n    </section>\\r\\n    \\r\\n    <section>\\r\\n        <h2>Quantum safe-cryptography</h2>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Kanav Gupta, Mithilesh Kumar, Håvard Raddum\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Obtuse Lattice Bases\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://arxiv.org/abs/2009.00384\\">CoRR abs/2009.00384 (2020)</a>\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Faster Lattice Enumeration\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://arxiv.org/abs/1912.01781\\">CoRR abs/1912.01781 (2019)</a>\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Graphs and Self-dual additive codes over GF(4)\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://www.lebesgue.fr/sites/default/files/proceedings_WCC/WCC_2019_paper_24.pdf\\">WCC, 2019</a> \\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Reducing Lattice Enumeration Search Trees\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://www.infocommunications.hu/documents/169298/4647244/InfocomJ_2019_4_All.pdf\\">Infocommunications Journal, 2019</a>\\r\\n            </p>\\r\\n        </Paper>\\r\\n    </section>\\r\\n\\r\\n    <section>\\r\\n        <h2>Kernelization</h2>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Lossy Kernels for Connected Dominating Set on Sparse Graphs\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://epubs.siam.org/doi/10.1137/18M1172508\\">SIAM J. Discret. Math. 33(3): 1743-1771 (2019)</a>, <a href=\\"https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.STACS.2018.29\\">STACS 2018: 29:1-29:15</a>, <a href=\\"https://arxiv.org/abs/1706.09339\\">CoRR abs/1706.09339 (2017)</a>\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar, Daniel Lokshtanov\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                A 2lk Kernel for l-Component Order Connectivity\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.IPEC.2016.20\\">IPEC 2016: 20:1-20:14</a>, <a href=\\"https://arxiv.org/abs/1610.04711\\">CoRR abs/1610.04711 (2016)</a>\\r\\n            </p>\\r\\n        </Paper>\\r\\n    </section>\\r\\n    \\r\\n    <section>\\r\\n        <h2>Parameterized algorithms</h2>\\r\\n        \\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Akash Kumar, Mithilesh Kumar\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Deletion to Induced Matching\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://arxiv.org/abs/2008.09660\\">CoRR abs/2008.09660 (2020)</a>\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                2-CLUB is NP-hard for distance to 2-club cluster graphs\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://doi.org/10.48550/arXiv.1903.05425\\">CoRR abs/1903.05425 (2019)</a>\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar, Daniel Lokshtanov\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Bipartite Tournaments\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://doi.org/10.4230/LIPIcs.FSTTCS.2016.24\\">FSTTCS 2016: 24:1-24:15</a>, <a href=\\"https://doi.org/10.48550/arXiv.2411.02821\\">CoRR abs/2411.02821 (2024)</a>\\r\\n            </p>\\r\\n        </Paper>\\r\\n        <Paper>\\r\\n            <p slot=\\"authors\\">\\r\\n                Mithilesh Kumar, Daniel Lokshtanov\\r\\n            </p>\\r\\n            <p slot=\\"title\\">\\r\\n                Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments\\r\\n            </p>\\r\\n            <p slot=\\"venue\\">\\r\\n                <a href=\\"https://doi.org/10.4230/LIPIcs.STACS.2016.49\\">STACS 2016: 49:1-49:13</a>, <a href=\\"https://doi.org/10.48550/arXiv.1510.07676\\">CoRR abs/1510.07676 (2015)</a>\\r\\n            </p>\\r\\n        </Paper>\\r\\n    </section>\\r\\n</div>"],"names":[],"mappings":"AAgBI,oBAAM,CACF,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAC3B,CACA,oBAAM,CACF,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GACpB,CACA,gBAAE,CACE,MAAM,CAAE,KACZ"}`
};
let classType = "grid";
const Papers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pdfReady = false } = $$props;
  if ($$props.pdfReady === void 0 && $$bindings.pdfReady && pdfReady !== void 0)
    $$bindings.pdfReady(pdfReady);
  $$result.css.add(css);
  return `<div class="${"papers " + escape(classType, true) + " " + escape(pdfReady ? "grid" : classType, true) + " svelte-1yilitb"}"><section><h2 data-svelte-h="svelte-1tzb1h3">Quantum Information</h2> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1yilitb" data-svelte-h="svelte-14s85zz"> <a href="https://www.researchgate.net/publication/386416763_A_guide_to_Quantum_Channels">10.13140/RG.2.2.30460.45446</a>, Dec 2024</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1yilitb" data-svelte-h="svelte-nhpir2">A guide to Quantum Channels</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1yilitb" data-svelte-h="svelte-118e6xi">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1yilitb" data-svelte-h="svelte-14u958n"><a href="https://arxiv.org/abs/2411.10710">CoRR abs/2411.10710 (2024)</a>, <a href="https://www.researchgate.net/publication/385864724_Local_Operations_in_Multiparty_Quantum_Systems">10.13140/RG.2.2.10422.51524</a>, 2024</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1yilitb" data-svelte-h="svelte-p2dfkb">Local Operations in Multiparty Quantum Systems</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1yilitb" data-svelte-h="svelte-118e6xi">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1yilitb" data-svelte-h="svelte-1dx5h2d"><a href="https://arxiv.org/abs/2411.05703">CoRR abs/2411.05703 (2024)</a>, <a href="https://www.researchgate.net/publication/385630874_On_properties_of_Schmidt_Decomposition">10.13140/RG.2.2.19022.47687</a>, 2024</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1yilitb" data-svelte-h="svelte-160qqux">On properties of Schmidt Decomposition</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1yilitb" data-svelte-h="svelte-118e6xi">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1yilitb" data-svelte-h="svelte-1accx6y"><a href="https://arxiv.org/abs/2411.02473">CoRR abs/2411.02473 (2024)</a>, <a href="https://www.researchgate.net/publication/385491083_Schmidt_Decomposition_of_Multipartite_States">10.13140/RG.2.2.19713.88162</a>, 2024</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1yilitb" data-svelte-h="svelte-1yq0far">Schmidt Decomposition of Multipartite states</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1yilitb" data-svelte-h="svelte-118e6xi">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1yilitb" data-svelte-h="svelte-hdu3q8"><a href="https://www.researchgate.net/publication/385490959_Schmidt_Decomposition_of_Quadripartite_States">10.13140/RG.2.2.26424.76807</a>, 2024</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1yilitb" data-svelte-h="svelte-xc593c">Schmidt Decomposition of Quadripartite states</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1yilitb" data-svelte-h="svelte-118e6xi">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1yilitb" data-svelte-h="svelte-ymq879"><a href="https://www.researchgate.net/publication/385491145_Schmidt_Decomposition_of_Tripartite_States">10.13140/RG.2.2.24747.04648</a>, 2024</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1yilitb" data-svelte-h="svelte-1g325en">Schmidt Decomposition of Tripartite states</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1yilitb" data-svelte-h="svelte-118e6xi">Mithilesh Kumar</p>`;
    }
  })}</section> <section><h2 data-svelte-h="svelte-1bb1u3">Quantum safe-cryptography</h2> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1yilitb" data-svelte-h="svelte-16j6o7u"><a href="https://arxiv.org/abs/2009.00384">CoRR abs/2009.00384 (2020)</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1yilitb" data-svelte-h="svelte-avemhb">Obtuse Lattice Bases</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1yilitb" data-svelte-h="svelte-1cbvgx">Kanav Gupta, Mithilesh Kumar, Håvard Raddum</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1yilitb" data-svelte-h="svelte-14k4wxq"><a href="https://arxiv.org/abs/1912.01781">CoRR abs/1912.01781 (2019)</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1yilitb" data-svelte-h="svelte-oe97dd">Faster Lattice Enumeration</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1yilitb" data-svelte-h="svelte-118e6xi">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1yilitb" data-svelte-h="svelte-155v0rs"><a href="https://www.lebesgue.fr/sites/default/files/proceedings_WCC/WCC_2019_paper_24.pdf">WCC, 2019</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1yilitb" data-svelte-h="svelte-dojvt0">Graphs and Self-dual additive codes over GF(4)</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1yilitb" data-svelte-h="svelte-7z6611">Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1yilitb" data-svelte-h="svelte-1q1sfu0"><a href="https://www.infocommunications.hu/documents/169298/4647244/InfocomJ_2019_4_All.pdf">Infocommunications Journal, 2019</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1yilitb" data-svelte-h="svelte-1q716t0">Reducing Lattice Enumeration Search Trees</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1yilitb" data-svelte-h="svelte-7z6611">Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum</p>`;
    }
  })}</section> <section><h2 data-svelte-h="svelte-18nrd47">Kernelization</h2> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1yilitb" data-svelte-h="svelte-1lvv6wo"><a href="https://epubs.siam.org/doi/10.1137/18M1172508">SIAM J. Discret. Math. 33(3): 1743-1771 (2019)</a>, <a href="https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.STACS.2018.29">STACS 2018: 29:1-29:15</a>, <a href="https://arxiv.org/abs/1706.09339">CoRR abs/1706.09339 (2017)</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1yilitb" data-svelte-h="svelte-116dqwz">Lossy Kernels for Connected Dominating Set on Sparse Graphs</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1yilitb" data-svelte-h="svelte-1gkejo3">Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1yilitb" data-svelte-h="svelte-1uf0567"><a href="https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.IPEC.2016.20">IPEC 2016: 20:1-20:14</a>, <a href="https://arxiv.org/abs/1610.04711">CoRR abs/1610.04711 (2016)</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1yilitb" data-svelte-h="svelte-pky4va">A 2lk Kernel for l-Component Order Connectivity</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1yilitb" data-svelte-h="svelte-x0yzc2">Mithilesh Kumar, Daniel Lokshtanov</p>`;
    }
  })}</section> <section><h2 data-svelte-h="svelte-1bwh2fv">Parameterized algorithms</h2> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1yilitb" data-svelte-h="svelte-1eowk7s"><a href="https://arxiv.org/abs/2008.09660">CoRR abs/2008.09660 (2020)</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1yilitb" data-svelte-h="svelte-ip51xn">Deletion to Induced Matching</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1yilitb" data-svelte-h="svelte-b7b5vc">Akash Kumar, Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1yilitb" data-svelte-h="svelte-1nxh0ip"><a href="https://doi.org/10.48550/arXiv.1903.05425">CoRR abs/1903.05425 (2019)</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1yilitb" data-svelte-h="svelte-1ryeks5">2-CLUB is NP-hard for distance to 2-club cluster graphs</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1yilitb" data-svelte-h="svelte-118e6xi">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1yilitb" data-svelte-h="svelte-6ti4u9"><a href="https://doi.org/10.4230/LIPIcs.FSTTCS.2016.24">FSTTCS 2016: 24:1-24:15</a>, <a href="https://doi.org/10.48550/arXiv.2411.02821">CoRR abs/2411.02821 (2024)</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1yilitb" data-svelte-h="svelte-117emb3">Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Bipartite Tournaments</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1yilitb" data-svelte-h="svelte-x0yzc2">Mithilesh Kumar, Daniel Lokshtanov</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="venue" class="svelte-1yilitb" data-svelte-h="svelte-yjo1ci"><a href="https://doi.org/10.4230/LIPIcs.STACS.2016.49">STACS 2016: 49:1-49:13</a>, <a href="https://doi.org/10.48550/arXiv.1510.07676">CoRR abs/1510.07676 (2015)</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-1yilitb" data-svelte-h="svelte-1n2mrn7">Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-1yilitb" data-svelte-h="svelte-x0yzc2">Mithilesh Kumar, Daniel Lokshtanov</p>`;
    }
  })}</section></div>`;
});
export {
  Papers as P
};
