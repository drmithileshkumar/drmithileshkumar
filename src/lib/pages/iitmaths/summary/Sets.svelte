
<script id="MathJax-script">
    // @ts-nocheck
        import {chapters, sections, selectedChapter, selectedSection} from '$lib/pages/iitmaths/stores';
        import Practice from '$lib/utils/practiceproblem/Practice.svelte';
        import Message from '$lib/ui/Message.svelte';
        import {Point2D} from '$lib/utils/common/point2d';
        import {randNum, randInt} from '$lib/utils/common/common';
        import {page, session} from '$app/stores';
        import {ripple} from '$lib/ui/ripple';
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
        <h1 >Sets</h1>
        
        <section>
            <ul>
                <li>
                    A set is a well-defined collection of objects.
                </li>
                <li>
                    A set which does not contain any element is called empty set.
                </li>
                <li>
                    A set which consists of a definite number of elements is called <em>finite set</em>, otherwise the set is called <em>infinite set</em>.
                </li>
                <li>
                    Two sets \(A\) and \(B\) are said to be <em>equal</em> if they have exactly the same elements.
                </li>
                <li>
                    A set \(A\) is said to be subset of a set \(B\), if every element of \(A\) is also an element of \(B\). Intervals are subsets of {TeX.R}.
                </li>
                <li>
                    A power set of a set \(A\) is collection of all subsets of \(A\). It is denoted by \(P(A)\).
                </li>
                <li>
                    The union of two sets \(A\) and \(B\) is the set of all those elements which are either in \(A\) or in \(B\).
                </li>
                <li>
                    The intersection of two sets \(A\) and \(B\) is the set of all elements which are common. The difference of two sets \(A\) and \(B\) in this order is the set of elements which belong to \(A\) but not \(B\).
                </li>
                <li>
                    The complement of a subset \(A\) of universal set \(U\) is the set of all elements of \(U\) which are not the elements of \(A\).
                </li>
                <li>
                    For any two sets \(A\) and \(B\), \((A\cup B)' = A'\cap B'\) and \((A\cap B)' = A'\cup B'\).
                </li>
                <li>
                    If \(A\) and \(B\) are finite sets such that \(A\cap B = \phi\), then \(n(A\cup B) = n(A) + n(B)\). If \(A\cap B \neq \phi\), then \(n(A\cup B) = n(A) + n(B) - n(A\cap B)\)
                </li>
            </ul>
        </section>
        
    </article>