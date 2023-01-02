
<script id="MathJax-script">
    // @ts-nocheck
        import {onMount} from 'svelte';
        import {TeX} from '$lib/utils/common/constants';
        onMount(() => {
            MathJax.typeset();
        });
        
        
    </script>
    <style>
        /* .image {
            display: flex;
            justify-content: center;
            width: min(95vw, 600px);
        } */
    </style>
    <article>
        <h1>Relations and functions</h1>
        <section>
            <ul>
                <li>
                    <strong>Ordered pair:</strong> A pair of elements grouped together in a particular order.
                </li>
                <li>
                    <strong>Cartesian product</strong> \(A\times B\) of two sets \(A\) and \(B\) is given by \[A\times B = {TeX.set('(a,b)','a\\in A, b\\in B')}\] 
                    In particular, \({TeX.bbR}\times {TeX.bbR} = {TeX.set('(x,y)', `x,y${TeX.inR}`)}\) and \[{TeX.bbR}\times {TeX.bbR} \times {TeX.bbR} = {TeX.set('(x,y, z)', `x,y,z${TeX.inR}`)}\] 
                </li>
                <li>
                    If \((a,b) = (x,y)\), then \(a = x\) and \(b = x\).
                </li>
                <li>
                    If \(n(A) = p\) and \(n(B) = q\), then \(n(A\times B) = pq\).
                </li>
                <li>
                    \(A\times\phi = \phi\)
                </li>
                <li>
                    In general, \(A\times B \neq B\times A\).
                </li>
                <li>
                    <strong>Relation</strong> A relation \(R\) from a set \(A\) to a set \(B\) is a subset of the cartesian product \(A\times B\) obtained by describing a relationship between the first element \(x\) and the second element \(y\) of the ordered pairs in \(A\times B\).
                </li>
                <li>
                    The <strong>image</strong> of an element \(x\) under a relation \(R\) is given by \(y\), where \((x,y)\in R\).
                </li>
                <li>
                    The <strong>domain</strong> of \(R\) is the set of all first elements of the ordered pair in a relation \(R\).
                </li>
                <li>
                    The <strong>range</strong> of the relation \(R\) is the set of all second elements of the ordered pairs in a relation \(R\).
                </li>
                <li>
                    <strong>Function</strong> A function \(f\) from a set \(A\) to a set \(B\) is a specific type of relation for which every element \(x\) of set \(A\) has one and only one image \(y\) in set \(B\). We write \(f:A\to B\), where \(f(x) = y\).
                </li>
                <li>
                    \(A\) is the domain and \(B\) is the codomain of \(f\).
                </li>
                <li>
                    The range of the function is the set of images.
                </li>
                <li>
                    A real function has the set of real numbers or one of its subsets both as its domain and as its range.
                </li>
                <li>
                    <strong>Algebra of functions</strong> For functions \(f:X\to R\) and \(g:X\to R\), we have 
                    {`\\[
                        \\begin{aligned}
                            (f + g)(x) &= f(x) + g(x), x\\in X\\\\
                            (f - g)(x) &= f(x) - g(x), x\\in X\\\\
                            (f\\cdot g)(x) &= f(x)\\cdot g(x), x\\in X\\\\
                            (kf)(x) &= k~f(x), x\\in X, k${TeX.inR}\\\\
                            \\Big(\\frac{f}{g}\\Big)(x) &= \\frac{f(x)}{g(x)}, x\\in X, g(x) \\neq 0
                        \\end{aligned}    
                    \\]`}
                </li>
            </ul>
        </section>
        <section>
            <ul>
                <li>
                    <em>Empty relation</em> is the relation \(R\) in \(X\) given by \(R=\phi\subset X\times X\)
                </li>
                <li>
                    <em>Universal relation</em> is the relation \(R\) in \(X\) given by \(R = X\times X\)
                </li>
                <li>
                    <em>Reflexive relation</em> \(R\) in \(X\) is a relation with \(\forall a\in X\quad(a,a)\in R\)
                </li>
                <li>
                    <em>Symmetric relation</em> \(R\) in \(X\) is a relation satisfying \((a,b)\in R\implies (b,a)\in R\) 
                </li>
                <li>
                    <em>Transitive relation</em> \(R\) in \(X\) is a relation satisfying \((a,b), (b,c)\in R\implies (a,c)\in R\)
                </li>
                <li>
                    <em>Equivalence relation</em> \(R\) in \(X\) is a relation which is reflexive, symmetric, and transitive.
                </li>
                <li>
                    <em>Equivalence class \([a]\)</em> containing \(a\in X\) for an equivalence relation \(R\) in \(X\) is the subset of \(X\) containing all elements \(b\) related to \(a\).
                </li>
                <li>
                    A function \(f:X\to Y\) is <em>one-one (or injective)</em> if \[\forall x_1,x_2\in X~~ f(x_1) = f(x_2)\implies x_1 = x_2\]
                </li>
                <li>
                    A function \(f:X\to Y\) is <em>onto (or surjective)</em> if given any \(y\in Y\), \(\exists x\in X\) such that \(f(x) = y\)
                </li>
                <li>
                    A function \(f:X\to Y\) is <em> one-one and onto (or bijection)</em> if \(f\) is bothe one-one and onto.
                </li>
                <li>
                    The <em>composition</em> of functions \(f:A\to B\) and \(g:B\to C\) is the function \(gof:A\to C\) given by \(\forall x\in A~~gof(x) = g(f(x))\)
                </li>
                <li>
                    A function \(f:X\to Y\) is <em>invertible</em> if \(\exists ~ g:Y\to X\) such that \(gof = I_X\) and \(fog = I_Y\)
                </li>
                <li>
                    A function \(f:X\to Y\) is invertible if and only if \(f\) is one-one and onto.
                </li>
                <li>
                    Given a finite set \(X\), a function \(f:X\to X\) is one-one (respectively onto) if and only if \(f\) is onto (respectively one-one). This is the characteristic property of a finite set. This is not true for infinite set.
                </li>
                <li>
                    A <strong>binary operation \(*\)</strong> on a set \(A\) is a function \(*\) from \(A\times A\) to \(A\).
                </li>
                <li>
                    An element \(e\in X\) is the <strong>identity</strong> element for binary operation \(*:X\times X\to X\), if \(a*e = a = e*a~~\forall a\in X\)
                </li>
                <li>
                    An element \(a\in X\) is invertible for binary operation \(*:X\times X\to X\), if there exists \(b\in X\) such that \(a*b = e = b*a\) where, \(e\) is the identity for the binary operation \(*\). The element \(b\) is called <strong>inverse</strong> of \(a\) and is denoted by \({TeX.pow('a', '-1')}\)
                </li>
                <li>
                    An operation \(*\) on \(X\) is <strong>commutative</strong> if \(a*b = b*a~~\forall a,b\in X\)
                </li>
                <li>
                    An operation \(*\) on \(X\) is <strong>associative</strong> if \((a*b)*c = a*(b*c)~~\forall a,b,c\in X\)
                </li>
            </ul>
        </section>
        
    </article>