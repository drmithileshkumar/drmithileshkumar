import { c as create_ssr_component, v as validate_component } from './ssr2-CDgUAJs6.js';
import { P as Paper } from './Paper2-DwFUsx4R.js';
import './utils-DhkojCd_.js';

/* empty css                                                      */
const css = {
  code: ".container.svelte-11lokio{padding:0 1em}h1.svelte-11lokio{font-size:3em;margin:0}h2.svelte-11lokio{font-size:2em;margin:0}p.svelte-11lokio{margin:0.2em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    import Papers from \\"$lib/components/Papers.svelte\\";\\r\\n    import Paper from '$lib/components/Paper.svelte';\\r\\n    let W = 500;\\r\\n<\/script>\\r\\n<style>\\r\\n    .container {\\r\\n        padding: 0 1em;\\r\\n    }\\r\\n    h1 {\\r\\n        font-size: 3em;\\r\\n        margin: 0;\\r\\n    }\\r\\n    h2 {\\r\\n        font-size: 2em;\\r\\n        margin: 0;\\r\\n    }\\r\\n    p {\\r\\n        margin: 0.2em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head><title>Dr Mithilesh Kumar</title></svelte:head>\\r\\n<div class=\\"container\\">\\r\\n    <h1>Research Papers</h1>\\r\\n    <div class=\\"papers\\">\\r\\n        <section>\\r\\n            <h2>Quantum Information</h2>\\r\\n            <Paper>\\r\\n                <p slot=\\"authors\\">\\r\\n                    Mithilesh Kumar\\r\\n                </p>\\r\\n                <p slot=\\"title\\">\\r\\n                    A guide to Quantum Channels\\r\\n                </p>\\r\\n                <p slot=\\"venue\\">\\r\\n                    <!-- <a href=\\"https://arxiv.org/abs/2411.10710\\">CoRR abs/2411.10710 (2024)</a>,--> \\r\\n                     <a href=\\"https://www.researchgate.net/publication/386416763_A_guide_to_Quantum_Channels\\">10.13140/RG.2.2.30460.45446</a>, Dec 2024\\r\\n                </p>\\r\\n                <p slot=\\"status\\">\\r\\n                    In progress.\\r\\n                </p>\\r\\n            </Paper>\\r\\n            <Paper>\\r\\n                <p slot=\\"authors\\">\\r\\n                    Mithilesh Kumar\\r\\n                </p>\\r\\n                <p slot=\\"title\\">\\r\\n                    Local Operations in Multiparty Quantum Systems\\r\\n                </p>\\r\\n                <p slot=\\"venue\\">\\r\\n                    <a href=\\"https://arxiv.org/abs/2411.10710\\">CoRR abs/2411.10710 (2024)</a>, <a href=\\"https://www.researchgate.net/publication/385864724_Local_Operations_in_Multiparty_Quantum_Systems\\">10.13140/RG.2.2.10422.51524</a>, 2024\\r\\n                </p>\\r\\n                <p slot=\\"status\\">\\r\\n                    <em>Submitted</em> to Quantum Science and Technology\\r\\n                </p>\\r\\n            </Paper>\\r\\n            <Paper>\\r\\n                <p slot=\\"authors\\">\\r\\n                    Mithilesh Kumar\\r\\n                </p>\\r\\n                <p slot=\\"title\\">\\r\\n                    On properties of Schmidt Decomposition\\r\\n                </p>\\r\\n                <p slot=\\"venue\\">\\r\\n                    <a href=\\"https://arxiv.org/abs/2411.05703\\">CoRR abs/2411.05703 (2024)</a>, <a href=\\"https://www.researchgate.net/publication/385630874_On_properties_of_Schmidt_Decomposition\\">10.13140/RG.2.2.19022.47687</a>, 2024\\r\\n                </p>\\r\\n                <p slot=\\"status\\">\\r\\n                    <em>Submitted</em> to Quantum Science and Technology\\r\\n                </p>\\r\\n            </Paper>\\r\\n            <Paper>\\r\\n                <p slot=\\"authors\\">\\r\\n                    Mithilesh Kumar\\r\\n                </p>\\r\\n                <p slot=\\"title\\">\\r\\n                    Schmidt Decomposition of Multipartite states\\r\\n                </p>\\r\\n                <p slot=\\"venue\\">\\r\\n                    <a href=\\"https://arxiv.org/abs/2411.02473\\">CoRR abs/2411.02473 (2024)</a>, <a href=\\"https://www.researchgate.net/publication/385491083_Schmidt_Decomposition_of_Multipartite_States\\">10.13140/RG.2.2.19713.88162</a>, 2024\\r\\n                </p>\\r\\n                <p slot=\\"status\\">\\r\\n                    <em>Submitted</em> to Quantum Science and Technology\\r\\n                </p>\\r\\n            </Paper>\\r\\n            <Paper>\\r\\n                <p slot=\\"authors\\">\\r\\n                    Mithilesh Kumar\\r\\n                </p>\\r\\n                <p slot=\\"title\\">\\r\\n                    Schmidt Decomposition of Quadripartite states\\r\\n                </p>\\r\\n                <p slot=\\"venue\\">\\r\\n                    <a href=\\"https://www.researchgate.net/publication/385490959_Schmidt_Decomposition_of_Quadripartite_States\\">10.13140/RG.2.2.26424.76807</a>, 2024\\r\\n                </p>\\r\\n                <p slot=\\"status\\">\\r\\n                    Combined with Multipartite\\r\\n                </p>\\r\\n            </Paper>\\r\\n            <Paper>\\r\\n                <p slot=\\"authors\\">\\r\\n                    Mithilesh Kumar\\r\\n                </p>\\r\\n                <p slot=\\"title\\">\\r\\n                    Schmidt Decomposition of Tripartite states\\r\\n                </p>\\r\\n                <p slot=\\"venue\\">\\r\\n                    <a href=\\"https://www.researchgate.net/publication/385491145_Schmidt_Decomposition_of_Tripartite_States\\">10.13140/RG.2.2.24747.04648</a>, 2024\\r\\n                </p>\\r\\n                <p slot=\\"status\\">\\r\\n                    Combined with Multipartite\\r\\n                </p>\\r\\n            </Paper>\\r\\n        </section>\\r\\n        \\r\\n        <section>\\r\\n            <h2>Quantum safe-cryptography</h2>\\r\\n            <Paper>\\r\\n                <p slot=\\"authors\\">\\r\\n                    Kanav Gupta, Mithilesh Kumar, Håvard Raddum\\r\\n                </p>\\r\\n                <p slot=\\"title\\">\\r\\n                    Obtuse Lattice Bases\\r\\n                </p>\\r\\n                <p slot=\\"venue\\">\\r\\n                    <a href=\\"https://arxiv.org/abs/2009.00384\\">CoRR abs/2009.00384 (2020)</a>\\r\\n                </p>\\r\\n                <p slot=\\"status\\">\\r\\n                    <em>preprint</em>\\r\\n                </p>\\r\\n            </Paper>\\r\\n            <Paper>\\r\\n                <p slot=\\"authors\\">\\r\\n                    Mithilesh Kumar\\r\\n                </p>\\r\\n                <p slot=\\"title\\">\\r\\n                    Faster Lattice Enumeration\\r\\n                </p>\\r\\n                <p slot=\\"venue\\">\\r\\n                    <a href=\\"https://arxiv.org/abs/1912.01781\\">CoRR abs/1912.01781 (2019)</a>\\r\\n                </p>\\r\\n                <p slot=\\"status\\">\\r\\n                    <em>preprint</em>\\r\\n                </p>\\r\\n            </Paper>\\r\\n            <Paper>\\r\\n                <p slot=\\"authors\\">\\r\\n                    Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum\\r\\n                </p>\\r\\n                <p slot=\\"title\\">\\r\\n                    Graphs and Self-dual additive codes over GF(4)\\r\\n                </p>\\r\\n                <p slot=\\"venue\\">\\r\\n                    <a href=\\"https://www.lebesgue.fr/sites/default/files/proceedings_WCC/WCC_2019_paper_24.pdf\\">WCC, 2019</a> \\r\\n                </p>\\r\\n                <p slot=\\"status\\">\\r\\n                    <em>Reviewed</em>\\r\\n                </p>\\r\\n            </Paper>\\r\\n            <Paper>\\r\\n                <p slot=\\"authors\\">\\r\\n                    Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum\\r\\n                </p>\\r\\n                <p slot=\\"title\\">\\r\\n                    Reducing Lattice Enumeration Search Trees\\r\\n                </p>\\r\\n                <p slot=\\"venue\\">\\r\\n                    <a href=\\"https://www.infocommunications.hu/documents/169298/4647244/InfocomJ_2019_4_All.pdf\\">Infocommunications Journal, 2019</a>\\r\\n                </p>\\r\\n                <p slot=\\"status\\">\\r\\n                    <em>Reviewed</em>\\r\\n                </p>\\r\\n            </Paper>\\r\\n        </section>\\r\\n    \\r\\n        <section>\\r\\n            <h2>Kernelization</h2>\\r\\n            <Paper>\\r\\n                <p slot=\\"authors\\">\\r\\n                    Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz\\r\\n                </p>\\r\\n                <p slot=\\"title\\">\\r\\n                    Lossy Kernels for Connected Dominating Set on Sparse Graphs\\r\\n                </p>\\r\\n                <p slot=\\"venue\\">\\r\\n                    <a href=\\"https://epubs.siam.org/doi/10.1137/18M1172508\\">SIAM J. Discret. Math. 33(3): 1743-1771 (2019)</a>, <a href=\\"https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.STACS.2018.29\\">STACS 2018: 29:1-29:15</a>, <a href=\\"https://arxiv.org/abs/1706.09339\\">CoRR abs/1706.09339 (2017)</a>\\r\\n                </p>\\r\\n                <p slot=\\"status\\">\\r\\n                    <em>Reviewed</em>\\r\\n                </p>\\r\\n            </Paper>\\r\\n            <Paper>\\r\\n                <p slot=\\"authors\\">\\r\\n                    Mithilesh Kumar, Daniel Lokshtanov\\r\\n                </p>\\r\\n                <p slot=\\"title\\">\\r\\n                    A 2lk Kernel for l-Component Order Connectivity\\r\\n                </p>\\r\\n                <p slot=\\"venue\\">\\r\\n                    <a href=\\"https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.IPEC.2016.20\\">IPEC 2016: 20:1-20:14</a>, <a href=\\"https://arxiv.org/abs/1610.04711\\">CoRR abs/1610.04711 (2016)</a>\\r\\n                </p>\\r\\n                <p slot=\\"status\\">\\r\\n                    <em>Reviewed</em>\\r\\n                </p>\\r\\n            </Paper>\\r\\n        </section>\\r\\n        \\r\\n        <section>\\r\\n            <h2>Parameterized algorithms</h2>\\r\\n            \\r\\n            <Paper>\\r\\n                <p slot=\\"authors\\">\\r\\n                    Akash Kumar, Mithilesh Kumar\\r\\n                </p>\\r\\n                <p slot=\\"title\\">\\r\\n                    Deletion to Induced Matching\\r\\n                </p>\\r\\n                <p slot=\\"venue\\">\\r\\n                    <a href=\\"https://arxiv.org/abs/2008.09660\\">CoRR abs/2008.09660 (2020)</a>\\r\\n                </p>\\r\\n                <p slot=\\"status\\">\\r\\n                    <em>preprint</em>\\r\\n                </p>\\r\\n            </Paper>\\r\\n            <Paper>\\r\\n                <p slot=\\"authors\\">\\r\\n                    Mithilesh Kumar\\r\\n                </p>\\r\\n                <p slot=\\"title\\">\\r\\n                    2-CLUB is NP-hard for distance to 2-club cluster graphs\\r\\n                </p>\\r\\n                <p slot=\\"venue\\">\\r\\n                    <a href=\\"https://doi.org/10.48550/arXiv.1903.05425\\">CoRR abs/1903.05425 (2019)</a>\\r\\n                </p>\\r\\n                <p slot=\\"status\\">\\r\\n                    <em>preprint</em>\\r\\n                </p>\\r\\n            </Paper>\\r\\n            <Paper>\\r\\n                <p slot=\\"authors\\">\\r\\n                    Mithilesh Kumar, Daniel Lokshtanov\\r\\n                </p>\\r\\n                <p slot=\\"title\\">\\r\\n                    Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Bipartite Tournaments\\r\\n                </p>\\r\\n                <p slot=\\"venue\\">\\r\\n                    <a href=\\"https://doi.org/10.4230/LIPIcs.FSTTCS.2016.24\\">FSTTCS 2016: 24:1-24:15</a>, <a href=\\"https://doi.org/10.48550/arXiv.2411.02821\\">CoRR abs/2411.02821 (2024)</a>\\r\\n                </p>\\r\\n                <p slot=\\"status\\">\\r\\n                    <em>Reviewd</em> \\r\\n                </p>\\r\\n            </Paper>\\r\\n            <Paper>\\r\\n                <p slot=\\"authors\\">\\r\\n                    Mithilesh Kumar, Daniel Lokshtanov\\r\\n                </p>\\r\\n                <p slot=\\"title\\">\\r\\n                    Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments\\r\\n                </p>\\r\\n                <p slot=\\"venue\\">\\r\\n                    <a href=\\"https://doi.org/10.4230/LIPIcs.STACS.2016.49\\">STACS 2016: 49:1-49:13</a>, <a href=\\"https://doi.org/10.48550/arXiv.1510.07676\\">CoRR abs/1510.07676 (2015)</a>\\r\\n                </p>\\r\\n                <p slot=\\"status\\">\\r\\n                    <em>Reviewed</em> \\r\\n                </p>\\r\\n            </Paper>\\r\\n        </section>\\r\\n    </div>\\r\\n</div>\\r\\n\\r\\n\\r\\n"],"names":[],"mappings":"AAMI,yBAAW,CACP,OAAO,CAAE,CAAC,CAAC,GACf,CACA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,CACZ,CACA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,CACZ,CACA,gBAAE,CACE,MAAM,CAAE,KACZ"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-d6qc0s_START -->${$$result.title = `<title>Dr Mithilesh Kumar</title>`, ""}<!-- HEAD_svelte-d6qc0s_END -->`, ""} <div class="container svelte-11lokio"><h1 class="svelte-11lokio" data-svelte-h="svelte-1jtii1e">Research Papers</h1> <div class="papers"><section><h2 class="svelte-11lokio" data-svelte-h="svelte-1tzb1h3">Quantum Information</h2> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    status: () => {
      return `<p slot="status" class="svelte-11lokio" data-svelte-h="svelte-1p5xj3x">In progress.</p>`;
    },
    venue: () => {
      return `<p slot="venue" class="svelte-11lokio" data-svelte-h="svelte-1b11s2n"> <a href="https://www.researchgate.net/publication/386416763_A_guide_to_Quantum_Channels">10.13140/RG.2.2.30460.45446</a>, Dec 2024</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-11lokio" data-svelte-h="svelte-gvh5im">A guide to Quantum Channels</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-11lokio" data-svelte-h="svelte-ot4ryu">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    status: () => {
      return `<p slot="status" class="svelte-11lokio" data-svelte-h="svelte-1lc9g8u"><em>Submitted</em> to Quantum Science and Technology</p>`;
    },
    venue: () => {
      return `<p slot="venue" class="svelte-11lokio" data-svelte-h="svelte-1jhogjr"><a href="https://arxiv.org/abs/2411.10710">CoRR abs/2411.10710 (2024)</a>, <a href="https://www.researchgate.net/publication/385864724_Local_Operations_in_Multiparty_Quantum_Systems">10.13140/RG.2.2.10422.51524</a>, 2024</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-11lokio" data-svelte-h="svelte-ycsrgr">Local Operations in Multiparty Quantum Systems</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-11lokio" data-svelte-h="svelte-ot4ryu">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    status: () => {
      return `<p slot="status" class="svelte-11lokio" data-svelte-h="svelte-1lc9g8u"><em>Submitted</em> to Quantum Science and Technology</p>`;
    },
    venue: () => {
      return `<p slot="venue" class="svelte-11lokio" data-svelte-h="svelte-1mpar39"><a href="https://arxiv.org/abs/2411.05703">CoRR abs/2411.05703 (2024)</a>, <a href="https://www.researchgate.net/publication/385630874_On_properties_of_Schmidt_Decomposition">10.13140/RG.2.2.19022.47687</a>, 2024</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-11lokio" data-svelte-h="svelte-f65k6x">On properties of Schmidt Decomposition</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-11lokio" data-svelte-h="svelte-ot4ryu">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    status: () => {
      return `<p slot="status" class="svelte-11lokio" data-svelte-h="svelte-1lc9g8u"><em>Submitted</em> to Quantum Science and Technology</p>`;
    },
    venue: () => {
      return `<p slot="venue" class="svelte-11lokio" data-svelte-h="svelte-1i2fmdm"><a href="https://arxiv.org/abs/2411.02473">CoRR abs/2411.02473 (2024)</a>, <a href="https://www.researchgate.net/publication/385491083_Schmidt_Decomposition_of_Multipartite_States">10.13140/RG.2.2.19713.88162</a>, 2024</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-11lokio" data-svelte-h="svelte-i1jjoz">Schmidt Decomposition of Multipartite states</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-11lokio" data-svelte-h="svelte-ot4ryu">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    status: () => {
      return `<p slot="status" class="svelte-11lokio" data-svelte-h="svelte-1ydd71e">Combined with Multipartite</p>`;
    },
    venue: () => {
      return `<p slot="venue" class="svelte-11lokio" data-svelte-h="svelte-19qc4ww"><a href="https://www.researchgate.net/publication/385490959_Schmidt_Decomposition_of_Quadripartite_States">10.13140/RG.2.2.26424.76807</a>, 2024</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-11lokio" data-svelte-h="svelte-sifya0">Schmidt Decomposition of Quadripartite states</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-11lokio" data-svelte-h="svelte-ot4ryu">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    status: () => {
      return `<p slot="status" class="svelte-11lokio" data-svelte-h="svelte-1ydd71e">Combined with Multipartite</p>`;
    },
    venue: () => {
      return `<p slot="venue" class="svelte-11lokio" data-svelte-h="svelte-ysetxh"><a href="https://www.researchgate.net/publication/385491145_Schmidt_Decomposition_of_Tripartite_States">10.13140/RG.2.2.24747.04648</a>, 2024</p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-11lokio" data-svelte-h="svelte-zty3tr">Schmidt Decomposition of Tripartite states</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-11lokio" data-svelte-h="svelte-ot4ryu">Mithilesh Kumar</p>`;
    }
  })}</section> <section><h2 class="svelte-11lokio" data-svelte-h="svelte-1bb1u3">Quantum safe-cryptography</h2> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    status: () => {
      return `<p slot="status" class="svelte-11lokio" data-svelte-h="svelte-ot3vzk"><em>preprint</em></p>`;
    },
    venue: () => {
      return `<p slot="venue" class="svelte-11lokio" data-svelte-h="svelte-mkzkm2"><a href="https://arxiv.org/abs/2009.00384">CoRR abs/2009.00384 (2020)</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-11lokio" data-svelte-h="svelte-1y11cgf">Obtuse Lattice Bases</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-11lokio" data-svelte-h="svelte-wp807l">Kanav Gupta, Mithilesh Kumar, Håvard Raddum</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    status: () => {
      return `<p slot="status" class="svelte-11lokio" data-svelte-h="svelte-ot3vzk"><em>preprint</em></p>`;
    },
    venue: () => {
      return `<p slot="venue" class="svelte-11lokio" data-svelte-h="svelte-tcuzzy"><a href="https://arxiv.org/abs/1912.01781">CoRR abs/1912.01781 (2019)</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-11lokio" data-svelte-h="svelte-b0y0sx">Faster Lattice Enumeration</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-11lokio" data-svelte-h="svelte-ot4ryu">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    status: () => {
      return `<p slot="status" class="svelte-11lokio" data-svelte-h="svelte-dew5d9"><em>Reviewed</em></p>`;
    },
    venue: () => {
      return `<p slot="venue" class="svelte-11lokio" data-svelte-h="svelte-72qjzc"><a href="https://www.lebesgue.fr/sites/default/files/proceedings_WCC/WCC_2019_paper_24.pdf">WCC, 2019</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-11lokio" data-svelte-h="svelte-1ubltqc">Graphs and Self-dual additive codes over GF(4)</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-11lokio" data-svelte-h="svelte-770hdx">Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    status: () => {
      return `<p slot="status" class="svelte-11lokio" data-svelte-h="svelte-dew5d9"><em>Reviewed</em></p>`;
    },
    venue: () => {
      return `<p slot="venue" class="svelte-11lokio" data-svelte-h="svelte-hpj12g"><a href="https://www.infocommunications.hu/documents/169298/4647244/InfocomJ_2019_4_All.pdf">Infocommunications Journal, 2019</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-11lokio" data-svelte-h="svelte-p59sj8">Reducing Lattice Enumeration Search Trees</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-11lokio" data-svelte-h="svelte-770hdx">Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum</p>`;
    }
  })}</section> <section><h2 class="svelte-11lokio" data-svelte-h="svelte-18nrd47">Kernelization</h2> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    status: () => {
      return `<p slot="status" class="svelte-11lokio" data-svelte-h="svelte-dew5d9"><em>Reviewed</em></p>`;
    },
    venue: () => {
      return `<p slot="venue" class="svelte-11lokio" data-svelte-h="svelte-12igu60"><a href="https://epubs.siam.org/doi/10.1137/18M1172508">SIAM J. Discret. Math. 33(3): 1743-1771 (2019)</a>, <a href="https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.STACS.2018.29">STACS 2018: 29:1-29:15</a>, <a href="https://arxiv.org/abs/1706.09339">CoRR abs/1706.09339 (2017)</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-11lokio" data-svelte-h="svelte-x0kqyr">Lossy Kernels for Connected Dominating Set on Sparse Graphs</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-11lokio" data-svelte-h="svelte-1b30c5v">Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    status: () => {
      return `<p slot="status" class="svelte-11lokio" data-svelte-h="svelte-dew5d9"><em>Reviewed</em></p>`;
    },
    venue: () => {
      return `<p slot="venue" class="svelte-11lokio" data-svelte-h="svelte-174w9wv"><a href="https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.IPEC.2016.20">IPEC 2016: 20:1-20:14</a>, <a href="https://arxiv.org/abs/1610.04711">CoRR abs/1610.04711 (2016)</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-11lokio" data-svelte-h="svelte-1h4pd0m">A 2lk Kernel for l-Component Order Connectivity</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-11lokio" data-svelte-h="svelte-11ugndu">Mithilesh Kumar, Daniel Lokshtanov</p>`;
    }
  })}</section> <section><h2 class="svelte-11lokio" data-svelte-h="svelte-1bwh2fv">Parameterized algorithms</h2> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    status: () => {
      return `<p slot="status" class="svelte-11lokio" data-svelte-h="svelte-ot3vzk"><em>preprint</em></p>`;
    },
    venue: () => {
      return `<p slot="venue" class="svelte-11lokio" data-svelte-h="svelte-1n3m2xk"><a href="https://arxiv.org/abs/2008.09660">CoRR abs/2008.09660 (2020)</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-11lokio" data-svelte-h="svelte-1vbqb63">Deletion to Induced Matching</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-11lokio" data-svelte-h="svelte-1r7abnc">Akash Kumar, Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    status: () => {
      return `<p slot="status" class="svelte-11lokio" data-svelte-h="svelte-ot3vzk"><em>preprint</em></p>`;
    },
    venue: () => {
      return `<p slot="venue" class="svelte-11lokio" data-svelte-h="svelte-xx7y75"><a href="https://doi.org/10.48550/arXiv.1903.05425">CoRR abs/1903.05425 (2019)</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-11lokio" data-svelte-h="svelte-l2aoc5">2-CLUB is NP-hard for distance to 2-club cluster graphs</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-11lokio" data-svelte-h="svelte-ot4ryu">Mithilesh Kumar</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    status: () => {
      return `<p slot="status" class="svelte-11lokio" data-svelte-h="svelte-yenr5m"><em>Reviewd</em></p>`;
    },
    venue: () => {
      return `<p slot="venue" class="svelte-11lokio" data-svelte-h="svelte-1l3muwx"><a href="https://doi.org/10.4230/LIPIcs.FSTTCS.2016.24">FSTTCS 2016: 24:1-24:15</a>, <a href="https://doi.org/10.48550/arXiv.2411.02821">CoRR abs/2411.02821 (2024)</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-11lokio" data-svelte-h="svelte-9gv7fz">Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Bipartite Tournaments</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-11lokio" data-svelte-h="svelte-11ugndu">Mithilesh Kumar, Daniel Lokshtanov</p>`;
    }
  })} ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    status: () => {
      return `<p slot="status" class="svelte-11lokio" data-svelte-h="svelte-1jsbapx"><em>Reviewed</em></p>`;
    },
    venue: () => {
      return `<p slot="venue" class="svelte-11lokio" data-svelte-h="svelte-1usbis2"><a href="https://doi.org/10.4230/LIPIcs.STACS.2016.49">STACS 2016: 49:1-49:13</a>, <a href="https://doi.org/10.48550/arXiv.1510.07676">CoRR abs/1510.07676 (2015)</a></p>`;
    },
    title: () => {
      return `<p slot="title" class="svelte-11lokio" data-svelte-h="svelte-fcxi0j">Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments</p>`;
    },
    authors: () => {
      return `<p slot="authors" class="svelte-11lokio" data-svelte-h="svelte-11ugndu">Mithilesh Kumar, Daniel Lokshtanov</p>`;
    }
  })}</section></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Tq59pIYZ.js.map
