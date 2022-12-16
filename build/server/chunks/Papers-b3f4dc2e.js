import { c as create_ssr_component, e as escape, v as validate_component } from './index-d64f493b.js';

const css$1 = {
  code: ".paper.svelte-1mhki6f{display:grid;grid-template-rows:auto auto auto;margin-bottom:2em}.authors.svelte-1mhki6f{color:#7d848a;text-decoration:none;font-weight:300;font-size:0.9em}.title.svelte-1mhki6f{font-weight:700;font-size:1.1em}.venue.svelte-1mhki6f{color:#7d848a;font-size:0.8em}",
  map: null
};
const Paper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"paper svelte-1mhki6f"}"><div class="${"authors svelte-1mhki6f"}">${slots.authors ? slots.authors({}) : ``}</div>
    <div class="${"title svelte-1mhki6f"}">${slots.title ? slots.title({}) : ``}</div>
    <div class="${"venue svelte-1mhki6f"}">${slots.venue ? slots.venue({}) : ``}</div></div>`;
});
const css = {
  code: ".grid.svelte-7pie2m{display:grid;grid-template-columns:1fr 1fr}.flex.svelte-7pie2m{display:flex;flex-direction:column}p.svelte-7pie2m{margin:0.2em}",
  map: null
};
const Papers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classType;
  $$result.css.add(css);
  classType = "grid";
  return `<div class="${"papers " + escape(classType, true) + " svelte-7pie2m"}">${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-7pie2m"}">CoRR abs/2008.09660 (2020)
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-7pie2m"}">Deletion to Induced Matching
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-7pie2m"}">Akash Kumar, Mithilesh Kumar
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-7pie2m"}">CoRR abs/2009.00384 (2020)
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-7pie2m"}">Obtuse Lattice Bases
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-7pie2m"}">Kanav Gupta, Mithilesh Kumar, Håvard Raddum
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-7pie2m"}">WCC, 2019
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-7pie2m"}">Graphs and Self-dual additive codes over GF(4)
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-7pie2m"}">Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-7pie2m"}">Infocommunications Journal, 2019
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-7pie2m"}">Reducing Lattice Enumeration Search Trees
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-7pie2m"}">Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-7pie2m"}">CoRR abs/1903.05425 (2019)
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-7pie2m"}">2-CLUB is NP-hard for distance to 2-club cluster graphs
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-7pie2m"}">Mithilesh Kumar
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-7pie2m"}">CoRR abs/1912.01781 (2019)
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-7pie2m"}">Faster Lattice Enumeration
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-7pie2m"}">Mithilesh Kumar
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-7pie2m"}">SIAM J. Discret. Math. 33(3): 1743-1771 (2019)
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-7pie2m"}">Lossy Kernels for Connected Dominating Set on Sparse Graphs
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-7pie2m"}">Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-7pie2m"}">STACS 2018: 29:1-29:15
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-7pie2m"}">Lossy Kernels for Connected Dominating Set on Sparse Graphs
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-7pie2m"}">Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-7pie2m"}">CoRR abs/1706.09339 (2017)
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-7pie2m"}">Lossy Kernels for Connected Dominating Set on Sparse Graphs
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-7pie2m"}">Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-7pie2m"}">FSTTCS 2016: 24:1-24:15
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-7pie2m"}">Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Bipartite Tournaments
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-7pie2m"}">Mithilesh Kumar, Daniel Lokshtanov
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-7pie2m"}">IPEC 2016: 20:1-20:14
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-7pie2m"}">A 2lk Kernel for l-Component Order Connectivity
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-7pie2m"}">Mithilesh Kumar, Daniel Lokshtanov
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-7pie2m"}">STACS 2016: 49:1-49:13
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-7pie2m"}">Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-7pie2m"}">Mithilesh Kumar, Daniel Lokshtanov
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-7pie2m"}">CoRR abs/1610.04711 (2016)
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-7pie2m"}">A 2ℓk Kernel for ℓ-Component Order Connectivity
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-7pie2m"}">Mithilesh Kumar, Daniel Lokshtanov
        </p>`;
    }
  })}
    ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<p slot="${"venue"}" class="${"svelte-7pie2m"}">CoRR abs/1510.07676 (2015)
        </p>`;
    },
    title: () => {
      return `<p slot="${"title"}" class="${"svelte-7pie2m"}">Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments
        </p>`;
    },
    authors: () => {
      return `<p slot="${"authors"}" class="${"svelte-7pie2m"}">Mithilesh Kumar, Daniel Lokshtanov
        </p>`;
    }
  })}</div>`;
});

export { Papers as P };
//# sourceMappingURL=Papers-b3f4dc2e.js.map
