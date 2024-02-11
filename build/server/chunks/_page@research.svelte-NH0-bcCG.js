import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import './utils-TYqgk8Fj.js';

/* empty css                                                        */
const css$1 = {
  code: ".research.svelte-1ggrs5p{line-height:1.45;word-spacing:0.1em}",
  map: null
};
const Research = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<article class="research svelte-1ggrs5p" data-svelte-h="svelte-ygg7yf"> <p>My research will focus in the broader context of quantum computing. Some of the work started during my Post-doctoral research in Simula-UiB. I started working with problems related to quantum-safe cryptography, in particular, the lattice approach. Lattice-based cryptography is a possible alternative to RSA. Some lattice-based cryptosystems seem to be safe under quantum-algorithmic attacks and the computational cost of these systems is not too far off from that of RSA-based cryptosystems.</p> <p>Apart from above work, I would like to focus on quantum circuits, in particular understanding the classification of unitary matrices. In general, the decomposition of a unitary matrix into universal set of base unitary matrices is exponential in the number of qubits. The aim of this approach is to classify matrices that would lead to polynomial-size decomposition.</p> <p>Another interesting area of work is understanding entanglement as a resource. In quantum communication algorithms such as quantum teleportation, 2 classical bits and an entangled pair is needed to complete the task. I would like to understand such class of communication protocols and their lower limit of communition resources.</p> <p>To further the research in quantum computing, it is essential that a research group is constructed here in India. My motivation to work in this field originated back in 2005 when I was a masters student in IIT Kanpur. It is high-time now that India should have many teams working and collaborating in this field.</p></article>`;
});
const css = {
  code: ".container.svelte-nmqztf{padding:0 1em}",
  map: null
};
const Page_research = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-d6qc0s_START -->${$$result.title = `<title>Dr Mithilesh Kumar</title>`, ""}<!-- HEAD_svelte-d6qc0s_END -->`, ""} <div class="container svelte-nmqztf"><h1 data-svelte-h="svelte-wytmuy">Future Research</h1> ${validate_component(Research, "Research").$$render($$result, {}, {}, {})} </div>`;
});

export { Page_research as default };
//# sourceMappingURL=_page@research.svelte-NH0-bcCG.js.map
