import { r as randInt } from './common-CIVVH1Lv.js';
import { t as text2latex, P as Point } from './point-CjbXhAco.js';
import { L as Line } from './line2-dcGBK4v1.js';
import './point2D-CqpWWiVY.js';
import './fraction-DfHHiAXd.js';
import './nt-DokVuTcK.js';
import './sets-jGIduNNd.js';
import './linear2-BPefBxlj.js';

let problemset = {
  s: "",
  o: {
    "A": "",
    "B": "",
    "C": "",
    "D": ""
  },
  c: ""
};
const lines = (problemnumber) => {
  let N = 5;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let divStart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><p>What is the complementary angle?</p>`;
      let arrow = `<defs><marker
                                    id="arrow"
                                    viewBox="0 0 10 10"
                                    refX="5"
                                    refY="5"
                                    markerWidth="6"
                                    markerHeight="6"
                                    orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="currentcolor" />
                                </marker></defs>`;
      let svgEnd = "</svg>";
      let divEnd = "</div>";
      let a = randInt(89, 15);
      let point = {
        x: 100 * Math.cos(-a * Math.PI / 180),
        y: 100 * Math.sin(-a * Math.PI / 180)
      };
      let label = {
        x: 40 * Math.cos(-a * Math.PI / 360),
        y: 40 * Math.sin(-a * Math.PI / 360)
      };
      let angle = `<path d="M 100,0 L 0,0 L ${point.x},${point.y}" stroke="currentcolor" stroke-width="2" fill="none" marker-start="url(#arrow)" marker-end="url(#arrow)" />
            <path d="M 30,0 A 30 30 0 0 0 ${0.3 * point.x},${0.3 * point.y}" stroke="currentcolor" stroke-width="1.5" fill="none" />
            <text x="${label.x}" y="${label.y}" fill="currentcolor" font-size="14">${a}</text>
            `;
      let viewBox = {
        x: Math.min(point.x, 0),
        y: Math.min(point.y, 0),
        width: 110,
        height: 110
      };
      let svgStart = `<svg width="100" height="100" viewBox="${viewBox.x - 5} ${viewBox.y - 5} ${viewBox.width} ${viewBox.height}" >`;
      values[0] = 90 - a;
      values[1] = 180 - a;
      values[2] = 90 + a;
      values[3] = 2 * a;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = divStart + svgStart + arrow + angle + svgEnd + divEnd;
      break;
    }
    case 1: {
      let divStart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><p>What is the supplementary angle?</p>`;
      let arrow = `<defs><marker
                                    id="arrow"
                                    viewBox="0 0 10 10"
                                    refX="5"
                                    refY="5"
                                    markerWidth="6"
                                    markerHeight="6"
                                    orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="currentcolor" />
                                </marker></defs>`;
      let svgEnd = "</svg>";
      let divEnd = "</div>";
      let a = randInt(179, 15);
      let point = {
        x: 100 * Math.cos(-a * Math.PI / 180),
        y: 100 * Math.sin(-a * Math.PI / 180)
      };
      let label = {
        x: 40 * Math.cos(-a * Math.PI / 360),
        y: 40 * Math.sin(-a * Math.PI / 360)
      };
      let angle = `<path d="M 100,0 L 0,0 L ${point.x},${point.y}" stroke="currentcolor" stroke-width="2" fill="none" marker-start="url(#arrow)" marker-end="url(#arrow)" />
            <path d="M 30,0 A 30 30 0 0 0 ${0.3 * point.x},${0.3 * point.y}" stroke="currentcolor" stroke-width="1.5" fill="none" />
            <text x="${label.x}" y="${label.y}" fill="currentcolor" font-size="14">${a}</text>
            `;
      let viewBox = {
        x: Math.min(point.x, 0),
        y: Math.min(point.y, label.y, 0),
        width: 110,
        height: 110
      };
      let svgStart = `<svg width="${viewBox.width - viewBox.x}" height="${viewBox.height}" viewBox="${viewBox.x - 5} ${viewBox.y - 5} ${viewBox.width - viewBox.x} ${viewBox.height}" >`;
      values[0] = 180 - a;
      values[1] = 90 - a;
      values[2] = 90 + a;
      values[3] = 2 * a;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = divStart + svgStart + arrow + angle + svgEnd + divEnd;
      break;
    }
    case 2: {
      let arrow = `<defs><marker
                                    id="arrow"
                                    viewBox="0 0 10 10"
                                    refX="5"
                                    refY="5"
                                    markerWidth="6"
                                    markerHeight="6"
                                    orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="currentcolor" />
                                </marker></defs>`;
      let svgEnd = "</svg>";
      let divEnd = "</div>";
      let r = 100;
      let theta1 = randInt(90, 0);
      let dtheta = randInt(60, 30);
      let theta2 = theta1 + dtheta;
      let angles = [dtheta, 180 - dtheta, dtheta, 180 - dtheta];
      let vars = ["x", "y", "z"];
      let ri = randInt(3, 0);
      let as = ["", "", "", ""];
      as[ri] = angles[ri];
      as[(ri + 1) % 4] = vars[0];
      as[(ri + 2) % 4] = vars[1];
      as[(ri + 3) % 4] = vars[2];
      let p1 = new Point();
      p1.polar(theta1 * Math.PI / 180, r);
      let p2 = new Point();
      p2.polar(theta2 * Math.PI / 180, r);
      let q1 = new Point();
      q1.polar(theta1 * Math.PI / 180 + Math.PI, r);
      let q2 = new Point();
      q2.polar(theta2 * Math.PI / 180 + Math.PI, r);
      let l1 = `<line x1="${p1.x}" y1="${p1.y}" x2="${q1.x}" y2="${q1.y}" stroke="currentcolor" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)" />`;
      let l2 = `<line x1="${p2.x}" y1="${p2.y}" x2="${q2.x}" y2="${q2.y}" stroke="currentcolor" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)" />`;
      let a1 = `<path d="M ${0.3 * p1.x},${0.3 * p1.y} A 30,30 0 0 1 ${0.3 * p2.x},${0.3 * p2.y}" stroke='currentcolor' stroke-width="1" fill="none" />`;
      let a2 = `<path d="M ${0.35 * p2.x},${0.35 * p2.y} A 35,35 0 0 1 ${0.35 * q1.x},${0.3 * q1.y}" stroke='currentcolor' stroke-width="1" fill="none" />`;
      let a3 = `<path d="M ${0.3 * q1.x},${0.3 * q1.y} A 30,30 0 0 1 ${0.3 * q2.x},${0.3 * q2.y}" stroke='currentcolor' stroke-width="1" fill="none" />`;
      let a4 = `<path d="M ${0.35 * q2.x},${0.35 * q2.y} A 35,35 0 0 1 ${0.35 * p1.x},${0.35 * p1.y}" stroke='currentcolor' stroke-width="1" fill="none" />`;
      let t1 = new Point();
      t1.polar((theta1 + theta2) * Math.PI / 360 + 0.25, 48);
      let t2 = new Point();
      t2.polar((theta1 + theta2 + 180) * Math.PI / 360, 48);
      let t3 = new Point();
      t3.polar((theta1 + theta2 + 360) * Math.PI / 360 - 0.25, 40);
      let t4 = new Point();
      t4.polar((theta1 + theta2 + 540) * Math.PI / 360 + 0.25, 40);
      let lbl1 = `<g fill="red" transform="translate(${t1.x}, ${t1.y}) scale(0.015)">` + text2latex(`${as[0]}^\\circ`) + "</g>";
      let lbl2 = `<g fill="red" transform="translate(${t2.x}, ${t2.y}) scale(0.015)">` + text2latex(`${as[1]}^\\circ`) + "</g>";
      let lbl3 = `<g fill="red" transform="translate(${t3.x}, ${t3.y}) scale(0.015)">` + text2latex(`${as[2]}^\\circ`) + "</g>";
      let lbl4 = `<g fill="red" transform="translate(${t4.x}, ${t4.y}) scale(0.015)">` + text2latex(`${as[3]}^\\circ`) + "</g>";
      let viewBox = {
        x: -110,
        y: -110,
        width: 210,
        height: 210
      };
      let rj = randInt(2, 0);
      let svgStart = `<svg width="${viewBox.width}" height="${viewBox.height}" viewBox="${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}" >`;
      let divStart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><p>What is the value of \\(${vars[rj]}\\)?</p>`;
      values[0] = angles[(ri + rj + 1) % 4];
      values[1] = angles[(ri + rj + 2) % 4];
      values[2] = 0;
      values[3] = 180;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = divStart + svgStart + arrow + l1 + l2 + a1 + a2 + a3 + a4 + lbl1 + lbl2 + lbl3 + lbl4 + svgEnd + divEnd;
      break;
    }
    case 3: {
      let arrow = `<defs><marker
                                    id="arrow"
                                    viewBox="0 0 10 10"
                                    refX="5"
                                    refY="5"
                                    markerWidth="6"
                                    markerHeight="6"
                                    orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="currentcolor" />
                                </marker></defs>`;
      let svgEnd = "</svg>";
      let divEnd = "</div>";
      let r = 100;
      let O = new Point();
      let theta1 = randInt(90, 0);
      let dtheta = randInt(60, 30);
      let splt = randInt(60, 30);
      let theta2 = theta1 + dtheta;
      let theta3 = theta2 + splt;
      let angles = [dtheta, splt, 180 - dtheta - splt, dtheta, 180 - dtheta];
      let ri = randInt(4, 0);
      while (ri === 1 || ri === 2) {
        ri = randInt(4, 0);
      }
      let as = ["", "", "", "", ""];
      as[ri] = angles[ri];
      as[1] = angles[1];
      if (ri === 0) {
        as[2] = "x";
        as[3] = "y";
        as[4] = "z";
      } else if (ri === 3) {
        as[0] = "x";
        as[2] = "y";
        as[4] = "z";
      } else if (ri === 4) {
        as[0] = "x";
        as[2] = "y";
        as[3] = "z";
      }
      let p1 = new Point();
      p1.polar(theta1 * Math.PI / 180, r);
      let p2 = new Point();
      p2.polar(theta2 * Math.PI / 180, r);
      let q1 = new Point();
      let p3 = new Point();
      p3.polar(theta3 * Math.PI / 180, r);
      q1.polar(theta1 * Math.PI / 180 + Math.PI, r);
      let q2 = new Point();
      q2.polar(theta2 * Math.PI / 180 + Math.PI, r);
      let l1 = `<line x1="${p1.x}" y1="${p1.y}" x2="${q1.x}" y2="${q1.y}" stroke="currentcolor" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)" />`;
      let l2 = `<line x1="${p2.x}" y1="${p2.y}" x2="${q2.x}" y2="${q2.y}" stroke="currentcolor" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)" />`;
      let l3 = `<line x1="${O.x}" y1="${O.y}" x2="${p3.x}" y2="${p3.y}" stroke="currentcolor" stroke-width="2"  marker-end="url(#arrow)" />`;
      let a1 = O.drawAngle(p1, p2, as[0]);
      let a2 = O.drawAngle(p2, p3, as[1], 2, -10);
      let a3 = O.drawAngle(p3, q1, as[2], 1, -10);
      let a4 = O.drawAngle(q1, q2, as[3]);
      let a5 = O.drawAngle(q2, p1, as[4], 1, -10);
      let viewBox = {
        x: -110,
        y: -110,
        width: 210,
        height: 210
      };
      let svgStart = `<svg width="${viewBox.width}" height="${viewBox.height}" viewBox="${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}" >`;
      let divStart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><p>What is the value of \\(x\\)?</p>`;
      let rj = as.indexOf("x");
      values[0] = angles[rj % 5];
      values[1] = angles[(rj + 1) % 5];
      values[2] = 0;
      values[3] = 180;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = divStart + svgStart + arrow + l1 + l2 + l3 + a1 + a2 + a3 + a4 + a5 + svgEnd + divEnd;
      break;
    }
    case 4: {
      let arrow = `<defs><marker
                                    id="arrow"
                                    viewBox="0 0 10 10"
                                    refX="5"
                                    refY="5"
                                    markerWidth="6"
                                    markerHeight="6"
                                    orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="currentcolor" />
                                </marker></defs>`;
      let svgEnd = "</svg>";
      let divEnd = "</div>";
      let r = 100;
      let O = new Point();
      let theta1 = 330;
      let theta2 = 210;
      let p1 = new Point();
      p1.polar(theta1 * Math.PI / 180, r);
      let q1 = new Point();
      q1.polar(theta2 * Math.PI / 180, r);
      let p2 = q1.reflect(O);
      let q2 = p1.reflect(O);
      let p = new Point();
      let theta = randInt(180 + theta1 - 20, 180 + theta2 + 20);
      p.polar(theta * Math.PI / 180, r);
      let q = p.reflect(O);
      let line1 = new Line({ p: p1, q: q1 });
      let line2 = new Line({ p: p2, q: q2 });
      let line = new Line({ p, q });
      let L = line1.intersect(line);
      let M = line2.intersect(line);
      let aq1 = randInt(3, 0);
      let aq2 = randInt(3, 0);
      let angle0 = L.anglePair(q, p1, true);
      angle0 = Math.floor(angle0 * 180 / Math.PI);
      let angle1 = 180 - angle0;
      let a1 = "";
      let a2 = "";
      let coin = Math.random();
      let c1, c2;
      switch (aq1) {
        case 0: {
          c1 = coin > 0.5 ? "x" : angle0;
          a1 = L.drawAngle(q, p1, c1, 1);
          break;
        }
        case 1: {
          c1 = coin > 0.5 ? "x" : angle1;
          a1 = L.drawAngle(p1, p, c1, 1);
          break;
        }
        case 2: {
          c1 = coin > 0.5 ? "x" : angle0;
          a1 = L.drawAngle(p, q1, c1, 1);
          break;
        }
        case 3: {
          c1 = coin > 0.5 ? "x" : angle1;
          a1 = L.drawAngle(q1, q, c1, 1);
          break;
        }
      }
      switch (aq2) {
        case 0: {
          c2 = coin <= 0.5 ? "x" : angle0;
          a2 = M.drawAngle(q, p2, c2, 1);
          break;
        }
        case 1: {
          c2 = coin <= 0.5 ? "x" : angle1;
          a2 = M.drawAngle(p2, p, c2, 1);
          break;
        }
        case 2: {
          c2 = coin <= 0.5 ? "x" : angle0;
          a2 = M.drawAngle(p, q2, c2, 1);
          break;
        }
        case 3: {
          c2 = coin <= 0.5 ? "x" : angle1;
          a2 = M.drawAngle(q2, q, c2, 1);
          break;
        }
      }
      let viewBox = {
        x: -110,
        y: -110,
        width: 210,
        height: 210
      };
      let svgStart = `<svg width="${viewBox.width}" height="${viewBox.height}" viewBox="${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}" >`;
      let divStart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><p>What is the value of \\(x\\)?</p>`;
      let cangle = c1 === "x" ? c2 : c1;
      cangle = (aq1 + aq2) % 2 === 0 ? cangle : 180 - cangle;
      values[0] = cangle;
      values[1] = 180 - cangle;
      values[2] = 0;
      values[3] = 180;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = divStart + svgStart + arrow + line1.draw() + line2.draw() + line.draw() + a1 + a2 + svgEnd + divEnd;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { lines };
//# sourceMappingURL=lines2-DfIA0m8L.js.map
