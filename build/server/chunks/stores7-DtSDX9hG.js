import { w as writable } from './index2-D2s-XE5r.js';

const classes = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"];
const icons = {
  "Class 1": {
    "Shapes": "chapter.svg",
    "Patterns": "chapter.svg",
    "Counting": "chapter.svg",
    "Time": "chapter.svg",
    "Addition": "chapter.svg",
    "Subtraction": "chapter.svg"
  },
  "Class 2": {
    "Counting": "chapter.svg",
    "Addition": "chapter.svg",
    "Subtraction": "chapter.svg",
    "Shapes": "chapter.svg",
    "Patterns": "chapter.svg",
    "Time": "chapter.svg",
    "Lines": "chapter.svg"
  },
  "Class 3": {
    "Counting": "chapter.svg",
    "Addition": "chapter.svg",
    "Subtraction": "chapter.svg",
    "Multiplication": "chapter.svg",
    "Division": "chapter.svg",
    "Shapes": "chapter.svg",
    "Patterns": "chapter.svg",
    "Time": "chapter.svg"
  },
  "Class 4": {
    "Addition": "chapter.svg",
    "Subtraction": "chapter.svg",
    "Multiplication": "chapter.svg",
    "Division": "chapter.svg",
    "Fractions": "chapter.svg",
    "Shapes": "chapter.svg",
    "Patterns": "chapter.svg",
    "Time": "chapter.svg",
    "Weight": "chapter.svg",
    "Perimeter": "chapter.svg"
  },
  "Class 5": {
    "Multiplication": "chapter.svg",
    "Division": "chapter.svg",
    "Fractions": "chapter.svg",
    "LCM": "chapter.svg",
    "Shapes": "chapter.svg",
    "Patterns": "chapter.svg",
    "Length": "chapter.svg",
    "Weight": "chapter.svg",
    "Volume": "chapter.svg",
    "Angles": "chapter.svg",
    "Perimeter": "chapter.svg",
    "Area": "chapter.svg"
  },
  "Class 6": {
    "Numbers": "chapter.svg",
    "Basic Geometry": "chapter.svg",
    "Elementary Shapes": "chapter.svg",
    "Integers": "chapter.svg",
    "Fractions": "chapter.svg",
    "Decimals": "chapter.svg",
    "Data handling": "chapter.svg",
    "Mensuration": "chapter.svg",
    "Algebra": "chapter.svg",
    "Ratio and Proportion": "chapter.svg",
    "Symmetry": "chapter.svg",
    "Practical Geometry": "chapter.svg"
  },
  "Class 7": {
    "Integers": "chapter.svg",
    "Fraction and Decimals": "chapter.svg",
    "Data handling": "chapter.svg",
    "Simple Equations": "chapter.svg",
    "Lines and Angles": "chapter.svg",
    "Triangle": "chapter.svg",
    "Comparing Quantities": "chapter.svg",
    "Rational Numbers": "chapter.svg",
    "Practical Geometry": "chapter.svg",
    "Perimeter and Area": "chapter.svg",
    "Algebraic Expressions": "chapter.svg",
    "Exponents and Powers": "chapter.svg",
    "Symmetry": "chapter.svg",
    "Solids": "chapter.svg"
  },
  "Class 8": {
    "Rational Numbers": "chapter.svg",
    "Linear Equations": "chapter.svg",
    "Quadrilaterals": "chapter.svg",
    "Practical Geometry": "chapter.svg",
    "Data handling": "chapter.svg",
    "Squares and Square Roots": "chapter.svg",
    "Cube and Cube Roots": "chapter.svg",
    "Comparing Quantities": "chapter.svg",
    "Algebraic Expressions": "chapter.svg",
    "Shapes": "chapter.svg",
    "Mensuration": "chapter.svg",
    "Powers": "chapter.svg",
    "Direct and Indirect Proportions": "chapter.svg",
    "Factorization": "chapter.svg",
    "Graph": "chapter.svg",
    "Playing with numbers": "chapter.svg"
  },
  "Class 9": {
    "Number systems": "chapter.svg",
    "Polynomials": "chapter.svg",
    "Coordinate Geometry": "chapter.svg",
    "Linear Equations in Two Variables": "chapter.svg",
    "Lines and Angles": "chapter.svg",
    "Triangles": "chapter.svg",
    "Quadrilaterals": "chapter.svg",
    "Areas of Parallelograms and Triangles": "chapter.svg",
    "Circles": "chapter.svg",
    "Heron Formula": "chapter.svg",
    "Surface areas and volumes": "chapter.svg",
    "Statistics": "chapter.svg",
    "Probability": "chapter.svg"
  },
  "Class 10": {
    "Real Numbers": "chapter.svg",
    "Polynomials": "chapter.svg",
    "Linear Equations in Two Variables": "chapter.svg",
    "Quadratic Equations": "chapter.svg",
    "Arithmetic Progressions": "chapter.svg",
    "Triangles": "chapter.svg",
    "Coordinate Geometry": "chapter.svg",
    "Trigonometry": "chapter.svg",
    "Circles": "chapter.svg",
    "Areas related to Circles": "chapter.svg",
    "Surface areas and volumes": "chapter.svg",
    "Statistics": "chapter.svg",
    "Probability": "chapter.svg"
  },
  "Class 11": {
    "Sets": "chapter.svg",
    "Relations and functions 11": "chapter.svg",
    "Trigonometric functions": "chapter.svg",
    "Principle of mathematical induction": "chapter.svg",
    "Complex numbers": "chapter.svg",
    "Quadratic equations": "chapter.svg",
    "Linear inequalities": "chapter.svg",
    "Permutations and combinations": "chapter.svg",
    "Binomial theorem": "chapter.svg",
    "Sequences and series": "chapter.svg",
    "Straight lines": "chapter.svg",
    "Circle": "chapter.svg",
    "Parabola": "chapter.svg",
    "Ellipse": "chapter.svg",
    "Hyperbola": "chapter.svg",
    "Introduction to 3D geometry": "chapter.svg",
    "Limits": "chapter.svg",
    "Derivatives": "chapter.svg",
    "Mathematical reasoning": "chapter.svg",
    "Statistics": "chapter.svg",
    "Probability": "chapter.svg"
  },
  "Class 12": {
    "Relations and functions 12": "chapter.svg",
    "Inverse trigonometric functions": "chapter.svg",
    "Matrices": "chapter.svg",
    "Determinants": "chapter.svg",
    "Continuity": "chapter.svg",
    "Differentiability": "chapter.svg",
    "Application of derivatives": "chapter.svg",
    "Indefinite Integrals": "chapter.svg",
    "Definite Integrals": "chapter.svg",
    "Application of integrals": "chapter.svg",
    "Differential equations": "chapter.svg",
    "Vector algebra": "chapter.svg",
    "Three dimensional geometry": "chapter.svg",
    "Linear programming": "chapter.svg"
  }
};
const chapters = {
  "Class 1": [
    "Shapes",
    "Patterns",
    "Counting",
    "Time",
    "Addition",
    "Subtraction"
  ],
  "Class 2": [
    "Counting",
    "Addition",
    "Subtraction",
    "Shapes",
    "Patterns",
    "Time",
    "Lines"
  ],
  "Class 3": [
    "Counting",
    "Addition",
    "Subtraction",
    "Multiplication",
    "Division",
    "Shapes",
    "Patterns",
    "Time"
  ],
  "Class 4": [
    "Addition",
    "Subtraction",
    "Multiplication",
    "Division",
    "Fractions",
    "Shapes",
    "Patterns",
    "Time",
    "Weight",
    "Perimeter"
  ],
  "Class 5": [
    "Multiplication",
    "Division",
    "Fractions",
    "LCM",
    "Shapes",
    "Patterns",
    "Length",
    "Weight",
    "Volume",
    "Angles",
    "Perimeter",
    "Area"
  ],
  "Class 6": [
    "Numbers",
    "Basic Geometry",
    "Elementary Shapes",
    "Integers",
    "Fractions",
    "Decimals",
    "Data handling",
    "Mensuration",
    "Algebra",
    "Ratio and Proportion",
    "Symmetry",
    "Practical Geometry"
  ],
  "Class 7": [
    "Integers",
    "Fraction and Decimals",
    "Data handling",
    "Simple Equations",
    "Lines and Angles",
    "Triangle",
    "Comparing Quantities",
    "Rational Numbers",
    "Practical Geometry",
    "Perimeter and Area",
    "Algebraic Expressions",
    "Exponents and Powers",
    "Symmetry",
    "Solids"
  ],
  "Class 8": [
    "Rational Numbers",
    "Linear Equations",
    "Quadrilaterals",
    "Practical Geometry",
    "Data handling",
    "Squares and Square Roots",
    "Cube and Cube Roots",
    "Comparing Quantities",
    "Algebraic Expressions",
    "Shapes",
    "Mensuration",
    "Powers",
    "Direct and Indirect Proportions",
    "Factorization",
    "Graph",
    "Playing with numbers"
  ],
  "Class 9": [
    "Number systems",
    "Polynomials",
    "Coordinate Geometry",
    "Linear Equations in Two Variables",
    "Lines and Angles",
    "Triangles",
    "Quadrilaterals",
    "Areas of Parallelograms and Triangles",
    "Circles",
    "Heron Formula",
    "Surface areas and volumes",
    "Statistics",
    "Probability"
  ],
  "Class 10": [
    "Real Numbers",
    "Polynomials",
    "Linear Equations in Two Variables",
    "Quadratic Equations",
    "Arithmetic Progressions",
    "Triangles",
    "Coordinate Geometry",
    "Trigonometry",
    "Circles",
    "Areas related to Circles",
    "Surface areas and volumes",
    "Statistics",
    "Probability"
  ],
  "Class 11": [
    "Sets",
    "Relations and functions 11",
    "Trigonometric functions",
    "Principle of mathematical induction",
    "Complex numbers",
    "Quadratic equations",
    "Linear inequalities",
    "Permutations and combinations",
    "Binomial theorem",
    "Sequences and series",
    "Straight lines",
    "Circle",
    "Parabola",
    "Ellipse",
    "Hyperbola",
    "Introduction to 3D geometry",
    "Limits",
    "Derivatives",
    "Mathematical reasoning",
    "Statistics",
    "Probability"
  ],
  "Class 12": [
    "Relations and functions 12",
    "Inverse trigonometric functions",
    "Matrices",
    "Determinants",
    "Continuity",
    "Differentiability",
    "Application of derivatives",
    "Indefinite Integrals",
    "Definite Integrals",
    "Application of integrals",
    "Differential equations",
    "Vector algebra",
    "Three dimensional geometry",
    "Linear programming"
  ]
};
let classChapters = {
  "Class 1": [
    { name: "Shapes", url: "/mathril/class1/chapter1", youtube: [] },
    { name: "Patterns", url: "/mathril/class1/chapter2", youtube: [] },
    { name: "Counting", url: "/mathril/class1/chapter3", youtube: [] },
    { name: "Time", url: "/mathril/class1/chapter4", youtube: [] },
    { name: "Addition", url: "/mathril/class1/chapter5", youtube: [] },
    { name: "Subtraction", url: "/mathril/class1/chapter6", youtube: [] }
  ],
  "Class 2": [
    { name: "Counting", url: "/mathril/class2/chapter1", youtube: [] },
    { name: "Addition", url: "/mathril/class2/chapter2", youtube: [] },
    { name: "Subtraction", url: "/mathril/class2/chapter3", youtube: [] },
    { name: "Shapes", url: "/mathril/class2/chapter4", youtube: [] },
    { name: "Patterns", url: "/mathril/class2/chapter5", youtube: [] },
    { name: "Time", url: "/mathril/class2/chapter6", youtube: [] },
    { name: "Lines", url: "/mathril/class2/chapter7", youtube: [] }
  ],
  "Class 3": [
    { name: "Counting", url: "/mathril/class3/chapter1", youtube: [] },
    { name: "Addition", url: "/mathril/class3/chapter2", youtube: [] },
    { name: "Subtraction", url: "/mathril/class3/chapter3", youtube: [] },
    { name: "Multiplication", url: "/mathril/class3/chapter4", youtube: [] },
    { name: "Division", url: "/mathril/class3/chapter5", youtube: [] },
    { name: "Shapes", url: "/mathril/class3/chapter6", youtube: [] },
    { name: "Patterns", url: "/mathril/class3/chapter7", youtube: [] },
    { name: "Time", url: "/mathril/class3/chapter8", youtube: [] }
  ],
  "Class 4": [
    { name: "Addition", url: "/mathril/class4/chapter1", youtube: [] },
    { name: "Subtraction", url: "/mathril/class4/chapter2", youtube: [] },
    { name: "Multiplication", url: "/mathril/class4/chapter3", youtube: [] },
    { name: "Division", url: "/mathril/class4/chapter4", youtube: [] },
    { name: "Fractions", url: "/mathril/class4/chapter5", youtube: [] },
    { name: "Shapes", url: "/mathril/class4/chapter6", youtube: [] },
    { name: "Patterns", url: "/mathril/class4/chapter7", youtube: [] },
    { name: "Time", url: "/mathril/class4/chapter8", youtube: [] },
    { name: "Weight", url: "/mathril/class4/chapter9", youtube: [] },
    { name: "Perimeter", url: "/mathril/class4/chapter10", youtube: [] }
  ],
  "Class 5": [
    { name: "Multiplication", url: "/mathril/class5/chapter1", youtube: [] },
    { name: "Division", url: "/mathril/class5/chapter2", youtube: [] },
    { name: "Fractions", url: "/mathril/class5/chapter3", youtube: [] },
    { name: "LCM", url: "/mathril/class5/chapter4", youtube: [] },
    { name: "Shapes", url: "/mathril/class5/chapter5", youtube: [] },
    { name: "Patterns", url: "/mathril/class5/chapter6", youtube: [] },
    { name: "Length", url: "/mathril/class5/chapter7", youtube: [] },
    { name: "Weight", url: "/mathril/class5/chapter8", youtube: [] },
    { name: "Volume", url: "/mathril/class5/chapter9", youtube: [] },
    { name: "Angles", url: "/mathril/class5/chapter10", youtube: [] },
    { name: "Perimeter", url: "/mathril/class5/chapter11", youtube: [] },
    { name: "Area", url: "/mathril/class5/chapter12", youtube: [] }
  ],
  "Class 6": [
    { name: "Numbers", url: "/mathril/class6/chapter1", youtube: [] },
    { name: "Basic Geometry", url: "/mathril/class6/chapter2", youtube: [] },
    { name: "Elementary Shapes", url: "/mathril/class6/chapter3", youtube: [] },
    { name: "Integers", url: "/mathril/class6/chapter4", youtube: [] },
    { name: "Fractions", url: "/mathril/class6/chapter5", youtube: [] },
    { name: "Decimals", url: "/mathril/class6/chapter6", youtube: [] },
    { name: "Data handling", url: "/mathril/class6/chapter7", youtube: [] },
    { name: "Mensuration", url: "/mathril/class6/chapter8", youtube: [] },
    { name: "Algebra", url: "/mathril/class6/chapter9", youtube: [] },
    { name: "Ratio and Proportion", url: "/mathril/class6/chapter10", youtube: [] },
    { name: "Symmetry", url: "/mathril/class6/chapter11", youtube: [] },
    { name: "Practical Geometry", url: "/mathril/class6/chapter12", youtube: [] }
  ],
  "Class 7": [
    { name: "Integers", url: "/mathril/class7/chapter1", youtube: [] },
    { name: "Fraction and Decimals", url: "/mathril/class7/chapter2", youtube: [] },
    { name: "Data handling", url: "/mathril/class7/chapter3", youtube: [] },
    { name: "Simple Equations", url: "/mathril/class7/chapter4", youtube: [] },
    { name: "Lines and Angles", url: "/mathril/class7/chapter5", youtube: [] },
    { name: "Triangle", url: "/mathril/class7/chapter6", youtube: [] },
    { name: "Comparing Quantities", url: "/mathril/class7/chapter7", youtube: [] },
    { name: "Rational Numbers", url: "/mathril/class7/chapter8", youtube: [] },
    { name: "Practical Geometry", url: "/mathril/class7/chapter9", youtube: [] },
    { name: "Perimeter and Area", url: "/mathril/class7/chapter10", youtube: [] },
    { name: "Algebraic Expressions", url: "/mathril/class7/chapter11", youtube: [] },
    { name: "Exponents and Powers", url: "/mathril/class7/chapter12", youtube: [] },
    { name: "Symmetry", url: "/mathril/class7/chapter13", youtube: [] },
    { name: "Solids", url: "/mathril/class7/chapter14", youtube: [] }
  ],
  "Class 8": [
    { name: "Rational Numbers", url: "/mathril/class8/chapter1", youtube: [] },
    { name: "Linear Equations", url: "/mathril/class8/chapter2", youtube: [] },
    { name: "Quadrilaterals", url: "/mathril/class8/chapter3", youtube: [] },
    { name: "Practical Geometry", url: "/mathril/class8/chapter4", youtube: [] },
    { name: "Data handling", url: "/mathril/class8/chapter5", youtube: [] },
    { name: "Squares and Square Roots", url: "/mathril/class8/chapter6", youtube: [] },
    { name: "Cube and Cube Roots", url: "/mathril/class8/chapter7", youtube: [] },
    { name: "Comparing Quantities", url: "/mathril/class8/chapter8", youtube: [] },
    { name: "Algebraic Expressions", url: "/mathril/class8/chapter9", youtube: [] },
    { name: "Shapes", url: "/mathril/class8/chapter10", youtube: [] },
    { name: "Mensuration", url: "/mathril/class8/chapter11", youtube: [] },
    { name: "Powers", url: "/mathril/class8/chapter12", youtube: [] },
    {
      name: "Direct and Indirect Proportions",
      url: "/mathril/class8/chapter13",
      youtube: []
    },
    { name: "Factorization", url: "/mathril/class8/chapter14", youtube: [] },
    { name: "Graph", url: "/mathril/class8/chapter15", youtube: [] },
    { name: "Playing with numbers", url: "/mathril/class8/chapter16", youtube: [] }
  ],
  "Class 9": [
    { name: "Number systems", url: "/mathril/class9/chapter1", youtube: [] },
    { name: "Polynomials", url: "/mathril/class9/chapter2", youtube: [] },
    { name: "Coordinate Geometry", url: "/mathril/class9/chapter3", youtube: [] },
    {
      name: "Linear Equations in Two Variables",
      url: "/mathril/class9/chapter4",
      youtube: []
    },
    { name: "Lines and Angles", url: "/mathril/class9/chapter5", youtube: [] },
    { name: "Triangles", url: "/mathril/class9/chapter6", youtube: [] },
    { name: "Quadrilaterals", url: "/mathril/class9/chapter7", youtube: [] },
    {
      name: "Areas of Parallelograms and Triangles",
      url: "/mathril/class9/chapter8",
      youtube: []
    },
    { name: "Circles", url: "/mathril/class9/chapter9", youtube: [] },
    { name: "Heron Formula", url: "/mathril/class9/chapter10", youtube: [] },
    { name: "Surface areas and volumes", url: "/mathril/class9/chapter11", youtube: [] },
    { name: "Statistics", url: "/mathril/class9/chapter12", youtube: [] },
    { name: "Probability", url: "/mathril/class9/chapter13", youtube: [] }
  ],
  "Class 10": [
    { name: "Real Numbers", url: "/mathril/class10/chapter1", youtube: [] },
    { name: "Polynomials", url: "/mathril/class10/chapter2", youtube: [] },
    {
      name: "Linear Equations in Two Variables",
      url: "/mathril/class10/chapter3",
      youtube: []
    },
    { name: "Quadratic Equations", url: "/mathril/class10/chapter4", youtube: [] },
    { name: "Arithmetic Progressions", url: "/mathril/class10/chapter5", youtube: [] },
    { name: "Triangles", url: "/mathril/class10/chapter6", youtube: [] },
    { name: "Coordinate Geometry", url: "/mathril/class10/chapter7", youtube: [] },
    { name: "Trigonometry", url: "/mathril/class10/chapter8", youtube: [] },
    { name: "Circles", url: "/mathril/class10/chapter9", youtube: [] },
    { name: "Areas related to Circles", url: "/mathril/class10/chapter10", youtube: [] },
    { name: "Surface areas and volumes", url: "/mathril/class10/chapter11", youtube: [] },
    { name: "Statistics", url: "/mathril/class10/chapter12", youtube: [] },
    { name: "Probability", url: "/mathril/class10/chapter13", youtube: [] }
  ],
  "Class 11": [
    { name: "Sets", url: "/mathril/class11/chapter1", youtube: [] },
    { name: "Relations and functions 11", url: "/mathril/class11/chapter2", youtube: [] },
    { name: "Trigonometric functions", url: "/mathril/class11/chapter3", youtube: [] },
    {
      name: "Principle of mathematical induction",
      url: "/mathril/class11/chapter4",
      youtube: []
    },
    { name: "Complex numbers", url: "/mathril/class11/chapter5", youtube: [] },
    { name: "Quadratic equations", url: "/mathril/class11/chapter6", youtube: [] },
    { name: "Linear inequalities", url: "/mathril/class11/chapter7", youtube: [] },
    {
      name: "Permutations and combinations",
      url: "/mathril/class11/chapter8",
      youtube: []
    },
    { name: "Binomial theorem", url: "/mathril/class11/chapter9", youtube: [] },
    { name: "Sequences and series", url: "/mathril/class11/chapter10", youtube: [] },
    { name: "Straight lines", url: "/mathril/class11/chapter11", youtube: [] },
    { name: "Circle", url: "/mathril/class11/chapter12", youtube: [] },
    { name: "Parabola", url: "/mathril/class11/chapter13", youtube: [] },
    { name: "Ellipse", url: "/mathril/class11/chapter14", youtube: [] },
    { name: "Hyperbola", url: "/mathril/class11/chapter15", youtube: [] },
    {
      name: "Introduction to 3D geometry",
      url: "/mathril/class11/chapter16",
      youtube: []
    },
    { name: "Limits", url: "/mathril/class11/chapter17", youtube: [] },
    { name: "Derivatives", url: "/mathril/class11/chapter18", youtube: [] },
    { name: "Mathematical reasoning", url: "/mathril/class11/chapter19", youtube: [] },
    { name: "Statistics", url: "/mathril/class11/chapter20", youtube: [] },
    { name: "Probability", url: "/mathril/class11/chapter21", youtube: [] }
  ],
  "Class 12": [
    { name: "Relations and functions 12", url: "/mathril/class12/chapter1", youtube: [] },
    {
      name: "Inverse trigonometric functions",
      url: "/mathril/class12/chapter2",
      youtube: []
    },
    { name: "Matrices", url: "/mathril/class12/chapter3", youtube: [] },
    { name: "Determinants", url: "/mathril/class12/chapter4", youtube: [] },
    { name: "Continuity", url: "/mathril/class12/chapter5", youtube: [] },
    { name: "Differentiability", url: "/mathril/class12/chapter6", youtube: [] },
    { name: "Application of derivatives", url: "/mathril/class12/chapter7", youtube: [] },
    { name: "Indefinite Integrals", url: "/mathril/class12/chapter8", youtube: [] },
    { name: "Definite Integrals", url: "/mathril/class12/chapter9", youtube: [] },
    { name: "Application of integrals", url: "/mathril/class12/chapter10", youtube: [] },
    { name: "Differential equations", url: "/mathril/class12/chapter11", youtube: [] },
    { name: "Vector algebra", url: "/mathril/class12/chapter12", youtube: [] },
    { name: "Three dimensional geometry", url: "/mathril/class12/chapter13", youtube: [] },
    { name: "Linear programming", url: "/mathril/class12/chapter14", youtube: [] }
  ]
};
let NoOfQuestions = [
  [3, 3, 3, 1, 3, 4],
  [2, 7, 4, 3, 1, 1, 1],
  [4, 3, 4, 4, 3, 1, 1, 1],
  [1, 1, 4, 3, 2, 2, 1, 1, 1, 1],
  [2, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1],
  [29, 4, 7, 4, 11, 6, 2, 2, 2, 5, 1, 1],
  [2, 4, 4, 3, 5, 3, 9, 5, 1, 7, 5, 3, 2, 1],
  [4, 4, 5, 2, 2, 4, 2, 4, 5, 1, 12, 4, 2, 1, 2, 1],
  [10, 10, 5, 5, 3, 2, 3, 2, 2, 2, 17, 4, 4],
  [7, 4, 2, 2, 7, 2, 3, 11, 2, 2, 5, 3, 2],
  [21, 9, 9, 2, 7, 2, 2, 9, 2, 10, 14, 6, 3, 5, 5, 3, 5, 3, 2, 5, 5],
  [4, 2, 10, 8, 2, 3, 2, 2, 2, 2, 3, 11, 15, 3]
];
const QuestionTimer = writable(null);
const seoInfo = {
  "Class 1": {
    title: "Class 1 Math Practice | Mathril - Shapes, Patterns, Counting, Time, Addition, Subtraction",
    description: "Boost your Class 1 math skills with Mathril's practice problems. Topics include shapes, patterns, counting, time, addition, and subtraction.",
    keywords: "Mathril, Class 1, math practice, shapes, patterns, counting, time, addition, subtraction"
  },
  "Class 2": {
    title: "Class 2 Math Practice | Mathril - Counting, Addition, Subtraction, Shapes, Patterns, Time, Lines",
    description: "Improve your Class 2 math skills with Mathril's practice problems. Covering counting, addition, subtraction, shapes, patterns, time, and lines.",
    keywords: "Mathril, Class 2, math practice, counting, addition, subtraction, shapes, patterns, time, lines"
  },
  "Class 3": {
    title: "Class 3 Math Practice | Mathril - Counting, Addition, Subtraction, Multiplication, Division, Shapes, Patterns, Time",
    description: "Master Class 3 math topics with Mathril's practice problems, including counting, addition, subtraction, multiplication, division, shapes, patterns, and time.",
    keywords: "Mathril, Class 3, math practice, counting, addition, subtraction, multiplication, division, shapes, patterns, time"
  },
  "Class 4": {
    title: "Class 4 Math Practice | Mathril - Addition, Subtraction, Multiplication, Division, Fractions, Shapes, Patterns, Time, Weight, Perimeter",
    description: "Boost your Class 4 math skills with Mathril's practice problems. Explore topics like addition, subtraction, multiplication, division, fractions, shapes, patterns, time, weight, and perimeter.",
    keywords: "Mathril, Class 4, math practice, addition, subtraction, multiplication, division, fractions, shapes, patterns, time, weight, perimeter"
  },
  "Class 5": {
    title: "Class 5 Math Practice | Mathril - Multiplication, Division, Fractions, LCM, Shapes, Patterns, Length, Weight, Volume, Angles, Perimeter, Area",
    description: "Improve your Class 5 math skills with Mathril's practice problems. Covering multiplication, division, fractions, LCM, shapes, patterns, length, weight, volume, angles, perimeter, and area.",
    keywords: "Mathril, Class 5, math practice, multiplication, division, fractions, LCM, shapes, patterns, length, weight, volume, angles, perimeter, area"
  },
  "Class 6": {
    title: "Class 6 Math Practice | Mathril - Numbers, Basic Geometry, Elementary Shapes, Integers, Fractions, Decimals, Data handling, Mensuration, Algebra, Ratio and Proportion, Symmetry, Practical Geometry",
    description: "Master Class 6 math topics with Mathril's practice problems, including numbers, basic geometry, elementary shapes, integers, fractions, decimals, data handling, mensuration, algebra, ratio and proportion, symmetry, and practical geometry.",
    keywords: "Mathril, Class 6, math practice, numbers, basic geometry, elementary shapes, integers, fractions, decimals, data handling, mensuration, algebra, ratio and proportion, symmetry, practical geometry"
  },
  "Class 7": {
    title: "Class 7 Math Practice | Mathril - Integers, Fraction and Decimals, Data handling, Simple Equations, Lines and Angles, Triangle, Comparing Quantities, Rational Numbers, Practical Geometry, Perimeter and Area, Algebraic Expressions, Exponents and Powers, Symmetry, Solids",
    description: "Boost your Class 7 math skills with Mathril's practice problems. Topics include integers, fractions and decimals, data handling, simple equations, lines and angles, triangle, comparing quantities, rational numbers, practical geometry, perimeter and area, algebraic expressions, exponents and powers, symmetry, and solids.",
    keywords: "Mathril, Class 7, math practice, integers, fractions and decimals, data handling, simple equations, lines and angles, triangle, comparing quantities, rational numbers, practical geometry, perimeter and area, algebraic expressions, exponents and powers, symmetry, solids"
  },
  "Class 8": {
    title: "Class 8 Math Practice | Mathril - Rational Numbers, Linear Equations, Quadrilaterals, Practical Geometry, Data handling, Squares and Square Roots, Cube and Cube Roots, Comparing Quantities, Algebraic Expressions, Shapes, Mensuration, Powers, Direct and Indirect Proportions, Factorization, Graph, Playing with numbers",
    description: "Improve your Class 8 math skills with Mathril's practice problems. Covering rational numbers, linear equations, quadrilaterals, practical geometry, data handling, squares and square roots, cube and cube roots, comparing quantities, algebraic expressions, shapes, mensuration, powers, direct and indirect proportions, factorization, graph, and playing with numbers.",
    keywords: "Mathril, Class 8, math practice, rational numbers, linear equations, quadrilaterals, practical geometry, data handling, squares and square roots, cube and cube roots, comparing quantities, algebraic expressions, shapes, mensuration, powers, direct and indirect proportions, factorization, graph, playing with numbers"
  },
  "Class 9": {
    title: "Class 9 Math Practice | Mathril - Number systems, Polynomials, Coordinate Geometry, Linear Equations in Two Variables, Lines and Angles, Triangles, Quadrilaterals, Areas of Parallelograms and Triangles, Circles, Heron Formula, Surface areas and volumes, Statistics, Probability",
    description: "Master Class 9 math topics with Mathril's practice problems, including number systems, polynomials, coordinate geometry, linear equations in two variables, lines and angles, triangles, quadrilaterals, areas of parallelograms and triangles, circles, Heron formula, surface areas and volumes, statistics, and probability.",
    keywords: "Mathril, Class 9, math practice, number systems, polynomials, coordinate geometry, linear equations in two variables, lines and angles, triangles, quadrilaterals, areas of parallelograms and triangles, circles, Heron formula, surface areas and volumes, statistics, probability"
  },
  "Class 10": {
    title: "Class 10 Math Practice | Mathril - Real Numbers, Polynomials, Linear Equations in Two Variables, Quadratic Equations, Arithmetic Progressions, Triangles, Coordinate Geometry, Trigonometry, Circles, Areas related to Circles, Surface areas and volumes, Statistics, Probability",
    description: "Boost your Class 10 math skills with Mathril's practice problems. Topics include real numbers, polynomials, linear equations in two variables, quadratic equations, arithmetic progressions, triangles, coordinate geometry, trigonometry, circles, areas related to circles, surface areas and volumes, statistics, and probability.",
    keywords: "Mathril, Class 10, math practice, real numbers, polynomials, linear equations in two variables, quadratic equations, arithmetic progressions, triangles, coordinate geometry, trigonometry, circles, areas related to circles, surface areas and volumes, statistics, probability"
  },
  "Class 11": {
    title: "Class 11 Math Practice | Mathril - Sets, Relations and functions 11, Trigonometric functions, Principle of mathematical induction, Complex numbers, Quadratic equations, Linear inequalities, Permutations and combinations, Binomial theorem, Sequences and series, Straight lines, Circle, Ellipse, Parabola, Hyperbola, Introduction to 3D geometry, Limits, Derivatives, Mathematical reasoning, Statistics, Probability",
    description: "Improve your Class 11 math skills with Mathril's practice problems. Covering sets, relations and functions, trigonometric functions, principle of mathematical induction, complex numbers, quadratic equations, linear inequalities, permutations and combinations, binomial theorem, sequences and series, straight lines, circle, ellipse, parabola, hyperbola, introduction to 3D geometry, limits, derivatives, mathematical reasoning, statistics, and probability.",
    keywords: "Mathril, Class 11, math practice, sets, relations and functions, trigonometric functions, principle of mathematical induction, complex numbers, quadratic equations, linear inequalities, permutations and combinations, binomial theorem, sequences and series, straight lines, circle, ellipse, parabola, hyperbola, 3D geometry, limits, derivatives, mathematical reasoning, statistics, probability"
  },
  "Class 12": {
    title: "Class 12 Math Practice | Mathril - Relations and functions 12, Inverse trigonometric functions, Matrices, Determinants, Continuity, Differentiability, Application of derivatives, Indefinite Integrals, Definite Integrals, Application of integrals, Differential equations, Vector algebra, Three dimensional geometry, Linear programming",
    description: "Master Class 12 math topics with Mathril's practice problems, including relations and functions, inverse trigonometric functions, matrices, determinants, continuity, differentiability, application of derivatives, indefinite integrals, definite integrals, application of integrals, differential equations, vector algebra, three dimensional geometry, and linear programming.",
    keywords: "Mathril, Class 12, math practice, relations and functions, inverse trigonometric functions, matrices, determinants, continuity, differentiability, application of derivatives, indefinite integrals, definite integrals, application of integrals, differential equations, vector algebra, three dimensional geometry, linear programming"
  }
};

export { NoOfQuestions as N, QuestionTimer as Q, chapters as a, classChapters as b, classes as c, icons as i, seoInfo as s };
//# sourceMappingURL=stores7-DtSDX9hG.js.map
