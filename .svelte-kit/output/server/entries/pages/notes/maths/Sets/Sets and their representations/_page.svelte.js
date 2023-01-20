import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, v as validate_component, j as null_to_empty } from "../../../../../../chunks/index3.js";
import { b as presentationMode, c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, p as presentation } from "../../../../../../chunks/stores2.js";
import { P as Practice } from "../../../../../../chunks/Practice.js";
/* empty css                                                              */import { r as randInt } from "../../../../../../chunks/common.js";
import { S as Sets } from "../../../../../../chunks/sets.js";
import { Q as Quadratic } from "../../../../../../chunks/quadratic.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { I as Item, P, L as Li } from "../../../../../../chunks/Image.svelte_svelte_type_style_lang.js";
import { H as H3 } from "../../../../../../chunks/H3.js";
import { H as H2 } from "../../../../../../chunks/H2.js";
import { I as Image } from "../../../../../../chunks/Image.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".display.svelte-dgnj1u{position:relative;position:-webkit-sticky}.youtube.svelte-dgnj1u{width:100%;height:300px;display:flex;position:sticky;top:5em;z-index:10;align-self:flex-start}article.svelte-dgnj1u{position:relative;padding:0.5em}.absolute.svelte-dgnj1u{margin:auto;width:100%;height:600px;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-dgnj1u::-webkit-scrollbar{width:0;height:0}.pad.svelte-dgnj1u{min-height:150px}.thumbnail.svelte-dgnj1u{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-dgnj1u{background:radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));color:rgb(246, 246, 246);text-shadow:1px 1px 3px rgb(4, 4, 4);box-shadow:1px 1px 3px rgb(129, 128, 128);padding:1em}.grid.svelte-dgnj1u{display:grid;grid-template-columns:auto 420px}.flex.svelte-dgnj1u{display:flex;flex-direction:column-reverse}.contentpart.svelte-dgnj1u{padding:0.5em}.gridBackground.svelte-dgnj1u{background-image:url('/background.svg');background-repeat:no-repeat;background-position:center;background-size:cover}",
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
    let N = 5;
    problemnumber = problemnumber % N;
    let choices = ["A", "B", "C", "D"];
    let correctChoiceIndex = Math.floor(Math.random() * 4);
    problemset.c = choices[correctChoiceIndex];
    let values = [0, 0, 0, 0];
    switch (problemnumber) {
      case 0: {
        values[0] = `Collection of purest rivers`;
        values[1] = `Collection of states in India`;
        values[2] = `Collection of countries`;
        values[3] = `Collection of my watches`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Which of the following is a not set?`;
        break;
      }
      case 1: {
        let m = randInt(20, 10);
        let n = randInt(Math.floor(m / 2), 1);
        let l = randInt(Math.floor(2 * n / 3), 2);
        n = Math.random() < 0.5 ? n : -n;
        let set = new Sets();
        for (let i = n + 1; i < m; i++) {
          set.e.push(i);
        }
        let subA = new Sets(set.e.filter((item) => item % l == 0));
        values[0] = `\\(${subA.str()}\\)`;
        values[1] = `\\(${set.randomSubset().str()}\\)`;
        values[2] = `\\(${set.randomSubset().str()}\\)`;
        values[3] = `\\(${set.randomSubset().str()}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Which of the following is correct Roster form of the set \\[ x \\text{ is an integer such that } ${n} < x < ${m} \\text{ and divisible by } ${l}\\]`;
        break;
      }
      case 2: {
        let A = new Sets();
        let U = new Sets();
        U.interval(-10, 10);
        A.randomSet(-10, 10, randInt(10, 8));
        let C = U.diff(A);
        let B = A.krandomSubset(3);
        values[0] = `\\(${C.e[Math.floor(Math.random() * C.e.length)]}\\in A\\)`;
        values[1] = `\\(${B.e[0]}\\in A\\)`;
        values[2] = `\\(${B.e[1]}\\in A\\)`;
        values[3] = `\\(${B.e[2]}\\in A\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Given a set \\[A = ${A.str()}\\] which of the following is not correct?`;
        break;
      }
      case 3: {
        let m = randInt(20, 10);
        let n = randInt(Math.floor(m / 2), 1);
        let l = randInt(Math.floor(2 * n / 3), 2);
        n = Math.random() < 0.5 ? n : -n;
        let set = new Sets();
        for (let i = n + 1; i < m; i++) {
          set.e.push(i);
        }
        let setA = new Sets(set.e.filter((item) => item % l == 0));
        values[0] = `\\(\\{x : x \\text{ is an integer such that } ${n} < x < ${m} \\text{ and divisible by } ${l}\\}\\)`;
        values[1] = `\\(\\{x : x \\text{ is an integer such that } ${n} < x < ${m}\\}\\)`;
        values[2] = `\\(\\{x : x \\text{ is an integer such that } ${m} < x < ${n} \\text{ and divisible by } ${l}\\}\\)`;
        values[3] = `\\(\\{x : x \\text{ is an integer such that } x \\text{ is divisible by } ${l}\\}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Which of the following is correct set-builder form of the set \\[${setA.str()}\\]`;
        break;
      }
      case 4: {
        let q = new Quadratic(0, 0, 0, "n");
        q.rand(-3, 3);
        let q1 = new Quadratic(0, 0, 0, "n");
        q1.rand(-3, 3);
        let q2 = new Quadratic(0, 0, 0, "n");
        q2.rand(-3, 3);
        let q3 = new Quadratic(0, 0, 0, "n");
        q3.rand(-3, 3);
        let seq = [q.value(1), q.value(2), q.value(3), q.value(4), q.value(5)];
        let set = new Sets(seq);
        values[0] = q.str();
        values[1] = q1.str();
        values[2] = q2.str();
        values[3] = q3.str();
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = "\\(\\{x: x = " + values[i] + ", n~\\) is a natural number and \\(~1\\leq n\\leq 5\\}\\)";
        }
        problemset.s = `Which of the following is correct set-builder form of the set \\[${set.str()}\\]`;
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
  return `${$$result.head += `<!-- HEAD_svelte-1zxtvw_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}"${add_attribute("content", $selectedSection, 0)}><!-- HEAD_svelte-1zxtvw_END -->`, ""}
<article class="${[
    escape(null_to_empty($presentationMode ? "gridBackground" : ""), true) + " svelte-dgnj1u",
    $presentationMode ? "absolute" : ""
  ].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="${"thumbnail svelte-dgnj1u"}"><img class="${"statement svelte-dgnj1u"}" width="${"100%"}" src="${"/notes/maths/sets/representation/heroparadox.svg"}" alt="${""}" style="${"color:white;"}"></div>` : ``}
	${!$presentationMode || $currentSlide >= -1 ? `<h1>${escape($selectedSection)}</h1>` : ``}
	<div class="${"display " + escape(splitMode ? "grid" : "flex", true) + " svelte-dgnj1u"}"><section class="${"contentpart svelte-dgnj1u"}">${validate_component(Item, "Item").$$render($$result, { item: 0 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 0 }, {}, {
        default: () => {
          return `Definition`;
        }
      })}`;
    }
  })}
			<section>${validate_component(Item, "Item").$$render($$result, { item: 1 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `We are used to a practical idea of what is a <em>collection</em>. A <em>set</em> is the
						mathematical refinement of this idea of collection. It turns out that not every
						collection can be a set. One basic requirement of a mathematical concept is that its
						definition must be unique. Not every collection has a unique definition. Consider, for
						example, <span class="${"specialtext"}">the hero paradox</span>. A <em>hero</em> is a person
						who helps those and only those, who can not help themselves.
						<em>Does the hero help himself?</em>`;
        }
      })}
					${validate_component(Image, "Image").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `<img style="${"width: 100%;"}" src="${"/notes/maths/sets/representation/heroparadox.svg"}" alt="${""}">`;
        }
      })}`;
    }
  })}
				${validate_component(Item, "Item").$$render($$result, { item: 2 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 2 }, {}, {
        default: () => {
          return `A simple idea of collections can lead to many such paradoxes.`;
        }
      })}`;
    }
  })}
				${validate_component(Item, "Item").$$render($$result, { item: 3 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 3 }, {}, {
        default: () => {
          return `Such paradoxes can be avoided if it is possible to decide, with certainty, whether an
						object is part of the collection. This is how we define the mathematical notion of a <em>set</em>.
					`;
        }
      })}`;
    }
  })}
				${validate_component(Item, "Item").$$render($$result, { item: 4 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 4 }, {}, {
        default: () => {
          return `A <strong>set</strong> is a <em>well-defined</em> collection of objects.
					`;
        }
      })}`;
    }
  })}
				${validate_component(Item, "Item").$$render($$result, { item: 5 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 5 }, {}, {
        default: () => {
          return `The property <em>well-defined</em> means given a set and an object, we can determine,
						without ambiguity, whether the object <em>belongs</em> to the set or not.
					`;
        }
      })}`;
    }
  })}</section>

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
          return `Collection of students in a given class is a set.`;
        }
      })}`;
    }
  })}
					${validate_component(Item, "Item").$$render($$result, { item: 8 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 8 }, {}, {
        default: () => {
          return `Alphabets in English is a set.`;
        }
      })}`;
    }
  })}
					${validate_component(Item, "Item").$$render($$result, { item: 9 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 9 }, {}, {
        default: () => {
          return `Natural numbers divisible by 2 is a set.`;
        }
      })}`;
    }
  })}
					${validate_component(Item, "Item").$$render($$result, { item: 10 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 10 }, {}, {
        default: () => {
          return `Collection of circles of different radii is a set.`;
        }
      })}`;
    }
  })}
					${validate_component(Item, "Item").$$render($$result, { item: 11 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 11 }, {}, {
        default: () => {
          return `Collection of all rivers in the world is a set.`;
        }
      })}`;
    }
  })}</ul></section>
			${validate_component(Item, "Item").$$render($$result, { item: 12 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 12 }, {}, {
        default: () => {
          return `Elements of a set`;
        }
      })}`;
    }
  })}
			<section><ul>${validate_component(Item, "Item").$$render($$result, { item: 13 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 13 }, {}, {
        default: () => {
          return `A set is usually denoted by capital letters \\(A, B, X, Y\\) etc.`;
        }
      })}`;
    }
  })}
					${validate_component(Item, "Item").$$render($$result, { item: 14 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 14 }, {}, {
        default: () => {
          return `Members of a set are called elements of the set.`;
        }
      })}`;
    }
  })}
					${validate_component(Item, "Item").$$render($$result, { item: 15 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 15 }, {}, {
        default: () => {
          return `Elements of a set are usually represented by small letters \\(a, b, x, y\\) etc.`;
        }
      })}`;
    }
  })}</ul>
				${validate_component(Item, "Item").$$render($$result, { item: 16 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { "isActive{16}": true }, {}, {
        default: () => {
          return `Epsilon (\\(\\in\\)) notation`;
        }
      })}`;
    }
  })}
				<ul>${validate_component(Item, "Item").$$render($$result, { item: 17 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 17 }, {}, {
        default: () => {
          return `If \\(a\\) is an elment of a set \\(A\\), we say that \\(a\\) <em>belongs to</em> \\(A\\) and
							denote this fact using \\(a\\in A\\).`;
        }
      })}`;
    }
  })}
					${validate_component(Item, "Item").$$render($$result, { item: 18 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 18 }, {}, {
        default: () => {
          return `If \\(a\\) is <strong>not</strong> an elment of a set \\(A\\), we say that \\(a\\)
							<em>does not belongs to</em> \\(A\\) and denote this fact using \\(a\\notin A\\).`;
        }
      })}`;
    }
  })}</ul></section>
			<section>${validate_component(Item, "Item").$$render($$result, { item: 19 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", "isActive{19}": true }, {}, {
        default: () => {
          return `Examples`;
        }
      })}`;
    }
  })}
				<ul>${validate_component(Item, "Item").$$render($$result, { item: 20 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 20 }, {}, {
        default: () => {
          return `If \\(A\\) is the set of vowels in English, then \\(a\\in A\\) because \\(a\\) is a vowel,
							but \\(x\\notin A\\) because \\(x\\) is not a vowel.`;
        }
      })}`;
    }
  })}
					${validate_component(Item, "Item").$$render($$result, { item: 21 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 21 }, {}, {
        default: () => {
          return `If \\(E\\) is the set of Natural numbers divisible by 2, then \\(2\\in E\\), but \\(0\\notin
							E\\) and \\(3\\notin E\\).`;
        }
      })}`;
    }
  })}
					${validate_component(Item, "Item").$$render($$result, { item: 22 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 22 }, {}, {
        default: () => {
          return `If \\(R\\) is the set of all rivers in the world, then \\(Ganga\\in R\\), but
							\\(India\\notin R\\).`;
        }
      })}`;
    }
  })}</ul></section>
			${validate_component(Item, "Item").$$render($$result, { item: 23 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 23 }, {}, {
        default: () => {
          return `Roster Form`;
        }
      })}`;
    }
  })}
			<section>${validate_component(Item, "Item").$$render($$result, { item: 24 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 24 }, {}, {
        default: () => {
          return `In roster form, all the elements of a set are listed, comma-separated and enclosed
						within braces ${escape("\\[\\{a_1, a_2,\\dots, a_n \\}\\]")}`;
        }
      })}`;
    }
  })}</section>
			${validate_component(Item, "Item").$$render($$result, { item: 25 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", "isActive{25}": true }, {}, {
        default: () => {
          return `Examples`;
        }
      })}`;
    }
  })}
			<section><ul>${validate_component(Item, "Item").$$render($$result, { item: 26 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 26 }, {}, {
        default: () => {
          return `Set of natural numbers less than 10 and divisible by 2 is ${escape(`\\(\\{2, 4, 6, 8\\}\\)`)}.`;
        }
      })}`;
    }
  })}
					${validate_component(Item, "Item").$$render($$result, { item: 27 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 27 }, {}, {
        default: () => {
          return `Set of English vowels is ${escape(`\\(\\{a, e, i, o, u\\}\\)`)}.`;
        }
      })}`;
    }
  })}
					${validate_component(Item, "Item").$$render($$result, { item: 28 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 28 }, {}, {
        default: () => {
          return `Set of roots of quadratic equation \\(x^2 - 3x + 2 = 0\\) is ${escape(`\\(\\{1, 2\\}\\)`)}.`;
        }
      })}`;
    }
  })}</ul></section>
			<section>${validate_component(Item, "Item").$$render($$result, { item: 29 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "remark", "isActive{29}": true }, {}, {
        default: () => {
          return `Remarks`;
        }
      })}`;
    }
  })}
				<ul>${validate_component(Item, "Item").$$render($$result, { item: 30 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 30 }, {}, {
        default: () => {
          return `In roster form, the order in which the elements are listed does not matter. For
							example, the set ${escape(`\\(\\{2, 4\\}\\)`)} is the same as ${escape(`\\(\\{4, 2\\}\\)`)}.`;
        }
      })}`;
    }
  })}
					${validate_component(Item, "Item").$$render($$result, { item: 31 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 31 }, {}, {
        default: () => {
          return `In roster form, repeating an element in the list does not change the set. Hence, an
							element is usually listed only once in the set. For example, the set of letter in
							BETTER is ${escape(`\\(\\{B, E, T, T, E, R\\}\\)`)}, there is no need to repeat E and T. We can
							just write ${escape(`\\(\\{B, E, T, R\\}\\)`)}.`;
        }
      })}`;
    }
  })}
					${validate_component(Item, "Item").$$render($$result, { item: 32 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 32 }, {}, {
        default: () => {
          return `The set of roots of quadratic equation \\(x^2 - 2x + 1 = 0\\) is ${escape(`\\(\\{1, 1\\}\\)`)} or
							just ${escape(`\\(\\{1\\}\\)`)}.`;
        }
      })}`;
    }
  })}</ul></section>
			${validate_component(Item, "Item").$$render($$result, { item: 33 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 33 }, {}, {
        default: () => {
          return `Set Builder Form`;
        }
      })}`;
    }
  })}
			<section>${validate_component(Item, "Item").$$render($$result, { item: 34 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 34 }, {}, {
        default: () => {
          return `In set-builder form, we specify a property that is satisfied <strong>only</strong> by
						the elements of the set. It is written as ${escape(`\\[\\{x : \\text{Property satisfied by } x\\}\\]`)}
						The symbol \\(x\\) can be replaced with any other symbol like \\(a, b, y\\) etc. The colon (:)
						stands for &quot;such that&quot;. After colon (:) we write the property satisfied by all elements of
						the set.
					`;
        }
      })}`;
    }
  })}</section>
			${validate_component(Item, "Item").$$render($$result, { item: 35 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", "isActive{35}": true }, {}, {
        default: () => {
          return `Examples`;
        }
      })}`;
    }
  })}
			<section><ul>${validate_component(Item, "Item").$$render($$result, { item: 36 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 36 }, {}, {
        default: () => {
          return `The set-builder form of the set ${escape(`\\(\\{2, 4, 6, 8\\}\\)`)} is ${escape(`\\(\\{x: x\\)`)} is a natural
							numbers less than 10 and divisible by 2${escape(`\\(\\}\\)`)}.`;
        }
      })}`;
    }
  })}
					${validate_component(Item, "Item").$$render($$result, { item: 37 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 37 }, {}, {
        default: () => {
          return `The set-builder form of the set ${escape(`\\(\\{a, e, i, o, u\\}\\)`)} is ${escape(`\\(\\{x : x \\text{ is an English vowel}\\}\\)`)}.`;
        }
      })}`;
    }
  })}
					${validate_component(Item, "Item").$$render($$result, { item: 38 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 38 }, {}, {
        default: () => {
          return `Let ${escape(`\\(A = \\Big\\{\\dfrac{2}{3}, \\dfrac{3}{4}, \\dfrac{4}{5}, \\dfrac{5}{6},\\dfrac{6}{7}\\Big\\}\\)`)},
							then in set-builder form it will be written as ${escape(`\\[\\{x: x = \\frac{n + 1}{n + 2}, \\text{ where } n \\text{ is a natural number and } 1\\leq n\\leq 5\\}\\]`)}`;
        }
      })}`;
    }
  })}</ul></section></section>

		${!$presentationMode ? `<div class="${"youtube svelte-dgnj1u"}"><iframe width="${"100%"}" height="${"auto"}" src="${"https://www.youtube.com/embed/kj1VeKqMlJc"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}" allowfullscreen></iframe></div>` : ``}</div>

	${validate_component(Item, "Item").$$render($$result, { item: 39 }, {}, {
    default: () => {
      return `<section><h2>Practice</h2>
			${validate_component(Practice, "Practice").$$render($$result, { generateProblem }, {}, {})}</section>`;
    }
  })}

	${$presentationMode && $currentSlide >= 2 ? `<div class="${"pad svelte-dgnj1u"}"></div>` : ``}
</article>`;
});
export {
  Page as default
};
