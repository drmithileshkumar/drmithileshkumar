<script id="MathJax-script" lang='ts'>
    //@ts-nocheck
    import {browser} from '$app/environment';
    export let latex;
    const text2latex = (math) => {
        if(browser) {
            let mathoutput = MathJax.tex2svg(math);
            // $selectedId = element.id;
            let svg = mathoutput.children[0];
            svg.children[1].removeAttribute('stroke')
            svg.children[1].removeAttribute('fill');
            return svg.innerHTML;
        }
        return '';
    }
</script>
<style>

</style>

<g  
    id={latex.id} 
    fill={latex.fill}
    opacity={latex.opacity}
    filter={latex.filter}
    vector-effect={latex.vectorEffect}
    transform='matrix({latex.tm.a} {latex.tm.b} {latex.tm.c} {latex.tm.d} {latex.tm.e} {latex.tm.f})' 
>
    {@html text2latex(latex.content)}
</g>