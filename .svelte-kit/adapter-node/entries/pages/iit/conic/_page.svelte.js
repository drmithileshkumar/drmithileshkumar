import { c as create_ssr_component, d as subscribe, e as escape, i as add_attribute, h as null_to_empty } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1i5ppcm{display:flex;position:relative}article.svelte-1i5ppcm{position:relative;padding:0.5em}aside.svelte-1i5ppcm{background-color:rgb(230, 228, 228);cursor:pointer;width:1em}.absolute.svelte-1i5ppcm{margin:auto;width:100%;height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-1i5ppcm::-webkit-scrollbar{width:0;height:0}.currentActive.svelte-1i5ppcm{color:tomato;border-radius:10px;transition:all 1s}.pad.svelte-1i5ppcm{min-height:100px}figure.svelte-1i5ppcm{width:300px}.overlay.svelte-1i5ppcm{position:absolute;z-index:2;left:0.5em;top:0;margin:auto;width:calc(100% - 2em);height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}.colors.svelte-1i5ppcm{display:flex;gap:0.5em;align-items:center}.presentationMode.svelte-1i5ppcm{display:flex;gap:1em;height:1em;margin-bottom:0.5em}.lineWidth.svelte-1i5ppcm{display:flex;align-items:center;gap:1em}.thumbnail.svelte-1i5ppcm{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.title.svelte-1i5ppcm{position:absolute;margin:auto;font-weight:bold;font-size:2em;text-shadow:1px 1px 3px gray;color:red}.heading.svelte-1i5ppcm{font-size:1.5em;font-weight:bold}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let presentation, overlay;
  let presentationMode = false;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1c2e8v5_START -->${$$result.title = `<title>Conic Section and Circle</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"Conic Section and Circle"}"><!-- HEAD_svelte-1c2e8v5_END -->`, ""}
    <div class="${"presentationMode svelte-1i5ppcm"}"><label><input type="${"checkbox"}"${add_attribute("checked", presentationMode, 1)}> Presentation Mode
        </label>
        ${``}</div>
    
    <div class="${"container svelte-1i5ppcm"}">${``}
        ${`<span${add_attribute("this", overlay, 0)}></span>`}
        ${``}
        <article class="${["svelte-1i5ppcm", ""].join(" ").trim()}"${add_attribute("this", presentation, 0)}>
            ${``}    
            ${`<h1>Conic Section and Circle</h1>`}
            ${`<h2 class="${"heading " + escape(
    "",
    true
  ) + " svelte-1i5ppcm"}">Cone and a plane</h2>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}" style="${"display:flex;align-items:center;justify-content:center;flex-direction:column;"}"><img src="${"/circle_demo/Cone.png"}" width="${"80%"}" height="${"100%"}"></p>`}
            
            <section>${`<h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Slice cone with a plane</h2>
                    <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}" style="${"display:flex; align-items: center; justify-content:center;"}"><video width="${"90%"}" height="${"auto"}" src="${"/circle_demo/Conic_anime.mp4"}" type="${"video/mp4"}" ${""} muted></video></p>`}
                ${`<h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">The plane passes through the vertex</h2>
                    <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}" style="${"display:flex; align-items: center; justify-content:center;"}"><video width="${"90%"}" height="${"auto"}" src="${"/circle_demo/Conic_deg.mp4"}" type="${"video/mp4"}" ${""} muted></video></p>`}</section>
            <section>${`<h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">How is a circle created?</h2>
                    <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}" style="${"display:flex; align-items: center; justify-content:center;"}"><video width="${"90%"}" height="${"auto"}" src="${"/circle_demo/circle_anime.mp4"}" type="${"video/mp4"}" ${""} muted></video></p>`}
                ${`<h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">How is a parabola created?</h2>
                    <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}" style="${"display:flex; align-items: center; justify-content:center;"}"><video width="${"90%"}" height="${"auto"}" src="${"/circle_demo/parabola_anime.mp4"}" type="${"video/mp4"}" ${""} muted></video></p>`}
                ${`<h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">How is an ellipse created?</h2>
                    <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}" style="${"display:flex; align-items: center; justify-content:center;"}"><video width="${"90%"}" height="${"auto"}" src="${"/circle_demo/ellipse_anime.mp4"}" type="${"video/mp4"}" ${""} muted></video></p>`}
                ${`<h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">How is a hyperbola created?</h2>
                    <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}" style="${"display:flex; align-items: center; justify-content:center;"}"><video width="${"90%"}" height="${"auto"}" src="${"/circle_demo/hyperbola_anime.mp4"}" type="${"video/mp4"}" ${""} muted></video></p>`}
                ${`<h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">General Equation</h2>`}
                ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}" style="${"display:flex; align-items:center;"}"><span>General equation of a plane: \\(ax + by + cz + d = 0\\)
                        </span>
                        <figure class="${"svelte-1i5ppcm"}"><img width="${"300px"}" src="${"/circle_demo/Plane.png"}" alt="${""}"></figure></p>`}
                ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}" style="${"display:flex; align-items:center;"}"><span>Equation of a cone with vertex at the origin and axis along \\(z\\)-axis: \\(x^2 + y^2 = z^2\\tan^2\\alpha\\)
                        </span>
                        <figure class="${"svelte-1i5ppcm"}"><img width="${"300px"}" src="${"/circle_demo/Cone-equation.png"}" alt="${""}"></figure></p>`}
                ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Substitute
                            ${escape(`\\(
                                z = -\\dfrac{ax + by + d}{c}
                                \\)`)}</p>`}
                ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">General equation of conic can be written as 
                        \\(Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0\\)
                    </p>`}
                ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Discriminant: \\(G = B^2 - 4AC\\) 
                    </p>`}
                ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">${escape(`\\(\\bullet ~~G<0\\)`)} implies that the equation is an ellipse. 
                    </p>`}
                ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">${escape(`\\(~~\\bullet ~~B = 0, A = C\\)`)} implies that the equation is a circle. 
                    </p>`}
                ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">${escape(`\\(\\bullet ~~G=0\\)`)} implies that the equation is a parabola. 
                    </p>`}
                ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">${escape(`\\(\\bullet ~~G>0\\)`)} implies that the equation is a hyberbola. 
                    </p>`}
                ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">${escape(`\\(~~\\bullet ~~A = -C\\)`)} implies that the equation is a rectangular hyperbola. 
                    </p>`}
                <section>${`<h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Circle at origin</h2>`}
                    ${`<img width="${"300px"}" style="${"float: right;"}" class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}" src="${"/circle_demo/circle.png"}">`}
                    ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Equation of a circle with center at the origin and radius \\(r\\) is \\(x^2 + y^2 = r^2\\). 
                        </p>`}
                    ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Any point on this circle can be given by \\((r\\cos\\theta, r\\sin\\theta)\\). 
                        </p>`}
                    ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">General equation of a circle is \\(x^2 + y^2 + 2gx + 2hy + c = 0\\).
                        </p>`}
                    ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Which can be written as \\((x+g)^2 + (y + h)^2 = g^2 + h^2 - c\\).
                        </p>`}
                    ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Its center is at \\((-g, -h)\\) and radius is ${escape(`\\(r = \\sqrt{g^2 + h^2 -c}\\)`)}.
                        </p>`}</section>
                <section>${`<br><br><br>
                        <h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Circle through 3 points</h2>`}
                    ${`<img width="${"350px"}" style="${"float: right;"}" class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}" src="${"/circle_demo/threepointcircle.png"}">`}
                    ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Find the center and radius. 
                        </p>`}
                    ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Center is at the intersection of perpendicular bisectors 
                        </p>`}
                    ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Bisector of AB ${escape(`
                            \\[\\frac{y - (y_1 + y_2)/2}{x - (x_1 + x_2)/2} = - \\frac{x_2 - x_1}{y_2-y_1}\\]`)}</p>`}
                    ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Bisector of AC ${escape(`
                            \\[\\frac{y - (y_1 + y_3)/2}{x - (x_1 + x_3)/2} = - \\frac{x_3 - x_1}{y_3-y_1}\\]`)}</p>`}
                    ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Solve the above equation to get the center.
                        </p>`}</section>
                <section>${`<br><br><br>
                        <h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Tangent to a circle</h2>`}
                    ${`<img width="${"350px"}" style="${"float: right;"}" class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}" src="${"/circle_demo/Tangents.png"}">`}
                    ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Let a tangent can be written as \\(y = mx + c\\)
                        </p>`}
                    ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Substitute \\(y\\) into \\(x^2 + y^2 = r^2\\) \\[x^2 + (mx + c)^2 = r^2\\]
                        </p>`}
                    ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Require that the discriminant be \\(D = 0\\)
                        </p>`}
                    ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Solve to get two values of \\(m\\)
                        </p>`}
                    ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">For each \\(m\\): \\(c = y_1 - mx_1 \\)
                        </p>`}</section>
                <section>${`<br><br><br>
                        <div class="${"pad svelte-1i5ppcm"}"></div>
                        <h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Example</h2>`}
                    ${`<p class="${"question " + escape(
    "",
    true
  ) + " svelte-1i5ppcm"}">Consider a triangle \\(\\Delta\\) whose two sides lie on the \\(x\\)-axis and the line \\(x + y + 1 = 0\\). If the orthocenter of \\(\\Delta\\) is \\((1, 1)\\), then find the equation of the circle passing through the vertices of the triangle \\(\\Delta\\).
                        </p>`}
                    ${`<img width="${"350px"}" style="${"float: right;"}" class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}" src="${"/circle_demo/orthocenter.png"}">`}
                    ${`<h4 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Claim:
                        </h4>
                        <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">Image of orthocenter about any side of the triangle lies on its circumcircle.
                        </p>`}
                    ${`<h4 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}">proof:
                        </h4>`}
                    ${`<div class="${"pad svelte-1i5ppcm"}"></div>
                        <div class="${"pad svelte-1i5ppcm"}"></div>
                        <div class="${"pad svelte-1i5ppcm"}"></div>
                        <img width="${"70%"}" style="${"float: right;"}" class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-1i5ppcm"}" src="${"/circle_demo/IIT21Q1.png"}">`}</section>
                ${``}</section>
            
            </article>
        ${``}</div>`;
});
export {
  Page as default
};
