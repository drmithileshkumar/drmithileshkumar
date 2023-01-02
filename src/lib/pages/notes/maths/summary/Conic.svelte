
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
        <h1>Conic Sections</h1>
        <section>
            <ul>
                <li>
                    A parabola is the set of all points in a plane that are equidistant from a fixed line and a fixed point in the plane.
                </li>
                <li>
                    The equation of the parabola with focus at \((a, 0) a{TeX.more} 0\) and directrix \(x = -a\) is \[y^2 = 4ax\]
                </li>
                <li>
                   Latus rectum of a parabola is a line segment perpendicular to the axis of the parabola, through the focus and whose end points lie on the parabola.
                </li>
                <li>
                    Length of the latus rectum of the parabola \(y^2 = 4ax\) is \(4a\).
                </li>
                <li>
                    An ellipse is the set of all points in a plane, the sum of whose distances from two fixed points in the plane is a constant.
                </li>
                <li>
                    The equation of an ellipse with foci on the \(x\)-axis is \[{TeX.frac('x^2', 'a^2')} + {TeX.frac('y^2', 'b^2')} = 1\]
                </li>
                <li>
                    Latus rectum of an ellipse is a line segment perpendicular to the major axis through any of the foci and whose end points lie on the ellipse.
                </li>
                <li>
                    Length of the latus rectum of the ellipse \({TeX.dfrac('x^2', 'a^2')} + {TeX.dfrac('y^2', 'b^2')} = 1\) is \({TeX.dfrac('2b^2','a')}\).
                </li>
                <li>
                    The eccentricity of an ellipse is the ratio between the distances from the center of the ellipse to one of the foci and to one of the vertices of the ellipse.
                </li>
                <li>
                    A hyperbola is the set of all points in a plane, the difference of whose distances from two fixed points in the plane is a constant.
                </li>
                <li>
                    The equation of a hyperbola with foci on the \(x\)-axis is \[{TeX.frac('x^2', 'a^2')} - {TeX.frac('y^2', 'b^2')} = 1\]
                </li>
                <li>
                    Latus rectum of a hyperbola is a line segment perpendicular to the transverse axis through any of the foci and whose end points lie on the hyperbola.
                </li>
                <li>
                    Length of the latus rectum of the hyperbola \({TeX.dfrac('x^2', 'a^2')} - {TeX.dfrac('y^2', 'b^2')} = 1\) is \({TeX.dfrac('2b^2','a')}\).
                </li>
                <li>
                    The eccentricity of a hyperbola is the ratio between the distances from the center of the hyperbola to one of the foci and to one of the vertices of the hyperbola.
                </li>
            </ul>
        </section>
        <section>
            <div class="remark">
                <ul>
                    <li>
                        The reflection of orthocenter about the foot of the perpendicular lies on the circumcircle of the triangle.
                    </li>
                </ul>
            </div>
        </section>
    </article>