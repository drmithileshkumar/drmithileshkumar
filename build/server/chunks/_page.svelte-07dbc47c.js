import { c as create_ssr_component, v as validate_component, e as escape } from './index-2bbd6063.js';
import { L as Link } from './Link-e8c38f9d.js';
import { T as TeX } from './constants-b4a0d30f.js';

const Sets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>Sets</h1>
        
        <section><ul><li>A set is a well-defined collection of objects.
                </li>
                <li>A set which does not contain any element is called empty set.
                </li>
                <li>A set which consists of a definite number of elements is called <em>finite set</em>, otherwise the set is called <em>infinite set</em>.
                </li>
                <li>Two sets \\(A\\) and \\(B\\) are said to be <em>equal</em> if they have exactly the same elements.
                </li>
                <li>A set \\(A\\) is said to be subset of a set \\(B\\), if every element of \\(A\\) is also an element of \\(B\\). Intervals are subsets of ${escape(TeX.R)}.
                </li>
                <li>A power set of a set \\(A\\) is collection of all subsets of \\(A\\). It is denoted by \\(P(A)\\).
                </li>
                <li>The union of two sets \\(A\\) and \\(B\\) is the set of all those elements which are either in \\(A\\) or in \\(B\\).
                </li>
                <li>The intersection of two sets \\(A\\) and \\(B\\) is the set of all elements which are common. The difference of two sets \\(A\\) and \\(B\\) in this order is the set of elements which belong to \\(A\\) but not \\(B\\).
                </li>
                <li>The complement of a subset \\(A\\) of universal set \\(U\\) is the set of all elements of \\(U\\) which are not the elements of \\(A\\).
                </li>
                <li>For any two sets \\(A\\) and \\(B\\), \\((A\\cup B)&#39; = A&#39;\\cap B&#39;\\) and \\((A\\cap B)&#39; = A&#39;\\cup B&#39;\\).
                </li>
                <li>If \\(A\\) and \\(B\\) are finite sets such that \\(A\\cap B = \\phi\\), then \\(n(A\\cup B) = n(A) + n(B)\\). If \\(A\\cap B \\neq \\phi\\), then \\(n(A\\cup B) = n(A) + n(B) - n(A\\cap B)\\)
                </li>
                <li>If \\(A\\), \\(B\\) and \\(C\\) are finite sets, then \\(n(A\\cup B\\cup C) = n(A) + n(B) + n(C) - n(A\\cap B) - n(B\\cap C) - n(C\\cap A) - n(A\\cap B\\cap C)\\)
                </li></ul></section></article>`;
});
const RelationsAndFunctions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>Relations and functions</h1>
        <section><ul><li><strong>Ordered pair:</strong> A pair of elements grouped together in a particular order.
                </li>
                <li><strong>Cartesian product</strong> \\(A\\times B\\) of two sets \\(A\\) and \\(B\\) is given by \\[A\\times B = ${escape(TeX.set("(a,b)", "a\\in A, b\\in B"))}\\] 
                    In particular, \\(${escape(TeX.bbR)}\\times ${escape(TeX.bbR)} = ${escape(TeX.set("(x,y)", `x,y${TeX.inR}`))}\\) and \\[${escape(TeX.bbR)}\\times ${escape(TeX.bbR)} \\times ${escape(TeX.bbR)} = ${escape(TeX.set("(x,y, z)", `x,y,z${TeX.inR}`))}\\] 
                </li>
                <li>If \\((a,b) = (x,y)\\), then \\(a = x\\) and \\(b = x\\).
                </li>
                <li>If \\(n(A) = p\\) and \\(n(B) = q\\), then \\(n(A\\times B) = pq\\).
                </li>
                <li>\\(A\\times\\phi = \\phi\\)
                </li>
                <li>In general, \\(A\\times B \\neq B\\times A\\).
                </li>
                <li><strong>Relation</strong> A relation \\(R\\) from a set \\(A\\) to a set \\(B\\) is a subset of the cartesian product \\(A\\times B\\) obtained by describing a relationship between the first element \\(x\\) and the second element \\(y\\) of the ordered pairs in \\(A\\times B\\).
                </li>
                <li>The <strong>image</strong> of an element \\(x\\) under a relation \\(R\\) is given by \\(y\\), where \\((x,y)\\in R\\).
                </li>
                <li>The <strong>domain</strong> of \\(R\\) is the set of all first elements of the ordered pair in a relation \\(R\\).
                </li>
                <li>The <strong>range</strong> of the relation \\(R\\) is the set of all second elements of the ordered pairs in a relation \\(R\\).
                </li>
                <li><strong>Function</strong> A function \\(f\\) from a set \\(A\\) to a set \\(B\\) is a specific type of relation for which every element \\(x\\) of set \\(A\\) has one and only one image \\(y\\) in set \\(B\\). We write \\(f:A\\to B\\), where \\(f(x) = y\\).
                </li>
                <li>\\(A\\) is the domain and \\(B\\) is the codomain of \\(f\\).
                </li>
                <li>The range of the function is the set of images.
                </li>
                <li>A real function has the set of real numbers or one of its subsets both as its domain and as its range.
                </li>
                <li><strong>Algebra of functions</strong> For functions \\(f:X\\to R\\) and \\(g:X\\to R\\), we have 
                    ${escape(`\\[
                        \\begin{aligned}
                            (f + g)(x) &= f(x) + g(x), x\\in X\\\\
                            (f - g)(x) &= f(x) - g(x), x\\in X\\\\
                            (f\\cdot g)(x) &= f(x)\\cdot g(x), x\\in X\\\\
                            (kf)(x) &= k~f(x), x\\in X, k${TeX.inR}\\\\
                            \\Big(\\frac{f}{g}\\Big)(x) &= \\frac{f(x)}{g(x)}, x\\in X, g(x) \\neq 0
                        \\end{aligned}    
                    \\]`)}</li></ul></section>
        <section><ul><li><em>Empty relation</em> is the relation \\(R\\) in \\(X\\) given by \\(R=\\phi\\subset X\\times X\\)
                </li>
                <li><em>Universal relation</em> is the relation \\(R\\) in \\(X\\) given by \\(R = X\\times X\\)
                </li>
                <li><em>Reflexive relation</em> \\(R\\) in \\(X\\) is a relation with \\(\\forall a\\in X\\quad(a,a)\\in R\\)
                </li>
                <li><em>Symmetric relation</em> \\(R\\) in \\(X\\) is a relation satisfying \\((a,b)\\in R\\implies (b,a)\\in R\\) 
                </li>
                <li><em>Transitive relation</em> \\(R\\) in \\(X\\) is a relation satisfying \\((a,b), (b,c)\\in R\\implies (a,c)\\in R\\)
                </li>
                <li><em>Equivalence relation</em> \\(R\\) in \\(X\\) is a relation which is reflexive, symmetric, and transitive.
                </li>
                <li><em>Equivalence class \\([a]\\)</em> containing \\(a\\in X\\) for an equivalence relation \\(R\\) in \\(X\\) is the subset of \\(X\\) containing all elements \\(b\\) related to \\(a\\).
                </li>
                <li>A function \\(f:X\\to Y\\) is <em>one-one (or injective)</em> if \\[\\forall x_1,x_2\\in X~~ f(x_1) = f(x_2)\\implies x_1 = x_2\\]
                </li>
                <li>A function \\(f:X\\to Y\\) is <em>onto (or surjective)</em> if given any \\(y\\in Y\\), \\(\\exists x\\in X\\) such that \\(f(x) = y\\)
                </li>
                <li>A function \\(f:X\\to Y\\) is <em>one-one and onto (or bijection)</em> if \\(f\\) is bothe one-one and onto.
                </li>
                <li>The <em>composition</em> of functions \\(f:A\\to B\\) and \\(g:B\\to C\\) is the function \\(gof:A\\to C\\) given by \\(\\forall x\\in A~~gof(x) = g(f(x))\\)
                </li>
                <li>A function \\(f:X\\to Y\\) is <em>invertible</em> if \\(\\exists ~ g:Y\\to X\\) such that \\(gof = I_X\\) and \\(fog = I_Y\\)
                </li>
                <li>A function \\(f:X\\to Y\\) is invertible if and only if \\(f\\) is one-one and onto.
                </li>
                <li>Given a finite set \\(X\\), a function \\(f:X\\to X\\) is one-one (respectively onto) if and only if \\(f\\) is onto (respectively one-one). This is the characteristic property of a finite set. This is not true for infinite set.
                </li>
                <li>A <strong>binary operation \\(*\\)</strong> on a set \\(A\\) is a function \\(*\\) from \\(A\\times A\\) to \\(A\\).
                </li>
                <li>An element \\(e\\in X\\) is the <strong>identity</strong> element for binary operation \\(*:X\\times X\\to X\\), if \\(a*e = a = e*a~~\\forall a\\in X\\)
                </li>
                <li>An element \\(a\\in X\\) is invertible for binary operation \\(*:X\\times X\\to X\\), if there exists \\(b\\in X\\) such that \\(a*b = e = b*a\\) where, \\(e\\) is the identity for the binary operation \\(*\\). The element \\(b\\) is called <strong>inverse</strong> of \\(a\\) and is denoted by \\(${escape(TeX.pow("a", "-1"))}\\)
                </li>
                <li>An operation \\(*\\) on \\(X\\) is <strong>commutative</strong> if \\(a*b = b*a~~\\forall a,b\\in X\\)
                </li>
                <li>An operation \\(*\\) on \\(X\\) is <strong>associative</strong> if \\((a*b)*c = a*(b*c)~~\\forall a,b,c\\in X\\)
                </li></ul></section></article>`;
});
const TrigonometricFunctions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>Trigonometric functions</h1>
        <section><ul><li>If in a circle of radius \\(r\\), an arc of length \\(l\\) subtends an angle of \\(\\theta\\) radians, then \\(l = r\\theta\\)
                </li>
                <li>Radian measure = \\(${escape(TeX.dfrac("\\pi", 180))}\\times\\) Degree measure
                </li>
                <br>
                <li>Degree measure = \\(${escape(TeX.dfrac(180, "\\pi"))}\\times\\) Radian measure
                </li>
                <li>\\(\\cos^2x + \\sin^2x = 1\\)
                </li>
                <li>\\(1 + \\tan^2x = \\sec^2x\\)
                </li>
                <li>\\(\\cot^2x + 1 = ${escape(TeX.text("cosec"))}^2x\\)
                </li>
                <li>\\(\\cos(2n\\pi + x) = \\cos x\\)
                </li>
                <li>\\(\\sin(2n\\pi + x) = \\sin x\\)
                </li>
                <li>\\(\\sin(-x) = -\\sin x\\)
                </li>
                <li>\\(\\cos(-x) = \\cos x\\)
                </li>
                <li>\\(\\cos(${escape(TeX.dfrac("\\pi", 2))} -x) = \\sin x\\)
                </li>
                <br>
                <li>\\(\\sin(${escape(TeX.dfrac("\\pi", 2))} -x) = \\cos x\\)
                </li>
                <li>\\(cos(x + y) = \\cos x \\cos y - \\sin x \\sin y\\)
                </li>
                <li>\\(cos(x - y) = \\cos x \\cos y + \\sin x \\sin y\\)
                </li>
                <li>\\(sin(x + y) = \\sin x \\cos y + \\cos x \\sin y\\)
                </li>
                <li>\\(sin(x - y) = \\sin x \\cos y - \\cos x \\sin y\\)
                </li>
                <li style="${"display: flex;"}"><table><tr><td>${escape(`\\[
                                    \\begin{aligned}
                                    \\cos(\\frac{\\pi}{2} + x) &= -\\sin x\\\\
                                    \\cos(\\pi - x) &= -\\cos x\\\\
                                    \\cos(\\pi + x) &= \\cos x\\\\
                                    \\cos(2\\pi - x) &= \\cos x
                                    \\end{aligned}
                                    \\]`)}</td>
                            <td>${escape(`\\[
                                    \\begin{aligned}
                                    \\sin(\\frac{\\pi}{2} + x) &= \\cos x\\\\
                                    \\sin(\\pi - x) &= \\sin x\\\\
                                    \\sin(\\pi + x) &= -\\sin x\\\\
                                    \\sin(2\\pi - x) &= -\\sin x
                                    \\end{aligned}
                                    \\]`)}</td></tr></table></li>
                <li>If none of the angles \\(x,y\\) and \\((x\\pm y)\\) is an odd multiple of \\(${escape(TeX.dfrac("\\pi", "2"))}\\), then \\[\\tan(x + y) = ${escape(TeX.frac("\\tan x + \\tan y", "1 - \\tan x \\tan y"))}\\]
                </li>
                <li>If none of the angles \\(x,y\\) and \\((x\\pm y)\\) is an odd multiple of \\(\\pi\\), then \\[\\cot(x + y) = ${escape(TeX.frac("\\cot x \\cot y - 1", "\\cot x + \\cot y"))}\\]
                </li>
                <li>\\(\\cos 2x = \\cos^2x - \\sin^2x = 2\\cos^2x - 1 = 1 - 2\\sin^2x = ${escape(TeX.dfrac("1-\\tan^2x", "1+\\tan^2x"))}\\)
                </li>
                <li>\\(\\sin 2x = 2\\sin x \\cos x = ${escape(TeX.dfrac("2\\tan x", "1 + \\tan^2x"))}\\)
                </li>
                <li>\\(\\tan 2x = ${escape(TeX.dfrac("2\\tan x", "1 - \\tan^2x"))}\\)
                </li>
                <li>\\(\\sin 3x = 3\\sin x - 4\\sin^3x\\)
                </li>
                <li>\\(\\cos 3x = 4\\cos^3x - 3\\cos x\\)
                </li>
                <li>\\(\\tan 3x = ${escape(TeX.dfrac("3\\tan x - \\tan^3x", "1 - 3\\tan^2x"))}\\)
                </li>
                <li><ol><li style="${"padding-top: 0.5em;"}">\\(\\cos x + \\cos y = 2\\cos ${escape(TeX.dfrac("x + y", "2"))} \\cos${escape(TeX.dfrac("x-y", "2"))}\\)
                        </li>
                        <li style="${"padding-top: 0.5em;"}">\\(\\cos x - \\cos y = -2\\sin ${escape(TeX.dfrac("x + y", "2"))} \\sin${escape(TeX.dfrac("x-y", "2"))}\\)
                        </li>
                        <li style="${"padding-top: 0.5em;"}">\\(\\sin x + \\sin y = 2\\sin ${escape(TeX.dfrac("x + y", "2"))} \\cos${escape(TeX.dfrac("x-y", "2"))}\\)
                        </li>
                        <li style="${"padding-top: 0.5em;"}">\\(\\sin x - \\sin y = 2\\cos ${escape(TeX.dfrac("x + y", "2"))} \\sin${escape(TeX.dfrac("x-y", "2"))}\\)
                        </li></ol></li>
                <li><ol><li>\\(2\\cos x \\cos y = \\cos(x + y) + \\cos(x-y)\\)
                        </li>
                        <li>\\(-2\\sin x \\sin y = \\cos(x + y) - \\cos(x -y)\\)
                        </li>
                        <li>\\(2\\sin x \\cos y = \\sin(x + y) + \\sin(x - y)\\)
                        </li>
                        <li>\\(2\\cos x \\sin y = \\sin(x + y) - \\sin(x - y)\\)
                        </li></ol></li>
                <li>\\(\\sin x = 0\\) gives \\(x = n\\pi\\), where \\(n${escape(TeX.inZ)}\\)
                </li>
                <li>\\(\\cos x = 0\\) gives \\(x = (2n + 1)${escape(TeX.dfrac("\\pi", "2"))}\\), where \\(n${escape(TeX.inZ)}\\)
                </li>
                <li>\\(\\sin x = \\sin y\\) implies \\(x = n\\pi + (-1)^n y\\), where \\(n${escape(TeX.inZ)}\\)
                </li>
                <li>\\(\\cos x = \\cos y\\) implies \\(x = 2n\\pi \\pm y\\), where \\(n${escape(TeX.inZ)}\\)
                </li>
                <li>\\(\\tan x = \\tan y\\) implies \\(x = n\\pi + y\\), where \\(n${escape(TeX.inZ)}\\)
                </li></ul></section></article>`;
});
const Induction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>Principle of Mathematical Induction</h1>
        <section><ul><li>Suppose there is a given statement \\(P(n)\\) involving natural number \\(n\\) such that
                    <ol><li>The statement is true for \\(n = 1\\), i.e. \\(P(1)\\) is true, and
                        </li>
                        <li>If the statement is true for \\(n = k\\) (where \\(k\\) is some positive integer), then the statement is also true for \\(n = k + 1\\), i.e. truth of \\(P(k)\\) implies the truth of \\(P(k + 1)\\).
                        </li></ol>
                    Then, \\(P(n)\\) is true for all natural numbers \\(n\\).
                </li></ul></section></article>`;
});
const Complex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>Complex numbers and quadratic equations</h1>
        <section><ul><li>A number of the form \\(a + ib\\), where \\(a\\) and \\(b\\) are real numbers, is called a <em>complex number</em>, \\(a\\) is called the <em>real part</em> and \\(b\\) is called the <em>imaginary part</em> of the complex number.
                </li>
                <li>Let \\(z_1 = a + ib\\) and \\(z_2 = c + id\\). Then
                    <ol><li>\\(z_1 + z_2 = (a + c) + i (b + d)\\)
                        </li>
                        <li>\\(z_1z_2 = (ac-bd) + i(ad + bc)\\)
                        </li></ol></li>
                <li>For any non-zero complex number \\(z = a + ib (a\\neq 0, b\\neq 0)\\), there exists the complex number \\(${escape(TeX.dfrac("a", "a^2 + b^2"))} + i${escape(TeX.dfrac("-b", "a^2 + b^2"))}\\), denoted by \\(${escape(TeX.dfrac(1, "z"))}\\) or \\(${escape(TeX.pow("z", -1))}\\), called the <em>multiplicative inverse</em> of \\(z\\).
                </li>
                <li>For any integer \\(k\\), \\(${escape(TeX.pow("i", "4k"))} = 1, ${escape(TeX.pow("i", "4k + 1"))} = i, ${escape(TeX.pow("i", "4k + 2"))} = -1, ${escape(TeX.pow("i", "4k + 3"))} = -i\\)
                </li>
                <li>The conjugate of the complex number \\(z = a + ib\\), denoted by \\(${escape(TeX.bar("z"))}\\), is given by \\(${escape(TeX.bar("z"))} = a - ib\\).
                </li>
                <li>The polar form of the complex number \\(z = x + iy\\) is \\(r(\\cos\\theta + i\\sin\\theta)\\), where \\(r = ${escape(TeX.length("x", "y"))}\\) (the modulus of \\(z\\)) and \\(\\cos\\theta = ${escape(TeX.dfrac("x", "r"))}, \\sin\\theta = ${escape(TeX.dfrac("y", "r"))}\\). \\(\\theta\\) is known as the argument of \\(z\\). The value of \\(\\theta\\), such that \\(-\\pi ${escape(TeX.less)} \\theta \\leq \\pi\\), is called the <em>principal argument</em> of \\(z\\).
                </li>
                <li>A polynomial of equation of \\(n\\) degree has \\(n\\) roots.
                </li>
                <li>The solutions of the quadratic equation \\(ax^2 + bx + c = 0\\), where \\(a, b, c${escape(TeX.inR)}\\), \\(a\\neq 0, b^2 - 4ac${escape(TeX.less)} 0\\), are given by \\(x = ${escape(TeX.dfrac(`-b\\pm   i` + TeX.sqrt("4ac-b^2"), "2a"))}\\)
                </li></ul></section></article>`;
});
const Permutation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>Permutation and combination</h1>
        <section><ul><li><em>Fundamental principle of counting</em> If an event can occur in \\(m\\) different ways, following which another event can occur in \\(n\\) different ways, then the total number of occurrence of the events in the given order is \\(m\\times n\\)
                </li>
                <li>The number of permutations of \\(n\\) different things taken \\(r\\) at a time, where repetition is not allowed, is denoted by \\(${escape(TeX.npr("n", "r"))}\\) and is given by \\[${escape(TeX.npr("n", "r"))} = ${escape(TeX.dfrac("n!", "(n-r)!"))}\\] where \\(0\\leq r \\leq n\\)
                </li>
                <li>\\(n! = 1\\times 2\\times 3\\times \\dots\\times n\\)
                </li>
                <li>\\(n! = n\\times (n - 1)!\\)
                </li>
                <li>The number of permutations of \\(n\\) different things, taken \\(r\\) at a time, where repeatition is allowed, is \\(n^r\\).
                </li>
                <li>The number of permutations of \\(n\\) objects taken all at a time, where \\(p_1\\) objects are of first kind, \\(p_2\\) objects are of the second kind, ..., \\(p_k\\) objects are of the \\(k\\)th kind and rest, if any, are all different is \\[${escape(TeX.frac("n!", "p_1!p_2!\\cdots p_k!"))}\\]
                </li>
                <li>The number of combinations of \\(n\\) different things taken \\(r\\) at a time, denoted by \\(${escape(TeX.ncr())}\\) is given by \\[${escape(TeX.ncr())} = ${escape(TeX.frac("n!", "r!(n-r)!"))}\\]
                </li>
                <li>Selecting \\(r\\) objects out of \\(n\\) objects is same as rejecting \\(n-r\\) objects, i.e.
                    \\[${escape(TeX.ncr("n", "n-r"))} = ${escape(TeX.ncr())}\\]
                </li>
                <li>\\(${escape(TeX.ncr())} + ${escape(TeX.ncr("n", "r-1"))} = ${escape(TeX.ncr("n + 1", "r"))}\\)
                </li></ul></section></article>`;
});
const Binomial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>Binomial Theorem</h1>
        <section><ul><li>The expansion of a binomial for any positive integral \\(n\\) is given by Binomial Theorem, which is \\[(a + b)^n = ${escape(TeX.ncr("n", 0))}a^n + ${escape(TeX.ncr("n", 1))}${escape(TeX.pow("a", "n-1"))}b + ${escape(TeX.ncr("n", 2))}${escape(TeX.pow("a", "n-2"))}b^2 + \\cdots + ${escape(TeX.ncr("n", "n-1"))}a${escape(TeX.pow("b", "n-1"))} + ${escape(TeX.ncr("n", "n"))}b^n\\]
                </li>
                <li>The general term of an expansion \\((a + b)^n\\) is \\[${escape(TeX.sub("T", "r + 1"))} = ${escape(TeX.ncr())}${escape(TeX.pow("a", "n-r"))}b^r\\]
                </li>
                <li>If \\(n\\) is even, then the middle term is the \\(\\Big(${escape(TeX.dfrac("n", 2))} + 1\\Big)\\)th term. If \\(n\\) is odd, then the middle terms are \\(\\Big(${escape(TeX.dfrac("n", 2))} + 1\\Big)\\)th and \\(\\Big(${escape(TeX.dfrac("n + 1", 2))} + 1\\Big)\\)th terms.
                </li></ul></section></article>`;
});
const Sequences = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>Sequences and series</h1>
        <section><ul><li>Let \\(a_1, a_2, a_3, \\dots\\) be the sequences, then the sum expressed as \\(a_1 + a_2 + a_3 + \\cdots \\) is called <em>series</em>. A series is called <em>finite series</em> if it has got finite number of terms.
                </li>
                <li>An arithmetic progression (A.P.) is a sequence in which terms increase or decrease regularly by the same constant. This constant is called <em>common difference</em> of the A.P. Usually, we denote the first term of A.P. by \\(a\\), the common difference by \\(d\\) and the last term by \\(l\\). The general term or the \\(n\\)th term of the A.P. is given by \\(a_n = a + (n - 1)d\\).
                </li>
                <li>The sum \\(S_n\\) of the first \\(n\\) terms of A.P. is given by \\[S_n = ${escape(TeX.frac("n", 2))}[2a + (n-1)d] = ${escape(TeX.frac("n", 2))}(a + l)\\]
                </li>
                <li>The <em>arithmetic mean</em> \\(A\\) of any two numbers \\(a\\) and \\(b\\) is given by \\(${escape(TeX.dfrac("a + b", 2))}\\), i.e. the sequence \\(a, A, b\\) is in A.P.
                </li>
                <li>A sequence is said to be a <em>geometric progression</em> or G.P., if the ratio of any term to its preceding term is same throughout. This constant factor is called the <em>common ratio</em>. Usually, we denote the first term of a G.P. by \\(a\\) and its common ratio by \\(r\\). The general or the \\(n\\)th term of G.P. is given by \\(a_n = a${escape(TeX.pow("r", "n-1"))}\\).
                </li>
                <li>The sum \\(S_n\\) of the first \\(n\\) terms of G.P. is given by \\[S_n = ${escape(TeX.frac("a(r^n - 1)", "r-1"))}\\] if \\(r\\neq 1\\).
                </li>
                <li>The geometric mean (G) of any two positive numbers \\(a\\) and \\(b\\) is given by \\(${escape(TeX.sqrt("ab"))}\\), i.e. the sequence \\(a, G, b\\) is G.P.
                </li>
                <li>\\(1 + 2 + 3 + \\cdots + n = ${escape(TeX.dfrac("n(n + 1)", 2))}\\)
                </li>
                <li>\\(1 ^2 + 2^2 + 3^2 + \\cdots + n^2 = ${escape(TeX.dfrac("n(n + 1)(2n + 1)", 6))}\\)
                </li></ul></section></article>`;
});
const StraightLine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>Straight Line</h1>
        <section><ul><li><em>Slope</em> (\\(m\\)) of a non-vertical line passing through the points \\((x_1, y_1)\\) and \\((x_2, y_2)\\) is given by \\[m = ${escape(TeX.frac("y_2 - y_1", "x_2 - x_1"))}, x_1\\neq x_2\\]
                </li>
                <li>If a line makes an angle \\(\\alpha\\) with the positive direction of \\(x\\)-axis, then the slope of the line is given by \\(m = \\tan \\alpha, \\alpha\\neq 90^\\circ\\)
                </li>
                <li>An acute angle (say \\(\\theta\\)) between lines \\(L_1\\) and \\(L_2\\) with slopes \\(m_1\\) and \\(m_2\\) is given by \\[\\tan\\theta = \\Big |${escape(TeX.frac("m_2-m_1", "1 + m_1m2"))}\\Big |, 1 + m_1m_2\\neq 0\\]
                </li>
                <li>Equation of a line making intercepts \\(a\\) and \\(b\\) on the \\(x\\)- and \\(y\\)-axis, respectively, is \\[${escape(TeX.frac("x", "a"))} + ${escape(TeX.frac("y", "b"))} = 1\\]
                </li>
                <li>Equation of the line having normal distance from origin \\(p\\) and angle between normal and the positive \\(x\\)-axis \\(\\omega\\) is given by \\[x\\cos\\omega + y\\sin\\omega = p \\]
                </li>
                <li>The perpendicular distance (\\(d\\)) of a line \\(Ax + By + C = 0\\) from a point \\((x_1, y_1)\\) is given by \\[d = ${escape(TeX.frac("|Ax_1 + By_1 + C|", TeX.sqrt("A^2 + B^2")))}\\]
                </li>
                <li>Distance between the parallel lines \\(Ax + By + C_1 = 0\\) and \\(Ax + By + C_2 = 0\\), is given by \\[d = ${escape(TeX.frac("|C_1 - C_2|", TeX.length("A", "B")))}\\]
                </li></ul></section></article>`;
});
const Conic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>Conic Sections</h1>
        <section><ul><li>A parabola is the set of all points in a plane that are equidistant from a fixed line and a fixed point in the plane.
                </li>
                <li>The equation of the parabola with focus at \\((a, 0) a${escape(TeX.more)} 0\\) and directrix \\(x = -a\\) is \\[y^2 = 4ax\\]
                </li>
                <li>Latus rectum of a parabola is a line segment perpendicular to the axis of the parabola, through the focus and whose end points lie on the parabola.
                </li>
                <li>Length of the latus rectum of the parabola \\(y^2 = 4ax\\) is \\(4a\\).
                </li>
                <li>An ellipse is the set of all points in a plane, the sum of whose distances from two fixed points in the plane is a constant.
                </li>
                <li>The equation of an ellipse with foci on the \\(x\\)-axis is \\[${escape(TeX.frac("x^2", "a^2"))} + ${escape(TeX.frac("y^2", "b^2"))} = 1\\]
                </li>
                <li>Latus rectum of an ellipse is a line segment perpendicular to the major axis through any of the foci and whose end points lie on the ellipse.
                </li>
                <li>Length of the latus rectum of the ellipse \\(${escape(TeX.dfrac("x^2", "a^2"))} + ${escape(TeX.dfrac("y^2", "b^2"))} = 1\\) is \\(${escape(TeX.dfrac("2b^2", "a"))}\\).
                </li>
                <li>The eccentricity of an ellipse is the ratio between the distances from the center of the ellipse to one of the foci and to one of the vertices of the ellipse.
                </li>
                <li>A hyperbola is the set of all points in a plane, the difference of whose distances from two fixed points in the plane is a constant.
                </li>
                <li>The equation of a hyperbola with foci on the \\(x\\)-axis is \\[${escape(TeX.frac("x^2", "a^2"))} - ${escape(TeX.frac("y^2", "b^2"))} = 1\\]
                </li>
                <li>Latus rectum of a hyperbola is a line segment perpendicular to the transverse axis through any of the foci and whose end points lie on the hyperbola.
                </li>
                <li>Length of the latus rectum of the hyperbola \\(${escape(TeX.dfrac("x^2", "a^2"))} - ${escape(TeX.dfrac("y^2", "b^2"))} = 1\\) is \\(${escape(TeX.dfrac("2b^2", "a"))}\\).
                </li>
                <li>The eccentricity of a hyperbola is the ratio between the distances from the center of the hyperbola to one of the foci and to one of the vertices of the hyperbola.
                </li></ul></section>
        <section><div class="${"remark"}"><ul><li>The reflection of orthocenter about the foot of the perpendicular lies on the circumcircle of the triangle.
                    </li></ul></div></section></article>`;
});
const ThreeD = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>Introduction to Three Dimensional Geometry</h1>
        <section><ul><li>The coordinates of the point \\(R\\) which divides the line segment joining two points \\(P(x_1, y_1, z_1)\\) and \\(Q(x_2, y_2, z_2)\\) internally and externally in the ratio \\(m:n\\) are given by \\[\\Big(${escape(TeX.frac("mx_2 + nx_1", "m + n"))}, ${escape(TeX.frac("my_2 + ny_1", "m + n"))}, ${escape(TeX.frac("mz_2 + nz_1", "m + n"))}\\Big)\\] and \\[\\Big(${escape(TeX.frac("mx_2 - nx_1", "m - n"))}, ${escape(TeX.frac("my_2 - ny_1", "m - n"))}, ${escape(TeX.frac("mz_2 - nz_1", "m - n"))}\\Big)\\]
                </li></ul></section>
        <section><ul><li>The direction cosines of a line are \\(l = \\cos\\alpha, m = \\cos\\beta, n = \\cos\\gamma\\) where \\(\\alpha, \\beta, \\gamma\\) are angles the line makes with the axes in order.
                </li>
                <li>\\(l^2 + m^2 + n^2 = 1\\)
                </li>
                <li>The direction ratio of the line segment joining \\(P(x_1, y_1, z_1)\\) and \\(Q(x_2, y_2, z_2)\\) are \\(x_2-x_1, y_2 - y_1, z_2 - z_1\\)
                </li>
                <li>Equation of a line passing through \\(${escape(TeX.vec("a"))}\\) parallel to another vector \\(${escape(TeX.vec("b"))}\\) is given by \\[${escape(TeX.vec("r"))} = ${escape(TeX.vec("a"))} + \\lambda ${escape(TeX.vec("b"))}\\]
                </li>
                <li>Direction cosines are \\(${escape(TeX.dfrac("b_x", "|b|"))}, ${escape(TeX.dfrac("b_y", "|b|"))}, ${escape(TeX.dfrac("b_z", "|b|"))}\\)
                </li>
                <li>Cartesian equation of the line is \\[${escape(TeX.dfrac("x - x_1", "b_x"))} = ${escape(TeX.dfrac("y - y_1", "b_y"))} = ${escape(TeX.dfrac("z - z_1", "b_z"))}\\]
                </li>
                <li>Equation of line passing through two points \\(${escape(TeX.vec("a"))}\\) and \\(${escape(TeX.vec("b"))}\\) is \\[${escape(TeX.vec("r"))} = ${escape(TeX.vec("a"))} + \\lambda (${escape(TeX.vec("b"))} - ${escape(TeX.vec("a"))})\\]
                </li>
                <li>Cartesian equation of the line is \\[${escape(TeX.dfrac("x - x_1", "x_2-x_1"))} = ${escape(TeX.dfrac("y - y_1", "y_2-y_1"))} = ${escape(TeX.dfrac("z - z_1", "z_2-z_1"))}\\]
                </li>
                <li><strong>Distance between two skew lines</strong>:  Let \\(${escape(TeX.vec("r"))} = ${escape(TeX.vec("a"))}_1 + \\lambda ${escape(TeX.vec("b"))}_1\\) and \\(${escape(TeX.vec("r"))} = ${escape(TeX.vec("a"))}_2 + \\mu ${escape(TeX.vec("b"))}_2\\) be two lines. The magnitude of the shortest distance vector is equal to the projection of  \\(\\Delta${escape(TeX.vec("a"))} = ${escape(TeX.vec("a"))}_2 -  ${escape(TeX.vec("a"))}_1\\) along the direction of the shortest vector. The shortest vector will be perpendicular to both the lines. Therefore, the direction of the shortest vector is given by \\(${escape(TeX.vec("b"))} = ${escape(TeX.vec("b"))}_1 \\times  ${escape(TeX.vec("b"))}_2\\). Hence, the length of the shortest vector will \\[d = \\Big |${escape(TeX.frac(TeX.vec("b") + "\\cdot\\Delta" + TeX.vec("a"), "|" + TeX.vec("b") + "|"))}\\Big |\\]
                </li>
                <li>The equation of a plane whose perpendicular distance from the origin is \\(d\\) and normal vector is \\(${escape(TeX.hat("n"))}\\) is \\[${escape(TeX.vec("r"))}\\cdot${escape(TeX.hat("n"))} = d\\]
                </li>
                <li>\\(ax + by + cz = d\\) is equation of a plane whose normal vector is along \\(a${escape(TeX.hat("i"))} + b${escape(TeX.hat("j"))} + c${escape(TeX.hat("k"))}\\) and distance from the origin is proportional to \\(d\\).
                </li>
                <li>Equation of a plane passing through a point ${escape(`\\(\\vec{a}\\)`)} and perpendicular to a vector ${escape(`\\(\\hat{n}\\)`)} is given by ${escape(`\\[(\\vec{r} - \\vec{a})\\cdot \\hat{n} = 0\\]`)}</li>
                <li>Equation of a plane passing through three non-colinear points ${escape(`\\(\\vec{a}, \\vec{b}, \\vec{c}\\)`)} and perpendicular to a vector ${escape(`\\(\\hat{n}\\)`)} is given by ${escape(`\\[(\\vec{r} - \\vec{a})\\cdot [(\\vec{b} - \\vec{a})\\times (\\vec{c} - \\vec{a})] = 0\\]`)}</li>
                <li>Equation of a plane passing through the intersection of two given planes \\[${escape(TeX.vec("r"))}\\cdot(${escape(TeX.hat("n"))}_1 + \\lambda ${escape(TeX.hat("n"))}_2) = d_1 + \\lambda d_2\\]
                </li>
                <li>Two lines \\(${escape(TeX.vec("r"))} = ${escape(TeX.vec("a"))}_1 + \\lambda ${escape(TeX.vec("b"))}_1\\) and \\(${escape(TeX.vec("r"))} = ${escape(TeX.vec("a"))}_2 + \\mu ${escape(TeX.vec("b"))}_2\\) are coplanar iff \\(\\Delta${escape(TeX.vec("a"))} = ${escape(TeX.vec("a"))}_2 -  ${escape(TeX.vec("a"))}_1\\) is perpendicular to \\(${escape(TeX.vec("b"))} = ${escape(TeX.vec("b"))}_1 \\times  ${escape(TeX.vec("b"))}_2\\)
                </li>
                <li>Distance of a point from a plane is \\(|d - ${escape(TeX.vec())}\\cdot${escape(TeX.hat("n"))}|\\)
                </li></ul></section></article>`;
});
const LimitDerivative = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>Limits and derivatives</h1>
        <section><ul><li style="${"padding-top: 0.5em;"}">\\(${escape(TeX.lim("x", "a"))}${escape(TeX.dfrac("x^n - a^n", "x-a"))} = n${escape(TeX.pow("a", "n-1"))}\\)
                </li>
                <li style="${"padding-top: 0.5em;"}">\\(${escape(TeX.lim("x", 0))}${escape(TeX.dfrac("\\sin x", "x"))} = 1\\)
                </li>
                <li style="${"padding-top: 0.5em;"}">\\(${escape(TeX.lim("x", 0))}${escape(TeX.dfrac("1-\\cos x", "x"))} = 0\\)
                </li>
                <li>The derivative of a function \\(f\\) at \\(x\\) is defined by \\[f&#39;(x) = ${escape(TeX.frac("df(x)", "dx"))} = ${escape(TeX.lim("h", 0))}${escape(TeX.frac("f(x + h) - f(x)", "h"))}\\]
                </li>
                <li>For functions \\(u\\) and \\(v\\) the following holds:
                    <ol><li>\\((u\\pm v)&#39; = u&#39;\\pm v&#39;\\)
                        </li>
                        <li>\\((uv)&#39; = u&#39;v + uv&#39;\\)
                        </li>
                        <li>\\(\\Big(${escape(TeX.dfrac("u", "v"))}\\Big )&#39; = ${escape(TeX.dfrac("u'v-uv'", "v^2"))}\\) provided all are defined.
                        </li></ol></li>
                <li>Following are some of the standard derivatives
                    <ol><li>\\(${escape(TeX.dfrac("d", "dx"))}(x^n) = n${escape(TeX.pow("x", "n-1"))}\\)
                        </li>
                        <li style="${"padding-top: 0.5em;"}">\\(${escape(TeX.dfrac("d", "dx"))}(\\sin x) = \\cos x\\)
                        </li>
                        <li style="${"padding-top: 0.5em;"}">\\(${escape(TeX.dfrac("d", "dx"))}(\\cos x) = -\\sin x\\)
                        </li></ol></li></ul></section></article>`;
});
const Probability = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>Probability</h1>
        <section><ul><li><strong>Sample space:</strong> The set of all possible outcomes
                </li>
                <li><strong>Sample points:</strong> Elements of sample space
                </li>
                <li><strong>Event:</strong> A subset of the sample space
                </li>
                <li><strong>Impossible event:</strong> The empty set
                </li>
                <li><strong>Sure event:</strong> The whole sample space
                </li>
                <li><strong>Complementary event or &#39;not&#39; event:</strong> The set \\(A&#39;\\) or \\(S-A\\)
                </li>
                <li><strong>Event \\(A\\) or \\(B\\):</strong> The set \\(A\\cup B\\)
                </li>
                <li><strong>Event \\(A\\) and \\(B\\):</strong> The set \\(A\\cap B\\)
                </li>
                <li><strong>Event \\(A\\) and not \\(B\\):</strong> The set \\(A-B\\)
                </li>
                <li><strong>Mutually exclusive event:</strong> \\(A\\) and \\(B\\) are mutually exclusive if \\(A\\cap B=\\phi\\)
                </li>
                <li><strong>Exhaustive and mutually exclusive events:</strong> Events \\(E_1, E_2,\\dots,E_n\\) are mutually exclusive and exhaustive if \\(E_1\\cup E_2\\cup\\cdots\\cup E_n = S\\) and \\(\\forall i\\neq j, E_i\\cap E_j = \\phi\\)
                </li>
                <li><strong>Probability:</strong> Number \\(P(\\omega_i)\\) associated with sample point \\(\\omega_i\\) such that 
                    <ol><li>\\(0\\leq P(\\omega_i)\\leq 1\\)
                        </li>
                        <li>\\(${escape(TeX.sum("\\omega_i\\in S"))}P(\\omega_i) = 1\\)
                        </li>
                        <li>\\(P(A) = ${escape(TeX.sum("\\omega_i\\in A"))}P(\\omega_i)\\)
                        </li></ol>
                    The number \\(P(\\omega_i)\\) is called the <em>probability</em> of the outcome \\(\\omega_i\\).
                </li>
                <li><strong>Equally likely outcomes:</strong> All outcomes with equal probability
                </li>
                <li><strong>Probability of an event:</strong> For a finite sample space with equally likely outcomes, Probability of an event \\(P(A) = ${escape(TeX.dfrac("n(A)", "n(S)"))}\\), where \\(n(A)\\) = number of elements in the set \\(A\\), \\(n(S)\\) = number of elements in the set \\(S\\).
                </li>
                <li>If \\(A\\) and \\(B\\) are any two events, then \\(P(A~or~B) = P(A) + P(B) - P(A~and~B)\\), equivalently, \\(P(A\\cup B) = P(A) + P(B) - P(A\\cap B)\\)
                </li>
                <li>If \\(A\\) and \\(B\\) are mutually exclusive, then \\(P(A\\cup B) = P(A) + P(B)\\)
                </li>
                <li>If \\(A\\) is any event, then \\(P(not~A) = 1 - P(A)\\)
                </li></ul></section></article>`;
});
const Inverse = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>Inverse Trigonometric functions</h1>
        <section><table><thead><th>Functions</th>
                    <th>Domain</th>
                    <th>Range (Principal Value Branches)</th></thead>
                <tr><td>\\(y = ${escape(TeX.asin)} x\\)
                    </td>
                    <td>\\([-1, 1]\\)
                    </td>
                    <td>\\([${escape(TeX.frac("-\\pi", 2))}, ${escape(TeX.frac("\\pi", 2))}]\\)
                    </td></tr>
                <tr><td>\\(y = ${escape(TeX.acos)} x\\)
                    </td>
                    <td>\\([-1, 1]\\)
                    </td>
                    <td>\\([0, \\pi]\\)
                    </td></tr>
                <tr><td>\\(y = ${escape(TeX.atan)} x\\)
                    </td>
                    <td>${escape(TeX.R)}</td>
                    <td>\\([${escape(TeX.frac("-\\pi", 2))}, ${escape(TeX.frac("\\pi", 2))}]\\)
                    </td></tr>
                <tr><td>\\(y = ${escape(TeX.acot)} x\\)
                    </td>
                    <td>${escape(TeX.R)}</td>
                    <td>\\([0, \\pi]\\)
                    </td></tr>
                <tr><td>\\(y = ${escape(TeX.asec)} x\\)
                    </td>
                    <td>${escape(TeX.R)}\\(-(-1,1)\\)
                    </td>
                    <td>\\([0, \\pi] - ${escape(TeX.Set(TeX.piby2))}\\)
                    </td></tr>
                <tr><td>\\(y = ${escape(TeX.acosec)} x\\)
                    </td>
                    <td>${escape(TeX.R)}\\(-(-1,1)\\)
                    </td>
                    <td>\\([${escape(TeX.mpiby2)}, ${escape(TeX.piby2)}] - ${escape(TeX.Set(0))}\\)
                    </td></tr></table>
            <table><tr><td>\\(y = ${escape(TeX.asin)}x\\implies x = \\sin y\\)
                    </td>
                    <td>\\(x = \\sin y\\implies y = ${escape(TeX.asin)} x\\)
                    </td></tr>
                <tr><td>\\(\\sin (${escape(TeX.asin)}x) = x\\)
                    </td>
                    <td>\\(${escape(TeX.asin)} (\\sin x) = x\\)
                    </td></tr>
                <tr><td>\\(${escape(TeX.asin)}${escape(TeX.dfrac(1, "x"))} = ${escape(TeX.acosec)}x\\)
                    </td>
                    <td>\\(${escape(TeX.acos)}(-x) = \\pi - ${escape(TeX.acos)}x\\)
                    </td></tr>
                <tr><td>\\(${escape(TeX.acos)}${escape(TeX.dfrac(1, "x"))} = ${escape(TeX.asec)}x\\)
                    </td>
                    <td>\\(${escape(TeX.asec)}(-x) = \\pi - ${escape(TeX.asec)}x\\)
                    </td></tr>
                <tr><td>\\(${escape(TeX.atan)}${escape(TeX.dfrac(1, "x"))} = ${escape(TeX.acot)}x\\)
                    </td>
                    <td>\\(${escape(TeX.acot)}(-x) = \\pi - ${escape(TeX.acot)}x\\)
                    </td></tr>
                <tr><td>\\(${escape(TeX.asin)}(-x) = -${escape(TeX.asin)}x\\)
                    </td>
                    <td>\\(${escape(TeX.atan)}(-x) = -${escape(TeX.atan)}x\\)
                    </td></tr>
                <tr><td>\\(${escape(TeX.atan)}x + ${escape(TeX.acot)}x = ${escape(TeX.piby2)}\\)
                    </td>
                    <td>\\(${escape(TeX.acosec)}(-x) = -${escape(TeX.acosec)}x\\)
                    </td></tr>
                <tr><td>\\(${escape(TeX.asin)}x + ${escape(TeX.acos)}x = ${escape(TeX.piby2)}\\)
                    </td>
                    <td>\\(${escape(TeX.acosec)}x + ${escape(TeX.asec)}x = ${escape(TeX.piby2)}\\)
                    </td></tr>
                <tr><td>\\(${escape(TeX.atan)}x + ${escape(TeX.atan)}y = ${escape(TeX.atan)}${escape(TeX.dfrac("x + y", "1-xy"))} \\)
                    </td>
                    <td>\\(2${escape(TeX.atan)}x = ${escape(TeX.atan)}${escape(TeX.dfrac("2x", "1-x^2"))}\\)
                    </td></tr>
                <tr><td>\\(${escape(TeX.atan)}x - ${escape(TeX.atan)}y = ${escape(TeX.atan)}${escape(TeX.dfrac("x - y", "1+xy"))} \\)
                    </td>
                    <td>\\(2${escape(TeX.atan)}x = ${escape(TeX.asin)}${escape(TeX.dfrac("2x", "1+x^2"))} = ${escape(TeX.acos)}${escape(TeX.dfrac("1-x^2", "1+x^2"))}\\)
                    </td></tr></table></section></article>`;
});
const Matrices = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>Matrices</h1>
        <section><ul><li>If \\(A = ${escape(TeX.mat())}\\) and \\(B = ${escape(TeX.mat("b", "j", "k", "n", "p"))}\\), then \\(AB = C = ${escape(TeX.mat("c", "i", "k", "m", "p"))}\\), where \\[${escape(TeX.sub("c", "ik"))} = ${escape(TeX.sum("j = 1", "n"))}${escape(TeX.sub("a", "ij"))}${escape(TeX.sub("b", "jk"))}\\]
                </li>
                <li>\\(A\\) is a symmetric matrix if \\(A^T = A\\)
                </li>
                <li>\\(A\\) is a skew symmetric matrix if \\(A^T = -A\\)
                </li>
                <li>For any square matrix \\(A\\) with real number entries, \\(A+A^T\\) is a symmetric matrix and \\(A-A^T\\) is a skew symmetric matrix.
                </li>
                <li>Any square matrix can be expressed as the sum of a symmetric and a skew symmetric matrix. \\[A = ${escape(TeX.frac(1, 2))}(A + A^T) + ${escape(TeX.frac(1, 2))}(A - A^T)\\]
                </li>
                <li>Elementary operations of a matrix are as follows:
                    <ol><li>\\(R_i\\leftrightarrow R_j\\) or \\(C_i\\leftrightarrow C_j\\)
                        </li>
                        <li>\\(R_i\\to kR_i\\) or \\(C_i\\to kC_i\\)
                        </li>
                        <li>\\(R_i\\to R_i + kR_j\\) or \\(C_i\\to C_i + kC_j\\)
                        </li></ol></li></ul></section></article>`;
});
const Determinants = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>Determinants</h1>
        <section><ul><li>\\(|A^T| = |A|\\)
                </li>
                <li>If we interchange any two rows (or columns), then sign of determinant changes. \\[|A(R_i\\leftrightarrow R_j)| = - |A|\\]
                </li>
                <li>If any two rows or any two columns are identical or propertional, then value of determinant is zero. \\[|A(R_i = kR_j)| = 0\\]
                </li>
                <li>If we multiply each element of a row or a column of a determinant by constant \\(k\\), then value of determinant is multiplied by \\(k\\). \\[|A(R_i \\to kR_i)| = k|A|\\]
                </li>
                <li>Multiplying a determinant by \\(k\\) means multiplying elements of only one row or one column by \\(k\\).
                </li>
                <li>If \\(A = ${escape(TeX.mat("a", "i", "j", 3, 3))}\\), then \\(\\vert k\\cdot A\\vert = k^3\\vert A\\vert\\)
                </li>
                <li>If elements of a row or a column in a determinant can be expressed as sum of two or more elements, then the given determinant can be expressed as sum of two or more determinants (other rows remain the same).
                </li>
                <li>If to each element of a row or a column of a determinant the equimultiples of corresponding elements of other rows or columns are added, then value of determinant remains same. \\[|A(R_i\\to R_i + kR_j)| = |A|\\]
                </li>
                <li>Area of a triangle whose vertices are \\((x_1, y_1), (x_2, y_2), (x_3, y_3)\\) is equal to \\[${escape(TeX.frac(1, 2))}[x_1(y_2-y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)]\\] which is equal to ${escape(`\\[\\Delta = \\frac{1}{2}
                        \\left | \\begin{matrix}
                        x_1 & y_1 & 1\\\\
                        x_2 & y_2 & 1\\\\
                        x_3 & y_3 & 1
                        \\end{matrix}\\right |
                        \\]`)}</li>
                <li>Minor of an element \\(${escape(TeX.sub("a", "ij"))}\\) of the determinant of matrix \\(A\\) is the determinant obtained by deleting \\(i\\)the row and \\(j\\)th column and denoted by \\(${escape(TeX.sub("M", "ij"))}\\).
                </li>
                <li>Cofactor of \\(${escape(TeX.sub("a", "ij"))}\\) is given by \\(${escape(TeX.sub("A", "ij"))} = ${escape(TeX.pow("(-1)", "i + j"))}${escape(TeX.sub("M", "ij"))}\\) 
                </li>
                <li>For any row \\(i\\), \\(|A| = ${escape(TeX.sum("j"))}${escape(TeX.sub("a", "ij"))}${escape(TeX.sub("A", "ij"))}\\)
                </li>
                <li>For any row \\(i\\neq k\\), \\(${escape(TeX.sum("j"))}${escape(TeX.sub("a", "ij"))}${escape(TeX.sub("A", "kj"))} = 0\\)
                </li>
                <li>The adjoint of a matrix \\(A\\) is the matrix of cofactors of \\(A\\), i.e. \\[${escape(TeX.sub("adj(A)", "ij"))} = ${escape(TeX.sub("A", "ij"))}\\]
                </li>
                <li>\\(${escape(TeX.pow("A"))} = ${escape(TeX.dfrac(1, "|A|"))}adj(A)\\)
                </li>
                <li>A square matrix \\(A\\) is said to be singular or non-singular according as \\(|A| = 0\\) or \\(|A|\\neq 0\\)
                </li>
                <li>Unique solution of equation \\(AX = B\\) is given by \\(X = ${escape(TeX.pow("A"))}B\\), where \\(|A| \\neq 0\\)
                </li>
                <li>A system of equation is consistent or inconsistent according as its solution exists or not.
                </li>
                <li>For a square matrix \\(A\\) in matrix equation \\(AX = B\\)
                    <ol><li>\\(|A|\\neq 0\\), there exists unique solution
                        </li>
                        <li>\\(|A| = 0\\) and \\(adj(A) B\\neq 0\\), then there exists no solution. 
                        </li>
                        <li>\\(|A| = 0\\) and \\(adj(A) B = 0\\), then system may or may not be consistent.
                        </li></ol></li></ul></section></article>`;
});
const Continuity = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>Continuity and Differentiability</h1>

        <section><table><tr><td>\\(${escape(TeX.dfrac("d", "dx"))}(${escape(TeX.asin)}x) = ${escape(TeX.dfrac(1, TeX.sqrt("1-x^2")))}\\)
                    </td>
                    <td>\\(${escape(TeX.dfrac("d", "dx"))}(${escape(TeX.acos)}x) = -${escape(TeX.dfrac(1, TeX.sqrt("1-x^2")))}\\)
                    </td></tr>
                <tr><td>\\(${escape(TeX.dfrac("d", "dx"))}(${escape(TeX.atan)}x) = ${escape(TeX.dfrac(1, "1+x^2"))}\\)
                    </td>
                    <td>\\(${escape(TeX.dfrac("d", "dx"))}(${escape(TeX.acot)}x) = -${escape(TeX.dfrac(1, "1+x^2"))}\\)
                    </td></tr>
                <tr><td>\\(${escape(TeX.dfrac("d", "dx"))}(${escape(TeX.asec)}x) = ${escape(TeX.dfrac(1, "x" + TeX.sqrt("1-x^2")))}\\)
                    </td>
                    <td>\\(${escape(TeX.dfrac("d", "dx"))}(${escape(TeX.acosec)}x) = -${escape(TeX.dfrac(1, "x" + TeX.sqrt("1-x^2")))}\\)
                    </td></tr></table>
            <ul><li><strong>Rolle&#39;s Theorem:</strong> If \\(f:[a,b]\\to R\\) is continuous on \\([a,b]\\) and differentiable on \\((a, b)\\) such that \\(f(a) = f(b)\\), then there exists some \\(c\\in (a,b)\\) such that \\(f&#39;(c) = 0\\)
                </li>
                <li><strong>Mean Value Theorem:</strong> If \\(f:[a,b]\\to R\\) is continuous on \\([a,b]\\) and differentiable on \\((a,b)\\), then there exists some \\(c\\in (a,b)\\) such that \\[f&#39;(c) = ${escape(TeX.frac("f(b) - f(a)", "b-a"))}\\] 
                </li></ul></section></article>`;
});
const Integrals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>Integrals</h1>

        <section><table><tr><td>\\(\\int\\tan xdx = \\log|\\sec x| + C\\)
                    </td>
                    <td>\\(\\int\\cot xdx = \\log|\\sin x| + C\\)
                    </td></tr>
                <tr><td>\\(\\int\\sec xdx = \\log|\\sec x + \\tan x| + C\\)
                    </td>
                    <td>\\(\\int${escape(TeX.cosec)} xdx = \\log|${escape(TeX.cosec)}x - \\cot x| + C\\)
                    </td></tr>
                <tr><td>\\(\\int ${escape(TeX.dfrac(1, "x^2-a^2"))}dx = ${escape(TeX.dfrac(1, "2a"))}\\log |${escape(TeX.dfrac("x-a", "x+a"))}| + C\\)
                    </td>
                    <td>\\(\\int ${escape(TeX.dfrac(1, "a^2-x^2"))}dx = ${escape(TeX.dfrac(1, "2a"))}\\log |${escape(TeX.dfrac("a+x", "a-x"))}| + C\\)
                    </td></tr>
                <tr><td>\\(\\int ${escape(TeX.dfrac(1, "x^2+a^2"))}dx = ${escape(TeX.dfrac(1, "a"))}${escape(TeX.atan)}${escape(TeX.dfrac("x", "a"))} + C\\)
                    </td>
                    <td>\\(\\int ${escape(TeX.dfrac(1, TeX.sqrt("x^2-a^2")))}dx = \\log |x+${escape(TeX.sqrt("x^2-a^2"))}| + C\\)
                    </td></tr>
                <tr><td>\\(\\int ${escape(TeX.dfrac(1, TeX.sqrt("a^2-x^2")))}dx = ${escape(TeX.asin)}${escape(TeX.dfrac("x", "a"))} + C\\)
                    </td>
                    <td>\\(\\int ${escape(TeX.dfrac(1, TeX.sqrt("x^2+a^2")))}dx = \\log |x+${escape(TeX.sqrt("x^2+a^2"))}| + C\\)
                    </td></tr></table>
            <ul><li><strong>Integration by parts:</strong> \\(\\int uv dx = u\\int vdx - \\int \\Big[u&#39;\\int vdx\\Big]dx\\)
                </li>
                <li>\\(\\int e^x[f(x) + f&#39;(x)]dx = e^xf(x) + C\\)
                </li>
                <li>Some special integrals
                    <ol><li>\\(\\int ${escape(TeX.sqrt("x^2-a^2"))} dx = ${escape(TeX.dfrac("x", 2))}${escape(TeX.sqrt("x^2-a^2"))} - ${escape(TeX.dfrac("a^2", 2))}\\log|x + ${escape(TeX.sqrt("x^2 - a^2"))}| + C\\)
                        </li>
                        <li style="${"padding-top: 0.5em;"}">\\(\\int ${escape(TeX.sqrt("x^2+a^2"))} dx = ${escape(TeX.dfrac("x", 2))}${escape(TeX.sqrt("x^2+a^2"))} + ${escape(TeX.dfrac("a^2", 2))}\\log|x + ${escape(TeX.sqrt("x^2 + a^2"))}| + C\\)
                        </li>
                        <li style="${"padding-top: 0.5em;"}">\\(\\int ${escape(TeX.sqrt("a^2-x^2"))} dx = ${escape(TeX.dfrac("x", 2))}${escape(TeX.sqrt("a^2-x^2"))} + ${escape(TeX.asin)}${escape(TeX.dfrac("x", "a"))} + C\\)
                        </li></ol></li></ul></section></article>`;
});
const Vectors = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>Vector Algebra</h1>
        <section><ul><li>The scalar components of a vector are its direction ratios, and represent its projections along the respective axes.
                </li>
                <li>The magnitude (\\(r\\)), direction ratios \\((a, b, c)\\) and direction cosines \\((l, m, n)\\) of any vector are related as: \\[l=${escape(TeX.frac("a", "r"))}, m=${escape(TeX.frac("b", "r"))}, n=${escape(TeX.frac("c", "r"))}\\]
                </li>
                <li>${escape(`\\[
                        \\vec{a}\\times\\vec{b} = \\left |\\begin{matrix}
                        \\hat{i} & \\hat{j} & \\hat{k}\\\\
                        a_1 & b_1 & c_1\\\\
                        a_2 & b_2 & c_2
                        \\end{matrix}\\right |
                        \\]`)}</li></ul></section>
        <h3>Scalar triple product</h3>
        <section><ul><li>The scalar triple product \\(${escape(TeX.vec("a"))}\\cdot(${escape(TeX.vec("b"))}\\times ${escape(TeX.vec("c"))})\\) is the signed volume of the parallelopiped defined by the three vectors \\(${escape(TeX.vec("a"))}, ${escape(TeX.vec("b"))}\\) and \\(${escape(TeX.vec("c"))}\\).
                </li>
                <li>${escape(`\\[
                        \\vec{a}\\cdot(\\vec{b}\\times\\vec{c}) = \\left |\\begin{matrix}
                        a_1 & b_1 & c_1\\\\
                        a_2 & b_2 & c_2\\\\
                        a_3 & b_3 & c_3
                        \\end{matrix}\\right | = det([~\\vec{a}~~\\vec{b}~~\\vec{c}~])
                        \\]`)}</li>
                <li>Cyclic shift of vectors does not change the triple product.
                    ${escape(`\\[
                        \\vec{a}\\cdot(\\vec{b}\\times\\vec{c}) = \\vec{b}\\cdot(\\vec{c}\\times\\vec{a}) = \\vec{c}\\cdot(\\vec{a}\\times\\vec{b})
                        \\]`)}</li>
                <li>${escape(`\\[
                        (\\vec{a}\\cdot(\\vec{b}\\times\\vec{c}))^2 = \\left |\\begin{matrix}
                        \\vec{a}\\cdot\\vec{a} & \\vec{a}\\cdot\\vec{b} & \\vec{a}\\cdot\\vec{c}\\\\
                        \\vec{b}\\cdot\\vec{a} & \\vec{b}\\cdot\\vec{b} & \\vec{b}\\cdot\\vec{c}\\\\
                        \\vec{c}\\cdot\\vec{a} & \\vec{c}\\cdot\\vec{b} & \\vec{c}\\cdot\\vec{c}
                        \\end{matrix}\\right |
                        \\]`)}</li></ul></section></article>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-c9r9bo_START -->${$$result.title = `<title>Notes</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com/notes"}"><meta name="${"description"}" content="${"Learn and practice Physics and Mathematics for school, IIT JEE, Olympiad"}"><!-- HEAD_svelte-c9r9bo_END -->`, ""}
<article><h1>Study notes
    </h1>
    ${validate_component(Sets, "Sets").$$render($$result, {}, {}, {})}
    ${validate_component(RelationsAndFunctions, "RelationsAndFunctions").$$render($$result, {}, {}, {})}
    ${validate_component(TrigonometricFunctions, "TrigonometricFunctions").$$render($$result, {}, {}, {})}
    ${validate_component(Inverse, "Inverse").$$render($$result, {}, {}, {})}
    ${validate_component(Induction, "Induction").$$render($$result, {}, {}, {})}
    ${validate_component(Complex, "Complex").$$render($$result, {}, {}, {})}
    ${validate_component(Permutation, "Permutation").$$render($$result, {}, {}, {})}
    ${validate_component(Binomial, "Binomial").$$render($$result, {}, {}, {})}
    ${validate_component(Sequences, "Sequences").$$render($$result, {}, {}, {})}
    ${validate_component(StraightLine, "StraightLine").$$render($$result, {}, {}, {})}
    ${validate_component(Conic, "Conic").$$render($$result, {}, {}, {})}
    ${validate_component(Vectors, "Vectors").$$render($$result, {}, {}, {})}
    ${validate_component(ThreeD, "ThreeD").$$render($$result, {}, {}, {})}
    ${validate_component(LimitDerivative, "LimitDerivative").$$render($$result, {}, {}, {})}
    ${validate_component(Probability, "Probability").$$render($$result, {}, {}, {})}
    ${validate_component(Matrices, "Matrices").$$render($$result, {}, {}, {})}
    ${validate_component(Determinants, "Determinants").$$render($$result, {}, {}, {})}
    ${validate_component(Continuity, "Continuity").$$render($$result, {}, {}, {})}
    ${validate_component(Integrals, "Integrals").$$render($$result, {}, {}, {})}
    ${validate_component(Link, "Link").$$render($$result, { href: "/notes/maths/conic" }, {}, {
    default: () => {
      return `Conic Section and Circle`;
    }
  })}
    
    <br></article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-07dbc47c.js.map
