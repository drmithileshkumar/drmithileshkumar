//@ts-nocheck
export const text2latex = (math) => {
    let mathoutput = MathJax.tex2svg(math);
    let svg = mathoutput.children[0];
    svg.children[1].removeAttribute('stroke')
    svg.children[1].removeAttribute('fill');
    return svg.innerHTML;
}