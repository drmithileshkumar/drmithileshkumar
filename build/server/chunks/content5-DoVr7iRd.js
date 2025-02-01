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
        name: "PROBABILITY THEORY",
        url: "/courses/mathematics2/probabilitytheory",
        topics: [
          {
            name: "Probability",
            url: "/courses/mathematics2/probabilitytheory/probability",
            topics: [
              {
                name: "Events",
                url: "/courses/mathematics2/probabilitytheory/probability/events"
              },
              {
                name: "Conditional Probability",
                url: "/courses/mathematics2/probabilitytheory/probability/conditional"
              },
              {
                name: "Practice Problems",
                url: "/courses/mathematics2/probabilitytheory/probability/practice"
              }
            ]
          },
          {
            name: "Distributions",
            url: "/courses/mathematics2/probabilitytheory/distributions",
            topics: [
              {
                name: "Joint distribution",
                url: "/courses/mathematics2/probabilitytheory/distributions/joint"
              },
              {
                name: "Binomial distribution",
                url: "/courses/mathematics2/probabilitytheory/distributions/binomial"
              },
              {
                name: "Continuous distribution",
                url: "/courses/mathematics2/probabilitytheory/distributions/continuous"
              },
              {
                name: "Normal distribution",
                url: "/courses/mathematics2/probabilitytheory/distributions/normal"
              },
              {
                name: "Poisson distribution",
                url: "/courses/mathematics2/probabilitytheory/distributions/poisson"
              }
            ]
          }
          // {
          //     name: "Discrete distributions",
          //     url: "",
          //     topics: [
          //         {
          //             name: "Discrete uniform distribution",
          //             url: ""
          //         },
          //         {
          //             name: "Binomial distribution",
          //             url: ""
          //         },
          //         {
          //             name: "Poisson distribution",
          //             url: ""
          //         },
          //         {
          //             name: "Geometric distribution",
          //             url: ""
          //         }
          //     ]
          // },
          // {
          //     name: "Continuous distributions",
          //     url: "",
          //     topics: [
          //         {
          //             name: "Uniform distribution",
          //             url: ""
          //         },
          //         {
          //             name: "Normal distribution",
          //             url: ""
          //         },
          //         {
          //             name: "Exponential distribution",
          //             url: ""
          //         },
          //         {
          //             name: "Gamma distribution",
          //             url: ""
          //         }
          //     ]
          // },
          // {
          //     name: "Queueing theory",
          //     url: "",
          //     topics: [
          //         {
          //             name: 'Introduction',
          //             url: ''
          //         }
          //     ]
          // }
        ]
      },
      {
        name: "STATISTICAL INFERENCE",
        url: "/courses/mathematics2/inference",
        topics: [
          {
            name: "Significance",
            url: "/courses/mathematics2/inference/significance",
            topics: [
              {
                name: "Sampling",
                url: "/courses/mathematics2/inference/significance/sampling"
              },
              {
                name: "Hypotheses",
                url: "/courses/mathematics2/inference/significance/hypotheses"
              },
              {
                name: "Tests of hypothesis and significance",
                url: "/courses/mathematics2/inference/significance/tests"
              },
              {
                name: "Type I and Type II errors",
                url: "/courses/mathematics2/inference/significance/types"
              },
              {
                name: "Level of significance",
                url: "/courses/mathematics2/inference/significance/level"
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
              },
              {
                name: "Linear Hypothesis",
                url: ""
              },
              {
                name: "One-way classified data",
                url: ""
              },
              {
                name: "Two-way classified data",
                url: ""
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
                name: "Estimation of trend",
                url: ""
              }
            ]
          },
          {
            name: "Practice",
            url: "/courses/mathematics2/inference/practice"
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
      // {
      //     name: "PROJECT MANAGEMENT",
      //     url: "",
      //     topics: [
      //         {
      //             name: 'CPM',
      //             url: ""
      //         },
      //         {
      //             name: 'PERT',
      //             url: ''
      //         }
      //     ]
      // },
      {
        name: "ASSIGNMENT 1",
        url: "/courses/mathematics2/assignment1"
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
    "next": "/courses/mathematics2/probabilitytheory"
  },
  "/courses/mathematics2/probabilitytheory": {
    "name": "PROBABILITY THEORY",
    "url": "/courses/mathematics2/probabilitytheory",
    "previous": "/courses/mathematics2/statistics/regression/leastsquares",
    "next": "/courses/mathematics2/probabilitytheory/probability"
  },
  "/courses/mathematics2/probabilitytheory/probability": {
    "name": "Probability",
    "url": "/courses/mathematics2/probabilitytheory/probability",
    "previous": "/courses/mathematics2/probabilitytheory",
    "next": "/courses/mathematics2/probabilitytheory/probability/events"
  },
  "/courses/mathematics2/probabilitytheory/probability/events": {
    "name": "Events",
    "url": "/courses/mathematics2/probabilitytheory/probability/events",
    "previous": "/courses/mathematics2/probabilitytheory/probability",
    "next": "/courses/mathematics2/probabilitytheory/probability/conditional"
  },
  "/courses/mathematics2/probabilitytheory/probability/conditional": {
    "name": "Conditional Probability",
    "url": "/courses/mathematics2/probabilitytheory/probability/conditional",
    "previous": "/courses/mathematics2/probabilitytheory/probability/events",
    "next": "/courses/mathematics2/probabilitytheory/probability/practice"
  },
  "/courses/mathematics2/probabilitytheory/probability/practice": {
    "name": "Practice Problems",
    "url": "/courses/mathematics2/probabilitytheory/probability/practice",
    "previous": "/courses/mathematics2/probabilitytheory/probability/conditional",
    "next": "/courses/mathematics2/probabilitytheory/distributions"
  },
  "/courses/mathematics2/probabilitytheory/distributions": {
    "name": "Distributions",
    "url": "/courses/mathematics2/probabilitytheory/distributions",
    "previous": "/courses/mathematics2/probabilitytheory/probability/practice",
    "next": "/courses/mathematics2/probabilitytheory/distributions/joint"
  },
  "/courses/mathematics2/probabilitytheory/distributions/joint": {
    "name": "Joint distribution",
    "url": "/courses/mathematics2/probabilitytheory/distributions/joint",
    "previous": "/courses/mathematics2/probabilitytheory/distributions",
    "next": "/courses/mathematics2/probabilitytheory/distributions/binomial"
  },
  "/courses/mathematics2/probabilitytheory/distributions/binomial": {
    "name": "Binomial distribution",
    "url": "/courses/mathematics2/probabilitytheory/distributions/binomial",
    "previous": "/courses/mathematics2/probabilitytheory/distributions/joint",
    "next": "/courses/mathematics2/probabilitytheory/distributions/continuous"
  },
  "/courses/mathematics2/probabilitytheory/distributions/continuous": {
    "name": "Continuous distribution",
    "url": "/courses/mathematics2/probabilitytheory/distributions/continuous",
    "previous": "/courses/mathematics2/probabilitytheory/distributions/binomial",
    "next": "/courses/mathematics2/probabilitytheory/distributions/normal"
  },
  "/courses/mathematics2/probabilitytheory/distributions/normal": {
    "name": "Normal distribution",
    "url": "/courses/mathematics2/probabilitytheory/distributions/normal",
    "previous": "/courses/mathematics2/probabilitytheory/distributions/continuous",
    "next": "/courses/mathematics2/probabilitytheory/distributions/poisson"
  },
  "/courses/mathematics2/probabilitytheory/distributions/poisson": {
    "name": "Poisson distribution",
    "url": "/courses/mathematics2/probabilitytheory/distributions/poisson",
    "previous": "/courses/mathematics2/probabilitytheory/distributions/normal",
    "next": "/courses/mathematics2/inference"
  },
  "/courses/mathematics2/inference": {
    "name": "Statistical Inference",
    "url": "/courses/mathematics2/inference",
    "previous": "/courses/mathematics2/probabilitytheory/distributions/poisson",
    "next": "/courses/mathematics2/inference/significance"
  },
  "/courses/mathematics2/inference/significance": {
    "name": "Significance",
    "url": "/courses/mathematics2/inference/significance",
    "previous": "/courses/mathematics2/inference",
    "next": "/courses/mathematics2/inference/significance/sampling"
  },
  "/courses/mathematics2/inference/significance/sampling": {
    "name": "Sampling",
    "url": "/courses/mathematics2/inference/significance/sampling",
    "previous": "/courses/mathematics2/inference/significance",
    "next": "/courses/mathematics2/inference/significance/hypotheses"
  },
  "/courses/mathematics2/inference/significance/hypotheses": {
    "name": "Hypotheses",
    "url": "/courses/mathematics2/inference/significance/hypotheses",
    "previous": "/courses/mathematics2/inference/significance/sampling",
    "next": "/courses/mathematics2/inference/significance/tests"
  },
  "/courses/mathematics2/inference/significance/tests": {
    "name": "Tests of hypotheses and significance",
    "url": "/courses/mathematics2/inference/significance/tests",
    "previous": "/courses/mathematics2/inference/significance/hypotheses",
    "next": "/courses/mathematics2/inference/significance/types"
  },
  "/courses/mathematics2/inference/significance/types": {
    "name": "Type I and Type II errors",
    "url": "/courses/mathematics2/inference/significance/types",
    "previous": "/courses/mathematics2/inference/significance/tests",
    "next": "/courses/mathematics2/inference/significance/level"
  },
  "/courses/mathematics2/inference/significance/level": {
    "name": "Level of significance",
    "url": "/courses/mathematics2/inference/significance/level",
    "previous": "/courses/mathematics2/inference/significance/types",
    "next": ""
  },
  "/courses/mathematics2/inference/practice": {
    "name": "Practice",
    "url": "/courses/mathematics2/inference/practice",
    "previous": "/courses/mathematics2/inference/significance/level",
    "next": ""
  },
  "": {
    "name": "PERT",
    "url": "",
    "previous": "",
    "next": ""
  },
  "/courses/mathematics2/assignment1": {
    "name": "Assignment 1",
    "url": "/courses/mathematics2/assignment1",
    "previous": "",
    "next": ""
  }
};

export { contents as a, contentNav as c };
//# sourceMappingURL=content5-DoVr7iRd.js.map
