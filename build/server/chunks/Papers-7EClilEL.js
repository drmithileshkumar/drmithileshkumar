import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-GucKmJ_k.js';

const css$1 = {
  code: ".paper.svelte-1rnqfn2{display:grid;grid-template-rows:auto auto auto;margin-bottom:2em;color:currentColor}.authors.svelte-1rnqfn2{color:currentColor;text-decoration:none;font-weight:300;font-size:0.9em;opacity:0.8}.title.svelte-1rnqfn2{font-weight:700;font-size:1.1em}.venue.svelte-1rnqfn2{color:currentColor;font-size:0.8em;opacity:0.9}",
  map: null
};
const Paper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="paper svelte-1rnqfn2"><div class="authors svelte-1rnqfn2">${slots.authors ? slots.authors({}) : ``}</div> <div class="title svelte-1rnqfn2">${slots.title ? slots.title({}) : ``}</div> <div class="venue svelte-1rnqfn2">${slots.venue ? slots.venue({}) : ``}</div></div>`;
});
const css = {
  code: ".grid.svelte-7pie2m{display:grid;grid-template-columns:1fr 1fr}.flex.svelte-7pie2m{display:flex;flex-direction:column}p.svelte-7pie2m{margin:0.2em}",
  map: null
};
const Papers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classType;
  let { pdfReady = false } = $$props;
  if ($$props.pdfReady === void 0 && $$bindings.pdfReady && pdfReady !== void 0)
    $$bindings.pdfReady(pdfReady);
  $$result.css.add(css);
  classType = "flex";
  return `<div class="${"papers " + escape(classType, true) + " " + escape(pdfReady ? "flex" : classType, true) + " svelte-7pie2m"}"><h2 data-svelte-h="svelte-2yos6n">Journal</h2> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
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
//# sourceMappingURL=Papers-7EClilEL.js.map
