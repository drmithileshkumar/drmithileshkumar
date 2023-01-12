import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, v as validate_component } from "../../../../chunks/index.js";
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from "../../../../chunks/stores2.js";
/* empty css                                                         *//* empty css                                                        */import { p as page } from "../../../../chunks/stores.js";
import { T as TeX } from "../../../../chunks/constants.js";
import { I as Item, P, a as Image, L as Li } from "../../../../chunks/Image.js";
import { H as H2, a as H3 } from "../../../../chunks/H3.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-1sxsvd{position:relative;padding:0.5em}.absolute.svelte-1sxsvd{margin:auto;width:100%;height:90vh;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-1sxsvd::-webkit-scrollbar{width:0;height:0}.pad.svelte-1sxsvd{min-height:150px}.thumbnail.svelte-1sxsvd{display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-1sxsvd{background:radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));color:rgb(246, 246, 246);text-shadow:1px 1px 3px rgb(4, 4, 4);box-shadow:1px 1px 3px rgb(129, 128, 128);padding:1em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentSlide, $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $$unsubscribe_selectedSection;
  let $$unsubscribe_selectedChapter;
  let $page, $$unsubscribe_page;
  let $presentationMode, $$unsubscribe_presentationMode;
  let $presentation, $$unsubscribe_presentation;
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_selectedSection = subscribe(selectedSection, (value) => value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => $presentation = value);
  $$result.css.add(css);
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  $$unsubscribe_page();
  $$unsubscribe_presentationMode();
  $$unsubscribe_presentation();
  return `${$$result.head += `<!-- HEAD_svelte-mltdyf_START -->${$$result.title = `<title>Quantum Teleportation</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"Quantum Teleportation"}"><!-- HEAD_svelte-mltdyf_END -->`, ""}
    <article class="${["svelte-1sxsvd", $presentationMode ? "absolute" : ""].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="${"thumbnail svelte-1sxsvd"}"><h3>Quantum Teleportation</h3>
                <img class="${"statement svelte-1sxsvd"}" width="${"100%"}" src="${"/notes/quantum/teleportation.svg"}" alt="${""}" style="${"color:white;"}"></div>` : ``}
        ${!$presentationMode || $currentSlide >= -1 ? `<h1>Quantum Teleportation</h1>` : ``}
        ${validate_component(Item, "Item").$$render($$result, { item: 0 }, {}, {
    default: () => {
      return `<ol><li>Quantum bits
                </li>
                <li>Measurement
                </li>
                <li>Quantum gates
                </li>
                <li>Entanglement
                </li>
                <li>Quantum teleportation
                </li></ol>`;
    }
  })}
        <section>${validate_component(Item, "Item").$$render($$result, { item: 1 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `Quantum bits
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 2 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 2 }, {}, {
        default: () => {
          return `A quantum bit or qubit is a physical system whose state space is determined by a unit vector in a two dimensional Hilbert Space.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 3 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 3 }, {}, {
        default: () => {
          return `We choose to denote the basis vectors by unit vectors \\(|0\\rangle\\) and \\(|1\\rangle\\). The symbols 0 and 1 are deliberately chosen to correspond to 0 and 1 values of a classical bit.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 4 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 4 }, {}, {
        default: () => {
          return `In general, the state of a qubit can be expressed as \\[|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle\\] where \\(\\alpha, \\beta\\in ${escape(TeX.bbC)}\\) such that \\[|\\alpha|^2 + |\\beta|^2 = 1\\]
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 5 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 5 }, {}, {
        default: () => {
          return `The basis states of multiple qubits is given by the tensor product of basis states of individual qubits.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 6 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 6 }, {}, {
        default: () => {
          return `The general state of a two-qubit system is written as \\[|\\psi\\rangle = \\alpha_${escape("{00}")}|00\\rangle + \\alpha_${escape("{01}")}|01\\rangle + \\alpha_${escape("{10}")}|10\\rangle + \\alpha_${escape("{11}")}|11\\rangle \\] where \\(\\alpha_x\\in ${escape(TeX.bbC)}, \\sum_x |\\alpha_x|^2 = 1, x\\in ${escape("\\{0, 1\\}")}^2\\) 
                `;
        }
      })}`;
    }
  })}</section>
        <section>${validate_component(Item, "Item").$$render($$result, { item: 7 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 7 }, {}, {
        default: () => {
          return `Measurement
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 8 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 8 }, {}, {
        default: () => {
          return `Even though the qubit has advantage of having infinitely-many possible states, we can only observe it in two possible states. These observed states depend on the type of measurement we are making on the qubit.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 9 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 9 }, {}, {
        default: () => {
          return `Suppose that a qubit is prepared in the state \\(|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle\\). In the simplest case, when we make a measurement or observe the qubit, the state of the qubit changes to either \\(|0\\rangle\\) or \\(|1\\rangle\\) with probability \\(|\\alpha|^2\\) or \\(|\\beta|^2\\), respectively.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 10 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 10 }, {}, {
        default: () => {
          return `In case of multi-qubit system, any subset of qubits may be chosen to be measured. The measured qubits collapse to an eigen state while unobserved qubits may remain in superposed state. The resulting state may need to be renormalized.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 11 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 11 }, {}, {
        default: () => {
          return `For example, for two-qubit system in state \\(|\\psi\\rangle = \\alpha_${escape("{00}")}|00\\rangle + \\alpha_${escape("{01}")}|01\\rangle + \\alpha_${escape("{10}")}|10\\rangle + \\alpha_${escape("{11}")}|11\\rangle \\), consider that the first qubit is measured and it collapses to state \\(|0\\rangle\\). Then the resulting state of the system will be ${escape(`\\[|\\phi\\rangle = |0\\rangle\\frac{\\alpha_{00}|0\\rangle + \\alpha_{01}|1\\rangle}{\\sqrt{|\\alpha_{00}|^2 + |\\alpha_{01}|^2}}\\]`)}`;
        }
      })}`;
    }
  })}</section>
        <section>${validate_component(Item, "Item").$$render($$result, { item: 12 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 12 }, {}, {
        default: () => {
          return `Quantum Gates
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 13 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 13 }, {}, {
        default: () => {
          return `Probability conservation implies that quantum systems can only undergo unitary evolution. That is, any operation to change the state (apart from measurement) must correspond to a unitary matrix. A matrix \\(U\\) is unitary if \\[U^\\dagger U = I\\]
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 14 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 14 }, {}, {
        default: () => {
          return `Borrowing the terminalogy from classical computation, we call these operations unitary gates. These gates are generally represented by matrices. For a qubit, these are \\(2\\times 2\\) unitary matrices. Let us consider a few special cases of unitary gates.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 15 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { isActive: 15 }, {}, {
        default: () => {
          return `Quantum NOT gate
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 16 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 16 }, {}, {
        default: () => {
          return `A NOT gate flips 0 to 1 and 1 to 0. A quantum NOT gate would change \\(\\alpha|0\\rangle + \\beta|1\\rangle\\) to \\(\\alpha|1\\rangle + \\beta|0\\rangle\\). If we represent a qubit state by column vector ${escape(`\\[\\begin{bmatrix}\\alpha \\\\ \\beta \\end{bmatrix}\\]`)} then the NOT gate will be represented by ${escape(`\\[X\\equiv\\begin{bmatrix}
                    0 & 1\\\\
                    1 & 0
                    \\end{bmatrix}\\]`)}
                    We can easily verify that \\(X\\) is a unitary matrix.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 17 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { isActive: 17 }, {}, {
        default: () => {
          return `Z gate
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 18 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 18 }, {}, {
        default: () => {
          return `A Z gate leaves \\(|0\\rangle\\) unchanged, but flips the sign of \\(|1\\rangle\\) to \\(-|1\\rangle\\). It is represented by ${escape(`\\[Z\\equiv\\begin{bmatrix}
                    1 & 0\\\\
                    0 & -1
                    \\end{bmatrix}\\]`)}
                    We can easily verify that \\(Z\\) is a unitary matrix.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 19 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { isActive: 19 }, {}, {
        default: () => {
          return `Quantum Hadamard gate
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 20 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 20 }, {}, {
        default: () => {
          return `The power of quantum computing derives from the superposition state where all possible outcomes can be encoded into a single quantum state. The quantum gate that does that is known as <em>Hadamard gate</em>. It is represented by the letter \\(H\\) and defined as 
                     ${escape(`\\[H\\equiv\\frac{1}{\\sqrt{2}}\\begin{bmatrix}
                    1 & 1\\\\
                    1 & -1
                    \\end{bmatrix}\\]`)}
                    We can easily verify that \\(H\\) is a unitary matrix. When we apply \\(H\\) gate on a qubit in state \\(|0\\rangle\\), we get ${escape(`\\[H|0\\rangle = \\frac{|0\\rangle + |1\\rangle}{\\sqrt{2}}\\]`)} which is a state of <em>equal</em> superposition.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 21 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { isActive: 21 }, {}, {
        default: () => {
          return `Controlled-NOT gate
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 22 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 22 }, {}, {
        default: () => {
          return `Contolled-NOT gate is a two-qubit gate, i.e. this operation requires two qubits. One of the qubit plays the role of <em>control</em>, while the other qubit is <em>target</em> of the NOT gate. That is, one qubit <em>acts</em> as a switch for NOT gate. CNOT gate is defined as 
                     ${escape(`\\[U_{CN}\\equiv\\begin{bmatrix}
                    1 & 0 & 0 & 0\\\\
                    0 & 1 & 0 & 0\\\\
                    0 & 0 & 0 & 1\\\\
                    0 & 0 & 1 & 0
                    \\end{bmatrix}\\]`)}
                    The action of CNOT gate on basis states is ${escape(`\\[
                            \\begin{eqnarray}
                            CNOT|00\\rangle &=& |00\\rangle\\\\
                            CNOT|01\\rangle &=& |01\\rangle\\\\
                            CNOT|10\\rangle &=& |11\\rangle\\\\
                            CNOT|11\\rangle &=& |10\\rangle\\\\
                            \\end{eqnarray}
                        \\]`)}`;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 23 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 23 }, {}, {
        default: () => {
          return `<em>Any multiple qubit logic gate may be composed from CNOT and single qubit gates.</em>`;
        }
      })}`;
    }
  })}</section>
        <section>${validate_component(Item, "Item").$$render($$result, { item: 24 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 24 }, {}, {
        default: () => {
          return `Entanglement
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 25 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 25 }, {}, {
        default: () => {
          return `Entanglement is the result of special type of superposition of states of more than one qubits.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 26 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 26 }, {}, {
        default: () => {
          return `Consider the state of a two qubit system ${escape(`\\[|\\psi\\rangle = \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}} \\]`)} If one measures the 1st qubit, and say this collapses the state of the 1st qubit to \\(|0\\rangle\\), then the resulting state of the system will be \\(|00\\rangle\\). Likewise if the 1st qubit&#39;s state were \\(|1\\rangle\\), the state of the system would be \\(|11\\rangle\\). <em>What&#39;s so special in this, would you say?</em>`;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 27 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 27 }, {}, {
        default: () => {
          return `The key here is that the measurement on one qubit also collapsed to state of the other qubit to a <em>basis state</em>. If the state of the system were ${escape(`\\[|\\psi\\rangle = \\frac{|00\\rangle + |11\\rangle + |01\\rangle + |11\\rangle}{2} \\]`)}, the measurement of one qubit will not collapse the state of the other qubit to a basis state.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 28 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 28 }, {}, {
        default: () => {
          return `The states of the 1st kind are called <em>entangled states</em>. There are studies into <em>degrees</em> of entanglement, i.e. entanglement is treated as a resource. ${escape(`\\[|\\psi\\rangle = \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}} \\]`)} is <em>maximally</em> entangled.
                `;
        }
      })}`;
    }
  })}</section>
        <section>${validate_component(Item, "Item").$$render($$result, { item: 29 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 29 }, {}, {
        default: () => {
          return `Quantum teleportation
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 30 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 30 }, {}, {
        default: () => {
          return `Now we have all the necessary ingredients to talk about quantum teleportation. By teleportation, the common notion is that an object disappears from one location and appears at another location.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 31 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 31 }, {}, {
        default: () => {
          return `In quantum teleportation, a quantum state <em>disappears</em> from one qubit and <em>appears</em> into another qubit. It is usually formulated as an Alice-Bob protocol.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 32 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 32 }, {}, {
        default: () => {
          return `Alice has a qubit in some state \\(|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle\\). She needs to send this information to Bob who can only receive classical bits as information, i.e. she can not simply deliver the qubit to Bob. But, Alice and Bob share an entangled pair of qubits. That is, Alice has a qubit and Bob has another qubit. These qubits are in the quantum state ${escape(`\\[|\\Psi\\rangle = \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}}\\]`)}`;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 33 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 33 }, {}, {
        default: () => {
          return `At the cost of this entanglement and two classical bits of communication, Alice can <em>teleport</em> the quantum state \\(|\\psi\\rangle\\) to Bob. Next, I&#39;ll describe the protocol or algorithm that both Alice and Bob need to execute for this. It is best explained via the following quantum circuit.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 34 }, {}, {
    default: () => {
      return `${validate_component(Image, "Image").$$render($$result, { isActive: 34 }, {}, {
        default: () => {
          return `<img style="${"width:80vw;"}" src="${"/notes/quantum/teleportation.svg"}" alt="${""}">`;
        }
      })}`;
    }
  })}
            <ol>${validate_component(Item, "Item").$$render($$result, { item: 35 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 35 }, {}, {
        default: () => {
          return `${escape(`\\[
                            \\begin{eqnarray}
                            |\\psi_0\\rangle &=& |\\psi\\rangle|\\Psi\\rangle\\\\
                                             &=& \\frac{1}{\\sqrt{2}}\\Big[\\alpha |0\\rangle(|00\\rangle + |11\\rangle) + \\beta |1\\rangle(|00\\rangle + |11\\rangle)\\Big]
                            \\end{eqnarray}
                            \\]`)}`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 36 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 36 }, {}, {
        default: () => {
          return `${escape(`\\[
                            \\begin{eqnarray}
                            |\\psi_1\\rangle &=& \\frac{1}{\\sqrt{2}}\\Big[\\alpha |0\\rangle(|00\\rangle + |11\\rangle) + \\beta |1\\rangle(|10\\rangle + |01\\rangle)\\Big]
                            \\end{eqnarray}
                            \\]`)}`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 37 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 37 }, {}, {
        default: () => {
          return `${escape(`\\[
                            \\begin{eqnarray}
                            |\\psi_1\\rangle &=& \\frac{1}{2}\\Big[\\alpha (|0\\rangle + |1\\rangle)(|00\\rangle + |11\\rangle) + \\beta (|0\\rangle - |1\\rangle)(|10\\rangle + |01\\rangle)\\Big]\\\\
                            &=& \\frac{1}{2}\\Big[|00\\rangle(\\alpha |0\\rangle + \\beta|1\\rangle) + |01\\rangle(\\alpha|1\\rangle + \\beta|0\\rangle)\\\\
                            &\\quad~& ~+|10\\rangle(\\alpha |0\\rangle - \\beta|1\\rangle) + |11\\rangle(\\alpha|1\\rangle - \\beta|0\\rangle)\\Big]
                            \\end{eqnarray}
                            \\]`)}`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 38 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 38 }, {}, {
        default: () => {
          return `${escape(`\\[
                            \\begin{eqnarray}
                                00 &\\implies & (Z^0X^0)[\\alpha |0\\rangle + \\beta|1\\rangle] = \\alpha |0\\rangle + \\beta|1\\rangle\\\\
                                01 &\\implies & (Z^0X^1)[\\alpha |1\\rangle + \\beta|0\\rangle] = \\alpha |0\\rangle + \\beta|1\\rangle\\\\
                                10 &\\implies & (Z^1X^0)[\\alpha |0\\rangle - \\beta|1\\rangle] = \\alpha |0\\rangle + \\beta|1\\rangle\\\\
                                11 &\\implies & (Z^1X^1)[\\alpha |1\\rangle - \\beta|0\\rangle] = \\alpha |0\\rangle + \\beta|1\\rangle
                            \\end{eqnarray}
                            \\]`)}`;
        }
      })}`;
    }
  })}</ol></section>
        
        
        ${$presentationMode && $currentSlide >= 2 ? `<div class="${"pad svelte-1sxsvd"}"></div>` : ``}
    </article>`;
});
export {
  Page as default
};
