import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, v as validate_component } from "../../../../../../chunks/index3.js";
import { b as presentationMode, c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, p as presentation } from "../../../../../../chunks/stores2.js";
import { P as Practice } from "../../../../../../chunks/Practice.js";
/* empty css                                                              */import { S as Sets } from "../../../../../../chunks/sets.js";
import { r as randInt } from "../../../../../../chunks/common.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { T as TeX } from "../../../../../../chunks/constants.js";
import { I as Item, P, L as Li } from "../../../../../../chunks/Image.svelte_svelte_type_style_lang.js";
import { H as H3 } from "../../../../../../chunks/H3.js";
import { H as H2 } from "../../../../../../chunks/H2.js";
import { I as Image } from "../../../../../../chunks/Image.js";
/* empty css                                                          */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".display.svelte-1o0j6m0{position:relative;position:-webkit-sticky}.youtube.svelte-1o0j6m0{width:100%;display:flex;position:sticky;top:5em;z-index:10;align-self:flex-start}article.svelte-1o0j6m0{position:relative;padding:0.5em}.absolute.svelte-1o0j6m0{margin:auto;width:100%;height:600px;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-1o0j6m0::-webkit-scrollbar{width:0;height:0}.pad.svelte-1o0j6m0{min-height:150px}.thumbnail.svelte-1o0j6m0{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-1o0j6m0{background:radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));color:red;text-shadow:1px 1px 3px rgb(4, 4, 4);padding:1em;background-image:url('/notes/maths/sets/subsets/thumbnail.svg');background-repeat:no-repeat;background-position:center;width:500px;height:500px}.grid.svelte-1o0j6m0{display:grid;grid-template-columns:auto 420px}.flex.svelte-1o0j6m0{display:flex;flex-direction:column-reverse}.contentpart.svelte-1o0j6m0{padding:0.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let splitMode;
  let $presentationMode, $$unsubscribe_presentationMode;
  let $currentSlide, $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $selectedSection, $$unsubscribe_selectedSection;
  let $$unsubscribe_selectedChapter;
  let $page, $$unsubscribe_page;
  let $presentation, $$unsubscribe_presentation;
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_selectedSection = subscribe(selectedSection, (value) => $selectedSection = value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => $presentation = value);
  let problemset = {
    s: "",
    o: { A: "", B: "", C: "", D: "" },
    c: ""
  };
  const generateProblem = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ["A", "B", "C", "D"];
    let correctChoiceIndex = Math.floor(Math.random() * 4);
    problemset.c = choices[correctChoiceIndex];
    let values = [0, 0, 0, 0];
    switch (problemnumber) {
      case 0: {
        let n = randInt(20, 1);
        let m = randInt(n + 1, n + 10) + 10;
        let k = randInt(8, 2);
        let U = new Sets();
        U.interval(n, m);
        let s = new Sets();
        s.randomSet(n, m, k);
        let sc = s.c(U);
        let sbad = s.randomSubset();
        sbad.add(sc.randomElem());
        values[0] = `\\(${sbad.str()}\\)`;
        values[1] = `\\(${s.randomSubset().str()}\\)`;
        values[2] = `\\(${s.randomSubset().str()}\\)`;
        values[3] = `\\(${s.randomSubset().str()}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Which of the following is not a subset of \\(${s.str()}\\)?`;
        break;
      }
      case 1: {
        let n = randInt(20, 1);
        let m = randInt(n + 1, n + 10) + 10;
        let k = randInt(8, 2);
        let s = new Sets();
        s.randomSet(n, m, k);
        let r = Math.random();
        let suset = r < 0.25 ? "N" : r < 0.5 ? "Z" : r < 0.75 ? "Q" : "T";
        let opt = [
          `\\(A\\subset \\mathbb{N}\\)`,
          `\\(A\\subset \\mathbb{Z}\\)`,
          `\\(A\\subset \\mathbb{Q}\\)`,
          `\\(A\\subset \\mathbb{T}\\)`
        ];
        let ques = "";
        let co;
        switch (suset) {
          case "N":
            s.add(randInt(m, n));
            ques = "not";
            co = 3;
            break;
          case "Z":
            s.add(-randInt(m, n));
            ques = "not";
            co = 0;
            break;
          case "Q":
            let q = new Q();
            q.randF(m, n);
            let q1 = q.add(new Q(1, 2));
            s.add(q1);
            co = 2;
            break;
          case "T":
            let nq = new Surd();
            nq.randomSurd(m);
            s.add(nq);
            co = 3;
            break;
        }
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = opt[(co + i) % 4];
        }
        if (suset == "Z") {
          problemset.o[choices[correctChoiceIndex + 3]] = `\\(A\\subset \\mathbb{R}\\)`;
        }
        problemset.s = `Given set \\(A = ${s.str()}\\), which of the following is ${ques} correct?`;
        break;
      }
    }
    problemset = problemset;
    return problemset;
  };
  let DW;
  $$result.css.add(css);
  splitMode = !$presentationMode && DW > 800;
  $$unsubscribe_presentationMode();
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  $$unsubscribe_page();
  $$unsubscribe_presentation();
  return `${$$result.head += `<!-- HEAD_svelte-1o7l939_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"Subsets"}"><!-- HEAD_svelte-1o7l939_END -->`, ""}
<article class="${["svelte-1o0j6m0", $presentationMode ? "absolute" : ""].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="${"thumbnail svelte-1o0j6m0"}"><div class="${"statement svelte-1o0j6m0"}"><p></p></div></div>` : ``}
	${!$presentationMode || $currentSlide >= -1 ? `<h1>${escape($selectedSection)}</h1>` : ``}
	<div class="${"display " + escape(splitMode ? "grid" : "flex", true) + " svelte-1o0j6m0"}"><section class="${"contentpart svelte-1o0j6m0"}"><section>${validate_component(Item, "Item").$$render($$result, { item: 0 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 0 }, {}, {
        default: () => {
          return `In the last section we defined equal sets. In this section, we&#39;ll learn how to compare two sets. At the same time, it will give us a way to construct new sets from a given set.
                    `;
        }
      })}`;
    }
  })}
				${validate_component(Item, "Item").$$render($$result, { item: 1 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 1 }, {}, {
        default: () => {
          return `Given sets \\(A\\) and \\(B\\), \\(A\\) is said to be <em>subset</em> of \\(B\\) if every
						element of \\(A\\) is also in \\(B\\). In such a case, \\(B\\) is called a <em>superset</em> of
						\\(A\\).
					`;
        }
      })}`;
    }
  })}
				${validate_component(Item, "Item").$$render($$result, { item: 2 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 2 }, {}, {
        default: () => {
          return `Intuitively, this is like less than ( \\(${escape(TeX.less)}\\) ) relation of numbers. The only difference is that while two numbers are always related, two sets will not be related like this if they contain different elements.
					`;
        }
      })}`;
    }
  })}
				<ul>${validate_component(Item, "Item").$$render($$result, { item: 2 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 2 }, {}, {
        default: () => {
          return `If \\(A\\) is a subset of \\(B\\), then we write \\(A \\subset B\\) or \\(B\\supset A\\).
						`;
        }
      })}`;
    }
  })}
					${validate_component(Item, "Item").$$render($$result, { item: 3 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 3 }, {}, {
        default: () => {
          return `If \\(A\\) is not a subset of \\(B\\), then we write \\(A \\not\\subset B\\).
                        `;
        }
      })}`;
    }
  })}
					${validate_component(Item, "Item").$$render($$result, { item: 4 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 4 }, {}, {
        default: () => {
          return `To indicate that \\(A\\) is either a subset of or equal to \\(B\\), we write \\(A\\subseteq
							B\\).
                        `;
        }
      })}`;
    }
  })}
					${validate_component(Item, "Item").$$render($$result, { item: 5 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 5 }, {}, {
        default: () => {
          return `A subset \\(A\\) of set \\(B\\) is called a <em>proper</em> subset of \\(B\\) if \\(A\\) is not
							equal to \\(B\\).
                        `;
        }
      })}`;
    }
  })}</ul></section>
			<section>${validate_component(Item, "Item").$$render($$result, { item: 6 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", isActive: 6 }, {}, {
        default: () => {
          return `Examples`;
        }
      })}`;
    }
  })}
				<ul>${validate_component(Item, "Item").$$render($$result, { item: 7 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 7 }, {}, {
        default: () => {
          return `${escape(`\\(\\{1, 2\\} \\subset \\{2, 1, 3\\}\\)`)} is a proper subset.
						`;
        }
      })}`;
    }
  })}
					${validate_component(Item, "Item").$$render($$result, { item: 8 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 8 }, {}, {
        default: () => {
          return `${escape(`\\(\\{1, 2, 3, 0\\} \\not\\subset \\{2, 1, 3, 4, 5\\}\\)`)}`;
        }
      })}`;
    }
  })}</ul></section>
			<section>${validate_component(Item, "Item").$$render($$result, { item: 6 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 6 }, {}, {
        default: () => {
          return `Subset Tree`;
        }
      })}`;
    }
  })}
				${validate_component(Item, "Item").$$render($$result, { item: 6 }, {}, {
    default: () => {
      return `${validate_component(Image, "Image").$$render($$result, { isActive: 6 }, {}, {
        default: () => {
          return `<img style="${"width:min(400px, 90vw);"}" src="${"/notes/maths/sets/subsets/tree.svg"}" alt="${""}">`;
        }
      })}`;
    }
  })}</section>
            <section>${validate_component(Item, "Item").$$render($$result, { item: 9 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 9 }, {}, {
        default: () => {
          return `\\(A\\) is a subset of \\(B\\) if \\(a\\) is an element of \\(A\\) implies that \\(a\\) is also an element of \\(B\\). \\[A\\subset B ~~~if~~a\\in A\\implies a\\in B\\]  Alternatively, we can say that if \\(A\\subset B\\), then there does not exist any element in \\(A\\) that is also not in \\(B\\). \\[A\\subset B ~~~if~~\\nexists ~ a\\in A~~such~that~~ a\\notin B\\]
					`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 10 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "remark", isActive: 10 }, {}, {
        default: () => {
          return `Every set \\(A\\) is a subset of itself, i.e. \\(A\\subset A\\).
					`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 11 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "question", isActive: 11 }, {}, {
        default: () => {
          return `Why is empty set a subset of every set?`;
        }
      })}`;
    }
  })}
				${validate_component(Item, "Item").$$render($$result, { item: 12 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "solution", isActive: 12 }, {}, {
        default: () => {
          return `An empty set \\(A = \\phi\\) contains no element. A set \\(A\\) is a subset of another set \\(B\\)
						if \\(A\\) does not contain any element that is not in \\(B\\). Since, \\(\\phi\\) does not
						contain any element, it is also true that it does not contain any element that is not in
						\\(B\\). Hence, \\(\\phi\\) is a subset of \\(B\\).
                    `;
        }
      })}`;
    }
  })}</section>
            <section>${validate_component(Item, "Item").$$render($$result, { item: 13 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 13 }, {}, {
        default: () => {
          return `Set equality 
                    `;
        }
      })}`;
    }
  })}
				${validate_component(Item, "Item").$$render($$result, { item: 14 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 14 }, {}, {
        default: () => {
          return `\\(A\\) is equal to \\(B\\) if and only if (iff) \\(A\\subset B\\) and \\(B\\subset A\\). \\[A=B \\iff (a\\in A\\iff a\\in B)\\] 
					`;
        }
      })}`;
    }
  })}
				${validate_component(Item, "Item").$$render($$result, { item: 15 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "question", isActive: 15 }, {}, {
        default: () => {
          return `Is ${escape(`\\(\\phi = \\{\\phi\\}\\)`)} ?`;
        }
      })}`;
    }
  })}
				${validate_component(Item, "Item").$$render($$result, { item: 16 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "solution", isActive: 16 }, {}, {
        default: () => {
          return `We can write ${escape("\\(\\phi = \\{\\}\\)")}. It is clear that ${escape(`\\(\\{\\}\\)`)} has no elements
						and ${escape(`\\(\\{\\phi\\}\\)`)}
						has one element, namely \\(\\phi\\). Hence ${escape(`\\(\\phi \\neq \\{\\phi\\}\\)`)}`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 17 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "question", isActive: 17 }, {}, {
        default: () => {
          return `Consider two sets ${escape(`\\(A = \\{x: x=3r-1, r\\in Z\\}\\)`)} and ${escape(`\\(B = \\{x: x=3s + 2, s\\in Z\\}\\)`)}. Is \\(A = B\\)?`;
        }
      })}`;
    }
  })}
                <div class="${"solution"}">${validate_component(Item, "Item").$$render($$result, { item: 18 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 18 }, {}, {
        default: () => {
          return `We need to check both conditions \\(A\\subset B\\) and \\(B\\subset A\\).
                        `;
        }
      })}`;
    }
  })}
                    <ul>${validate_component(Item, "Item").$$render($$result, { item: 19 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 19 }, {}, {
        default: () => {
          return `Let \\(a = 3r - 1 \\in A\\) where \\(r\\in Z\\). Does there exists \\(s\\in Z\\) such that \\(a = 3s + 2\\)? Let&#39;s find out. ${escape(`\\[
                                    \\begin{eqnarray}
                                    3s + 2 &=& 3r - 1\\\\
                                    \\implies s &=& \\frac{3r - 3}{3}\\\\
                                                &=& r - 1 \\in Z
                                    \\end{eqnarray}
                                    \\]`)}
                                This implies that \\(a\\in B\\). Hence, \\(A\\subset B\\)
                            `;
        }
      })}`;
    }
  })} 
                        ${validate_component(Item, "Item").$$render($$result, { item: 20 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 20 }, {}, {
        default: () => {
          return `Let \\(b = 3s + 2 \\in B\\) where \\(s\\in Z\\). Does there exists \\(r\\in Z\\) such that \\(b = 3r - 1\\)? Let&#39;s find out. ${escape(`\\[
                                    \\begin{eqnarray}
                                    3r - 1 &=& 3s + 2\\\\
                                    \\implies r &=& \\frac{3s + 3}{3}\\\\
                                                &=& s + 1 \\in Z
                                    \\end{eqnarray}
                                    \\]`)}
                                This implies that \\(b\\in A\\). Hence, \\(B\\subset A\\)
                            `;
        }
      })}`;
    }
  })}</ul>
                    ${validate_component(Item, "Item").$$render($$result, { item: 21 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 21 }, {}, {
        default: () => {
          return `This proves that \\(A = B\\).
                        `;
        }
      })}`;
    }
  })}</div>
                ${validate_component(Item, "Item").$$render($$result, { item: 22 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "question", isActive: 22 }, {}, {
        default: () => {
          return `Verify that \\(N\\subset Z \\subset Q\\subset R\\).
                    `;
        }
      })}`;
    }
  })}</section></section>
		${!$presentationMode ? `<div class="${"youtube svelte-1o0j6m0"}"><iframe width="${"420"}" height="${"300"}" src="${"https://www.youtube.com/embed/jbBsClpZmPQ"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}" allowfullscreen></iframe></div>` : ``}
		${$presentationMode ? `<div class="${"slate"}"></div>` : ``}</div>
	<section>${validate_component(Item, "Item").$$render($$result, { item: 23 }, {}, {
    default: () => {
      return `<section><h2>Practice</h2>
				${validate_component(Practice, "Practice").$$render($$result, { generateProblem }, {}, {})}</section>`;
    }
  })}</section>
	${$presentationMode && $currentSlide >= 2 ? `<div class="${"pad svelte-1o0j6m0"}"></div>` : ``}
	
</article>`;
});
export {
  Page as default
};
