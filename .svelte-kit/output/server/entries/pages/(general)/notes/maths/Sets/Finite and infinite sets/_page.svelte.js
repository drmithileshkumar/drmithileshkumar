import { c as create_ssr_component, s as subscribe, e as escape, k as add_attribute, v as validate_component, p as null_to_empty } from "../../../../../../../chunks/ssr.js";
import { p as presentationMode, c as currentSlide, s as slideCounter, a as selectedSection, b as selectedChapter, d as presentation } from "../../../../../../../chunks/stores4.js";
import { P as Practice } from "../../../../../../../chunks/Practice.js";
/* empty css                                                                */
import { a as randInt } from "../../../../../../../chunks/common.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { I as Item, P, L as Li } from "../../../../../../../chunks/Image.svelte_svelte_type_style_lang.js";
import { H as H3 } from "../../../../../../../chunks/H3.js";
import { H as H2 } from "../../../../../../../chunks/H2.js";
const css = {
  code: ".display.svelte-1p1xuho{position:relative;position:-webkit-sticky}.youtube.svelte-1p1xuho{width:100%;display:flex;position:sticky;top:5em;z-index:10;align-self:flex-start\r\n	}article.svelte-1p1xuho{position:relative;padding:0.5em}.absolute.svelte-1p1xuho{margin:auto;width:100%;height:600px;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-1p1xuho::-webkit-scrollbar{width:0;height:0}.pad.svelte-1p1xuho{min-height:150px}.thumbnail.svelte-1p1xuho{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-1p1xuho{background:radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));color:red;text-shadow:1px 1px 3px rgb(4, 4, 4);box-shadow:1px 1px 3px rgb(129, 128, 128);padding:1em;background-image:url('/notes/maths/sets/finite/thumbnail.svg')}.grid.svelte-1p1xuho{display:grid;grid-template-columns:auto 420px}.flex.svelte-1p1xuho{display:flex;flex-direction:column-reverse}.contentpart.svelte-1p1xuho{padding:0.5em}.gridBackground.svelte-1p1xuho{background-image:url('/background.svg');background-repeat:no-repeat;background-position:center;background-size:cover}",
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
    let N = 3;
    problemnumber = problemnumber % N;
    let choices = ["A", "B", "C", "D"];
    let correctChoiceIndex = Math.floor(Math.random() * 4);
    problemset.c = choices[correctChoiceIndex];
    let values = [0, 0, 0, 0];
    switch (problemnumber) {
      case 0: {
        let m = randInt(20, 1);
        m = Math.random() > 0.5 ? -m : m;
        let n = m > 0 ? randInt(2 * m, m + 1) : randInt(m + 1, m + 10);
        values[0] = `\\(${n - m - 1}\\)`;
        values[1] = `\\(${n - m}\\)`;
        values[2] = `\\(${n - m + 1}\\)`;
        values[3] = `\\(${n - m + 2}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `What is the size of set containing \\(x\\) that satisfies \\[${m}< x < ${n}\\]`;
        break;
      }
      case 1: {
        let m = randInt(20, 1);
        m = Math.random() > 0.5 ? -m : m;
        let n = m > 0 ? randInt(2 * m, m + 1) : randInt(m + 1, m + 10);
        values[0] = `\\(${m} < x < ${n}\\)`;
        values[1] = `\\(${m} > x < ${n}\\)`;
        values[2] = `\\(${n} < x > ${m}\\)`;
        values[3] = `\\(${m} < x > ${n}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Which of the following corresponds to a finite set?`;
        break;
      }
      case 2: {
        let m = randInt(20, 1);
        m = Math.random() > 0.5 ? -m : m;
        let n = m > 0 ? randInt(2 * m, m + 1) : randInt(m + 1, m + 10);
        values[0] = `\\(${m} < x < ${n}\\)`;
        values[1] = `\\(${m} > x < ${n}\\)`;
        values[2] = `\\(${n} < x > ${m}\\)`;
        values[3] = `\\(${m} < x > ${n}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Which of the following does not correspond to an infinite set?`;
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
  return `${$$result.head += `<!-- HEAD_svelte-ykzmzv_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description" content="Finite and infinite sets"><!-- HEAD_svelte-ykzmzv_END -->`, ""} <article class="${[
    escape(null_to_empty($presentationMode ? "gridBackground" : ""), true) + " svelte-1p1xuho",
    $presentationMode ? "absolute" : ""
  ].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="thumbnail svelte-1p1xuho" data-svelte-h="svelte-1g15pk"><div class="statement svelte-1p1xuho"><p>Why is the set of primes infinite?</p></div></div>` : ``} ${!$presentationMode || $currentSlide >= -1 ? `<h1>${escape($selectedSection)}</h1>` : ``} <div class="${"display " + escape(splitMode ? "grid" : "flex", true) + " svelte-1p1xuho"}"><section class="contentpart svelte-1p1xuho">${validate_component(Item, "Item").$$render($$result, { item: 0 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 0 }, {}, {
        default: () => {
          return `Size of a set`;
        }
      })}`;
    }
  })} <section>${validate_component(Item, "Item").$$render($$result, { item: 1 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `The analysis of sets begin with knowing its size.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 2 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 2 }, {}, {
        default: () => {
          return `The size of a set is equal to the number of elements in the set.`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 3 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 3 }, {}, {
        default: () => {
          return `The size of a set is also called the <em data-svelte-h="svelte-47b3di">cardinality</em> of the set.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 4 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 4 }, {}, {
        default: () => {
          return `For a set \\(A\\), its size is denote by \\(|A|\\) or \\(n(A)\\).`;
        }
      })}`;
    }
  })}</ul> ${validate_component(Item, "Item").$$render($$result, { item: 5 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "remark", isActive: 5 }, {}, {
        default: () => {
          return `Elements are counted only once. Repeating an element in the set will not change its
						size.`;
        }
      })}`;
    }
  })}</section> <section>${validate_component(Item, "Item").$$render($$result, { item: 6 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", isActive: 6 }, {}, {
        default: () => {
          return `Examples`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 7 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 7 }, {}, {
        default: () => {
          return `The size of set ${escape("\\(A = \\{1, 2, 3\\}\\)")} is \\(n(A) = 3\\).`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 8 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 8 }, {}, {
        default: () => {
          return `The size of set ${escape("\\(A = \\{1, 1, 2, 3, 3, 3\\}\\)")} is also \\(n(A) = 3\\).`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 9 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 9 }, {}, {
        default: () => {
          return `The number of elements in an empty set is 0. That is, \\(n(\\varphi) = 0\\).`;
        }
      })}`;
    }
  })}</ul></section> ${validate_component(Item, "Item").$$render($$result, { item: 10 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 10 }, {}, {
        default: () => {
          return `Finite Set`;
        }
      })}`;
    }
  })} <section>${validate_component(Item, "Item").$$render($$result, { item: 11 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 11 }, {}, {
        default: () => {
          return `If counting of the elements of a set can finish, it called a <em data-svelte-h="svelte-yr7p35">finite set</em>.`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 12 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 12 }, {}, {
        default: () => {
          return `The size of a finite set is a positive integer.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 13 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 13 }, {}, {
        default: () => {
          return `Empty set is a finite set as well.`;
        }
      })}`;
    }
  })}</ul></section> <section>${validate_component(Item, "Item").$$render($$result, { item: 14 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", isActive: 14 }, {}, {
        default: () => {
          return `Examples`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 15 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 15 }, {}, {
        default: () => {
          return `Counting of elements of ${escape("\\(A = \\{1, 2, 3\\}\\)")} can finish, and hence it is finite.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 16 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 16 }, {}, {
        default: () => {
          return `The set of number of letters in a given English word is finite.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 17 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 17 }, {}, {
        default: () => {
          return `The set of roots of a finite degree polynomial is finite.`;
        }
      })}`;
    }
  })}</ul></section> ${validate_component(Item, "Item").$$render($$result, { item: 18 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 18 }, {}, {
        default: () => {
          return `Infinite Set`;
        }
      })}`;
    }
  })} <section>${validate_component(Item, "Item").$$render($$result, { item: 19 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 19 }, {}, {
        default: () => {
          return `If counting of the elements of a set can not finish, it called an <em data-svelte-h="svelte-1u7yhmq">infinite set</em>.`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 20 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 20 }, {}, {
        default: () => {
          return `The size of an infinite set is infinity (\\(\\infty\\)).`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 21 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 21 }, {}, {
        default: () => {
          return `A complete roster form can not be provided for an infinite set.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 22 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 22 }, {}, {
        default: () => {
          return `Some websites call infinite sets as <strong data-svelte-h="svelte-jrjt7c">uncountable</strong>. That is
							<span style="color:red; font-weight:bold;" data-svelte-h="svelte-o2hvbg">wrong</span>. Finite sets are definitely
							countable. Infinite sets <em data-svelte-h="svelte-gt6eco">can</em> be countable or uncountable. The concept of countability
							is related to one-to-one correspondance with a subset of natural numbers. Key thing to
							keep in mind is that the process of counting an infinite set can not end.`;
        }
      })}`;
    }
  })}</ul></section> <section>${validate_component(Item, "Item").$$render($$result, { item: 23 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", isActive: 23 }, {}, {
        default: () => {
          return `Examples`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 24 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 24 }, {}, {
        default: () => {
          return `The set of natural numbers \\(N\\) is an infinite set. It can be written in the Roster
							form as ${escape(`\\(\\{1, 2, 3,\\dots\\}\\)`)}. The \\(\\dots\\) denotes that the pattern goes
							on. Here the pattern is that for any \\(n\\in N\\), the number \\(n+1\\) is also in \\(N\\).
							An unending process of counting of elements of \\(N\\) can be provided, hence it is a
							countable set.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 25 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 25 }, {}, {
        default: () => {
          return `The set \\(E\\) of numbers divisible by \\(2\\) is an infinite set. It can be written in
							the Roster form as ${escape(`\\(\\{2, 4, 6,\\dots\\}\\)`)}. The \\(\\dots\\) denotes that the
							pattern goes on. Here the pattern is that for any \\(n\\in E\\), the number \\(n+2\\) is
							also in \\(E\\). An unending process of counting of elements of \\(E\\) can be provided,
							hence it is a countable set.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 26 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 26 }, {}, {
        default: () => {
          return `The set \\(Z\\) of integers is an infinite set. It can be written in the Roster form as ${escape(`\\(\\{\\dots, -3, -2, -1, 0, 1, 2, 3,\\dots\\}\\)`)}.
							The \\(\\dots\\) denotes that the pattern goes on. Here the pattern is that for any
							\\(n\\in Z\\), both numbers \\(n-1\\) and \\(n+1\\) belong to \\(Z\\). An unending process of
							counting of elements of \\(Z\\) can be provided, hence it is a countable set. If you
							imagine the set of natural numbers as an arrow indicating that the numbers keep
							increasing in one direction, the set of integers would represent a line such that
							numbers keep on decreasing in one direction and increasing in another direction. To
							indicate this we have used \\(\\dots\\) at the begining as well as at the end in the
							Roster form.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 27 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 27 }, {}, {
        default: () => {
          return `The set of real numbers \\(R\\) is an infinite set. \\(R\\) is an uncountable set. Why?
							The proof is a little complicated. Geog Cantor gave the first proof.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 28 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 28 }, {}, {
        default: () => {
          return `The set of prime numbers is an infinite set. If we have discovered \\(p_1, p_2,\\dots,
							p_n\\) as the first \\(n\\) primes, then the number \\(p1\\times p2\\times \\dots \\times p_n
							+ 1\\) is either a prime or divisible by a prime larger than \\(p_n\\). In either case, a
							prime larger than \\(p_n\\) exists. Hence, the set of primes must have infinitely many
							elements.`;
        }
      })}`;
    }
  })}</ul></section></section> ${!$presentationMode ? `<div class="youtube svelte-1p1xuho" data-svelte-h="svelte-7wdlz5"><iframe width="420" height="300" src="https://www.youtube.com/embed/xitRVmUKQz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>` : ``}</div> <section>${validate_component(Item, "Item").$$render($$result, { item: 29 }, {}, {
    default: () => {
      return `<section><h2 data-svelte-h="svelte-1g25fwj">Practice</h2> ${validate_component(Practice, "Practice").$$render($$result, { generateProblem }, {}, {})}</section>`;
    }
  })}</section> ${$presentationMode && $currentSlide >= 2 ? `<div class="pad svelte-1p1xuho"></div>` : ``} </article>`;
});
export {
  Page as default
};
