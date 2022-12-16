
<script id="MathJax-script">
    // @ts-nocheck
        import {chapters, sections, selectedChapter, selectedSection} from '$lib/pages/iitmaths/stores';
        import Practice from '$lib/utils/practiceproblem/Practice.svelte';
        import Message from '$lib/ui/Message.svelte';
        import {Point2D} from '$lib/utils/common/point2d';
        import {randNum, randInt} from '$lib/utils/common/common';
        import {page, session} from '$app/stores';
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
        <h1>Permutation and combination</h1>
        <section>
            <ul>
                <li>
                    <em>Fundamental principle of counting</em> If an event can occur in \(m\) different ways, following which another event can occur in \(n\) different ways, then the total number of occurrence of the events in the given order is \(m\times n\)
                </li>
                <li>
                    The number of permutations of \(n\) different things taken \(r\) at a time, where repetition is not allowed, is denoted by \({TeX.npr('n', 'r')}\) and is given by \[{TeX.npr('n', 'r')} = {TeX.dfrac('n!', '(n-r)!')}\] where \(0\leq r \leq n\)
                </li>
                <li>
                    \(n! = 1\times 2\times 3\times \dots\times n\)
                </li>
                <li>
                    \(n! = n\times (n - 1)!\)
                </li>
                <li>
                    The number of permutations of \(n\) different things, taken \(r\) at a time, where repeatition is allowed, is \(n^r\).
                </li>
                <li>
                    The number of permutations of \(n\) objects taken all at a time, where \(p_1\) objects are of first kind, \(p_2\) objects are of the second kind, ..., \(p_k\) objects are of the \(k\)th kind and rest, if any, are all different is \[{TeX.frac('n!', 'p_1!p_2!\\cdots p_k!')}\]
                </li>
                <li>
                    The number of combinations of \(n\) different things taken \(r\) at a time, denoted by \({TeX.ncr()}\) is given by \[{TeX.ncr()} = {TeX.frac('n!', 'r!(n-r)!')}\]
                </li>
                <li>
                    Selecting \(r\) objects out of \(n\) objects is same as rejecting \(n-r\) objects, i.e.
                    \[{TeX.ncr('n', 'n-r')} = {TeX.ncr()}\]
                </li>
                <li>
                    \({TeX.ncr()} + {TeX.ncr('n', 'r-1')} = {TeX.ncr('n + 1', 'r')}\)
                </li>
            </ul>
        </section>
        
    </article>