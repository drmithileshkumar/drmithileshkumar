
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
        <h1>Introduction to Three Dimensional Geometry</h1>
        <section>
            <ul>
                <li>
                    The coordinates of the point \(R\) which divides the line segment joining two points \(P(x_1, y_1, z_1)\) and \(Q(x_2, y_2, z_2)\) internally and externally in the ratio \(m:n\) are given by \[\Big({TeX.frac('mx_2 + nx_1','m + n')}, {TeX.frac('my_2 + ny_1','m + n')}, {TeX.frac('mz_2 + nz_1','m + n')}\Big)\] and \[\Big({TeX.frac('mx_2 - nx_1','m - n')}, {TeX.frac('my_2 - ny_1','m - n')}, {TeX.frac('mz_2 - nz_1','m - n')}\Big)\]
                </li>
                
            </ul>

        </section>
        <section>
            <ul>
                <li>
                    The direction cosines of a line are \(l = \cos\alpha, m = \cos\beta, n = \cos\gamma\) where \(\alpha, \beta, \gamma\) are angles the line makes with the axes in order.
                </li>
                <li>
                    \(l^2 + m^2 + n^2 = 1\)
                </li>
                <li>
                    The direction ratio of the line segment joining \(P(x_1, y_1, z_1)\) and \(Q(x_2, y_2, z_2)\) are \(x_2-x_1, y_2 - y_1, z_2 - z_1\)
                </li>
                <li>
                    Equation of a line passing through \({TeX.vec('a')}\) parallel to another vector \({TeX.vec('b')}\) is given by \[{TeX.vec('r')} = {TeX.vec('a')} + \lambda {TeX.vec('b')}\]
                </li>
                <li>
                    Direction cosines are \({TeX.dfrac('b_x','|b|')}, {TeX.dfrac('b_y','|b|')}, {TeX.dfrac('b_z','|b|')}\)
                </li>
                <li>
                    Cartesian equation of the line is \[{TeX.dfrac('x - x_1','b_x')} = {TeX.dfrac('y - y_1','b_y')} = {TeX.dfrac('z - z_1','b_z')}\]
                </li>
                <li>
                    Equation of line passing through two points \({TeX.vec('a')}\) and \({TeX.vec('b')}\) is \[{TeX.vec('r')} = {TeX.vec('a')} + \lambda ({TeX.vec('b')} - {TeX.vec('a')})\]
                </li>
                <li>
                    Cartesian equation of the line is \[{TeX.dfrac('x - x_1','x_2-x_1')} = {TeX.dfrac('y - y_1','y_2-y_1')} = {TeX.dfrac('z - z_1','z_2-z_1')}\]
                </li>
                <li>
                    <strong>Distance between two skew lines</strong>:  Let \({TeX.vec('r')} = {TeX.vec('a')}_1 + \lambda {TeX.vec('b')}_1\) and \({TeX.vec('r')} = {TeX.vec('a')}_2 + \mu {TeX.vec('b')}_2\) be two lines. The magnitude of the shortest distance vector is equal to the projection of  \(\Delta{TeX.vec('a')} = {TeX.vec('a')}_2 -  {TeX.vec('a')}_1\) along the direction of the shortest vector. The shortest vector will be perpendicular to both the lines. Therefore, the direction of the shortest vector is given by \({TeX.vec('b')} = {TeX.vec('b')}_1 \times  {TeX.vec('b')}_2\). Hence, the length of the shortest vector will \[d = \Big |{TeX.frac(TeX.vec('b')+'\\cdot\\Delta' + TeX.vec('a'), '|' + TeX.vec('b') + '|')}\Big |\]
                </li>
                <li>
                    The equation of a plane whose perpendicular distance from the origin is \(d\) and normal vector is \({TeX.hat('n')}\) is \[{TeX.vec('r')}\cdot{TeX.hat('n')} = d\]
                </li>
                <li>
                    \(ax + by + cz = d\) is equation of a plane whose normal vector is along \(a{TeX.hat('i')} + b{TeX.hat('j')} + c{TeX.hat('k')}\) and distance from the origin is proportional to \(d\).
                </li>
                <li>
                    Equation of a plane passing through a point {`\\(\\vec{a}\\)`} and perpendicular to a vector {`\\(\\hat{n}\\)`} is given by {`\\[(\\vec{r} - \\vec{a})\\cdot \\hat{n} = 0\\]`}
                </li>
                <li>
                    Equation of a plane passing through three non-colinear points {`\\(\\vec{a}, \\vec{b}, \\vec{c}\\)`} and perpendicular to a vector {`\\(\\hat{n}\\)`} is given by {`\\[(\\vec{r} - \\vec{a})\\cdot [(\\vec{b} - \\vec{a})\\times (\\vec{c} - \\vec{a})] = 0\\]`}
                </li>
                <li>
                    Equation of a plane passing through the intersection of two given planes \[{TeX.vec('r')}\cdot({TeX.hat('n')}_1 + \lambda {TeX.hat('n')}_2) = d_1 + \lambda d_2\]
                </li>
                <li>
                    Two lines \({TeX.vec('r')} = {TeX.vec('a')}_1 + \lambda {TeX.vec('b')}_1\) and \({TeX.vec('r')} = {TeX.vec('a')}_2 + \mu {TeX.vec('b')}_2\) are coplanar iff \(\Delta{TeX.vec('a')} = {TeX.vec('a')}_2 -  {TeX.vec('a')}_1\) is perpendicular to \({TeX.vec('b')} = {TeX.vec('b')}_1 \times  {TeX.vec('b')}_2\)
                </li>
                <li>
                    Distance of a point from a plane is \(|d - {TeX.vec()}\cdot{TeX.hat('n')}|\)
                </li>
            </ul>
        </section>
    </article>