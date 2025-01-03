import { c as create_ssr_component, h as add_attribute, e as escape, i as each } from "./ssr2.js";
const PreviewLine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { line } = $$props;
  if ($$props.line === void 0 && $$bindings.line && line !== void 0) $$bindings.line(line);
  return `<line${add_attribute("x1", line.x1, 0)}${add_attribute("y1", line.y1, 0)}${add_attribute("x2", line.x2, 0)}${add_attribute("y2", line.y2, 0)}${add_attribute("fill", line.fill, 0)}${add_attribute("stroke", line.stroke, 0)}${add_attribute("stroke-width", line.strokewidth, 0)}${add_attribute("stroke-dasharray", line.strokedasharray, 0)}${add_attribute("vector-effect", line.vectorEffect, 0)}${add_attribute("opacity", line.opacity, 0)}${add_attribute("filter", line.filter, 0)} transform="${"matrix(" + escape(line.tm.a, true) + " " + escape(line.tm.b, true) + " " + escape(line.tm.c, true) + " " + escape(line.tm.d, true) + " " + escape(line.tm.e, true) + " " + escape(line.tm.f, true) + ")"}"></line>`;
});
const PreviewCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { circle } = $$props;
  if ($$props.circle === void 0 && $$bindings.circle && circle !== void 0) $$bindings.circle(circle);
  return `<circle${add_attribute("cx", circle.cx, 0)}${add_attribute("cy", circle.cy, 0)}${add_attribute("r", circle.r, 0)}${add_attribute("fill", circle.fill, 0)}${add_attribute("stroke", circle.stroke, 0)}${add_attribute("stroke-width", circle.strokewidth, 0)}${add_attribute("stroke-dasharray", circle.strokedasharray, 0)}${add_attribute("vector-effect", circle.vectorEffect, 0)}${add_attribute("opacity", circle.opacity, 0)}${add_attribute("filter", circle.filter, 0)}${add_attribute("mask", circle.mask, 0)} transform="${"matrix(" + escape(circle.tm.a, true) + " " + escape(circle.tm.b, true) + " " + escape(circle.tm.c, true) + " " + escape(circle.tm.d, true) + " " + escape(circle.tm.e, true) + " " + escape(circle.tm.f, true) + ")"}"></circle>`;
});
const PreviewEllipse = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ellipse } = $$props;
  if ($$props.ellipse === void 0 && $$bindings.ellipse && ellipse !== void 0) $$bindings.ellipse(ellipse);
  return `<ellipse${add_attribute("cx", ellipse.cx, 0)}${add_attribute("cy", ellipse.cy, 0)}${add_attribute("rx", ellipse.rx, 0)}${add_attribute("ry", ellipse.ry, 0)}${add_attribute("fill", ellipse.fill, 0)}${add_attribute("stroke", ellipse.stroke, 0)}${add_attribute("stroke-width", ellipse.strokewidth, 0)}${add_attribute("stroke-dasharray", ellipse.strokedasharray, 0)}${add_attribute("vector-effect", ellipse.vectorEffect, 0)}${add_attribute("opacity", ellipse.opacity, 0)}${add_attribute("filter", ellipse.filter, 0)}${add_attribute("mask", ellipse.mask, 0)} transform="${"matrix(" + escape(ellipse.tm.a, true) + " " + escape(ellipse.tm.b, true) + " " + escape(ellipse.tm.c, true) + " " + escape(ellipse.tm.d, true) + " " + escape(ellipse.tm.e, true) + " " + escape(ellipse.tm.f, true) + ")"}"></ellipse>`;
});
const PreviewRect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rect } = $$props;
  if ($$props.rect === void 0 && $$bindings.rect && rect !== void 0) $$bindings.rect(rect);
  return `<rect${add_attribute("x", rect.x, 0)}${add_attribute("y", rect.y, 0)}${add_attribute("width", rect.width, 0)}${add_attribute("height", rect.height, 0)}${add_attribute("rx", rect.rx, 0)}${add_attribute("ry", rect.ry, 0)}${add_attribute("fill", rect.fill, 0)}${add_attribute("stroke", rect.stroke, 0)}${add_attribute("stroke-width", rect.strokewidth, 0)}${add_attribute("stroke-dasharray", rect.strokedasharray, 0)}${add_attribute("vector-effect", rect.vectorEffect, 0)}${add_attribute("opacity", rect.opacity, 0)}${add_attribute("filter", rect.filter, 0)}${add_attribute("mask", rect.mask, 0)} transform="${"matrix(" + escape(rect.tm.a, true) + " " + escape(rect.tm.b, true) + " " + escape(rect.tm.c, true) + " " + escape(rect.tm.d, true) + " " + escape(rect.tm.e, true) + " " + escape(rect.tm.f, true) + ")"}"></rect>`;
});
const PreviewRegular = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { regular } = $$props;
  if ($$props.regular === void 0 && $$bindings.regular && regular !== void 0) $$bindings.regular(regular);
  return `<polygon${add_attribute("points", regular.points, 0)}${add_attribute("fill", regular.fill, 0)}${add_attribute("stroke", regular.stroke, 0)}${add_attribute("stroke-width", regular.strokewidth, 0)}${add_attribute("stroke-dasharray", regular.strokedasharray, 0)}${add_attribute("vector-effect", regular.vectorEffect, 0)}${add_attribute("opacity", regular.opacity, 0)}${add_attribute("filter", regular.filter, 0)}${add_attribute("mask", regular.mask, 0)} transform="${"matrix(" + escape(regular.tm.a, true) + " " + escape(regular.tm.b, true) + " " + escape(regular.tm.c, true) + " " + escape(regular.tm.d, true) + " " + escape(regular.tm.e, true) + " " + escape(regular.tm.f, true) + ")"}"></polygon>`;
});
const PreviewPath = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
  return `<path${add_attribute("id", path.id, 0)}${add_attribute("d", path.d, 0)}${add_attribute("fill", path.fill, 0)}${add_attribute("fill-rule", path.fillrule, 0)}${add_attribute("stroke", path.stroke, 0)}${add_attribute("stroke-width", path.strokewidth, 0)}${add_attribute("stroke-dasharray", path.strokedasharray, 0)}${add_attribute("stroke-linecap", path.strokelinecap, 0)}${add_attribute("stroke-linejoin", path.strokelinejoin, 0)}${add_attribute("stroke-miterlimit", path.strokemiterlimit, 0)}${add_attribute("vector-effect", path.vectorEffect, 0)}${add_attribute("opacity", path.opacity, 0)}${add_attribute("filter", path.filter, 0)}${add_attribute("mask", path.mask, 0)}${add_attribute("marker-start", path.markerStart, 0)}${add_attribute("marker-mid", path.markerMid, 0)}${add_attribute("marker-end", path.markerEnd, 0)} transform="${"matrix(" + escape(path.tm.a, true) + " " + escape(path.tm.b, true) + " " + escape(path.tm.c, true) + " " + escape(path.tm.d, true) + " " + escape(path.tm.e, true) + " " + escape(path.tm.f, true) + ")"}"></path>`;
});
const PreviewText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  return `${text.isTextOnPath ? `<text${add_attribute("id", text.id, 0)}${add_attribute("fill", text.fill, 0)} font-size="${escape(text.fontSize, true) + "px"}"${add_attribute("font-weight", text.fontWeight, 0)}${add_attribute("font-family", text.fontFamily || "Roboto, sans-serif", 0)}${add_attribute("filter", text.filter, 0)}${add_attribute("opacity", text.opacity, 0)}${add_attribute("vector-effect", text.vectorEffect, 0)} transform="${"matrix(" + escape(text.tm.a, true) + " " + escape(text.tm.b, true) + " " + escape(text.tm.c, true) + " " + escape(text.tm.d, true) + " " + escape(text.tm.e, true) + " " + escape(text.tm.f, true) + ")"}"><textPath href="${"#" + escape(text.href, true)}" startOffset="${escape(text.startOffset, true) + "%"}">${escape(text.content)}</textPath></text>` : `<text${add_attribute("id", text.id, 0)}${add_attribute("x", text.x, 0)}${add_attribute("y", text.y, 0)}${add_attribute("fill", text.fill, 0)} font-size="${escape(text.fontSize, true) + "px"}"${add_attribute("font-weight", text.fontWeight, 0)}${add_attribute("font-family", text.fontFamily || "Roboto, sans-serif", 0)}${add_attribute("filter", text.filter, 0)}${add_attribute("opacity", text.opacity, 0)} transform="${"matrix(" + escape(text.tm.a, true) + " " + escape(text.tm.b, true) + " " + escape(text.tm.c, true) + " " + escape(text.tm.d, true) + " " + escape(text.tm.e, true) + " " + escape(text.tm.f, true) + ")"}">${escape(text.content)}</text>`}`;
});
const PreviewLatex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { latex } = $$props;
  const text2latex = (math) => {
    return "";
  };
  if ($$props.latex === void 0 && $$bindings.latex && latex !== void 0) $$bindings.latex(latex);
  return `<g${add_attribute("id", latex.id, 0)}${add_attribute("fill", latex.fill, 0)}${add_attribute("opacity", latex.opacity, 0)}${add_attribute("filter", latex.filter, 0)}${add_attribute("vector-effect", latex.vectorEffect, 0)} transform="${"matrix(" + escape(latex.tm.a, true) + " " + escape(latex.tm.b, true) + " " + escape(latex.tm.c, true) + " " + escape(latex.tm.d, true) + " " + escape(latex.tm.e, true) + " " + escape(latex.tm.f, true) + ")"}"><!-- HTML_TAG_START -->${text2latex(latex.content)}<!-- HTML_TAG_END --></g>`;
});
const PreviewImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
  return `<image${add_attribute("x", image.x, 0)}${add_attribute("y", image.y, 0)}${add_attribute("width", image.width, 0)}${add_attribute("height", image.height, 0)}${add_attribute("rx", image.rx, 0)}${add_attribute("ry", image.ry, 0)}${add_attribute("href", image.href, 0)}${add_attribute("fill", image.fill, 0)}${add_attribute("stroke", image.stroke, 0)}${add_attribute("stroke-width", image.strokewidth, 0)}${add_attribute("stroke-dasharray", image.strokedasharray, 0)}${add_attribute("vector-effect", image.vectorEffect, 0)}${add_attribute("opacity", image.opacity, 0)}${add_attribute("preserveAspectRatio", image.preserveAspectRatio, 0)}${add_attribute("filter", image.filter, 0)}${add_attribute("mask", image.mask, 0)} transform="${"matrix(" + escape(image.tm.a, true) + " " + escape(image.tm.b, true) + " " + escape(image.tm.c, true) + " " + escape(image.tm.d, true) + " " + escape(image.tm.e, true) + " " + escape(image.tm.f, true) + ")"}"></image>`;
});
const PreviewGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { grd } = $$props;
  const gethShifts = () => {
    let hlist = [];
    let h = grd.dX / grd.nSubdivisions;
    let nx = Math.round(grd.width / h);
    for (let i = 0; i <= nx; i++) {
      hlist = [...hlist, h * i + grd.x];
    }
    return hlist;
  };
  const getvShifts = () => {
    let vlist = [];
    let v = grd.dY / grd.nSubdivisions;
    let ny = Math.round(grd.height / v);
    for (let i = 0; i <= ny; i++) {
      vlist = [...vlist, v * i + grd.y];
    }
    return vlist;
  };
  const getHShifts = () => {
    let Hlist = [];
    let nX = Math.round(grd.width / grd.dX);
    for (let i = 0; i <= nX; i++) {
      Hlist = [...Hlist, grd.dX * i + grd.x + grd.dx];
    }
    return Hlist;
  };
  const getVShifts = () => {
    let Vlist = [];
    let nY = Math.round(grd.height / grd.dY);
    for (let i = 0; i <= nY; i++) {
      Vlist = [...Vlist, grd.dY * i + grd.y + grd.dy];
    }
    return Vlist;
  };
  if ($$props.grd === void 0 && $$bindings.grd && grd !== void 0) $$bindings.grd(grd);
  return `<g${add_attribute("id", grd.id, 0)}${add_attribute("fill", grd.fill, 0)}${add_attribute("stroke", grd.stroke, 0)}${add_attribute("stroke-width", grd.strokewidth, 0)}${add_attribute("stroke-dasharray", grd.strokedasharray, 0)}${add_attribute("vector-effect", grd.vectorEffect, 0)}${add_attribute("opacity", grd.opacity, 0)}${add_attribute("filter", grd.filter, 0)}${add_attribute("mask", grd.mask, 0)} transform="${"matrix(" + escape(grd.tm.a, true) + " " + escape(grd.tm.b, true) + " " + escape(grd.tm.c, true) + " " + escape(grd.tm.d, true) + " " + escape(grd.tm.e, true) + " " + escape(grd.tm.f, true) + ")"}">${grd.showSubdivisions ? `${each(gethShifts(), (c) => {
    return `<line class="Vectorial"${add_attribute("x1", c, 0)}${add_attribute("y1", grd.y, 0)}${add_attribute("x2", c, 0)}${add_attribute("y2", grd.y + grd.height, 0)}${add_attribute("stroke", grd.hPath.stroke, 0)}${add_attribute("stroke-width", grd.hPath.strokewidth, 0)}${add_attribute("stroke-dasharray", grd.hPath.strokedasharray, 0)}${add_attribute("opacity", grd.hPath.opacity, 0)}${add_attribute("stroke-linecap", grd.hPath.strokelinecap, 0)}${add_attribute("stroke-linejoin", grd.hPath.strokelinejoin, 0)}${add_attribute("stroke-miterlimit", grd.hPath.strokemiterlimit, 0)}></line>`;
  })} ${each(getvShifts(), (c) => {
    return `<line class="Vectorial"${add_attribute("x1", grd.x, 0)}${add_attribute("y1", c, 0)}${add_attribute("x2", grd.x + grd.width, 0)}${add_attribute("y2", c, 0)}${add_attribute("stroke", grd.vPath.stroke, 0)}${add_attribute("stroke-width", grd.vPath.strokewidth, 0)}${add_attribute("stroke-dasharray", grd.vPath.strokedasharray, 0)}${add_attribute("opacity", grd.vPath.opacity, 0)}${add_attribute("stroke-linecap", grd.vPath.strokelinecap, 0)}${add_attribute("stroke-linejoin", grd.vPath.strokelinejoin, 0)}${add_attribute("stroke-miterlimit", grd.vPath.strokemiterlimit, 0)}></line>`;
  })}` : ``} ${each(getHShifts(), (c) => {
    return `<line class="Vectorial"${add_attribute("x1", c, 0)}${add_attribute("y1", grd.y, 0)}${add_attribute("x2", c, 0)}${add_attribute("y2", grd.y + grd.height, 0)}${add_attribute("stroke", grd.HPath.stroke, 0)}${add_attribute("stroke-width", grd.HPath.strokewidth, 0)}${add_attribute("stroke-dasharray", grd.HPath.strokedasharray, 0)}${add_attribute("opacity", grd.HPath.opacity, 0)}${add_attribute("stroke-linecap", grd.HPath.strokelinecap, 0)}${add_attribute("stroke-linejoin", grd.HPath.strokelinejoin, 0)}${add_attribute("stroke-miterlimit", grd.HPath.strokemiterlimit, 0)}></line>`;
  })} ${each(getVShifts(), (c) => {
    return `<line class="Vectorial"${add_attribute("x1", grd.x, 0)}${add_attribute("y1", c, 0)}${add_attribute("x2", grd.x + grd.width, 0)}${add_attribute("y2", c, 0)}${add_attribute("stroke", grd.VPath.stroke, 0)}${add_attribute("stroke-width", grd.VPath.strokewidth, 0)}${add_attribute("stroke-dasharray", grd.VPath.strokedasharray, 0)}${add_attribute("opacity", grd.VPath.opacity, 0)}${add_attribute("stroke-linecap", grd.VPath.strokelinecap, 0)}${add_attribute("stroke-linejoin", grd.VPath.strokelinejoin, 0)}${add_attribute("stroke-miterlimit", grd.VPath.strokemiterlimit, 0)}></line>`;
  })}</g>`;
});
export {
  PreviewLine as P,
  PreviewRect as a,
  PreviewCircle as b,
  PreviewEllipse as c,
  PreviewRegular as d,
  PreviewPath as e,
  PreviewText as f,
  PreviewLatex as g,
  PreviewGrid as h,
  PreviewImage as i
};
