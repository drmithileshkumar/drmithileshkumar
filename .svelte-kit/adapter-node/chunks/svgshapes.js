const svgshapes = [
  (fill = "white", stroke = "white", strokewidth = "2") => `<svg width="100%" height="100%" viewBox="-2.5 -2.5 25 25"><rect x="0" y="0" width="20" height="20" stroke='${stroke}' stroke-width='${strokewidth}' fill="${fill}"/></svg>`,
  // square black filled
  (fill = "white", stroke = "white", strokewidth = "2") => `<svg width="100%" height="100%" viewBox="-2 -2 19 24"><path d="M 0,10 L 7,20 L 14,10 L 7,0 Z" stroke='${stroke}' stroke-width='${strokewidth}' fill="${fill}"/></svg>`,
  // diamond
  (fill = "white", stroke = "white", strokewidth = "2") => `<svg width="100%" height="100%" viewBox="-50 -50 100 100"><polygon points='50.00,0.00 15.45,47.55 -40.45,29.39 -40.45,-29.39 15.45,-47.55 ' stroke='${stroke}' stroke-width='${strokewidth}' fill="${fill}"/></svg>`,
  // pentagon
  (fill = "white", stroke = "white", strokewidth = "2") => `<svg width="100%" height="100%" viewBox="34 27 42 45"><polygon points='72.27,49.50 36.27,70.28 36.27,28.72' stroke='${stroke}' stroke-width='${strokewidth}' fill="${fill}"/></svg>`,
  // triangle right
  (fill = "white", stroke = "white", strokewidth = "2") => `<svg width="100%" height="100%" viewBox="-2.5 -2.5 25 25"><circle cx="10" cy="10" r="10" stroke='${stroke}' stroke-width='${strokewidth}' fill="${fill}"/></svg>`,
  // circle
  (fill = "white", stroke = "white", strokewidth = "2") => `<svg width="100%" height="100%" viewBox="-48 -20.5 200 190"><path d="M 27.11,56.29 L 43.5,-11.04 L 73,49.45 L 142.11,44.22 L 93.69,90.97 L 120.02,155.08 L 60.59,123.48 L 7.75,168.33 L 19.44,102.05 L -39.53,65.66 L 27.11,56.29 Z" stroke='${stroke}' stroke-width='${strokewidth}' fill="${fill}"/></svg>`,
  // star
  (fill = "white", stroke = "white", strokewidth = "2") => `<svg width="100%" height="100%" viewBox="-12 -8 24 16"><ellipse cx="0" cy="0" rx="10" ry="6" stroke='${stroke}' stroke-width='${strokewidth}' fill="${fill}"/></svg>`,
  // horizontal ellipse
  (fill = "white", stroke = "white", strokewidth = "2") => `<svg width="100%" height="100%" viewBox="2 -2 16 24"><ellipse cx="10" cy="10" rx="6" ry="10" stroke='${stroke}' stroke-width='${strokewidth}' fill="${fill}"/></svg>`,
  // vertical ellipse
  (fill = "white", stroke = "white", strokewidth = "2") => `<svg width="100%" height="100%" viewBox="43 42 96 99"><polygon points='135.80,91.81 113.30,130.78 68.30,130.78 45.80,91.81 68.30,52.83 113.30,52.83' stroke='${stroke}' stroke-width='${strokewidth}' fill="${fill}"/></svg>`,
  // horizontal hexagon
  (fill = "white", stroke = "white", strokewidth = "2") => `<svg width="100%" height="100%" viewBox="50 50 100 100"><polygon points='150.00,100.00 125.00,143.30 75.00,143.30 50.00,100.00 75.00,56.70 125.00,56.70' stroke='${stroke}' stroke-width='${strokewidth}' fill="${fill}" transform="matrix(0 1 -1 0 200 0)"/></svg>`,
  // hexagon
  (fill = "white", stroke = "white", strokewidth = "2") => `<svg width="100%" height="100%" viewBox="0 0 100 60"><path d="M 5,5 H 70 L 90,55 H 25 Z" stroke='${stroke}' stroke-width='${strokewidth}' fill="${fill}"/></svg>`,
  // parallelogram
  (fill = "white", stroke = "white", strokewidth = "2") => `<svg width="100%" height="100%" viewBox="-2.5 -2.5 25 20"><rect x="0" y="0" width="20" height="15" stroke='${stroke}' stroke-width='${strokewidth}' fill="${fill}"/></svg>`,
  // rectangle
  (fill = "white", stroke = "white", strokewidth = "2") => `<svg width="100%" height="100%" viewBox="-2.5 -2.5 20 25"><rect x="0" y="0" width="15" height="20" stroke='${stroke}' stroke-width='${strokewidth}' fill="${fill}"/></svg>`,
  // vertical rectangle
  (fill = "white", stroke = "white", strokewidth = "2") => `<svg width="100%" height="100%" viewBox="0 0 60 60"><path d="M 5,5 V 55 H 55 Z" stroke='${stroke}' stroke-width='${strokewidth}' fill="${fill}"/></svg>`
  // right triangle
];
export {
  svgshapes as s
};
