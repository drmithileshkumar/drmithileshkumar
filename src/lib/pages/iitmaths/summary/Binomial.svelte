
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
        <h1>Binomial Theorem</h1>
        <section>
            <ul>
                <li>
                    The expansion of a binomial for any positive integral \(n\) is given by Binomial Theorem, which is \[(a + b)^n = {TeX.ncr('n', 0)}a^n + {TeX.ncr('n', 1)}{TeX.pow('a', 'n-1')}b + {TeX.ncr('n', 2)}{TeX.pow('a', 'n-2')}b^2 + \cdots + {TeX.ncr('n', 'n-1')}a{TeX.pow('b', 'n-1')} + {TeX.ncr('n', 'n')}b^n\]
                </li>
                <li>
                    The general term of an expansion \((a + b)^n\) is \[{TeX.sub('T', 'r + 1')} = {TeX.ncr()}{TeX.pow('a', 'n-r')}b^r\]
                </li>
                <li>
                    If \(n\) is even, then the middle term is the \(\Big({TeX.dfrac('n', 2)} + 1\Big)\)th term. If \(n\) is odd, then the middle terms are \(\Big({TeX.dfrac('n', 2)} + 1\Big)\)th and \(\Big({TeX.dfrac('n + 1', 2)} + 1\Big)\)th terms.
                </li>
            </ul>
        </section>
        
    </article>