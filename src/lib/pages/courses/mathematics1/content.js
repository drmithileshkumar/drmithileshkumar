//@ts-nocheck
export const contents = [
    {
        name: 'MATHEMATICS I',
        url: '/courses/mathematics1',
        topics: [
            {
                name: 'MATHEMATICAL THINKING',
                url: '/courses/mathematics1/thinking',
                topics: [
                    {
                        name: "Introduction to logic",
                        url: "/courses/mathematics1/thinking/logic"
                    },
                    {
                        name: "Propositional logic",
                        url: "/courses/mathematics1/thinking/propositional"
                    },
                    {
                        name: "Predicate logic",
                        url: "/courses/mathematics1/thinking/predicate"
                    },
                    {
                        name: "Inference",
                        url: "/courses/mathematics1/thinking/inference"
                    },
                    {
                        name: "Number theory",
                        url: "/courses/mathematics1/thinking/number"
                    },
                    {
                        name: "Geometry",
                        url: "/courses/mathematics1/thinking/geometry"
                    }
                ]
            },
            {
                name: "SET THEORY AND FUNCTIONS",
                url: '/courses/mathematics1/functions',
                topics: [
                    {
                        name: "Sets",
                        url: "/courses/mathematics1/functions/sets"
                    },
                    {
                        name: "Relations",
                        url: "/courses/mathematics1/functions/relations"
                    },
                    {
                        name: "Functions",
                        url: "/courses/mathematics1/functions/functions"
                    }
                ]
            },
            {
                name: 'GRAPH THEORY',
                url: '/courses/mathematics1/graphs',
                topics: [
                    {
                        name: "Basics",
                        url: "/courses/mathematics1/graphs/basics"
                    },
                    {
                        name: "Subgraphs",
                        url: "/courses/mathematics1/graphs/subgraphs"
                    },
                    {
                        name: "Special graphs",
                        url: "/courses/mathematics1/graphs/special"
                    },
                    {
                        name: "Graph coloring",
                        url: "/courses/mathematics1/graphs/coloring"
                    },
                    {
                        name: "Paths",
                        url: "/courses/mathematics1/graphs/paths"
                    },
                    {
                        name: "Isomorphism",
                        url: "/courses/mathematics1/graphs/isomorphism"
                    }
                ]
            },
            {
                name: "PROBABILITY AND STATISTICS",
                url: "/courses/mathematics1/probability",
                topics: [
                    {
                        name: "Combinatorics",
                        url: "/courses/mathematics1/probability/combinatorics"
                    },
                    {
                        name: "Basic statistics",
                        url: "/courses/mathematics1/probability/statistics"
                    },
                    {
                        name: "Probability",
                        url: "/courses/mathematics1/probability/probability"
                    }
                ]
            },
            {
                name: "CALCULUS",
                url: "/courses/mathematics1/calculus",
                topics: [
                    {
                        name: "Limits and continuity",
                        url: "/courses/mathematics1/calculus/limits"
                    },
                    {
                        name: "Differential calculus",
                        url: "/courses/mathematics1/calculus/differential"
                    },
                    {
                        name: "Integral calculus",
                        url: "/courses/mathematics1/calculus/integral"
                    }
                ]
            }
        ]
    },
    
]
export let contentNav = {
    "/courses/mathematics1": {
        "name": "MATHEMATICS I",
        "url": "/courses/mathematics1",
        "previous": "/courses/mathematics1",
        "next": "/courses/mathematics1/thinking"
    },
    "/courses/mathematics1/thinking": {
        "name": "MATHEMATICAL THINKING",
        "url": "/courses/mathematics1/thinking",
        "previous": "/courses/mathematics1",
        "next": "/courses/mathematics1/thinking/logic"
    },
    "/courses/mathematics1/thinking/logic": {
        "name": "Introduction to logic",
        "url": "/courses/mathematics1/thinking/logic",
        "previous": "/courses/mathematics1/thinking",
        "next": "/courses/mathematics1/thinking/propositional"
    },
    "/courses/mathematics1/thinking/propositional": {
        "name": "Propositional logic",
        "url": "/courses/mathematics1/thinking/propositional",
        "previous": "/courses/mathematics1/thinking/logic",
        "next": "/courses/mathematics1/thinking/predicate"
    },
    "/courses/mathematics1/thinking/predicate": {
        "name": "Predicate logic",
        "url": "/courses/mathematics1/thinking/predicate",
        "previous": "/courses/mathematics1/thinking/propositional",
        "next": "/courses/mathematics1/thinking/inference"
    },
    "/courses/mathematics1/thinking/inference": {
        "name": "Inference",
        "url": "/courses/mathematics1/thinking/inference",
        "previous": "/courses/mathematics1/thinking/predicate",
        "next": "/courses/mathematics1/thinking/number"
    },
    "/courses/mathematics1/thinking/number": {
        "name": "Number theory",
        "url": "/courses/mathematics1/thinking/number",
        "previous": "/courses/mathematics1/thinking/inference",
        "next": "/courses/mathematics1/thinking/geometry"
    },
    "/courses/mathematics1/thinking/geometry": {
        "name": "Geometry",
        "url": "/courses/mathematics1/thinking/geometry",
        "previous": "/courses/mathematics1/thinking/number",
        "next": "/courses/mathematics1/functions"
    },
    "/courses/mathematics1/functions": {
        "name": "SET THEORY AND FUNCTIONS",
        "url": "/courses/mathematics1/functions",
        "previous": "/courses/mathematics1/thinking/geometry",
        "next": "/courses/mathematics1/functions/sets"
    },
    "/courses/mathematics1/functions/sets": {
        "name": "Sets",
        "url": "/courses/mathematics1/functions/sets",
        "previous": "/courses/mathematics1/functions",
        "next": "/courses/mathematics1/functions/relations"
    },
    "/courses/mathematics1/functions/relations": {
        "name": "Relations",
        "url": "/courses/mathematics1/functions/relations",
        "previous": "/courses/mathematics1/functions/sets",
        "next": "/courses/mathematics1/functions/functions"
    },
    "/courses/mathematics1/functions/functions": {
        "name": "Functions",
        "url": "/courses/mathematics1/functions/functions",
        "previous": "/courses/mathematics1/functions/relations",
        "next": "/courses/mathematics1/graphs"
    },
    "/courses/mathematics1/graphs": {
        "name": "GRAPH THEORY",
        "url": "/courses/mathematics1/graphs",
        "previous": "/courses/mathematics1/functions/functions",
        "next": "/courses/mathematics1/graphs/basics"
    },
    "/courses/mathematics1/graphs/basics": {
        "name": "Basics",
        "url": "/courses/mathematics1/graphs/basics",
        "previous": "/courses/mathematics1/graphs",
        "next": "/courses/mathematics1/graphs/subgraphs"
    },
    "/courses/mathematics1/graphs/subgraphs": {
        "name": "Subgraphs",
        "url": "/courses/mathematics1/graphs/subgraphs",
        "previous": "/courses/mathematics1/graphs/basics",
        "next": "/courses/mathematics1/graphs/special"
    },
    "/courses/mathematics1/graphs/special": {
        "name": "Special graphs",
        "url": "/courses/mathematics1/graphs/special",
        "previous": "/courses/mathematics1/graphs/subgraphs",
        "next": "/courses/mathematics1/graphs/coloring"
    },
    "/courses/mathematics1/graphs/coloring": {
        "name": "Graph coloring",
        "url": "/courses/mathematics1/graphs/coloring",
        "previous": "/courses/mathematics1/graphs/special",
        "next": "/courses/mathematics1/graphs/paths"
    },
    "/courses/mathematics1/graphs/paths": {
        "name": "Paths",
        "url": "/courses/mathematics1/graphs/paths",
        "previous": "/courses/mathematics1/graphs/coloring",
        "next": "/courses/mathematics1/graphs/isomorphism"
    },
    "/courses/mathematics1/graphs/isomorphism": {
        "name": "Isomorphism",
        "url": "/courses/mathematics1/graphs/isomorphism",
        "previous": "/courses/mathematics1/graphs/paths",
        "next": "/courses/mathematics1/probability"
    },
    "/courses/mathematics1/probability": {
        "name": "PROBABILITY AND STATISTICS",
        "url": "/courses/mathematics1/probability",
        "previous": "/courses/mathematics1/graphs/isomorphism",
        "next": "/courses/mathematics1/probability/combinatorics"
    },
    "/courses/mathematics1/probability/combinatorics": {
        "name": "Combinatorics",
        "url": "/courses/mathematics1/probability/combinatorics",
        "previous": "/courses/mathematics1/probability",
        "next": "/courses/mathematics1/probability/statistics"
    },
    "/courses/mathematics1/probability/statistics": {
        "name": "Basic statistics",
        "url": "/courses/mathematics1/probability/statistics",
        "previous": "/courses/mathematics1/probability/combinatorics",
        "next": "/courses/mathematics1/probability/probability"
    },
    "/courses/mathematics1/probability/probability": {
        "name": "Probability",
        "url": "/courses/mathematics1/probability/probability",
        "previous": "/courses/mathematics1/probability/statistics",
        "next": "/courses/mathematics1/calculus"
    },
    "/courses/mathematics1/calculus": {
        "name": "CALCULUS",
        "url": "/courses/mathematics1/calculus",
        "previous": "/courses/mathematics1/probability/probability",
        "next": "/courses/mathematics1/calculus/limits"
    },
    "/courses/mathematics1/calculus/limits": {
        "name": "Limits and continuity",
        "url": "/courses/mathematics1/calculus/limits",
        "previous": "/courses/mathematics1/calculus",
        "next": "/courses/mathematics1/calculus/differential"
    },
    "/courses/mathematics1/calculus/differential": {
        "name": "Differential calculus",
        "url": "/courses/mathematics1/calculus/differential",
        "previous": "/courses/mathematics1/calculus/limits",
        "next": "/courses/mathematics1/calculus/integral"
    },
    "/courses/mathematics1/calculus/integral": {
        "name": "Integral calculus",
        "url": "/courses/mathematics1/calculus/integral",
        "previous": "/courses/mathematics1/calculus/differential",
        "next": "/courses/mathematics1/calculus/integral"
    }
}

// let contentArray = [];
// let getArray = (subContent) => {
//     contentArray = [...contentArray, {name: subContent.name, url: subContent.url}];
//     if(!subContent.topics) return;
//     else {
//         for(let i = 0; i < subContent.topics.length; i++) {
//             getArray(subContent.topics[i]);
//         }
//     }
// }
// getArray(contents[0]);

// let withSides = contentArray.map((u, i) => {
//     return {
//         name: u.name,
//         url: u.url,
//         previous: i > 0 ? contentArray[i - 1].url : u.url,
//         next: i < contentArray.length - 1 ? contentArray[i + 1].url : u.url
//     }
// })
// let objectWithSides = {};
// for(let i = 0; i < withSides.length; i++) {
//     objectWithSides[withSides[i].url] = withSides[i];
// }
// console.log(objectWithSides)