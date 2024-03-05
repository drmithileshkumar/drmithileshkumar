const contents = [
  {
    name: "MATHEMATICS II",
    url: "/courses/mathematics2",
    topics: [
      {
        name: "BASICS OF STATISTICS",
        url: "/courses/mathematics2/statistics",
        topics: [
          {
            name: "Measures of Central Tendency",
            url: "/courses/mathematics2/statistics/measures",
            topics: [
              {
                name: "Mean (AM, GM, HM)",
                url: "/courses/mathematics2/statistics/measures/mean"
              },
              {
                name: "Mode",
                url: "/courses/mathematics2/statistics/measures/mode"
              },
              {
                name: "Median",
                url: "/courses/mathematics2/statistics/measures/median"
              },
              {
                name: "Standard deviation",
                url: "/courses/mathematics2/statistics/measures/deviation"
              }
            ]
          },
          {
            name: "Correlation",
            url: "/courses/mathematics2/statistics/correlation",
            topics: [
              {
                name: "Bivariate Data",
                url: "/courses/mathematics2/statistics/correlation/bivariatedata"
              },
              {
                name: "Bivariate frequency distribution",
                url: "/courses/mathematics2/statistics/correlation/bivariatefrequency"
              },
              {
                name: "Correlation between two variables",
                url: "/courses/mathematics2/statistics/correlation/correlation2"
              },
              {
                name: "Karl Pearson's coefficient of correlation (r)",
                url: "/courses/mathematics2/statistics/correlation/pearson"
              },
              {
                name: "Spearman's rank correlation coefficient",
                url: "/courses/mathematics2/statistics/correlation/spearman"
              }
            ]
          },
          {
            name: "Regression",
            url: "/courses/mathematics2/statistics/regression",
            topics: [
              {
                name: "Lines of regression",
                url: "/courses/mathematics2/statistics/regression/regressionlines"
              },
              {
                name: "Least squares method",
                url: "/courses/mathematics2/statistics/regression/leastsquares"
              }
            ]
          }
        ]
      },
      {
        name: "PROBABILITY DISTRIBUTIONS",
        url: "",
        topics: [
          {
            name: "Prabability",
            url: "",
            topics: [
              {
                name: "Events",
                url: ""
              },
              {
                name: "Conditional Probability",
                url: ""
              },
              {
                name: "Independence",
                url: ""
              }
            ]
          },
          {
            name: "Distributions",
            url: "",
            topics: [
              {
                name: "Univariate Probability Distributionns",
                url: ""
              },
              {
                name: "Bivariate Probability Distribution",
                url: ""
              },
              {
                name: "Mathematical Expectation",
                url: ""
              },
              {
                name: "Bivariate distribution",
                url: ""
              },
              {
                name: "Conditional distribution",
                url: ""
              },
              {
                name: "Marginal distributions",
                url: ""
              }
            ]
          },
          {
            name: "Discrete distributions",
            url: "",
            topics: [
              {
                name: "Discrete uniform distribution",
                url: ""
              },
              {
                name: "Binomial distribution",
                url: ""
              },
              {
                name: "Poisson distribution",
                url: ""
              },
              {
                name: "Geometric distribution",
                url: ""
              }
            ]
          },
          {
            name: "Continuous distributions",
            url: "",
            topics: [
              {
                name: "Uniform distribution",
                url: ""
              },
              {
                name: "Normal distribution",
                url: ""
              },
              {
                name: "Exponential distribution",
                url: ""
              },
              {
                name: "Gamma distribution",
                url: ""
              }
            ]
          },
          {
            name: "Queueing theory",
            url: "",
            topics: [
              {
                name: "Introduction",
                url: ""
              }
            ]
          }
        ]
      },
      {
        name: "STATISTICAL INFERENCE",
        url: "",
        topics: [
          {
            name: "Significance",
            url: "",
            topics: [
              {
                name: "Test of significance",
                url: ""
              },
              {
                name: "Elements of Hypothesis Testing",
                url: ""
              },
              {
                name: "Null hypothesis",
                url: ""
              },
              {
                name: "Aleternative hypothesis",
                url: ""
              },
              {
                name: "Simple hypotheses",
                url: ""
              },
              {
                name: "Composite hypotheses",
                url: ""
              },
              {
                name: "Critical region",
                url: ""
              },
              {
                name: "Type I errors",
                url: ""
              },
              {
                name: "Type II errors",
                url: ""
              },
              {
                name: "Levels of significance and size",
                url: ""
              }
            ]
          },
          {
            name: "Analysis of Variance (ANOVA)",
            url: "",
            topics: [
              {
                name: "Introduction",
                url: ""
              },
              {
                name: "Heterogeneity",
                url: ""
              },
              {
                name: "Analysis of Variance",
                url: ""
              },
              {
                name: "Covariance",
                url: ""
              }
            ]
          },
          {
            name: "Hypotheses",
            url: "",
            topics: [
              {
                name: "Linear Hypothesis",
                url: ""
              },
              {
                name: "Orthogonal splitting of total variation",
                url: ""
              },
              {
                name: "Selection of Valid Error",
                url: ""
              }
            ]
          },
          {
            name: "Applications of ANOVA technique",
            url: "",
            topics: [
              {
                name: "One-way classified data",
                url: ""
              },
              {
                name: "Two-way classified data",
                url: ""
              }
            ]
          }
        ]
      },
      {
        name: "TIME SERIES ANALYSIS",
        url: "",
        topics: [
          {
            name: "Introduction",
            url: ""
          },
          {
            name: "Examples of time series from various fields",
            url: ""
          },
          {
            name: "Components of a times series",
            url: ""
          },
          {
            name: "Additive models",
            url: ""
          },
          {
            name: "Multiplicative models",
            url: ""
          },
          {
            name: "Trend and seasonal components",
            url: ""
          },
          {
            name: "Estimation of trend by linear filtering (single and weighted moving averages)",
            url: ""
          }
        ]
      },
      {
        name: "LINEAR PROGRAMMING",
        url: "",
        topics: [
          {
            name: "Meaning and scope of operations research",
            url: ""
          },
          {
            name: "Definition of general LPP",
            url: ""
          },
          {
            name: "Formulation of LPP",
            url: ""
          },
          {
            name: "Solution of LPP by graphical method",
            url: ""
          },
          {
            name: "Simplex algorithm",
            url: ""
          },
          {
            name: "Transportation",
            url: ""
          },
          {
            name: "Assignment problems",
            url: ""
          },
          {
            name: "Sequencing problems",
            url: ""
          }
        ]
      },
      {
        name: "PROJECT MANAGEMENT",
        url: "",
        topics: [
          {
            name: "CPM",
            url: ""
          },
          {
            name: "PERT",
            url: ""
          }
        ]
      }
    ]
  }
];
let contentNav = {
  "/courses/mathematics2": {
    "name": "MATHEMATICS II",
    "url": "/courses/mathematics2",
    "previous": "/courses/mathematics2",
    "next": "/courses/mathematics2/statistics"
  },
  "/courses/mathematics2/statistics": {
    "name": "BASICS OF STATISTICS",
    "url": "/courses/mathematics2/statistics",
    "previous": "/courses/mathematics2",
    "next": "/courses/mathematics2/statistics/measures"
  },
  "/courses/mathematics2/statistics/measures": {
    "name": "Measures of Central Tendency",
    "url": "/courses/mathematics2/statistics/measures",
    "previous": "/courses/mathematics2/statistics",
    "next": "/courses/mathematics2/statistics/measures/mean"
  },
  "/courses/mathematics2/statistics/measures/mean": {
    "name": "Mean (AM, GM, HM)",
    "url": "/courses/mathematics2/statistics/measures/mean",
    "previous": "/courses/mathematics2/statistics/measures",
    "next": "/courses/mathematics2/statistics/measures/mode"
  },
  "/courses/mathematics2/statistics/measures/mode": {
    "name": "Mode",
    "url": "/courses/mathematics2/statistics/measures/mode",
    "previous": "/courses/mathematics2/statistics/measures/mean",
    "next": "/courses/mathematics2/statistics/measures/median"
  },
  "/courses/mathematics2/statistics/measures/median": {
    "name": "Median",
    "url": "/courses/mathematics2/statistics/measures/median",
    "previous": "/courses/mathematics2/statistics/measures/mode",
    "next": "/courses/mathematics2/statistics/measures/deviation"
  },
  "/courses/mathematics2/statistics/measures/deviation": {
    "name": "Standard deviation",
    "url": "/courses/mathematics2/statistics/measures/deviation",
    "previous": "/courses/mathematics2/statistics/measures/median",
    "next": "/courses/mathematics2/statistics/correlation"
  },
  "/courses/mathematics2/statistics/correlation": {
    "name": "Correlation",
    "url": "/courses/mathematics2/statistics/correlation",
    "previous": "/courses/mathematics2/statistics/measures/deviation",
    "next": "/courses/mathematics2/statistics/correlation/bivariatedata"
  },
  "/courses/mathematics2/statistics/correlation/bivariatedata": {
    "name": "Bivariate Data",
    "url": "/courses/mathematics2/statistics/correlation/bivariatedata",
    "previous": "/courses/mathematics2/statistics/correlation",
    "next": "/courses/mathematics2/statistics/correlation/bivariatefrequency"
  },
  "/courses/mathematics2/statistics/correlation/bivariatefrequency": {
    "name": "Bivariate frequency distribution",
    "url": "/courses/mathematics2/statistics/correlation/bivariatefrequency",
    "previous": "/courses/mathematics2/statistics/correlation/bivariatedata",
    "next": "/courses/mathematics2/statistics/correlation/correlation2"
  },
  "/courses/mathematics2/statistics/correlation/correlation2": {
    "name": "Correlation between two variables",
    "url": "/courses/mathematics2/statistics/correlation/correlation2",
    "previous": "/courses/mathematics2/statistics/correlation/bivariatefrequency",
    "next": "/courses/mathematics2/statistics/correlation/pearson"
  },
  "/courses/mathematics2/statistics/correlation/pearson": {
    "name": "Karl Pearson's coefficient of correlation (r)",
    "url": "/courses/mathematics2/statistics/correlation/pearson",
    "previous": "/courses/mathematics2/statistics/correlation/correlation2",
    "next": "/courses/mathematics2/statistics/correlation/spearman"
  },
  "/courses/mathematics2/statistics/correlation/spearman": {
    "name": "Spearman's rank correlation coefficient",
    "url": "/courses/mathematics2/statistics/correlation/spearman",
    "previous": "/courses/mathematics2/statistics/correlation/pearson",
    "next": "/courses/mathematics2/statistics/regression"
  },
  "/courses/mathematics2/statistics/regression": {
    "name": "Regression",
    "url": "/courses/mathematics2/statistics/regression",
    "previous": "/courses/mathematics2/statistics/correlation/spearman",
    "next": "/courses/mathematics2/statistics/regression/regressionlines"
  },
  "/courses/mathematics2/statistics/regression/regressionlines": {
    "name": "Lines of regression",
    "url": "/courses/mathematics2/statistics/regression/regressionlines",
    "previous": "/courses/mathematics2/statistics/regression",
    "next": "/courses/mathematics2/statistics/regression/leastsquares"
  },
  "/courses/mathematics2/statistics/regression/leastsquares": {
    "name": "Least squares method",
    "url": "/courses/mathematics2/statistics/regression/leastsquares",
    "previous": "/courses/mathematics2/statistics/regression/regressionlines",
    "next": ""
  },
  "": {
    "name": "PERT",
    "url": "",
    "previous": "",
    "next": ""
  }
};
export {
  contents as a,
  contentNav as c
};
